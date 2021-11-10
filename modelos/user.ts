import { Schema } from "mongoose";
import { model } from "mongoose";
import {Enum_rol} from "./enums"



interface User{
    correo:string;
    identificacion:string;
    nombreCompleto:string;
    rol:Enum_rol;
}

const userShema =  new Schema<User> 
({
        correo:{
            type:String,
            required:true,
        },

        identificacion:{
            type:String,
            required:true,
            unique:true,
        },

        nombreCompleto:{
            type:String,
            required:true,
        },

        rol:{
            type:String,
            required:true,
            enum:Enum_rol, 

        }

})


const userModel = model("user",userShema) // user nombre cualquiera
export  {userModel}