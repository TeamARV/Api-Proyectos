

const resolvers = {

    Query:{
        Usuarios: async (parent,args)=>{
            const usarios =[
                {
                    nombre :"andres"
                },
                {
                    nombre :"andres2"
                },
                {
                    nombre :"andres3"
                }
            ]
            return usarios

        }

    }

  
}

export {resolvers}