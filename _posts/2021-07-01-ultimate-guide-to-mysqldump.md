---
layout: post
section-type: post
title: Ultimate Guide to mysqldump with examples
category: Database
tags: [ 'Mysql', 'Server', 'Database_dump' ]
permalink: ultimate-guide-to-mysql-dump-with-examples
description: mysql dump and mysql dump examples
---

Read an article on ultimate guide on mysql dump and some examples
<!--more-->

<img src="{{site.baseurl}}/img/posts/database-dump-2.jpg" class="img-thumbnail img-rounded" height="400px" alt="database-dump">

<section>
<h1>What is Mysqldump?</h1>
<p>
<span style="color: #00fae0">MySQL</span> is widely used relational database management system. Mysql can store from the
character to the large media files. Mysqldump is a command-line utility that is a part of MySQl relational database
packages used to create the MySQL database backup. It generated the SQL statements that can be used to recreate or
restore the database schema and its data. The output can be generated in XML, delimited text, or CSV format.
</p>
</section>

<section>
<p>
By default, mysqldump does not contain information_schema database, performance_schema and MySQL Cluster ndbinfo
database details.
</p>
</section>

<section>
<p>
A software bug or hard-drive failure could be disastrous. So, it is always a good idea to take backup of the database.
</p>
</section>

<section>
<h2>Syntax of the mysqldump utility:</h2>
<pre class="terminal">
    mysqldump -u [user_name] –p [user_password] [options] [database_name] [table_name] > [dump_file_name.sql]
</pre>  
</section>

<section>
<h3>Parameters Explained:</h3>
<ul>
<li>-u [user_name]: Username to connect to the mysql server</li>
<li>-p [password]: The password of the respective MySQL user</li>
<li>option : The configuration options to customize the backup data</li>
<li>database_name: Name of the database that you want to take backup</li>
<li>table_name: table_name parameter is optional. If you want to back up all the tables of the database, you can skip the table_name parameter.</li>
<li>“<” OR ”>”: ">" is used to generate the backup and "<" is used to restore the backup.
It indicates whether we are generating the backup file or restoring from the file.</li>
<li>dump_file_name.sql: This parameter contains the path, and the backup file name.
We can provide the extension of the file according to the file format we want to back up on.</li>
</ul>


<p>
You will be prompted to enter the user password mentioned in -u parameter. After successful authentication, the database
dump will be created.
</p>
</section>

<section>
<p>
If you are logged in same user that you want to perform the database dump, you can omit <span style="color: #00fae0">
-u</span> and <span style="color: #00fae0">-p</span> options.
</p>

<pre class="terminal">
    mysqldump  [options] [database_name] [table_name] > [dump_file_name.sql]
</pre>
<p>
To generate only database structure without any data, <span style="color: #00fae0">--no-data</span> option is used.
</p>

<pre class="terminal">
    mysqldump -u database-user -p --no-data database_name > database_structure.sql
</pre>     
<p>
This is the most common way to create the database backup. We can create the multiple database at once.
</p>
</section>

<section>
<h2>Backup multiple MySQL database</h2>
<p>
We need to use <span style="color: #00fae0">--database</span> followed by the list of databases name separated by space.
</p>

<pre class="terminal">
    mysqldump -u root -p --databases database_name_1 database_name_1 > databases_dump_1_2.sql
</pre>      
<p>
This command will create the database dump containing all the database mentioned.
</p>
</section>

<section>
<h3>Backup all MySQL database</h3>
<p>Use <span style="color: #00fae0">--all-databases</span> option to back up all the MySQL databases.</p>
<pre class="terminal">
    mysqldump -u root -p --all-databases > all_databases.sql
</pre>
</section>

<section>
<h3>Backup all MySQL databases to separate files</h3>
<p>
Mysqldump utility doesn't provide an inbuilt option to back up all databases to separate files at once. we can easily
achieve that with a for loop and bash
</p>
<pre class="terminal">
   for DB in $(mysql -e 'show databases' -s --skip-column-names); do
        mysqldump $DB > "$DB.sql";
    done
</pre>  
 </section>

<section>
<h3>Download database dump as compressed file</h3>
<p>It is good idea to compress file the output file if the size of the file is very large.</p>
<pre class="terminal">
    mysqldump database_name | gzip > dump.sql.gz
</pre>
</section>

<section>
<h3>Restoring the MySQL database dump</h3>
<p>
The database dump can be restored using the mysql database dump.
The command to restore the database dump:
</p>
<pre class="terminal">
    mysql  database_name < database_dump.sql
</pre>
</section>

<section>
<h3>Restore all database at once</h3>
<p>
The database back up with <span style="color: #00fae0">-all-databases</span> option can be restored at once.
We can store the all database using <span style="color: #00fae0">--one-database</span> option
</p>
<pre class="terminal">
    mysql --one-database database_name < all_databases_dump.sql
</pre>  
</section>


<section>
<h3>Where clause with MySQLDump</h3>
<p>
If we want to dump the records from table that with specific condition, we can specify the condition during database dump.
For example, if we want to dump the database from users table from customers table where created_at is greater than
'2021-01-02',
</p>
<pre class="terminal">
    mysqldump -u root -p customers --tables users --where="created_at > '2021-01-02' " > database_dump.sql
</pre>  
</section>