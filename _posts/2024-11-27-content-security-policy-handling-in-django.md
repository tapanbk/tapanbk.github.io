---
layout: post
section-type: post
title: Content Security Policy (CSP) in Django App
category: Programming
tags: [ 'Programming', 'Security', 'Django', 'Backend' ]
permalink: content-security-policy-in-django-app
---

Content Security Policy (CSP) in Django - A Shield Against Modern Web Vulnerabilities - Tapan BK

<!--more-->

<img
src="{{site.baseurl}}/img/posts/content-security-policy-for-static-files.png"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Content Security Policy (CSP) in Django - A Shield Against Modern Web Vulnerabilities - Tapan BK"
alt="Content Security Policy (CSP) in Django - A Shield Against Modern Web Vulnerabilities - Tapan BK">

<section>
    <p>
        A <strong>Content Security Policy (CSP)</strong> is an effective security measure that helps protect Django applications from 
        Cross-Site Scripting (XSS) attacks and other code injection threats. By defining CSP rules, you control how and where your 
        application’s resources are loaded or executed.
    </p>
    <h4>Why Use CSP in Django?</h4>
    <p>
        Django applications often involve user-generated content or depend on external scripts and libraries, making them potential targets 
        for XSS attacks. With CSP, you can:
    </p>
    <ul>
        <li>Restrict the sources of scripts, styles, and other resources.</li>
        <li>Block unauthorized inline scripts or styles.</li>
        <li>Disable dangerous functionalities like <code>eval()</code>.</li>
    </ul>
</section>
<section>
    <h3>Setting Up CSP in Django</h3>
    <p>
        Django does not include native CSP support, but you can implement CSP policies using middleware or third-party packages.
    </p>
    <h3>Using Django-CSP Package</h3>
    <p>
        <a href="https://django-csp.readthedocs.io/">Django-CSP</a> is a popular package that integrates CSP into your Django project. 
        Follow these steps:
    </p>
    <ol>
        <li>
            <strong>Install the package:</strong>
            <pre><code>pip install django-csp</code></pre>
        </li>
        <li>
            <strong>Add Middleware:</strong> Include <code>django_csp.middleware.CSPMiddleware</code> in your <code>MIDDLEWARE</code> setting.
            <pre><code>
MIDDLEWARE = [
'django.middleware.security.SecurityMiddleware',
'csp.middleware.CSPMiddleware',
# other middleware
]
</code></pre>
</li>
<li>
<strong>Define CSP Policies:</strong> Set CSP directives in your <code>settings.py</code>.
<pre><code>
# These are just the examples
CSP_DEFAULT_SRC="'self'"
CSP_SCRIPT_SRC="'self','strict-dynamic','unsafe-inline',unpkg.com,npmcdn.com,ajax.googleapis.com,cdnjs.cloudflare.com"
CSP_SCRIPT_SRC_ELEM="'self',unpkg.com,npmcdn.com,ajax.googleapis.com,cdnjs.cloudflare.com"
CSP_STYLE_SRC="'self',cdnjs.cloudflare.com"
CSP_STYLE_SRC_ELEM="'self',cdnjs.cloudflare.com"
CSP_FONT_SRC="'self',fonts.googleapis.com"
CSP_IMG_SRC="'self',data:"
CSP_FRAME_SRC="'self'"
CSP_BASE_URI="'self'"
CSP_REQUIRE_TRUSTED_TYPES_FOR=""
</code></pre>
</li>
</ol>
    <h3>Using Custom Middleware</h3>
    <p>
        If you prefer not to use a third-party package, you can implement CSP using custom middleware.
    </p>
    <ol>
        <li>
            <strong>Create Middleware:</strong>
<pre><code>
class ContentSecurityPolicyMiddleware:
        def process_request(self, request):
            if not hasattr(request, 'csp_nonce'):
                request.csp_nonce = uuid.uuid4().hex
        
        def process_response(self, request, response):
            nonce = getattr(request, 'csp_nonce', None)
            if nonce:
                csp_directives = {
                    'default-src': settings.CSP_DEFAULT_SRC,
                    'script-src': settings.CSP_SCRIPT_SRC,
                    'script-src-elem': settings.CSP_SCRIPT_SRC_ELEM,
                    'style-src': settings.CSP_STYLE_SRC,
                    'style-src-elem': settings.CSP_STYLE_SRC_ELEM,
                    'font-src': settings.CSP_FONT_SRC,
                    'img-src': settings.CSP_IMG_SRC,
                    'frame-src': settings.CSP_FRAME_SRC,
                    'base-uri': settings.CSP_BASE_URI,
                    'require-trusted-types-for': settings.CSP_REQUIRE_TRUSTED_TYPES_FOR,
                }
                for directive in ['script-src', 'script-src-elem',  'style-src', 'style-src-elem']:
                    if csp_directives.get(directive):
                        csp_directives[directive] = list(csp_directives[directive]) + [f"'nonce-{nonce}'"]
        
                csp_header = '; '.join(
                    f"{directive} {' '.join(sources)}" for directive, sources in csp_directives.items() if sources)
                response['Content-Security-Policy'] = csp_header
            return response
 </code></pre>
        </li>
        <li>
