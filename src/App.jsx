import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { GlobalProvider } from '../src/context/GlobalStage'
import Home from '../views/Home'
import Form from '../views/Form'
import List from '../views/List'

function App() {

  return (
    <BrowserRouter>
      <ul>
        <li> 
          <Link to="/Home" className='App'>
              Home
          </Link>
        </li>
         <li> 
          <Link to="/Form" className='App'>
              Formulario
          </Link>
        </li>
        <GlobalProvider> 
        <li> 
          <Link to="/List" className='App'>
              Lista
          </Link>
        </li> 
        </GlobalProvider>
      </ul>
      <Routes>
      <Route path='/Home' element= {<Home/>} />
      <Route path='/Form' element= {<Form/>} />
      <Route path='/List' element= {<List/>} />


      </Routes>
      </BrowserRouter>
  )
}

export default App
