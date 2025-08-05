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
    Aggregation in MongoDB is a powerful data processing and transformation framework used to perform operations like:

    Filtering ($match)

    Grouping ($group)

    Sorting ($sort)

    Joining ($lookup)

    Projecting specific fields ($project)

    Calculating totals, averages, counts, etc.

    .MongoDB uses an aggregation pipeline, which is a sequence of stages, where each stage processes and passes results to the next.

    .Each stage is a JSON object with a specific operator.

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

Q. Indexing :-
Ans :-
    Indexing in MongoDB is a technique used to speed up query performance. Without indexes, MongoDB performs a collection scan — it checks every document to find matches, which is inefficient for large datasets.

    .index is automatically created on _id field.

    .With indexes, MongoDB can quickly locate documents that match query conditions, just like an index in a book helps you find specific topics fast.

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

    .How to Create Indexes :-
        . Single Field Index :- 
            ex:- db.users.createIndex({ email: 1 })  // 1 = ascending, -1 = descending

        .Compound Index :-
            ex:- db.orders.createIndex({ userId: 1, createdAt: -1 })

    .How to View Indexes :-
        .db.users.getIndexes()

    .How to Drop Indexes :-
        .db.users.dropIndex("email_1")

    .Use .explain() to analyze performance:-
        db.users.find({ email: "john@example.com" }).explain("executionStats")

    It will show if an index was used or if a full scan was performed.

    .When NOT to Use Indexes
        Too many indexes = overhead during writes/updates

        Indexes use extra storage

        Unused indexes slow down write operations

Q. What is Projection in MongoDB?
Ans:-
    .In MongoDB, projection means specifying which fields to include or exclude in the result set of a query. It allows you to retrieve only necessary data, making queries more efficient in terms of performance and bandwidth.

    Ex:- const cursor2 = collection.find({}).project({ name: 1 });
         const cursor2 = collection.find({}).project({ name: 1, _id: 0 }); //exlude id.

    .Why Use Projection?
        .Reduces data transfer between MongoDB and your app

        .Optimizes memory usage by retrieving only what’s needed

        .Speeds up queries especially when documents are large

    .Best Practices
        .Always use projection to limit data sent to the client.

        .Avoid fetching sensitive or unnecessary fields like password, tokens, etc.

        .Use projections for performance tuning and better security.



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

1. Queries :-
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

2. comparision operator :-
-------------------------

    .$eq :- 
            .Specifies equality condition. The $eq operator matches documents where the value of a field equals the specified value.

        Ex:- db.inventory.find( { qty: { $eq: 20 } } )

    .$gt :- 
            .$gt selects those documents where the value of the specified field is greater than (i.e. >) the specified value.

        syntax :- { field: { $gt: value } }

        ex:- db.inventory.find( { quantity: { $gt: 20 } } )

    
    .$gte :- 
            .$gte selects the documents where the value of the specified field is greater than or equal to (i.e. >=) a specified value (e.g. value.)

        syntax :- { field: { $gte: value } } 

        ex:- db.inventory.find( { quantity: { $gte: 20 } } )


    .$in :- 
            .The $in operator selects the documents where the value of a field equals any value in the specified array.

        Synatx :- { field: { $in: [<value1>, <value2>, ... <valueN> ] } }

        ex:- db.inventory.find( { quantity: { $in: [ 5, 15 ] } }, { _id: 0 } )

    .$lt :- 

            .$lt selects the documents where the value of the field is less than (i.e. <) the specified value.

        syntax :- { field: { $lt: value } }

        ex:- db.inventory.find( { quantity: { $lt: 20 } } )

    .$lte :- 
            .$lte selects the documents where the value of the field is less than or equal to (i.e. <=) the specified value.

        syntax :- { field: { $lte: value } }

        ex:- db.inventory.find( { quantity: { $lte: 20 } } )

    .$ne :- 
            .$ne selects the documents where the value of the specified field is not equal to the specified value. This includes documents that do not contain the specified field.

        syntax :- { field: { $ne: value } }

        ex:- db.inventory.find( { quantity: { $ne: 20 } } )  

            SELECT * FROM INVENTORY WHERE QUANTITIY != 20  --> equivalent sql query

            db.inventory.updateMany(
                { "carrier.fee" : { $ne: 1 } },
                { $set: { "price": 9.99 } }
            )

            UPDATE INVENTORY SET PRICE = '9.99' WHERE carrierfee != 1  --> equivalent sql query

        
    .$nin :- 
            .$nin selects the documents where:

                .the specified field value is not in the specified array or

                .the specified field does not exist.

        syntax :- { field: { $nin: [ <value1>, <value2> ... <valueN> ] } }

        ex:- db.inventory.find( { quantity: { $nin: [ 5, 15 ] } }, { _id: 0 } )


