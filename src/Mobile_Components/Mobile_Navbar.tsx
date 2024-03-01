import React from 'react'
import { useNavigate } from 'react-router-dom';

interface MobileNavbarProps {
    isOpened: boolean,
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Mobile_Navbar: React.FC<MobileNavbarProps> = ({isOpened, setIsOpened}) => {
    const navigate = useNavigate()

    const toggleIsOpened = () => {
        isOpened ? setIsOpened(false) : setIsOpened(true)
      }
      
      const closeMenu = (page: string) => {
        navigate(`${page}`)
        isOpened ? setIsOpened(false) : setIsOpened(true)
      }
  return (
    <>
      
    </>
  )
}

export default Mobile_Navbar