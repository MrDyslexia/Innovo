import mongoose from "mongoose";
const rutaSchema=new mongoose.Schema({
    idRuta:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    sector:[{type:mongoose.Types.ObjectId,ref:'Direccion'}],
},{
    timestamps:true
})
export default mongoose.model('Ruta',rutaSchema);