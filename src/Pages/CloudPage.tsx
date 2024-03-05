import { Box } from "@mui/material"
import Blog_Cards from "../Components/Blog_Cards"
import { cloudBlogs } from "../Blogs/CloudBlogs"
import { useNavigate } from "react-router-dom"

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
      </Box>
    </>
  )
}

export default CloudPage