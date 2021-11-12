import {connect} from "mongoose"

const conexion = async () => {
    return await connect("mongodb+srv://InsertName:InsertName@cluster0.ecdfl.mongodb.net/InsertName?retryWrites=true&w=majority")
    .then( ()=>{
        console.log("Conexion OK :D")
    })
    .catch( (e)  =>{
        console.error("Rip algo fallo :(" , e )
    })
};




export default conexion;