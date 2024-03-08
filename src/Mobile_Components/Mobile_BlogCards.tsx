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
        flexDirection: 'row',
        backgroundColor: '#F0EEEE',
        padding: '0.5rem',
        width: '90%',
        minWidth: '720px',
        maxWidth: '1200px',
        borderRadius: '8px',
        marginTop: '1rem',
        marginLeft: '4%',
        '& #business_blog_img': {
            width: '300px',
            borderRadius: '8px',
            objectFit: 'cover'
        },
        '&:hover': {
            cursor: 'pointer'
        }
    }}>
        <img id='business_blog_img'src={`${image}`}/>
        <Box sx={{marginLeft: '2rem', marginTop: '0.5rem'}}>            
            <Box>{title}</Box>
            <Box>{introTextContent}</Box>
        </Box>
    </Paper>
  )
}

export default Mobile_BlogCards