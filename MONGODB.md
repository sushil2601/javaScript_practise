Q. What is mongoDB
Ans :-
    .MongoDB is an open-source NoSQL database.
    .It stores data in JSON-like documents instead of traditional rows and columns.
    .It’s designed to handle large volumes of unstructured or semi-structured data.
    .It offers high scalability, flexibility, and fast performance for modern applications.

Q. What is NoSQL?
Ans :-
    .NoSQL stands for "Not Only SQL".
    .It’s a type of database designed to store and manage structured, semi-structured, and unstructured data.
    .Unlike traditional relational databases, NoSQL databases don’t rely on fixed tables and schemas.
    .They are often used for scalability, flexibility, and handling big data.

    Examples: MongoDB, Redis, Cassandra, CouchDB.

Q. When to use RDBMS and when to use NoSQL DB in your applications?
Ans :-
    .RDBMS (Relational Database):
        .Best for applications needing complex transactions and strong data integrity (ACID compliance).
        .Ideal for structured data with fixed schemas.

        Examples: Banking, finance systems, traditional e-commerce platforms.

    .NoSQL Database:
        .Best for large volumes of data with high-speed reads/writes.
        .Ideal for unstructured or semi-structured data and flexible schemas.

        Examples: Social media platforms, IoT apps, gaming applications.

Q. What are Documents and Collections in NoSQL?
Ans :-
    .Document:
        .Semi-structured data (usually in JSON format).
        .Equivalent to a row in RDBMS.

    .Collection:
        .Group of related documents.
        .Equivalent to a table in RDBMS.

Q. What are crud operations in MongoDB?
Ans :-
    .C – Create → Insert new documents into a collection.
    .R – Read → Retrieve documents from a collection.
    .U – Update → Modify existing documents.
    .D – Delete → Remove documents from a collection.

Q. How to Connect to MongoDB server from Node.js application?
Ans :-
    .Install Mongoose
    .Import Mongoose
    .Call mongoose.connect() with MongoDB URI
    .Handle errors → Catch and log connection issues

Q. What are Mongoose? What are the advantages of using it?
Ans :-
    .Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
    .It provides a schema-based solution to define and model application data, making interactions with MongoDB easier and more structured.

    .Advantages :-
        .Why use Mongoose instead of MongoClient?
            .It provides schemas & models for structured data.
            .Has built-in validation.
            .Easier query building and less boilerplate.
            .Middleware support for hooks (pre, post).

Q. What is the role of Schema in Mongoose? How to define it?
Ans :-
    .In Mongoose, a Schema defines the structure, validation rules, and behavior of MongoDB documents.
    .It ensures data consistency and integrity by specifying the data types and constraints for each field.
    .Definition: A schema is created using the mongoose.Schema() function.

Q. What is a model in mongoose?
Ans :-
    .A Model is a wrapper around a MongoDB collection in Mongoose.
    .It provides an interface to create, read, update, and delete documents.

    .Schema → Defines the structure of your data.
    .Model → Gives you functions (APIs) to work with that data.

Q. Aggregation
Ans :-
    .Aggregation in MongoDB is a data processing and transformation framework used to analyze, compute, and reshape data stored in collections.

    .Common Operations:
        .Filtering → $match
        .Grouping → $group
        .Sorting → $sort
        .Joining collections → $lookup
        .Selecting specific fields → $project
        .Calculations → Totals, averages, counts, min/max, etc.

    .Uses an aggregation pipeline — a sequence of stages where:-
        .Each stage processes documents.
        .The output of one stage becomes the input for the next.
        .Each stage is represented as a JSON object with a specific operator.

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
    .Indexing is a technique in MongoDB used to speed up query performance by allowing the database to quickly locate matching documents, instead of scanning the entire collection.

    .Without Index: MongoDB performs a collection scan (checks every document).

    .With Index: MongoDB uses an index data structure (B-Tree) to quickly find matching records.

    .Default Index: _id field is automatically indexed.

    .Index Maintenance: Automatically updated when documents are inserted, updated, or deleted.

    .db.users.createIndex({ email: 1 }) // 1 = ascending, -1 = descending
    .db.orders.createIndex({ userId: 1, createdAt: -1 })

    .When NOT to Use Indexes
        .Too many indexes = slower writes (inserts/updates)
        .Unused indexes = wasted storage
        .Maintain only necessary indexes

    ..How to View Indexes :- .db.users.getIndexes()

    .How to Drop Indexes :- .db.users.dropIndex("email_1")

    .Use .explain() to analyze performance:-

        .db.users.find({ email: "john@example.com" }).explain("executionStats")
        .It will show if an index was used or if a full scan was performed.

