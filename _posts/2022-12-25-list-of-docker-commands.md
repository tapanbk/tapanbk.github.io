---
layout: post
section-type: post
title:  Comprehensive list on docker commands

category: Docker
tags: ['Server', 'Docker']
permalink: comprehensive-list-on-docker-commands
---
Comprehensive list on docker commands - Tapan BK

<!--more-->

<img
    src="{{site.baseurl}}/img/posts/docker.png"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Ultimate guide on docker - Tapan BK"
    alt="Ultimate guide on docker - Tapan BK">

<section>
<p>
Docker is the  service that manages the container. It is based on the philosophy of develop, ship and run anywhere.
The docker helps developers to easily develop applications, ship the applications into the containers that 
can be deployed everywhere.
</p>
</section>

<section>

<h3>Pros of Docker</h3>
<ul>
    <li>Reduce the size of development by providing a smaller footprint of the Operating system through containers.</li>
    <li>Helps developers, QA and operations to work seamlessly across various platforms.</li>
    <li>Lightweight</li>
    <li>Scalable</li>
    <li>Dockers can be deployed anywhere</li>
</ul>
</section>

<section>
<h3>Cons of Docker</h3>
<ul>
    <li>There are a ton of feature requests are under progress, like container self-registration, and self-inspects,
        copying files from the host to the container, and many more</li>
    <li>Containers don’t run at bare-metal speeds.</li>
    <li>Docker less attractive in some highly heterogeneous environments which are composed of both Windows and Linux servers</li>
    <li>For applications that require rich interfaces, Docker is not a good solution</li>
    <li>Docker creates new security challenges like the difficulty of monitoring multiple moving pieces within a large-scale, dynamic Docker environment.</li>
</ul>
</section>


<section>
<h3>Commands related to docker images</h3>

<h4>Pull the docker images</h4>
<pre class="terminal">
    sudo docker pull hello-world
</pre>
<p>This will pull the hello-world image from remote docker hub</p>

</section>
<section>

<h4>Run the docker image</h4>
<pre class="terminal">
    docker run hello-world
</pre>
<p>This command is used to create an instance of the image which is also called a container</p>

</section>
<section>

<h4>Run the docker image in interactive mode</h4>
<pre class="terminal">
    docker run -it hello-world /bin/bash
</pre>
<p>/bin/bash is used to run the bash shell once hello-world is up and running.</p>

</section>
<section>

<h4>List docker images</h4>
<pre class="terminal">
    docker images
</pre>
<p>This command is used to display all the images currently installed in the system</p>
<p>It will display the following information</p>
<ul>
    <li>TAG − This is used to logically tag images.</li>
    <li>Image ID − This is used to uniquely identify the image.</li>
    <li>Created − The number of days since the image was created.</li>
    <li>Virtual Size − The size of the image.</li>
</ul>

</section>
<section>

<h4>Download the docker image using the run command</h4>
<pre class="terminal">
    docker run hello-world
</pre>
<p>This command will download the hello-world image if the image is not present on the system and run the 
image as container
</p>

</section>
<section>
<h4>Removing docker images</h4>
<pre class="terminal">
    docker rmi imageId
</pre>
<p>This command will remove the image with the mentioned imageId</p>

</section>
<section>
<h4>Show the docker images Id only</h4>
<pre class="terminal">
    sudo docker images -q
</pre>
<p>This command will only show the image id of all the images in the system</p>

</section>
<section>

<h4>See the details of the docker or container</h4>
<pre class="terminal">
    sudo docker inspect hello-world
</pre>

</section>
<section>
<h3>Commands related to docker container</h3>

<h4>List all the running containers on the machine</h4>
<pre class="terminal">
    docker ps
</pre>
</section>
<section>

<h4>List all the containers on the machine</h4>
<pre class="terminal">
    docker ps -a
</pre>

</section>
<section>
<h4>Stop the docker container</h4>
<pre class="terminal">
    sudo docker stop containerId
</pre>
<p>This command will stop the container with the mentioned containerId</p>

</section>
<section>
<h4>Remove/Delete the docker container</h4>
<pre class="terminal">
    sudo docker rm  containerId
</pre>
<p>This command will delete/remove the container with the mentioned containerId</p>

</section>
<section>

<h4>Status of the docker container</h4>
<pre class="terminal">
    sudo docker stats containerId
</pre>
<p>This command will provide CPU and memory utilization of the Container</p>
</section>
<section>

<h4>Kill the docker container</h4>
<pre class="terminal">
    sudo docker kill containerId
</pre>
<p>This command will kill the process running on the Container</p>
</section>
<section>
<h3>Commands related to docker daemon</h3>
<h4>Stop the docker daemon</h4>
<pre class="terminal">
    sudo service docker stop
</pre>
<p>This command is used to stop the Docker daemon process.</p>

</section>
<section>
<h4>Start the docker daemon</h4>
<pre class="terminal">
    sudo service docker start
</pre>
<p>This command is used to start the Docker daemon process.</p>
</section>
<section>

<h3>Commands related to docker build</h3>
<h4>build the docker image</h4>
<pre class="terminal">
    docker build  -t ImageName:TagName dir
</pre>
<p>This method allows the users to build  own Docker images.</p>

<p>Options</p>
<ul>
<li>-t − is to mention a tag to the image</li>
<li>ImageName − This is the name you want to give to your image.</li>
<li>TagName − This is the tag you want to give to your image.</li>
<li>Dir − The directory where the Docker File is present.</li>
</ul>

<p>Example: </p>
<pre class="terminal">
    sudo docker build –t myDockerImage:0.1 .
</pre>
<p>
Here, myDockerImage is the image name and 0.1 is the tag number. The '.' at the end of the commands signify the present 
working directory.
</p>

</section>
<section>
<h4>Pull the docker image</h4>
<pre class="terminal">
    sudo docker pull hello-world
</pre>
<p>This command is used to pull the hello-world from the remote docker repo.</p>

</section>
<section>
<h4>Tag the docker image</h4>
<pre class="terminal">
    docker tag imageID RepositoryName
</pre>
<p>This command allows to tag an image to mentioned repo</p>

<p>Example</p>
<pre class="terminal">
    sudo docker tag ab0c1d3744dd hello-world:1.0
</pre>

</section>
<section>
<h4>Push the docker image to remote repo</h4>
<pre class="terminal">
    sudo docker push RepositoryName
</pre>
<p>This command allows one to push images to the Docker Hub.</p>
</section>

<section>
<p>Example</p>
<pre class="terminal">
    sudo docker push hello-world:1.0
</pre>
</section>


