import React from 'react'
import { Box, Typography } from '@mui/material'

function Hero() {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '3rem',
    }}>
      <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
      }}>
        <Box>
          <Box sx={{
              backgroundImage: "url('src/assets/Nebula_Img.png')",
              height: '300px',
              width: '479px',
              marginRight: '1.5rem',
              display: 'flex',
              flexDirection: 'column'
          }}>
          </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '2rem'}}>
                <Typography variant='h4' sx={{marginTop: '1rem'}}>Nebula AWS Consulting</Typography>
                <Box sx={{backgroundColor: '#9E48FF', width: '7rem', height: '2.5rem', borderRadius: '8px', color: 'white', marginTop: '2rem', display: 'flex',alignItems: 'center', justifyContent: 'center'}}><Typography padding='0.25rem'>Contact Us</Typography></Box>
            </Box>
        </Box>
        <Box sx={{
            backgroundColor: '#1E1E1E',
            borderRadius: '8px',
            width: '400px',
            color: 'white',
            height: '440px'
        }}>
            <Typography sx={{padding: '1rem'}}>About Us</Typography>
            <Typography sx={{marginLeft: '1rem'}}>skkd</Typography>
        </Box>
      </Box>
      <Box sx={{
          display: 'flex',
          flexDirection: 'row'
      }}>
        <Box>Business</Box>
        <Box>Cloud</Box>
      </Box>
    </Box>
  )
}

export default Hero