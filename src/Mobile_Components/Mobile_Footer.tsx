import { Box, Typography } from "@mui/material"

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
            <Box sx={{marginTop: '1rem'}}>Icons</Box>
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
            <Box sx={{marginTop: '1rem'}}>
              <Typography>Pages</Typography>
              <Typography>Home</Typography>
              <Typography>Business</Typography>
              <Typography>Cloud</Typography>
              <Typography>Contact Us</Typography>
            </Box>
            <Box sx={{marginTop: '1rem'}}>
              <Typography>Other Websites</Typography>
              <Typography>To be continued...</Typography>
            </Box>
        </Box>
        </Box>
      </Box>
    </>
  )
}
export default Mobile_Footer