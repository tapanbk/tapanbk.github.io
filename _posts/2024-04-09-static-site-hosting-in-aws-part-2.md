---
layout: post
section-type: post
title: Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53 - part 2 

category: AWS
tags: [ 'AWS', 'AWS S3', 'AWS CloudFront', 'AWS Route53', 'AWS Certificate Manager' ]
permalink: comprehensive-tutorial-on-hosting-the-static-site-in-aws-using-s3-cloudfront-certificate-manager-and-route53-part-2
---

Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53  - Tapan BK

<!--more-->

<img
src="{{site.baseurl}}/img/static-site-hosting/static-website-hosting.jpg"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53 - part 2  - Tapan BK"
alt="Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53 - part 2  - Tapan BK">


<section>
<p>
This is the part 2 of 2 of comprehensive tutorial on hosting the static site in AWS using AWS s3, AWS cloudfront, AWS Route53 and AWS certificate 
manager. 
</p>
<p>
If you happen to come directly to this link, or you want to explore the part 1, Please visit
<a href="{{site.baseurl}}/comprehensive-tutorial-on-hosting-the-static-site-in-aws-using-s3-cloudfront-certificate-manager-and-route53-part-1">
Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53 - part 1 </a>. This is the final part of learning about hosting the 
static site in AWS using  AWS s3, AWS cloudfront, AWS Route53 and AWS certificate 
</p>
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
<li>Step 8:  Creating an SSL/TLS Certificate from AWS Certificate Manager</li>
<li>Step 9: Configuring CloudFront Distributions for Website Delivery</li>
<li>Step 10. Configuring Route53 for DNS Management</li>
</ol>
</section>

<section>
<p>In this tutorial, we will learn about creating SSL/TLS certificate from AWS Certificate Manager, create cloudfront distribution 
and then finally configuring the route53 for DNS management. 
</p>
</section>

<section>
<h3>Step 8:  Creating an SSL/TLS Certificate for CloudFront</h3>
<h4>Steps to create the SSL/TLS certificate</h4>
<ol>
<li>Sign in to the <b>AWS Management Console</b> and open the  <b>AWS Certificate Manager(ACM)</b> at 
<a href="https://us-east-1.console.aws.amazon.com/acm/home" target="_blank">https://us-east-1.console.aws.amazon.com/acm/home</a></li>
<li>Click on <b>Request a certificate</b></li>
<li>Enter the custom domain name like tapanbk.com.np and the click on <b>request</b>
<p>
<img src="{{site.baseurl}}/img/static-site-hosting/request-acm-certificate.png" alt="Website hosting using s3 |
Request public certificate - Tapan BK" width="90%" class="static-site" />
</p>

</li>
<li>Choose the certificate  from the list of certificates from the AWS Certificate Manager list page</li>
<li>Under domains, You will see the lists of domains and their CNAME name and CNAME value
<p>
<img src="{{site.baseurl}}/img/static-site-hosting/cname-list.png" alt="Website hosting using s3 |
ACM CNAME list - Tapan BK" width="90%" class="static-site" />
</p>
</li>
<li>Copy the CNAME name and CNAME value  and update the CNAME record in the domain provider.
    <p>If your domain name is tapanbk.com.np and CNAME name is _80dd5415bbf1vffd86f45cfv3d487c54.tapanbk.com.np., 
in most of the cases, do not use the .tapanbk.com.np of the CNAME name, just use _80dd5415bbf1vffd86f45cfv3d487c54
</p>
<p>
<img src="{{site.baseurl}}/img/static-site-hosting/cname-validation-domain-provider.png" alt="Website hosting using s3 |
ACM CNAME in domain provider - Tapan BK" width="90%" class="static-site" />
</p>

</li>
<li>Wait few minutes until the certification status changes from <b>pending validation</b> to  <b>success</b> </li>
<li>In Domains section  at right hand-side, click on <b>Create records in Route53</b> and then
choose the domain records and then <b>Create records</b>
<p>
<img src="{{site.baseurl}}/img/static-site-hosting/cname-list.png" alt="Website hosting using s3 |
Create records- Tapan BK" width="90%" class="static-site" />
</p>
</li>
</ol>
</section>


