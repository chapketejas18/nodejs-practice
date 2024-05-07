1. Space-based Architecture:
   Characteristics: Highly distributed computing model where processes communicate via a shared space, often asynchronously.
   Unique Characteristics: Promotes scalability, fault tolerance, and loosely coupled systems. Suitable for dynamic requirements and distributed data processing.

2. Microservices Architecture:
   Characteristics: Application is composed of loosely coupled, independently deployable services, each responsible for specific business capabilities.
   Unique Characteristics: Enables modularity, flexibility, and scalability. Each microservice can be developed, deployed, and scaled independently, but managing inter-service communication can be complex.

3. Microkernel Architecture:
   Characteristics: Core system prov"id"es essential functionality, while additional features are implemented as interchangeable modules.
   Unique Characteristics: Promotes extensibility and customization. New features can be added without modifying the core system, but managing interactions between modules may introduce overhead.

4. Event-driven Architecture:
   Characteristics: Software components communicate and respond to events, either internally or externally generated.
   Unique Characteristics: Enables real-time reactions to changes, suitable for IoT, analytics, and reactive systems. However, managing event flows and ensuring consistency can be complex.

5. Layered (n-tier) Architecture:
   Characteristics: Organizes software into layers (presentation, business logic, data access), with each layer depending only on the one below.
   Unique Characteristics: Promotes separation of concerns, making systems easier to understand and maintain. Each layer can be developed, tested, and deployed independently.

6. Monolithic Architecture:
   Characteristics: All components of an application tightly coupled and packaged together as a single unit.
   Unique Characteristics: Simple to develop and deploy initially, but can become challenging to maintain and scale as the application grows.

7. Client-Server Architecture:
   Characteristics: Centralized server prov"id"es resources or services to multiple clients.
   Unique Characteristics: Enables resource sharing and centralized management, but can lead to bottlenecks and scalability issues.

8. Component-Based Architecture:
   Characteristics: Application built from reusable, self-contained software components.
   Unique Characteristics: Promotes reusability, flexibility, and modular design. Components can be developed and tested independently, facilitating easier maintenance and updates.

9. Model-View-Controller (MVC) Architecture:
   Characteristics: Separates application into three interconnected components: Model (data), View (user interface), and Controller (business logic).
   Unique Characteristics: Promotes separation of concerns, making applications easier to develop, test, and maintain. Each component can be modified without affecting the others.

10. Model-View-ViewModel (MVVM) Architecture:
    Characteristics: Similar to MVC, but ViewModel acts as a mediator between the View and Model, handling user input and updating the Model.
    Unique Characteristics: Commonly used in client-s"id"e applications, especially with frameworks like Angular and Vue.js. Enables easier testing and maintenance of complex UI logic.

11. Container-Based Architecture:
    Characteristics: Application components packaged into lightweight, portable containers, each with its dependencies.
    Unique Characteristics: Enables consistent development and deployment across different environments. Containers prov"id"e isolation and scalability, making it easier to manage complex applications.
