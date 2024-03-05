import { Box, Paper } from "@mui/material"

function ContactUs() {
  return (
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center'
        }}>
      <Paper sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '95%',
        maxWidth: '1200px',
        justifyContent: 'center',
        backgroundColor: '#F0EEEE',
        borderRadius: '8px',
        padding: '2rem'
      }}>
          <Box sx={{
            flex: '1 1 50%',
            maxWidth: '50%'
          }}>
             <h2>{'ksjdbfkb'}</h2>
             <p>Author: {'blog.author'}</p>
             <p>{'log.textContent'}</p>
          </Box>        <Box sx={{
            flex: '1 1 50%',
            maxWidth: '50%',
            '& > *': {
              width: '100%',
              height: '500px'
            }
          }}>
            <img src={`kjsdcdbks`} alt={'blog.title'} />
          </Box>
      </Paper>
      </Box>
    )
  }

export default ContactUs