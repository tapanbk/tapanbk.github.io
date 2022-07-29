---
layout: post
section-type: post
title: Ultimate guides to crontab and some awesome example
category: Server
tags: [ 'Linux', 'Crontab', 'System Admin' ]
permalink: ultimate-guides-to-crontab-and-some-awesome-examples
description: Ultimate guide to crontab and their examples
---

Read about ultimate guides to crontab with some awesome example
<!--more-->

<img src="{{site.baseurl}}/img/posts/cron-jobs.jpg" class="img-thumbnail img-rounded" height="400px" alt="database-dump"/>

<section>
<h1>Cron  jobs</h1> 
<p>
<span class="important">Cron</span> also known as cron jobs is a built-in software utility that is used to schedule a
time-based job in Unix-like computer operating systems.
Users setup and maintain software environments to use cron to schedule jobs which could be
either commands or shell scripts to run periodic tasks at fixed time, date or interval. It automates system
administration, system maintenance tasks or repetitive like sending the register email, taking database backup, sending
notifications.
</p>
</section>

<section>
<h2>Crontab:</h2> 
<p>
Crontab or cron table file handles actions of cron. The crontab is a configuration file which specifies shell commands
to run periodic tasks at a given schedule. Each user can have their own individual crontab files. There is also a
system-wide crontab file usually located in <span class="important">/etc</span>.
</p>
</section>

<section>
<h3>Prerequisites for cron jobs</h3>
<ol>
    <li>A linux system</li>
    <li>command line/terminal</li>
    <li>A user account with root or sudo privileges</li>
</ol>
</section>

<section>
<h3>Edit or Update cron jobs</h3>
<p>
You can edit crontab by running following commands for current user
</p>
    <pre class="terminal">
        crontab -e
    </pre>
    </section>

<section>
<p>For sudo users</p>
<pre class="terminal">
    sudo crontab -e
</pre>  
</section>

<section>
<p>You can use -u pre  {username} to specify which users crontab to edit</p>
<pre class="terminal">
    sudo crontab -u username -e
</pre>
</section>

<section>
<p>All users have their own crontab. You can edit the root's crontab by using sudo</p>
</section>

<section>
<h3>list the crontab jobs:</h3>
<pre class="terminal">
    crontab -l
    sudo crontab -l # for sudo users
    sudo crontab -u username -l     # for username
</pre>     
</section>


<section>
<h3>Basic Crontab Syntax</h3>
<p>
Each line in crontab expects a cron expression mad of five fields which represent the time to execute the command,
followed by a shell command to execute and optional output
</p>

<pre class="terminal">
    a b c d e /directory/command output
</pre>   
</section>

<section>
<p>So, the parts of a cron command are:</p>
<ol>
<li>The first five fields <span class="important">a b c d e</span> specify the time/date and recurrence of the job.</li>
<li>In the second section, the <span class="important">/directory/command </span> specifies the location and script you want to run.</li>
<li>The final segment <span class="important">output</span> is optional. It defines how the system notifies the user of the job completion</li>
</ol>
</section>

<section>
<h3>Cron Job Time Format</h3>
<table class="table">
<thead>
  <tr>
      <td> Field</td>
      <td> Possible Values </td>
      <td>Syntax </td>
      <td>Description </td>
    </tr>
</thead>
  <tbody>
    <tr>
      <td>[a] – Minute</td>
      <td>0 – 59</td>
      <td>2 * * * *  </td>
      <td>The cron job is initiated every time the system clock shows 10 in the minute’s position.</td>
    </tr>
    <tr>
      <td>[b] – Hour </td>
      <td> 0 – 23 </td>
      <td> 0 2 * * *</td>
      <td>The cron job runs any time the system clock shows 2am (2pm would be coded as 14).</td>
    </tr>
    <tr>
      <td>[c] – Day </td>
      <td> 1 – 31</td>
      <td>0 0 2 * * </td>
      <td> The day of the month is 2 which means that the job runs every 2nd day of the month.</td>
    </tr>
    <tr>
      <td>[d] – Month </td>
      <td>0 = none, 1 = January 12 = December</td>
      <td>0 0 0 2 *</td>
      <td>The numerical month is 2 which determines that the job runs only in February.</td>
    </tr>
    <tr>
      <td>[e] – Day of the Week</td>
      <td>0 = Sunday and 7 = Sunday</td>
      <td>0 0 0 * 2</td>
      <td>2 in the current position means that the job would only run on Tuesday. </td>
    </tr>
  </tbody>
