import { Box } from "@mui/material"
import Blog_Cards from "../Components/Blog_Cards"
import { cloudBlogs } from "../Blogs/CloudBlogs"
import { useNavigate } from "react-router-dom"
import Clouds from "../Components/Clouds"

function CloudPage() {
  const navigate = useNavigate()

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem'
      }}>
        {cloudBlogs.map((blog) => (
          <Box key={blog.id} onClick={() => navigate(`/cloud/${blog.id}`)}>
            <Blog_Cards
              title={blog.title}
              introTextContent={blog.introTextContent}
              image={blog.image}
              id={blog.id}
            />
          </Box>
        ))}
        <Clouds 
          cloudOneTop="-230px"
          cloudOneRight="550px"
          cloudTwoTop="-20px"
          cloudTwoRight="0px"
          cloudThreeTop="-400px"
          cloudThreeRight="-500px"
        />
      </Box>
    </>
  )
}

export default CloudPage