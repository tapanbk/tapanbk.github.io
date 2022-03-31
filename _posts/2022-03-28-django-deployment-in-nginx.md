---
layout: post
section-type: post
title:  Ultimate guide to deploy django in Nginx Server with supervisor and Gunicorn
category: server
tags: ['Django', 'Nginx' ,'server']
permalink: ultimate-guide-to-deploy-django-in-nginx-server-with-supervisor-and-gunicorn
description: Ultimate guide to deploy django in Nginx Server with supervisor and Gunicorn
---
Ultimate guide to deploy django in Nginx Server with supervisor and Gunicorn
<!--more-->

<img
    src="{{site.baseurl}}/img/posts/django-nginx-supervisor-configuration.png"
    class="img-thumbnail img-rounded" height="400px"
    title="Ultimate guide to deploy django in Nginx Server"
    alt="Ultimate guide to deploy django in Nginx Server">

<section>
<p>
This blog post is about how to install Django with Nginx as server and Supervisor  for process control and Gunicorn as
Python WSGI HTTP Server. We will be using the Ubuntu OS. 
Basic understanding of the python/Django and Linux environment is needed to follow along the tutorial. The steps to setup
is similar in all the cloud services. However, following steps are based on AWS ec2
</p>
</section> 

<section>

<h2>Basic architecture of the setup environment.</h2> 
<img 
    src="{{site.baseurl}}/img/posts/django-nginx-setup-architecture.jpg" 
    alt="Django Nginx Setup Architecture"
    title="Django Nginx Setup Architecture">
<br>
</section>


<section>
<h2>The software needed are:</h2>  
<ol>
    <li>Ubuntu Server</li>
    <li>Nginx Server</li>
    <li>Django App</li>
    <li>Gunicorn (WSGI server)</li>
    <li>Domain or ip of server</li>
</ol>
</section>

<section>
<h2>Install packages and their dependencies</h2>
<pre class="terminal">
    sudo apt update && sudo apt upgrade -y
    sudo apt install python3-dev gcc libssl-dev virtualenv supervisor nginx gunicorn -y
</pre>
</section>

<section>
<h2>Clone the project</h2>
<p>Clone the project git. For the tutorial purpose, we have the project on the 

<span class="important">/home/ubuntu/api </span> folder. </p>
<pre class="terminal">
    git clone github_url
</pre>
</section>

<section>
<h2>Setup Virtual environment</h2>
<h4>Create virtual environment</h4>
<pre class="terminal">
    virtualenv venv -p python3
</pre>
<p>-p python3 parameter is used to set the python3 interpreter.</p>
<h4>Activate Virtual environment</h4>
<pre class="terminal">
    source venv/bin/activate
</pre>
<h4>Install the project dependencies</h4>
<pre class="terminal">
    pip3 install -r requirements.txt
</pre>
</section>

<section>
<h2>Setup the environment file</h2>
    <h4>Copy the environment file</h4>
   <p>I have the environment file <span class="important">env.example.py </span>inside separate folder in
<span class="important">config/settings</span>.</p>
<pre class="terminal">
    sudo cp config/settings/env.example.py config/settings/env.py
    sudo nano config/settings/env.py
</pre>
  

<p>Most of the project have .env.example file in the root folder of the project. Copy and update the file</p>
<pre class="terminal">
    sudo cp .env.example .env
    sudo nano .env
</pre>
</section>

<section>
<h2>Make folder for logs, media and static files</h2>
<p>logs folder is required to store the logs files. media files is used to store the uploaded files and 
static folder is used to store the static files of the project. The folder for logs, static files and media and folder
can be configured in env file.
</p>
<h3>Following configuration can be added for static and media files</h3>
<pre class="terminal">
    STATIC_URL = '/static/'
    STATIC_ROOT = os.path.join(BASE_DIR,'static')
    MEDIA_URL = '/media/'
    MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
</pre>
<h3>To create the blank logs, static and media folder. Run following command</h3>
<pre class="terminal">
    mkdir logs static media
</pre>
</section>

<section>
<h2>Update the static files</h2>
<pre class="terminal">
    python manage.py collectstatic
