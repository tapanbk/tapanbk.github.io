---
layout: post
section-type: post
title: Add Disqus comments plugins in the jekyll site
category: Jekyll
tags: ['Jekyll' ,'Github-pages']
permalink: guide-to-install-disqus-comment-in-jekyll-sites
description: Guide to install disqus comment plugin in jekyll sites
---

Guide to install disqus comment in jekyll sites
<!--more-->

<img src="{{site.baseurl}}/img/posts/disqus.png" class="img-thumbnail img-rounded" height="400px"
alt="Guide to install disqus comment plugin in jekyll sites" width="100%">

<section>
<h2>What is Disqus?</h2>
<p>
Disqus is a plugin to provide comments in that can be installed in any types of websites including blogs sites. It has
features to sign in using the facebook, Twitter, google and even disqus and has advance moderation and administration
features. Disqus can be integrated in the system by inserting code snippets or installing any one of the plugins from
<a href="https://disqus.com/admin/install/" target="_blank">install disqus plugin page</a>
</p>
</section>

<section>
<p>
Note: You need to sign up to disqus to visit the installation page. Disqus can be installed on WordPress, Blogger,
Tumblr, TypePad, Drupal, Joomla, shopify and many more. Of course, it could be installed on the Jekyll. If the website,
web app or blog type is not mentioned in the list, you can install the disqus with the universal code .
</p>
</section>


<section>
<h2>Steps to install Disqus:</h2>

<ol>
<li>Sign up in the site. You can sign up with the facebook, Twitter or Gmail or you can manually enter the Name, email
and password.</li>
<li>Click on go to <span class="important">Install Disqus Button</span> and select  <span class="important">I want to
install disqus on my site</span>.
</li>
<li>Enter website name and website type. Based on the website name, disqus will generate a unique disqus url</li>
<li>You will be asked to choose among the Basic, Plus, pro and Business custom pricing plan. You can stick to basic plan
</li>
<li>Choose your website or blog type. If your website type is not listed, you can choose I don't see my platform, install
manually with the universal code. As we are installing on the jekyll. choose jekyll platform.</li>
<li>You need to add <span class="important">comments: true </span> on _config.yml file</li>
<li>Copy and paste the universal code In between a tag at the place where you want to show the comment.
    <pre class="terminal">
    {% raw %}
       {% if page.comments %}
       {% endif %} 
    {% endraw %}
    </pre>  
</li>
</ol>


</section>


<section>
<p>Based on this setting, you can disable the comment by updating comments:
false in <span class="important"> _config.yml</span>  file.
</p>

<p>
You can configure disqus setting from the config Disqus tab. You can update website url, comment policy URL, comment
policy description, website category, language, color schema and type face under appearance.
</p>

<h3>
You can also update the comment moderation settings. You can set the moderation to balanced or strict.
</h3>
<p>Like wise, Disqus can be installed on other websites, blog or web apps.</p>
<p>There are quite pros and cons of using third part disqus in our website. </p>
<h3>Some pros of the using Disqus in website are:</h3>
<ul>
<li>The comments are posted and updated in real time without any delay.</li>
<li>Disqus allows threaded comments. This allows groups discussion within the nested threads.</li>
<li>Disqus can be configured to get the notification for the comments that they are engaged.
The notifications setting can be according to preferences of commenter and administrators.</li>
<li>Administrators can update the setting to moderate the spam, abusive comments.</li>
<li>Disqus have dedicated control panel to approve the comments.</li>
<li>It has IP blocking and user blocking system to prevent spams  </li>
<li>Disqus allows user to login using social medias like facebook, Twitter, gmail and even disqus itself.</li>
<li>Disqus allows user to like the comments that let readers like the comments.</li>
<li>It's very easy to install</li>
<li>It is mobile responsive and mobile friendly.</li>
</ul>
</section>


<section>
<h3>Some cons of the using Disqus in website are:</h3>

<ul>
<li>It may need to keep upto date as it can become security issue</li>
<li>It is difficult to customize the design to match the site design.</li>
<li>One of the main drawback is their ads on the basic plan. They can be deactivated through premium plan.
It inserts ad in between comments, sometime without any comments and before comments section starts</li>
<li>The data of the user who commented on the site can be breached or misused.</li>
<li>Disqus does not allow guest commenting which reduces the comment engagement</li>
<li>Disqus takes huge amount of additional resource to just run the comment systems.</li>
<li>Disqus are tracking all the metrics somehow which you may not want them to track.</li>
</ul>
</section>


<section>
<img src="{{site.baseurl}}/img/posts/discuss-site-resource-used.png" class="img-thumbnail img-rounded" height="400px"
alt="resources used by disqus" width="100%">
</section>





