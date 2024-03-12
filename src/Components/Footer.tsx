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
        <Box sx={{
        }}>
            <Box sx={{
              marginLeft: '21rem',
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
            <Box sx={{
              marginLeft: '10rem',
              marginRight: '-5rem',
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '20%'
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
              <Typography>Contact Info</Typography>
              <Typography>Call Us</Typography>
              <Typography>702-410-0057</Typography>
              <Typography>Email</Typography>
              <Typography>emmanuelurias60@nebulaawsconsulting.com</Typography>
            </Box>
            <Box>
              <Typography>Pages</Typography>
              <Typography>Home</Typography>
              <Typography>Business</Typography>
              <Typography>Cloud</Typography>
              <Typography>Contact Us</Typography>
            </Box>
            <Box>
              <Typography>Other Websites</Typography>
              <Typography>To be continued...</Typography>
            </Box>
        </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer