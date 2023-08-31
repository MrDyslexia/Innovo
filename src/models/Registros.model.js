import mongoose from "mongoose";
const RegistroSchema=new mongoose.Schema({
    idRegistro:{ 
        type:Number,
        require:true,
        unique:true
    },
    idDireccion:{
        type:mongoose.Types.ObjectId,
        ref:'Direccion',
        require:true
    },
    Descripcion:{
        type:String,
        require:flase
    },
    tipo:{
        type:String,
        enum:['Novedad','Revision'],
        default:'Novedad',
        require:true,
    },
    ImgReg:{
        type:String,
        require:false
    },
    estado:{
        enum:['Abierto','Cerrado'],
        default:'Abierto',
        require:false,
    }
},{
    timestamps:true
})
export default mongoose.model('Registro',RegistroSchema);