<strong>Add Middleware:</strong> Include it in your <code>settings.py</code>.
    
<pre><code>
MIDDLEWARE = [
'django.middleware.security.SecurityMiddleware',
'yourapp.csp_middleware.ContentSecurityPolicyMiddleware',
# other middleware
]
</code></pre>
</li>
</ol>
</section>

<section>
    <h4>Handling Inline Scripts and Styles using nonce from middleware</h4>
    <p>
        CSP blocks inline scripts and styles by default. Use <strong>nonces</strong> or <strong>hashes</strong> to allow specific inline content.
The nonce are generated from above middleware and used in every templates files by <code>`request.csp_nonce`</code>
    </p>
<strong>Use Nonce in Templates:</strong> Add the nonce to your inline scripts and styles.
<pre><code>
&lt;script nonce=&quot;&#123;&#123; request.csp_nonce &#125;&#125;&quot;&gt;
console.log(&#39;This script is allowed by CSP.&#39;);
&lt;/script&gt;
</code></pre>
</section>

<section>
    <h4>Handling Inline Scripts and Styles by adding nonce value in response</h4>
    <ol>
        <li>
            <strong>Generate a Nonce:</strong> Create a unique token for every page load.
<pre><code>
from django.utils.crypto import get_random_string
def add_nonce_to_context(request):
    nonce = get_random_string(16)
    request.csp_nonce = nonce
    return nonce
</code></pre>

</li>
<li>
<strong>Set CSP Header with Nonce for response of the request:</strong>
<pre><code>
response["Content-Security-Policy"] = f"script-src 'self' 'nonce-{nonce}';"
</code></pre>
</li>
<li>
<strong>And finally use Nonce in Templates</strong>
<pre><code>
&lt;script nonce=&quot;&#123;&#123; request.csp_nonce &#125;&#125;&quot;&gt;
console.log(&#39;This script is allowed by CSP.&#39;);
&lt;/script&gt;
</code></pre>
</li>
</ol>
</section>

<section>
    <h3>Using Hashes in CSP (Content Security Policy)</h3>
    <p>
        You can also allow specific inline scripts by calculating and including a hash of their content in the CSP header.
    </p>
    <pre><code>
Content-Security-Policy: script-src 'self' 'sha256-xyz123...';
</code></pre>
    <h4>Reporting CSP Violations</h4>
    <p>
        Enable CSP violation reporting to monitor and fine-tune your policies.
    </p>
    <pre><code>
CSP_REPORT_URI = "https://your-server.com/csp-violation-report"
CSP_REPORT_ONLY = True  # Test policies without enforcing them
</code></pre>
<p>
Create an endpoint to handle violation reports and log them for analysis.
</p>
    <h4>Best Practices</h4>
    <ul>
        <li><strong>Start with Report-Only Mode:</strong> Test your policies without enforcement to identify potential issues.</li>
        <li><strong>Whitelist Trusted Sources:</strong> Allow resources only from domains you trust.</li>
        <li><strong>Audit Regularly:</strong> Review and update your CSP as your application evolves.</li>
    </ul>
    <p>
        Implementing CSP in Django enhances your application's security and provides protection against common vulnerabilities.
    </p>
</section>


<section>
<p>
Want to Explore more on Content security policy - A Shield Against Modern Web Vulnerabilities, Please visit
</p>
        <ol>
                <li>
                <a href="{{site.baseurl}}/content-security-policy-overview">
                Content Security Policy overview</a>
                </li>
                <li>
                <a href="{{site.baseurl}}/content-security-policy-part-in-inline-styles-and-scripts">
                Content Security Policy in inline styles and scripts</a>
                </li>
                <li>
                <a href="{{site.baseurl}}/content-security-policy-part-using-hash-methods">
                Content Security Policy using Hash methods</a>
                </li>
        </ol>
</section>



