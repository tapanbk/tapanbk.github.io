---
layout: post
section-type: post
title: Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53 - part 1 

category: AWS
tags: [ 'AWS', 'AWS S3', 'AWS CloudFront', 'AWS Route53', 'AWS Certificate Manager' ]
permalink: comprehensive-tutorial-on-hosting-the-static-site-in-aws-using-s3-cloudfront-certificate-manager-and-route53-part-1
---

Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53  - Tapan BK

<!--more-->

<img
src="{{site.baseurl}}/img/static-site-hosting/static-website-hosting.jpg"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53 - part 1  - Tapan BK"
alt="Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53 - part 1  - Tapan BK">


<section>
This is the part 1 of 2 of comprehensive tutorial on hosting the static site in AWS using AWS s3, AWS cloudfront, AWS Route53 and AWS certificate 
manager.
</section>

<section>
<h3>Major Steps for hosting the static sites:</h3>
<ol class="major-steps">
<li>Step 1: Create a bucket</li>
<li>Step 2: Edit Block Public Access settings</li>
<li>Step 3: Enable static website hosting</li>
<li>Step 4: Add a bucket policy that makes your bucket content publicly available</li>
<li>Step 5: Configure an index document</li>
<li>Step 6: Configure an index document</li>
<li>Step 7: Test your website endpoint</li>
<li>Step 8:  Creating an SSL/TLS Certificate for CloudFront</li>
<li>Step 9: Configuring CloudFront Distributions for Website Delivery</li>
<li>Step 10. Configuring Route53 for DNS Management</li>
<li>Step 11: Clean up</li>
</ol>
</section>

<section>
<p>In this tutorial, we will learn and explore about creating the S3 bucket, updating the block settings, enabling the
static website uploading index and error document.
The further steps to create SSL/TLS certificate, cloudfront distribution and Route53 will be explored in next tutorial.
</p>
</section>

<section>
<h3>Step 1: Create a bucket</h3>
<p>In this step, we will create the bucket that contains all the static files for the website. If you have already created the bucket. you can skip to step 2.</p>
</section>

<section>
<img src="{{site.baseurl}}/img/static-site-hosting/create-bucket.png" alt="Website hosting using s3 |
Create bucket - Tapan BK" width="90%" class="static-site" />
</section>
<section>
<h4>Steps to create the bucket:</h4>

<ol>
<li>Sign in to the <b>AWS Management Console</b> and open the <b>Amazon S3 console </b>at 
<a href="https://console.aws.amazon.com/s3/">https://console.aws.amazon.com/s3/</a>.</li>
<li>Choose <b>Create bucket </b> button.</li>
<li>Enter the <b>Bucket name</b>. The name must be unique. You can enter you site name like tapanbk.com.np just to identify website</li>
<li>Choose the <b>Region</b> where you want to create the bucket. Always Choose the region that is geographically 
close to minimize the latency and costs accrued due to latency. The region also determines the final endpoint of Amazon S3 website endpoint.
</li>
<li> And the click <b>Create</b>.</li>
</ol>
</section>


<section>
<h3>Step 2: Edit Block Public Access settings</h3>
<p>In this step, we will explore on how to update the block public access settings for the  website. By default, Amazon s3 blocks public
access to the buckets. So, to host a static site, you need to edit block public access settings.</p>
</section>

<section>
<img src="{{site.baseurl}}/img/static-site-hosting/aws-s3-block-public-access.png" alt="Website hosting using s3 |
Update block public access - Tapan BK" width="90%" class="static-site" />
</section>

<section>
<h4>Steps to enable the public access settings.</h4>
<ol>
<li>Open the <b>Amazon S3 console</b> at <a href="https://console.aws.amazon.com/s3/" target="_blank">https://console.aws.amazon.com/s3/</a>.</li>
<li>Choose the <b>bucket</b> that you have configured as a static website.</li>
<li>Choose <b>Permissions</b> Tab.</li>
<li>Under <b>Block public access (bucket settings),</b> choose <b>Edit</b>.</li>
<li>Clear <b>Block all public access</b>, and choose <b>Save changes</b>.</li>
</ol>
</section>

