---
layout: post
section-type: post
title: Improve the software development process using make commands
category: Bash
tags: [ 'Tool', 'Bash'  ]
permalink: be-productive-in-software-development-using-make-file
---

Improve the software development process using make commands  - Tapan BK

<!--more-->


<img
src="{{site.baseurl}}/img/posts/improve-the-software-development-process-using-make-command.png"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Improve the software development process using make commands - Tapan BK"
alt="Improve the software development process using make commands- Tapan BK">

<section>
<p>
 <span class="important">Makefile</span> is a special text based file that is used by <span class="important">make</span> utility.
It automates the process of compiling and linking programs. It contains list of a command that can be quickly executed by running the corresponding make command.  
It contains sets of rules to build a target command or set of command.
Makefile is easy to execute a long list of commands and functions using a single command.
</p>

<p>Makefile  are commonly used in software development projects to manage complex build processes.</p>
</section>

<section>
<p>The simple and high level syntax for Makefile target is as follows:</p>
<pre class="terminal">
    ruleA: ruleB ruleC
        command1
        command2
</pre>

<p>
A Makefile mainly consists of a set of rules, each of which has a list of zero or more prerequisites, and then zero
or more commands. At a very high level, when a rule is invoked, Make first invokes any prerequisite rules (if needed),
which may have their own stanzas defined elsewhere) and then runs the designated commands.
</p>
</section>


<section>
<p>The high level syntax with specific key word for Make target is as follows:</p>
<pre class="terminal">
    target: prerequisites
        command
        command
        command
</pre>

<p>A <span class="important">target</span>  can be the name of the executable or an object file. It can also be the name of a rule or action.</p>
<p>A <span class="important">prerequisite</span>  is an action or file used as an input for the target. These files/actions need to 
exist before the commands for the target are run. These are also called dependencies. 
We can declare multiple dependencies for a target by separating them with blank space. Some rules may not require any dependencies.
</p>
<p>A <span class="important">command</span>  is a single unit of work that needs to be done in order to make the target(s). These need to start with a tab character.
</p>

<p>The basic example of the Makefile is: </p>
<pre class="terminal">
    say_hello:
        echo make says hello
</pre>
</section>


<section>
<h3>Installation</h3>
<p>To install the GNU Make command, please run the following commands</p>
<pre class="terminal">
    sudo apt update
    sudo apt install make
</pre>
<p>For other Distros, please follow <a href="https://www.incredibuild.com/integrations/gnu-make" target="_blank">GNU Make</a></p>
</section>


<section>
<h3>Creating the  Make file</h3>
<p>To create the configuration file for make command, Just create the file name called <span class="important">Makefile</span>
without any file extensions
</p>
<pre class="terminal">
    touch Makefile
</pre>
</section>

<section>
<h3>Adding commands on the Makefile</h3>
<p>To add contents in Makefile. Open the file with your favorite text editor and put make command as shown in the
following example</p>

<pre class="terminal">
    say_hello:
            echo "Hello world"
            
    say_welcome:
            echo "Welcome guys"
</pre>
</section>


<section>
<h3>Running the make command</h3>
<p>To run the make command, just type make followed with the rule name like say_hello or  say_welcome. 
If you just type make command, the default rule will run. We will explore about default rule later in this post.
If default rule is missing, it will run the first rule in the Makefile.
</p>

<pre class="terminal">
    make {replace_with_command_from_the_make_file}
    make say_hello
    make say_welcome
</pre>

</section>

<section>
<h3>Some examples of make example that will be very helpful for django</h3>

<pre class="terminal">
    runserver:
        python manage.py runserver

    makemigrations:
        python manage.py makemigrations

    migrate:
        python manage.py migrate
    
    createsuperuser:
        python manage.py createsuperuser
</pre>

</section>



<section>
<p>By default, when we run the make command, the first rule is executed. To execute some other rules of our choice,
we need to set <span class="important">.DEFAULT_GOAL</span> variable in the Makefile. For example, if you want to execute runserver by default, define
<span class="important">.DEFAULT_GOAL :=runserver</span>. Now, when we run the make command, it will run the 
<span class="important">runserver</span> command.
</p>

