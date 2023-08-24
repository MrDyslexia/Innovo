import Lector from '../models/Lectores.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'
export const register=async (req,res)=> {
    const {rut,password,nombre,cargo,idsectores,imgURL,contrato}=req.body
    try{
        const passwordHash = await bcrypt.hash(password,10)
        const newLector=new Lector({
            rut,
            password:passwordHash,
            nombre,
            cargo,
            imgURL,
            contrato,
            idsectores
        });
        const lectorSaved = await newLector.save()
        const token = await createAccessToken({id:newLector._rut});
        res.cookie('token',token);
        res.json({nombre:newLector.nombre});
    }catch(error){
        res.json({message:"error..."})
        console.log(error)
    }
};
export const login=async (req,res)=> {
    const {rut,password}=req.body
    try{

        const lectorFound= await Lector.findOne({rut});
        if(!lectorFound)return res.status(400).json({message:"Lector no encontrado"});

        const isMatch = await bcrypt.compare(password,lectorFound.password);
        if(!isMatch)return res.status(400).json({mesagge:"invalido"})
        const token = await createAccessToken({id:lectorFound.rut});
        res.cookie('token',token);
        res.json({message:"Inicio de sesion satisfactoria"});
    }catch(error){
        res.json({message:"error..."})
        console.log(error)
    }
};
export const logout=async (req,res)=> {
    res.cookie('token',"",{
        expires:new Date(0),
    });
    return res.sendStatus(200);
};
