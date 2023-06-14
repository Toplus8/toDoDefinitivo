import React, { useContext } from 'react'
import { InfoContext } from '../../contexts/Context';

const Card = ({card}) => {
  const [tasks, setTasks, editName, setEditName,editFecha, setEditFecha] = useContext(InfoContext);
  const deleteTask= (card)=>{
    const updatedTasks = [...tasks];
    const result = updatedTasks.filter(task => task.nombre != card.nombre);
    setTasks(result)
  }
  /*const resultado = animales.filter(animal => animal != 'oso'); */
  const editTask = (card)=>{
    setEditName(card.nombre);
    setEditFecha(card.fecha);
    /*console.log (card.nombre)*/
    console.log(editName)
       
  }
  return (
    <div>
        Tarea: {card.nombre}
        fecha: {card.fecha}
        Responsable: {card.responsable}
        <button onClick= {()=>editTask(card)}> Editar tarea </button>
        <button onClick= {()=>deleteTask(card)}> Borrar tarea </button>
    </div>
  )
}

export default Card