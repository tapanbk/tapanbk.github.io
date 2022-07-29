---
layout: post
section-type: post
title:  What Is My Ip Address?
category: Server
tags: ['Map' ,'Tool', 'JavaScript', 'Frontend' ]
permalink: get-my-ip-address
description: get my ip address. What is My Ip Address
---
Tools to Get My IP address
<!--more-->

<img src="{{site.baseurl}}/img/posts/what-is-an-ip-address-image.jpg"
class="img-thumbnail img-rounded" height="400px" alt="What is my ip address">

<section>
<p>Wondering how to get your current public ip address? This tools helps to get  your public ip address with some 
basic description.
</p>

<div class="row d-none" id="ipAddressCard">
    <div class="col-md-12 text-primary">
        <div class="jumbotron" id="ipAddressBox">
            <h4 class="display-6">Could not get the details</h4>
        </div>
    </div>
</div>

<h3>  JavaScript Code to get  your public IP address </h3>
</section>

<section>
<pre class="terminal">
    // Get the current public IP address details
    const url = 'https://ipinfo.io/json?token="your-token"';
    $.getJSON(url, function(data) {
        const location_data = JSON.stringify(data, null, 2);
    });
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
</style>