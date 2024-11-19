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

const initialFormdata = {
  name: '',
  description: '',
  content: '',
  image: '',
  available: false
}


function App() {
  const [task, setTask] = useState(data)
    const[newTask, setNewTask] = useState('')
    const[searchText, setSearchText] = useState('')
    const[filteredTasks, setFilteredTasks] = useState([])

    const[formData, setFormData] = useState(initialFormdata)
    

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

  function handleFormField(e) {
    //console.log(e.target);

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log('Form sent', formData);
    const newItem = {
      id: Date.now(),
      ...formData
    }
    console.log(newItem);

    setTask([
      newItem,
      ...task
    ])

    setFormData(initialFormdata)
  }
  return (
    <>
      <AppHeader />
      <main>

      <div className="p5 mb-4">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Aggiungi il tuo post</h1>
                <p className="col-md-8 fs-4">
                  questo post......
                </p>
                <button className="btn btn-primary btn-lg" type="button" popovertarget='off-canvas-form'>
                  <i className="bi bi-plus"></i> Add
                </button>

              </div>
            </div>

            <div id='off-canvas-form' popover="true" className="bg-dark p-3 border-0 shadow-lg text-white" style={{minHeight: "100dvh"}}>
            <div className="d-flex gap-5">
          <h3>Add a new post</h3>
          <button className="btn bg-primary" type="button" popovertarget="off-canvas-form" popovertargetaction="hide">
            <i className="bi bi-x"></i> Close
          </button>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">name</label>
            <input type="text" 
            className="form-controll" 
            id="name"
            name="name"
            aria-describedby="namehelper"
            placeholder="ugo"
            required
            value={formData.name}
            onChange={handleFormField}
            />
          </div>
            
          <div className="mb-3">
            <label htmlFor="image" className="form-label">image</label>
            <input type="text" 
            className="form-controll" 
            id="image"
            name="image"
            aria-describedby="imagehelper"
            placeholder="add image"
            required
            value={formData.image}
            onChange={handleFormField}
            />
          </div>
           
          <div className="mb-3">
            <label htmlFor="content" className="form-label">content</label>
            <input type="text" 
            className="form-controll" 
            id="content"
            name="content"
            aria-describedby="contenthelper"
            placeholder="contenuto"
            required
            value={formData.content}
            onChange={handleFormField}
            />
          </div>


          
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>

            <textarea
              className="form-control"
              name="description"
              id="description"
              rows="5"
              value={formData.description}
              onChange={handleFormField}
            ></textarea>
          </div>
           
          <div className="form-check mb-3">
            <input
              id="available"
              name='available'
              type="checkbox"
              className="form-check-input"
              value={formData.available}
              onChange={handleFormField}

            />
            <label className="form-check-label" htmlFor=""> Available </label>
          </div>


          <button
            type="submit"
            className="btn btn-secondary"
          >
            <i className="bi bi-floppy"></i> Save
          </button>


         
        </form>
            </div>
          

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

                       {filteredTasks.map((task, index) =>  <li key={index} className="list-group-item d-flex justify-content-between">{task}  <button onClick={handlerDeleteTask} dataIndex={index}>
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
