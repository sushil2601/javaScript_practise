Q. What is mongoDB
Ans :-
    .MongoDB is a popular open source, NoSQL database management system.

    .It store the data in JSON-like documents.

Q. What is NoSQL?
Ans :-
    NoSQL(Not only SQL) databases are designed to handle structured,semi-structured and Unstructured data.

    Ex:- MongoDB, Redis

Q. When to use RDBMS and when to use NoSQL DB in your applications?
Ans :-
    .RDBMS are suitable for applications that require complex transactions and data integrity(ACID),such as banking, finance, and E-commerce.

    .NoSQL databases are designed to handle large volumes of data with high-speed read and write operations, such as social media,IoT and gaming.

Q. What are Documents and Collections in NoSQL?
Ans :-
    .A documents is a semi-structured data structure(XML,JSON format) that stores information in a NoSQL database.

    It is similar to a row in a table in a RDBMS.

    .A 'collection' is a group of documents that are stored together in a NoSQL database.

    It is similar to a table in a RDBMS.

Q. What are crud operations in MongoDB?
Ans :-
    C(Create) :- This operation refers to inserting new documents into a MongoDB collection.

    R(Read)   :- This operation refers to retrieving data from a MongoDB collection.

    U(Update) :- This operation refers to modifying existing documents in a MongoDB collection.

    D(Delete) :- This operation refers to removing documents from a MongoDB collection.

Q. How to Connect to MongoDB server from Node.js application?
Ans :-
    MongoDB can be connected from Node by calling the connect() method of mongoDB class.

    1. install mongoDB :- npm install mongodb
    2. import mongodb
    3. create a new MongoDB using connection URI
    4. Connect to the MongoDB server
    5. Return the database object
    6. Throw error if connection fails.

Q. What are Query Operators in MongoDB?
Ans :-
    Query operators are special keywords or symbols used to perform operations like comparison, logical operations in queries.

    Ex:- $lte, $gte

Q. What is projection in MongoDB? How to implement it?
Ans :-
    Projects is the way of specifying which fields should be returned in the query results.

    Projection can be implemented by using the project method.

        ex:- const cursor2 = collection.find({}).project({name : 1});

Q. What are Indexes in MongoDB? How indexing make data retrieval faster?
Ans :-
    Indexes are data structure that improve the speed of data retrieval operations on collections.

    By default, index is automatically created on _id field.

    Ex:- user collection

        [
            {"_id":1,"name":"sushil","age":23},     --> Before creating index, data is directly
            {"_id":2,"name":"suman","age":23},             retrieved.
            {"_id":3,"name":"Taaj","age":23}
        ]

        creating index on "name" field.(MongoDB will create a separate index data structure(index tree))

        {   Ascending
            "Sushil":[1],
            "Suman" :[2],        ===> index tree
            "kumar" :[3]
        }

        -> After creating index, data is retrieved via indexes.

    MongoDB automatically update the index tree as documents are inserted,updated or deleted ensuring the index remains accurate.

    When querying with indexed fields, MongoDB uses the index to efficiently locate matching documents, avoiding a full collection scan.

Q. What are Mongoose? What are the advantages of using it?
Ans :-
    Mongoose is an Object Data Modeling library for MongoDB and Node.js.

    Mongoose provides schema-based solution to model application data.

    Advantage:-

            .Data validation.
            .Middleware Support.
            .Define relationships b/w collections.

Q. What is the role of Schema in Mongoose? How to define it?
Ans :-
    A schema in Mongoose defines the structure,validation rules and behaviour of MongoDB documents, ensuring data consistency and integrity.

    It's defined using the mongoose.Schema() function.

Q. What is model?
Ans :-
    A Model is a wrapper around a MongoDB collection. It provides an interface to interact with the database — like reading, writing, updating, and deleting documents.

    JavaScript class + MongoDB schema = Mongoose Model.

    Model in Simple Terms:-
    
        .A Schema defines the structure of your data.

        .A Model gives you functions (APIs) to work with that data.

    const mongoose = require('mongoose');

    Define Schema
        const userSchema = new mongoose.Schema({
            name: String,
            email: String,
            age: Number,
        });

    Create Model
    const User = mongoose.model('User', userSchema);  // now User is Model

Q. Query()

Q. Aggregation

Q. How to perform transactions

Q. 