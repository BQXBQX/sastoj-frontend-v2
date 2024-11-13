# Step 1: Build the app using Node.js and pnpm (build stage)
FROM node:18 AS build-libs-base

# Set working directory to /app
WORKDIR /app

# Set npm registry to a faster mirror (e.g., npmmirror for China)
RUN npm config set registry https://registry.npmmirror.com

# Copy only package.json and package-lock.json (or pnpm-lock.yaml) to take advantage of Docker's cache
COPY package.json ./
# COPY package-lock.json ./ # If you use package-lock.json, uncomment this line
# If you use pnpm, uncomment this line
COPY pnpm-lock.yaml ./

# Install application dependencies (this layer will be cached unless package.json changes)
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application files to the container
COPY . .

# Build the application (for example, for React, this will generate static files in the `dist` folder)
RUN npm run build

# Step 2: Serve the app using serve (production stage)
FROM node:18 AS production

# Set working directory to /app in the production image
WORKDIR /app

# Copy the build output (e.g., the dist folder) from the build stage into the production image
COPY --from=build /app/dist ./dist

# Set npm registry to a faster mirror (e.g., npmmirror for China)
RUN npm config set registry https://registry.npmmirror.com

# Install `serve` globally to serve static files in production
RUN npm install -g serve

# Expose port 3000 (default port for `serve`)
EXPOSE 10010

# Use `serve` to serve the static files from the `dist` folder on port 3000
CMD ["serve", "-s", "dist", "-l", "10010"]
