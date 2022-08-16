---
layout: post
section-type: post
title: Guide for Mysql database dump without any password
category: Database
tags: ['MySQL' ,'Database', 'Linux' ]
permalink: guide-for-mysql-database-dump-without-any-password
---
Learn to dump mysql database without any password on inline query - Tapan BK

<!--more-->

<section>
<img src="{{site.baseurl}}/img/posts/database-dump.jpg"
class="img-thumbnail img-rounded" height="400px" width="100%" alt="database-dump">
</section>

<section>
<h2>Database backup</h2>
<p>
<span class="important">Database backup </span> is the process of storing the copy of database at safe place for
database restore in case of system crash. When the database backup is created, all its architecture, its data can also
be backed up. The main purpose of database backup is to securely store the database backup at safe place and restore the
system to previous store point in case of database crash due to corruption, lost or system crash.
</p>
<p>
Database backup can be performed by Database administration using the database management system.  The backup can be
restored to its operational state along with its data and their logs.
</p>
<p>
The database backup is necessary to comply the business and government regulations to access and restore the critical business
data in case of a disaster and technical outage due to system error, system crash
</p>
</section>

<section>
<h2> Database dump without password</h2>
<p>
 You can read more about
<a href="{% post_url 2021-07-01-ultimate-guide-to-mysqldump%}">The ultimate guide to mysqldump</a>
</p>
<p>Sometimes we may need to schedule the script to take the database. Mysql does not allow the script to use the
password in the script. So, you need to find the way to take backup without password.</p>
</section>

<section>
<p>
You can disable the mysqldump password prompting using the following configuration
</p>
<p>The configuration is based on Ubuntu OS.</p>
</section>

<section>
<p>
1.Create a new file <span class="important">.my.conf</span> at home directory of the user
</p>
<pre class="terminal">
    sudo nano ~/.my.cnf  
</pre>  
<p>This commands takes user to the home directory, creates <span class="important">.my.cnf</span> file and opens using the nano. You can use the text editor
or IDE of you choice</p>
</section>

<section>
<p>2.Enter the database user and password details in the <span class="important">.my.cnf</span> file</p>
<pre class="terminal">
    [mysqldump]
    user=mysqluser
    password=mysql_user_password   
</pre>
<p>
This configuration allows user to connect to the mysql without entering any password. Due to this configuration,
you don't need to use <span class="important">-p</span> or <span class="important">--password</span> in mysql and mysqldump command.
</p>
<p>
The commands to take database backup without any password is:
</p>
</section>

<section>
<pre class="terminal">
    mysqldump –u mysqluser my_database > my_database_dump.sql
</pre>  
</section>


<section>
<p>
The default locations of conf files that mysql looks at in linux are:
</p>

<pre class="terminal">
    ~/.my.cnf
    /etc/my.cnf
    /etc/mysql/my.cnf
    $MYSQL_HOME/my.cnf
    [datadir]/my.cnf
</pre>      
</section>

<section>
<p>
The default locations of conf files that mysql looks at in windows are:
</p>
<pre class="terminal">
    C:\Windows\my.ini
    C:\Windows\my.cnf
    C:\my.ini
    C:\my.cnf
    C:\Program Files\MySQL\MySQL Server 5.5\my.ini
    C:\Program Files\MySQL\MySQL Server 5.5\my.cnf
</pre>  
</section>   

<section>
<p>
It is possible that there is no .my.cnf file in the default locations.
You need to create the file in one of the location.
</p>

<p>
You can find the location of .my.cnf in linux using following commands
</p>

<pre class="terminal">
    locate my.cnf
    whereis my.cnf
    find . -name my.c
</pre>      
</section>

<section>
<p>
If you .my.cnf file is not at above-mentioned default locations, you  can specify the default file location using
<span class="important">--default-file</span> option
</p>

<pre class="terminal">
    mysqldump --defaults-file=/path-to-my-cnf-file/.my.cnf –u mysql_user my_database > my_database_dump.sql
</pre>  
<p>
To connect to the mysql without entering password, you can add following lines in the .my.cnf file
</p>

<pre class="terminal">
    [mysql]
    user=mysql_user
    password=mysql_user_password
</pre>  
</section>

<section>
<h3>Note:</h3>
<p>
Change the <span class="important">.my.cnf</span> file permissions
</p>
<pre class="terminal">
    sudo chmod 600 ~/.my.cnf 
</pre>
</section>
