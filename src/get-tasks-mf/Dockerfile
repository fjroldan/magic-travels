# Use an Nginx image to serve the React app
FROM nginx:alpine
COPY build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]