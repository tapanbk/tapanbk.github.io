---
layout: post
section-type: post
title: Content Security Policy (CSP) using Hash methods
category: Programming
tags: [ 'Programming', 'Frontend', 'Django', 'Security', 'Backend' ]
permalink: content-security-policy-part-using-hash-methods
---

Content Security Policy (CSP) using hash: A Shield Against Modern Web Vulnerabilities - Tapan BK

<!--more-->

<img
src="{{site.baseurl}}/img/posts/content-security-policy-for-static-files.png"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Extensive guide on django logging - Tapan BK"
alt="Content Security Policy (CSP) - Tapan BK">

<section>
<p>
Content Security Policy (CSP) is an essential security feature that helps protect websites from cross-site
scripting (XSS) attacks and other code injection vulnerabilities. One of the most effective ways to secure inline
scripts is by using hashes in your CSP headers. This method allows you to specify that only trusted inline scripts—those
whose content matches a specific cryptographic hash—are allowed to execute.
</p>
</section>


<section>
<h3>Why Use Hashes in CSP?</h3>
<p>
    Inline scripts are often a target for attackers who inject malicious code, but in some cases, using inline
scripts is unavoidable. While CSP by default blocks inline scripts with the <code>'unsafe-inline'</code> directive,
using hashes allows you to permit specific inline scripts securely. Instead of allowing all inline scripts,
you can define a hash for each script and only those that match the hash will be executed.
</p>

<h4>How Does Hashing Work in CSP?</h4>
<p>
    The basic idea behind using hashes in CSP is simple. Each inline script that you wish to allow must be hashed using
a secure hashing algorithm like SHA-256, SHA-384, or SHA-512. You then specify this hash in the <code>Content-Security-Policy</code> header of your HTTP response.
</p>
<p>
    The browser computes the hash of each inline script and compares it with the hash values specified in the CSP header. If the hashes match, the script is allowed to execute. If they do not match, the browser will block the script, helping to prevent malicious code from running.
</p>
</section>
<section>
    <h3>Steps to Implement Hashes in CSP</h3>
    <p>To implement CSP using hashes, follow these steps:</p>
</section>

<section>
<h3>1. Generate the Hash for Your Inline Script</h3>
<p>
    The first step is to generate a cryptographic hash of the inline script. You can use algorithms like SHA-256,
SHA-384, or SHA-512, but SHA-256 is the most commonly used. This can be done with various tools or directly in
your development environment. For example, in a command-line interface, you can use <code>openssl</code> to generate a hash for the inline script content.
    </p>
    <pre><code>
echo -n "console.log('This is a trusted inline script.');" | openssl dgst -sha256 -binary | openssl base64
</code></pre>
<p>
This command will output a base64-encoded hash that you can use in your CSP header. An example of an output might be:
</p>
<pre><code>
sha256-EXAMPLE_HASH_VALUE==
</code></pre>
</section>

<section>
    <h3>2. Add the Hash to Your CSP Header</h3>
    <p>
        Once you have the hash, you need to add it to your CSP header. In your <code>Content-Security-Policy</code> header, use the <code>sha256-</code> prefix followed by the hash value you just generated. For example:
    </p>
    <pre><code>
Content-Security-Policy: script-src 'self' 'sha256-EXAMPLE_HASH_VALUE==';
</code></pre>
<p>
This directive tells the browser to allow only those inline scripts that match the specified hash. Any script with a different hash will be blocked.
</p>
</section>

<section>
<h3>3. Integrating the Hash in Your Django Application</h3>
<p>
    To dynamically generate the hash for inline scripts in a Django application, you can use Python's <code>hashlib</code> library to compute the hash of the script content and then inject it into your CSP header. Here’s an example of how to do that:
</p>
<pre><code>
    import hashlib
    import base64

    # Define your inline script
    script = "console.log('This is a trusted inline script.');"
    
    # Generate the SHA-256 hash
    hash_value = base64.b64encode(hashlib.sha256(script.encode()).digest()).decode()
    
    # Add the hash to the CSP header
    response["Content-Security-Policy"] = f"script-src 'self' 'sha256-{hash_value}';"

</code>
</pre>
<p>This code calculates the hash for the inline script and then adds it to the response's CSP header, ensuring only trusted inline scripts are allowed.</p>
</section>


<section>
<h3>4. Handling Multiple Inline Scripts</h3>
<p>
    If you have multiple inline scripts that need to be allowed, you can generate and add hashes for each of them to the <code>script-src</code> directive. For example:
</p>
<pre><code>
Content-Security-Policy: script-src 'self' 'sha256-HASH1==' 'sha256-HASH2==' 'sha256-HASH3==';
</code></pre>
<p>
Each hash corresponds to a different inline script. The browser will compare each script's hash with the values in the
CSP header, allowing only those that match to execute.
</p>
</section>


<section>
<h3>Advantages of Using Hashes</h3>
<ul>
    <li><strong>Stronger Security:</strong> Hashing provides a strong level of security by ensuring only exact matches are allowed to run, blocking any injected or altered scripts.</li>
    <li><strong>No Need for Nonces:</strong> Unlike nonces, which are dynamic and change with every page load, hashes are static and remain the same until you modify the script content.</li>
    <li><strong>Control over Inline Scripts:</strong> Hashing allows you to maintain control over inline scripts while still preventing unauthorized scripts from running.</li>
</ul>