</pre>
</section>

<section>
<h2>Setup Gunicorn, Supervisor </h2>
<p>We need to create the various folder for the gunicorn and supervisor. For this tutorial purpose, we create these
folders along side the project folder inside <span class="important">/home/ubuntu/</span>
</p>
<pre class="terminal">
    mkdir bin logs run
</pre>
<h5>Create a log file for gunicorn inside the logs folder</h5>
<pre class="terminal">
    touch /home/ubuntu/logs/gunicorn-error.log
</pre>
</section>


<section>
<h2>Configure the database</h2>
<p>You can choose the mysql or the postgres database based on your choice</p>
<h3>For Mysql Setup</h3>
<h4>Mysql Installation and its dependencies</h4>
<pre class="terminal">
    sudo apt install mysql-server libmysqlclient-dev default-libmysqlclient-dev -y
    sudo systemctl start mysql && sudo systemctl enable mysql
    sudo mysql_secure_installation utility
</pre>

<h4>Create user, database and grant permissions</h4>

<pre class="terminal">
    sudo mysql
    CREATE USER 'project_user'@'localhost' IDENTIFIED BY 'password';
    create database myproject_db character set utf8mb4; 
    grant all privileges on project_user.* to 'myproject_db'@'localhost' identified by 'password';
</pre>

<h3>For Postgres</h3>
<h4>Postgres Installation and its dependencies</h4>
<pre class="terminal">
    sudo apt-get install python3-pip python3-dev libpq-dev postgresql postgresql-contrib -y
    sudo systemctl enable supervisor  && sudo systemctl start supervisor
</pre>

<h4>Create user, database and grant permissions</h4>

<pre class="terminal">
    sudo -u postgres createuser project_user;
    sudo -u postgres createdb myproject_db;
</pre>

<h3> Update user password and grant permissions to user</h3>

<pre class="terminal">
    sudo -u postgres psql;
    alter user 'project_user' with encrypted password 'password';
    grant all privileges on database 'myproject_db' to 'project_user';
</pre>


<h3>Basic Postgres commands</h3>
<pre class="terminal">
    sudo service postgresql stop
    sudo service postgresql start
    sudo service postgresql restart
</pre>
</section>

<section>
<h2>Create the migration files and install the migrations</h2>
<pre class="terminal">
    source venv/bin/activate
    python manage.py makemigrations
    python manage.py migrate
</pre>
</section>

<section>
<h2>Gunicorn setup</h2>
<p>Create a gunicorn_start file inside the  <span class="important">/home/ubuntu/bin</span></p>
<h3>Create a gunicorn_start file</h3>
<pre class="terminal">
    sudo nano bin/gunicorn_start
</pre>

<h3>Update the file content with following content</h3>
Update the NAME, DIR, USER, GROUP and workers values based on the project setting
<br/><br/>
<pre class="terminal">
    #!/bin/bash
    NAME="project_name"
    DIR=/home/ubuntu/api
    USER=ubuntu
    GROUP=ubuntu
    WORKERS=3
    BIND=unix:/home/ubuntu/run/gunicorn.sock
    DJANGO_SETTINGS_MODULE=config.settings
    DJANGO_WSGI_MODULE=config.wsgi
    LOG_LEVEL=error
    
    cd $DIR
    source venv/bin/activate
    
    export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
    export PYTHONPATH=$DIR:$PYTHONPATH
    
    exec venv/bin/gunicorn ${DJANGO_WSGI_MODULE}:application \
      --name $NAME \
      --workers $WORKERS \
      --user=$USER \
      --group=$GROUP \
      --bind=$BIND \
      --log-level=$LOG_LEVEL \
      --log-file=-
</pre>

<p>DJANGO_SETTINGS_MODULE and DJANGO_WSGI_MODULE path must be with respect to project. Since my all the settings are inside
config folder, so all its value start from config.
</p>
<p>Later on, while running the gunicorn, if you see the path error. Please use the absolute folder from the root. 
like <span class="important">\home\USER_NAME\YOUR_PROJECT_NAME</span>
</p>
</section>

