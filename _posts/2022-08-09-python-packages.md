---
layout: post
section-type: post
title:  Ultimate guide on python packaging

category: Python
tags: ['Python', 'Packaging']
permalink: ultimate-guide-on-python-packaging
---
Ultimate guide on python packaging - Tapan BK

<!--more-->

<img
    src="{{site.baseurl}}/img/posts/python-modules-and-packages.jpg"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Install Let's Encrypt Free SSL/TLS Certificates with NGINX"
    alt="Install Let's Encrypt Free SSL/TLS Certificates with NGINX">

<section>

<p>
This blog post is about the python, it's packaging for distribution
</p>
</section> 

<p>

<section>
<h2>What is Python?</h2>
<p>
Python is one of the most popular programming language created by Guido van Rossum. It was first released on 1991.
</p>

<p>
It is object-oriented high-level interpreted and dynamic typing programming language. It has built-in dynamic data structures
which supports dynamic binding.  It is easy to learn.
</p>
<p>
Python is used in everything from building the production-ready web pages to system scripting, in software development to complex mathematics,
from big data to perform complex mathematics. It is used in the self-controls cars to the Netflix's recommendation
algorithm. Being the general purpose language, it is used in the wide range of applications that includes data science, 
machine learning, automation, software development, web development, automate tasks, conduct data analysis.
</p>
</section>


<section>
<h3>pros of python</h3>
<ol>
<li>It has easy, simple to use and learn the syntax.</li>
<li>It is dynamic typed language</li>
<li>It reduces the cost of maintenance</li>
<li>It supports the modules and packages. It encourages the code reuse and modular programs</li>
<li>It is freely distributed and supports major platforms.</li>
</ol>
</section>    


<section>
<h3>What can you do with python?</h3>
<ol>
<li>Web development or software development</li>
<li>System Scripting</li>
<li>Data analysis and visualization</li>
<li>Machine Learning</li>
<li>Software Testing and prototyping</li>
</ol>
</section>    

<section>
<h3>Why Python?</h3>
<ol>
<li>Python works on most of the platform including Windows, Mac, Linux, Raspberry pi</li>
<li>Simple Syntax</li>
<li>Write programs in fewer line of codes</li>
<li>It can be executed as soon as it is written.</li>
<li>It can be used in any, object-oriented , functional  or procedural</li>
</ol>
</section>    



<section>
<h3>Why Python is so popular?</h3>
<ol>
<li>It has a simple syntax which is easier to read and understand.</li>
<li>It speeds up the project time</li>
<li>It is open source which makes it free to use and distribute even for commercial purposes</li>
<li>It supports modules and libraries.</li>
<li>It has a large pools of modules and libraries contributed by the large and active community.</li>
<li>It supports file handing and database connectivity.</li>
<li>It comes inbuilt with the linux system like Ubuntu</li>
</ol>
</section>   

<section>
<h2>Modules in Python</h2>
<p>Module is any python file with .py extension containing the python code. Different python objects such as classes,
variables, constants, functions can be defined in the module. Module organizes these objects in logical way .
All the python objects are available to an interpreter session or another python module by importing
the module using the import statement. </p>

<p>Functions defined in the modules needed to be imported before using. </p>
</section>   

<section>
<h2>Creating a Module</h2>
<p>A module can be created by creating a text file with .py extension. A module to multiply a  number can be 
saved as mul.py file name with following code
</p>
<pre class="terminal">

    def mul(a, b):
        return a*b
</pre>
</section>   


<section>
<h2>Different ways to define a module in python:</h2>
<p>There are three different ways to define a module in python
</p>
   <ol>
        <li>Creating a module in python itself</li>
        <li>A python module can be written in C and loaded dynamically</li>
        <li>A built in module contained in the interpreter</li>
    </ol>

</section>  

<section>
<h2>Importing a Module</h2>
<p>A module can be imported in another python module by importing the module.</p>
<p>Following code can be used to import the mul file in the add.py file</p>
<pre class="terminal">

    import mul
    print(mul.mul(5,2))
</pre>
<p>This will multiply the 5 and 2 and returns its result.</p>

<p>Module can be imported as alias using as keyword</p>
<pre class="terminal">

    import mul as multiply
    print(multiply.mul(5,2))
</pre>
</section> 


<section>
<h2>Executing modules as scripts</h2>
<p>A module can be executed just as it is imported. But it needs the __name__ set to __main__ which means we need to
add the following code at the end of the module</p>

<pre class="terminal">
    
    if __name__ == "__main__":
    import sys
    mul(int(sys.argv[1]), int(sys.argv[2]))

</pre> 
<p>You can run the mul module with two params as follows in a terminal</p>

<pre class="terminal">
    
  python mul.py 5 2

</pre>
</section>   


<section>
<h2>Packages in Python</h2>
<p>A package contains one or more relevant modules organized in the logical way.</p>
</section>   


<section>
<h2>__init__.py</h2>
<p>The package folder must contain the special python file called __init__.py. The __init__.py has two purposes.</p>
<ol>
    <li>The folder containing the __init.py is recognized by python interpreter as a packages. </li>
    <li>It exposes the specific resources to other modules. The exposed modules can be imported in other modules or
packages</li>
</ol>
<p>The __init__.py can be normally kept empty. However, it contains import statement that import  specific funtions
from modules to available for import packages and modules.</p>

<pre class="terminal">

    from mul import mul

</pre>
</section>   


<section>
<h3>The Module Search Path</h3>
<p>This section describes what happens when we execute the following python statement</p>

<pre class="terminal">
  
    python mul.py 5 2

</pre>
<p>
When we execute the above statement, the python interpreter searches the mul.py in a list of directories which are 
assembled from the following sources.
</p>

<ol>
    <li>The current directory from which the script is executed</li>
    <li>The lists of directories listed on the environment variable PYTHONPATH</li>
    <li>THe installation dependent lists of directories configured at the time of Python installed./li>
</ol>
</section>

<section>
The lists of directories for searching the packages in the system can be obtained from the sys module
<pre class="terminal">
    
    import sys
    sys.path
</pre>
<p>
</section>




