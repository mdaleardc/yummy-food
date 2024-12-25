import connectToDatabase from './mongodb-connection.js';

const run = async () => {
  const client = await connectToDatabase();
  const db = client.db('your_database_name'); // Replace with your database name
  const collection = db.collection('your_collection_name'); // Replace with your collection name

  try {
    // Insert a document
    const result = await collection.insertOne({ name: 'John', age: 30 });
    console.log('Document inserted:', result);
  } catch (error) {
    console.error('Error inserting document:', error);
  } finally {
    client.close(); // Close the connection
  }
};

run();