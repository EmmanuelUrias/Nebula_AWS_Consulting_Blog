import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import HomePage from './Pages/HomePage'
import Mobile_HomePage from './Mobile_Pages/Mobile_HomePage'
import Navbar from './Components/Navbar'
import Mobile_Navbar from './Mobile_Components/Mobile_Navbar'
import { useState } from 'react'

function App() {
  const isBigScreen = useMediaQuery('(min-width: 800px)')
  const [isOpened, setIsOpened] = useState<boolean>(false)
  return (
    <>
    <Router>
    {isBigScreen ? <Navbar /> : <Mobile_Navbar isOpened={isOpened} setIsOpened={setIsOpened}/>}
      <Routes>
        <Route path='/' element={isBigScreen ? <HomePage/> : <Mobile_HomePage />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
