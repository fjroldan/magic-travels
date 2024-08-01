#!/bin/bash

# Export all variables from the .env file
source .env

# Build the Docker image
docker compose -f db-compose.yml up --build