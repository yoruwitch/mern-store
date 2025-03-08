import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${db.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // code 1 means exit with failure and 0 means it works
    }
};
