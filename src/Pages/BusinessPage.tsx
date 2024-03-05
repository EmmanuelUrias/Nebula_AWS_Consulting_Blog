import { Box } from "@mui/material"
import Blog_Cards from "../Components/Blog_Cards"
import { businessBlogs } from "../Blogs/BusinessBlogs"
import { useNavigate } from "react-router-dom"

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
              image={blog.image}
              id={blog.id}
            />
          </Box>
        ))}
      </Box>
    </>
  )
}

export default BusinessPage