.Logical operator :-
---------------------

    .$and :-
            .$and performs a logical AND operation on an array of one or more expressions (<expression1>, <expression2>, and so on) and selects the documents that satisfy all the expressions.

            .Note :- 
                MongoDB provides an implicit AND operation when specifying a comma separated list of expressions.

        syntax :- { $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }


        Ex:- 
            db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists:             true } } ] } )

    
    .$not :-
            .$not performs a logical NOT operation on the specified <operator-expression> and selects the documents that do not match the <operator-expression>. This includes documents that do not contain the field.

        syntax :- { field: { $not: { <operator-expression> } } }

        ex:- db.inventory.find( { price: { $not: { $gt: 1.99 } } } )


    .$nor :- 
            .$nor performs a logical NOR operation on an array of one or more query predicates and selects the documents that fail all the query predicates in the array. 

        syntax :- { $nor: [ { <expression1> }, { <expression2> }, ...  { <expressionN> } ] }

        ex:- db.inventory.find( { $nor: [ { price: 1.99 }, { sale: true } ]  } )


    .$or :-
            .The $or operator performs a logical OR operation on an array of one or more <expressions> and selects the documents that satisfy at least one of the <expressions>.

        syntax :- { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }

        ex :- db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )

    
.Element Query :-
-----------------

    .$exists :-
            .The $exists operator matches documents that contain or do not contain a specified field, including documents where the field value is null.

        syntax :- { field: { $exists: <boolean> } }

        ex :- db.spices.find( { saffron: { $exists: true } } )
              db.inventory.find( { qty: { $exists: true, $nin: [ 5, 15 ] } } )

    
    .$type :-

            syntax :- { field: { $type: [ <BSON type1> , <BSON type2>, ... ] } }
                      { field: { $type: <BSON type> } }

            ex :- db.data.find( { x: { $type: "minKey" } } )

    
    .$expr :- Allows the use of expressions within a query predicate.

            syntax :- { $expr: { <expression> } }

            ex :- db.monthlyBudget.find( { $expr: { $gt: [ "$spent" , "$budget" ] } } )

            The following operation uses $expr to find documents where the spent amount exceeds the budget

    .$mod :-

            .Select documents where the value of a field divided by a divisor has the specified remainder. That is, $mod performs a modulo operation to select documents. The first argument is the dividend, and the second argument is the remainder.


        syntax :- { field: { $mod: [ divisor, remainder ] } }

        ex :- db.inventory.find( { qty: { $mod: [ 4, 0 ] } } )

.Array Query :-
----------------

    .$all :- 
            .The $all operator selects the documents where the value of a field matches all specified values. The matched documents can either contain a field with a value that is an array containing all the specified elements, or a field with a single value matching the specified element.

        syntax :- { <field>: { $all: [ <value1> , <value2> ... ] } }

        ex:- { tags: { $all: [ "ssl" , "security" ] } }

    .$elemMatch  :-
            
            .The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria.

        syntax :- { <field>: { $elemMatch: { <query1>, <query2>, ... } } }

        ex :- db.scores.find({ results: { $elemMatch: { $gte: 80, $lt: 85 } } }
        )


    .$size :-
            .The $size operator matches any array with the number of elements specified by the argument.

        ex :- db.collection.find( { field: { $size: 2 } } );