<section>
<h3>Step 9: Configuring CloudFront Distributions for Website Delivery</h3>
<h4>Steps to configure the cloudfront distributions</h4>
<ol>
<li>Sign in to the <b>AWS Management Console</b> and open the  <b>CloudFront</b> at 
<a href="https://us-east-1.console.aws.amazon.com/cloudfront" target="_blank">https://us-east-1.console.aws.amazon.com/cloudfront</a></li>
<li>Click on the <b>Create cloudfront distribution</b></li>
<li>Select the static site endpoint  that is previously configured in the origin domain.
<p>
<img src="{{site.baseurl}}/img/static-site-hosting/create-distribution-1.png" alt="Website hosting using s3 |
Select static website endpoint - Tapan BK" width="90%" class="static-site" />
</p>
</li>
<li>Enter your domain name in the <b>Alternate domain name(CNAME)</b> field and select your <b>certificate</b> 
in the <b>Custom SSL certificate</b> field

<p>
<img src="{{site.baseurl}}/img/static-site-hosting/create-distribution-2.png" alt="Website hosting using s3 |
Cloudfront distribution SSL certificate - Tapan BK" width="90%" class="static-site" />
</p>
</li>
<li><b>Default root object</b> field, type your website HTML file (index.html)</li>
<li>Other settings can be set as default.</li>
<li>Click on <b>create a distribution</b>.

</li>
<li>Go to the home page of the Cloudfront Distribution, under the domain name, copy the cloudfront domain
<p>
<img src="{{site.baseurl}}/img/static-site-hosting/cloudfront-distribution.jpg" alt="Website hosting using s3 |
Cloudfront distribution  domain- Tapan BK" width="90%" class="static-site" />
</p>

</li>
<li>Paste the domain in the browser. the static website should open as it opens for static website endpoint.
The website should open in https </li>
</ol>
</section>


<section>
<h3>Step 10. Configuring Route53 for DNS Management</h3>
<li>Sign in to the <b>AWS Management Console</b> and open the  <b>Route53</b> at 
<a href="https://us-east-1.console.aws.amazon.com/route53" target="_blank">https://us-east-1.console.aws.amazon.com/route53</a></li>
<li>Click on the <b>Hosted zones</b> in left side of the Route53 dashboard under Dashboard link and 
Click <b>Create hosted zone</b> on right side

<p>
<img src="{{site.baseurl}}/img/static-site-hosting/route-53-create-hosted-zone-link.png" alt="Website hosting using s3 |
Create Hosted zone - Tapan BK" width="90%" class="static-site" />
</p>
</li>
<li>Enter the  name and the description and then click <b>Create hosted zone</b> to register the hosted zones
<p>
<img src="{{site.baseurl}}/img/static-site-hosting/create-hosted-zone.png" alt="Website hosting using s3 |
Create Hosted zone - Tapan BK" width="90%" class="static-site" />
</p>

</li>
<li>Select the current created hosted zone from list of hosted domain in route53
</li>
<li>Click on<b>Create record</b> to create the record
<p>
<img src="{{site.baseurl}}/img/static-site-hosting/route-53-hosted-zone-records.jpg" alt="Website hosting using s3 |
Route53 hosted zones records - Tapan BK" width="90%" class="static-site" />
</p>
</li>

<li>In the <b>Create record page</b>, update the record type to Route traffic to(A record) type.Turn on the alias and select <b>Route traffic to </b> abd select Cloudfront distribution.
On An alias, select the created cloudfront distribution
<p>
<img src="{{site.baseurl}}/img/static-site-hosting/route53-alias.png" alt="Website hosting using s3 |
Route53 alias- Tapan BK" width="90%" class="static-site" />
</p>

</li>
<li>Create record. </li>
</section>


<section>
<p>Update the cloudfront distribution domain name as CNAME record in the domain provider</p>
<p>
<img src="{{site.baseurl}}/img/static-site-hosting/distribution-domain-update-to-domain-provider.png" alt="Website hosting using s3 |
 cloudfront distribution domain- Tapan BK" width="90%" class="static-site" />
</p>

<p>You are ready to access the content of AWS s3 using the custom own domain.</p>
</section>

<section>
<h3>Final Notes</h3>
<p>
If you happen to come directly to this link, or you want to explore the part 1, Please visit
<a href="{{site.baseurl}}/comprehensive-tutorial-on-hosting-the-static-site-in-aws-using-s3-cloudfront-certificate-manager-and-route53-part-1">
Comprehensive tutorial on hosting the static site in AWS using  S3, cloudfront, Certificate Manager and Route53 - part 1 </a>
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