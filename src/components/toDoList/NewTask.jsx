import React, { useRef, useContext, useEffect} from 'react'
import { InfoContext } from '../../contexts/Context';
import { useForm } from "react-hook-form";
import Card from './Card';

const NewTask = () => {
  const [tasks, setTasks, editName, setEditName, editFecha, setEditFecha] = useContext(InfoContext);
  /*const taskName= useRef('');
  const fechaFin = useRef('');
  const responsable = useRef('')
  const saveTask =(e) =>{
    e.preventDefault();
    setTasks([...tasks,{
      id: idTask,
      nombre: taskName.current.value,
      fecha: fechaFin.current.value,
      responsable: responsable.current.value,
    }])
    console.log(idTask)
console.log(tasks)
  }*/
  const { register, handleSubmit, setValue, formState:{errors} } = useForm({ /*defaultValues :{id:{contar}}*/
  });

  if(editName.length>0 && editFecha.length>0){
    
    
    /*setValue('id', edit.id);*/
    setValue('nombre', editName);
    setValue('fecha', editFecha);
   /* setValue('fecha', edit.fecha);
    setValue('responsable', edit.responsable);*/

  }
  /*let idTask= tasks.length+1 ;*/
  

  const sendData = (item) =>{
    console.log(item);
    if(editName.length>0 && editFecha.length>0){
      console.log("editando")
      tasks.map((task) => {
				if (task.nombre == item.nombre) { /*No edita */
          console.log("aqui entra tb")
					task.data = item.data;
				}
				return task;
			})
    }else{
      if(!tasks.includes(item.nombre)){ /*No funciona el condicional */
        setTasks(tasks.concat(item))
        
        /*console.log("espacio")
        console.log(tasks)*/
      }
    }
    
  }
  
 
  return (
    <div>
      
      <form onSubmit={handleSubmit(sendData)}>
       <input type='text' style={{display:"none"}} {...register('id')}></input>
        <input type= "text" placeholder= "nombre de la tarea" {...register('nombre',{ required: true})}></input>
        <input type = "text" placeholder = "fecha" {...register('fecha')}></input>
        <input type = "text" placeholder = "responsable de la tarea" {...register('responsable')}></input>
        <input type='submit' value="Guardar"></input>
        <br/>
        {errors.nombre?.type === "required" && <span style ={{color:"red"}}>  El campo no puede estar vacío </span>}
      </form> 
      
      {tasks.map((task) => 
        < Card card ={task} key={task.nombre} />
      )}
                        
             
    </div>
    
  )
}

export default NewTask

{/*}  <form onSubmit={(e)=>saveTask(e)}>
        <h3>Registro de nuevas tareas</h3>
        <input type= "text" ref={taskName} placeholder= "nombre de la tarea"></input>
        <input type = "text" ref= { fechaFin } placeholder = "fecha"></input>
        <input type = "text" ref={ responsable } placeholder = "responsable de la tarea"></input>
        <button type= "submit"> Guardar tarea </button>
        </form>*/}

