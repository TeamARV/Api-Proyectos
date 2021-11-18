
import { gql } from "apollo-server-express";



const typeDefs = gql`
""" sclares para tipos """
scalar Date
""" los enums """
enum Enum_Estado {
    PENDIENTE
    AUTORIZADO
    NOAUTORIZADO
} 

enum Enum_rol {
    ESTUDIANTE
    LIDER
    ADMIN
} 

enum Enum_EstadoProyecto{
    ACTIVO 
    INACTIVO 
}

enum Enum_Fase{
    INICIADO 
    DESARROLLO          
    TERMINADO 
    NULO 
}

enum Enum_objetivo{
    GENERAL 
    ESPECIFICO         
}

""" terminan los enums """
"""  """
type usuario{
    _id: ID!  """ ! ESE SIMBOLO ES PARA REQUERIDOS """ 
    correo:String!    
    identificacion:String!
    nombreCompleto:String!
    rol:Enum_rol!
    estado:Enum_Estado!
}
"""  """
type Objetivo {
    descripcion:String!
    tipo:Enum_objetivo!

}

type Proyecto{
    _id: ID!  """ ! ESE SIMBOLO ES PARA REQUERIDOS """ 
    nombre:String!
    presupuesto:Float!
    fechaInicio:Date!
    fechaFin:Date!
    estado:Enum_EstadoProyecto!
    fase:Enum_Fase!
    lider:usuario!
    objetivos: [Objetivo]
}



type Query{
    Usuarios:[usuario]
    SoloUNusuario(_id:String!):usuario
    Proyectos:[Proyecto]

}

type Mutation{

    crearUsuario(
    correo:String!    
    identificacion:String!
    nombreCompleto:String!
    rol:Enum_rol

    ):usuario

    """ más xmen """

    delUsuario(
        _id:String!
    ):usuario


    editUsuario(
    _id:String
    correo:String  
    identificacion:String
    nombreCompleto:String
    rol:Enum_rol
    estado:Enum_Estado
    ):usuario



}




`; 

export {typeDefs}