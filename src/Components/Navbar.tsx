import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <Box sx={{
        width: '100%',
        height: '4.5rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > *': {
          cursor: 'pointer'
        },
        '& #nav_title': {
          fontSize: '1.5rem',
          marginLeft: '2rem'
        },
        '& #nav_items': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '40%',
          marginRight: '2rem'
        }
      }}>
        <Box id='nav_title'>
          Nebula AWS Consulting Blogs
        </Box>
        <Box id='nav_items'>
          <Box>Home</Box>
          <Box>Business</Box>
          <Box>Cloud</Box>
          <Box>Contact Us</Box>
        </Box>
      </Box>
    </>
  )
}

export default Navbar