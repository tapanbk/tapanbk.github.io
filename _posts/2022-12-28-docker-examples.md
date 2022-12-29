---
layout: post
section-type: post
title:  Docker and Docker compose example file with commands

category: Docker
tags: ['Server', 'Docker']
permalink: docker-and-docker-compose-example-file
---
Docker and Docker compose example file with commands - Tapan BK

<!--more-->

<img
    src="{{site.baseurl}}/img/posts/docker.png"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Docker and Docker compose example file with commands - Tapan BK"
    alt="Docker and Docker compose example file with commands - Tapan BK">

<section>
<p>
Docker is the  container managing service that manages the container. The main philosophy of docker is to develop, ship and run anywhere.
The docker helps developers/architecture to easily develop applications, ship the applications into the containers that 
can be deployed everywhere.
</p>
</section>

<section>
<h4>Docker example file</h4>
<p>Docker file is usually created with the Docker name without any extension. The basic structure of Docker file for 
Django Project is
</p>
<pre class="terminal">
    FROM python:3.10-alpine
    ENV PYTHONUNBUFFERED=1

    RUN apk update \
        && apk add --no-cache --virtual .build-deps \
        ca-certificates gcc linux-headers musl-dev \
        libffi-dev jpeg-dev zlib-dev libc-dev python3-dev \
        postgresql-dev cargo
    
    RUN pip install --upgrade pip
    
    # Create group and user
    RUN addgroup group_name && adduser -D user_name -G group_name -h /home/user_name

    ENV HOME /home/user_name
    ENV APP_DIR ${HOME}/project_directory
    WORKDIR ${APP_DIR}
    ADD requirements.txt ${APP_DIR}/
    COPY ./ ${APP_DIR}
    RUN chown -R group_name:group_name ${APP_DIR}
    USER user_name
    RUN pip install -r ${APP_DIR}/requirements.txt
    EXPOSE 8000
    ENTRYPOINT sh -c "python manage.py runserver 0.0.0.0:8000"
</pre>
</section>



<section>
<h4>Docker file for production to be run with gunicorn</h4>
<p>Create a Docker.production file without any file extension</p>
<pre class="terminal">
    FROM python:3.10-alpine
    ENV PYTHONUNBUFFERED=1
    
    RUN apk update \
    && apk add --no-cache --virtual .build-deps \
    ca-certificates gcc linux-headers musl-dev \
    libffi-dev jpeg-dev zlib-dev libc-dev python3-dev \
    postgresql-dev cargo
    
    RUN pip install --upgrade pip
    
    # Create group and user
    RUN addgroup group_name && adduser -D user_name -G group_name -h /home/user_name
    
    ENV HOME /home/user_name
    
    ENV APP_DIR ${HOME}/project_name
    
    WORKDIR ${APP_DIR}
    
    ADD requirements.txt ${APP_DIR}/
    
    RUN pip install -r ${APP_DIR}/requirements.txt
    
    COPY ./ ${APP_DIR}
    
    RUN chown -R group_name:group_name ${APP_DIR}
    
    USER user_name
    
    EXPOSE 8000
    
    CMD exec gunicorn config.wsgi:application --bind 0.0.0.0:8000 --workers 3
</pre>
</section>



<section>
<h4>Docker compose file</h4>
<p>Create a docker-compose.yml file.The following docker file consists of redis for caching, and postgres for database </p>
  <pre class="terminal">
    version: '3.10'
    volumes:
      dbdata:

    networks:
      localhost:
        driver: bridge
      redis-net:
    
    services:
      redis:
        image: redis
        container_name: redis_container
        command: redis-server
        ports:
          - '6380:6379'
        networks:
          - redis-net
      api:
        build:
          context: .
        ports:
          - '8000:8000'
        volumes:
          - .:/home/user_name/project
        env_file: .env
        container_name: unique_container_name
        depends_on:
          - db
        links:
          - db
          - redis
        networks:
          - localhost
          - redis-net
    
      db:
        image: postgres:alpine
        environment:
          - POSTGRES_DB=${DB_NAME}
          - POSTGRES_USER=${DB_USER}
          - POSTGRES_PASSWORD=${DB_PASSWORD}
        container_name: unique_container_name-db
        ports:
          - '5433:5432'
        volumes:
          - dbdata:/var/lib/postgresql
        networks:
          - localhost
</pre>
</section>



<section>
<h4>Docker compose production file</h4>
<p>Create a docker-compose.production.yml file. The following docker file consists of redis service for caching.</p>
    
<pre class="terminal">
    version: '3.10'
    
    networks:
      redis-net:
    
    services:
      redis:
        image: redis
        container_name: redis_container
        command: redis-server
        ports:
          - '6379:6379'
        networks:
          - redis-net
      api:
        build:
          context: .
          dockerfile: Dockerfile.production
        ports:
          - '8000:8000'
        networks:
          - redis-net
        volumes:
          - .:/home/user_name/project_name
        env_file: .env
        container_name: unique_container_name
</pre>
</section>

<section>
<h4>Command to build a image from Dockerfile </h4>
<pre class="terminal">
    docker build -f Dockerfile -t ImageName .
</pre>

<p>This method allows the users to build  own Docker images.</p>

<p>Options</p>
<ul>
<li>-f: It is used to specify the  path to an alternative file to use instead. By default, it looks into the root of the build context.</li>
<li>-t: is used to mention a tag to the image</li>
<li>ImageName : This is the name you want to give to your image.</li>
<li>. : The directory where the Docker File is present.</li>
</ul>
</section>


<section>
<h4>Builds, (re)creates, starts, and attaches to containers for a service using docker-compose.</h4>
<pre class="terminal">
    docker-compose -f docker-compose.yml up
</pre>
</section>

<section>
<h4>Builds, (re)creates, starts, and attaches to containers for a service using docker-compose in detach mode.</h4>
<pre class="terminal">
    docker-compose -f docker-compose.yml up -d
</pre>
<p>Or, you can use the following command</p>

<pre class="terminal">
    docker-compose -f docker-compose.yml start
</pre>
</section>



<section>
<h4>Stop the container.</h4>
<pre class="terminal">
     docker-compose stop
</pre>
</section>


<section>
<h4>Delete the container with volume.</h4>
<pre class="terminal">
     docker-compose down --volume
</pre>
</section>

<section>
<h4>Delete all docker resources (images, containers, volumes, networks).</h4>
<pre class="terminal">
     docker system prune -a
</pre>
</section>


<section>
<h4>Run the makemigrations file in the docker</h4>
<pre class="terminal">
     docker-compose exec api python manage.py makemigrations [options]
</pre>
</section>

<section>
<h4>Run the migrations file in the docker</h4>
<pre class="terminal">
     docker-compose exec api python manage.py migrate [options]
</pre>
</section>


<section>
<h4>Run the commands</h4>
<pre class="terminal">
     docker-compose exec api python manage.py commands_name
</pre>
</section>