Q. What is Projection?
Ans :-
    .Projection is the process of selecting only the required fields from a document instead of fetching the entire document.

    .Why use it?
        .Reduce data transfer → Less network load.
        .Improve performance → Especially with large documents.
        .Increase security → Avoid sending sensitive fields (e.g., passwords).

    .Example:
        .If a document has { name, email, password, age } but you only need name and email, projection will fetch just those fields.

        const cursor2 = collection.find({}).project({ name: 1 });
         const cursor2 = collection.find({}).project({ name: 1, _id: 0 }); //exclude id.

Q. What is transactions? How to perform transactions?
Ans :-
    .A transaction is a group of read/write operations executed as a single unit.
    .All succeed → Changes are committed.
    .Any fail → All changes are rolled back (ensuring data integrity).

    .Key Points:
        .Transactions are ACID-compliant in MongoDB (multi-document in replica sets/sharded clusters).
        .Use them for critical operations like payments, inventory updates, etc.

Q.DB operation:- 
Ans :-
    1. Create (or Switch) Database :- use studentDB
        .Switches to studentDB (or prepares to create it if it doesn’t exist).

    .Note: 
        .It will not appear in show dbs until it has at least one collection with data.
        .MongoDB is lazy in creating databases — it only physically creates them on disk after inserting data into a collection.

    2. Create a Collection (and Insert Data) :-
        
            .db.users.insertOne({ name: "Sushil" })
                .This creates the users collection if it doesn’t exist.
                .Inserts one document into it.

            .show collections :- Lists all collections in the current database.

--------------------------------------------------------------------------------------------------

1. Queries :-
------------

    1. Insert to the document :-
    --------------------------------
        .insertOne(doc) → Insert a single document.
        .insertMany([docs]) → Insert multiple documents at once.
        .insert() (legacy, not recommended) → Can insert one or many documents.

            Ex:- 
                db.studentDB.insertMany([
                    { name: "Anita", age: 30, city: "Mumbai" },
                    { name: "Raj", age: 28, city: "Kolkata" }
                ]);

    2. Find the document :-
    ------------------------

        .pretty() :- formats the output of your query to make it more readable.

        .find(filter) → Returns all matching documents. -> db.studentDB.find({ age: 25 });
        .findOne(filter) → Returns first matching document or null.
        .findById(id) (Mongoose only) → Shortcut for findOne({ _id: id }).

        .findByIdAndUpdate(id, update, options) → Update by _id. Returns old doc by default; { new: true } returns updated doc.

            Ex:- User.findByIdAndUpdate(id, { $set: { city: "Delhi" } }, { new: true });

        .findOneAndUpdate(filter, update, options) → Update first match; can use { upsert: true } to insert if not found.

        .findByIdAndDelete(id) → Delete by _id. Returns deleted doc or null.

        .findByIdAndRemove(id) → Same as above (older, less preferred).
        
        .findOneAndDelete(filter) → Delete first match.

        .findOneAndReplace(filter, replacement, options) → Replace entire document (must provide all fields).

            .Ex:- User.findOneAndReplace({ name: "Sushil" }, { name: "Sushil", age: 30 }, { new: true });

        .deleteOne(filter) → Deletes first matching document.
            .Returns { acknowledged: true, deletedCount: n }.

        .deleteMany(filter) → Deletes all matching documents.
            .If no match → deletedCount: 0.

        .updateOne(filter, update) → Updates first matching doc.

        .updateMany(filter, update) → Updates all matching docs.

        .replaceOne(filter, newDoc) → Replaces entire doc (retains _id).
            .Fields not in newDoc are removed.

        .create(doc | [docs]) → Create & save 1 or many docs.

        .save() → Save a single doc instance (new Model(data).save()).

        .bulkSave([docs]) → Save multiple doc instances efficiently.

        .bulkWrite([ops]) → Perform bulk insert/update/delete in one go.

        .lean() → Return plain JS objects (faster, no Mongoose methods).

        .exec() → Execute query explicitly, returns true Promise.

        .distinct(field) → Get unique values for a field.

        .exists(filter) → Check if doc exists (returns true/false).

        .countDocuments(filter) → Count matching docs.

        .estimatedDocumentCount() → Fast count for all docs.

        .inspect() → Debug doc content in readable form.

        .populate(field) → 
            .Fetch referenced doc(s) instead of _id.use only needed it can slow queries.

        .ref → Define reference to another collection in schema.

