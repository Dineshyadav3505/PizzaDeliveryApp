import mongoose,{Schema} from "mongoose";
import dbConnect from "../../lib/dbConnect";

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    phone: { 
        type: Number, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    address: {
        type: String, 
        required: true,
    },
}, {timestamps: true});

export default mongoose.model("User", userSchema);
