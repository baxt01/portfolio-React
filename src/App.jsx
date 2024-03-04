import { useState } from 'react'
import Header from './components/Header.jsx'
import Contact from './components/pages/Contact.jsx'
// import './App.css'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    
     <Contact />
    </>
  )
}

// export default App
