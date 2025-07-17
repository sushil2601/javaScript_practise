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
    Projection is the way of specifying which fields should be returned in the query results.

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
Ans :-
    Aggregation is a way of processing a large number of documents in a collection and returning computed results — like filtering, grouping, sorting, and transforming data.

    Aggregation uses a pipeline pattern: each stage processes the documents and passes the result to the next stage.

    Stage	                                   Purpose
    $match	                                    Filters documents (like find)
    $project	                                Selects specific fields
    $group	                                    Groups documents and performs aggregations
    $sort	                                    Sorts documents
    $limit	                                    Limits number of results
    $skip	                                    Skips documents (useful for pagination)
    $unwind	                                    Deconstructs arrays into individual documents
    $lookup	                                    Performs joins with other collections
    $count	                                    Counts number of documents
    $addFields	                                Adds new fields to documents

Q. What is transactions? How to perform transactions?
Ans :-
    A transaction in MongoDB is a sequence of read and write operations that executes as a single unit.
    If any part of the transaction fails, the entire transaction is rolled back, ensuring data integrity.

    Method	                                       Description
    startSession()	                                Starts a session
    session.startTransaction()	                    Begins the transaction
    { session }	                                    Pass session to each DB operation
    commitTransaction()	                            Commits changes if everything is okay
    abortTransaction()	                            Rolls back if there’s an error
    endSession()	                                Always close the session

Q.DB operation:- 

--> To create(or switch) db :- use studentDB, but it won't show if we do show dbs;

--> If studentDB doesn’t exist yet, MongoDB will prepare to create it .

--> .MongoDB is lazy in creating databases by design.
    .MongoDB only creates a database physically on disk when you insert data into at least one collection.

.To create collection :-

            db.users.insertOne({ name: "Sushil" })

            show collections  :- to list all collection names in the current database.

--------------------------------------------------------------------------------------------------

