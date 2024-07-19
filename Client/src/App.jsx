import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Projectnav from './Compnents/Projectnav'
import Skillsec from './Compnents/Skillsec'
import Contactsec from './Compnents/Contactsec'
import Home from './Compnents/Home'

const App = () => {
  return (
    <>
    <div>
     <BrowserRouter>
      
       <Routes>
        <Route path='/' element={<Home/>}/>
      
        <Route path='/project' element={<Projectnav />}/>
        <Route path='/skills' element={<Skillsec/>} />
        <Route path='/contact' element={<Contactsec/>}/>
       </Routes>
     </BrowserRouter>
   
    </div>
   
    </>
  )
}

export default App
