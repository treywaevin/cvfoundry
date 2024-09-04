import { Box, Typography, Button } from "@mui/material";
import landing from "@/images/landing.png";
import Image from "next/image";
function Landing() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: {xs: 'column-reverse', md: 'row'},
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      bgcolor: '#80ed99', // mint green
    }}>
      <Box sx={{textAlign:'center', display:'flex', flexDirection: 'column', gap: 3}}>
        <Box>
          <Typography variant="h2" sx=
          {{
            fontWeight: 'bold',
          }}
          >
            Forge your
          </Typography>
          <Typography variant="h2" sx={{
            fontWeight: 'bold',
          }}
          >
            professional
          </Typography>
          <Typography variant="h2" sx={{
            fontWeight: 'bold',
          }}
          >
            career!
          </Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection:'column'}}>
          <Typography variant='h7' sx={{
          }} 
          >
            No more need for Google Docs or LaTeX.
          </Typography>
          <Typography variant='h7'>
            Create a professional CV in minutes with our easy-to-use CV builder.
          </Typography>
        </Box>
        <Button
          variant='outlined'
          sx={{
            padding: {xs: '1', md: '3'},
            transition: 'transform 0.1s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
            width: '50%',
            alignSelf: 'center',
            bgcolor: 'white',
          }}
        >
          <Typography
            variant='h7'
            color='#57cc99'
          >
            Get Started
          </Typography>
        </Button>
      </Box>
      <Box>
        <Image src={landing} alt="Landing" width={800} height={500}/>
      </Box>
    </Box>
  );
}

export default Landing;