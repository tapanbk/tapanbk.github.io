---
layout: post
section-type: post
title:  Tool to get Date Duration difference between two dates in years, months and days
category: server
tags: ['Tool', 'JavaScript' ]
permalink: tool-to-get-date-duration-between-two-dates
description: Tool to get Date Duration
---
Date Duration difference between two dates in years, months and days
<!--more-->

<img src="{{site.baseurl}}/img/posts/date-duration-calculator.png" width="100%"
class="img-thumbnail img-rounded" height="400px" alt="What is my ip address">

<p>This tool helps to get the date duration in years, months and  days based on the start date and end date passed.
The start Date is not necessary to be before the end date.  The end date could come before the start date. This
tools helps to find the difference between two dates in years, months and days. By default, the end date is set to 
current date
</p>

<div class="jumbotron age-calculator-form">
    <div class="row">
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="startDateField">Start Date</label>
                        <input type="date" class="form-control" id="startDateField"
                            placeholder="Start Date" aria-describedby="startDateFieldBlock">
                            <br>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="endDateField">End Date</label>
                        <input type="date" class="form-control" id="endDateField"
                            placeholder="DOB" aria-describedby="endDateFieldBlock">
                            <br>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                            <button type="button" class="btn btn-primary" id="calculateAgeButton">Find Age</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 d-none" id="ageCard">
                <div class="jumbotron text-secondary"></div>
        </div>
    </div>
</div>



<style>
    .jumbotron{
        background-color: #1d3752;
    }
    #ageCard{
        border-left: 1px solid antiquewhite;
    }
</style>