<h3>Limitations of Using Hashes</h4>
<ul>
    <li><strong>Maintenance:</strong> Whenever you modify an inline script, you must regenerate the hash and update the CSP header, which could become tedious if you have many inline scripts.</li>
    <li><strong>Only for Inline Scripts:</strong> Hashing applies only to inline scripts. External resources still need to be handled by defining trusted domains or URLs in the CSP policy.</li>
</ul>

</section>

<section>
    <h3>Best Practices for Maintaining Hashes in CSP</h3>
    <p>
        While implementing CSP with hashes is a robust security measure, it requires careful planning and maintenance to be effective and manageable. Here are detailed best practices to help you maintain and optimize your CSP policy when using hashes:
    </p>
    <h4>1. Automate Hash Generation</h4>
    <p>
        Manually generating and updating hashes can be time-consuming and error-prone, especially in larger projects. To streamline the process, integrate hash generation into your build pipeline using tools or scripts. For example:
    </p>
    <ul>
        <li>
            Use Node.js or Python scripts to automatically hash your inline scripts and styles during the build process.
        </li>
        <li>
            If you use webpack, there are plugins available that can assist in CSP management, including hash generation.
        </li>
    </ul>
    <p>
        By automating this step, you can ensure consistency and reduce the risk of forgetting to update a hash when the corresponding script changes.
    </p>
    <h4>2. Group Static and Dynamic Content</h4>
    <p>
        Separate your inline scripts into two categories: static (unchanging) and dynamic (frequently modified or generated at runtime). Use hashes for static scripts and consider using nonces for dynamic scripts to avoid frequent updates to CSP headers.
    </p>
    <h4>3. Minimize Inline Scripts</h4>
    <p>
        Wherever possible, move scripts to external files and reference them using <code>'self'</code> or trusted domains in the <code>script-src</code> directive. This approach simplifies your CSP management and reduces the need for hashes altogether. Inline scripts should be a last resort when externalizing scripts is not feasible.
    </p>
    <h4>4. Use Strong Hashing Algorithms</h4>
    <p>
        Always use strong cryptographic algorithms such as <code>SHA-256</code>, <code>SHA-384</code>, or <code>SHA-512</code>. Avoid using outdated or weaker algorithms, as they may not provide sufficient security and could eventually be deprecated by browsers.
    </p>
    <h4>5. Test CSP Policies Regularly</h4>
    <p>
        Use browser developer tools to test your CSP policies and ensure they are working as intended. Look for blocked scripts in the browser console and verify that only authorized scripts are executed. Regular testing helps identify any misconfigurations or missing hashes early.
    </p>
    <h4>6. Monitor and Audit CSP Reports</h4>
    <p>
        Enable CSP reporting by adding a <code>report-uri</code> or <code>report-to</code> directive to your CSP header. This allows browsers to send violation reports to a specified endpoint whenever a script is blocked. Review these reports to identify and address potential issues with your CSP policy.
    </p>
    <pre><code>
Content-Security-Policy: script-src 'self' 'sha256-HASH_VALUE'; report-uri /csp-violation-report-endpoint;
</code></pre>
    <h4>7. Regularly Update CSP Headers</h4>
    <p>
        Whenever an inline script changes, you must update its hash in the CSP header. Maintain a process to update CSP headers during deployments to ensure they stay synchronized with your scripts.
    </p>
    <h4>8. Educate Your Team</h4>
    <p>
        Ensure all developers understand how CSP with hashes works and the importance of maintaining the policy. Provide training or documentation for team members to follow best practices and avoid introducing new inline scripts without corresponding hash updates.
    </p>
    <h4>9. Start with a Report-Only Mode</h4>
    <p>
        When first implementing or updating your CSP, use the <code>Content-Security-Policy-Report-Only</code> header. This allows you to test your policy without actually blocking scripts, helping you fine-tune it before enforcing it fully.
    </p>
    <h4>10. Keep CSP Policies Versioned</h4>
    <p>
        Store your CSP policies in version control alongside your codebase. This practice ensures that any updates to inline scripts or CSP policies are tracked and can be rolled back if needed.
    </p>
    <h4>11. Minimize Complexity</h4>
    <p>
        Avoid overly complex CSP policies by keeping the number of hashes in your header manageable. Group related scripts together and simplify your policies where possible to reduce the risk of errors or omissions.
    </p>
    <h4>12. Use Trusted External Resources</h4>
    <p>
        If you rely on external scripts, ensure they come from trusted sources and add those domains to your <code>script-src</code> directive. For example:
    </p>
    <pre><code>
Content-Security-Policy: script-src 'self' https://trusted.cdn.com 'sha256-HASH_VALUE';
</code></pre>
<p>
This approach allows you to combine hashes for inline scripts with source-based whitelisting for external resources.
</p>
    <h4>13. Plan for Future Script Changes</h4>
    <p>
        When developing new features, consider the impact on your CSP policy. For example, if you know a script will require frequent updates, plan to use nonces instead of hashes for flexibility.
    </p>
</section>


<section>
<h3>Conclusion</h3>
<p>
    Using hashes in your Content Security Policy (CSP) is an effective way to allow trusted inline scripts while
preventing the execution of unauthorized scripts. By leveraging cryptographic hashes, you can ensure that only
scripts with the exact content you’ve authorized are executed, significantly improving your website’s security. However, remember to maintain the hashes carefully and update them whenever inline scripts change to keep your CSP working smoothly.
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
<a href="{{site.baseurl}}/content-security-policy-part-in-inline-styles-and-scripts">
Content Security Policy in inline styles and scripts</a>
</li>

<li>
<a href="{{site.baseurl}}/content-security-policy-in-django-app">
Content Security Policy in Django App</a>
</li>
</ol>

</section>

