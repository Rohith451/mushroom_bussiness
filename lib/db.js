import mongoose from "mongoose";
import dotenv from 'dotenv'; // This line now resolves
dotenv.config();

const PORT = process.env.PORT || 3001;

const connectToDatabase = async () => {

    // Ensure process.env.MONGO_URI is set in your .env file
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('Successfully connected to MongoDB Atlas!');

        })
        .catch((error) => {
            console.error('Database connection failed:', error.message);
            process.exit(1); // Exit process with failure
        });

}


export default connectToDatabase;