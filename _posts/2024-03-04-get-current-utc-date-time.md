---
layout: post
section-type: post
title: Get the current UTC date and time using JavaScript

category: JavaScript
tags: [ 'JavaScript', 'Tools' ]
permalink: get-current-utc-date-and-time
---

Get the current UTC Date and Time using JavaScript - Tapan BK

<!--more-->

<img
src="{{site.baseurl}}/img/posts/utc.jpg"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Get the current UTC Date and Time using JavaScript - Tapan BK"
alt="Get the current UTC Date and Time using JavaScript - Tapan BK">

<section>
<h3>Get the current UTC Date and Time using JavaScript</h3>


</section>

<section>

<p>
A time zone is designated region or area on Earth which is also the localized time for standardization and regulated for the 
sake of coordination with time zone of other places. It adds simplicity in localization of the time with respect to 
GMT time
</p>

<p>
The concept of time zones was emerged in late 19th century, It was emerged to address the confusion on varying local time.
Before the establishment of time zone, each city or town has their own time based on the position of the sun which made 
scheduling and coordinating the various activities challenging across different locations.
</p>

<p>
Time zones are aligned with meridians of longitude. Each zone covers approximately 15 degrees of longitude. 
The starting point for time zone is at 0 degrees longitude which is also called Prime Meridian. It pass through 
Greenwich, London, England. The timezone increase or decrease by one hour moving eastward or westward from the Prime Meridian.
</p>

<p>
Some of the countries like China and India have disregard the multiple theoretical timezone and  have opted a single time zone across their entire territory 
</p>
</section>


<section>
<h3>Using Coordinated Universal Time (UTC) in applications serves several crucial purposes:</h3>

<ul>
    <li>
        <b>Standardization: </b> UTC provides a globally recognized standard for timekeeping. It helps maintain
consistency and facilitates communication and synchronization across different systems and locations worldwide.
    </li>
    <li>
        <b>Avoiding Timezone Issues: </b>  UTC does not have timezone offsets, making it ideal for applications that operate across
different time zones. By using UTC as a reference point, applications can avoid confusion and errors related to daylight
saving time changes, timezone conversions, and regional variations.
</li>
    <li>
        <b>Synchronization: </b>  UTC does not have timezone offsets, making it ideal for applications that operate across
different time zones. By using UTC as a reference point, applications can avoid confusion and errors related to daylight
saving time changes, timezone conversions, and regional variations.
</li>
    <li><b>Avoiding Timezone Issues: </b>  UTC serves as a common reference point for synchronizing distributed systems,
databases, logs, and events. Using UTC timestamps ensures that events are accurately sequenced and coordinated regardless of the geographical
location or local time settings of individual components.
</li>
    <li>
        <b>Avoiding Timezone Issues: </b>  UTC does not have timezone offsets, making it ideal for applications that operate across
different time zones. By using UTC as a reference point, applications can avoid confusion and errors related to daylight
saving time changes, timezone conversions, and regional variations.
</li>
    <li>
        <b>Accuracy and Precision: </b>  UTC timekeeping is highly accurate and precise, maintained by international timekeeping
standards such as atomic clocks. This reliability is crucial for applications that require precise timing, such as
financial transactions, scientific experiments, and network protocols.
</li>
<li>
        <b>Consistency in Data Storage and Exchange:</b>   Storing and exchanging timestamps in UTC format simplifies data management and
interoperability. It eliminates the need for complex timezone conversions and ensures that timestamps remain consistent
and unambiguous across different platforms, databases, and applications.
</li>

<li>
<b>Compliance and Regulations: </b>  In certain industries and applications, adherence to standardized timekeeping practices,
such as using UTC, is required by regulations, compliance standards, or industry best practices. Using UTC helps ensure
compliance with these requirements.
</li>

<li>
<b>Facilitating Global Collaboration: </b>For applications involving distributed teams, partners, or customers spanning
multiple time zones, using UTC promotes collaboration and coordination by providing a common reference for scheduling
meetings, deadlines, and other time-sensitive activities.
</li>
</ul>
</section>


<section>
   <div class="col-md-12" id="utc-date-time">
        <div class="jumbotron text-secondary"></div>
    </div>
</section>


<section>
<pre class="terminal">
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = ('0' + (now.getUTCMonth() + 1)).slice(-2);
    const day = ('0' + now.getUTCDate()).slice(-2);
    let hours = ('0' + now.getUTCHours()).slice(-2);
    const minutes = ('0' + now.getUTCMinutes()).slice(-2);
    const seconds = ('0' + now.getUTCSeconds()).slice(-2);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const final_date_time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${ampm}`
</pre>
</section>

<style>
    li{
        margin-bottom: 50px;
    }
    .jumbotron{
        background-color: #1d3752;
    }

    #utc-time .jumbotron{
        padding: 10px !important;;
    }
    #utc-time{
        border-left: 1px solid #337ab7;
    }
</style>