---
layout: post
section-type: post
title: Guide on Best practices on Django

category: Docker
tags: ['Server', 'Django']
permalink: guide-on-best-practice-on-django
---
Guide on Best practices on Django - Tapan BK

<!--more-->

<img
    src="{{site.baseurl}}/img/posts/best-practice-on-django.jpg"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Guide on Best practices on Django - Tapan BK"
    alt=" Guide on Best practices on Django - Tapan BK">



<section>
<h3>Here are some of the best practices that needs to be followed on Django</h3>
</section>



<section>
<h4>1. Correct Model Naming</h4>
<p>
While naming the model, it is recommended to use the singular nouns like User, Address, Blog. 
If the single unit of the model does not contains information on the several objects, it is recommended to 
use a singular noun.
</p>
</section>


<section>
<h4>2. Relationship Field Naming</h4>
<p>
For relationships fields like ForeignKey, OneToOneKey, OneToMany, ManyToMany, it is recommended to use a name to
specify a relationship.
</p>

<p>
Imagine there is a model called Article, - in which one of the relationships is ForeignKey for model User.
If this field contains information about the author of the article, then author will be a more appropriate name than user.
</p>
</section>


<section>
<h4>3. Correct Related Name</h4>
<p>
In most of the cases, the plural of the model in plural will be correct.
</p>
<pre class="terminal">

    class Owner(models.Model):
        pass

    class Item(models.Model):
        owner = models.ForeignKey(Owner, related_name='items')
</pre>
</section>


<section>
<h4>4. Order of Attributes and methods in a Model</h4>
<p>
Preferred attributes and methods order in a  model
</p>
<ul>
    <li> Constants - for choices</li>
    <li>model fields</li>
    <li>custom manager</li>
    <li>meta information</li>
    <li>def __unicode__ (for python2) or def __str__(for python3)</li>
    <li>special methods</li>
    <li>clean method</li>
    <li>save method</li>
    <li>get_absolute_url method</li>
    <li>other methods</li>
</ul>
</section>


<section>
<h4>5. Use NullBooleanField for nullable Boolean field</h4>
<p>It's always better to specify default values for BooleanField.
If you want to keep the boolean field empty by default, It is better to use 
NullBooleanField.
</p>
</section>


<section>
<h4>6. Keep the Business logic in Models</h4>
<p>
It is better to allocate business logic of the business in models. The business logic can be allocate
in models with the help of model methods and model manager. 
</p>
</section>


<section>
<h4>7. Remove field duplication in ModelForm</h4>
<p>
Do not duplicate model fields in ModelForm or ModelSerializer without any need.
If it is required to use all model fields, use MetaFields. 
If it is required to redefine a widget for a  field with nothing changed in the field,
use Meta widgets to indicate widgets.
</p>
</section>



<section>
<h4>8. Avoid use of ObjectDoesNotExist</h4>
<p>
ModelName.DoesNotExist is more specific exception than ObjectDoesNotExist which is a positive practice.
</p>
</section>


<section>
<h4>9. Avoid using multiple flags in a model</h4>
<p>
</p>
<pre class="terminal">
    class Article(models.Model):
        is_published = models.BooleanField(default=False)
        is_verified = models.BooleanField(default=False)
        …
</pre>
<p>
Assume an application where the article has the status of draft, verified and published. Instead of using the combination
of is_published and is_verified or similar flags, we can use the single status flag that tracks the status of the article.
</p>

<pre class="terminal">
  class Article(models.Model):
        STATUSES = Choices('new', 'verified', 'published')
        status = models.IntegerField(choices=STATUSES, default=STATUSES.draft)
</pre>
</section>

<section>
<h4>10. Remove redundant model name in a field name</h4>
<p>While creating a field in a model, it's not logical to add the model name. Like when we create a user status on the 
user model, we can just create a status field instead of redundant user_status field.
</p>
</section>


<section>
<h4>11. Never use len(queryset)</h4>
<p>
Do not use len method to get the no of objects returned by the query set. While using the len, the queryset to select 
all the objects in the database is run. The data returned by queryset is transformed into python Object and then finally
run the length on that object.
</p>

<p>Instead of using the len we can use the count method. It is similar to running COUNT method in SQL query. 
With count, an easier query is carried out in the database with fewer resources which improve the performance.
</p>
</section>



<section>
<h4>12. if queryset is a bad idea</h4>
<p>
Do not use a queryset as  a boolean value. In django, queryset are lazy loaded. But while using a queryset as boolean,
the actual inappropriate queryset is carried out.  So, instead of using if queryset, we can do if queryset.exist() which 
actually use less resource.
</p>
<pre class="terminal">

</pre>
</section>



<section>
<h4>13. Remove _id in ForeignKeyField and OneToOneField</h4>
<p> Do not add _id suffix to ForeignKeyField and OneToOneField.
</p>
</section>



<section>
<h4>14. Use abstract Models to share the same logic between models</h4>
<p> If you want to share the same logic between models, create an abstract models.
</p>

<pre class="terminal">
    
    class CreatedAtModel(models.Model):
        created_at = models.DateTimeField(auto_now_add=True)
    
        class Meta:
            abstract = True
    
    class Post(CreatedAtModel):
        ...

    class Comment(CreatedAtModel):
        ...
</pre>
</section>


<section>
<h4>15. Use custom Manager and QuerySet</h4>
<p>
To keep all the business logic in one place, we can use the custom managers and QuerySet.
</p>

<p>If you want the no of comments count for the posts, we can:</p>
<pre class="terminal">
    
    class CustomManager(models.Manager):

        def with_comments_counter(self):
    
            return self.get_queryset().annotate(comments_count=Count('comment_set'))

    posts = Post.objects.with_comments_counter()
    posts[0].comments_count
</pre>
</section>


<section>
<h4>16. Avoid writing fat views</h4>
<p>
We should write most of the logic in model itself which results in fat models, skinny views.
</p>

<p>For example, while implementing a functionality of sending an email to user, it is better to 
extend the model with an email function instead of writing the logic in the view. 

This makes the code easier to unit test.
</p>
</section>




<section>
<h4>17. Django Templates</h4>
<p>
Templates can be placed at two places, either in the app directory itself or in the root directory.
It is recommended to put the templates in the root directory. But if you want to reuse app in multiple places, 
then you should place in the app directory.
</p>
<pre class="terminal">

    #Good practice
    root_folder/
        my_app1/
        my_app2/
        my_app3/
        templates/
    
    #If you want to make your app reusable
    root_folder/
        my_app1/
            templates/
        my_app2/
            templates/
        my_app3/
            templates/
</pre>
</section>


<section>
<h4>18. Separate settings file for each environment</h4>
<p>
Use the separate settings file for the different environment.
</p>
<pre class="terminal">
    settings/
   ├── __init__.py
   ├── base.py
   ├── ci.py
   ├── local.py
   ├── staging.py
   ├── production.py
   └── qa.py
</pre>

<p>settings/local.py</p>

<pre class="terminal">
    from .base import *
    ALLOWED_HOSTS = ['localhost']
    DEBUG = True
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'local_db',
            'HOST': '127.0.0.1',
            'PORT': '5432',
        }
    }
</pre>
<p>We can specify which configuration to use with setting parameter</p>

<pre class="terminal">
    python manage.py runserver --settings=settings.local
</pre>
</section>



