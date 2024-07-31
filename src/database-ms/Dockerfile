# File: Dockerfile
# Description: Dockerfile for the database container

# Use the official postgres image
FROM postgres

# Set environment variables
ENV NAME_DB=$NAME_DB
ENV USER_DB=$USER_DB
ENV PASS_DB=$PASS_DB

# Copy the database setup script
COPY db_setup.sh /docker-entrypoint-initdb.d/db_setup.sh
