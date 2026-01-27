# Use the official Node.js image as the base image
FROM node:24.12.0-alpine AS base

RUN corepack enable
# Set the working directory
WORKDIR /app
# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies for prod
FROM base AS prod-deps
RUN yarn workspaces focus --production

FROM base AS build-deps
# Install dependencies
RUN yarn install --immutable

FROM build-deps AS build
# Copy the rest of the application code
COPY . .
# Build the Next.js application
RUN yarn build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.mjs .

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "production"]
