import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

function Footer() {
  return (
    <>
      <Box sx={{
        display: 'flex',
        marginTop: '4rem',
        padding: '2rem',
        height: '500px',
        backgroundColor: '#D9D9D9',
        justifyContent: 'center'
      }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            '& > *': {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
          }
        }}>
        <Box>
            <Box sx={{
              marginLeft: '19rem',
              '& #footerTitle': {
                fontSize: '1.4rem',
                fontWeight: '300'
              },
              '& #footerSubtext': {
                fontSize: '14px',
                fontWeight: '300'
              }
              }}>
              <Typography align="center" id='footerTitle'>Nebula AWS Consulting <br/> <Typography id='footerSubtext'>N.A.C © 2024</Typography></Typography>
            </Box>
            <Box sx={{
              marginLeft: '10rem',
              marginRight: '-5rem',
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '20%',
              '& > *': {
                marginX: '0.7rem'
              }
            }}
              >
              <InstagramIcon fontSize="large"/>
              <LinkedInIcon fontSize="large"/>
              <CloudQueueIcon fontSize="large"/>
            </Box>
        </Box>
        <Box sx={{
          justifyContent: 'space-evenly',
          marginTop: '3rem',
          '& > *': {
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center'
          }
        }}>
            <Box>
              <Typography fontSize={'1.2rem'} fontWeight={'300'}>Contact Info</Typography>
              <Typography fontSize={'1.1rem'} fontWeight={'300'} mt={'0.7rem'}>Call Us:</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'}>702-410-0057</Typography>
              <Typography fontSize={'1.1rem'} fontWeight={'300'} mt={'0.7rem'}>Email:</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'}></Typography>
            </Box>
            <Box ml={'1rem'}>
              <Typography fontSize={'1.2rem'} fontWeight={'300'}>Pages</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'} mt={'1rem'}>Home</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'} mt={'0.5rem'}>Business</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'} mt={'0.5rem'}>Cloud</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'} mt={'0.5rem'}>Contact Us</Typography>
            </Box>
            <Box ml={'2rem'}>
              <Typography fontSize={'1.2rem'} fontWeight={'300'}>Other Websites</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'} mt={'1rem'}>To be continued...</Typography>
            </Box>
        </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer