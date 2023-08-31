import Trabajador from '../models/Trabajadores.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'
export const register=async (req,res)=> {
    const {rut,password,nombre,cargo,idsectores,imgURL,contrato}=req.body
    try{
        const passwordHash = await bcrypt.hash(password,10)
        const newTrabajador=new Trabajador({
            rut,
            password:passwordHash,
            nombre,
            cargo,
            imgURL,
            contrato,
            idsectores
        });
        const TrabajadorSaved = await newTrabajador.save()
        const token = await createAccessToken({id:newTrabajador._rut});
        res.cookie('token',token);
        res.json({nombre:newTrabajador.nombre});
    }catch(error){
        res.json({message:"error..."})
        console.log(error)
    }
};
export const login=async (req,res)=> {
    const {rut,password}=req.body
    try{

        const TrabajadorFound= await Trabajador.findOne({rut});
        if(!TrabajadorFound)return res.status(400).json({message:"Trabajador no encontrado"});

        const isMatch = await bcrypt.compare(password,TrabajadorFound.password);
        if(!isMatch)return res.status(400).json({mesagge:"invalido"})
        const token = await createAccessToken({id:TrabajadorFound.rut});
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
