import { useState } from 'react'


import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import Footer from './component/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <Navbar/>
    
    <Home/>
  
    <Footer/>
        </div>
       
    </>
  )
}

export default App
