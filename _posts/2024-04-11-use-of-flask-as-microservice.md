---
layout: post
section-type: post
title: Building Microservices with Flask
category: Server
tags: [ 'Server',  'Guide']
permalink: building-microservices-with-flask
---

Building Microservices with Flask - Tapan BK

<!--more-->


<img
src="{{site.baseurl}}/img/posts/introduction-to-microservices.png"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Comprehensive Guide on Microservices - Tapan BK"
alt="Comprehensive Guide on Microservices- Tapan BK">


<section>
<p>This is the part 2 of 2 of the microservices. If you are interested about basic of the microservices, please visit
<a href="{{site.baseurl}}/comprehensive-guide-on-microservices">Comprehensive Guide on Microservices</a>
</p>
</section>
<section>
<h3>What is Flask?</h3>
<p>
Flask is a lightweight and flexible web framework for Python, designed to make it easy to build web applications and
APIs. It is classified as a micro-framework because it does not require any particular tools or libraries and has no
dependencies on external libraries other than the Python standard library.
</p>

<p>
Flask is known for its simplicity, flexibility, and minimalistic design, making it an ideal choice for building small to
medium-sized web applications, APIs, and microservices. It provides developers with the freedom to choose their
preferred tools and libraries, allowing for a highly customizable and tailored development experience. Overall, Flask is
a popular choice among Python developers for its ease of use and versatility in building web applications.
</p>
</section>

<section>

<p>Flask provides developers with the essential tools and features needed to create web applications, including:</p>


<h4>Routing: </h4>
<p>
Flask allows developers to define routes that map URL patterns to Python functions. This enables handling of
HTTP requests and defining how the application responds to different URLs.
</p>

<h4>HTTP Request Handling: </h4>
<p>
Flask provides request and response objects, allowing developers to access data from incoming
HTTP requests and generate appropriate responses.
</p>

<h4>Template Rendering: </h4>
<p>
Flask supports Jinja2 templating engine, which enables developers to create HTML templates with
dynamic content by embedding Python code.

</p>

<h4>HTTP Methods Handling: </h4>
<p>
Flask supports various HTTP methods such as GET, POST, PUT, DELETE, etc., allowing developers to
define handlers for different types of requests.
</p>

<h4>Session Management: </h4>
<p>
Flask includes built-in support for managing user sessions and cookies, making it easy to implement
user authentication and session-based features.
</p>

<h4>Extension Ecosystem: </h4>
<p>
Flask has a rich ecosystem of extensions that provide additional functionality and integrations
with third-party services. These extensions cover areas such as authentication, database integration, form validation,
and more.

</p>

<h4>Development Server: </h4>
<p>
Flask includes a built-in development server that makes it easy to run and test applications locally
during the development process.
</p>
</section>


<section>
<h3>Steps to build the Microservices using Flask</h3>

</section>

<section>
<h4>Step 1: Install Python</h4>
<ul>
<ul>
  <li>Visit the official Python website at <a href="https://www.python.org/">https://www.python.org/</a>.</li>
  <li>Navigate to the Downloads section and choose the appropriate installer for your operating system (Windows, macOS, or Linux).</li>
  <li>Download the latest version of Python, which should be prominently displayed on the website.</li>
  <li>Run the installer and follow the on-screen instructions to install Python on your system.</li>
  <li>During the installation process, make sure to check the box that says "Add Python to PATH" to ensure Python is added to your system's PATH environment variable.</li>
</ul>
</ul>
</section>

<section>
<h4>Step 2: verify Python Installation </h4>
<ul>
  <li>Once Python is installed, open a terminal or command prompt on your system.</li>
  <li>Type <code>python --version</code> and press Enter to verify that Python is installed correctly.
You should see the version number of the installed Python interpreter.</li>
</ul>
</section>

<section>
<h4>Step 4: Flask Installation</h4>
<ul>
  <li>With Python installed, you can now install Flask using Python's package manager, pip.</li>
  <li>Open a terminal or command prompt on your system.</li>
  <li>Type <code>pip install Flask</code> and press Enter to install Flask. 
This command will download and install Flask and its dependencies from the Python Package Index (PyPI).</li>
  <li>Wait for the installation to complete. Once finished, Flask should be installed on your system.</li>
