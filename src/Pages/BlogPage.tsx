import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { businessBlogs } from "../Blogs/BusinessBlogs"

function BlogPage() {
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

  console.log(blog.image)

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {blog && (
        <>
        <Box sx={{
          flex: '1',
          maxWidth: '50%',
          '& > *': {
            width: '100%',
            height: 'auto'
          }
        }}>
          <img src={blog.image} alt={blog.title} />
        </Box>
        <Box sx={{
          flex: '1',
          maxWidth: '50%',
          paddingX: '1rem'
        }}>
           <h2>{blog.title}</h2>
           <p>Author: {blog.author}</p>
           <p>{blog.textContent}</p>
           <p>{blog.introTextContent}</p>
        </Box>
        </>
      )}
    </Box>
  )
}

export default BlogPage