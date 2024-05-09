import { Box, Paper } from "@mui/material"

interface blogProps {
    title: string,
    introTextContent: string,
    author: string,
    date: string,
    image: string, 
    id: number
}

const Blog_Cards:React.FC<blogProps> = ({title, author, date, introTextContent, image}) => {
  return (
    <Paper sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F0EEEE',
        padding: '0.5rem',
        width: '90%',
        maxWidth: '1200px',
        borderRadius: '8px',
        marginTop: '1rem',
        marginLeft: '4%',
        '& #blog_img': {
            width: '300px',
            height: '200px',
            borderRadius: '8px',
            objectFit: 'cover'
        },
        '&:hover': {
            cursor: 'pointer',
            scale: '1.01'
        }
    }}>
        <img id='blog_img'src={`${image}`} alt='A blog image related to the title fo the blog'/>
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
            <Box fontWeight={'300'} paddingBottom={'0.5rem'}>{introTextContent}</Box>
        </Box>
    </Paper>
  )
}

export default Blog_Cards