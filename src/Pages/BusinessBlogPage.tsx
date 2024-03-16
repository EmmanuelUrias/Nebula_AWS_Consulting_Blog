import { Box, Paper } from "@mui/material"
import { useParams } from "react-router-dom"
import { businessBlogs } from "../Blogs/BusinessBlogs"
import Clouds from "../Components/Clouds"

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
           <Box fontWeight={'300'} fontSize={'1.4rem'}>{blog.title}</Box>
           <Box fontWeight={'300'} mt={'0.5rem'}>Author: {blog.author}</Box>
           <Box fontWeight={'300'} mt={'1rem'}>{blog.textContent}</Box>
        </Box>        
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

export default BusinessBlogPage