</ul>
</section>

<section>
<h4>Verify Flask Installation:</h4>

<ul>
  <li>To verify that Flask is installed correctly, you can create a simple Flask application and run it.</li>
  <li>Create a new Python file (e.g., <code>app.py</code>) and open it in a text editor.</li>
  <li>Copy the following code into the <code>app.py</code> file:</li>
  <pre>
    <code>
    from flask import Flask
    app = Flask(__name__)
    
    @app.route('/')
    def hello():
        return 'Hello, Flask!'
    
    if __name__ == '__main__':
        app.run(debug=True)
</code></pre>
  <li>Save the file and close the text editor.</li>
  <li>Open a terminal or command prompt and navigate to the directory where the <code>app.py</code> file is located.</li>
  <li>Type <code>python app.py</code> and press Enter to run the Flask application.</li>
  <li>Open a web browser and visit <a href="http://127.0.0.1:5000/">http://127.0.0.1:5000/</a> (or <a href="http://localhost:5000/">http://localhost:5000/</a>) to see the message "Hello, Flask!" displayed, indicating that Flask is installed and running correctly.</li>
</ul>
</section>

<section>
<h3>Splitting the Application into Microservices</h3>
<p>Now that we have a basic Flask application, let's split it into microservices. We will create two microservices: 
one for handling user authentication and another for managing product data.</p>
</section>
<section>
<h4>Step 1: User Authentication Microservice</h4>


<h4>Create <code>auth_service.py</code> File:</h4>
<p>Begin by creating a new Python file named <code>auth_service.py</code>.</p>

<h4>Import Necessary Modules:</h4>
<p>Import the required modules, including Flask for creating the web application and any other libraries needed for database interactions and validation.</p>

<h4>Set Up Flask Application:</h4>
<p>Initialize a Flask application instance.</p>

<h4>Define Route for User Registration:</h4>
<p>Create a route using Flask's <code>@app.route()</code> decorator to handle user registration requests.</p>

<h4>Implement Registration Function:</h4>
<p>Write a function that accepts user data from the request and stores it in the database. This function will handle the user registration process.</p>

<h4>Add Error Handling and Validation:</h4>
<p>Implement appropriate error handling and validation logic to ensure that user data is processed correctly. 
This may include checking for missing fields, validating email addresses, and handling database errors.</p>
</section>

<section>
<p>Here's a Python code template to illustrate these steps:</p>

<pre><code>
from flask import Flask, request, jsonify

app = Flask(__name__)

