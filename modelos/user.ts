import { Schema } from "mongoose";
import { model } from "mongoose";
import {Enum_rol,Enum_Estado} from "./enums"



interface User{
    correo:string;
    identificacion:string;
    nombreCompleto:string;
    rol:Enum_rol;
    estado:Enum_Estado;
}

const userShema =  new Schema<User> 
({
        correo:{
            type:String,
            required:true,
            validate:{validator: (email)=>
                {
                    if(!email.includes("@")) return false;
                }
            }
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

        },
        estado:{
            type:String,
            required:true,
            default:Enum_Estado.pendiente,
        }


})


const userModel = model("user",userShema,"Usuarios") // user nombre cualquiera
export  {userModel}