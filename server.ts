import conexion from "./db/db";
import {userModel} from "./modelos/user"
import { projectModel } from "./modelos/project";
import { objectiveModel } from "./modelos/objetive";
import {Enum_rol , 
        Enum_objetivo,
        Enum_estadoInscripcion} from "./modelos/enums"


// crud users

const main = async () =>{
    await conexion();
    await userModel.create({                //el create es una promesa por lo tanto await
        correo:"algo@gmail.com",
        identificacion:"123fg",
        nombreCompleto:"TeamARV",
        rol:Enum_rol.admin,

    })
    .then((u)=>{console.log("el esquema usuario fue creado :D " , u)})
    .catch((e)=>{console.log("rip no pudo crear el esquema :( ",e)})
};


const getdatos = async () =>{
    await conexion();
    await userModel.find()
    .then((u)=>{console.log("trajo esto",u)})     // dentro del find puedo agregar props {nombreCompleto:"blabla"}
    .catch((e)=>{console.log("No trajo nada :( ",e)})

};

const update = async () =>{
    await conexion();
    await userModel.findOneAndUpdate({correo:"algo@gmail.com"},{identificacion:"3231"})
    .then((u)=>{console.log("update ok :D " , u)})
    .catch((e)=>{console.log("no update:( ",e)})
};


const deletear = async () =>{
    await conexion();
    await userModel.findOneAndDelete({correo:"algo@gmail.com"})
    .then((u)=>{console.log("delete ok :D " , u)})
    .catch((e)=>{console.log("no delete :( ",e)})
};

/* deletear()
update()
getdatos()  
main()    */

// crud projects


const CrearProyecto = async () =>{
    await conexion();
    await projectModel.create({                //el create es una promesa por lo tanto await
        nombre:"proyecto123666",
        presupuesto:500995,
        fechaInicio: Date.now(),
        fechaFin: new Date ("2025/12/30"),
        lider:"618c3f94a09c64d8d6adb9bd",
        objetivos:[
        {
            descripcion:"objetivo1 general",
            tipo:Enum_objetivo.general,
        },
        {
            descripcion:"objetivo1 espe",
            tipo:Enum_objetivo.especifico,
        }
    
    ]

    })
    .then((u)=>{console.log("el esquema proyecto fue creado :D " , u)})
    .catch((e)=>{console.log("rip no pudo crear el esquema proyecto :( ",e)})
};


const ObtenerProyecto = async () =>{
    await conexion();
    await projectModel.find({nombre:"proyecto123666"}).populate("lider")  //  ejemplo   populate('author', 'name'). // only return the Persons name  // otra forma { path: 'lider', select: 'correo' }
    /* .then((u)=>{console.log("trajo esto",JSON.stringify( u[0].objetivos ) )})  */    // dentro del find puedo agregar props {nombreCompleto:"blabla"}
    .then((u)=>{console.log("trajo esto",u )}) 
    .catch((e)=>{console.log("No trajo nada :( ",e)})

};


/* ObtenerProyecto()   */
/*  CrearProyecto()  */

// crud objetivos

const CrearObjetivo = async () =>{
    await conexion();
    await objectiveModel.create({                //el create es una promesa por lo tanto await
        descripcion:"blbablabla",
        tipo:Enum_objetivo.general,
        proyecto:"618c543cc49496cbf3c411e8"

    })
    .then((u)=>{console.log("el esquema proyecto fue creado :D " , u)})
    .catch((e)=>{console.log("rip no pudo crear el esquema proyecto :( ",e)})
};

/* CrearObjetivo() */
