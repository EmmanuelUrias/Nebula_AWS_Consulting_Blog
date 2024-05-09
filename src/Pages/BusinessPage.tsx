import { Box } from "@mui/material"
import Blog_Cards from "../Components/BlogCards"
import { businessBlogs } from "../Blogs/BusinessBlogs"
import { useNavigate } from "react-router-dom"
import Clouds from "../Components/Clouds"

function BusinessPage() {
  const navigate = useNavigate()

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem'
      }}>
        {businessBlogs.map((blog) => (
          <Box key={blog.id} onClick={() => navigate(`/business/${blog.id}`)}>
            <Blog_Cards
              title={blog.title}
              introTextContent={blog.introTextContent}
              author={blog.author}
              date={blog.date}
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

export default BusinessPage