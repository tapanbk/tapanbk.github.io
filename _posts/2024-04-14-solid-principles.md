---
layout: post
section-type: post
title: Extensive guide on Solid principle in software development with examples
category: Programming
tags: [ 'Architecture', 'Programming', 'Software' ]
permalink: extensive-guide-on-solid-principles-in-software-development-with-example
---

Extensive guide on Solid principle in software development with examples - Tapan BK

<!--more-->

<img
src="{{site.baseurl}}/img/posts/solid-principle-in-software-development.png"
class="img-thumbnail img-rounded" height="400px" width="100%"
title="Extensive guide on Solid principle in software development with examples- Tapan BK"
alt="Extensive guide on Solid principle in software development with examples - Tapan BK">


<section>
<h3>What are SOLID Design Principles?</h3>
<p>
SOLID principles are a set of five design principles intended to make software designs more understandable, flexible,
and maintainable. They were introduced by Robert C. Martin, also known as Uncle Bob, in the early 2000s.
They were introduced in his 2000 paper “Design Principles and Design Patterns” to help developers
write software that is easy to understand, modify, and extend.
</p>


<p>
The SOLID principles offer developers a framework for organizing their code, resulting in software that is both flexible
and easy to modify and test. By following these principles, developers can create code that is modular, maintainable,
and scalable, fostering effective collaboration within development teams.
They exist as a universal law between developers which they should apply to all their work.
</p>


</section>

<section>
<p>The SOLID principles are as follows:</p>

<ul>
  <li><span class="important">S</span>ingle Responsibility Principle</li>
  <li> <span class="important">O</span>pen-Closed Principle</li>
  <li> <span class="important">L</span>iskov Substitution Principle</li>
  <li> <span class="important">I</span>nterface Segregation Principle</li>
  <li> <span class="important">D</span>ependency Inversion Principle</li>
</ul>
</section>


<section>Let's discuss on more each in depth: </section>
<section>

<h3>Single Responsibility Principle (SRP):</h3>
<p>
The Single Responsibility Principle (SRP) emphasizes that a class should have only one reason to change. In other words,
it should have only one responsibility or concern. This principle encourages developers to design classes that are
focused and cohesive, with each class responsible for a specific piece of functionality. By adhering to SRP, classes
become more maintainable, as changes to one aspect of the system are less likely to affect other unrelated aspects.

</p>

<p>Suppose we have a class called EmailService that is responsible for sending emails. Initially, this class might handle
both the composition of the email message and the actual sending of the email:</p>


<pre>
<code>
class EmailComposer:
    @staticmethod
    def compose_email(recipient, subject, body):
        message = f"To: {recipient}\n"
        message += f"Subject: {subject}\n\n"
        message += body
        return message

class EmailSender:
    @staticmethod
    def send_email(message):
        # Code to send the email
        # (Assume some implementation details here)
        print("Sending email:\n", message)

class EmailService:
    def __init__(self):
        self.email_composer = EmailComposer()
        self.email_sender = EmailSender()

    def send_email(self, recipient, subject, body):
        message = self.email_composer.compose_email(recipient, subject, body)
        self.email_sender.send_email(message)

# Example usage
email_service = EmailService()
email_service.send_email("example@example.com", "Hello", "This is a test email.")

</code>
</pre>
</section>

<p>In this example:</p>
<ul>
  <li><strong>EmailComposer</strong> class is responsible for composing the email message.</li>
  <li><strong>EmailSender</strong> class is responsible for sending the email.</li>
  <li><strong>EmailService</strong> class coordinates the process by using instances of <strong>EmailComposer</strong> and <strong>EmailSender</strong>.</li>
</ul>

<p>
Each class has a single responsibility: composing emails, sending emails, and orchestrating the process, respectively.
This adheres to the Single Responsibility Principle, making the code easier to maintain and understand.
</p>
<section>

</section>

<h3>Open/Closed Principle (OCP): </h3>

<p>
The Open/Closed Principle (OCP) advocates for software entities to be open for extension but closed for modification.
This means that once a module, class, or function is written and tested, it should not be modified to add new
functionality. Instead, new functionality should be added by extending the existing code through inheritance,
composition, or other mechanisms. By following OCP, developers can create systems that are resilient to changes and
easier to maintain.
</p>

<section>

