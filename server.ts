import conexion from "./db/db";
import {userModel} from "./modelos/user"
import {Enum_rol} from "./modelos/enums"

const main = async () =>{
    await conexion();

    await userModel.create({                //el create es una promesa por lo tanto await
        correo:"algo@gmail.com",
        identificacion:"123",
        nombreCompleto:"TeamARV",
        rol:Enum_rol.admin

    }).then((u)=>{console.log("el esquema usuario fue creado :D " , u)}).catch((e)=>{console.log("rip no pudo crear el esquema :( ",e)})
};

const getdatos = async () =>{
    await conexion();

    await userModel.find().then((u)=>{console.log("trajo esto",u)})     // dentro del find puedo agregar props {nombreCompleto:"blabla"}

};





getdatos() //traer
main()  // crear