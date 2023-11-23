# Learn-Docker---DevOps-with-Node.js-Express

# Course Contents
#### Day 1

<ul>
    <li>Intro & demo express app</li>
    <li>Custom Images with Dockerfile</li>
    <li>Docker image layers & caching</li>
    <li>Docker networking opening ports</li>
    <li>Dockerignore file</li>
    <li>Syncing source code with bind mounts</li>
    <li>Anonymous Volumes hack</li>
    <li>Read-Only Bind Mounts</li>
    <li>Environment variables</li>
    <li>loading environment variables from file</li>
    <li>Deleting stale volumes</li>
    <li>Docker Compose</li>
    <li>Development vs Production configs</li>
</ul>


#### Day 2

<ul>
    <li>Adding a Mongo Container</li>
    <li>Communicating between containers</li>
    <li>Express Config file</li>
    <li>Container bootup order</li>
    <li>Building a CRUD application</li>
    <li>Sign up and Login</li>
    <li>Authentication with sessions & Redis</li>
    <li>Architecture Review</li>
    <li>Nginx for Load balancing to multiple node containers</li>
    <li>Express CORS</li>
</ul>


#### Day 3

<ul>
    <li>Installing docker on Ubuntu(Digital Ocean)</li>
    <li>Setup Git</li>
    <li>Environment Variables on Ubuntu</li>
    <li>Deploying app to production server</li>
    <li>Pushing changes the hard way</li>
    <li>Rebuilding Containers</li>
    <li>Dev to Prod workflow review</li>
    <li>Improved Dockerhub workflow</li>
    <li>Automating with watchtower</li>
    <li>Why we need an orchestrator</li>
    <li>Docker Swarm</li>
    <li>Pushing changes to Swarm stack</li>
</ul>

# How to use it ?
### 1. Start docker on local machine
### 2. When we want to run it dev mode : docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build -V
### 3. When we want to run it prod mode : docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build -V
### 4. When we want to scale multiple node-app instance : docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build --scale node-app=x (x is the number of instance for example it may be 2 or 3 or ...)
### 5. When we want to turn down everything : docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
### 6. Type in the browser : http://localhost:3000/api/v1/**
##### N.B: The complete course can be watched at this <a href="https://www.youtube.com/watch?v=9zUHg7xjIqQ">link</a>