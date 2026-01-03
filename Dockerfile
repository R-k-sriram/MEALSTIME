# Use lightweight Nginx image
FROM nginx:alpine

# Set working directory inside container
WORKDIR /usr/share/nginx/html

# Remove default Nginx website
RUN rm -rf ./*

# Copy all website files and folders
COPY . .

# Expose port 80
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
