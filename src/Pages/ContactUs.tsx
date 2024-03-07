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
        flexWrap: 'wrap',
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
              marginLeft: '3rem'
            }}>
             <h2>{'ksjdbfkb'}</h2>
             <p>Author: {'blog.author'}</p>
             <p>{'log.textContent'}</p>
            </Box>
            <Box sx={{
              backgroundImage: "url('src/assets/Nebula_Img.png')",
              height: '300px',
              width: '479px',
              
          }} 
          />
          </Box>        
      </Paper>
      </Box>
    )
  }

export default ContactUs