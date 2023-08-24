import mongoose from "mongoose";
const rutaSchema=new mongoose.Schema({
    idRuta:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    sectore:{
        type:[Object]
    }
},{
    timestamps:true
})
export default mongoose.model('Ruta',rutaSchema);