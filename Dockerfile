# Step 1: Build the app using Node.js and pnpm (build stage)
FROM node:20-alpine AS build

# Set working directory to /app
WORKDIR /app

# Set npm registry to a faster mirror (e.g., npmmirror for China)
RUN npm config set registry https://registry.npmmirror.com

# Copy only package.json and pnpm-lock.yaml for dependency installation
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Copy the rest of the application files to the container
COPY . .

# Install application dependencies (this layer will be cached unless package.json/pnpm-lock.yaml changes)
RUN pnpm install --frozen-lockfile

# Build the application (for example, for React, this will generate static files in the dist folder)
RUN pnpm run build

# Step 2: Serve the app using a smaller production image (production stage)
FROM oven/bun:latest AS production

# Set working directory to /app in the production image
WORKDIR /app

# Install production dependencies
RUN BUN_REGISTRY="https://registry.npmmirror.com" bun install express http-proxy-middleware --production

# Copy the build output (e.g., the dist folder) from the build stage into the production image
COPY --from=build /app/libs/remote-pages/dist ./remote_pages
COPY --from=build /app/libs/remote-components/dist ./remote_components
COPY --from=build /app/libs/remote-apis/dist ./remote_apis
COPY --from=build /app/apps/host-competition/dist ./host_competition
COPY --from=build /app/apps/host-management/dist ./host_management
COPY ./scripts/server.js .

# Expose port 12345
EXPOSE 12345

# Use Bun to run the server.js file
CMD ["bun", "run", "/app/server.js"]
