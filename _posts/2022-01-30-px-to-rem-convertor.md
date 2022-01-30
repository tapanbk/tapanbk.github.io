---
layout: post
section-type: post
title: PX to REM and Rem to PX Convertor tool
category: CSS
tags: ['CSS' ,'Frontend','Designing' ,'Tool' ]
permalink: px-to-rem-and-rem-to-px-convertor-tool
description: Tools to convert from px to rem and from rem to px
---
Tools to convert from px to rem and from rem to px
<!--more-->

<img src="{{site.baseurl}}/img/posts/px-rem.png" class="img-thumbnail img-rounded" height="400px" alt="px-to-rem">

<p>This tools helps to convert from px to rem and rem to px.
This tools can be handy to convert the px to rem and rem to px respectively. We can also change the root font size and get the conversion based on the the 
root font size.
</p>
<form>
    <div class="row">
        <div class="offset-md-4 col-md-4">
            <div class="form-group">
                <label for="rootFontSize">Root Font size</label>
                <input type="number" class="form-control" id="rootFontSize" placeholder="Enter root font size in  px" value="16">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="pxField">PX Unit</label>
                <input type="number" class="form-control" id="pxField" placeholder="Px unit">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-check">
                <label for="remField">Rem Unit</label>
                <input type="number" class="form-control" id="remField" placeholder="Rem Unit">
            </div>
        </div>
    </div>
</form>
<p style="margin-top: 3rem">Conversion Table</p>
<div class="row">
    <div class="col-md-6">
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">PIXEL</th>
                <th scope="col">REM</th>
            </tr>
            </thead>
            <tbody id="px_to_rem">
            </tbody>
        </table>
    </div>
    <div class="col-md-6">
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">REM</th>
                <th scope="col">PIXEL</th>
            </tr>
            </thead>
            <tbody id="rem_to_px">
            </tbody>
        </table>
    </div>
</div>
