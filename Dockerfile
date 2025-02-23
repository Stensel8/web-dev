FROM nginx:1.27.4-alpine-slim

# Debugging only: install bash and nano (uncomment if needed)
# RUN apk update && apk add --no-cache bash nano

# Copy webroot files to the Nginx html directory
COPY ./webroot /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Add a healthcheck to ensure Nginx is running properly
HEALTHCHECK CMD curl -f http://localhost/ || exit 1

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
