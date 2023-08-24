import mongoose from "mongoose";
const lectoSchema=new mongoose.Schema({
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
    idsectores:{
        type:[Object],
        require:false
    },
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    cargo:{
        type:Boolean,
        require:true,
    },
    imgURL:{
        type:String,
        require:false,
    },
    contrato:{
        type:String,
        require:false,
    },
},{
    timestamps:true
})
export default mongoose.model('Lector',lectoSchema);