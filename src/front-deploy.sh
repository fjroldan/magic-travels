#!/bin/bash

# Export all variables from the .env file
source .env

#------------------------------------------
# Checks
#------------------------------------------

# Check if HOST_IP is set
if [[ -z "$HOST_IP" ]]; then
  echo "HOST_IP environment variable is not set. Using localhost as default."
  HOST_IP="localhost"
else
  echo "Using HOST_IP environment variable: $HOST_IP"
fi

#------------------------------------------
# Setup Shell MF
#------------------------------------------

# Check if .env file exists and delete it
if [[ -f "admin-shell/.env" ]]; then
  echo "Deleting existing .env file of Shell..."
  rm admin-shell/.env
fi

# Define the content of the .env file
ENV_CONTENT="# File: .env
# Description: Local environment variables for Shell MF

# Remote entry file to load the Get Users MF
REACT_APP_GET_USERS=http://$HOST_IP:3001/remoteEntry.js

# Remote entry file to load the Edit Users MF
REACT_APP_EDIT_USERS=http://$HOST_IP:3002/remoteEntry.js

# Remote entry file to load the Get Tasks MF
REACT_APP_GET_TASKS=http://$HOST_IP:3003/remoteEntry.js

# Remote entry file to load the Edit Tasks MF
REACT_APP_EDIT_TASKS=http://$HOST_IP:3004/remoteEntry.js

# Remote entry file to load the Get Reports MF
REACT_APP_GET_REPORTS=http://$HOST_IP:3005/remoteEntry.js

# Remote entry file to load the Edit Reports MF
REACT_APP_EDIT_REPORTS=http://$HOST_IP:3006/remoteEntry.js"

# Create the .env file and write the content to it
echo "$ENV_CONTENT" > admin-shell/.env

# Print a message to the console
echo ".env file has been created in Shell."

# Go to the admin-shell directory
cd admin-shell
echo "Building Shell MF..."

# Run the application asinchronously
npm start &

# Wait for the application to start
echo "Shell MF has been built."
sleep 10
echo "Shell MF is running."

# Go back to the root directory
cd ..

#------------------------------------------
# Setup Get Users MF
#------------------------------------------

# Check if .env file exists and delete it
if [[ -f "get-users-mf/.env" ]]; then
  echo "Deleting existing .env file of Get Users..."
  rm get-users-mf/.env
fi

# Define the content of the .env file
ENV_CONTENT="# File: .env
# Description: Local environment variables for the frontend

# API base URL
REACT_APP_API_BASE_URL=http://$HOST_IP:7071"

# Create the .env file and write the content to it
echo "$ENV_CONTENT" > get-users-mf/.env

# Print a message to the console
echo ".env file has been created in Get Users."

# Go to the get-users-mf directory
cd get-users-mf
echo "Building Get Users MF..."

# Run the application asinchronously
npm start &

# Wait for the application to start
echo "Running Get Users MF..."
sleep 10
echo "Get Users MF is running."

# Go back to the root directory
cd ..

#------------------------------------------
# Setup Edit Users MF
#------------------------------------------

# Check if environment.prod.ts file exists and delete it
if [[ -f "edit-users-mf/src/environments/environment.prod.ts" ]]; then
  echo "Deleting existing environment.prod.ts file of Edit Users..."
  rm edit-users-mf/src/environments/environment.prod.ts
fi

# Define the content of the environment.prod.ts file
ENV_CONTENT="// File: environment.prod.ts
// Description: Local environment variables for the frontend
export const environment = {
  production: true,
  apiUrl: 'http://$HOST_IP:7071'
};"

# Create the environment.prod.ts file and write the content to it
echo "$ENV_CONTENT" > edit-users-mf/src/environments/environment.prod.ts

# Print a message to the console
echo "environment.prod.ts file has been created in Edith Users."

# Go to the edit-users-mf directory
cd edit-users-mf
echo "Building Edit Users MF..."

# Run the application asinchronously
npm start &

# Wait for the application to start
echo "Running Edit Users MF..."
sleep 10
echo "Edit Users MF is running."

# Go back to the root directory
cd ..

#------------------------------------------
# Setup Get Tasks MF
#------------------------------------------

