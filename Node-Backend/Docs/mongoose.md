### What is MongoDB?
MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas. It is a popular choice for many applications due to its flexibility, scalability, and performance.

## Features of MongoDB : 

1) Document-Oriented: MongoDB stores data in flexible, JSON-like documents, making it easy to model complex data structures.
2) Schemaless: Unlike traditional relational databases, MongoDB does not require a predefined schema. Fields can vary from document to document.
3) High Performance: MongoDB uses internal memory for storing the working set, providing high performance for read and write operations.
4) Scalability: MongoDB can scale horizontally by adding more machines to handle larger loads.
5) Rich Query Language: MongoDB supports a wide range of queries, including field, range, and regular expression queries.
6) Indexing: MongoDB supports indexing to improve query performance.
7) Aggregation Framework: MongoDB provides an aggregation framework for performing complex data aggregation operations.
8) High Availability: MongoDB supports replication and automatic failover to ensure high availability of data.


## Object-Relational Mapping (ORM)
ORM (Object-Relational Mapping) is a programming technique for converting data between incompatible systems by creating a virtual object database. It allows developers to work with relational databases using an object-oriented approach.

## Benefits of ORM

1) Simplified Database Interaction: ORM abstracts away the complexities of database interaction, allowing developers to focus on the application logic.
2) Code Reusability: ORM enables code reusability by providing a common interface for database operations.
3) Database Independence: ORM allows developers to switch between different database systems without changing the application code.

### What is Mongoose?

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model application data.

Features of Mongoose : 

1) Schema Definition: Mongoose allows developers to define schemas for their data models using a simple, JSON-like syntax.
2) Validation: Mongoose provides built-in validation for data integrity, ensuring that only valid data is saved to the database.
3) Query Building: Mongoose offers a fluent query builder API for constructing complex database queries.
4) Middleware: Mongoose supports middleware functions for executing custom logic before or after database operations.
5) Population: Mongoose supports population, allowing developers to reference documents from other collections.

## Distinctions between RDBMS and NoSQL Databases

# RDBMS (Relational Database Management System) : 
Structured Data Model: RDBMS stores data in structured tables with rows and columns.
Schema-Based: RDBMS requires a predefined schema with fixed tables and columns.
SQL Language: RDBMS uses SQL (Structured Query Language) for querying and manipulating data.
ACID Transactions: RDBMS ensures ACID (Atomicity, Consistency, Isolation, Durability) properties for transactions.
Vertical Scaling: RDBMS typically scales vertically by adding more resources to a single server.

# NoSQL Databases :
Flexible Data Model: NoSQL databases like MongoDB store data in flexible, schema-less documents.
Schema-less: NoSQL databases do not require a predefined schema and allow for dynamic schema changes.
Query Language: NoSQL databases use different query languages such as MongoDB's query language for data manipulation.
Eventual Consistency: NoSQL databases often prioritize availability and partition tolerance over strict consistency.
Horizontal Scaling: NoSQL databases scale horizontally by adding more machines to distribute the load.