# Route for user registration
@app.route('/register', methods=['POST'])
def register_user():
    # Get user data from request
    user_data = request.json
    
    # Validate user data (e.g., check for required fields)
    if 'username' not in user_data or 'email' not in user_data or 'password' not in user_data:
        return jsonify({'error': 'Missing required fields'}), 400
    
    # Add additional validation logic as needed
    
    # Store user data in the database (placeholder)
    # Replace this with actual database integration code
    # Example: db.insert(user_data)
    
    return jsonify({'message': 'User registered successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)

</code></pre>

</section>

<section>
<p>User
In this code: We define a route /register using the @app.route() decorator to handle POST requests for user registration.</p>

<ul>
  <li>We define a route <code>/register</code> using the <code>@app.route()</code> decorator to handle POST requests for user registration.</li>
  <li>The <code>register_user()</code> function extracts user data from the request, validates it, and stores it in the database (placeholder code).</li>
  <li>Error handling is implemented to handle missing fields in the user data.</li>
  <li>Finally, we run the Flask application if the script is executed directly.</li>
</ul>
</section>



<section>
<h3>Steps to create a product management Microservice</h3>
<p>This service is used to create, read, update and delete product</p>
<h4>Create <code>product_service.py</code> File:</h4>
<p>Start by creating another Python file named <code>product_service.py</code>.</p>

<h4>Set Up Flask Application:</h4>
<p>Initialize a Flask application instance within <code>product_service.py</code>.</p>

<h4>Define Routes:</h4>
<p>Define routes for creating, reading, updating, and deleting product data using Flask's <code>@app.route()</code> decorator.</p>

<h4>Implement Functions:</h4>
<p>Implement corresponding functions to handle each operation, such as creating a product, retrieving product data, updating product information, and deleting a product.</p>
</section>

<section>
<pre>
<code>
from flask import Flask, request, jsonify
app = Flask(__name__)

# Dummy data as placeholder for database
products = [
{"id": 1, "name": "Product A", "price": 10.99, "quantity": 100},
{"id": 2, "name": "Product B", "price": 20.49, "quantity": 50}
]
next_id = 3  # ID for the next product to be added

# Create a new product
@app.route('/products', methods=['POST'])
def create_product():
    global next_id
    data = request.json
    new_product = {
    "id": next_id,
    "name": data["name"],
    "price": data["price"],
    "quantity": data["quantity"]
    }
    products.append(new_product)
    next_id += 1
    return jsonify({"message": "Product created successfully", "product": new_product}), 201


# Retrieve all products
@app.route('/products', methods=['GET'])
def get_all_products():
    return jsonify({"products": products})


# Retrieve a single product by ID
@app.route('/products/&lt;int:product_id>', methods=['GET'])
def get_product(product_id):
    product = next((p for p in products if p["id"] == product_id), None)
    if product:
        return jsonify(product)
    else:
        return jsonify({"message": "Product not found"}), 404


# Update a product by ID
@app.route('/products/&lt;int:product_id>', methods=['PUT'])
def update_product(product_id):
    data = request.json
    product = next((p for p in products if p["id"] == product_id), None)
    if product:
        product.update(data)
        return jsonify({"message": "Product updated successfully", "product": product})
    else:
        return jsonify({"message": "Product not found"}) , 404


# Delete a product by ID
@app.route('/products/&lt;int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    global products
    products = [p for p in products if p["id"] != product_id]
    return jsonify({"message": "Product deleted successfully"}), 200


if __name__ == '__main__':
    app.run(debug=True)
</code>
</pre>
<p>In this code:</p>
<ul>
  <li>The microservice defines routes for creating, retrieving, updating, and deleting products.</li>
  <li>Dummy data (<code>products</code>) is used as a placeholder for a database.</li>
  <li>Each product has an ID, name, price, and quantity.</li>
  <li>The <code>next_id</code> variable is used to assign IDs to new products.</li>
  <li>The microservice runs on Flask's built-in development server when executed directly.</li>
</ul>

</section>


<section>

<h3>Communicating Between Microservices using requests</h3>

<p>
When communicating between microservices using Python, the requests library is commonly used for making HTTP requests.
Here's an example of how you can use requests to communicate between microservices: </p>
<p>
Let's say you have two microservices, Service A and Service B, and you want Service A to make a GET request to Service B:</p>

</section>
<section>

<p>Service A code (service_a.py):</p>

<pre>
<code>
import requests

def communicate_with_service_b():
    url = 'http://service-b-hostname:service-b-port/endpoint'  # Replace with actual URL
    response = requests.get(url)
    
    if response.status_code == 200:
        print('Response from Service B:', response.json())
    else:
        print('Error:', response.status_code)

if __name__ == '__main__':
    communicate_with_service_b()

</code>
</pre>
</section>


<section>
<p>Service B code (service_b.py):</p>

<pre>
<code>
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/endpoint', methods=['GET'])
def get_data():
    data = {'message': 'Hello from Service B!'}
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)

</code>
</pre>
</section>

<section>

<ul>
    <li>Service A makes a GET request to the /endpoint endpoint of Service B using requests.get.</li>
    <li>Service B responds with JSON data.</li>
    <li>Service A receives the response and processes it.</li>
</ul>

<p>
Make sure to replace 'http://service-b-hostname:service-b-port/endpoint' with the actual URL of Service B. Also, ensure that both services are running and accessible to each other.
</p>
<p>
This example demonstrates a basic request-response communication pattern between microservices using the requests
library in Python. You can expand upon this pattern to include handling different HTTP methods, passing data in
requests, and handling responses more effectively based on your specific use case.
</p>
</section>

<section>
<p>This is the end of 2 of 2 of the microservices. If you are interested about basic of the microservices, please visit
<a href="{{site.baseurl}}/comprehensive-guide-on-microservices">Comprehensive Guide on Microservices</a> which is part 1 of 2 on
microservices
</p>
</section>
<style>

    ol li, ul li{
    margin-bottom:30px
    }
</style>