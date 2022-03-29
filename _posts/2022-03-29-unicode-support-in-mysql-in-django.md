---
layout: post
section-type: post
title:  How to add unicode support in mysql and django
category: django
tags: ['django', 'mysql',]
permalink: how-to-add-unicode-support-in-mysql-and-django
description: How to add unicode support in mysql and django
---
Guide to add unicode support in mysql and django
<!--more-->

<img
    src="{{site.baseurl}}/img/posts/django-mysql-unicode-support.png"
    class="img-thumbnail img-rounded" height="400px"
    title="Ultimate guide to increase the swap memory of Linux"
    alt="Ultimate guide to increase the swap memory of Linux">

<section>
<p>
This blog post is about how to add unicode support in Django in MySQL database.
</p>
</section> 


<section>
<h2>Create a database</h2>
<p>
    To support the unicode, we need to create the database that support the unicode. For this, create a database with
    following command in MySQL commandline
</p>
<pre>

    create database my_db_name character set utf8mb4;

</pre>
</section>
<section>

<h2>Update database setting</h2>
<p>
   Since, the blog focused on the mysql, the engine value is obvious. Add the additional settings  on options for 
unicode support. The database setting is usually set on .env file on the root folder of the project or it could be on 
the settings.py file
</p>

<pre>

    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        ...
        'OPTIONS': {
                    'charset': 'utf8mb4',
                    'use_unicode': True, },
        },
    }
    
</pre>
</section>

<section>
<h2>Update the mysql configuration file</h2>
<p>Open the <span class="important">my.cnf</span> file located in  <span class="important">/etc/mysql/</span> folder</p>

<pre>
    
    sudo nano /etc/mysql/my.cnf
    
</pre>

<p>Update the configuration details as below:</p>

<pre>

    [client]
    default-character-set = utf8mb4
    
    [mysql]
    default-character-set = utf8mb4
    
    [mysqld]
    character-set-client-handshake = FALSE
    character-set-server = utf8mb4
    collation-server = utf8mb4_unicode_ci

</pre>
</section>
<section>
<h3>Changes on Existing database</h3>
<p>There are chances that you want to set the unicode support for existing database. You can update the mysql database 
setting by running the following code in mysql command line tool.
</p>

<p>To run the command, first login to the command line tool by using: </p>


<pre>

    mysql -u mysql_user -p 

</pre>

<p>Enter password and hit enter. After successful login, run the following command</p>
<pre>

    ALTER DATABASE my_db_name CHARACTER SET = utf8mb4 COLLATE utf8mb4_unicode_ci;

</pre>
</section>
<section></section>
<section></section>

