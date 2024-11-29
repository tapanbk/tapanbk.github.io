---
layout: post
section-type: post
title: Content Security Policy (CSP) - A Shield Against Modern Web Vulnerabilities - Part 2
category: Programming
tags: [ 'Programming', 'Frontend', 'JavaScript' ]
permalink: content-security-policy-part-2
---

Content Security Policy (CSP): A Shield Against Modern Web Vulnerabilities (Part 2) - Tapan BK

<!--more-->

<img
src="{{site.baseurl}}/img/posts/content-security-policy-for-static-files.png"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Extensive guide on django logging - Tapan BK"
alt="Content Security Policy (CSP) - Tapan BK">

<section>
    <p>
        One of the challenges developers face when implementing Content Security Policy (CSP) is managing <strong>inline scripts</strong> 
        (JavaScript embedded directly in HTML) and <strong>inline styles</strong> (CSS written within HTML tags). CSP blocks these by 
        default to protect your website from Cross-Site Scripting (XSS) attacks. However, in some cases, inline code might be necessary, 
        and CSP provides secure mechanisms to handle them effectively.
    </p>
    <h3>Why Inline Scripts and Styles Are Blocked</h3>
    <p>
        Inline scripts and styles are inherently risky for several reasons:
    </p>
    <ul>
        <li><strong>XSS Vulnerability:</strong> Attackers can inject malicious code directly into your pages.</li>
        <li><strong>Harder to Trace:</strong> Inline code lacks a clear source, making it difficult to audit or verify.</li>
        <li><strong>Weak Content Control:</strong> Without restrictions, any inline script or style, even malicious ones, can execute.</li>
    </ul>
    <p>
        CSP avoids these risks by blocking all inline scripts and styles unless explicitly allowed.
    </p>
    <h4>Allowing Inline Scripts Using Nonces</h4>
    <p>
        A <strong>nonce</strong> (short for "number used once") is a unique, randomly generated token that allows specific inline scripts to run. 
        Here's how to use it:
    </p>
    <ol>
        <li>
            <strong>Generate a Unique Nonce:</strong> Your server should generate a random token for every page load and include it in the CSP header.
            <pre>
<code>
const nonce = uuid.v4();
Content-Security-Policy: script-src 'self' 'nonce-abc123';</code>
</pre>
        </li>
        <li>
            <strong>Add the Nonce to Inline Scripts:</strong> Use the same nonce in your inline script tag.
            <pre>
<code>
# If the nounce value is abc123, it can be written in script as
&lt;script nonce="abc123"&gt;
    console.log('This inline script is secure.');
&lt;/script&gt;</code>
</pre>
</li>
</ol>
<p>
The browser checks that the nonce in the script tag matches the one in the CSP header. If they match, the script executes;
otherwise, it is blocked.
</p>
    <h3>Allowing Inline Styles Using Nonces</h3>
    <p>
        You can also use nonces for inline styles:
    </p>
    <ol>
        <li>
            <strong>Add Nonce to CSP Header:</strong> Specify the nonce for styles in the header.
            <pre>
<code>Content-Security-Policy: style-src 'self' 'nonce-def456';</code>
</pre>
        </li>
        <li>
            <strong>Include the Nonce in Inline Styles:</strong>
            <pre>
            <code>&lt;style nonce="def456"&gt;
                body {
                    background-color: #f0f0f0;
                }
            &lt;/style&gt;</code>
            </pre>
        </li>
</ol>
    <h3>Allowing Inline Content Using Hashes</h3>
    <p>
        Another option is using a <strong>hash</strong>. The hash is a cryptographic value calculated from the content of the inline script 
        or style. If the content matches the hash, the browser allows it to run.
    </p>
    <ol>
        <li>
            <strong>Calculate the Hash:</strong> For example, if your inline script is:
            <pre><code>&lt;script&gt;
    console.log('Hello, World!');
&lt;/script&gt;</code></pre>
Calculate its SHA-256 hash (using a tool or library). The hash might look like:
<pre><code>sha256-xyz123...</code></pre>
</li>
<li>
<strong>Add the Hash to CSP Header:</strong>
<pre><code>Content-Security-Policy: script-src 'self' 'sha256-xyz123...';</code></pre>
</li>
<li>
<strong>No Additional Attributes Needed:</strong> Include the inline script as usual:
<pre><code>&lt;script&gt;
console.log('Hello, World!');
&lt;/script&gt;</code></pre>
</li>
</ol>
</section>

<section>
    <h3>Best Practices for Handling Inline Content</h3>
    <ul>
        <li><strong>Avoid Inline Scripts and Styles:</strong> Whenever possible, move your code to external files for better security and maintainability.</li>
        <li><strong>Use Nonces for Dynamic Content:</strong> Generate a new nonce for every page load to secure dynamic inline content.</li>
        <li><strong>Use Hashes for Static Content:</strong> Pre-calculate hashes for scripts or styles that do not change frequently.</li>
        <li><strong>Audit Your Inline Content:</strong> Regularly review inline code to ensure it is necessary and secure.</li>
        <li><strong>Monitor Violations:</strong> Use the <code>report-uri</code> or <code>report-to</code> directive to log CSP violations for analysis.</li>
    </ul>
    <p>
        By following these strategies, you can securely manage inline scripts and styles in your CSP implementation while minimizing the risks 
        of XSS attacks.
    </p>
</section>


<section>
<p>
If you happened to directly come to this page, Explore the first part of this series on content security policy, Please visit
<a href="{{site.baseurl}}/content-security-policy-part-1">
Content Security Policy (CSP): A Shield Against Modern Web Vulnerabilities (Part 1) </a>
</p>
</section>

