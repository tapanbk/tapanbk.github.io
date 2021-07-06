---
layout: post
section-type: post
title: Guide to back up database using the cron job and mysql dump
category: database
tags: ['mysql' ,'database', 'linux' ]
permalink: database-dump-with-cron-jobs-and-mysql-dump
description: Guide to back up database using the cron job and mysql dump
---

Read post on guide to back up database using the cron job and mysqldump
<!--more-->

<img src="{{site.baseurl}}/img/posts/cron-jobs.jpg" class="img-thumbnail img-rounded" height="400px" alt="database-dump">

#### What is backup?

Backup a copy of original file or data made in case the original is lost or damaged. Backup and recovery are
interconnected terms. The main purpose of the backup is to recover the data in case the original 
file and content is lost or damaged.


#### Backup process

1. **Create** the copy of your original content
2. **Store** in secure and separate location
3. **Use the backup** as a restoration method in case of data loss or damage.

#### Importance of backup 

1. **Security**: As size of system and organization increases, it needs to integrate the one part of system with another, the
   number of potential threats increases to the information that the system holds. Backup and recovery solution protects
   and save data.
2. **Ease of management**: The proper backup and restoration process avoids end users backing up their data own their own
   devices inconsistently and irregularly.
3. **Reliable replication**: Taking accurate replicate of the data makes it disaster-proof.
4. **Maintain compliance standards**: Regular backup of the critical data is needed to company the software standards
5. **Zero impact on performance**: Proper backup and system recover process reduces the system downtime during the data
damage, loss or corruption which increases more uptime.
   
#### Cron jobs:

The Cron daemon is a built-in Linux utility that reads the crontab from commands and scripts to run the process
automatically at scheduled time. Cron read the crontab for commands and scripts for predefined commands and scripts.
 
Want to learn more about cron jobs and see all the possible examples. 
Read [Ultimate Guide on Crontab with examples]({% post_url 2021-07-01-ultimate-guide-to-mysqldump%})


#### mysqldump:

Mysqldump is a command-line utility to create dump of the MySQL database along with structure, its data to restore that
in case of database corruption, error and system crash.

Want to know more this database dump?
Read [ultimate guide on MysqlDump]({% post_url 2021-07-01-ultimate-guide-to-mysqldump%})


#### steps:
##### 1.Add username and password in the .my.cnf file
Mysqldump does not allow user to enter user and password in the same command. 
There is two-way to overcome this password.
i. Set -p option in dump command and enter password when the system asks for password which is not possible for 
ii. Save user and password  in .my.cnf file and allows Mysql dump to use the user and password

Want to know more this database dump without using password? 
Read [Database dump without using password]({% post_url 2021-07-01-database-dump-without-using-password%})
   
i. Create new file at ~/.my.cnf
{% highlight bash %}
   sudo nano ~/.my.cnf
{% endhighlight %}

ii. Add 600 permission to .my.cnf file
{% highlight bash %}
   sudo chmod 600 ~/.my.cnf
{% endhighlight %}

iii. Update the mysql setting:
{% highlight bash %}
   [mysqldump]
   user=mysqluser
   password=mysql_user_secret_password 
{% endhighlight %}


##### 2.Add the script to dump the mysql at <span class="important">/var/database_backup/database_dump.py</span>
{% highlight python3 %}

    ###########################################################
   #
   # This python script is used for mysql database backup using mysqldump.
   #
   ##########################################################
 
   import os
   import time
   import datetime
   import pipes
   
   # MySQL database details to which backup to be done. Make sure below user having enough privileges to take databases backup.
   
   DB_HOST = 'localhost'
   DB_USER = 'db_user'
   DB_USER_PASSWORD = 'db_password'
   DB_NAME = 'db_name'
   BACKUP_PATH = '/var/database_backup/dumps'
   
   # Getting current DateTime to create the separate backup folder like "20210705-123433".
   DATE = time.strftime('%Y_%m')
   TODAYBACKUPPATH = BACKUP_PATH + '/' + DATE
   DATETIME = time.strftime('%Y%m_%d-%H%M%S')
   DUMP_FILE_NAME = DATETIME + '-'+ DB_NAME
   print ("Back started for "+DATETIME)
   # Checking if backup folder already exists or not. If not exists will create it.
   try:
      os.stat(TODAYBACKUPPATH)
   except:
      os.mkdir(TODAYBACKUPPATH)
   
   
   # Starting actual database backup process.
   dumpcmd = "mysqldump -h " + DB_HOST + " -u " + DB_USER + " -p" + DB_USER_PASSWORD + " " + DB_NAME + " > " + pipes.quote(TODAYBACKUPPATH) + "/" + DUMP_FILE_NAME + ".sql"
   os.system(dumpcmd)
   print ("Your backups have been created in '" + TODAYBACKUPPATH + "' directory")
{% endhighlight %}
  

##### 3.create a bash script to run the database dump file at <span class="important">/var/database_dump</span> 
{% highlight bash %}
   #!/bin/bash
   /usr/bin/python3 /var/database_backup/database_dump.py
{% endhighlight %}

If you are using any virtual environment, you don't need to activate the virtual environment and then invoke the command. 
You can just give a full path from root to python executable of virtual environment. 
{% highlight bash %}
#!/bin/bash
   /full-path-to-virtual-env/bin/python3 /var/database_backup/database_dump.py
{% endhighlight %}

The system takes all the necessary dependencies from the virtual environment.

##### 4.Schedule the command to run the database dump script using crontab
Want to learn more on crontab configuration. 
Read [Ultimate guide to crontab]({% post_url 2021-06-27-ultimate-guides-to-crontab-and-awesome-example%})

i. open the crobtab using:
{% highlight bash %}
   crontab -e
{% endhighlight %}

ii. Schedule the command to run using: 

{% highlight bash %}
   # run every 12 hours
   0 */12 * * * /var/database_backup/script_runner.sh >> /var/database_backup/logs/database_dump.log 2>&1
   # run every 30 minutes
   */30 * * * * /var/database_backup/script_runner.sh >> /var/database_backup/logs/database_dump.log 2>&1
{% endhighlight %}
