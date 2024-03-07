import { Box, Typography, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate()
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '3rem',
        alignItems: 'center'
    }}>
      <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
      }}>
        <Box>
         <Box sx={{
              backgroundImage: "url('src/assets/Nebula_Img.png')",
              height: '300px',
              width: '479px',
              marginRight: '1.5rem'
          }}>
          </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '2rem'}}>
                <Typography variant='h4' sx={{marginTop: '1rem'}}>Nebula AWS Consulting</Typography>
                <Box sx={{backgroundColor: '#9E48FF', width: '7rem', height: '2.5rem', borderRadius: '8px', color: 'white', marginTop: '2rem', display: 'flex',alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}><Typography padding='0.25rem'>Contact Us</Typography></Box>
            </Box>
        </Box>
        <Box sx={{
            backgroundColor: '#1E1E1E',
            borderRadius: '8px',
            width: '400px',
            color: 'white',
            height: '440px'
        }}>
            <Typography variant='h6' sx={{padding: '1rem', marginLeft: '0.5rem', paddingBottom: '0rem'}}>About Us</Typography>
            <Typography sx={{padding: '1.5rem'}}>At Nebula AWS Consulting, we are dedicated to empowering businesses with innovative cloud solutions and strategic consulting services tailored to their unique needs.Our commitment to excellence, coupled with our deep industry knowledge and technical expertise, enables us to deliver exceptional results and drive sustainable success for our clients. Whether you're embarking on your cloud journey or seeking to maximize the value of your existing AWS environment, Nebula AWS Consulting is your trusted partner for transformative cloud solutions and strategic guidance.</Typography>
        </Box>
      </Box>
      <Box sx={{height: '0.3rem', width: '80%', display: 'flex', alignItems: 'center', backgroundColor:'#D9D9D9', marginTop: '4rem', borderRadius: '8px'}}></Box>
      <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '4rem'
      }}>
        <Paper onClick={() => navigate('/business')} sx={{
            display: 'flex',
            flexDirection: 'row',
            marginRight: '3rem',
            backgroundColor: '#F0EEEE',
            padding: '0.5rem',
            borderRadius: '8px',
            '& #business_img': {
                width: '220px',
                borderRadius: '8px',
                objectFit: 'cover'
            },
            '&:hover': {
                scale: '1.02',
                cursor: 'pointer'
            }
        }}>
            <img id='business_img' src='src/assets/Business_Img.png'></img>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingX: '1rem'
            }}>
                <Typography variant='h6'>Business Blogs</Typography>
                <Typography sx={{width: '200px'}}>Blogs related to business development and other business topics</Typography>
            </Box>
        </Paper>
        <Paper onClick={() => navigate('/cloud')} sx={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#F0EEEE',
            padding: '0.5rem',
            borderRadius: '8px',
            '& #AWS_img': {
                width: '220px',
                borderRadius: '8px'
            },
            '&:hover': {
                scale: '1.02',
                cursor: 'pointer'
            }
            }}>
            <img id='AWS_img' src='src/assets/AWS_Img.png'></img>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                paddingX: '1rem'
            }}>
                <Typography variant='h6'>Cloud Blogs</Typography>
                <Typography sx={{width: '180px'}}>Blogs related to Cloud engineering with AWS</Typography>
            </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default Hero