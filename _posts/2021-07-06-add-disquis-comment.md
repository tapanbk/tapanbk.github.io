---
layout: post
section-type: post
title: Add Disqus comments plugins in the jekyll site
category: jekyll
tags: ['jekyll' ,'github-pages']
permalink: guide-to-install-disqus-comment-in-jekyll-sites
description: Guide to install disqus comment plugin in jekyll sites
---

Guide to install disqus comment in jekyll sites
<!--more-->

<img src="{{site.baseurl}}/img/posts/disqus.png" class="img-thumbnail img-rounded" height="400px"
alt="Guide to install disqus comment plugin in jekyll sites">

#### What is Disqus?

Disqus is a plugin to provide comments in that can be installed in any types of websites including blogs sites. It has
features to sign in using the facebook, Twitter, google and even disqus and has advance moderation and administration
features. Disqus can be integrated in the system by inserting code snippets or installing any one of the plugins from
[install disqus plugin page](https://disqus.com/admin/install/){:target="_blank"}

Note: You need to sign up to disqus to visit the installation page. Disqus can be installed on WordPress, Blogger,
Tumblr, TypePad, Drupal, Joomla, shopify and many more. Of course, it could be installed on the Jekyll. If the website,
web app or blog type is not mentioned in the list, you can install the disqus with the universal code .

##### Steps to install Disqus:

i. Sign up in the site. You can sign up with the facebook, Twitter or Gmail or you can manually enter the Name, email
and password.

ii. Click on go to <span class="important">Install Disqus Button</span> and select  <span class="important">I want to
install disqus on my site</span>.

iii. Enter website name and website type. Based on the website name, disqus will generate a unique disqus url

iv. You will be asked to choose among the Basic, Plus, pro and Business custom pricing plan. You can stick to basic plan

v. Choose your website or blog type. If your website type is not listed, you can choose I don't see my platform, install
manually with the universal code. As we are installing on the jekyll. choose jekyll platform.

vi. You need to add <span class="important">comments: true </span> on _config.yml file

vii. Copy and paste the universal code In between a 
<pre class="terminal">
{% raw %}
   {% if page.comments %}
   {% endif %} 
{% endraw %}
</pre>  

tag at the place where you want to show the comment.

Based on this setting, you can disable the comment by updating comments: false in <span class="important"> _config.yml</span>  file.

You can configure disqus setting from the config Disqus tab. You can update website url, comment policy URL, comment
policy description, website category, language, color schema and type face under appearance.

You can also update the comment moderation settings. You can set the moderation to balanced or strict.

Like wise, Disqus can be installed on other websites, blog or web apps.


There are quite pros and cons of using third part disqus in our website. 

Some pros of the using Disqus in website are:
* The comments are posted and updated in real time without any delay.
* Disqus allows threaded comments. This allows groups discussion within the nested threads.
* Disqus can be configured to get the notification for the comments that they are engaged. The notifications setting can be according to preferences of commenter and administrators.
* Administrators can update the setting to moderate the spam, abusive comments.
* Disqus have dedicated control panel to approve the comments.
* It has IP blocking and user blocking system to prevent spams  
* Disqus allows user to login using social medias like facebook, Twitter, gmail and even disqus itself.
* Disqus allows user to like the comments that let readers like the comments.
* It's very easy to install
* It is mobile responsive and mobile friendly.

Some cons of the using Disqus in website are:

* It may need to keep upto date as it can become security issue
* It is difficult to customize the design to match the site design.
* One of the main draw back is their ads on the basic plan. They can be deactivated through premium plan. It inserts ad in between comments, sometime without any comments and before comments section starts
* The data of the user who commented on the site can be breached or misused.
* Disqus does not allow guest commenting which reduces the comment engagement
* Disqus takes huge amount of additional resource to just run the comment systems.

<img src="{{site.baseurl}}/img/posts/discuss-site-resource-used.png" class="img-thumbnail img-rounded" height="400px"
alt="resources used by disqus">


* Disqus are tracking all the metrics somehow which you may not want them to track.





