import { Box, Paper } from "@mui/material"
import { useParams } from "react-router-dom"
import { cloudBlogs } from "../Blogs/CloudBlogs"

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
      flexDirection: 'column',
      width: '85%',
      alignItems: 'center',
      backgroundColor: '#F0EEEE',
      borderRadius: '8px',
      padding: '2rem'
    }}>
      <Box sx={{
        '& > *': {
          width: '340px',
          height: '210px'
        }
      }}>
        <img src={`${blog.image}`} alt={blog.title} />
      </Box>
        <Box sx={{
          textAlign: 'center'
        }}>
           <h2>{blog.title}</h2>
           <p>Author: {blog.author}</p>
           <p>{blog.textContent}</p>
        </Box>        
    </Paper>
    </Box>
  )
}

export default Mobile_CloudBlogPage