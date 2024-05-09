import { Box, Paper, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { cloudBlogs } from "../Blogs/CloudBlogs"
import NotFoundPage from "../Pages/NotFound"

function Mobile_CloudBlogPage() {
  const { id = '' } = useParams()
  const blogId = parseInt(id)

  const grabBlog = () => {
    for (let i = 0; i < cloudBlogs.length; i++){
      if(cloudBlogs[i].id === blogId){
        return cloudBlogs[i]
      }
    }
    return null
  }
  
  const blog = grabBlog()

  if (blog === null) {
    return (
      <NotFoundPage />
    )
}

const paragraphs = blog.textContent.split('\n').filter(p => p.trim() !== '')

return (
  <Box sx={{
    display: 'flex', 
    justifyContent: 'center',
    marginTop: '1.5rem',
    marginBottom: '3rem'
    }}>
    <Paper sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '85%',
      maxWidth: '1200px',
      justifyContent: 'center',
      backgroundColor: '#F0EEEE',
      borderRadius: '8px',
      padding: '2rem'
    }}>
        <Box sx={{
          textAlign: 'center',
          '& > *': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }
        }}>
           <Box fontWeight={'400'} fontSize={'1.4rem'}>{blog.title}</Box>
           <Box sx={{
            fontWeight: '300',
            marginTop: '1rem'
           }}>
             <Box marginRight={'2rem'}>{blog.author}</Box>
             <Box>{blog.date}</Box>
           </Box>
           <Box mt={2} sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'start',
           }}>
             {paragraphs.map((paragraph, index) => (
                 <Typography key={index} paragraph sx={{ textIndent: '2em' }}>
                     {paragraph}
                 </Typography>
             ))}
           </Box>
        </Box>        
    </Paper>
  </Box>
)
}

export default Mobile_CloudBlogPage