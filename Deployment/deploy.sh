#!/bin/bash

# Script to build and deploy the portfolio Docker container

set -e  # Exit on any error

echo "🏗️  Building and deploying portfolio container..."

# Navigate to the Docker directory
cd "$(dirname "$0")/../Docker"

echo "📦 Building Docker image and starting container..."
docker-compose up --build -d

echo "🔍 Checking container status..."
docker-compose ps

echo "✅ Portfolio container is now running!"
echo "🌐 Access the portfolio at: https://popa-stefan.be/portfolio"
echo ""
echo "To view logs: docker-compose -f $(pwd)/docker-compose.yaml logs -f portfolio"
echo "To stop: docker-compose -f $(pwd)/docker-compose.yaml down"