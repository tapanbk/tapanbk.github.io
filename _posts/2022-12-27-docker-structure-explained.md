---
layout: post
section-type: post
title:  Ultimate explanation on various keywords used in Docker file

category: Docker
tags: ['Server', 'Docker']
permalink: ultimate-explanation-of-various-keywords-used-in-docker-file
---
Ultimate explanation on various keywords used in Docker - Tapan BK

<!--more-->

<img
    src="{{site.baseurl}}/img/posts/docker.png"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Ultimate explanation on various keywords used in Docker - Tapan BK"
    alt="Ultimate explanation on various keywords used in Docker  - Tapan BK">

<section>
<p>
A Docker file is a script that is used by Docker to generate containers automatically. It is a text document
that contains all the instructions that is used to create an image from command line.
</p>

<p>
It allows programmers to build and run containers(self-contained applications) and systems.  The Docker generates various
light weight containers that help applications to work efficiently in different environments.
</p>
</section>


<section>
<h3>Frequently used Dockerfile keyword</h3>
    <ul>
        <li>Comments</li>
        <li>FROM</li>
        <li>MAINTAINER</li>
        <li>CMD</li>
        <li>ENTRYPOINT</li>
        <li>WORKDIR</li>
        <li>ENV</li>
        <li>COPY</li>
        <li>LABEL</li>
        <li>RUN</li>
        <li>ADD</li>
        <li>.dockerignore</li>
        <li>ARG</li>
        <li>EXPOSE</li>
        <li>USER</li>
        <li>VOLUME</li>
    </ul>
</section>


<section>
<h4><span class="important">Comments</span> Keyword</h4>
<p>Comments gives more details of the scope. Comments in the dockerfile start with #. It can be placed
any where in Docker file.</p>
<pre class="terminal">
     # from base image node
</pre>
</section>

<section>
<h4><span class="important">FROM</span> Keyword</h4>
<p>It must be the first command declared in the Dockerfile. Image cannot be build without this command. </p>
<p>It defines the base image to use to start the build process that can be pulled from the docker hub.
If a image mentioned onf FROM image is not found on the host, Docker will try to find on Docker hub or
other container repository.
</p>

<pre class="terminal">
    # from base image node
    FROM node:8.11-slim
</pre>
<p>This command pulls the node 8.11 </p>
</section>


<section>
<h4><span class="important">MAINTAINER</span> Keyword</h4>
<p>It is not executing command that declares the author of the image</p>

<pre class="terminal">
    MAINTAINER "Tapan B.K."
</pre>
</section>




<section>
<h4><span class="important">CMD</span> Keyword</h4>
<p>Command to be executed when running a container. 
It is used to give the default commands when the image is instantiated.
The docker file must contain one CMD command. 

If a Dockerfile has multiple CMDs, it will only run the last one.
</p>
<pre class="terminal">
    # command executable and version
    CMD ["node","-v"]
    CMD ["node"]
</pre>
</section>


<section>
<h4><span class="important">ENTRYPOINT</span> Keyword</h4>
<p>It is used as an executable for the container. In following example, we are using the 
ENTRYPOINT for executable command and use CMD command to pass some default commands to executable.
</p>
<pre class="terminal">
    CMD ["-v"]
    ENTRYPOINT ["node"]
</pre>

<p>Points to note:</p>
<ul>
    <li>if we specify executable in ENTRYPOINT, we can use CMD to pass default parameters to it.</li>
    <li>if not, we can specify executable and default params in the CMD.
    </li>
    <li>We can override the default command given in CMD while running the container
    </li>
</ul>
</section>


<section>
<h4><span class="important">WORKDIR</span> Keyword</h4>
<p>WORKDIR sets the working directory for all the consecutive commands. We can have the multiple WORKDIR commands,
and it will be appended with a relative path. The WORKDIR directive is used to set where the
command defined with CMD is to be executed.
</p>

<p>Following example will set the WORKDIR to /home/tapan/api</p>
<pre class="terminal">
    WORKDIR /home/tapan
    WORKDIR api
</pre>
</section>


<section>
<h4><span class="important">ENV</span> Keyword</h4>
<p>This command sets environment variables for the subsequent instructions in the build stage.</p>
<pre class="terminal">
    ENV workdirectory /home/tapan/api
    WORKDIR $workdirectory
