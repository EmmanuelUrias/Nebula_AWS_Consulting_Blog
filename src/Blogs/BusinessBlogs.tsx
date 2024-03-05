interface businessBlogsProps {
    title: string,
    author: string,
    textContent: string,
    introTextContent: string,
    image: string, 
    id: number,
}

export const businessBlogs: businessBlogsProps[]= [
    {
    title: 'Test Title',
    author: 'Emmanuel Urias',
    textContent: 'test content',
    introTextContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    image: 'src/assets/Business_Img.png',
    id: 1
},
{
    title: 'Test Title 2',
    author: 'Emmanuel Urias',
    textContent: 'test content',
    introTextContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    image: 'src/assets/Business_Img.png',
    id: 3
}
]