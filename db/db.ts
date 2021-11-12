import {connect} from "mongoose"




const conexion = async () => {
    return await connect(process.env.DATABASE_URL)
    .then( ()=>{
        console.log("Conexion a atlas mongo  OK OK :D")
    })
    .catch( (e)  =>{
        console.error("Rip algo fallo :(" , e )
    })
};




export default conexion;