-------------------------------------------------------------------------------------------------

2. comparision operator :-
-------------------------
    .$eq   --> Equal to                                        --> { field: { $eq: value } }	
    .$gt   --> Greater than                                    --> { field: { $gt: value } }	
    .$gte  --> Greater than or equal                           --> { field: { $gte: value } }	
    .$in   --> Matches any value in array                      --> { field: { $in: [v1, v2] } }	
    .$lt   --> Less than                                       --> { field: { $lt: value } }	
    .$lte  --> Less than or equal                              --> { field: { $lte: value } }	
    .$ne   -->  Not equal (also matches missing field)         --> { field: { $ne: value } }	
    .$nin  --> Not in array / field missing                    --> { field: { $nin: [v1, v2] } }	

.Logical operator :-
---------------------
    .$and --> All conditions must match	                     --> { $and: [ { cond1 }, { cond2 } ] }	
    .$or  --> At least one condition matches	              --> { $or: [ { cond1 }, { cond2 } ] }	
    .$not --> Negates condition (also matches missing field)  --> { field: { $not: { <op> } } }	
    .$nor --> None of the conditions should match	          --> { $nor: [ { cond1 }, { cond2 } ] }


.Element Query :-
-----------------

    .$exists – Checks if a field exists (true/false).
    .$type – Matches fields of specified BSON type(s).
    .$expr – Allows expressions inside queries.
    .$mod – Matches where (field % divisor) == remainder.
        Ex:- { qty: { $mod: [ 4, 0 ] } }

.Array Query :-
----------------
    .$all         – Field array must contain all given elements.
    .$elemMatch   – At least one array element matches all conditions.
    .$size        – Matches arrays with exact length.


.Update query :-
----------------
        .Fields :-
            .$currentDate :- Sets field value to the current date or timestamp.
                             Default type: Date.

            .$inc :- Increments a numeric field by a given value. Negative for decrement.
                        Ex:- Syntax: { $inc: { field: amount } }


            .$min :- Updates field if given value is less than current.

            .$max :- Updates field if given value is greater than current.

            .$mul :- Multiplies a field’s value by a number.
    
            .$rename :- Renames a field in the document.

            .$set :- Sets/replaces the value of a field. Creates field if not present.

            .$setOnInsert :- Used only with upsert:true.
                             Sets field only on insert, not on updates.

            .$unset :- Removes a field from the document.

        .Array :-
        ---------
            .$ (Positional Operator) :- Updates first matching array element from query.
		                                Syntax: { $set: { "array.$": value } }

            .$[] (All Positional Operator) :- Updates all elements in an array.
		                                Syntax: { $inc: { "array.$[]": value } }

            .$[<identifier>] (Filtered Positional Operator) :-Updates array elements matching arrayFilters condition.

            .$addToSet :- Adds value to array if not already present.

            .$pop :- Removes first (-1) or last (1) element from array.

            .$pull :- Removes all array elements matching a value/condition.

            .$push :- Appends value(s) to array.

            .$pullAll :- Removes all specified values from array (exact match).

            .$each (Modifier) :- Used with $push / $addToSet to insert multiple values.

            .$position (Modifier) :- Used with $push + $each to insert at specific index.

            .$slice (Modifier) :- Used with $push + $each to limit array length.

            .$sort (Modifier) :- Used with $push + $each to sort array elements.

--------------------------------------------------------------------------------------------------

5. QUERY() contructor :-
-----------------------





