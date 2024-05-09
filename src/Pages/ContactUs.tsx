import { Box, Paper } from "@mui/material"

function ContactUs() {
  return (
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '1.5rem'
        }}>
      <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        maxWidth: '1200px',
        justifyContent: 'center',
        backgroundColor: '#F0EEEE',
        borderRadius: '8px',
        padding: '2rem'
      }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Box sx={{
              marginLeft: '2rem',
              marginTop: '0.5rem',
              '& > *': {
                marginBottom: '0.5rem',
                fontWeight: '300'
              }
            }}>
             <Box fontSize={'1.8rem'} mb={'1rem'}>Contact Us</Box>
               <Box>Phone Number: 702-410-0057</Box>
               <Box>Email: emmanuelurias60@nebulaawsconsulting.com</Box>
               <Box>LinkedIn: Emmanuel Urias</Box>
             <Box sx={{
               fontSize: '1.8rem',
               marginBottom: '1rem',
               marginTop: '1rem'
              }}>
              Other Nebula AWS <br /> Consulting Resources
            </Box>
               <Box>Business Website: to be continued</Box>
            </Box>
            <Box sx={{
              backgroundImage: "url('src/assets/Nebula AWS Consulting Logo Blog.png')",
              height: '370px',
              width: '522px',
              objectFit: 'cover',
              borderRadius: '12px'
          }} 
          />
          </Box>
          <Box sx={{
               marginBottom: '1rem',
               marginTop: '1.5rem',
               marginLeft: '2rem',
               fontWeight: '300',
              }}>
              <Box fontSize={'1.8rem'} mb={'1rem'}>Services We Offer</Box>
              <Box sx={{'& > *': {marginLeft: '1rem'}}}>At Nebula AWS Consulting we offer consulting and solution architecture services for a wide range of mission critical aspects of hosting cloud architectures including:
                  <li>Cost Optimization</li>
                  <li>Performance Optimization</li>
                  <li>Security</li>
                  <li>Operational Excellency</li>  We also offer the deployment of full stack apps, containerized architectures, backups, server-less architectures, and networking solutions.</Box>
            </Box>
      </Paper>
          {/* <Clouds 
            cloudOneTop='-140px'
            cloudOneRight='160px'
            cloudTwoTop='240px'
            cloudTwoRight='-220px'
            cloudThreeTop='-200px'
            cloudThreeRight='-900px'
          />     */}
      </Box>
    )
  }

export default ContactUs