<h3>Add the executable permission to the gunicorn_start file</h3>
<pre class="terminal">
    sudo chmod u+x bin/gunicorn_start
</pre>

<section>
<h2>Supervisor Configuration</h2>
<p>Supervisor is used to monitor and control a number of process running in unix based operating system.</p>

<h3>Create a supervisor file</h3>

<p>Create new file inside <span class="important">/etc/supervisor/conf.d</span> . For the sake of tutorials purpose,
we are using the myproject.conf
</p>
<pre class="terminal">
    sudo nano /etc/supervisor/conf.d/myproject.conf
</pre>

<h3>Open the configuration file using following command</h3>
<pre class="terminal">
    sudo nano /etc/supervisor/conf.d/myproject.conf
</pre>
<h3>Update the basic supervisor configuration in myproject.conf file</h3>
<pre class="terminal">
    [program:myproject]
    command=sh /home/ubuntu/bin/gunicorn_start
    user=ubuntu
    autostart=true
    autorestart=true
    redirect_stderr=true
    stdout_logfile=/home/ubuntu/logs/gunicorn-error.log
</pre>
<p>You can change the path to gunicorn_start if you store the file in different location. Update the username according
to the user</p>
</section>

<section>
<h2>Check the gunicorn and supervisor configuration</h2>
<p>Following command helps to reread and update the currently updated supervisor commands</p>

<pre class="terminal">
    sudo supervisorctl reread
    sudo supervisorctl update
</pre>

<h3>Check the status of the configuration</h3>
<pre class="terminal">
    sudo supervisorctl status myproject
</pre>
<p>If we can see the myproject running and uptime, then everything is </p>
</section>

<section>
<h2>Create a nginx configuration</h2>

<h3>Create a configuration file and update the following configuration</h3>
<pre class="terminal">
    sudo nano /etc/nginx/sites-available/myproject.conf
</pre>

<pre class="terminal">
    upstream app_server {
        server unix:/home/ubuntu/run/gunicorn.sock fail_timeout=0;
    }
    
    server {
        listen 80;
    
        # add here the ip address of your server
        # or a domain pointing to that ip (like example.com or www.example.com)
        # You can add the multiple server_name with http, https and www
        server_name test.com;
        # server_name test.com http.test.com https.test.com www.test.com;
    
        keepalive_timeout 5;
        client_max_body_size 4G;
    
        access_log /home/ubuntu/logs/nginx-access.log;
        error_log /home/ubuntu/logs/nginx-error.log;
    
        location /static/ {
            alias /home/ubuntu/api/static/;
        }
    
        location /media/ {
            alias /home/ubuntu/api/media/; 
        }
      

        # checks for static file, if not found proxy to app
        location / {
            try_files $uri @proxy_to_app;
        }
    
        location @proxy_to_app {
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header Host $http_host;
          proxy_redirect off;
          proxy_pass http://app_server;
        }
    }
</pre>

<h3>Check the validity of nginx configuration</h3>
<pre class="terminal">
    sudo nginx -t
</pre>

<h3>Create  symbolic link to <span class="important"> /etc/nginx/sites-enabled </span></h3>

<pre class="terminal">
    sudo ln -s /etc/nginx/sites-available/myproject.conf /etc/nginx/sites-enabled/
</pre>

<h3>Remove the default configuration file</h3>

<pre class="terminal">
    sudo rm /etc/nginx/sites-enabled/default
</pre>

<h3>Restart the nginx server and supervisor</h3>

<pre class="terminal">
    sudo systemctl restart nginx
    sudo systemctl restart supervisor
</pre>

</section>

<section>
<h2>Some useful commands</h2>
<p>Check the nginx error</p>
<pre class="terminal">
    sudo nginx -c /etc/nginx/nginx.conf -t
    sudo nginx -t
</pre>

<p>Reload and Restart supervision</p>
<pre class="terminal">
    sudo supervisorctl reload
    sudo supervisorctl restart myproject
</pre>

<p>Some useful Supervisor commands</p>
<pre class="terminal">
    sudo nano gunicorn_start 
    sudo supervisorctl reread
    sudo supervisorctl update
    sudo supervisorctl status myproject
</pre>



</section>