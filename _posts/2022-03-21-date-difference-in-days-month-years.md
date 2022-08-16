---
layout: post
section-type: post
title:  Tool to get Date Duration between two dates in years, months and days
category: Server
tags: ['Tool', 'JavaScript' ]
permalink: tool-to-get-date-duration-between-two-dates-years-months-and-days
---
Date Duration difference between two dates in years, months and days - Tapan BK

<!--more-->

<img src="{{site.baseurl}}/img/posts/date-duration-calculator.png" width="100%"
class="img-thumbnail img-rounded" height="400px"
title="Date Duration difference between two dates in years, months and days"
alt="Date Duration difference between two dates in years, months and days">

<section class="date-calculator-description">
    <p>This tool helps to get the date duration in years, months and  days based on the start date and end date passed.
    It takes the start date and end date and find the difference in years, months and days
    </p>
    <p>The start Date is not necessary to be before the end date.  The end date could come before the start date. This
    tools helps to find the difference between two dates in years, months and days. 
    </p>
    <p>By default, the end date is set to current date</p>
</section> 

<section class="date-calculator-section">
    <h3>Date Difference Calculator</h3>
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
                            placeholder="End Date" aria-describedby="endDateFieldBlock">
                            <br>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                            <button type="button" class="btn btn-primary" id="calculateAgeButton">Calculate</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 d-none" id="ageCard">
                <div class="jumbotron text-secondary"></div>
        </div>
    </div>
</div>
</section>


<section class="date-calculator-finder-steps">
    <h4>Steps to find the date duration between two dates</h4>
    <ol>
        <li>Enter start date and end date</li>
        <li>Hit Enter</li>
        <li>The date difference is obtained on the right side section in years, months and days</li>
    </ol>
</section>


<style>
    .jumbotron{
        background-color: #1d3752;
    }

    #ageCard{
        border-left: 1px solid #337ab7;
    }
   #ageCard .jumbotron{
        padding-bottom: 1px !important;;
    }
</style>