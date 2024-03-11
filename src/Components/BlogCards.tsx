import { Box, Paper } from "@mui/material"

interface businessBlogsProps {
    title: string,
    introTextContent: string,
    author: string,
    date: string,
    image: string, 
    id: number,
}

const Blog_Cards:React.FC<businessBlogsProps> = ({title, author, date, introTextContent, image}) => {
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
        <Box sx={{marginLeft: '2rem', marginTop: '0.5rem', fontWeight: '300'}}>            
            <Box fontSize={'1.3rem'} fontWeight={'300'}>{title}</Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                marginY: '0.3rem',
                marginX: '0.5rem',
                '& > *': {
                    fontSize: '0.9rem',
                    fontWeight: '300',
                    opacity: '70%'
                }
            }}>
                <Box>{author}</Box>
                <Box>{date}</Box>
            </Box>
            <Box fontWeight={'300'}>{introTextContent}</Box>
        </Box>
    </Paper>
  )
}

export default Blog_Cards