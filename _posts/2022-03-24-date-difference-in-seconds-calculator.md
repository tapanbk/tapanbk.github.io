---
layout: post
section-type: post
title:  Tool to get Date Duration between two dates in hours, minutes, seconds and milliseconds
category: Server
tags: ['Tool', 'JavaScript' ]
permalink: tool-to-get-date-duration-between-two-dates-in-hours-minutes-seconds-and-milliseconds
---
Tool to get Date Duration between two dates in hours, minutes and milliseconds
<!--more-->

<img src="{{site.baseurl}}/img/posts/date-duration-calculator.png" width="100%"
class="img-thumbnail img-rounded" height="400px"
title="Date Duration between two dates in hours, minutes, seconds and milliseconds"
alt="Date Duration between two dates in hours, minutes, seconds and milliseconds">

<section class="date-calculator-description">
    <p>This tool helps to get the date duration in hours, minutes, seconds and  milliseconds based on the start date and end date passed.
    It takes the start date and end date and find the difference in hours, minutes, seconds and  milliseconds
    </p>
    <p>The start Date is not necessary to be before the end date.  The end date could come before the start date. This
    tools helps to find the difference between two dates in hours, minutes, seconds and  milliseconds. 
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
                        <label for="startDateTimeField">Start Date</label>
                        <input type="datetime-local" class="form-control" id="startDateTimeField"
                            placeholder="Start Date Time" aria-describedby="startDateFieldBlock">
                            <br>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="endDateTimeField">End Date</label>
                        <input type="datetime-local" class="form-control" id="endDateTimeField"
                            placeholder="End Date Time" aria-describedby="endDateFieldBlock">
                            <br>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group pull-right">
                            <button type="button" class="btn btn-primary" id="calculateAgeButton">Calculate</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 d-none" id="resultCard">
                <div class="jumbotron text-secondary"></div>
        </div>
    </div>
</div>
</section>


<section class="date-time-duration-calculator-finder-steps">
    <h4>Steps to find the date duration between two dates</h4>
    <ol>
        <li>Enter start date time and end date time</li>
        <li>Hit Enter</li>
        <li>The date difference is obtained on the right side section in hours, minutes, seconds and milli seconds</li>
    </ol>
</section>


<style>
    .jumbotron{
        background-color: #1d3752;
    }

    table.result-card-table, tr, td{
        color: #337ab7!important;
        /*border: unset!important;*/
        border: 1px solid #337ab7 !important;
        background-color: #1d3752!important;
        text-align: left!important;
        font-size: 1.6rem !important;
    }

    #resultCard .jumbotron{
        padding: 10px !important;;
    }
    #resultCard{
        border-left: 1px solid #337ab7;
    }
</style>