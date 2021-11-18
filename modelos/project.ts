import { Schema } from "mongoose";
import { model } from "mongoose";
import { Enum_EstadoProyecto,
         Enum_Fase, 
         Enum_objetivo} from "./enums"
import { userModel } from "./user";



interface Project{
    nombre:string;
    presupuesto:number;
    fechaInicio:Date;
    fechaFin:Date;
    estado:Enum_EstadoProyecto;
    fase:Enum_Fase;
    lider:Schema.Types.ObjectId;
    objetivos: [{
        descripcion: String;
        tipo: Enum_objetivo;

    }]
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
        default:Enum_EstadoProyecto.INACTIVO,
    },
    fase:{
        type:String,
        default:Enum_Fase.NULO,
    },
    lider:{
        type: Schema.Types.ObjectId,
        required:true,
        ref:userModel,
    },
    objetivos:[{
        descripcion:{
            type:String,
            required:true,
        },
        
        tipo:{
            type:String,
            enum:Enum_objetivo,
        },
        
    }]

})


const projectModel = model("project",projectShema,"Proyectos") // project nombre cualquiera
export  {projectModel}