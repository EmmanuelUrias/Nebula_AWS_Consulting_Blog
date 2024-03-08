import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
        <Box>
        <Box sx={{
            width: '100%',
            height: '3.5rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: '1rem',
            justifyContent: 'space-between',
            '& > *': {
                cursor: 'pointer'
            },
            '& #navTitle': {
                fontSize: '1.5rem',
                marginLeft: '2rem',
            }
        }}>
            <Box id='navTitle' onClick={() => navigate('/')}>Nebula AWS <br/>Consulting Blogs</Box>
            <Box onClick={toggleIsOpened} sx={{
                marginRight: '1.5rem',
                '& > *': {
                    '&:hover': {color: '#4D415F'}
                }
            }}>
            { isOpened ?
                <CloseIcon sx={{fontSize: '3rem'}}/>
                :
                <Box sx={{'& > *:hover': {backgroundColor: '#4D415F'}}}>
                    <Paper elevation={3} sx={{ height: '0.3rem', width: '3rem', backgroundColor: '#1E1E1E', borderRadius: '2rem', marginBottom: '0.3rem' }}></Paper>
                    <Paper elevation={3} sx={{ height: '0.3rem', width: '3rem', backgroundColor: '#1E1E1E', borderRadius: '2rem', marginBottom: '0.3rem' }}></Paper>
                    <Paper elevation={3} sx={{ height: '0.3rem', width: '3rem', backgroundColor: '#1E1E1E', borderRadius: '2rem' }}></Paper>
                  </Box>
            }
            </Box>
        </Box>
            {isOpened ?
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                fontSize: '1.2rem',
                paddingY: '1rem',
                marginTop: '1rem',
                '& > *': {
                    marginBottom: '1rem'
                }
            }}>
              <Box onClick={() => closeMenu('/')}>Home</Box>
              <Box onClick={() => closeMenu('/business')}>Business</Box>
              <Box onClick={() => closeMenu('/cloud')}>Cloud</Box>
              <Box onClick={() => closeMenu('/contactus')}>Contact Us</Box>
            </Box>
            : ''
        }
        </Box>
      )
}

export default Mobile_Navbar