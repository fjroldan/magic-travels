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
# Run Docker Compose
#------------------------------------------

echo "Running Docker Back-end Compose..."
docker compose -f back-compose.yml up --build