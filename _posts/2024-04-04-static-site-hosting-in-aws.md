---
layout: post
section-type: post
title: Basic preview on hosting the Static Site using AWS S3, cloudfront, Certificate Manager and Route53

category: AWS
tags: [ 'AWS', 'AWS S3', 'AWS CloudFront', 'AWS Route53', 'AWS Certificate Manager' ]
permalink: basic-preview-on-hosting-the-static-site-in-aws-using-s3-cloudfront-certificate-manager-and-route53
---

Basic preview on hosting the Static Site using AWS S3, cloudfront, Certificate Manager and Route53 - Tapan BK

<!--more-->

<img
src="{{site.baseurl}}/img/static-site-hosting/static-website-hosting.jpg"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Basic preview on hosting the Static Site using AWS S3, cloudfront, Certificate Manager and Route53 - Tapan BK"
alt="Basic preview on hosting the Static Site using AWS S3, cloudfront, Certificate Manager and Route53 - Tapan BK">

<section>
<h3>Basic preview on hosting the Static Site in AWS using AWS S3, cloudfront, Route53 </h3>

</section>

<section>
This is the basic preview guide on hosting the static site in AWS using AWS s3, AWS cloudfront, AWS Route53 and AWS certificate 
manager. The comprehensive guide will be available soon. 
</section>

<section>
<h3>What is Static Site Hosting?</h3>

<p>Static site hosting is a cost-effective and efficient way to host the websites. It involves serving web content that
consistes of pre-rendered HTML, CSS, JavaScript, media and other files directly to the user's browser. It does not 
beed the server-side processing or database queries. The static sites do not generate the content on-the-fly based 
on user requests; they are pre-generated or pre-build content stored on the server.
</p>

<p>
Static sites are ideal for blogs, portfolios, documentation sites, and other content-driven web-applications. 
AWS offers various services to facilitate static site hosting with Amazon S3 (Simple Storage Service) and Amazon CloudFront being the core components.
</p>
</section>


<section class="static-site-using-aws">
<h3>Advantages of Static Site Hosting:</h3>
<ul>

<li><b>Cost-Effectiveness: </b>
AWS is based on pay for what you use model which makes it cheaper than other options and saves money.
</li>

<li><b>Scalability: </b>
AWS resources can be configured to scaled up or down to handle  dynamic nature of visitors without any hassle. 
</li>

<li><b>High Availability and Reliability: </b>
AWS stores backup of the data  in multiple places. So, Even something breaks, website is always available and running smoothly .
</li>

<li><b>Fast Performance: </b>
AWS uses the special network called CloudFront that delivers the content quickly for everyone, no matter where they are. 
</li>

<li><b>Simplicity and Ease of Use: </b>
AWS maintains the simple interface to maintain simplicity. So, website can be hosted without much technical headaches.
</li>

<li><b>Security: </b>
AWS uses strong security features like encryption to protect against the hackers and cyberattacks.
</li>

<li><b>Global Reach: </b>
AWS has servers all around the world. So, website is accessible everywhere. AWS ensures that content is accessible
from the nearest server to the users for quick access.
</li>

<li><b>Integration with AWS Services: </b>
AWS allows users to add extra features with the website without any problem. AWS has created tools and services for such 
functionality.
</li>
</ul>

</section>
<section class="static-site-using-aws"> 
<h3>Limitations of Static Site Hosting:</h3>
<ul>
<li><b>Lack of Server-Side Processing: </b>
AWS s3 is mostly used for storing and serving  media files, static files such as HTML, CSS, and JavaScript.
The server-side rendering or processing is not supported. So, i cannot execute server-side scripts or interact with database directly.
</li>

<li><b>No Server-Side Code Execution: </b>
AWS s3 does not allow user to run the server-side scripting language such as PHP, Python, or Node.js scripts. This limits
the ability to create the dynamic content or perform the server-side operations on website.
</li>
<li><b>Limited Authentication and Authorization: </b>
Website hosted on AWS s3 required additional configurations or integrations with other services to use the basic authentication and authorization
mechanisms in website.
</li>
<li><b>No Support for Server-Side Frameworks: </b>
The server-side frameworks cannot be configured in the s3. They need to be hosted in separate server environment,
</li>

<li><b>Storage and Bandwidth Costs: </b>
Even though AWS s3 offer the cost-effective and bandwidth pricing, AWS can incur significant cost over time for serving 
the large files and sudden spikes in traffic.
</li>

<li><b>No Server-Side Logging:  </b>
AWS S3 does not have the built-in server-side logging feature. We need to enable additional services to enable the logging,
tracks requests and analyze access patters. These are limited compared to traditional web server.
</li>

<li><b>No SSL/TLS Termination:  </b>
AWS s3 does not allow to use teh SSL/TLS services at the bucket level. We can use the  Amazon CloudFront in front of
S3 to enable the SSL/TLS to improve the caching and security.
</li>

<li><b>Limited CDN Integration:  </b>
AWS s3 can use the Amazon CloudFront for content delivery and caching. But the integration has only limited options compared
to a traditional web server. Advanced CDN features such as real-time logging, advanced cache policies may require 
additional advanced configurations and customizations.
</li>

