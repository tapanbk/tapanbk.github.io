---
layout: post
section-type: post
title: Content Security Policy (CSP) in inline styles and scripts
category: Programming
tags: [ 'Programming', 'Frontend', 'JavaScript', 'Security', 'Backend' ]
permalink: content-security-policy-part-in-inline-styles-and-scripts
---

Content Security Policy (CSP) in inline styles and scripts - A Shield Against Modern Web Vulnerabilities - Tapan BK

<!--more-->

<img
src="{{site.baseurl}}/img/posts/content-security-policy-for-static-files.png"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Content Security Policy (CSP) in inline styles and scripts - A Shield Against Modern Web Vulnerabilities - Tapan BK"
alt="Content Security Policy (CSP) in inline styles and scripts - Tapan BK">
<section>

<p>
    Content Security Policy (CSP) is an essential security feature that protects websites from cross-site scripting (XSS) and other injection attacks by specifying which sources of content are trusted. By focusing on scripts and styles, CSP can significantly reduce attack surfaces, ensuring only authorized scripts and styles are executed or rendered. This in-depth guide explores the details and nuances of applying CSP to scripts and styles.
</p>
<p>
    One of the challenges developers face when implementing Content Security Policy (CSP) is managing <strong>inline scripts</strong> 
    (JavaScript embedded directly in HTML) and <strong>inline styles</strong> (CSS written within HTML tags). CSP blocks these by 
    default to protect your website from Cross-Site Scripting (XSS) attacks. However, in some cases, inline code might be necessary, 
    and CSP provides secure mechanisms to handle them effectively.
</p>
</section>

<section>
<h3>1. CSP for Scripts</h3>
<p>
    Scripts are a critical part of web applications but also a common target for XSS attacks.
CSP provides mechanisms to restrict and validate the sources and types of scripts allowed on a webpage.
</p>
</section>

<section>
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

</section>

<section>
<h3>The <code>script-src</code> Directive</h3>
<p>
    The <code>script-src</code> directive controls which script sources are allowed to load. This directive can include:
</p>
<ul>
    <li><strong><code>'self'</code>:</strong> Allows scripts from the same domain as the page.</li>
    <li><strong>Specific URLs:</strong> For example, <code>https://trusted.cdn.com</code>.</li>
    <li><strong>Nonces:</strong> Tokens generated dynamically and added to inline scripts.</li>
    <li><strong>Hashes:</strong> Cryptographic hashes of script content.</li>
    <li><strong>Keywords:</strong> Such as <code>'unsafe-inline'</code> (not recommended) or <code>'unsafe-eval'</code> (should be avoided).</li>
</ul>
<p>
    Example policy:
</p>
<pre><code>
Content-Security-Policy: script-src 'self' https://trusted.cdn.com;
</code></pre>

</section>


<section>

<h3>Handling Inline Scripts with Nonces</h3>
<p>
Inline scripts are inherently risky but can be securely allowed using nonces.
A nonce (short for "number used once") is a unique, randomly generated token that allows specific inline scripts to run.
Her. For example:
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


</section>


<section>
<p>
Nonces must be regenerated for each request, ensuring that they cannot be reused in replay attacks.
The browser checks that the nonce in the script tag matches the one in the CSP header. If they match, the script executes; otherwise, it is blocked.
</p>
</section>

<section>
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
&lt;/style&gt;
</code>
</pre>
        </li>
</ol>
</section>



<section>
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
    <p>
        Inline scripts and styles are convenient but introduce security risks, making them a prime target for cross-site scripting (XSS) attacks. To mitigate these risks, adopting best practices when working with inline content is essential. Here’s a detailed guide to managing inline content securely:
    </p>
    <ul>
        <li>
            <strong>Avoid Inline Scripts and Styles:</strong>
            <p>
                Inline scripts and styles are inherently risky because they bypass traditional CSP protections unless explicitly allowed. Whenever possible:
            </p>
            <ul>
                <li>Move JavaScript code to external files and reference them via a <code>script</code> tag with a trusted <code>src</code> attribute.</li>
                <li>Define CSS in external stylesheets or using <code>link</code> tags pointing to trusted sources.</li>
            </ul>
            <p>
                This approach not only enhances security but also improves maintainability by separating content from logic and design.
            </p>
        </li>
        <li>
            <strong>Use Nonces for Dynamic Content:</strong>
            <p>
                If inline content is unavoidable (e.g., dynamically injected JavaScript or CSS), use nonces to secure it. Nonces are unique, randomly generated tokens added to the CSP header and inline tags:
            </p>
 <pre><code>Content-Security-Policy: script-src 'self' 'nonce-xyz123';</code></pre>
            <p>
                Remember to regenerate nonces for every request to prevent reuse in replay attacks.
            </p>
        </li>
        <li>
            <strong>Use Hashes for Static Content:</strong>
            <p>
                For static inline scripts or styles that rarely change, hashes provide a robust alternative to nonces. A hash is a cryptographic representation of the content, ensuring that only the intended script or style is executed. To use hashes:
            </p>
            <ol>
                <li>Calculate the hash of the inline content using a secure algorithm like SHA-256:</li>
                <pre><code>
echo -n "console.log('This is a static inline script.');" | openssl dgst -sha256 -binary | openssl base64
</code></pre>
<li>Include the hash in your CSP policy:</li>
<pre><code>
Content-Security-Policy: script-src 'self' 'sha256-BASE64_ENCODED_HASH';
</code></pre>
<li>Ensure that any change to the inline content updates the hash in the CSP header.</li>
</ol>
</li>
        <li>
            <strong>Audit Your Inline Content:</strong>
            <p>
                Periodically review all inline scripts and styles in your application to determine:
            </p>
            <ul>
                <li>Are they necessary?</li>
                <li>Do they contain any potentially insecure functionality (e.g., usage of <code>eval()</code> or dynamic code injection)?</li>
                <li>Can they be moved to external files for better control?</li>
            </ul>
            <p>
                Regular audits ensure that your CSP policies remain relevant and effective.
            </p>
        </li>
        <li>
            <strong>Monitor Violations:</strong>
            <p>
                CSP violations occur when scripts or styles are blocked due to policy restrictions. Monitoring these violations helps identify misconfigurations or potential attack attempts. Use the <code>report-uri</code> or <code>report-to</code> directive to collect violation reports:
            </p>
<pre><code>
Content-Security-Policy: script-src 'self'; report-uri /csp-violation-report;
</code></pre>

<p>
Example violation report endpoint response format:
</p>
<pre><code>
{
"csp-report": {
"document-uri": "https://example.com",
"referrer": "",
"violated-directive": "script-src 'self'",
"blocked-uri": "https://untrusted.example.com",
"original-policy": "script-src 'self';"
}
}
</code></pre>
<p>
Analyze these reports to refine your policies and ensure compliance with your security goals.
</p>
</li>
</ul>
<p>
By following these best practices, you can minimize the risks associated with inline content and leverage CSP to its full potential, protecting your users and application from XSS and other injection-based attacks.
</p>
</section>



<section>
<p>
Want to Explore more on Content security policy - A Shield Against Modern Web Vulnerabilities, Please visit
</p>
<ol>
<li>
<a href="{{site.baseurl}}/content-security-policy-overview">
Content Security Policy  overview</a>
</li>


<li>
<a href="{{site.baseurl}}/content-security-policy-part-using-hash-methods">
Content Security Policy (using Hash methods</a>
</li>

<li>
<a href="{{site.baseurl}}/content-security-policy-in-django-app">
Content Security Policy in Django App</a>
</li>
</ol>
</section>




