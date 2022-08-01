---
layout: post
section-type: post
title: Hex Color code to RGB Convertor tool
category: Designing
tags: ['CSS' ,'Frontend','Designing' ,'Tool' ]
permalink: hex-color-code-to-rgb-convertor-tool
---
Tools to convert from HEX color code to RGB color code
<!--more-->

<img src="{{site.baseurl}}/img/posts/hex-to-rgb.png"
class="img-thumbnail img-rounded" height="400px" alt="hex-color-code-to-rgb-color-code">

<section>
<p>This tools helps to convert from hex color code to RGB color code.
</p>
<form>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="hexField">Hex Color Code</label>
                <input type="text" class="form-control" id="hexField" placeholder="fffff or fff">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="RGBField">RGB Value Generated</label>
                <p class="bg-primary  px-3" id="RGBField" style="padding-left: 1.5rem; margin: unset!important;">Please enter the Hex code</p>
            </div>
        </div>
    </div>
</form>
</section>

<section>

<p style="margin-top: 3rem">Popular Hex code</p>
<div class="row">
    <div class="col-md-12">
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">S.N.</th>
                <th scope="col">Name</th>
                <th scope="col">Hex Code</th>
                <th scope="col">RGB Code</th>
            </tr>
            </thead>
            <tbody id="hex-rgb-table">
            </tbody>
        </table>
    </div>
</div>
</section>