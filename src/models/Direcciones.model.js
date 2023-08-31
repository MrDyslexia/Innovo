import mongoose from "mongoose";
//ni puta idea de como poner el auto incrementable
const direccionSchema=new mongoose.Schema({
    nombre:{
        type:String,
        require:true,
    },
    poblacion:{
        type:String,
        require:false,
    },
    dep:{
        type:String,
        require:false,
    },
    blk:{
        type:String,
        require:flase,
    },
    idsector:{
        type:mongoose.Types.ObjectId,
        ref:'Sector',
        require:true,
    }
},{
        timestamps:true
})
export default mongoose.model('Direccion',direccionSchema);