</table>
</section>

<section>
<h3>Examples :</h3>
<h4>RUN EVERY MINUTE</h4>
<p>
The <span class="important">* * * * *</span> symbol means to run on every occurrence. It means
* on every minute
* of every hour
* on each day of the month
* for each month
* every day of the week
</p>
</section>

<section>
<h4>RUN EVERY  15 seconds</h4>
<p>
To schedule a task to execute every 30 seconds is not possible by time parameters, But it can be done by scheduling same
task as below
</p>

<pre class="terminal">
    * * * * * /path/to/executable/script.py
    * * * * *  sleep 30; /path/to/executable/script.py
</pre>   
</section>


<section>
<h4>RUN EVERY  MINUTES</h4>
<pre class="terminal">
    * * * * *    /path/to/script
</pre> 
</section> 


<section>
<h4>RUN EVERY 15 MINUTES</h4>
<pre class="terminal">
    */15 * * * *   /path/to/script
</pre>   
</section>

<section>
<h4>RUN EVERY SIX hours</h4>
<pre class="terminal">
    0 */6 * * * /path/to/executable/script.py
</pre>   
</section>

<section>
<h4>Run at 2am daily:</h4>
<pre class="terminal">
    0 2 * * * /bin/sh backup.sh
</pre>   
</section>

<section>
<h4>Run twice a day (11 AM and 11 PM daily).</h4>
<p>
You can specify multiple timestamps by comma separated
</p>
<pre class="terminal">
    0 11,23 * * * /path/to/executable/script.py
</pre>   

</section>

<section>
<h4>Run at one minute past midnight (00:01) every day:</h4>
<pre class="terminal">
    1 0 * * * /path/to/script
</pre>   
</section>

<section>
<h4>RUN script at 01:10 (01:10 AM) every Sunday.</h4>

<pre class="terminal">
    10 1 * * 0 /path/to/script
</pre>   
</section>

<section>
<h4>RUN MONTHLY ON THE 1ST AT 2:15 AM</h4>
<pre class="terminal">
    15 2 1 * *    /path/to/script
</pre>   
</section>

<section>
<h4>RUN at selected month</h4>
<pre class="terminal">
    * * * jan,may,aug *  /script/script.sh
</pre>   
</section>

<section>
<h4>RUN at selected days (Sunday and Friday at 5 PM)</h4>
<pre class="terminal">
    0 17 * * sun,fri  /script/script.sh
</pre>   
</section>

<section>
<h4>RUN at twice on every Sunday and Monday.</h4>
<pre class="terminal">
    0 4,17 * * sun,mon /path/to/executable/script.py
</pre>   
</section>

<section>
<h4>RUN yearly</h4>
<p>
@yearly is similar to <span class="important">0 0 1 1 *</span> as it will run at first minute of every year. It can
be used to send the year greetings to the customers or friends.
</p>

<pre class="terminal">
    @yearly /path/to/executable/script.py
</pre>   
</section>

<section>
<h4>RUN monthly</h4>
<p>
<span class="important">@monthly</span> timestamp is similar to <span class="important">0 0 1 * *</span> as
it will execute in the first minute of the month. It can be used to automate the tasks like paying bills or send invoice
to the customers.
</p>
<pre class="terminal">
    @monthly /path/to/executable/script.py
</pre>   
</section>

<section>
<h4>RUN weekly</h4>
<p>
<span class="important">@weekly</span> timestamp is similar to <span class="important">0 0 * * mon</span> as
it will execute a task in the first minute of the week. It may be useful to do weekly tasks like the cleanup of the
system etc.
</p>
<pre class="terminal">
    @weekly /bin/script.sh
</pre>       
</section>


