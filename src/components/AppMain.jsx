import { useEffect, useState } from "react";
import data from '../data/post.js'
export default function AppMain( ){
    const [task, setTask] = useState(data)
    const[newTask, setNewTask] = useState('')
    const[searchText, setSearchText] = useState('')
    const[filteredTasks, setFilteredTasks] = useState([])
    useEffect(() => {
        const filteredTasks = task.filter((task) => task.includes(searchText))
       setFilteredTasks(filteredTasks)
    },[task, searchText])


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

   function handleSearchForm(e) {
    e.preventDefault()
    //alert('Form sent')
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

                </form>s

                <form onSubmit={handleSearchForm}>

                    <div className="mb-3">
                        <input type="search"
                         name="searchText"
                          id="searchText"
                          aria-describedby="searchText"
                          placeholder="Search..."
                          value={searchText}
                          onChange={e => setSearchText(e.target.value)}
                           />
                    </div>
                </form>

                
                
                   <ul className="list-group">

                       {filteredTasks.map((task, index) =>  <li key={index} className="list-group-item d-flex justify-content-between">{task} <button onClick={handlerDeleteTask} dataIndex={index}>
                       <i className="bi bi-trash"></i>
                        </button></li> 
                    
                    )}

                   </ul>
            </div>
        </main>
        
        
        </>
    )
}