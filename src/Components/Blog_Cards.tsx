import { Box } from "@mui/material"

interface businessBlogsProps {
    title: string,
    author: string,
    textContent: string,
    introTextContent: string,
    image: string, 
    id: number,
}

const Blog_Cards:React.FC<businessBlogsProps> = ({title, author, textContent, introTextContent, image}) => {
  return (
    <div>
        <Box>{title}</Box>
        <Box>{author}</Box>
        <Box>{textContent}</Box>
        <Box>{introTextContent}</Box>
        <Box>{image}</Box>
    </div>
  )
}

export default Blog_Cards