# Stage 1: Build the Angular application
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire application source code
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Stage 2: Set up the development environment to run ng serve
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire application source code
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Expose the port Angular will use (typically 4200)
EXPOSE 4200

# Start the Angular app using ng serve
CMD ["ng", "serve", "--host", "0.0.0.0"]
# Stage 1: Build the Angular application
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire application source code
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Stage 2: Set up the development environment to run ng serve
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire application source code
COPY . .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Expose the port Angular will use (typically 4200)
EXPOSE 4200

# Start the Angular app using ng serve
CMD ["ng", "serve", "--host", "0.0.0.0"]
