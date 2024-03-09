import { Box, Paper } from "@mui/material"

interface businessBlogsProps {
    title: string,
    introTextContent: string,
    image: string, 
    id: number,
}

const Mobile_BlogCards:React.FC<businessBlogsProps> = ({title, introTextContent, image}) => {
  return (
    <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F0EEEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
        width: '70%',
        borderRadius: '8px',
        marginTop: '2rem',
        '& #business_blog_img': {
            width: '300px',
            borderRadius: '8px',
            objectFit: 'cover'
        }
    }}>
        <img id='business_blog_img'src={`${image}`}/>
        <Box sx={{marginTop: '0.5rem'}}>            
            <Box textAlign={'center'}>{title}</Box>
            <Box textAlign={'center'}>{introTextContent}</Box>
        </Box>
    </Paper>
  )
}

export default Mobile_BlogCards