<p>
Suppose we have a class hierarchy representing different shapes, and we want to calculate the area of each shape. We'll
demonstrate how to design this system following the OCP:
</p>

<pre>
<code>
from abc import ABC, abstractmethod

# Abstract base class for shapes
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# Concrete implementations of shapes
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

# A class responsible for calculating the total area of shapes
class AreaCalculator:
    @staticmethod
    def calculate_total_area(shapes):
        total_area = 0
        for shape in shapes:
            total_area += shape.area()
        return total_area

# Example usage
shapes = [Rectangle(5, 4), Circle(3)]
total_area = AreaCalculator.calculate_total_area(shapes)
print("Total area:", total_area)

</code>
</pre>

</section>
<section>

<p>In this example:
</p>

<ul>
  <li>We define an abstract base class <strong>Shape</strong> with an abstract method <strong>area()</strong>. This class represents the common interface for all shapes.</li>
  <li>Concrete shape classes <strong>Rectangle</strong> and <strong>Circle</strong> inherit from <strong>Shape</strong> and provide their implementations of the <strong>area()</strong> method.</li>
  <li>We have a separate class <strong>AreaCalculator</strong> responsible for calculating the total area of a list of shapes. This class is open for extension because we can add new shapes without modifying its code (open for extension), but its existing code is closed for modification (closed for modification).</li>
</ul>

<p>
By adhering to the OCP, we can easily add new shapes to our system without altering existing code in the AreaCalculator
class. This design promotes code reuse, maintainability, and scalability.
</p>

</section>
<section>
<h3>Liskov Substitution Principle (LSP):</h3>

<p>
The Liskov Substitution Principle (LSP) states that objects of a superclass should be substitutable with objects of its
subclasses without altering the correctness of the program. In other words, a subclass should behave in such a way that
it can be used interchangeably with its superclass without causing unexpected behavior. This principle ensures that
inheritance hierarchies are well-designed and that subclasses adhere to the contracts defined by their superclasses,
promoting polymorphism and code reuse.
</p>
</section>

<section>
<p>Suppose we have a class hierarchy representing different types of birds. We'll demonstrate how to design this system following LSP:</p>

<pre>
<code>
class Bird:
    def fly(self):
        pass

class Sparrow(Bird):
    def fly(self):
        print("Sparrow flying")

class Ostrich(Bird):
    def fly(self):
        # Ostriches cannot fly, so this method should not be implemented for them
        raise NotImplementedError("Ostrich cannot fly")

# Function to perform flying action for any bird
def perform_fly(bird):
    bird.fly()

# Example usage
sparrow = Sparrow()
ostrich = Ostrich()

perform_fly(sparrow)  # Output: Sparrow flying
perform_fly(ostrich)  # Raises NotImplementedError: Ostrich cannot fly
</code>
</pre>

</section>


<section>

<p>In this example:</p>

<ul>
  <li>We have a superclass <strong>Bird</strong> with a method <strong>fly()</strong> that represents the flying behavior common to all birds.</li>
  <li>Subclasses <strong>Sparrow</strong> and <strong>Ostrich</strong> inherit from <strong>Bird</strong> and provide their specific implementations of the <strong>fly()</strong> method.</li>
  <li>The <strong>perform_fly()</strong> function demonstrates the Liskov Substitution Principle by accepting any object of type <strong>Bird</strong> and calling its <strong>fly()</strong> method without knowing the specific subclass.</li>
</ul>
</section>



<section>
<h3>Interface Segregation Principle (ISP):</h3>
<p>The Interface Segregation Principle (ISP) suggests that clients should not be forced to depend on interfaces they do not
use. Instead of one large interface, it's better to have multiple smaller interfaces that are specific to the needs of
the clients. By adhering to ISP, developers can prevent classes from having unnecessary dependencies, making the system
more modular and easier to maintain. This principle helps in avoiding "fat" interfaces that contain methods irrelevant
to certain clients.</p>
</section>
<section>

<p>Suppose we have a system that manages electronic devices such as printers and scanners. We'll design the system using ISP:</p>

<pre>
<code>
from abc import ABC, abstractmethod

# Define separate interfaces for printer and scanner functionalities
class Printer(ABC):
    @abstractmethod
    def print_document(self, document):
        pass

class Scanner(ABC):
    @abstractmethod
    def scan_document(self):
        pass

