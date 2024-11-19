import { useState } from "react";
import data from '../data/post.js'
export default function AppMain(){
    const [task, setTask] = useState(data)
    const[newTask, setNewTask] = useState('')

    function addTask(e) {
        e.preventDefault()

        setTask([
            ...task,
            newTask
        ])

        setNewTask('')
    }
   function handlerDeleteTask(e) {
    const dataIndex = e.target.getAttribute('dataIndex')
    const newTask = task.filter((task, index) => dataIndex != index ) 

    setTask(newTask)
   }




    return (
        <>
        
        <main>
            <div className="container bg-warning p-1">
                <h1>Lista dei post</h1>

                <form onSubmit={addTask}>
                <div className="mb-3">
                     <label htmlFor="task" className='form-label'>Post</label>
                      <div className="input-group mb-3">
                      <input type="text" className='form-control' placeholder='Recipient'
                      aria-label='Recipiement username'  aria-labelledby='button-addon2'
                      value={newTask}
                      onChange={e => setNewTask(e.target.value)}/>
                    <button className='btn  bg-primary' type='submit' id='button-addon2'>Send</button>

            </div>
                           <small id='taskHelperId' className='form-text text-muted'>type your new post</small>
             </div>

                </form>

                
                
                   <ul className="list-group">

                       {task.map((task, index) =>  <li key={index} className="list-group-item d-flex justify-content-between">{task} <button onClick={handlerDeleteTask} dataIndex={index}>
                       <i className="bi bi-trash"></i>
                        </button></li> 
                    
                    )}

                   </ul>
            </div>
        </main>
        
        
        </>
    )
}