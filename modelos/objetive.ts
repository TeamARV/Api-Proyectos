import { Schema } from "mongoose";
import { model } from "mongoose";
import { Enum_objetivo } from "./enums"
import { projectModel } from "./project";




interface Objetive{
    descripcion:string;
    tipo:Enum_objetivo;
    proyecto:Schema.Types.ObjectId;
   
}

const objectiveShema =  new Schema<Objetive> 
({

    descripcion:{
        type:String,
        required:true,
        
     
    },
    tipo:{
        type:String,
        enum:Enum_objetivo,
        required:true, 
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:projectModel,
        require:true,
       
    },


})


const objectiveModel = model("objective",objectiveShema,"Objetivos") // objective nombre cualquiera
export  {objectiveModel}