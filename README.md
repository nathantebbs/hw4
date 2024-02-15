# CSC346 - hw4

## Preface
This is the repository for the 4th homework in my Cloud Computing class here at the University of Arizona. In this homework we introduced JavaScript and how we can use it to interact with our html for the web page.

## Docker

### Why docker?
- This class uses docker as it's primary containerization platform. And as it is a cloud computing class we use docker in most if not all of our assignments. In this homework, we are using the nginx docker image as our base image. Then from there we copy our website's files into the directory. To make the webpage load any changes we make in the directory on our computer, we also will mount the html/ directory in the run step.

### Using docker
---
#### Building
To start, let's build our own custom docker image from the Dockerfile:
    docker build -t hw04:latest .
---
#### Running
Now that we have a docker image built, we can run a container from this image with the following command:
    docker run -i --rm --name hw04container -p 8080:80 -v "$PWD/html:/usr/share/nginx/html" hw04:latest

##### - -i: makes this container interactable
##### - --rm: makes the container autodelete itself on exit
##### - --name: gives the container a name
##### - -p: binds our container to a port: [local:server], this means that we are binding the local port of 8080 to the servers port 80
##### - -v: mounts the html/ directory to the directory where nginx looks for website files. Making our files display instead of nginx's default greeting screen.

