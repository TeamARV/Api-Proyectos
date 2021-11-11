enum Enum_rol{
    estudiante = "Estudiante",
    lider ="Lider",
    admin ="Admin"
}

enum Enum_Estado{
    pendiente = "Pendiente",
    autorizado ="Autorizado",
    noautorizado ="No autorizado"
}

enum Enum_EstadoProyecto{
    activo = "Activo",
    inactivo ="Inactivo",
 
}

enum Enum_Fase{
    iniciado = "Iniciado",
    desarrollo ="Desarrollo",          
    terminado ="Terminado",
    nulo = "null",
}

enum Enum_objetivo{
    general = "General",
    especifico ="Especifico",          
 
}


export {
    Enum_rol,
    Enum_Estado,
    Enum_EstadoProyecto,
    Enum_Fase,
    Enum_objetivo
}