<section>
<h3>Step 3: Enable static website hosting</h3>
<p>In this step, We will explore on how to enable static website hosting from the Amazon S3 bucket.  After you create a bucket,
you can enable static website hosting for the bucket.  </p>
</section>

<section>
<img src="{{site.baseurl}}/img/static-site-hosting/enable-static-website-hosting.png" alt="Website hosting using s3 | 
Enable Static Website - Tapan BK" width="90%" class="static-site"/>
</section>

<section>
<h4>Steps to enable static website hosting.</h4>
<ol>
<li>Sign in to the <b>AWS Management Console</b> and open the <b>Amazon S3 console</b> at 
<a href="https://console.aws.amazon.com/s3/" target="_blank">https://console.aws.amazon.com/s3/</a></li>
<li>You can see te list of <b>bucket</b>. Choose the name of the bucket that you want to enable static website hosting.</li>
<li>Choose <b>Properties</b> tab.</li>
<li>Scroll upto the <b>Static website hosting</b> section, choose <b>Edit</b>.</li>
<li>Choose <b>Use this bucket to host a website</b>.</li>
<li>Under <b>Static website hosting</b>, choose <b>Enable</b>.</li>
<li>In the <b>Index document</b>, enter the filename of the <b>index document</b>. Typically, the  <b>Index document</b> is  <b>index.html</b>. 
The <b>index document</b> is case-sensitive and name and extension must match the file name of the index document. The index 
document is returned when requests for a root domain is made.
</li>
<li>
To provide your custom <b>error document </b>for <b>4XX class</b> errors, in the <b>Error document</b>, enter the custom error document file
name. The error document name is case-sensitive, and it must exactly match the file name of the HTML error document. 
AWS S3 will return a default HTML error document. if no custom error document is mentioned.
</li>
<li>
(Optional) You can specify the <b>advanced redirection rules</b>  in JSON format to describe redirection rules under <b>Redirection rules</b> if you want to specify
redirection.
</li>
<li>Choose <b>Save Changes</b>.
<p>Amazon S3 will enable the static website hosting for the bucket. The endpoint of the static website hosting will be  provided at 
the end of the bucket.
</p>
</li>
<li>Note the endpoint under static website hosting. This is the Amazon S3 website endpoint.
<p>After you enable the static website, you can enter this endpoint in the browser to test the website. But first you need to 
update the index and error file.
The endpoint will be similar to http://<b>bucket-name</b>.s3-website-<b>region</b>.amazonaws.com
</p>

</li>
</ol>
</section>


<section>
<h3>Step 4: Add a bucket policy that makes your bucket content publicly available</h3>
<p>
It is required to update the <b>S3  bucket policy</b> to grant public read access to the bucket after editing <b>S3 Block Public Access settings</b>. 
After granting public read access, anyone on the internet can read access the bucket.
</p>
</section>

<section>
<h4>Steps to update bucket policy of the bucket </h4>
<ol>
<li>Under <b>Buckets</b>, choose the name of your bucket.</li>
<li>Choose <b>Permissions</b>.</li>
<li>Under <b>Bucket Policy</b>, choose <b>Edit</b>.</li>
<li>

To grant public read access to your website, copy the following bucket policy, and paste it in the Bucket policy editor.

<pre class="terminal">
{
   "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::Bucket-Name/*"
            ]
        }
    ]
}
</pre>

<p>Replace the <b>Bucket-Name</b> with your actual Bucket Name</p>


</li>
<li>Update the <b>Bucket-Name</b> with your actual bucket name. In the above example, <b>Bucket-Name</b>
is a placeholder for the bucket name. To use the policy, update the Bucket-Name place holder with actual Bucket name.
</li>
<li>Choose <b>Save Changes</b>.

<p>There will be a message indicating that the bucket policy has been updated successfully. </p>
<p>If there is an error indicating invalid resource, confirm the bucket name with the bucket name in the placeholder.</p>
</li>
</ol>

</section>

<section>
<section>
<img src="{{site.baseurl}}/img/static-site-hosting/permission-and-policies.jpg" alt="Website hosting using s3 | 
Enable Static Website - Tapan BK" width="90%" class="static-site"/>
</section>
</section>



