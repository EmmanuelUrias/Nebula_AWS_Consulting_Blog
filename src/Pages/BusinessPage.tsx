import { Box } from "@mui/material"
import Blog_Cards from "../Components/Blog_Cards"
import { businessBlogs } from "../Blogs/BusinessBlogs"
import { useNavigate } from "react-router-dom"

function BusinessPage() {
  const navigate = useNavigate()

  return (
    <>
      <Box>
        {businessBlogs.map((blog) => (
          <Box onClick={() => navigate(`/business/${blog.id}`)}>
            <Blog_Cards
              title={blog.title}
              author={blog.author}
              textContent={blog.textContent}
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