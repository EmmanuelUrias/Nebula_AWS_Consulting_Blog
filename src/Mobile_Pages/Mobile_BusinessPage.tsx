import { Box } from "@mui/material"
import Mobile_BlogCards from "../Mobile_Components/Mobile_BlogCards"
import { businessBlogs } from "../Blogs/BusinessBlogs"
import { useNavigate } from "react-router-dom"
import Clouds from "../Components/Clouds"

function Mobile_BusinessPage() {
  const navigate = useNavigate()

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '0.5rem',
        marginLeft: '1rem'
      }}>
        {businessBlogs.map((blog) => (
          <Box key={blog.id} onClick={() => navigate(`/business/${blog.id}`)}>
            <Mobile_BlogCards
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
        cloudOneTop="-630px"
        cloudOneRight="150px"
        cloudTwoTop="-430px"
        cloudTwoRight="-90px"
        cloudThreeTop="-140px"
        cloudThreeRight="60px"
      />
      </Box>
    </>
  )
}

export default Mobile_BusinessPage