# Check if .env file exists and delete it
if [[ -f "get-tasks-mf/.env" ]]; then
  echo "Deleting existing .env file of Get Tasks..."
  rm get-tasks-mf/.env
fi

# Define the content of the .env file
ENV_CONTENT="# File: .env
# Description: Local environment variables for the frontend

# API base URL
REACT_APP_API_BASE_URL=http://$HOST_IP:7072"

# Create the .env file and write the content to it
echo "$ENV_CONTENT" > get-tasks-mf/.env

# Print a message to the console
echo ".env file has been created in Get Tasks."

# Go to the get-tasks-mf directory
cd get-tasks-mf
echo "Building Get Tasks MF..."

# Run the application asinchronously
npm start &

# Wait for the application to start
echo "Running Get Tasks MF..."
sleep 10
echo "Get Tasks MF is running."

# Go back to the root directory
cd ..

#------------------------------------------
# Setup Edit Tasks MF
#------------------------------------------

# Check if environment.prod.ts file exists and delete it
if [[ -f "edit-tasks-mf/src/environments/environment.prod.ts" ]]; then
  echo "Deleting existing environment.prod.ts file of Edit Tasks..."
  rm edit-tasks-mf/src/environments/environment.prod.ts
fi

# Define the content of the environment.prod.ts file
ENV_CONTENT="// File: environment.prod.ts
// Description: Local environment variables for the frontend
export const environment = {
  production: true,
  apiUrl: 'http://$HOST_IP:7072'
};"

# Create the environment.prod.ts file and write the content to it
echo "$ENV_CONTENT" > edit-tasks-mf/src/environments/environment.prod.ts

# Print a message to the console
echo "environment.prod.ts file has been created in Edith Tasks."

# Go to the edit-tasks-mf directory
cd edit-tasks-mf
echo "Building Edit Tasks MF..."

# Run the application asinchronously
npm start &

# Wait for the application to start
echo "Running Edit Tasks MF..."
sleep 10
echo "Edit Tasks MF is running."

# Go back to the root directory
cd ..

#------------------------------------------
# Setup Get Reports MF
#------------------------------------------

# Check if .env file exists and delete it
if [[ -f "get-reports-mf/.env" ]]; then
  echo "Deleting existing .env file of Get Reports..."
  rm get-reports-mf/.env
fi

# Define the content of the .env file
ENV_CONTENT="# File: .env
# Description: Local environment variables for the frontend

# API base URL
REACT_APP_API_BASE_URL=http://$HOST_IP:7073"

# Create the .env file and write the content to it
echo "$ENV_CONTENT" > get-reports-mf/.env

# Print a message to the console
echo ".env file has been created in Get Reports."

# Go to the get-reports-mf directory
cd get-reports-mf
echo "Building Get Reports MF..."

# Install the dependencies
npm install

# Run the application asinchronously
npm start &

# Wait for the application to start
echo "Running Get Reports MF..."
sleep 10
echo "Get Reports MF is running."

# Go back to the root directory
cd ..

#------------------------------------------
# Setup Edit Reports MF
#------------------------------------------

# Check if environment.prod.ts file exists and delete it
if [[ -f "edit-reports-mf/src/environments/environment.prod.ts" ]]; then
  echo "Deleting existing environment.prod.ts file of Edit Reports..."
  rm edit-reports-mf/src/environments/environment.prod.ts
fi

# Define the content of the environment.prod.ts file
ENV_CONTENT="// File: environment.prod.ts
// Description: Local environment variables for the frontend
export const environment = {
  production: true,
  apiUrl: 'http://$HOST_IP:7073'
};"

# Create the environment.prod.ts file and write the content to it
echo "$ENV_CONTENT" > edit-reports-mf/src/environments/environment.prod.ts

# Print a message to the console
echo "environment.prod.ts file has been created in Edith Reports."

# Go to the edit-reports-mf directory
cd edit-reports-mf
echo "Building Edit Reports MF..."

# Run the application asinchronously
npm start &

# Wait for the application to start
echo "Running Edit Reports MF..."
sleep 10
echo "Edit Reports MF is running."

# Go back to the root directory
cd ..