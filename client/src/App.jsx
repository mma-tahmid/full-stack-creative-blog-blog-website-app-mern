
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {


  return (
    <>

      <Navbar />



      <Routes>

        <Route exact path='/' element={<HomePage />}> </Route>


      </Routes>


      <Footer />

    </>
  )
}

export default App