<li><b>Limited HTTP Headers Control: </b>
AWS s3 allows users to set the basic caching options and metadata for objects which allows users to have less control over
advanced HTTP headers in comparison to using a traditional web server. AWS s3 provides the limited control
over HTTP headers such as caching directives, content-types and content-disposition headers.
</li>

<li><b>CORS Limitations: </b>
Cross-Origin Resource Sharing (CORS) rules in AWS S3 are limited compared to a traditional web server.
While you can still configure CORS rules to allow or restrict cross-origin requests, the options for fine-grained
control and complex CORS  configurations  as in traditional web server may be limited.
</li>
</ul>
</section>

<section>
<h3>AWS Services for Static Site Hosting:</h3>
<h4><b>Amazon S3 (Simple Storage Service): </b></h4>
<p>
Amazon S3 is a highly scalable, durable and available  storage service which is
used for storing media files and static website files such as HTML, CSS, JavaScript, images, and other assets. In S3, you can easily
upload, manage, and serve static content for your website.
</p>
</section>
<section>
<h4><b>Amazon CloudFront: </b></h4>
<p>
Amazon CloudFront is a global content delivery network (CDN) service which is used to improve the delivery of the content
to the users around the world. CloudFront caches the media content at the edge locations and serves the content from the 
locations located closer to the users. It also reduces latency. We can use the Amazon S3 with cloudfront to deliver the 
static website content efficiently.  It also provides SSL/TLS encryption, access controls, and real-time metrics.
</p>
</section>

<section>
<h4><b>Amazon Route 53: </b> </h4>
<p>
It is Domain Name system(DNS) service provided by Amazon Web Services(AWS.Route 53  effectively 
translated human-readable domain names into numeric IP address that can be used by computers to communicate with each other
over internet. It allows  to route traffic to resources such as CloudFront, EC2 instances, S3 buckets, and Elastic Load Balancers.
</p>
</section>

<section>
<h4><b>AWS Certificate Manager: </b> </h4>
<p>
AWS Certificate Manager (ACM)  is a an AWS service that provide, manage SSL/TLS certificates which can be used with AWS services.
These certificates are used to establish a secure connection between web server and web browser by encrypting data.
It encrypts  sensitive information like payment details, account credentials  and provides protection.
</p>
</section>

<section>
<h3>Here's an overview of how static site hosting works in AWS:</h3>
<ol class="static-site-steps">
<li>
<b>Create an AWS Account: </b>Sign up for an AWS account if you don't have one already.
Provide necessary information and set up billing preferences.
</li>

<li>
<b>Register a Domain Name (Optional):</b>
Register the domain from any domain provider. You can also register domain from Route53 or another domain register if you 
don't have a domain name.
</li>

<li>
<b>Set Up an S3 Bucket:</b>
Go to the Amazon S3 console.Create a new S3 bucket with a unique name.
</li>

<li>
<b>Enable static website hosting in the bucket properties.</b>
Specify the index document (e.g., index.html) and error document (e.g., error.html).
Upload Website Files:

</li>

<li>
<b>Upload Website Files:</b>
Upload your website files (HTML, CSS, JavaScript, images, etc.) to the S3 bucket.
Ensure that all files have appropriate permissions set for public access.
</li>

<li>
<b>Configure Bucket Permissions:</b>

Set up a bucket policy to allow public read access to the website files. Configure CORS (Cross-Origin Resource Sharing) if your website makes requests to resources in other domains.
</li>

<li>
<b>Test the Website Endpoint:</b>

Access the website using the S3 bucket's endpoint URL provided in the bucket properties. Verify that the website loads correctly.
</li>

<li>
<b>Set Up a Custom Domain (Optional):</b>

If you have a custom domain, configure a Route 53 hosted zone for your domain.
Create a record set in Route 53 to alias your domain to the S3 website endpoint.
</li>

<li>
<b>Configure DNS Settings:</b>
Update the DNS settings with your domain registrar to point to the Route 53 name servers.
Wait for DNS propagation, which may take some time (typically a few hours).
</li>

<li>
<b>Test the Custom Domain:</b>

Once DNS propagation is complete, access your website using your custom domain.
Verify that the website loads correctly with the custom domain.

</li>

<li>
<b>(Optional) Set Up SSL/TLS Certificate:</b>

Configure SSL/TLS certificate using AWS Certificate Manager (ACM) for HTTPS support.
Apply the certificate to your CloudFront distribution if using CloudFront as a CDN.
</li>

<li>
<b>Monitor and Manage Resources:</b>
Use AWS CloudWatch to monitor the performance and health of your website.
Set up alarms for monitoring metrics such as latency, error rates, and traffic.
Regularly review and optimize costs using AWS Cost Explorer and AWS Trusted Advisor.
</li>

</ol>
</section>

<section>

<p>
If you want to explore and learn about hosting static site in AWS in depth, Please visit
<a href="{{site.baseurl}}/comprehensive-tutorial-on-hosting-the-static-site-in-aws-using-s3-cloudfront-certificate-manager-and-route53-part-1">
Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53 - part 1 </a>
</p>
</section>

<style>
    .static-site-steps li{
    margin-bottom:30px
    }
    .static-site-using-aws li{
      margin-bottom:30px
    }
</style>