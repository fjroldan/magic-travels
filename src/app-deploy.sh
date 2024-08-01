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
REACT_APP_EDIT_USERS=http://$HOST_IP:3002/remoteEditUsers.js

# Remote entry file to load the Get Tasks MF
REACT_APP_GET_TASKS=http://$HOST_IP:3003/remoteEntry.js

# Remote entry file to load the Edit Tasks MF
REACT_APP_EDIT_TASKS=http://$HOST_IP:3004/remoteEditTasks.js

# Remote entry file to load the Get Reports MF
REACT_APP_GET_REPORTS=http://$HOST_IP:3005/remoteEntry.js

# Remote entry file to load the Edit Reports MF
REACT_APP_EDIT_REPORTS=http://$HOST_IP:3006/remoteEditReports.js"

# Create the .env file and write the content to it
echo "$ENV_CONTENT" > admin-shell/.env

# Print a message to the console
echo ".env file has been created in Shell."

# Go to the admin-shell directory
cd admin-shell
echo "Building Shell MF..."

# Build the Shell MF
npm run build
echo "Shell MF has been built."

# Go back to the root directory
cd ..

#------------------------------------------
# Setup Users MS
#------------------------------------------

# Check if application.properties file exists and delete it
if [[ -f "tasks-ms/src/main/resources/application.properties" ]]; then
  echo "Deleting existing application.properties file of Users MS..."
  rm users-ms/src/main/resources/application.properties
fi

# Define the content of the application.properties file
ENV_CONTENT="spring.application.name=users-ms
spring.datasource.url=jdbc:postgresql://$DB_HOST_IP:$PORT_DB/$NAME_DB
spring.datasource.username=$USER_DB
spring.datasource.password=$PASS_DB
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update"

# Create the application.properties file and write the content to it
echo "$ENV_CONTENT" > users-ms/src/main/resources/application.properties

# Print a message to the console
echo "application.properties file has been created in Users MS."

# Go to the users-ms directory
cd users-ms
echo "Building Users MS..."

# Build the Users MS
mvn clean package
echo "Users MS has been built."

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

# Build the Get Users MF
npm run build
echo "Get Users MF has been built."

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

# Build the Edit Users MF
npm run build --prod
echo "Edit Users MF has been built."

# Go back to the root directory
cd ..

#------------------------------------------
# Setup Tasks MS
#------------------------------------------

# Check if application.properties file exists and delete it
if [[ -f "tasks-ms/src/main/resources/application.properties" ]]; then
  echo "Deleting existing application.properties file of Tasks MS..."
  rm tasks-ms/src/main/resources/application.properties
fi

# Define the content of the application.properties file
ENV_CONTENT="spring.application.name=tasks-ms
spring.datasource.url=jdbc:postgresql://$DB_HOST_IP:$PORT_DB/$NAME_DB
spring.datasource.username=$USER_DB
spring.datasource.password=$PASS_DB
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update"

# Create the application.properties file and write the content to it
echo "$ENV_CONTENT" > tasks-ms/src/main/resources/application.properties

# Print a message to the console
echo "application.properties file has been created in Tasks MS."

# Go to the tasks-ms directory
cd tasks-ms
echo "Building Tasks MS..."

# Build the Tasks MS
mvn clean package
echo "Tasks MS has been built."

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

# Build the Get Tasks MF
npm run build
echo "Get Tasks MF has been built."

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

# Build the Edit Tasks MF
npm run build --prod
echo "Edit Tasks MF has been built."

# Go back to the root directory
cd ..

#------------------------------------------
# Setup Reports MS
#------------------------------------------

# Check if application.properties file exists and delete it
if [[ -f "reports-ms/src/main/resources/application.properties" ]]; then
  echo "Deleting existing application.properties file of Reports MS..."
  rm reports-ms/src/main/resources/application.properties
fi

# Define the content of the application.properties file
ENV_CONTENT="spring.application.name=reports-ms
spring.datasource.url=jdbc:postgresql://$DB_HOST_IP:$PORT_DB/$NAME_DB
spring.datasource.username=$USER_DB
spring.datasource.password=$PASS_DB
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update"

# Create the application.properties file and write the content to it
echo "$ENV_CONTENT" > reports-ms/src/main/resources/application.properties

# Print a message to the console
echo "application.properties file has been created in Reports MS."

# Go to the reports-ms directory
cd reports-ms
echo "Building Reports MS..."

# Build the Reports MS
mvn clean package
echo "Reports MS has been built."

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

# Build the Get Reports MF
npm run build
echo "Get Reports MF has been built."

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

# Build the Edit Reports MF
npm run build --prod
echo "Edit Reports MF has been built."

# Go back to the root directory
cd ..

#------------------------------------------
# Run Docker Compose
#------------------------------------------
echo "Running Docker Compose..."
docker compose -f app-compose.yml up --build