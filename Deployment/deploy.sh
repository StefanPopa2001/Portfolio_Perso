#!/usr/bin/env bash

# Safer deploy script: build image, and only if build succeeds replace running container
set -o errexit
set -o pipefail
set -o nounset

echo "🏗️  Building and deploying portfolio container..."

# Navigate to the Docker directory (relative to this script)
cd "$(dirname "$0")/../Docker"

COMPOSE_FILE="docker-compose.yaml"
SERVICE_NAME="portfolio"

echo "📦 Building Docker image (this may take a while)..."
# Run compose build first and capture result
if ! docker-compose -f "$COMPOSE_FILE" build --no-cache; then
	echo "❌ Build failed. Aborting deploy."
	exit 2
fi

echo "✅ Build succeeded. Proceeding to replace running container..."

# If container is running, stop and remove it gracefully
if docker-compose -f "$COMPOSE_FILE" ps --services --filter "status=running" | grep -q "^${SERVICE_NAME}$"; then
	echo "🛑 Stopping running container for service: $SERVICE_NAME"
	docker-compose -f "$COMPOSE_FILE" stop "$SERVICE_NAME" || true
fi

if docker-compose -f "$COMPOSE_FILE" ps -a --services | grep -q "^${SERVICE_NAME}$"; then
	echo "🧹 Removing existing container for service: $SERVICE_NAME"
	docker-compose -f "$COMPOSE_FILE" rm -f "$SERVICE_NAME" || true
fi

echo "🚀 Starting new container (detached)..."
docker-compose -f "$COMPOSE_FILE" up -d --no-build "$SERVICE_NAME"

echo "🔍 Checking container status..."
docker-compose -f "$COMPOSE_FILE" ps "$SERVICE_NAME" || true

echo "✅ Portfolio container is now running (if no errors were shown)."
echo "🌐 Access the portfolio at: https://popa-stefan.be/portfolio"
echo ""
echo "To view logs: docker-compose -f $(pwd)/$COMPOSE_FILE logs -f $SERVICE_NAME"
echo "To stop: docker-compose -f $(pwd)/$COMPOSE_FILE down"