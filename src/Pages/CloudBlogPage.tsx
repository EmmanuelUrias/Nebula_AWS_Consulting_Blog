import { Box, Paper } from "@mui/material"
import { useParams } from "react-router-dom"
import { cloudBlogs } from "../Blogs/CloudBlogs"
import Clouds from "../Components/Clouds"

function CloudBlogPage() {
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
      throw new Error("Blog not found");
  }

  console.log(`${blog.image}`)

  return (
    <Box sx={{
      display: 'flex', 
      justifyContent: 'center',
      marginTop: '1.5rem'
      }}>
    <Paper sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '85%',
      maxWidth: '1200px',
      justifyContent: 'center',
      backgroundColor: '#F0EEEE',
      borderRadius: '8px',
      padding: '2rem',
      paddingX: '4rem'
    }}>
        <Box sx={{
          textAlign: 'center',
          '& > *': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }
        }}>
           <Box fontWeight={'300'} fontSize={'1.4rem'}>{blog.title}</Box>
           <Box sx={{
            fontWeight: '300',
            marginTop: '1rem'
           }}>
             <Box marginRight={'10rem'}>{blog.author}</Box>
             <Box>{blog.date}</Box>
           </Box>
           <Box fontWeight={'300'} mt={'1.5rem'}>{blog.textContent}</Box>
        </Box>        
    </Paper>
    </Box>
  )
}

export default CloudBlogPage