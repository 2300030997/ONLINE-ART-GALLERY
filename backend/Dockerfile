# --- Build Stage: Install dependencies and compile assets ---
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and install all dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# --- Production/Run Stage: Use a slim image for runtime ---
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/server.js ./server.js
COPY --from=build /app/app.js ./app.js
COPY --from=build /app/config ./config
COPY --from=build /app/controllers ./controllers
COPY --from=build /app/middleware ./middleware
COPY --from=build /app/models ./models
COPY --from=build /app/routes ./routes
COPY --from=build /app/utils ./utils

# Expose the application port
EXPOSE 8081

# Command to run the application
CMD [ "node", "server.js" ]