import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import Create from './components/Create/Create'


function App() {


  return (
    
      <Routes>
        <Route path='/home' element={ <Home />} />
        <Route path="/" element={ <LandingPage /> } />
        <Route path= "/dog/:id" element= { <Detail /> } />
        <Route path="/create" element= { <Create /> } />
      </Routes>
    
  )
}

export default App
