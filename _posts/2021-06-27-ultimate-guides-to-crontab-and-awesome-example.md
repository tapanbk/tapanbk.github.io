---
layout: post
section-type: post
title: Ultimate guides to crontab and some awesome example
category: server
tags: [ 'linux', 'crontab', 'system admin' ]
permalink: ultimate-guides-to-crontab-and-some-awesome-examples
description: Ultimate guide to crontab and their examples
---

<img src="{{site.baseurl}}/img/posts/cron-jobs.jpg" class="img-thumbnail img-rounded" height="400px" alt="database-dump">
## Cron  jobs
<span class="important">Cron</span> also known as cron jobs is a built-in software utility that is used to schedule a time-based job in Unix-like
computer operating systems. Users setup and maintain software environments to use cron to schedule jobs which could be
either commands or shell scripts to run periodic tasks at fixed time, date or interval. It automates system
administration, system maintenance tasks or repetitive like sending the register email, taking database backup, sending
notifications.

## Crontab:

Crontab or cron table file handles actions of cron. The crontab is a configuration file which specifies shell commands
to run periodic tasks at a given schedule. Each user can have their own individual crontab files. There is also a
system-wide crontab file usually located in <span class="important">/etc</span>.

### Prerequisites for cron jobs
1. A linux system
2. command line/terminal
3. A user account with root or sudo privileges

### Edit or Update cron jobs
You can edit crontab by running following commands for current user
    
    crontab -e

For sudo users
    
    sudo crontab -e

You can use -u <username> to specify which users crontab to edit
    
    sudo crontab -u username -e

All users have their own crontab. You can edit the root's crontab by using sudo

### list the crontab jobs:

    crontab -l
    sudo crontab -l # for sudo users
    sudo crontab -u username -l     # for username

### Basic Crontab Syntax

Each line in crontab expects a cron expression mad of five fields which represent the time to execute the command,
followed by a shell command to execute and optional output

    a b c d e /directory/command output

So, the parts of a cron command are:

1. The first five fields <span class="important">a b c d e</span> specify the time/date and recurrence of the job.
2. In the second section, the <span class="important">/directory/command <span> specifies the location and script you want to run.
3. The final segment <span class="important">output</span> is optional. It defines how the system notifies the user of the job completion

### Cron Job Time Format

| Field      | Possible Values     | Syntax    |  Description    |
| :------------- | :----------: |  :----------: | ----------: |
| [a] – Minute | 0 – 59       | 2 * * * *        | The cron job is initiated every time the system clock shows 10 in the minute’s position. |
| [b] – Hour  | 0 – 23     |  0 2 * * *	| The cron job runs any time the system clock shows 2am (2pm would be coded as 14).|
| [c] – Day      | 0 – 31 | 0 0 2 * *     |  The day of the month is 2 which means that the job runs every 2nd day of the month.|
| [d] – Month | 0 = none and 12 = December    | 0 0 0 2 *	 |  The numerical month is 7 which determines that the job runs only in February. |
| [e] – Day of the Week | 0 = Sunday and 7 = Sunday     | 0 0 2 * *    | 2 in the current position means that the job would only run on Tuesday. |


## Examples:

#### RUN EVERY MINUTE

The <span class="important">* * * * *</span> symbol means to run on every occurrence. It means 
* on every minute 
* of every hour 
* on each day of the month 
* for each month 
* every day of the week

#### RUN EVERY  15 seconds

To schedule a task to execute every 30 seconds is not possible by time parameters, But it can be done by scheduling same
task as below

    * * * * * /path/to/executable/script.py
    * * * * *  sleep 30; /path/to/executable/script.py

#### RUN EVERY  MINUTES
    * * * * *    /path/to/script

#### RUN EVERY 15 MINUTES

    */15 * * * *   /path/to/script

#### RUN EVERY SIX hours

    0 */6 * * * /path/to/executable/script.py

#### Run at 2am daily:

    0 2 * * * /bin/sh backup.sh

##### Run twice a day (11 AM and 11 PM daily).

You can specify multiple timestamps by comma separated

    0 11,23 * * * /path/to/executable/script.py

#### Run at one minute past midnight (00:01) every day:
    1 0 * * * /path/to/script

