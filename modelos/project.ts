import { Schema } from "mongoose";
import { model } from "mongoose";
import { Enum_EstadoProyecto,
         Enum_Fase } from "./enums"
import { userModel } from "./user";



interface Project{
    nombre:string;
    presupuesto:number;
    fechaInicio:Date;
    fechaFin:Date;
    estado:Enum_EstadoProyecto;
    fase:Enum_Fase;
    lider:Schema.Types.ObjectId;
}

const projectShema =  new Schema<Project> 
({

    nombre:{
        type:String,
        required:true,
    },
    presupuesto:{
        type:Number,
        required:true,
    },
    fechaInicio:{
        type:Date,
        required:true,
    },
    fechaFin:{
        type:Date,
        required:true,
    },
    estado:{
        type:String,
        default:Enum_EstadoProyecto.inactivo
    },
    fase:{
        type:String,
        default:Enum_Fase.nulo
    },
    lider:{
        type: Schema.Types.ObjectId,
        require:true,
        ref:userModel,
    },

})


const projectModel = model("project",projectShema,"Proyectos") // project nombre cualquiera
export  {projectModel}