<p>Alternately use can use default keyword. For example, if you want to execute runserver by default, define
<span class="important">.default:runserver</span>. Now, when we run the make command, it will run the runserver command.
</p>

<pre class="terminal">
    .DEFAULT_GOAL :=runserver

    runserver:
        python manage.py runserver

    makemigrations:
        python manage.py makemigrations

    migrate:
        python manage.py migrate
    
    createsuperuser:
        python manage.py createsuperuser
</pre>
</section>


<section>
<h3>Some more examples of make rules example for docker for django</h3>

<pre class="terminal">
    build:
        docker compose build;
    
    test-build-nocache:
        docker compose -f docker-compose.yml build --no-cache;

    deploy:
        docker-compose build
        docker-compose up -d

    run-server:
        docker compose up;

    test-run-server-d:
        docker compose -f docker-compose.yml up -d;

    migrations:
        docker compose exec django python manage.py makemigrations;

    migrate:
        docker compose exec django python manage.py migrate;
    
    shell:
        docker compose exec django python manage.py shell;
    
    down:
        docker compose down;
</pre>
</section>


<section>
<p>Instead of typing the following commands one by one. </p>

<pre class="terminal">
    virtualvenv -p python3 venv
    source venv/bin/activate
    pip install -r requirements.txt
    python3 manage.py makemigrations
    python3 manage.py migrate
    python3 manage.py collectstatic
    python3 manage.py runserver
</pre>

<p>It would be easier to run something like that run all the above commands.</p>

<pre class="terminal">
   make start
</pre>
<p>Before that, let's learn about the creating and accessing the variables in the Makefile</p>
</section>



<section>
<h3>Creating Variables in Makefiles</h3>
<p>
<span class="important">Variables</span> can be defined inside a Makefile to hold the information about files, arguments or even parts of the command.
Variables are written in UPPER_CASE followed by colons and is equals to sign (:=) and its value. Generally, variables are 
declared at the top of the Makefile.
</p>

<pre class="terminal">
    PYTHON:=python3.12
    MANAGE:=venv/bin/python manage.py
    ACTIVATE:=venv/bin/activate

    # Django Configuration
    PORT:= 8000
</pre>
</section>


<section>
<h3>Accessing Variables in Makefiles</h3>
<p>
Variables that are declared in Makefile can be access as a part of the command. The variables can ve access using
$ sign followed by curly braces like <span class="important">${VARIABLE_NAME} </span>where 
<span class="important">VARIABLE_NAME</span> is the name of the variable whose value you want to access.
</p>

<pre class="terminal">
    PYTHON:=python3.12
    MANAGE:=venv/bin/python manage.py
    ACTIVATE:=venv/bin/activate

    # Django Configuration
    PORT:= 8000

    install: virtualenv
        @echo "-> Installing Dependencies"
        @${ACTIVATE} pip3 install -r requirements.txt

    migrate:
        ${MANAGE} makemigrations
        @echo "-> Apply database migrations"
        ${MANAGE} migrate
    
    run:
        ${MANAGE} runserver ${PORT}

    superuser:
        @${MANAGE} createsuperuser
</pre>
<p>In this example, the <span class="important">ACTIVATE</span> variable as been accessed using <span class="important">${ACTIVATE}</span></p>
</section>

<section>
<h3>Advance Make commands using variables</h3>

<pre class="terminal">
    VENV := venv
    BIN := $(VENV)/bin
    PYTHON := $(BIN)/python3
    SHELL := /bin/bash
    
    include .env

    help: ## Show this help
        @egrep -h '\s##\s' ${MAKEFILE_LIST} | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

    venv: ## Make a new virtual environment
        virtualvenv -p python3 venv && source ${BIN}/activate

    install: venv ## Make venv and install requirements
        ${BIN}/pip install --upgrade -r requirements.txt
    
    freeze: ## Pin current dependencies
        ${BIN}/pip freeze > requirements.txt
    
    migrate: ## Make and run migrations
        ${PYTHON} manage.py makemigrations
        ${PYTHON} manage.py migrate
    
    db-up: ## Pull and start the Docker Postgres container in the background
        docker pull postgres
        docker-compose up -d
    
    db-shell: ## Access the Postgres Docker database interactively with psql. Pass in DBNAME={name}.
        docker exec -it container_name psql -d ${DBNAME}

    test: ## Run tests
        ${PYTHON} manage.py test application --verbosity=0 --parallel --failfast

    run: ## Run the Django server
        ${PYTHON} manage.py runserver
    
    start: install migrate run ## Install requirements, apply migrations, then start development server
