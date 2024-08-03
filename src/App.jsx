import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { GlobalProvider } from '../src/context/GlobalStage'
import Home from '../views/Home'
import Form from '../views/Form'
import List from '../views/List'
import Footer from '../views/Footer'

function App() {

  return (      
 <GlobalProvider> 
    <BrowserRouter>
    <nav> 
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
  
        <li> 
          <Link to="/List" className='App'>
              Lista
          </Link>
        </li> 
        <li> 
          <Link to="/Footer" className='App'>
              Footer
          </Link>
        </li> 
      </ul>
     </nav>
      <Routes>
      <Route path='/Home' element= {<Home/>} />
      <Route path='/Form' element= {<Form/>} />
      <Route path='/List' element= {<List/>} />
      <Route path='/Footer' element= {<Footer/>} />

      </Routes>
      </BrowserRouter>
      </GlobalProvider>
  )   
}

export default App
