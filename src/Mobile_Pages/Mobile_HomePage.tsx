import { Box, Typography, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Clouds from '../Components/Clouds'

function Mobile_HomePage() {
  const navigate = useNavigate()

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '3rem',
        alignItems: 'center',
        justifyContent: 'center'
    }}>

        <Box>
         <Box sx={{
              backgroundImage: "url('src/assets/Mobile_Nebula_Img.png')",
              height: '210px',
              width: '340px',
              objectFit: 'cover'
          }}>
          </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant='h5' sx={{marginTop: '1rem'}}>Nebula AWS Consulting</Typography>
                <Box onClick={() => navigate('/contactus')} sx={{
                  backgroundColor: '#9E48FF', 
                  width: '9rem', 
                  height: '3rem', 
                  borderRadius: '8px', 
                  color: 'white', 
                  marginTop: '3rem', 
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  cursor: 'pointer'
                  }}>
                    <Typography padding='0.25rem'>Contact Us</Typography>
                </Box>
            </Box>
        </Box>
      <Box sx={{height: '0.3rem', width: '80%', display: 'flex', alignItems: 'center', backgroundColor:'#D9D9D9', marginTop: '4rem', borderRadius: '8px'}}></Box>
      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '4rem'
      }}>
        <Paper onClick={() => navigate('/business')} sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F0EEEE',
            padding: '0.5rem',
            borderRadius: '8px',
            '& #business_img': {
                width: '220px',
                borderRadius: '8px',
                objectFit: 'cover'
            }
        }}>
            <img id='business_img' src='src/assets/Business_Img.png'></img>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography variant='h6'>Business Blogs</Typography>
                <Typography sx={{width: '200px'}} align='center'>Blogs related to business development and other business topics</Typography>
            </Box>
        </Paper>
        <Paper onClick={() => navigate('/cloud')} sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F0EEEE',
            padding: '0.5rem',
            marginTop: '3rem',
            borderRadius: '8px',
            '& #AWS_img': {
                width: '220px',
                borderRadius: '8px'
            }
            }}>
            <img id='AWS_img' src='src/assets/AWS_Img.png'></img>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography variant='h6'>Cloud Blogs</Typography>
                <Typography sx={{width: '180px'}} align='center'>Blogs related to Cloud engineering with AWS</Typography>
            </Box>
        </Paper>
      </Box>
      <Clouds 
        cloudOneTop='-490px'
        cloudOneRight='120px'
        cloudTwoTop='-300px'
        cloudTwoRight='-120px'
        cloudThreeTop='-180px'
        cloudThreeRight='150px'
      />
    </Box>
  )
}

export default Mobile_HomePage