</pre>
</section>

<section>
<p>

The above Makefile contains .env as include .env.  It was included to ensure the access to environment variables
stored in an .env file. This allows Make to use these variables in its commands. 
For example, the name of virtual environment or to pass in span class="important">${DBNAME}</span> to psql
</p>

<p>
“##” comment syntax in a Makefile gives you a handy description of command-line aliases you can look in to your Django project.
It’s very useful so long as you’re able to remember what all those aliases are.

The help command above, which runs by default, prints a helpful list of available commands when you run make or make help:
</p>
</section>

<section>

<p>The help command above, which runs by default, prints a helpful list of available commands when you run make or make help:</p>  

<pre class="terminal">
    help                 Show this help
    venv                 Make a new virtual environment
    install              Make venv and install requirements
    migrate              Make and run migrations
    db-up                Pull and start the Docker Postgres container in the background
    db-shell             Access the Postgres Docker database interactively with psql
    test                 Run tests
    run                  Run the Django server
    start                Install requirements, apply migrations, then start development server
</pre>
</section>


<section>
<h3>The use of .PHONY in Makefile</h3>
<p>.PHONY is actually itself a target for the make command. It denotes labels that do not represent actual files of the project.</p>
<p>Look at the basic example of Makefile</p>

<pre class="terminal">
    install:
        echo "installing dependencies"
</pre>

<p>
Everytime when you run  the make install command, it will execute the specified command from the Makefile (in our case echo
"installing dependencies"). However, if we have the file name called install, the make command would bound to run
the install file instead of the command in the Makefile. To override this behaviour, .PHONY is used to make install
command to execute no matter of the presence of a file named build.
</p>

<pre class="terminal">
    .PHONY: install
    install:
        echo "installing dependencies"
</pre>

</section>


<section>
<h3>Advantages of Makefile</h3>
<ul>
<li>
<b>Clarity and Readability: </b>
Makefile provides a readable and proper structured way to define complex  processes. Each process and its associated
commands are properly defined which helps to make easier for developers to understand and 
modify the process
</li>
<li>
<b> Documentation Within Makefile: </b>
Developers can add comments in Makefile for each target, its purpose and commands associated with it.
These comments helps to provide the inline documentation and easily accessible documentations for developers.
</li>

<li>
<b>Modularization:  </b>
Makefiles helps to divide and define various build processes into smaller, manageable process. Each process 
can have its own set of commands, dependencies and documentation. This modular process helps developers to
maintain  and update the build process over time.
</li>

<li>
<b>Dependency Management:  </b>
Makefiles automatically handle dependencies between targets and their prerequisites. It  also ensures that  commands
are executed in the correct order, based on the dependencies specified.
</li>

<li>
<b>Consistency Across Environments:  </b>
We can specify the commands and their required settings to build the project in Makefiles. This process helps to 
maintain consistency across different development environments and platforms which also helps to minimize discrepancies
between developer setup.
</li>


<li>
<b>Automation and Reproducibility:  </b>
We can automate the build process and ensure reproducibility across different environments. This process helps to 
streamline the development workflow and reduces the likelihood of human error during the build process.
</li>

<li>
<b>Extensibility and Customization: </b>

Makefiles can be easily extended and customized according to the changes in the project requirements or build process.
</li>
</ul>
</section>

<style>
    ol.major-steps{
    text-decoration: none;
    }
    .major-steps li{
    margin-bottom:30px
    }

    ol li, ul li{
    margin-bottom:30px
    }
    img.static-site{
    margin-bottom: 30px !important;
    }

</style>