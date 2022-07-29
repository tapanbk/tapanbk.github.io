---
layout: post
section-type: post
title: Install Jekyll SEO Tag in the jekyll sites
category: Jekyll
tags: ['Jekyll' ,'Github-pages' ]
description: Install jekyll seo tag in the jekyll sites
permalink: install-jekyll-seo-tag-in-the-jekyll-sites
---

Guide to install jekyll seo Tag in the jekyll sites.
<!--more-->

<img src="https://jekyllrb.com/img/jekyll-og.png" class="img-thumbnail img-rounded" height="400px" alt="jekyll">

<section>
<h1>What is Jekyll?</h1>
Jekyll is a free and open source software which generates the text written in favorite markup language to generate the
static sites which can be used for personal, blog, projects and organization sites. Jekyll takes Markdown and renders it into a
static sites which can be served by any popular server like Apache and Nginx. As the system generates a static sites, it
does not use any database. Jekyll supports YAML, JSON, CSV and TSV files accessed via liquid templating system. GitHub
pages uses the jekyll engine to render the static pages which uses GitHub repositories with no additional cost.
</section>

<section>
<h2>Github pages</h2>

<p>
<a href="https://pages.github.com/">Github Pages</a> are freely hosted public web pages hosted by GitHub. The GitHub pages is
hosted under custom <span class="important">github.io</span> domain or on a custom domain name of pur choices. Github
pages uses jekyll engine behind the scenes.
</p>
<p>When the changes are pushed to the GitHub main branch, GitHub pages automatically generate the static site.</p>

</section>

<section>
<h2>Install the jekyll site and run the site</h2>
<pre class="terminal">
    gem install bundler jekyll
    jekyll new my-awesome-site
    cd my-awesome-site
    bundle exec jekyll serve
</pre>  
</section>

<section>
<p>Now you can browse the site in the browser by visiting:</p>
<pre class="terminal">
    http://localhost:4000
</pre>
</section>

<section>
<h2>install jekyll seo tag</h2>
<p>1. Add the following code to Gemfile by:</p>
<pre class="terminal">
{% raw %}
    gem 'jekyll-seo-tag'
{% endraw %}
</pre>  
</section>

<section>
<p>2. Add the following to _config.yml file:</p>
<pre class="terminal">
{% raw %}
    plugins: [jekyll-seo-tag]
{% endraw %}
</pre>
or
<pre class="terminal">
{% raw %}
    plugins:
        - jekyll-seo-tag
{% endraw %}
</pre>  
</section>

<section>
<p>3. Use the following code right before <span class="important"> </head> </span> in site's template</p>
<pre class="terminal">
{% raw %}
    {% seo %}
{% endraw %}
</pre>
</section>