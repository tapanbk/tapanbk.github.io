---
layout: post
section-type: post
title:  Ultimate guide to increase the swap memory in Linux
category: Linux
tags: ['Linux', 'Server',]
permalink: Ultimate-guide-to-increase-the-swap-memory-of-Linux
description: Ultimate guide to increase the swap memory of Linux
---
Ultimate guide to increase the swap memory in Linux
<!--more-->

<img
    src="{{site.baseurl}}/img/posts/increase-swap-memory-in-linux.jpeg.jpeg"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Ultimate guide to increase the swap memory of Linux"
    alt="Ultimate guide to increase the swap memory of Linux">

<section>
<p>
This blog post is about how to increase the swap memory of the linux.
The steps to set the swap memory is similar in all the linux Operating Systems. However, following steps are based on Ubuntu OS
</p>
</section> 


<section>
<h2>What is RAM?</h2>
<p>
Computer random access memory (RAM) is one of the main component of the computer system. RAM stores and provides access to 
the running application data. RAM is one of the fastest storage used in computer. RAM stores the information 
that is actively used so that it can be accessed quickly. The size of RAM one needs depends on the no of
concurrent program running in the system and the size of the individual program the system needs to run. As the size of
the program increases, more RAM is needed in the system along with high spec CPU. 
</p>
</section>

<section>
<h2>Why swap memory is needed in the system?</h2>

<p>The size of the RAM is limited in computer system due to various reasons. One of the reasons is it one of the very expensive memory among other memory type.
Another reason is that the server comes with the limited size of RAM with the basic or free plan like in AWS which provides
up to 30GB of storage and 1GB of RAM. So, for such systems, there can be backup plan to store the currently processing data or program when the system 
runs of the RAM. One of the solution is to set the swap memory. It is not as good as RAM. But it stills works fine for 
low performance system.
</p>
</section>

<section>
<h2>What is SWAP Memory?</h2>
<p>Whenever there is deficient of memory in the computer system for the program, the Operating System borrows the space to be used as 
memory from the Hard Drive. This borrowed space is called a Swap memory. 
</p>

<p>
Whenever the is not enough memory in the Ram, the memory management program looks for  inactive blocks which has not been
 used for a long period of time. As soon as it finds such block, it shifts those blocks into swap memory and free the memory of ram to be utilized for some
other program that need to be processed urgently.
</p>
</section>


<section>
<h3>Size of Swap Memory</h3>

 <table class="table table-hover">
        <thead>
        <tr>
            <th scope="col">Amount of RAM installed in system</th>
            <th scope="col">Recommended swap space</th>
            <th scope="col">Recommended swap space with hibernation</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>≤ 2GB</td>
                <td>2X</td>
                <td>3X RAM</td>
            </tr>
            <tr>
                <td>2GB – 8GB</td>
                <td>= RAM</td>
                <td>2X RAM</td>
            </tr>
            <tr>
                <td>8GB – 64GB</td>
                <td>4G to 0.5X RAM</td>
                <td>1.5X RAM</td>
            </tr>
             <tr>
                <td>>64GB</td>
                <td>Minimum 4GB</td>
                <td>Hibernation not recommended</td>
            </tr>
        </tbody>
      <caption class="text-dark">Recommended system swap space in Fedora 28's documentation.</caption>
    </table>
</section>

<section>
<h2>Create and Update the permissions of swap file</h2>
<h3>Create a swap file</h3>
<p>Create a swap file that can be used as swap. Run the following command</p>
<pre class="terminal">
    sudo fallocate -l 4G /swapfile
</pre>
</section>

<section>
<h3>Fix the swap file error</h3>
<p>Here 4G is the size of the swap file. You can set the size of swap file based on your necessity.</p>
<p>If fallocate is not installed or if you get an error message saying fallocate failed: Operation not supported then
you can use the following command to create the swap file:</p>

<pre class="terminal">
     sudo dd if=/dev/zero of=/swapfile bs=4096 count=1048576
</pre>
</section>

<section>
<h3>Set the correct permissions</h3>
<p>Only the root user is able to write to the swap file. so, update the permissions</p>

<pre class="terminal">
    sudo chmod 600 /swapfile
</pre>
</section>

<section>
<p> Use the mkswap utility to set up the file as Linux swap area:</p>
<pre class="terminal">
    sudo mkswap /swapfile
</pre>
</section>

<section>
<h3>Enable the swap with the following command:</h3>
<p>Enter the following command enables the swap file</p>
<pre class="terminal">
    sudo swapon /swapfile
</pre>
</section>

<section>
<h3>Make the swap file permanent</h3>
<p>To make the swap file permanent, open the /etc/fstab file and append the following line:</p>
<pre class="terminal">
    sudo nano /etc/fstab
    /swapfile swap swap defaults 0 0
</pre>
</section>

<section>
<h3>Verify the Swap process</h3>
<p>To verify the swap file is active, use either the swapon or the free command as shown below:</p>
<pre class="terminal">
    sudo swapon --show
</pre>
</section>

<section>
<h2>Delete the swap file</h2>
<p>Sometime you mau want to remove the swap file. Run the following command to remove the swap</p>
    <h3>Deactivate the swap file</h3>
<pre class="terminal">
    sudo swapoff -v /swapfile
</pre>
</section>

<section>
<h3>Remove entry from fstab file</h3>
<p>Remove the swap file entry <span class="important">/swapfile swap swap defaults 0 0</span> from the 
<span class="important"> /etc/fstab</span> file.</p>

<h3>Remove the swap file</h3>
<p>For this, run the following command</p>
<pre class="terminal">
    sudo rm /swapfile
</pre>
</section>