import { Box, Paper } from "@mui/material"
import Clouds from "../Components/Clouds"

function Mobile_ContactPage() {
  return (
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '1.5rem'
        }}>
      <Paper sx={{
        display: 'flex',
        width: '80%',
        justifyContent: 'center',
        backgroundColor: '#F0EEEE',
        borderRadius: '8px',
        padding: '2rem'
      }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Box sx={{
              backgroundImage: "url('src/assets/Mobile_Nebula_Img.png')",
              height: '212px',
              width: '340px'
          }} 
          />
            <Box sx={{
              textAlign: 'center'
            }}>
             <h2>{'ksjdbfkb'}</h2>
             <p>Author: {'blog.author'}</p>
             <p>{'log.textContent'}</p>
            </Box>
          </Box>
      </Paper>
      </Box>
    )
  }

export default Mobile_ContactPage