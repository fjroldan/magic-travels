# Use an Nginx image to serve the React app
FROM nginx:alpine

# Copy the built Angular app to the NGINX html directory
COPY dist/edit-users-mf /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]