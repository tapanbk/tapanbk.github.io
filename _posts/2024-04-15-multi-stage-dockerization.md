---
layout: post
section-type: post
title: Extensive guide on multi-stage build for django app
category: Programming
tags: [ 'Architecture', 'Programming', 'Software' ]
permalink: extensive-guide-on-multi-stage-build-for-django-app
---

Extensive guide on multi-stage build for django app - Tapan BK

<!--more-->

<img
src="{{site.baseurl}}/img/posts/multi-stage-build.png"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Extensive guide on multi-stage build for django app - Tapan BK"
alt="Extensive guide on multi-stage build for django app - Tapan BK">


<section>
<p>Before we dive into the multi-stage build, let's get familiar with some of the
terms related to Dockerization.
</p>
</section>

<section>
<h3>About Docker</h3>
<p>
Docker is a platform that enables developers to develop, ship, and run applications using containerization. Containers
are lightweight, standalone, and executable packages that contain everything needed to run an application, including
code, runtime, system tools, libraries, and settings. Docker provides tools and APIs for building, managing, and
deploying containers.
</p>
<p>Here's a brief overview of key Docker concepts:</p>
<ol>
  <li><strong>Image:</strong> An image is a read-only template that contains a set of instructions for creating a container. It includes the application code, runtime, libraries, dependencies, and other necessary components. Images are built using a Dockerfile.</li>
  <li><strong>Container:</strong> A container is a runtime instance of an image. It encapsulates the application and its dependencies, ensuring consistency and portability across different environments. Containers are isolated from each other and from the underlying host system, providing security and resource efficiency.</li>
  <li><strong>Dockerfile:</strong> A Dockerfile is a text file that contains instructions for building a Docker image. It specifies the base image, environment variables, commands to run during the build process, and other configuration settings.</li>
  <li><strong>docker build:</strong> docker build is a command-line tool used to build Docker images from a Dockerfile. It reads the instructions in the Dockerfile, executes them step by step, and generates an image. The resulting image can then be used to create containers.</li>
</ol>
</section>

<section>
<h3>What is multi-stage build?</h3>
<p>
Multi-stage builds in Docker allow you to create more efficient Dockerfiles by reducing the size of your final image.
This is achieved by splitting the build process into multiple stages, where each stage produces an intermediate image
that is used as the base for the next stage. This way, you can include only the necessary dependencies and files in each
stage, resulting in a smaller final image.
</p>
</section>


<section>
<h3>Multi-stage build for Django</h3>
<p>
Multi-stage builds can also be utilized for Django applications to optimize Docker images.
</p>
<pre>
<code>
# Stage 1: Install dependencies
FROM python:3.9 as builder

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Copy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Stage 2: Copy application code and create final image
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Copy installed dependencies from the builder stage
COPY --from=builder /usr/local/lib/python3.9/site-packages/ /usr/local/lib/python3.9/site-packages/

# Copy the rest of the application code
COPY . .

# Clean up temporary files
RUN apt-get update \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /tmp/*

# Expose port
EXPOSE 8000

# Specify the command to run the application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myproject.wsgi:application"]
</code>
</pre>
</section>

<section>
<p>In this Dockerfile:</p>
<ul>
  <li><strong>Stage 1 (builder):</strong> Installs dependencies specified in <code>requirements.txt</code>.</li>
  <li><strong>Stage 2:</strong> Copies only the application code and installed dependencies from the builder stage. This includes the installed Python packages and the Django application code.</li>
</ul>
<p>Ensure to replace "myproject.wsgi:application" with your actual project's WSGI application.
</p>
</section>

<section>
<p>To build and run your Django Docker image:</p>
<pre>
<code>
docker build -t my-django-app .
docker run --rm -p 8000:8000 my-django-app
</code>
</pre>
<p>This Dockerfile optimizes the image size by using a slim Python image for the final stage while still providing all 
necessary dependencies to run a Django application. This is one of the way for multi-stage build</p>
</section>

<section>
<h3>Get pre-built image from the ecr or docker hub</h3>
<p>To use a pre-built image from Amazon ECR as the base image for a multi-stage build, you'll need to reference the image's
URI in your Dockerfile. Here's how you can achieve this:</p>
<pre>
<code>
# Stage 1: Use the pre-built image from ECR as base image
FROM your_ecr_repository_url/your_image_name:tag as base

# Stage 2: Copy application code and create final image
FROM base as final

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Clean up temporary files
RUN apt-get update \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /tmp/*

# Expose port
EXPOSE 8000

# Specify the command to run the application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myproject.wsgi:application"]
</code>
</pre>
</section>


<section>
<p>In this Dockerfile:</p>
<ul>
  <li><strong>Stage 1:</strong> Uses the pre-built image from Amazon ECR as the base image, referencing its URI (<code>your_ecr_repository_url/your_image_name:tag</code>).</li>
  <li><strong>Stage 2:</strong> Inherits from the base image and continues the build process by copying the application code and defining the final image configuration.</li>
</ul>

<p>Make sure to replace your_ecr_repository_url, your_image_name, and tag with the appropriate values matching your ECR
repository and Docker image.</p>
<p>
Once you've created your Dockerfile, you can build the Docker image using the docker build command. This approach allows
you to leverage pre-built images stored in Amazon ECR as the base for your multi-stage builds.
</p>
<p>Let's recap about the pushing the docker build to ecr.</p>
</section>

<section>
<h3>Push the image to ecr</h3>
<ul>
<li>Authenticate Docker to your Amazon ECR registry.</li>
<li>Build your Docker image.</li>
<li>Tag your Docker image with the ECR repository URI.</li>
<li>Push your Docker image to Amazon ECR.</li>
</ul>
</section>

<section>
<h4>Authenticate Docker to your Amazon ECR registry:</h4>
<pre>
<code>
aws ecr get-login-password --region your-aws-region | docker login --username AWS --password-stdin your-aws-account-id.dkr.ecr.your-aws-region.amazonaws.com/your-ecr-repository-name
</code>
</pre>
</section>

<section>
<h4>Build your Docker image:</h4>
<pre>
<code>
docker build -t your-ecr-repository-uri:your-image-tag .
</code>
</pre>
</section>

<section>
<h4>Tag your Docker image:</h4>
<pre>
<code>
docker tag your-ecr-repository-uri:your-image-tag your-aws-account-id.dkr.ecr.your-aws-region.amazonaws.com/your-ecr-repository-name:your-image-tag
</code>
</pre>
</section>

<section>
<h4>Push your Docker image to Amazon ECR:</h4>
<pre>
<code>
docker push your-aws-account-id.dkr.ecr.your-aws-region.amazonaws.com/your-ecr-repository-name:your-image-tag
</code>
</pre>
</section>

<style>
    ol li{
    margin-bottom:30px
    }
</style>