import { Box, Typography } from "@mui/material"

function Footer() {
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '4rem',
        height: '500px',
        backgroundColor: '#D9D9D9',
        '& > *': {
            display: 'flex',
            flexDirection: 'row'
        }
      }}>
        <Box sx={{}}>
            <Box sx={{}}><Typography>Nebula AWS Consulting <br/> @Copyright</Typography></Box>
            <Box sx={{alignItems: 'end'}}>Icons</Box>
        </Box>
        <Box sx={{}}>
            <Box>Contact Info</Box>
            <Box>Pages</Box>
            <Box>Other Websites</Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer