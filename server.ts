
import { ApolloServer } from "apollo-server-express";
import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import conexion from "./db/db";
import {typeDefs} from "./graphql/types"
import {resolvers} from "./graphql/resolvers"



dotenv.config(); // para poder usar las variables de entorno en todo

const server = new ApolloServer(
    {
    // los resovers and types
       typeDefs:typeDefs,
       resolvers:resolvers,
    }
    );

    const app = express();

    app.use(express.json());  // middleware
    app.use(cors()) // middleware del cors

    app.listen({port:process.env.PORT || 4001}, async ()=> {

        await conexion(); // se importa la funcion de conexion a Base de datos 
        await server.start(); // arranca server de apollo

        server.applyMiddleware({app})  // se aplican lo middleware definidos de express
        console.log("servidor grapql entro")

    });


