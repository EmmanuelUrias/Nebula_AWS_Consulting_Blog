import { Typography, Box, Button } from '@mui/material';

function NotFoundPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                bgcolor: 'background.default',
                color: 'text.primary'
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Sorry, blog not found
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2, textAlign: 'center' }}>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </Typography>
            <Button variant="contained" href="/" sx={{backgroundColor: '#FE783D'}}>
                Go to Home
            </Button>
        </Box>
    );
}

export default NotFoundPage;