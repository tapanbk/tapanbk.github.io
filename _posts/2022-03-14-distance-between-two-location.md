---
layout: post
section-type: post
title:  distance between two location based on their latitude and  longitude
category: Designing
tags: ['Maps' ,'Tool', 'JavaScript', 'Frontend' ]
permalink: how-to-get-distance-between-two-location
---
Tools to Get distance between two location based on latitude and longitude
<!--more-->

<img src="{{site.baseurl}}/img/posts/distance-between-two-lat-lng.jpg"
class="img-thumbnail img-rounded" height="400px"
width="100%"
alt="Distance between two locations based on latitude and longitude">

<section>
<p>Wondering how to get the distance between the two location? This tools helps to get the distance between the location
based on their latitude and longitude. This tools helps to get the distance in straight line.
</p>
</section>

<section>
<div class="jumbotron distance-calculator-form">
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="originLocation">Origin Latitude and Longitude separated by comma</label>
                <input type="text" class="form-control" id="originLocation"
                    placeholder="Origin Location" aria-describedby="originLocationBlock">
                    <br>
                    <small id="originLocationBlock" class="mt-4 d-none">
                            <div class="alert alert-danger" role="alert">
                             Origin location is not valid
                            </div>
                    </small>
            </div>
        </div>
       <div class="col-md-6">
            <div class="form-group">
                <label for="destinationLocation">Destination Latitude and Longitude separated by comma</label>
                <input type="text" class="form-control" id="destinationLocation"
                placeholder="Destination Location" aria-describedby="destinationLocationBlock">
                <br>
                <small id="destinationLocationBlock" class="mt-2 d-none">
                            <div class="alert alert-danger" role="alert">
                             Destination location is not valid
                            </div>
                </small>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
            <button type="button" class="btn btn-primary" id="distanceButtonSubmit">Submit</button>
            </div>
        </div>
    </div>
</div>



<div class="row d-none" id="calculatedDistanceCard">
    <div class="col-md-12 text-primary">
        <div class="jumbotron">
            <h4 class="display-6">Calculated distances</h4>
            <p class="lead">
                  <span id="miles"></span>
            </p>
            <p class="lead">
                  <span id="kms"></span>
            </p>
        </div>
    </div>
</div>
</section>

<section>
<h5>Steps to find the distance two location:</h5>
<ol>
    <li>Enter the comma separated latitude and longitude of the origin address like 27.12312, 85.123213</li>
    <li>Enter the comma separated latitude and longitude of the Destination address like 27.22312, 85.523213</li>
    <li>Hit Submit button. You will get the distance between the origin and destination in both miles and Kilometres </li>
</ol>
</section>

<section>
<h3>  JavaScript formula to get the distance between two locations based on their latitude and longitude </h3>
 
<pre class="terminal">
    // Check if the lat lng is valid
    function isValidLatLng(latLngAddress){
        if(latLngAddress.length!==2){
            return false;
        }
        const lat = latLngAddress[0];
        const lng = latLngAddress[1];
        const isLatitudeValid =  isFinite(lat) && Math.abs(lat) <= 90;
        const isLongitudeValid = isFinite(lng) && Math.abs(lat) <= 180;
        return isLatitudeValid && isLongitudeValid;
    }

    // Change from degrees to Radians
    function degreesToRadians(degrees) {
        return (degrees * Math.PI)/180;
    }
    
    // Get the distance between lat and longitude
    function getDistanceBetweenLatLng(originLatitude, originLongitude, destinationLatitude, destinationLongitude) {
        if(originLatitude === destinationLatitude && originLongitude === destinationLongitude){
            return {
                'kms': 0,
                'miles': 0
            }
        }
        const radOriginLatitude = degreesToRadians(originLatitude);
        const radDestinationLatitude = degreesToRadians(destinationLatitude);
        const radtheta = degreesToRadians(originLongitude-destinationLongitude);
        let dist = Math.sin(radOriginLatitude) * Math.sin(radDestinationLatitude) + Math.cos(radOriginLatitude) * Math.cos(radDestinationLatitude) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        return {
            'kms': parseFloat(dist * 1.609344).toFixed(2),
            'miles': parseFloat(dist * 0.868).toFixed(2)
        }
    }
</pre>
</section>
<style>
    .jumbotron{
        background-color: #1d3752;
    }
</style>