import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'


function App() {


  return (
    
      <Routes>
        <Route path='/home' element={ <Home />} />
        <Route path="/" element={ <LandingPage /> } />
      </Routes>
    
  )
}

export default App
