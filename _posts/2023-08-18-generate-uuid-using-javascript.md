---
layout: post
section-type: post
title: Generated UUID using Javascript

category: JavaScript
tags: ['JavaScript', 'Tools']
permalink: generate-uuid-using-JavaScript
---
Generated UUID using Javascript - Tapan BK

<!--more-->

<img
    src="{{site.baseurl}}/img/posts/uuid-generator.png"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Generated UUID using Javascript - Tapan BK - Tapan BK"
    alt=" Generated UUID using Javascript - Tapan BK - Tapan BK">

<section>
<h3>Need of generating the UUID</h3>

<p>
When working with the data in database, it's a common practice to add some kind of unique primary key to provide a unique
identifier for each row in  a table. Imagine a user table, we won't want to use the name,address or date of birth as the unique 
identifier for a user as some user may share common name, address or even date of birth. Instead, it's a good to assign 
truly unique identifier as auto increment number or the UUID.
</p>
</section>

<section>
<h3>What is UUID?</h3>
<p>A UUID (Universally Unique IDentifier) is a 36 character alphanumeric string that can be uniquely identify the record.
UUID id usually identify rows of data within a database table with each row assigned a unique UUID.

</p>

<p>
Here is the example of UUID: <br/> 
adce071d-9d5c-4f0d-9d7a-162854c10432.
</p>

<p>Syntax:</p>
<p>The basic syntax of a GUID/UUID is as follows: xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx</p>

Where:
<ul>
<li>x – represents a hexadecimal digit (0-9, A-F).</li>
<li>M – represents the version of the GUID/UUID (1-5).</li>
<li>N – represents the variant of the GUID/UUID (8, 9, A, or B).
</li>
</ul>

<p>
UUID are not only unique to the database table and it is highly likely to be unique globally which means that row's UUID
unique to our database table but with anu row with UUID in any system around the world. The UUID has 
340,282,366,920,938,463,463,374,607,431,768,211,456 different possible UUIDs which results in very less chances of being 
duplicate with other.
</p>
</section>


<section>
<h3>Advantage of UUID</h3>
<ul>
 <li>They are globally unique  and it has very less chances of being duplicate</li>
<li>It can be generated without the need to check against the central node. The UUID can be generated
anynomously without being worried about the duplication
</li>
</ul>

<h3>DisAdvantage of UUID</h3>
<ul>
 <li>It takes 128bits of memory. It may not be suitable when the storage is limited</li>
</ul>

</section>
<section>
<div class="row">
    <div class="col-md-12 text-primary">
        <div class="jumbotron" id="uuid_number">
            <h4 class="display-6">Could not get the uuid</h4>
        </div>
    </div>
</div>
</section>

<section>
 <div class="row">
        <div class="col-md-12">
            <div class="form-group">
            <button type="button" class="btn btn-primary" id="generate-new-uui">Generate New UUID</button>
            </div>
        </div>
    </div>
</section>

<section>
<h3>Ways to generate the UUID</h3>
<h4>1. Using JavaScript Math.random function</h4>
<pre class="terminal">
    const random_uuid = uuidv4();
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
        });
    }
</pre>
</section>

<section>
<h4>2. Using the uuid npm package</h4>

<pre class="terminal">
    const { v4: uuidv4 } = require('uuid');
    const random_uuid = uuidv4();
</pre>
or <br/>

<pre class="terminal">
    import { v4 as uuidv4 } from 'uuid';
    const newGUID = uuidv4();
</pre>

</section>


<style>
    .jumbotron{
        background-color: #1d3752;
    }
    table.ip-details, tr, td{
        color: #337ab7!important;
        border: unset!important;
        background-color: #1d3752!important;
        text-align: left!important;
    }
   .btn{
    padding: 10px 20px;
    font-size:20px
   }
</style>


