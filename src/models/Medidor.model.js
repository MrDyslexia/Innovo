import mongoose from "mongoose";
const medidorSchema=new mongoose.Schema({
    idMedidor:{ 
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    idCliente:{
        type:mongoose.Types.ObjectId,
        ref:'Cliente',
        require:false,
    }
},{
    timestamps:true
})
export default mongoose.model('Medidor',medidorSchema);