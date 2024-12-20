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
    image: '',
    description: '',
    category: '', // *modifica temporanea?
    tags: [],
  available: false
}


function App() {
  const [task, setTask] = useState(data)
    
    const[formData, setFormData] = useState(initialFormdata)
   

    
   function handlerDeleteTask(e) {
    const dataIndex = Number(e.target.getAttribute('dataIndex'))
    const newTask = task.filter((task, index) => dataIndex != index ) 

    setTask(newTask)
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
          <select
                                id="selectInput"
                                name="category"
                                placeholder="Seleziona categoria post"
                                value={formData.category}
                                onChange={handleFormField}>
                                <option value="1">
                                    categoria 1
                                </option>
                                <option value="2">
                                    categoria 2
                                </option>
                                <option value="3">
                                    categoria 3
                                </option>
                                <option value="4">
                                    categoria 4
                                </option>
                                <option value="5">
                                    categoria 5
                                </option>
                            </select>

                                {/* input checkbox tags */}
                                <input type="checkbox"
                                id="checkInput1"
                                name="tag1"
                                value={formData.tags}
                                onChange={handleFormField} />
                            <label>
                                Tag1
                            </label>
                            <input type="checkbox"
                                id="checkInput2"
                                name="tag2"
                                value={formData.tags}
                                onChange={handleFormField} />
                            <label>
                                Tag2
                            </label>
                            <input type="checkbox"
                                id="checkInput3"
                                name="tag3"
                                value={formData.tags}
                                onChange={handleFormField} />
                            <label>
                                Tag3
                            </label>
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

             

              

                
                
                <ul>
                            {task.map((post, index) => <li key={index}>
                                <div className="container">
                                    <p>
                                        {post.name}
                                    </p>
                                    <img src={post.image} alt={post.name} />
                                    <p>
                                        {post.description}
                                    </p>
                                    <p>
                                        {post.category}
                                    </p>
                                    <p>
                                        {post.tags}
                                    </p>
                                    <p>
                                        {post.available ? 'post available' : 'post not available'}
                                    </p>
                                </div>
                                <button onClick={handlerDeleteTask} dataIndex={index}>
                                    press
                                </button>
                            </li>)}
                        </ul>

            </div>

            
      </main>
      <AppFooter />
    </>
  )
}

export default App
