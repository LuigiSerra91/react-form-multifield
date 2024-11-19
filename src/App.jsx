import { useState } from 'react'

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
  

  return (
    <>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </>
  )
}

export default App
