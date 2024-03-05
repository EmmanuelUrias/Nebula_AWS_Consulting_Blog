import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { cloudBlogs } from "../Blogs/CloudBlogs"

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
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
        <Box sx={{
          flex: '1 1 50%',
          maxWidth: '50%',
          '& > *': {
            width: '100%',
            height: '500px'
          }
        }}>
          <img src={`${blog.image}`} alt={blog.title} />
        </Box>
        <Box sx={{
          flex: '1 1 50%',
          maxWidth: '50%',
          paddingX: '1rem'
        }}>
           <h2>{blog.title}</h2>
           <p>Author: {blog.author}</p>
           <p>{blog.textContent}</p>
        </Box>
    </Box>
  )
}

export default CloudBlogPage