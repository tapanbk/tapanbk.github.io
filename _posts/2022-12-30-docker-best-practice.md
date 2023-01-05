---
layout: post
section-type: post
title: Guide on Best practices on Dockerfile and Docker image

category: Docker
tags: ['Server', 'Docker']
permalink: guide-on-best-practice-on-docker-and-docker-image
---
Guide on Best practices on Dockerfile and Docker image - Tapan BK

<!--more-->

<img
    src="{{site.baseurl}}/img/posts/docker.png"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Guide on Best practices on Dockerfile and Docker image - Tapan BK"
    alt=" Guide on Best practices on Dockerfile and Docker image - Tapan BK">


<section>
<h3>Following are some of the best practices while creating Dockerfile and Docker image</h3>
</section>


<section>
<h4> 1. Exclude the unnecessary files, folders with <span class="important"> .dockerignore</span> file</h4>
<p>The .dockerignore file is used to exclude files and folders that are not relevant to the build.
The .dockerignore file uses a exclusion patterns similar to .gitignore files of git.
</p>
<p>Here is an example of .dockerignore file</p>
<pre class="terminal">
    # The following content will be ignore
    */temp*
    */*/temp*
    temp?
</pre>

<p>The above .dockerignore file cause the following behavior</p>
<ul>
<li> */temp*: Exclude files and directories names start with temp in any immediate subdirectory of the root. somedir/temporary.txt and directory /somedir/temp is excluded</li>
<li>*/*/temp*: Exclude files and directories starting with temp from any subdirectory that is two levels below the root. For example, /somedir/subdir/temporary.txt is excluded.</li>
<li>temp?: Exclude files and directories in the root directory whose names are a one-character extension of temp. For example, /tempa and /tempb are excluded.</li>
</ul>
<pre class="terminal">
   *.md
    !README.md
</pre>
<p>All markdown files except README.md are excluded from the context.</p>

<pre class="terminal">
    *.md
    !README*.md
    README-secret.md
</pre>
<p>No markdown files are included in the context except README files other than README-secret.md.</p>
</section>




<section>
<h4> 2. Use multi-stage builds</h4>
<p>Multi-stage builds allow you to drastically reduce the size of the final docker image without struggling to reduce
the number of intermediate layers and files.
</p>
<p>Since an image is built during the final stage of the build process, you can minimize image layers by leveraging build cache.</p>

<p>For example, if you build contains several layers, you can order them from the less frequently changes to the more 
frequently changed. 
</p>

<ul>
<li>Install tools you need to build your application</li>
<li>install or update the dependencies</li>
<li>Generate your application</li>
</ul>
</section>


<section>
<h4> 3. Don’t install unnecessary packages</h4>
<p>Avoid installing unnecessary or extra packages which will reduce complexity, dependencies, file sizes and build.
</p>
</section>



<section>
<h4> 4. Decouple applications</h4>
<p>Decouple the applications into multiple containers as it makes easier to scale horizontally and reuse containers.</p>
<p>For example, a typical web application can have three separate containers, each with its own unique image, to manage the database,
web application and cache in decoupled manner.
</p>
</section>


<section>
<h4>5. Sort multi-line arguments</h4>
<p>Sort the multiline arguments alphanumerically whenever possible. It reduces the duplication of packages 
and makes easier to update later. This also makes PRs to easier to read and review.
</p>
<pre class="terminal">
     docker-compose exec api python manage.py commands_name
</pre>
</section>

<section>
<h4>6. Security scanning of docker image</h4>
<p>It is a good practice to scan for security vulnerabilities using <span class="important">docker scan</span>
command.
</p>
<p>To scan the docker images, you must be logged into Docker hub.</p>
<pre class="terminal">
    docker scan --login
    docker scan image-name
</pre>
<p>To check the getting-started name docker image</p>
<pre class="terminal">
    docker scan getting-started
</pre>
</section>


<section>
<h4>7. Image layering</h4>
<p>Using the <span class="important">docker image history</span> command, it is possible to see the command
that was used to create each layer within an image.
</p>
<pre class="terminal">
     docker-compose image history getting-started
</pre>
<p>Each of the lines on the output of above command represents a layer. It  also shows the size of each layer which helps
to diagnose large images.
</p>
</section>


<section>
<h4>8. Layer caching</h4>
<p>It is possible to decrease the build times of the container images. Once must know that, once a layers changes,
all downstream layers have to be recreated.
</p>
<p>Look into the following Dockerfile</p>
<pre class="terminal">
     # syntax=docker/dockerfile:1
    FROM node:18-alpine
    WORKDIR /app
    COPY . .
    RUN yarn install --production
    CMD ["node", "src/index.js"]
</pre>
<p>The drawback of the above dockerfile command is that if there is any changes on the project, the COPY command
copies the files from  our directory to docker and then install all the dependencies.
</p>
<p>This can be solved by following Dockerfile</p>

<pre class="terminal">
      # syntax=docker/dockerfile:1
     FROM node:18-alpine
     WORKDIR /app
     COPY package.json yarn.lock ./
     RUN yarn install --production
     COPY . .
     CMD ["node", "src/index.js"]
</pre>

<p>On the above commands, if there is any changes on project files, it only changes the latest two command starting from
COPY . . . 
The layer to install the dependencies occurs runs only if there is changes on package.json or yarn.lock file. 
</p>
</section>


<section>
<h4>9. Do not use your Dockerfile as a build script</h4>
<p>The Dockerfile should never be used to build script because it will make the builds unnecessary long.</p>

<p>We should use the ADD instruction to copy files necessary for compilation into image before it starts running commands.

This will help to keep the Dockerfile short and manage any dependencies required for compilation separately in seperatly
from the Dockerfile.
</p>
</section>


<section>
<h4>10. Use ENV to define environment variables</h4>
<p>If you have a variable that must be different both inside and outside of your container, then you must define it using ENV.</p>
</section>


<section>
<h4>11. Commit your Dockerfile to the repository </h4>
<p>Committing the Dockerfile to repository helps to reference it later without remembering all of the 
commands.
</p>
</section>



<section>
<h4>12. Be mindful of the base image and its image size</h4>
<p>The extraneous layer and code increase the Docker image's size which will make the container to start up slower.
So, use the packages and scripts that are only useful. 

If it does not seem to necessary to include in the base image, try and find a way to 
install it when the container start up instead.
</p>
</section>


<section>
<h4>13. Do not expose secrets</h4>
<p>Never copy the sensitive information into the DOcker file. You can use the .dockerignore file to prevent
copying the sensitive information. Another way can be using the environment file to store the sensitive information
</p>
</section>



<section>
<h4>14. Do not expose the unnecessary ports</h4>
<p>
Docker expose the range of random internal ports by default which can expose the critical services to 
outside world and vulnerable and open to attack.
</p>
<p>Create EXPOSE entry in the Dockerfile to expose a service to the public internet.</p>

<pre class="terminal">
     EXPOSE 8000
</pre>
<p>This entry expose 8000 Docker port to public </p>
</section>


<section>
<h4>15. Use Specific Docker image version</h4>
<p>When you select the latest tag of the image to build the image, there might be change on the latest image 
which may break the application later when there is change in version as the latest tag is unpredictable and may
cause unexpected behavior.
</p>

<p>So, instead of choosing the random latest image, fix the version of the image that you want to use.
When the new version is released, developer can test and update the version of the image.
</p>
</section>


<section>
<h4>16. Use small-sized Official images</h4>
<p>The smaller size image reduces the size of storage space in image repository which also
reduces the usages of storage in deployment server. It also helps in faster when pulling or pushing them from the 
repository. So, choose the small-sized official images that full-fill the requirements of application.
</p>
</section>



<section>
<h4>17. Use the least privileged User</h4>
<p>By default, the Dockerfile uses a root user which introduces a security issue.
But there is no reason to run containers with root privileges.  When the docker is run with the root privileges on the host,
it hold the privileges on underlying host and its processes.
</p>

<p>So, it is best practice is to create a dedicated user and a dedicated group in the Docker image to run  the application.
Use USER directive to specify the user that is used to run the Docker.
</p>

<p>Some of the images contains some generic user bundled in. So, we don't to create a separate dedicated user and
dedicated group. For example, node.js image contains node generic image.
</p>
</section>

