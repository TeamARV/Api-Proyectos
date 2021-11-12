import { Schema } from "mongoose";
import { model } from "mongoose";
import { projectModel } from "./project";
import { userModel } from "./user";




interface Avance{ 
    proyecto:Schema.Types.ObjectId;
    fecha:Date;
    descripcion:string;
    observaciones:[string]
    creadoPor:Schema.Types.ObjectId;

   
}

const avanceShema =  new Schema<Avance> 
({

    
    fecha:{
        type:Date,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    observaciones:[
        {
            type:String,
        }
    ],
    
    
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:projectModel,
        required:true,
    },

    creadoPor:{
        type:Schema.Types.ObjectId,
        ref:userModel,
        required:true,

    }



});


const avanceModel = model("avance",avanceShema,"Avances") // 
export  {avanceModel}