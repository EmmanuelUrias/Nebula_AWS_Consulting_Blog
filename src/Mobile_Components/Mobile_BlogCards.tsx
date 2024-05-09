import { Box, Paper } from "@mui/material"

interface businessBlogsProps {
    title: string,
    introTextContent: string,
    author: string,
    date: string,
    image: string, 
    id: number,
}

const Mobile_BlogCards:React.FC<businessBlogsProps> = ({title, introTextContent, author, date, image}) => {
  return (
    <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F0EEEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
        width: '90%',
        borderRadius: '8px',
        marginTop: '2rem',
        '& #business_blog_img': {
            width: '300px',
            borderRadius: '8px',
            objectFit: 'cover'
        }
    }}>
        <img id='business_blog_img'src={`${image}`}/>
        <Box sx={{marginTop: '0.7rem'}}>            
            <Box sx={{
                fontSize: '1.2rem',
                fontWeight: '400',
                textAlign: 'center',
                paddingX: '0.7rem'
            }}>{title}</Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginY: '0.5rem',
                paddingX: '3.5rem',
                '& > *': {
                    fontSize: '0.9rem',
                    fontWeight: '300',
                    opacity: '70%'
                }
            }}>
                <Box>{author}</Box>
                <Box>{date}</Box>
            </Box>
            <Box sx={{
                fontWeight: '400',
                textAlign: 'center',
                marginY: '0.7rem',
                paddingX: '1rem'
            }}>{introTextContent}</Box>
        </Box>
    </Paper>
  )
}

export default Mobile_BlogCards