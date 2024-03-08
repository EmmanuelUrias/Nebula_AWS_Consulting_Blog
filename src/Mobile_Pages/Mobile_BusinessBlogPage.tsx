import { Box, Paper } from "@mui/material"
import { useParams } from "react-router-dom"
import { businessBlogs } from "../Blogs/BusinessBlogs"

function Mobile_BusinessBlogPage() {
    const { id = '' } = useParams()
    const blogId = parseInt(id)

    const grabBlog = () => {
      for (let i = 0; i < businessBlogs.length; i++){
        if(businessBlogs[i].id === blogId){
          return businessBlogs[i]
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

export default Mobile_BusinessBlogPage