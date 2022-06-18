# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:14.17.3
# Set the working directory to /server
WORKDIR /server
# Copy the current directory contents into the container at /server
COPY . /server/
# install dependencies
RUN npm install
# Make port 8000 available to the world outside this container
EXPOSE 8000
# Run the app when the container launches
CMD ["npm", "run", "dev"]