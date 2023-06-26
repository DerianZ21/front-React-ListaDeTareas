import React from "react";
import "../hojas-de-estilo/Tarea.css"
import { AiFillDelete } from "react-icons/ai";

function Tarea ( {texto, completada, id, completarTarea, eliminarTarea}){
  return (
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
      <div 
        onClick={()=>completarTarea(id)}
        className="tarea-texto">
        {texto}  
      </div>
      <div 
        onClick={()=>eliminarTarea(id)}
        className="tarea-contenedor-iconos">
        <AiFillDelete className="tarea-icono"/>
      </div>
    </div>
  )
}

export default Tarea