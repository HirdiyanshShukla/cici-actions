# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all other files
COPY . .

# Expose port
EXPOSE 8000

# Start the app
CMD ["npm", "start"]
