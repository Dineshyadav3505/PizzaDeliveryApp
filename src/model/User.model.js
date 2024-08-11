import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    firstname: { 
        type: String, 
        required: true, 
    },
    lastname: { 
        type: String, 
        required: true, 
    },
    phone: { 
        type: Number, 
        required: true, 
        unique: true 
    },

}, {timestamps: true});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
