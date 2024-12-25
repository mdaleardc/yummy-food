
import { MongoClient } from 'mongodb';

// Replace <your_password> with the password you created and saved
const uri = 'mongodb+srv://ismailaliamot:c9pl9g37XIK63jJl@cluster.90dfv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';

const client = new MongoClient(uri);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Successfully connected to MongoDB!');
    return client;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the process if connection fails
  }
};

// Explicitly exporting the function as default
export default connectToDatabase;