.Queries :-
------------

    1. Insert to the document :-
    --------------------------------

        .insertOne :- Insert a Single Document.

            ex:- db.studentDB.insertOne({name: 'sushil',age: 25})

        .insertMany :- Insert multiple document.

            ex:- db.studentDB.insertMany([
                { name: "Anita", age: 30, city: "Mumbai" },
                { name: "Raj", age: 28, city: "Kolkata" },
                { name: "Neha", age: 24, city: "Delhi" }
                ])

        .insert :- 
                    .Legacy Method, but not used now
                    .Can insert one or many documents.

            ex:- db.studentDB.insert({ field1: value1, field2: value2 })

    2. Find the document :-
    ------------------------

        .pretty() :-      formats the output of your query to make it more readable.

        .find() :-        show all documents in the studentDB collection.

                ex:- db.studentDB.find();

        .findById() :-    
        ---------------
                          .Finds a single document by its _id field.

                          .almost equivalent to findOne({ _id: id })

                          .Except for how it treats undefined. If you use findOne(), you'll see that findOne(undefined) and findOne({ _id: undefined }) are equivalent to findOne({}) and return arbitrary documents. However, mongoose translates findById(undefined) into findOne({ _id: null }).

                          .is used in Mongoose, not MongoDB shell.

                          .findOne({}) --> gives the first document of collection.

                Ex:- db.studentDB.findById(id). id = "3432463wdwd3253"

        .findOne() :- 
        --------------
                         .Finds one document, and gives the first matching documents.
                         .without condition gives first document if it is exits , otherwise give null.

                Ex:- db.studentDB.findOne({_id : ObjectId('6877a867717f04fedb32a03d')})
                     db.studentDB.findOne({name : 'sushil'});
                     db.studentDB.findOne()  :- gives the first matching document.

        
        .findByIdAndUpdate() :- 
        ------------------------
                                .Finds a document by _id
                                .Updates it

                                .mongodb findOneAndUpdate command by a document's _id field. findByIdAndUpdate(id, ...) is equivalent to findOneAndUpdate({ _id: id }, ...).

                                .Finds a matching document, updates it according to the update arg, passing any options, and returns the found document (if any).

                Ex:- 
                    .studentDB.findByIdAndUpdate("64f4d2f45528b3cf68c9e85a", { age: 30 }) --> This returns the old version by default.

                    .User.findByIdAndUpdate("64f4d2f45528b3cf68c9e85a",
                        { city: "Mumbai" },
                        { new: true }
                    )                      --> Return Updated Document.

                    .User.findByIdAndUpdate("64f4d2f45528b3cf68c9e85a",
                        { $set: { city: "Delhi", age: 27 } },
                        { new: true }
                    )

                    .User.findByIdAndUpdate(id)  -> only finds the document and doesn’t update anything.

                    .User.findByIdAndUpdate() :- throw an error, because the method expects at least one argument, the _id of the document to update.

                    .$set --->	Update specific fields only

        .findOneAndUpdate() :- 
        ----------------------
                                .Finds a document matching a condition (filter)

                                .Updates it with the specified changes

                                .Returns the document (by default, the original, unless you ask for the updated one)

                Ex:- 
                        .User.findOneAndUpdate(
                            { name: "Sushil" },
                            { age: 30 },
                            { new: true }
                        )

                        .User.findOneAndUpdate(
                            { name: "NewUser" },
                            { $set: { age: 25 } },
                            { new: true, upsert: true } //upsert :- Insert if Not Found
                        )

                    .findByIdAndUpdate() is just a shortcut for findOneAndUpdate() with _id.     
                    .If a document with name: "NewUser" doesn’t exist, it will be created.
        
        .findByIdAndDelete() :- 
        -----------------------
                                .Find a document by its _id
                                .Delete it from the database
                                .Return the deleted document (or null if not found)

                        
                Ex:- User.findByIdAndDelete("64f4d2f45528b3cf68c9e85a")

                     User.findOneAndDelete({ _id: "64f4d2f45528b3cf68c9e85a" })


                .MongoDB findOneAndDelete() command by a document's _id field. In other words, findByIdAndDelete(id) is a shorthand for findOneAndDelete({ _id: id }).

        .findByIdAndRemove() :-
        ----------------------

                        .used to find a document by its _id and remove it from the MongoDB collection.

                        .findByIdAndRemove() and findByIdAndDelete() both do the same things.

                        .findByIdAndDelete() is just newer and more semantically clear. we can use either, but findByIdAndDelete() is preferred for clarity.

            Ex:- db.users.findByIdAndRemove(userId);
        

        .findOneAndReplace() :- 
        -------------------------
        
            Finds a matching document, replaces it with the provided doc, and returns the document.

                ex:- 
                        User.findOneAndReplace(
                            { name: "Sushil" }, // filter
                            { name: "Sushil", age: 30, city: "Mumbai" }, // replacement (full doc)
                            { new: true } // return the new document
                        )

                        .You must provide all fields (like name, age, city) — because it overwrites the original doc.

                        .Deletes everything in the matched document and replaces it.

        
        .deleteMany() :-
        ----------------
                        .Deletes all of the documents that match conditions from the collection. It returns an object with the property deletedCount containing the number of documents deleted.

            ex:- 
                .db.users.deleteMany({ city: "Delhi" }) //Deletes all users where city is "Delhi".

                .User.deleteMany({ age: { $lt: 18 } }); //deletes all users whose age is lt 18.

                o/p :- { "acknowledged": true, "deletedCount": 4 }

        .deleteOne() :-
        ---------------
                
                .Deletes the first document that matches conditions from the collection. It returns an object with the property deletedCount indicating how many documents were deleted.


            Ex:- 
            
            db.users.deleteOne({ name: "Sushil" }) //{ "acknowledged": true, "deletedCount": 1 }

                        .Deletes one document where name is "Sushil".

                        .If multiple documents match, only the first one is deleted.

    Note :- If no match is found → both return deletedCount: 0


        .updateMany():-
        ----------------

            .Same as updateOne(), except MongoDB will update all documents that match filter (as opposed to just the first one) regardless of the value of the multi option.

            ex:- 
                
                const res = await Person.updateMany({ name: /Stark$/ }, { isDeleted: true });

                await Person.find({ name: /Stark$/ }).updateMany({ isDeleted: true }); // Using chaining syntax

                await Person.find().updateMany({ isDeleted: true }); // Set `isDeleted` on _all_ Person documents


        .updateOne():-      Update only the first document that matches filter.
        ----------------
            
                Ex:-

                    await Person.findOne({ name: 'Jean-Luc Picard' }).updateOne({ ship: 'USS Enterprise' }); // Using chaining syntax

                    await Person.updateOne({ ship: 'USS Enterprise' }); // Updates first doc's `ship` property

        .replaceOne() :-
        ----------------
                    .replaces an entire document that matches the specified filter with a new document.

                    .If a field is not included in the new document, it will be removed.

            Ex:- 

                    {
                        "_id": ObjectId("667f62a32f85ab7f9ef12345"),
                        "name": "Sushil",
                        "age": 24,
                        "course": "ReactJS"
                    }

                    db.students.replaceOne(
                        { name: "Sushil" }, // filter
                        {
                            name: "Sushil Kumar",
                            age: 25,
                            course: "NodeJS"
                        }
                    )

                    After running this, the document becomes:
                        {
                            "_id": ObjectId("667f62a32f85ab7f9ef12345"), // same _id retained
                            "name": "Sushil Kumar",
                            "age": 25,
                            "course": "NodeJS"
                        }

        .insert() :-     Creates one or multiple documents and saves them to the MongoDB collection.
        -------------
                    Syntax :- Model.create(doc || [docs], [options])

                    Ex:- await User.create({ name: "Sushil", age: 25 });

                        // Create multiple users

                        await User.create([
                        { name: "Ram", age: 22 },
                        { name: "Shyam", age: 30 }
                        ]);



        .save() :-      Used to manually save a single Mongoose document.
        -------------

                    syntax:- 
                                const doc = new Model(data); 
                                await doc.save();

                    ex:- const user = new User({ name: "Sita", age: 28 });
                         await user.save(); // saves to DB

        .bulkSave() :-       Saves multiple document instances in bulk (efficiently).
        ---------------

                syntax :- Model.bulkSave([doc1, doc2, ...])

                ex:- const user1 = new User({ name: "A", age: 20 });
                     const user2 = new User({ name: "B", age: 25 });

                     await User.bulkSave([user1, user2]);

        .bulkWrite() :-     bulk operations like insert, update, delete.
        ---------------

                syntax :- Model.bulkWrite([
                            { insertOne: { document: { name: "A" } } },
                            { updateOne: { filter: { name: "B" }, update: { $set: { age: 30 } } } },
                            { deleteOne: { filter: { name: "C" } } }
                            ])

                ex:- 
                        await User.bulkWrite([
                        { insertOne: { document: { name: "X", age: 20 } } },
                        { updateOne: { filter: { name: "Ram" }, update: { $set: { age: 35 } } } },
                        { deleteOne: { filter: { name: "OldUser" } } }
                        ]);

        .lean() :-
        ----------
                .It tells Mongoose to return plain JavaScript objects instead of full Mongoose documents (which have methods like .save(), .validate(), etc.).

            Ex:- const users = await User.find({ age: { $gt: 18 } }).lean();

            o/p :-  with lean
            
                    {
                        _id: new ObjectId("667abcde1234567890abcdef"),
                        name: 'Sushil',
                        age: 25,
                        __v: 0
                    }

                without lean :- 

                    {
                        _id: new ObjectId("667abcde1234567890abcdef"),
                        name: 'Sushil',
                        age: 25,
                        __v: 0,
                        save: [Function], // <-- Mongoose adds methods
                        validate: [Function],
                        ...
                    }

        .exec() :-
        -----------

            .is used to execute the query explicitly. It's optional but provides better control (especially when chaining or working with Promises).
            
            .Why use .exec()?

                Helps avoid callback hell.

                Ensures consistent behavior when using .then() / await.

                Returns a true Promise, not a thenable.

            
            Ex:- const user = await User.findOne({ name: "Sushil" }).exec();

        
        .distinct() :-   
        --------------
                    .Returns an array of unique values for a specified field across a collection.

                Ex:- const skills = await User.distinct("skills");
                     console.log(skills);

                     o/p :- ['ReactJs', 'NodeJs', 'JavaScript']


        .exists() :–  Check if a Document Exists
        -----------

            Returns true if at least one document matches the condition.

                const exists = await User.exists({ email: "sushil@gmail.com" });
                console.log(exists ? "User exists" : "User not found");

        .inspect() :– Debug a Mongoose Document
        -----------

            Ex:- const user = await User.findOne();
                 console.log(user.inspect());


        .populate() :–  Fetch Referenced Documents
        -----------
            
            .Used when one document references another collection, and you want full data instead of just the _id.

            Ex:- const post = await Post.findOne().populate("author");

        .countDocuments() :– Count Matching Documents
        -----------------

                    .If you want to count all documents in a large collection, use the estimatedDocumentCount() function instead.

                Ex:- const count = await User.countDocuments({ gender: "male" });
                     console.log(`Male users: ${count}`);

        .ref :-    Reference Another Collection.
        --------

                .In Mongoose, the ref option is used to define a relationship between collections — it's how Mongoose lets one document reference documents in another collection, similar to foreign keys in relational databases.

                .To tell Mongoose that a field contains the ObjectId of a document from another collection.

            Syntax :-

                    const postSchema = new mongoose.Schema({
                        title: String,
                        author: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: 'User'   // name of the model being referenced
                        }
                    });

-------------------------------------------------------------------------------------------------

.comparision operator :-
-------------------------

    

