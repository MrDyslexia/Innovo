import mongoose from "mongoose";
const adminSchema=new mongoose.Schema({
    rut:{ 
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
},{
    timestamps:true
})
export default mongoose.model('Admin',adminSchema);