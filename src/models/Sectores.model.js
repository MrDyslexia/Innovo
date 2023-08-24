import mongoose from "mongoose";
const sectorSchema=new mongoose.Schema({
    idsectores:{
        type:String,
        require:false,
        trim:true,
        unique:true
    },
    idRuta:{
        type:[Object],
        require:true,
    },
    sucursal:{
        type:String,
        require:false
    },
    locomocion:{
        type:Number,
        require:true,
    },
},{
    timestamps:true
})
export default mongoose.model('Sector',sectorSchema);