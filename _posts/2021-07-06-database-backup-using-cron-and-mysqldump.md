---
layout: post
section-type: post
title: Guide to back up database using the cron job and mysql dump
category: Database
tags: ['MySQL' ,'Database', 'Linux' ]
permalink: database-dump-with-cron-jobs-and-mysql-dump
description: Guide to back up database using the cron job and mysql dump
---

Read post on guide to back up database using the cron job and mysqldump
<!--more-->

<img src="{{site.baseurl}}/img/posts/cron-jobs.jpg" class="img-thumbnail img-rounded"
height="400px" width="100%"
alt="Guide to back up database using the cron job and mysql dump">

<section>
<h2>What is backup?</h2>

<p>
Backup a copy of original file or data made in case the original is lost or damaged. Backup and recovery are
interconnected terms. The main purpose of the backup is to recover the data in case the original 
file and content is lost or damaged.
</p>
</section>

<section>
<h3>Backup process</h3>
<ol>
   <li> <b>Create</b> the copy of your original content</li>
   <li> <b>Store</b> in secure and separate location</li>
   <li><b>Use the backup</b> as a restoration method in case of data loss or damage.</li>
</ol>
</section>

<section>
<h3>Importance of backup </h3>
<ol>
<li>
<b>Security</b>: As size of system and organization increases, it needs to integrate the one part of system with another, the
   number of potential threats increases to the information that the system holds. Backup and recovery solution protects
   and save data.
</li>
<li>
<b>Ease of management</b>: The proper backup and restoration process avoids end users backing up their data own their own
   devices inconsistently and irregularly.
</li>
<li>
<b>Reliable replication</b>: Taking accurate replicate of the data makes it disaster-proof.
</li>
<li>
<b>Maintain compliance standards</b>: Regular backup of the critical data is needed to company the software standards
</li>
<li>
<b>Zero impact on performance</b>: Proper backup and system recover process reduces the system downtime during the data
damage, loss or corruption which increases more uptime.
</li>
</ol>
</section>


<section>
<h3>Cron jobs:</h3>
<p>The Cron daemon is a built-in Linux utility that reads the crontab from commands and scripts to run the process
automatically at scheduled time. Cron read the crontab for commands and scripts for predefined commands and scripts.</p>

<p>Want to learn more about cron jobs and see all the possible examples. Read <a href="{% post_url 2021-07-01-ultimate-guide-to-mysqldump%}">Ultimate Guide on Crontab with examples</a>
</p>

</section>


<section>
<h3>mysqldump:</h3>
<p>Mysqldump is a command-line utility to create dump of the MySQL database along with structure, its data to restore that
in case of database corruption, error and system crash.</p>
<p>Want to know more this database dump? Read <a href="{% post_url 2021-07-01-ultimate-guide-to-mysqldump%}">ultimate guide on MysqlDump</a></p>

</section>

<section>
<h3>steps:</h3>
<h3>1. Add username and password in the .my.cnf file</h3>
<p>Mysqldump does not allow user to enter user and password in the same command. 
There is two-way to overcome this password.</p>
<ol style="list-style-type: lower-roman">
<li>Set -p option in dump command and enter password when the system asks for password which is not possible while
running the backup script using cron jobs.
</li>
<li>Save user and password  in .my.cnf file and allows Mysql dump to use the user and password</li>
</ol>


<p>Want to know more this database dump without using password? Read <a href="{% post_url 2021-07-01-database-dump-without-using-password%}">Database dump without using password</a></p>

</section>


<section>
<h3>Steps to update the password in configuration file</h3>
<ol style="list-style: lower-roman">
<li>
Create new file at ~/.my.cnf
<pre class="terminal">
  sudo nano ~/.my.cnf
</pre>

</li>

<li> Update the mysql setting in .my.cnf file:
<pre class="terminal">
   [mysqldump]
   user=mysqluser
   password=mysql_user_secret_password 
</pre>
</li>
<li> Add 600 permission to .my.cnf file
<pre class="terminal">
  sudo chmod 600 ~/.my.cnf
</pre>
</li>
</ol>
<p>The password in the .my.cnf is used by the mysqldump. So, we don't need to provide the password using the
mysqldump command
</p>
</section>

<section>
<h3>2. Add the script to dump the mysql at <span class="important">/var/database_backup/database_dump.py</span> </h3>

   <pre class="terminal">
   
      ########################################################################
      #
      # This python script is used for mysql database backup using mysqldump.
      #
      ########################################################################
    
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
   </pre>

</section>


<section>
<h3>3. create a bash script to run the database dump file at <span class="important">/var/database_dump</span> </h3>
 <pre class="terminal">
   #!/bin/bash
   /usr/bin/python3 /var/database_backup/database_dump.py
</pre>
</section>

<section>
<p>If you are using any virtual environment, you don't need to activate the virtual environment and then invoke the command. 
You can just give a full path from root to python executable of virtual environment. </p>
<pre class="terminal">
   #!/bin/bash
   /full-path-to-virtual-env/bin/python3 /var/database_backup/database_dump.py
</pre>
<p>The system takes all the necessary dependencies from the virtual environment.
</p>
</section>


<section>
<h3>4. Schedule the command to run the database dump script using crontab</h3>
<p>Want to learn more on crontab configuration? Read <a href="{% post_url 2021-06-27-ultimate-guides-to-crontab-and-awesome-example%}">Ultimate guide to crontab</a></p>
</section>



<section>
<ol style="list-style: lower-roman">
<li>To open the crontab to schedule the cron jobs. run the following command in the terminal:
<pre class="terminal">
   crontab -e
</pre>
</li>
<li>
Append the following at the end of the crontab file 

<pre class="terminal">
   # run every 12 hours
   0 */12 * * * /var/database_backup/script_runner.sh >> /var/database_backup/logs/database_dump.log 2>&1
   # run every 30 minutes
   */30 * * * * /var/database_backup/script_runner.sh >> /var/database_backup/logs/database_dump.log 2>&1
</pre>
</li>
<li>Close the crontab file using the ctrl+O and then press enter button</li>
</ol>

<p>The updated cron jobs are automatically recognized by the system. </p>
</section>


