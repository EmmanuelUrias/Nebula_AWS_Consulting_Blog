import { Box, Paper } from "@mui/material"

function Mobile_ContactPage() {
  return (
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '1.5rem',
        marginBottom: '3rem'
        }}>
      <Paper sx={{
        display: 'flex',
        width: '80%',
        justifyContent: 'center',
        backgroundColor: '#F0EEEE',
        borderRadius: '8px',
        paddingX: '2rem',
        paddingY: '1rem'
      }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Box sx={{
              backgroundImage: "url('src/assets/Mobile Nebula AWS Logo Icon.png')",
              height: '180px',
              width: '340px',
              marginLeft: '1.5rem'
          }} 
          />
            <Box sx={{
              textAlign: 'center'
            }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Box sx={{
              marginTop: '1.5rem',
              '& > *': {
                marginBottom: '1rem',
                fontWeight: '300'
              }
            }}>
             <Box fontSize={'1.8rem'} mb={'1rem'}>Contact Us</Box>
               <Box>Phone Number: <br/> 702-410-0057</Box>
               <Box>Email: <br/>emmanuelurias60@nebulaawsconsulting.com</Box>
               <Box>LinkedIn:<br/> Emmanuel Urias</Box>
             <Box sx={{
               fontSize: '1.8rem',
               marginTop: '1.5rem'
              }}>
              Other Nebula AWS <br /> Consulting Resources
            </Box>
               <Box>Business Website: <br/>...to be continued</Box>
            </Box>
          </Box>
          <Box sx={{
               marginBottom: '1rem',
               marginTop: '1.5rem',
               fontWeight: '300',
              }}>
              <Box fontSize={'1.8rem'} mb={'1rem'}>Services We Offer</Box>
              <Box sx={{'& > *': {textAlign: 'start', marginLeft: '4rem'}}}>At Nebula AWS Consulting we offer consulting and solution architecture services for a wide range of mission critical aspects of hosting cloud architectures including:
                  <li>Cost Optimization</li>
                  <li>Performance Optimization</li>
                  <li>Security</li>
                  <li>Operational Excellency</li>  We also offer the deployment of full stack apps, containerized architectures, backups, server-less architectures, and networking solutions.</Box>
            </Box>
            </Box>
          </Box>
      </Paper>
      </Box>
    )
  }

export default Mobile_ContactPage