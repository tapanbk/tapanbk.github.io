---
layout: post
section-type: post
title:  Install Let's Encrypt Free SSL/TLS Certificates with NGINX

category: Server
tags: ['SSL', 'Server']
permalink: how-to-install-let's-encrypt-free-ssl-certificate-with-nginx
---
Guide to Install Let's Encrypt Free SSL/TLS Certificates with NGINX | Certbot Installation
<!--more-->

<img
    src="{{site.baseurl}}/img/posts/install-certbot-in-nginx.png"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Install Let's Encrypt Free SSL/TLS Certificates with NGINX"
    alt="Install Let's Encrypt Free SSL/TLS Certificates with NGINX">

<section>
<p>
This blog post is about how to install let's Encrypt(Certbot) SSL/TLS certificate with nginx.
The tutorial is tested on Ubuntu server 21.04.
</p>
</section> 

<p>

<section>
<h2>What is SSL Certificate?</h2>
<p>
An SSL certificate stands for Secure Sockets Layer which is a digital certificate that validates server identity and encrypt internet traffic.
Due to SSL certificate, it is possible to make the secure connection between server and client and securely
transfer data. Any website that uses HTTPS uses the SSL certificate.
</p>
</section>

<section>
<h2>What information is provided by SSL certificate?</h2>
<p>SSL certificates include:</p>

<ol>
    <li>The name of the domain that the certificate was issued for</li>
    <li>The name of person, organization or device it was issued to</li>
    <li>Name of certificate authority that issued the certificate</li>
    <li>Digital signature of the Certificate Authority</li>
    <li>Any associated subdomains</li>
    <li>Date of certificate issue</li>
    <li>Expiry date of certificate</li>
    <li>The public key of SSL certificate</li>
</ol>

</section>


<section>
<h2>Why does website needs SSL certificate></h2>

<ol>
    <li><span class="bold">Encryption</span>: Encryption of data</li>
    <li><span class="bold">Authentication</span>: SSL certificates verify that a client is talking to the correct server that actually owns the domain.</li>
    <li><span class="bold">HTTPS</span>: SSL certificate is needed for an HTTPS web address.</li>
</ol>

</section>

<section>
<h2>How Does Let's Encrypt work</h2>
<p>
Let's Encrypt validates the domain ownership before issuing a certificate.
It runs on your server. It creates a token file which contains the required information.
Let's encrypt use this token to validate the DNS record of domain.

</p>
</section>
<section>
<h2>Prerequisites</h2>
<ol>
    <li>Nginx or Nginx plus installed in the server</li>
    <li>Registered Domain</li>
    <li>NS record that associates your domain name and your server’s public IP address.</li>
</ol>
</section>
<section>
<h2>Install Let's Encrypt Client</h2>
<p>Use the following command to download the Let's Encrypt Client software</p>
<p>For the Ubuntu version less or equals to 18.05</p>
<pre class="terminal">
    apt-get update
    sudo apt-get install certbot
    sudo apt-get install python-certbot-nginx
</pre>

<p>For the Ubuntu version later than 18.05. use the python3 version of certbot.</p>
<pre class="terminal">
    apt-get update
    sudo apt-get install certbot
    sudo apt-get install python3-certbot-nginx
</pre>
</section>

<section>
<h2>Configure Nginx for domain</h2>
<p>Certbot searches for the server block in the NGINX configuration and modifies the block automatically for SSL/TLS.
For this, it looks for the server name directive for the domain the certificate is required for.
</p>

<p>In this tutorial, we will use the domain examplesite.com as example</p>

<h3>Create a conf file named <span class="important"> examplesite.conf </span>file inside
<span class="important">/etc/nginx/sites-available/</span> folder </h3>

<pre class="terminal">
    sudo nano /etc/nginx/sites-available/examplesite.conf
</pre>



<h3>Update NGINX configuration</h3>
<p>Add the following configuration. Update your server name. The IP address of server does not work with the
free Let's Encrypt software.
Use the domain name instead.
</p>


<pre class="terminal">
     server {
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name examplesite.com www.examplesite.com;
        access_log logs/domain1.access.log main;
    
        root /var/www/htdocs/examplesite;
      }
</pre>

<p>This is how basic nginx block looks like. The NGINX configuration may differ based on the type of application and
the programming language used to code the application.
</p>


<h3>Create the symbolic link of NGINX configuration</h3>
<p>Run the following command to create the symbolic link </p>

<pre class="terminal">
    sudo ln -s /etc/nginx/sites-available/examplesite.conf /etc/nginx/sites-enabled/
</pre>

<h3>Restart NGINX</h3>
<p>Save the nginx configuration and restart the NGINX server.</p>
<pre class="terminal">
    nginx -t && nginx -s reload
</pre>
</section>

<section>
<h2>Obtain the SSL/TLS Certificate</h2>
<p>Run the following command to generate certificates </p>
<pre class="terminal">
    sudo certbot --nginx -d examplesite.com -d www.examplesite.com
</pre>

<p>
Respond to prompts from certbot to configure your HTTPS settings. It will ask for the email address and 
agree to the Let’s Encrypt terms of service. 
</p>

<p>
When certificate is generated successfully, NGINX reloads the new setting.
Certbot will show the success message about the certificate generation and location of the certificate  on the server.
</p>



<pre class="terminal">
    Congratulations! You have successfully enabled https://examplesite.com and https://www.examplesite.com 
    
    -------------------------------------------------------------------------------------
    IMPORTANT NOTES:
    
    Congratulations! Your certificate and chain have been saved at:
    /etc/letsencrypt/live/examplesite.com/fullchain.pem
    Your key file has been saved at:
    /etc/letsencrypt/live/examplesite.com/privatekey.pem
    Your cert will expire on 2022-12-10.
</pre>

<p>Note: Note: Let’s Encrypt certificates expire after 90 days on 2022-12-10.
We need to automatically renew the certificate which could be done using the cron jobs.</p>

<p>The configuration of examplesite.cof will be modified by Certbot which will be similar as below.  </p>


<pre class="terminal">
    server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /var/www/html;
        server_name  examplesite.com www.examplesite.com;
    
        listen 443 ssl; # managed by Certbot
    
        # RSA certificate
        ssl_certificate /etc/letsencrypt/live/examplesite.com/fullchain.pem; # managed by Certbot
        ssl_certificate_key /etc/letsencrypt/live/examplesite.com/privkey.pem; # managed by Certbot
    
        include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    
        # Redirect non-https traffic to https
        if ($scheme != "https") {
            return 301 https://$host$request_uri;
        } # managed by Certbot
    }
</pre>

</section>



<section>
<h2>Auto renew Let's Encrypt SSL/TLS Certificates </h2>
<p>SSL certificate will be valid for only 90 days. so, we can create a cron job to update the certificate automatically.</p>

<h3>Open terminal to open the crontab</h3>
<pre class="terminal">
    crontab -e
</pre>
<p>Add the following configuration</p>
<pre class="terminal">
    0 12 * * * /usr/bin/certbot renew --quiet
</pre>
<p>This commands will run at midnight each day. It will check if the certificate is valid for next 30 days. If not,
it will renew the certificate. --quiet flag tells certbot to not generate any output.
</p>

<h3>Save and close the file.</h3>
<p>After this, installed certificates will be automatically renewed and reloaded.</p>
</section>

