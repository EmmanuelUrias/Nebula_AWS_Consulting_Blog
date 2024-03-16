import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

function Mobile_Footer() {
  return (
    <>
      <Box sx={{
        display: 'flex',
        marginTop: '2rem',
        padding: '2rem',
        backgroundColor: '#D9D9D9',
        justifyContent: 'center'
      }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            '& > *': {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
          }
        }}>
            <Box sx={{
              '& #footerTitle': {
                fontSize: '20px',
                fontWeight: '300'
              },
              '& #footerSubtext': {
                fontSize: '14px',
                fontWeight: '300'
              }
              }}>
              <Typography align="center" id='footerTitle'>Nebula AWS Consulting <br/> <Typography id='footerSubtext'>N.A.C © 2024</Typography></Typography>
            </Box>
            <Box sx={{marginTop: '2rem', flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <InstagramIcon fontSize="large"/>
              <LinkedInIcon fontSize="large"/>
              <CloudQueueIcon fontSize="large"/>
            </Box>
        <Box sx={{
          justifyContent: 'space-evenly',
          marginTop: '1.5rem',
          '& > *': {
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            marginY: '1.5rem'
          }
        }}>
            <Box sx={{
              '& > *': {
                marginY: '0.3rem'
              }
            }}>
              <Typography fontSize={'1.2rem'} fontWeight={'300'}>Contact Info</Typography>
              <Typography fontSize={'1.1rem'} fontWeight={'300'} mt={'0.7rem'}>Call Us</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'}>702-410-0057</Typography>
              <Typography fontSize={'1.1rem'} fontWeight={'300'} mt={'0.7rem'}>Email</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'}>emmanuelurias60@nebulaawsconsulting.com</Typography>
            </Box>
            <Box sx={{
              marginTop: '1rem',
              '& > *': {
                marginY: '0.4rem'
              }
              }}>
              <Typography fontSize={'1.2rem'} fontWeight={'300'}>Pages</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'}>Home</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'}>Business</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'}>Cloud</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'}>Contact Us</Typography>
            </Box>
            <Box sx={{marginTop: '1rem'}}>
              <Typography fontSize={'1.2rem'} fontWeight={'300'}>Other Websites</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'} mt={'1rem'}>To be continued...</Typography>
            </Box>
        </Box>
        </Box>
      </Box>
    </>
  )
}
export default Mobile_Footer