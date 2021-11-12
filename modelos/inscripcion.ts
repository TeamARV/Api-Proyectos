import { Schema } from "mongoose";
import { model } from "mongoose";
import { projectModel } from "./project";
import { userModel } from "./user";
import {Enum_estadoInscripcion} from "./enums"


interface Inscripcion{ 
    proyecto:Schema.Types.ObjectId;
    creadoPor:Schema.Types.ObjectId;
    estado:Enum_estadoInscripcion;
    fechaEntrada:Date;
    fechaSalida:Date;

    

   
}

const inscripcionShema =  new Schema<Inscripcion> 
({


    estado:{
        type:String,
        enum:Enum_estadoInscripcion,
        required:true,
    },
    fechaEntrada:{
        type:Date,
        required:true,
    },
    fechaSalida:{
        type:Date,
        required:true,
    },

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


const inscripcionModel = model("inscripcion",inscripcionShema,"Inscripciones") // 
export {inscripcionModel}