</pre>
</section>


<section>
<h4><span class="important">COPY</span> Keyword</h4>
<p>It is used to copy files or directories from source host filesystem to a destination in the container
file system.</p>
<p>Following COPY command copies the package.json file our system to a container file system</p>
<pre class="terminal">
    COPY package.json .
</pre>
</section>


<section>
<h4><span class="important">LABEL</span> Keyword</h4>
<p>LABEL command is used to add some metadata to the image.</p>
<pre class="terminal">
    LABEL "about"="This file is just am example to demonstarte the LABEL"
</pre>
</section>



<section>
<h4><span class="important">RUN</span> Keyword</h4>
<p>Run executes the instruction in a new layer on top of the existing image. The new layer is committed and user for the
next instruction in the Dockerfile. It takes a command as its argument and runs it to form the image. </p>
<pre class="terminal">
    RUN npm install
</pre>
</section>



<section>
<h4><span class="important">ADD</span> Keyword</h4>
<p>It is similar to COPY. It is more feature-rich than COPY. COPY is more preferred over ADD</p>
<p>ADD is used to add files or directories and remote files from URL from source host filesystem to a
destination in the container file system.</p>
<pre class="terminal">
    ADD index.js .
</pre>
</section>

<section>
<h4><span class="important">ARG</span> Keyword</h4>
<p>ARG is used to pass some arguments to instruction. This is only command tha can be added before FROM other than a comment</p>
<pre class="terminal">
    # from base image node
    ARG NODE_VERSION=8.11-slim
    FROM node:$NODE_VERSION
</pre>

<pre class="terminal">
    FROM amazon/aws-lambda-nodejs:12
    ARG MSG
    ENV HELLO Hello ${MSG}
</pre>

<p>HELLO is an environment variable accessible in all the systems running inside the container defined by this image.
It is set to the text message Hello ${MSG} where MSG is an argument that can be set via the docker build command:</p>

<pre class="terminal">
    docker build --build-arg MSG="Hello World" -t my-awesome-app
</pre>
<p>If you want to pass multiple argument</p>
<pre class="terminal">
    docker build --build-arg MSG="Hello World"  --build-arg name="Tapan BK" -t my-awesome-app
</pre>

<p>ARG can also be nested:</p>

<pre class="terminal">
    FROM amazon/aws-lambda-nodejs:12
    ARG MSG="Hello world"
    ARG COOLMSG="Welcome, ${MSG}"
    RUN echo ${COOLMSG}
</pre>

</section>


<section>
<h4><span class="important">EXPOSE</span> Keyword</h4>
<p>The EXPOSE keyword is used to expose a port inside the Docker image to the outside world.</p>
<p>This command associate a specified port to enable networking between the running process inside the container and the host</p>

<pre class="terminal">
    EXPOSE 3070
</pre>
<p>We expose the Docker image on port 3070, which we can then use when running the container.</p>
</section>


<section>
<h4><span class="important">USER</span> Keyword</h4>
<p>USER instruction sets user to use when running the image and for running any instructions that runs 
on the Dockerfile
</p>
<pre class="terminal">
    RUN useradd tapanbk
    USER tapanbk
</pre>
</section>




<section>
<h4><span class="important">VOLUME</span> Keyword</h4>
<p>VOLUME is used to create a mount point with the specified name. This command
enable access from container to a directory on the host machine.
</p>

<pre class="terminal">
    RUN mkdir /dockerexample
    VOLUME /dockerexample
</pre>
</section>

<section>
<h4>Finally, Basic structure of Docker file containing all the above keywords</h4>

<pre class="terminal">
    # from base image node
    ARG NODE_VERSION=8.11-slim
    FROM node:$NODE_VERSION
    LABEL "about"="This file is just am example to demonstrate the LABEL"
    ENV workdirectory /home/tapanbk
    RUN mkdir /dockerexample
    VOLUME /dockerexample
    COPY package.json .
    RUN ls -ll &&\
        npm install
    
    RUN useradd tapanbk &&\
        mkdir -p $workdirectory &&\
        chown tapanbk $workdirectory
        
    USER tapanbk
    WORKDIR $workdirectory
    ADD index.js .
    RUN ls -l
    EXPOSE 3070
    # command executable and version
    ENTRYPOINT ["node"]
</pre>
</section>






