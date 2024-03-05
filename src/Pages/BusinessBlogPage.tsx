import { Box, Paper } from "@mui/material"
import { useParams } from "react-router-dom"
import { businessBlogs } from "../Blogs/BusinessBlogs"

function BusinessBlogPage() {
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
      justifyContent: 'center'
      }}>
    <Paper sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '95%',
      maxWidth: '1200px',
      justifyContent: 'center',
      backgroundColor: '#F0EEEE',
      borderRadius: '8px',
      padding: '2rem'
    }}>
        <Box sx={{
          flex: '1 1 50%',
          maxWidth: '50%'
        }}>
           <h2>{blog.title}</h2>
           <p>Author: {blog.author}</p>
           <p>{blog.textContent}</p>
        </Box>        <Box sx={{
          flex: '1 1 50%',
          maxWidth: '50%',
          '& > *': {
            width: '100%',
            height: '500px'
          }
        }}>
          <img src={`${blog.image}`} alt={blog.title} />
        </Box>
    </Paper>
    </Box>
  )
}

export default BusinessBlogPage