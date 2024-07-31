# Use a base image with Java installed
FROM openjdk:17-jdk-alpine

# Install Maven
RUN apk update && apk add maven

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven build file and the source code into the container
COPY pom.xml .
COPY src ./src

# Build the application
#RUN mvn clean package

# Copy the built JAR file from the target directory
COPY target/tasks-ms-0.0.1-SNAPSHOT.jar app.jar

# Specify the command to run the application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

# Expose port 8080
EXPOSE 8080