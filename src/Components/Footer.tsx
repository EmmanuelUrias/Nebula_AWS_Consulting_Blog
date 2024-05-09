import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer() {
  const navigate = useNavigate()
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
              marginLeft: '24%',
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
                marginX: '0.7rem',
                cursor: 'pointer'
              }
            }}
              >
              <Box onClick={() => navigate('/')}>
                <InstagramIcon fontSize="large"/>
              </Box>
              <Box onClick={() => navigate('/')}>
                <LinkedInIcon fontSize="large"/>
              </Box>
              <Box onClick={() => navigate('/')}>
                <CloudQueueIcon fontSize="large"/>
              </Box>
            </Box>
        </Box>
        <Box sx={{
          justifyContent: 'space-between',
          marginLeft: '11%',
          width: '70%',
          marginTop: '3rem',
          '& > *': {
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center'
          }
        }}>
            <Box>
              <Typography fontSize={'1.4rem'} fontWeight={'300'}>Contact Info</Typography>
              <Typography fontSize={'1.2rem'} fontWeight={'300'} mt={'0.7rem'}>Call Us:</Typography>
              <Typography fontSize={'1.1rem'} fontWeight={'300'}>702-410-0057</Typography>
              <Typography fontSize={'1.2rem'} fontWeight={'300'} mt={'0.7rem'}>Email:</Typography>
              <Typography fontSize={'1.1rem'} fontWeight={'300'}>emmanuelurias60@nebulaawsconsulting</Typography>
            </Box>
            <Box ml={'2rem'}>
              <Typography fontSize={'1.4rem'} fontWeight={'300'}>Pages</Typography>
                <Link to={'/'}>
                  <Typography fontSize={'1.2rem'} fontWeight={'300'} mt={'1rem'}>Home</Typography>
                </Link>
                <Link to={'/business'}>
                  <Typography fontSize={'1.2rem'} fontWeight={'300'} mt={'0.5rem'}>Business</Typography>
                </Link>
                <Link to={'/cloud'}>
                  <Typography fontSize={'1.2rem'} fontWeight={'300'} mt={'0.5rem'}>Cloud</Typography>
                </Link>
                <Link to={'/contactus'}>
                  <Typography fontSize={'1.2rem'} fontWeight={'300'} mt={'0.5rem'}>Contact Us</Typography>
                </Link>
            </Box>
            <Box ml={'2rem'}>
              <Typography fontSize={'1.4rem'} fontWeight={'300'}>Other Websites</Typography>
              <Typography fontSize={'1rem'} fontWeight={'300'} mt={'1rem'}>To be continued...</Typography>
            </Box>
        </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer