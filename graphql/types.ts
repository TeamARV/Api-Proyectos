
import { gql } from "apollo-server-express";

const typeDefs = gql`
type usuario{
    nombre:String!
}


type Query{
    Usuarios:[usuario]
}
` 

export {typeDefs}