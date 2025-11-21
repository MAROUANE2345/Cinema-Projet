 
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Acceuil from './pages/Acceuil'
import Detail from './pages/Detail'
function App() {


  return (
     <div>
            <BrowserRouter>
            <Navbar/>
               <Routes>
                 <Route path='/' element={<Acceuil/>} />
                 <Route path='/detail' element={<Detail/>} />

               </Routes>
            
            </BrowserRouter>
     </div>
  )
}

export default App
