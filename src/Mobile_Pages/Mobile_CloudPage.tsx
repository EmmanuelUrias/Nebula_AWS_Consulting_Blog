import { Box } from "@mui/material"
import Mobile_BlogCards from "../Mobile_Components/Mobile_BlogCards"
import { cloudBlogs } from "../Blogs/CloudBlogs"
import { useNavigate } from "react-router-dom"

function Mobile_CloudPage() {
  const navigate = useNavigate()

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0.5rem',
        marginLeft: '1rem',
        marginBottom: '3rem'
      }}>
        {cloudBlogs.map((blog) => (
          <Box key={blog.id} onClick={() => navigate(`/cloud/${blog.id}`)}>
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
      </Box>
    </>
  )
}

export default Mobile_CloudPage