#### RUN script at 01:10 (01:10 AM) every Sunday.
    10 1 * * 0 /path/to/script

#### RUN MONTHLY ON THE 1ST AT 2:15 AM
    15 2 1 * *    /path/to/script

#### RUN at selected month
    * * * jan,may,aug *  /script/script.sh

#### RUN at selected days (Sunday and Friday at 5 PM)
    0 17 * * sun,fri  /script/script.sh

#### RUN at twice on every Sunday and Monday.
    0 4,17 * * sun,mon /path/to/executable/script.py

#### RUN yearly

@yearly is similar to <span class="important">0 0 1 1 *</span> as it will run at first minute of every year. It can
be used to send the year greetings to the customers or friends.

    @yearly /path/to/executable/script.py

#### RUN monthly

<span class="important">@monthly</span> timestamp is similar to <span class="important">0 0 1 * *</span> as
it will execute in the first minute of the month. It can be used to automate the tasks like paying bills or send invoice
to the customers.

    @monthly /path/to/executable/script.py

#### RUN weekly

<span class="important">@weekly</span> timestamp is similar to <span class="important">0 0 * * mon</span> as
it will execute a task in the first minute of the week. It may be useful to do weekly tasks like the cleanup of the
system etc.
    
    @weekly /bin/script.sh

#### RUN daily

<span class="important">@daily</span> timestamp is similar to <span class="important">0 0 * * *</span> as
it will execute a task in the first minute of every day. It may be useful to do daily tasks.
    
    @daily /path/to/executable/script.py

#### RUN hourly

@hourly timestamp is similar to <span class="important">0 * * * *</span> as it will execute a task in the first
minute of every hour, It may be useful to do hourly tasks.

     @hourly /path/to/executable/script.py

#### RUN tasks on reboot

<span class="important">@reboot</span> is useful for those tasks which you want to run on your system startup to
start tasks in the background automatically when system starts.

    @reboot /path/to/executable/script.py


#### Run a command from a Python virtual environment

We can run the python command using the python virtual environment. There is no need to activate the virtual environment
or create a script to activate it. Python interpreter can directly be invoked using the full path from virtual
environment It will automatically use the packages associated with that from virtual environment location.

    * * * * *    /fullpath/to/venv/bin/python /path/to/executable/script.py

### pass environment variables

    * * * * *    MY_ENV_VAR="test" MY_ENV_VAR_2="bvariable" /path/to/executable/script.sh

### Running multiple commands at once

We can run multiple commands in a row by Concatenation with &&. If any scripts fails(returns non-zero exit code), it
will exit and will not run the next command

    * * * * *    /script1.sh && /script2.sh && /script3.sh

or
    
    * * * * * /script1.sh; /script2.sh; /script3.sh

### REDIRECT OUTPUT TO A LOG FILE

    * * * * *     /path/to/executable/script.sh > /path/to/log/file.txt 2>&1

### DISCARD OUTPUT

    * * * * *     /path/to/executable/script.sh > /dev/null 2>&1

### View cron logs

The location of log file differ by linux distribution. The log file is mostly found at:
* The  <span class="important">journalctl</span> output systemd's <span class="important">cron.service</span>
* Log files in <span class="important">/var/log/</span> like <span class="important">/var/log/cron</span>

#### To check log files using <span class="important">journalctl</span> command:

    journalctl -u cron  #  View systemd logging
    journalctl -u cron -f   # Tail systemd log for cron

#### To view the log file in /var/log/:

    tail -f /var/log/cron

Cron Schedules edited with <span class="important">crontab -e</span> are stored in <span class="important">/var/spool/cron</span> and they should
never be modified directly

### Backup cron to text file:
    crontab -l > cron-backup.txt

### Removing current scheduled cron:
    crontab -r

#### Restore crons from text file:
    crontab cron-backup.txt

### Tips
* Always use full path of files and executables 
* Scripts must be executable. You can make script executable by running (<span class="important">sudo chmod +x filename</span>)
* If several steps are needed, put all the steps in the script files and call the script file. 
*  Use quotation marks for anything with spaces.
* Use the lowest privilege user possible. Do not run jobs as root unless absolutely needed.
