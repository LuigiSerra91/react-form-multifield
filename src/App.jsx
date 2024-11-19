import { useEffect, useState } from "react";
import data from './data/post.js'
import './App.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
/* 
Esercizio
Creare un semplice form con un campo input per il titolo di un articolo del blog. Al submit del form, mostrare la lista degli articoli inseriti, con la possibilità di cancellare ciascun articolo utilizzando un'icona.
BONUS
Implementare la funzionalità di modifica del titolo di un post.
Aggiungere più campi al form (ad es. lo stato di un articolo - draft, published - o l’autore)
Buon divertimento e confermate lettura come al solito



*/
function App() {
  const [task, setTask] = useState(data)
    const[newTask, setNewTask] = useState('')
    const[searchText, setSearchText] = useState('')
    const[filteredTasks, setFilteredTasks] = useState([])
    useEffect(() => {
        const filteredTasks = task.filter((task) => task.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
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
      <AppHeader />
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
      <AppFooter />
    </>
  )
}

export default App
