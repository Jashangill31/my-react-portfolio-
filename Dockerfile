# Use official node image as base
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Install the production image
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the container port
EXPOSE 5575

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