<section>
<h4>RUN daily</h4>
<p>
<span class="important">@daily</span> timestamp is similar to <span class="important">0 0 * * *</span> as
it will execute a task in the first minute of every day. It may be useful to do daily task.
</p>

 <pre class="terminal">
    @daily /path/to/executable/script.py
</pre>      
</section>

<section>
<h4>RUN hourly</h4>
<p>
@hourly timestamp is similar to <span class="important">0 * * * *</span> as it will execute a task in the first
minute of every hour, It may be useful to do hourly tasks.
</p>

<pre class="terminal">
     @hourly /path/to/executable/script.py
</pre>   
</section>

<section>
<h4>RUN tasks on reboot</h4>
<p>
<span class="important">@reboot</span> is useful for those tasks which you want to run on your system startup to
start tasks in the background automatically when system starts.
</p>
<pre class="terminal">
    @reboot /path/to/executable/script.py
</pre>   
</section>


<section>
<h4>Run a command from a Python virtual environment</h4>
<p>
We can run the python command using the python virtual environment. There is no need to activate the virtual environment
or create a script to activate it. Python interpreter can directly be invoked using the full path from virtual
environment It will automatically use the packages associated with that from virtual environment location.
</p>
<pre class="terminal">
    * * * * *    /fullpath/to/venv/bin/python /path/to/executable/script.py
</pre>   
</section>

<section>
<h3>pass environment variables</h3>
<pre class="terminal">
    * * * * *    MY_ENV_VAR="test" MY_ENV_VAR_2="bvariable" /path/to/executable/script.sh
</pre>   
</section>

<section>
<h3>Running multiple commands at once</h3>
<p>
We can run multiple commands in a row by Concatenation with &&. If any scripts fails(returns non-zero exit code), it
will exit and will not run the next command
</p>
<pre class="terminal">
    * * * * *    /script1.sh && /script2.sh && /script3.sh
</pre>  
</section>

<section>
<p>or</p>

<pre class="terminal">
    * * * * * /script1.sh; /script2.sh; /script3.sh
</pre>
</section>


<section>
<h3>REDIRECT OUTPUT TO A LOG FILE</h3>
<pre class="terminal">
    * * * * *     /path/to/executable/script.sh > /path/to/log/file.txt 2>&1
</pre>   
</section>

<section>
<h3>DISCARD OUTPUT</h3>
<pre class="terminal">
    * * * * *     /path/to/executable/script.sh > /dev/null 2>&1
</pre> 
</section>
  

<section>
<h3>View cron logs</h3>
<p>
The location of log file differ by linux distribution. The log file is mostly found at:
* The  <span class="important">journalctl</span> output systemd's <span class="important">cron.service</span>
* Log files in <span class="important">/var/log/</span> like <span class="important">/var/log/cron</span>
</p>
<h4>To check log files using <span class="important">journalctl</span> command:</h4>
<pre class="terminal">
    journalctl -u cron  #  View systemd logging
    journalctl -u cron -f   # Tail systemd log for cron
</pre>   
</section>

<section>
<h4>To view the log file in /var/log/:</h4>
<pre class="terminal">
    tail -f /var/log/cron
</pre>
<p>
Cron Schedules edited with <span class="important">crontab -e</span> are stored in <span class="important">/var/spool/cron</span> and they should
never be modified directly
</p>
</section>

<section>
<h3>Backup cron to text file:</h3>
<pre class="terminal">
    crontab -l > cron-backup.txt
</pre> 
</section>
  

<section>
<h3>Removing current scheduled cron:</h3>
<pre class="terminal">
    crontab -r
</pre>   
</section>


<section>
<h4>Restore cron from text file:</h4>
<pre class="terminal">
    crontab cron-backup.txt
</pre>   
</section>


<section>
<h3>Tips</h3>
<ul>
    <li>Always useful path of files and executables </li>
    <li>Scripts must be executable. You can make script executable by running
    (<span class="important">sudo chmod +x filename</span>)
    </li>
    <li>If several steps are needed, put all the steps in the script files and call the script file.</li>
    <li>Use quotation marks for anything with spaces.</li>
    <li>Use the lowest privilege user possible. Do not run jobs as root unless absolutely needed.</li>
</ul>
</section>
