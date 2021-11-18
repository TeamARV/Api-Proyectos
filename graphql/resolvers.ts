import { projectModel } from "../modelos/project"
import { userModel } from "../modelos/user"


const resolvers = {

    Query:
    
    {

        Usuarios: async (parent,args)=>{
            const usarios = await userModel.find()
            return usarios

        },

         /*  */
         SoloUNusuario: async (parent,args) =>{
            const elUsuario = await userModel.findOne({_id:args._id})
            return elUsuario;
        },

        /*  */

        Proyectos: async (parent,args) =>{
            const losProyectos = await projectModel.find().populate("lider")
            return losProyectos;
        },
   

    },
    /* los xmen aqui :D */

    Mutation: {
        /*  */
        crearUsuario: async (parent,args)=>{

            const usuarioNew = await userModel.create(
                {
                    
                    correo:args.correo,  
                    identificacion:args.identificacion,
                    nombreCompleto:args.nombreCompleto,
                    rol:args.rol,


                })
                return usuarioNew;
        },
        /*  */
        delUsuario: async (parent,args) =>{
            const usuarioDeleteado = await userModel.findOneAndDelete({_id:args._id})
            return usuarioDeleteado;

        },

        /*  */

         /*  */
         editUsuario: async (parent,args) =>{
            const usuarioEdit = userModel.findByIdAndUpdate(args._id,{
                    correo:args.correo,  
                    identificacion:args.identificacion,
                    nombreCompleto:args.nombreCompleto,
                    rol:args.rol,
                    estado:args.estado
                    
            })
            return usuarioEdit;
        },

        /*  */

        crearProyecto: async (parent,args) => {
            const newProyecto = projectModel.create({
                nombre:args.nombre,
                presupuesto:args.presupuesto,
                fechaInicio:args.fechaInicio,
                fechaFin:args.fechaFin,
                estado:args.estado,
                fase:args.fase,
                lider:args.lider,
                objetivos:[{descripcion:"adslkfjgeneral", tipo:"GENERAL"}]
            })
            return newProyecto;
        }




    },
    
}

export {resolvers}