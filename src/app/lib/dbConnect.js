import mongoose from "mongoose";
const connection={};

async function dbConnect(){

    if(connection.isConnected){
        console.log("Already connected to database");
        return;
    }   

    try {
        const db = await mongoose.connect(process.env.DB_URI || "")
        console.log("Database connected successfully");

        connection.isConnected = db.connections[0].readyState;
        
    } catch (error) {
        console.log("Error connecting to database" + error.message);
        process.exit(1);
    }
}

export default dbConnect;
