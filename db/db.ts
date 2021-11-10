import {connect} from "mongoose"

const conexion = async () => {
    return await connect("string de conexion aqui :D ")
    .then( ()=>{
        console.log("Conexion OK :D")
    })
    .catch( (e)  =>{
        console.error("Rip algo fallo :(" , e )
    })
};




export default conexion;