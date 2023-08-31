import mongoose from "mongoose";
const clienteSchema=new mongoose.Schema({
    idCliente:{ 
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    nombre:{
        type:String,
        require:true,
    },
    idMedidor:{
        type:mongoose.Types.ObjectId,
        ref:'Medidor',
        require:true
    }
},{
    timestamps:true
})
export default mongoose.model('Cliente',clienteSchema);