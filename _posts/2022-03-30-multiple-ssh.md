---
layout: post
section-type: post
title:  Generate multiple SSH Keys for different GitHub accounts

category: Git
tags: ['GIT', 'SSH', 'Server']
permalink: how-to-generate-multiple-ssh-for-different-github-accounts
description: How to generate multiple SSH Keys for different GitHub accounts
---
Guide to generate multiple SSH Keys for different GitHub accounts
<!--more-->

<section> 
<img
    src="{{site.baseurl}}/img/posts/github/use-multiple-ssh-keys-to-access-the-multiple-github-account.png"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Ultimate guide to generate multiple SSH Keys for different GitHub accounts"
    alt="Ultimate guide to generate multiple SSH Keys for different GitHub accounts">

</section>
<section>
<p>
This blog post is about how to generate SSH Keys for different GitHub accounts and use those keys to access different GitHub accounts.
The blog is based on the GitHub and Ubuntu Server. However, the concept to create the SSH keys and updating on the 
source code management system is same.  
</p>
</section> 


<section>
<h2>What is SSH key?</h2>

<p>
SSH (Secure Shell) is secure cryptographic network protocol to connect with a server. The SSH protocol is mainly used to
access the remote servers.
</p>

<p>
SSH is based on the client server model which perform secure communication between computers with encryption and verification
to access, configure the remote server and transmit the files to and from the remote server.
</p>
</section>

<section>
<h2>Generate SSH keys for personal GitHub account</h2>
<p>For the tutorial purpose, we are considering we have two emails, one for personal use and another for office use.
We will use <span class="important">your_personal_email@youremail.com</span> as personal email address and 
<span class="important">your_office_email@youremail.com </span> as business uses or office uses.</p>
<h3>Create to .ssh folder</h3>
<p>
We suggest creating the ssh keys inside the .ssh folder. If folder is not available, create using the following command
</p>

<pre class="terminal">
    mkdir .ssh
    cd .ssh
</pre>

</section>

<section>
<h3>Use the following command in terminal to generate the SSH key for personal email</h3>

<pre class="terminal">
    ssh-keygen -t rsa -C "your_personal_email@youremail.com"
</pre>
<br>
<p>This commands will generate something like below</p>
<img src="{{site.baseurl}}/img/posts/github/ssh-key-generation-for-personal-email.png"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="SSH key generation for personal email address"
alt="SSH key generation for personal email address">
<br/>

<p>The prompt will ask for the unique name. Enter the unique name that best describe the purpose or type of that email.
For the tutorial purpose, we will go with the <span class="important">id_rsa_personal</span>.
</p>
<p>It will generate two files inside .ssh folder.</p>

<ul>
    <li><span class="important">id_rsa_personal</span> private file</li>
    <li><span class="important">id_rsa_personal.pub</span>: public file which will be used in GitHub</li>
</ul>
</section>

<section>
<h2>Generate SSH keys for office GitHub account</h2>
<p>Use the following command to generate the SSH key for the email</p>

<pre class="terminal">
    ssh-keygen -t rsa -C "your_office_email@youremail.com"
</pre>
<br>
<p>It will generate something like below</p>
<img src="{{site.baseurl}}/img/posts/github/ssh-key-generation-for-office-email.png"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="SSH key generation for office email address"
alt="SSH key generation for office email address">
<br/>
<p>The prompt will ask for the unique name. Enter the unique name that best describe the purpose or type of that email.
For the tutorial purpose, we will go with the <span class="important">id_rsa_office</span>.
</p>
<p>It will generate two files inside .ssh folder.</p>

<ul>
    <li><span class="important">id_rsa_office</span>: private file</li>
    <li><span class="important">id_rsa_office.pub</span>: public file which will be used in GitHub</li>
</ul>
</section>

<section>
<h2>Setting the public key in the GitHub for personal account</h2>
<p>First you need to grab the details on the public file</p>

<h3>Grabbing the Details of the <span class="important">id_rsa_personal.pub</span> key</h3>
<pre class="terminal">
    cat id_rsa_personal.pub
</pre>

<h3>Updating the key in the Github</h3>

<h4>Steps</h4>

<ol>
<li>Login to your GithHub account with <span class="important">your_personal_email@youremail.com</span> email address</li>
<li>Go to setting link. Click on your GitHub profile picture on the right most side. and click <span class="important">settings</span></li>
<li>On the left most side, you will see th  <span class="important">SSH and GPG keys. </span> Click on the link.</li>
<li>On the top towards right side, you will see the <span class="important">New SSH key</span> button. Click that button. </li>
<li>Enter the <span class="important">title</span> that best describes the ssh key. </li>
<li>Enter the grabbed public key in the key section</li>
<li>Finally save by clicking the <span class="important">Add New SSH </span> button.</li>
</ol>

<p>You will be able to clone, commit the changes to the repo that belongs to
<span class="important">your_personal_email@youremail.com </span> Github Account
</p>
</section>

<section>
<h2>Setting the public key in the GitHub for office account</h2>
<p>The steps to grab and set the public key in GitHub account is same as personal email address. Once the public key is 
updated on the GitHub, one will be able to clone to the repo, push changes to the repo.
</p>
</section>

