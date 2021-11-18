enum Enum_rol{
    ESTUDIANTE = "ESTUDIANTE",
    LIDER ="LIDER",
    ADMIN ="ADMIN",
}

enum Enum_Estado{
    PENDIENTE = "PENDIENTE",
    AUTORIZADO ="AUTORIZADO",
    NOAUTORIZADO ="NOAUTORIZADO",
}

enum Enum_EstadoProyecto{
    ACTIVO = "ACTIVO",
    INACTIVO ="INACTIVO",
 
}

enum Enum_Fase{
    INICIADO = "INICIADO",
    DESARROLLO ="DESARROLLO",          
    TERMINADO ="TERMINADO",
    NULO = "null",
}

enum Enum_objetivo{
    GENERAL = "GENERAL",
    ESPECIFICO ="ESPECIFICO",          
 
}

enum Enum_estadoInscripcion{
    rechazada = "Rechazada",
    aceptada ="Aceptada",          
 
}


export {
    Enum_rol,
    Enum_Estado,
    Enum_EstadoProyecto,
    Enum_Fase,
    Enum_objetivo,
    Enum_estadoInscripcion
}