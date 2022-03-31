---
layout: post
section-type: post
title:  Access GitHub account using SSH

category: Git
tags: ['git', 'ssh', 'server']
permalink: how-to-access-github-account-using-ssh
description: How to access GitHub account using SSH
---
Ultimate Guide to access GitHub account using SSH
<!--more-->

<img
    src="{{site.baseurl}}/img/posts/github/access-github-using-ssh.png"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Ultimate guide to How to access GitHub account using SSH"
    alt="Ultimate guide to How to access GitHub account using SSH">

<section>
<p>
This blog post is about how to access the GitHub account using the SSH. 
The tutorial uses the ubuntu server and GitHub. However, steps are pretty much similar with other
Operating systems and source code management tool
</p>
</section> 


<section>
<h2>What is SSH key?</h2>

<p>
SSH (Secure Shell) is secure cryptographic network protocol which is used to securely connect to the remote server.
By using SSH, data can be transmitted to the remote server and download the data from the remote server.
</p>

<p>
SSH provides the secure encryption and verification to secure communication. It is based on client server model.
</p>
</section>

<section>

<h2>Generate the multiple keys</h2>
<p>Follow the
<a href="/how-to-generate-multiple-ssh-for-different-github-accounts">Generate multiple SSH Keys for different GitHub accounts</a>
post to create generate multiple ssh for multiple GitHub accounts
</p>

</section>

<section>
<h2>Start SSH Agent using  following command</h2>

<pre class="terminal">

    eval `ssh-agent -s`
    ssh-add

</pre>
</section>
<section>

<h3>Removes all ssh entries from the ssh-agent</h3>

<pre class="terminal">

    ssh-add -D

</pre>
</section>
<section>
<h2>Adds the relevant ssh keys</h2>

<pre class="terminal">

    ssh-add ~/.ssh/id_rsa_personal
    ssh-add ~/.ssh/id_rsa_office

</pre>
</section>
<section>
<h2>Update the config file </h2>
<p>Append the following content located in <span class="important">~/.ssh/config</span> file. If the file is not
available, create a new file. 
</p>
<pre class="terminal">

    Host github.com-office
        HostName github.com
        User git
        IdentityFile ~/.ssh/id_rsa_personal
    
    Host github.com-personal
        HostName github.com
        User git
        IdentityFile ~/.ssh/id_rsa_office

</pre>
</section>
<section>
<h3>Get the SSH repo url </h3>

<ol>
    <li>Login to your <span class="important">GitHub account</span>.</li>
    <li>Select the repo you want to use or create new repo</li>
    <li>On the right-hand side, you will see the <span class="important">Code</span> button. click the button.</li>
    <li>You will see the <span class="important">Clone</span> card, click on <span class="important">SSH</span> tab. </li>
    <li>Copy the SSH URL of the repo.</li>
</ol>

</section>
<section>
<h2>Format the SSH repo URL</h2>
<p>You will have the SSH repo url in following format for GitHub repo</p>

<pre class="terminal">

    git@github.com:username/awesome-project.git

</pre>

<h3>Update the repo url</h3>
<p>Update the  <span class="important">github.com</span> with the Host like
<span class="important">github.com-office</span>  for the repo that belongs to the office repo  and
<span class="important">github.com-personal</span> for the repo belongs to the personal repo.
</p>


<p>Final repo url for personal Repo will be like: </p>
<pre class="terminal">

    git@github.com-personal:username/awesome-personal-project.git

</pre>


<p>Final repo url for Office Repo</p>
<pre class="terminal">

    git@github.com-office:username/awesome-office-project.git

</pre>
</section>
<section>
<h2>Clone the repo</h2>
<p>Clone the personal repo using the following command in the terminal</p>

<pre class="terminal">

    git clone  git@github.com-personal:username/awesome-personal-project.git

</pre>

<p>Clone the office repo using the following command in the terminal</p>

<pre class="terminal">

    git clone  git@github.com-office:username/awesome-office-project.git

</pre>
</section>

<section>
<h2>Update the remote url for existing project</h2>
<p>For the existing project, you can change the remote url using the following command</p>
<p>For the personal repo </p>
<pre class="terminal">

    git remote set-url origin git@github.com-personal:username/awesome-personal-project.git

</pre>


<p>For the office repo </p>
<pre class="terminal">

    git remote set-url origin git@github.com-office:username/awesome-office-project.git

</pre>

<p>
<span class="important">origin</span> is the remote name. We usually have the name of remote name as
<span class="important">origin</span>. 
Remote name could be different that origin. Use the actual remote name if origin name is different from origin.
</p>
</section>

