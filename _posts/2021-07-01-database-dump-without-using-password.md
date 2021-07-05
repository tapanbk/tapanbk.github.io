---
layout: post
section-type: post
title: Guide for Mysql database dump without any password
category: database
tags: ['mysql' ,'database', 'linux' ]
permalink: guide-for-mysql-database-dump-without-any-password
description: dump mysql database without any password
---
Learn to dump mysql database without any password on inline query.
<!--more-->

<img src="{{site.baseurl}}/img/posts/database-dump.jpg" class="img-thumbnail img-rounded" height="400px" alt="database-dump">

### Database backup

<span class="important">Database backup </span> is the process of storing the copy of database at safe place for
database restore in case of system crash. When the database backup is created, all its architecture, its data can also
be backed up. The main purpose of database backup is to securely store the database backup at safe place and restore the
system to previous store point in case of database crash due to corruption, lost or system crash.


Database backup can be performed by Database administration using the database management system.  The backup can be 
restored to its operational state along with its data and their logs. 

The database backup is necessary to comply the business and government regulations to access and restore the critical business
data in case of a disaster and technical outage due to system error, system crash

### Database dump without password

You can read more about [The ultimate guide to mysqldump]({% post_url 2021-07-01-ultimate-guide-to-mysqldump%})

Sometimes we may need to schedule the script to take the database. Mysql does not allow the script to use the 
password in the script. So, you need to find the way to take backup without password.

You can disable the mysqldump password prompting using the following configuration

The configuration is based on Ubuntu OS.

1.Create a new file <span class="important">.my.conf</span> at home directory of the user
    
    sudo nano ~/.my.cnf   
This commands takes user to the home directory, creates <span class="important">.my.cnf</span> file and opens using the nano. You can use the text editor
or IDE of you choice

2.Enter the database user and password details in the <span class="important">.my.cnf</span> file
  
    [mysqldump]
    user=mysqluser
    password=mysql_user_password    

This configuration allows user to connect to the mysql without entering any password. Due to this configuration,
you don't need to use <span class="important">-p</span> or <span class="important">--password</span> in mysql and mysqldump command. 

The commands to take database backup without any password is:

    mysqldump –u mysqluser my_database > my_database_dump.sql

The default locations of conf files that mysql looks at in linux are:
    
    ~/.my.cnf
    /etc/my.cnf
    /etc/mysql/my.cnf
    $MYSQL_HOME/my.cnf
    [datadir]/my.cnf

The default locations of conf files that mysql looks at in windows are:
    
    C:\Windows\my.ini
    C:\Windows\my.cnf
    C:\my.ini
    C:\my.cnf
    C:\Program Files\MySQL\MySQL Server 5.5\my.ini
    C:\Program Files\MySQL\MySQL Server 5.5\my.cnf

It is possible that there is no .my.cnf file in the default locations. You need to create the file in one of the location.

You can find the location of .my.cnf in linux using following commands
    
    locate my.cnf
    whereis my.cnf
    find . -name my.c


If you .my.cnf file is not at above mentioned default locations, you  can specify the default file location using
<span class="important">--default-file</span> option

    mysqldump --defaults-file=/path-to-my-cnf-file/.my.cnf –u mysql_user my_database > my_database_dump.sql

To connect to the mysql without entering password, you can add following lines in the .my.cnf file

    [mysql]
    user=mysql_user
    password=mysql_user_password

#### Note:
Change the <span class="important">.my.cnf</span> file permissions
    
    sudo chmod 600 ~/.my.cnf 
