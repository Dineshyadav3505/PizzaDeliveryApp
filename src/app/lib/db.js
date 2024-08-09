import mongoose from "mongoose";

const mongoURI = process.env.DB_URI
const connection={};

async function connect(){
    if(connection.isConnected){
        console.log("Using existing connection");
        return;
    }   

    if(mongoose.connections.length > 0){
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected === 1){
            console.log("Using existing connection");
            return;
        }
        await mongoose.disconnect();
    }

    const db = await mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false,
        poolSize: 10,
        socketTimeoutMS: 30000,
        keepAlive: true,
        connectTimeoutMS: 20000,
    });
    console.log("new connection")
}

async function disconnect(){
    if(connection.isConnected){
        if (process.env.NODE_ENV !== 'production') {
            await connection.disconnect();
            connection.isConnected = false;
        }
        else{
            console.log("Not disconnecting in production mode");
        }
    }
}

const db = {connect, disconnect};
export default db; 