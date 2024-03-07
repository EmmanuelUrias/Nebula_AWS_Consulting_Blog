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
        flexWrap: 'wrap',
        width: '85%',
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
          <Clouds 
            cloudOneTop='-140px'
            cloudOneRight='500px'
            cloudTwoTop='240px'
            cloudTwoRight='120px'
            cloudThreeTop='-200px'
            cloudThreeRight='-470px'
          />
      </Paper>
      </Box>
  )
}

export default CloudBlogPage