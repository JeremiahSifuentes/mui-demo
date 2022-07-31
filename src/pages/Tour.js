import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import ImageList from '../components/ImageList';

const Tour = () => {
  return (
    <Container sx={{width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3} >
        Explore The World
      </Typography>
      <Box marginTop={3} sx={{display: "flex"}}>
        <img 
          src="https://images.unsplash.com/photo-1550109161-7262e652bf82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          alt='Las Vegas at night'
          height={325}
        />
        < ImageList 
          sx={{ width: 300, height: 325, marginLeft: 1}}
        />
      </Box>
    </Container>
  )
}

export default Tour