.Update query :-
----------------

        .field :-
        ---------
                .$currentDate :- 
                            .The $currentDate operator sets the value of a field to the current date, either as a Date or a timestamp. The default type is Date.

                    syntax :- { $currentDate: { <field1>: <typeSpecification1>, ... } }

                    ex :- 

                    db.customers.updateOne(
                        { _id: 1 },
                        {
                            $currentDate: {
                                lastModified: true,
                                "cancellation.date": { $type: "timestamp" }
                            },
                            $set: {
                                "cancellation.reason": "user request",
                                status: "D"
                            }
                        }
                    )

                .$inc :- 
                        .The $inc operator increments a field by a specified value.

                    syntax :- { $inc: { <field1>: <amount1>, <field2>: <amount2>, ... } }

                    ex :- db.products.insertOne(
                            {
                                _id: 1,
                                sku: "abc123",
                                quantity: 10,
                                metrics: { orders: 2, ratings: 3.5 }
                            }
                        )

                        db.products.updateOne(
                            { sku: "abc123" },
                            { $inc: { quantity: -2, "metrics.orders": 1 } }
                        )

                .$min :-
                        .The $min updates the value of the field to a specified value if the specified value is less than the current value of the field. The $min operator can compare values of different types, using the BSON comparison order.

                    syntax :- { $min: { <field1>: <value1>, ... } }

                    ex :- db.scores.updateOne( { _id: 1 }, { $min: { lowScore: 150 } } )

                .$max :-

                        .The $max operator updates the value of the field to a specified value if the specified value is greater than the current value of the field. The $max operator can compare values of different types, using the BSON comparison order.

                    syntax :- { $max: { <field1>: <value1>, ... } }

                    ex :- db.scores.updateOne( { _id: 1 }, { $max: { highScore: 950 } } )

                .$mul :-
                        .Multiply the value of a field by a number. To specify a $mul expression

                    syntax :- { $mul: { <field1>: <number1>, ... } }

                    ex :- db.products.updateOne(
                            { _id: 1 },
                            { $mul:
                                {
                                    price: Decimal128( "1.25" ),
                                    quantity: 2
                                }
                            }
                        )

                .$rename :-
                        .The $rename operator updates the name of a field.

                    syntax :- { $rename: { <field1>: <newName1>, <field2>: <newName2>, ... } }

                    ex :- db.students.updateOne(
                            { _id: 1 }, { $rename: { 'nickname': 'alias', 'cell': 'mobile' } }
                        )

                .$set :- 

                        .The $set operator replaces the value of a field with the specified value.

                    syntax :- { $set: { <field1>: <value1>, ... } }

                    ex :- db.products.updateOne(
                            { _id: 100 },
                            { $set:
                                {
                                    quantity: 500,
                                    details: { model: "2600", make: "Fashionaires" },
                                    tags: [ "coats", "outerwear", "clothing" ]
                                }
                            }
                        )

                .$setOnInsert :-

                        .$setOnInsert is an update operator used only with upsert: true operations. It allows you to set specific fields only when a new document is inserted (i.e., not during updates).

                        .What It Does:
                            If a document exists, only $set runs.

                            If no document is found, a new document is inserted, and both $set and $setOnInsert run.

                            Fields in $setOnInsert are not updated on future updates — only on initial insert.

                    ex :- db.collection.updateOne(
                            <query>,
                            { $setOnInsert: { <field1>: <value1>, ... } },
                            { upsert: true }
                        )


                        db.products.updateOne(
                            { _id: 1 },
                            {
                                $set: { item: "apple" },
                                $setOnInsert: { defaultQty: 100 }
                            },
                            { upsert: true }
                        )
                
                .$unset :-
                        .The $unset operator deletes a particular field.


                    syntax :- { $unset: { <field1>: "", ... } }

                    ex :- db.products.updateOne(
                            { sku: "unknown" },
                            { $unset: { quantity: "", instock: "" } }
                        )


        .Array :-
        ---------

                .$(update) :-  
                        .The positional $ operator identifies an element in an array to update without explicitly specifying the position of the element in the array.

                    syntax :- { "<array>.$" : value }

                    ex :- db.collection.updateOne(
                            { <array>: value ... },
                            { <update operator>: { "<array>.$" : value } }
                        )

                        db.students.insertMany( [
                            { "_id" : 1, "grades" : [ 85, 80, 80 ] },
                            { "_id" : 2, "grades" : [ 88, 90, 92 ] },
                            { "_id" : 3, "grades" : [ 85, 100, 90 ] }
                        ] )

                        db.students.updateOne(
                            { _id: 1, grades: 80 },
                            { $set: { "grades.$" : 82 } }
                        )

                        .The positional $ operator acts as a placeholder for the first match of the update query document.

                .$[] :-
                        .The all positional operator $[] indicates that the update operator should modify all elements in the specified array field.


                    syntax :- { <update operator>: { "<array>.$[]" : value } }

                    Ex :- db.collection.updateOne(
                            { <query conditions> },
                            { <update operator>: { "<array>.$[]" : value } }
                        )

                        db.students.insertMany( [
                            { "_id" : 1, "grades" : [ 85, 82, 80 ] },
                            { "_id" : 2, "grades" : [ 88, 90, 92 ] },
                            { "_id" : 3, "grades" : [ 85, 100, 90 ] }
                        ] )

                        db.students.updateMany(
                            { },
                            { $inc: { "grades.$[]": 10 } },
                        )

                .$[<identifier>] :-

                        .The filtered positional operator $[<identifier>] identifies the array elements that match the arrayFilters conditions for an update operation.


                    syntax :- { <update operator>: { "<array>.$[<identifier>]" : value } },
                              { arrayFilters: [ { <identifier>: <condition> } ] }

                    ex :- db.collection.updateOne(
                                { myArray: [ 0, 1 ] },
                                { $set: { "myArray.$[element]": 2 } },
                                { arrayFilters: [ { element: 0 } ], upsert: true }
                            )

                .$addToSet :- 

                        .The $addToSet operator adds a value to an array unless the value is already present, in which case $addToSet does nothing to that array.


                        syntax :- { $addToSet: { <field1>: <value1>, ... } }

                        ex :- db.alphabet.updateOne(
                                { _id: 1 },
                                { $addToSet: { letters: [ "c", "d" ] } }
                            )


                .$pop :-
                        .The $pop operator removes the first or last element of an array. Pass $pop a value of -1 to remove the first element of an array and 1 to remove the last element in an array.

                    syntax :- { $pop: { <field>: <-1 | 1>, ... } }

                    ex :- db.students.insertOne( { _id: 1, scores: [ 8, 9, 10 ] } )
                          db.students.updateOne( { _id: 1 }, { $pop: { scores: -1 } } )
                          db.students.updateOne( { _id: 10 }, { $pop: { scores: 1 } } )

                .$pull :-
                        .The $pull operator removes from an existing array all instances of a value or values that match a specified condition.

                    syntax :- 
                            { $pull: { <field1>: <value|condition>, <field2>: <value|             condition>, ... } }

                    ex :- 

                        db.stores.insertMany( [
                                {
                                    _id: 1,
                                    fruits: [ "apples", "pears", "oranges", "grapes", "bananas" ],
                                    vegetables: [ "carrots", "celery", "squash", "carrots" ]
                                },
                                {
                                    _id: 2,
                                    fruits: [ "plums", "kiwis", "oranges", "bananas", "apples" ],
                                    vegetables: [ "broccoli", "zucchini", "carrots", "onions" ]
                                }
                        ] )

                        db.stores.updateMany(
                            { },
                            { $pull: { fruits: { $in: [ "apples", "oranges" ] }, vegetables: "carrots" } }
                        )

                .$push :- The $push operator appends a specified value to an array.

                    syntax :- { $push: { <field1>: <value1>, ... } }

                    ex :- db.students.insertOne( { _id: 1, scores: [ 44, 78, 38, 80 ] } )
                          db.students.updateOne(
                            { _id: 1 },
                            { $push: { scores: 89 } }
                          )

                .$pullAll :- 

                            .The $pullAll operator removes all instances of the specified values from an existing array. Unlike the $pull operator that removes elements by specifying a query, $pullAll removes elements that match the listed values.

                    syntax :- { $pullAll: { <field1>: [ <value1>, <value2> ... ], ... } }

                    ex :- db.survey.insertOne( { _id: 1, scores: [ 0, 2, 5, 5, 1, 0 ] } )
                          db.survey.updateOne( { _id: 1 }, { $pullAll: { scores: [ 0, 5 ] } } )


                .$each :- 
                            .The $each modifier is available for use with the $addToSet operator and the $push operator.

                        Use with the $addToSet operator to add multiple values to an array <field> if the values do not exist in the <field>.

                            { $addToSet: { <field>: { $each: [ <value1>, <value2> ... ] } } }

                        Use with the $push operator to append multiple values to an array <field>.

                            { $push: { <field>: { $each: [ <value1>, <value2> ... ] } } }

                    ex :- db.students.updateOne(
                            { name: "joe" },
                            { $push: { scores: { $each: [ 90, 92, 85 ] } } }
                          )

                .$position :- 

                            .The $position modifier specifies the location in the array at which the $push operator inserts elements. Without the $position modifier, the $push operator inserts elements to the end of the array. See $push modifiers for more information.

                        To use the $position modifier, it must appear with the $each modifier.

                                    {
                                    $push: {
                                        <field>: {
                                        $each: [ <value1>, <value2>, ... ],
                                        $position: <num>
                                        }
                                    }
                                    }

                        db.students.insertOne( { "_id" : 1, "scores" : [ 100 ] } )

                        db.students.updateOne(
                                { _id: 1 },
                                    {
                                        $push: {
                                            scores: {
                                            $each: [ 50, 60, 70 ],
                                            $position: 0
                                        }
                                    }
                                }
                            )

                .$slice :- 
                        .The $slice modifier limits the number of array elements during a $push operation. To project, or return, a specified number of array elements from a read operation, see the $slice projection operator instead.

                        To use the $slice modifier, it must appear with the $each modifier. You can pass an empty array [] to the $each modifier such that only the $slice modifier has an effect.

                                {
                                    $push: {
                                        <field>: {
                                        $each: [ <value1>, <value2>, ... ],
                                        $slice: <num>
                                        }
                                    }
                                }

                    ex :- { "_id" : 1, "scores" : [ 40, 50, 60 ] }

                        db.students.updateOne(
                            { _id: 1 },
                                {
                                    $push: {
                                    scores: {
                                        $each: [ 80, 78, 86 ],
                                        $slice: -5
                                    }
                                    }
                                }
                        )
                
                .$sort :- 

                        .The $sort modifier orders the elements of an array during a $push operation.

                        .To use the $sort modifier, it must appear with the $each modifier. You can pass an empty array [] to the $each modifier such that only the $sort modifier has an effect.

                                {
                                    $push: {
                                        <field>: {
                                        $each: [ <value1>, <value2>, ... ],
                                        $sort: <sort specification>
                                        }
                                    }
                                }

--------------------------------------------------------------------------------------------------

5. QUERY() contructor :-
-----------------------





