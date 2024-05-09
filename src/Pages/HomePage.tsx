import { Box, Typography, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Clouds from '../Components/Clouds'

function HomePage() {
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
              backgroundImage: "url('src/assets/Nebula AWS Logo Icon.png')",
              height: '300px',
              width: '489px',
              marginRight: '1.5rem'
          }}>
          </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '2rem'}}>
                <Typography variant='h4' sx={{marginTop: '1rem', marginLeft: '2rem', fontWeight: '400'}}>Nebula AWS Consulting</Typography>
                <Box onClick={() => navigate('/contactus')} sx={{
                    backgroundColor: '#FE783D', 
                    width: '9rem', 
                    height: '3rem', 
                    borderRadius: '8px', 
                    color: 'white', 
                    marginTop: '2rem', 
                    marginLeft: '2rem',
                    display: 'flex',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    cursor: 'pointer',
                    ':hover': {
                        scale: '1.05'
                    }
                    }}>
                        <Typography padding='0.5rem' fontSize={'1.3rem'} fontWeight={'400'}>Contact Us</Typography>
                </Box>
            </Box>
        </Box>
        <Box sx={{
            backgroundColor: '#1E1E1E',
            borderRadius: '8px',
            width: '400px',
            color: 'white',
            height: '440px'
        }}>
            <Typography sx={{padding: '1rem', marginLeft: '0.5rem', paddingBottom: '0rem', fontSize: '1.5rem', fontWeight: '300'}}>About Us</Typography>
            <Typography sx={{padding: '1.5rem', fontWeight: '300'}}>At Nebula AWS Consulting, we are dedicated to empowering businesses with innovative cloud solutions and strategic consulting services tailored to their unique needs.Our commitment to excellence, coupled with our deep industry knowledge and technical expertise, enables us to deliver exceptional results and drive sustainable success for our clients. Whether you're embarking on your cloud journey or seeking to maximize the value of your existing AWS environment, Nebula AWS Consulting is your trusted partner for transformative cloud solutions and strategic guidance.</Typography>
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
                height: '180px',
                borderRadius: '8px',
                objectFit: 'cover'
            },
            '&:hover': {
                scale: '1.02',
                cursor: 'pointer'
            }
        }}>
            <img id='business_img' src='src/assets/BusinessImage.png' alt='Business Blogs Image' />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingX: '1rem'
            }}>
                <Typography sx={{fontWeight: '300', fontSize: '1.4rem'}}>Business Blogs</Typography>
                <Box sx={{height: '0.3rem', width: '90%', display: 'flex', backgroundColor:'#D9D9D9', marginTop: '0rem', borderRadius: '8px'}}></Box>
                <Typography sx={{width: '200px', fontWeight: '300', marginTop: '0.5rem', textAlign: 'center'}}>Blogs related to business development and other business topics</Typography>
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
                height: '180px',
                borderRadius: '8px'
            },
            '&:hover': {
                scale: '1.02',
                cursor: 'pointer'
            }
            }}>
            <img id='AWS_img' src='src/assets/AWSImage.png' alt='Cloud Blogs Image' />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingX: '1rem'
            }}>
                <Typography sx={{fontWeight: '300', fontSize: '1.4rem'}}>Cloud Blogs</Typography>
                <Box sx={{height: '0.3rem', width: '90%', display: 'flex', backgroundColor:'#D9D9D9', marginTop: '0rem', borderRadius: '8px'}}></Box>
                <Typography sx={{width: '200px', fontWeight: '300', marginTop: '0.5rem', textAlign: 'center'}}>Blogs related to Cloud engineering with AWS</Typography>
            </Box>
        </Paper>
      </Box>
      <Clouds 
        cloudOneTop='-130px'
        cloudOneRight='500px'
        cloudTwoTop='0px'
        cloudTwoRight='120px'
        cloudThreeTop='-200px'
        cloudThreeRight='-470px'
      />
    </Box>
  )
}

export default HomePage