<section>
<h3>Step 5: Configure an index document</h3>
<p>
While enabling the static website hosting, you need to enter the index document like index.html. After you enabled the
static website, you need to create the index document and upload that index document in the bucket.
</p>

</section>

<section>
<h4>Steps to configure the index document</h4>

<ol>
<li>Create the index document, in our case index.html.</li>
<li>Save the <b>index.html</b> file locally.</li>
<li>Sign in to the <b>AWS Management Console</b> and open the  <b>Amazon S3 console</b> at 
<a href="https://console.aws.amazon.com/s3/" target="_blank">https://console.aws.amazon.com/s3/</a></li>
<li>In the <b>bucket list</b>, choose the bucket that will be used for static website</li>
<li>To upload the index document in the bucket, do on of the following:
    <ul>
    <li><b>Drag and drop</b> the index file into the console bucket listing.</li>    
    <li>Choose <b>Upload</b>, and follow the prompts to choose and upload the index file.</li>    
</ul>
</li>
<li>(Optional) <b>Upload</b> related images, js, css or html files</li>
</ol>

</section>

<section>
<img src="{{site.baseurl}}/img/static-site-hosting/upload-index-document.png" alt="Website hosting using s3 | 
Upload Index document in S3 - Tapan BK" width="90%" class="static-site"/>
</section>


<section>
Step 6: Configure an error document
<p>
While enabling the static website hosting, you need to enter the error document like index.html. After you enabled the
static website, you need to create the error document and upload that error document in the bucket.
</p>
</section>

<section>
<h4>Steps to configure the error document</h4>

<ol>
<li>Create the error document, in our case <b>error.html</b>.</li>
<li>Save the <b>error.html</b> file locally.</li>
<li>Sign in to the <b>AWS Management Console</b> and open the  <b>Amazon S3 console</b> at 
<a href="https://console.aws.amazon.com/s3/" target="_blank">https://console.aws.amazon.com/s3/</a></li>
<li>In the <b>bucket list</b>, choose the bucket that will be used for static website</li>
<li>To upload the error document in the bucket, do on of the following:
    <ul>
    <li><b>Drag and drop</b> the error file into the console bucket listing.</li>    
    <li>Choose <b>Upload</b>, and follow the prompts to choose and upload the error file.</li>    
</ul>
</li>
<li>(Optional) <b>Upload</b> related images, js, css or html files</li>
</ol>
</section>



<section>
<h3>Step 7: Test your website endpoint</h3>
<p>After you configured and completed all of the above steps, you can finally test the website endpoint.
</p>
</section>

<section>
<h4>Steps to find the website endpoint</h4>
<ol>
      <li>Sign in to the <b>AWS Management Console</b> and open the <b>Amazon S3 console</b> at 
    <a href="https://console.aws.amazon.com/s3/" target="_blank">https://console.aws.amazon.com/s3/</a></li>
    <li>In the <b>bucket list</b>, choose the bucket that will be used for static website</li>
    <li>
       Choose  <b>Properties</b> 
    </li>
    <li>At the bottom of the page, Under <b>Static website hosting</b>, you will see the <b>static website endpoint</b>. 
The endpoint will be similar to http://<b>bucket-name</b>.s3-website-<b>region</b>.amazonaws.com.</li>
    <li>Copy the <b>endpoint of the website</b>.</li>
    <li>Open the browser of your choice and paste the copied website endpoint. You must see the index page of the 
    website
</li>
</ol>

</section>

<section>
<h3>Final Notes</h3>
<p>You might have a domain like <a href="https://tapanbk.com.np">tapanbk.com.np</a> and you may want to configure your
the aws static website to use the domain name of the choice.
</p>

<p>
Explore more about this in part 2, Please visit
<a href="{{site.baseurl}}/comprehensive-tutorial-on-hosting-the-static-site-in-aws-using-s3-cloudfront-certificate-manager-and-route53-part-2">
Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53 - part 2 </a>
</p>
</section>

<style>
    ol.major-steps{
    text-decoration: none;
    }
    .major-steps li{
    margin-bottom:30px
    }

    ol li{
    margin-bottom:30px
    }
    img.static-site{
    margin-bottom: 30px !important;
    }

</style>