# Concrete implementations of printer and scanner
class LaserPrinter(Printer):
    def print_document(self, document):
        print("Printing document using laser printer:", document)

class InkjetPrinter(Printer):
    def print_document(self, document):
        print("Printing document using inkjet printer:", document)

class FlatbedScanner(Scanner):
    def scan_document(self):
        print("Scanning document using flatbed scanner")

class SheetfedScanner(Scanner):
    def scan_document(self):
        print("Scanning document using sheetfed scanner")

# A class representing a multifunction printer that implements both printer and scanner interfaces
class MultifunctionPrinter(Printer, Scanner):
    def print_document(self, document):
        print("Printing document using multifunction printer:", document)

    def scan_document(self):
        print("Scanning document using multifunction printer")

# Example usage
laser_printer = LaserPrinter()
laser_printer.print_document("Example document")

flatbed_scanner = FlatbedScanner()
flatbed_scanner.scan_document()
</code>
</pre>
</section>
<section>
<p>In this example:</p>

<ul>
  <li>We define separate interfaces <strong>Printer</strong> and <strong>Scanner</strong> for printer and scanner functionalities, respectively.</li>
  <li>Concrete implementations <strong>LaserPrinter</strong>, <strong>InkjetPrinter</strong>, <strong>FlatbedScanner</strong>, and <strong>SheetfedScanner</strong> implement their respective interfaces.</li>
  <li>We have a class <strong>MultifunctionPrinter</strong> that implements both the <strong>Printer</strong> and <strong>Scanner</strong> interfaces, demonstrating how a class can implement multiple interfaces as needed.</li>
</ul>

</section>

<section>
<h3>Dependency Inversion Principle (DIP):</h3>

<p>
The Dependency Inversion Principle (DIP) advocates for high-level modules to depend on abstractions rather than concrete
implementations. This principle states that both high-level and low-level modules should depend on abstractions, and
abstractions should not depend on details. By adhering to DIP, developers can create systems that are loosely coupled,
making it easier to replace or modify components without affecting other parts of the system. Dependency injection and
inversion of control are common techniques used to implement DIP.
</p>

</section>


<section>
<p>Suppose we have a high-level module NotificationService that sends notifications to users via email and SMS. We'll
design the system using DIP:</p>

<pre>
<code>

from abc import ABC, abstractmethod

# Define an abstract interface for notification delivery
class NotificationProvider(ABC):
    @abstractmethod
    def send_notification(self, message):
        pass

# Concrete implementations for email and SMS notification providers
class EmailNotificationProvider(NotificationProvider):
    def send_notification(self, message):
        print("Sending email notification:", message)

class SMSNotificationProvider(NotificationProvider):
    def send_notification(self, message):
        print("Sending SMS notification:", message)

# High-level module responsible for sending notifications using the NotificationProvider interface
class NotificationService:
    def __init__(self, notification_provider):
        self.notification_provider = notification_provider

    def send_notification(self, message):
        self.notification_provider.send_notification(message)

# Example usage
email_provider = EmailNotificationProvider()
notification_service = NotificationService(email_provider)
notification_service.send_notification("Hello, this is an email notification")

sms_provider = SMSNotificationProvider()
notification_service = NotificationService(sms_provider)
notification_service.send_notification("Hello, this is an SMS notification")

</code>
</pre>

</section>
<section>

<p>In this example:</p>

<ul>
  <li>We define an abstract interface <strong>NotificationProvider</strong> for notification delivery with a method <strong>send_notification()</strong>.</li>
  <li>Concrete implementations <strong>EmailNotificationProvider</strong> and <strong>SMSNotificationProvider</strong> implement the <strong>NotificationProvider</strong> interface.</li>
  <li>The <strong>NotificationService</strong> class represents the high-level module responsible for sending notifications. It depends on the <strong>NotificationProvider</strong> interface rather than concrete implementations.</li>
  <li>This design adheres to the Dependency Inversion Principle by ensuring that high-level modules (e.g., <strong>NotificationService</strong>) depend on abstractions (e.g., <strong>NotificationProvider</strong>) rather than concrete implementations. This allows for easier maintenance, flexibility, and testing, as different notification providers can be easily swapped without modifying the <strong>NotificationService</strong> class.</li>
</ul>

</section>

<style>
    }
    .major-steps li{
    margin-bottom:30px
    }

    ol li{
    margin-bottom:30px
    }
</style>