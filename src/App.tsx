import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import HomePage from './Pages/HomePage'
import Mobile_HomePage from './Mobile_Pages/Mobile_HomePage'
import Navbar from './Components/Navbar'
import Mobile_Navbar from './Mobile_Components/Mobile_Navbar'
import Footer from './Components/Footer'
import Mobile_Footer from './Mobile_Components/Mobile_Footer'
import BusinessPage from './Pages/BusinessPage'
import Mobile_BusinessPage from './Mobile_Pages/Mobile_BusinessPage'
import CloudPage from './Pages/CloudPage'
import Mobile_CloudPage from './Mobile_Pages/Mobile_CloudPage'
import BlogPage from './Pages/BlogPage'
import Mobile_BlogPage from './Mobile_Pages/Mobile_BlogPage'
import ContactUs from './Pages/ContactUs'
import Mobile_ContactPage from './Mobile_Pages/Mobile_ContactPage'
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
        <Route path='/business' element={isBigScreen ? <BusinessPage/> : <Mobile_BusinessPage />}/>
        <Route path='/business/:id' element={isBigScreen ? <BlogPage/> : <Mobile_BlogPage />}/>
        <Route path='/cloud' element={isBigScreen ? <CloudPage/> : <Mobile_CloudPage />}/>
        <Route path='/contactus' element={isBigScreen ? <ContactUs/> : <Mobile_ContactPage />}/>
      </Routes>
      {isBigScreen ? <Footer /> : <Mobile_Footer/>}
    </Router>
    </>
  )
}

export default App
