---
layout: post
section-type: post
title:  Guide to download protected view only  PDF from Google Drive

category: JavaScript
tags: ['JavaScript', 'Script']
permalink: guide-to-download-protected-view-only-pdf-from-google-drive
---
Guide to download protected view only  PDF from Google Drive - Tapan BK

<!--more-->

<img
    src="{{site.baseurl}}/img/posts/download-view-only-protected-pdf-using-script.png"
    class="img-thumbnail img-rounded" height="400px" width="100%"
    title="Guide to download protected view only  PDF from Google Drive - Tapan BK"
    alt="Guide to download protected view only  PDF from Google Drive - Tapan BK">
<section>
<p>
It is common situation that you need access pdf, google sheets, videos from your teachers, friends, colleagues or 
similar resource from internet. When you try to download the content of those resources, 
it may appear that the resource is protected and is only available for view purpose. Due to the protection for view only,
these resources cannot be downloaded, copied or printed because these resources has been protected for view only and 
no download or print feature is provided.
</p>
</section>


<section>
<p>
Generally, these resources are protected and provided access for read only or view only. We may need to download the
files locally on our laptop or mobiles to view them later or print them. To download, save them locally or print them,
we need a hack for that. 
</p>

<p>In this article, I will explain the way to download the protected view only files from google drive in pdf format
using JavaScript. It is tested on Chrome Browser.
</p>
</section>

<section>
<p>The provided scripts converts every page of resource to jpg images and combine those images and
download that combined images as a pdf.</p>
</section> 

<section>
The script only takes the part of the document that is visible. So, if all the contents of pdf is not downloaded, 
scroll up to bottom of the pages and try zooming out so that you can see the content properly and the run the script
</section>

<section>
<h3>Steps to download the PDF file</h3>

<ol>
<li> Open the protected read only file.</li>
<li> Scroll to the bottom of the document, so all the pages are rendered and will be downloaded in the downloaded file.</li>
<li> Open Developer Tools. There are two ways to open developer tools.
    <ul>
        <li>1. To open Developer tools. press <em class="important">ctrl+shift+I</em> at once </li>
        <li>Right click on the empty section of website and select the <em class="important">Inspect</em>  option.
        <img src="{{site.baseurl}}/img/posts/chrome-right-click-inspect.png"
        style="margin: 20px 0"
        alt="Inspect Element | Tapan BK"></li>
    </ul>
</li>
<li> You will see Elements, Console, Sources, Network Tab. Select Console tab.<br/>
<img src="{{site.baseurl}}/img/posts/developer-console.png" alt="Developer Console| Tapan BK"
 style="margin: 20px 0"
> 
</li>
<li>Paste the script below provided script as shown:
<img src="{{site.baseurl}}/img/posts/protect-pdf-download-script.png" alt="protected Pdf download JS Script| Tapan BK"
    style="margin: 20px 0"
 >
</li>
<li>After pasting the script, press enter key. The pdf file will be downloaded. You may be shown the dialog box to 
choose the location to save the file.
</li>
</ol>
</section>

<section>

<h3>Script to download the protected view only pdf file: </h3>
<pre class="terminal">
    let jspdfScript = document.createElement("script");
    jspdfScript.onload = function () {
        let pdfFile = new jsPDF();
        let elements = document.getElementsByTagName("img");
        for (let i in elements) {
            let img = elements[i];
            if (!/^blob:/.test(img.src)) {
                continue;
            }
            let canvasElement = document.createElement('canvas');
            let context = canvasElement.getContext("2d");
            canvasElement.width = img.width;
            canvasElement.height = img.height;
            context.drawImage(img, 0, 0, img.width, img.height);
            let imgData = canvasElement.toDataURL("image/jpeg", 1.0);
            pdfFile.addImage(imgData, 'JPEG', 0, 0);
            pdfFile.addPage();
        }
        pdfFile.save("my-file.pdf");
    };
    jspdfScript.src = 'https'+'://'+'cdnjs'+'.cloudflare'+'.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js'
    document.body.appendChild(jspdfScript);
</pre>

<p>If you want to save the file in different name. Update the filename parameter in pdfFile.save function.</p>
</section>
