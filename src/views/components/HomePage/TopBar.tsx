import { AppBar, Typography, Button, CssBaseline, Toolbar, Divider, Icon } from "@mui/material";
import logo from "@/images/logo.png";
function TopBar() {
  return (
    <>
      <CssBaseline />
      <AppBar style={{
          backgroundColor: 'white',
          boxShadow: 'none',
          position: 'fixed',
        }}>
          <Toolbar>
            <Icon>
              <img src={logo.src} alt="logo" style={{width: '100px'}} />
            </Icon>
            <Typography variant="h5"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                color: 'black',
                ml: 1,
              }}>CVFoundry</Typography>
            <Button>
              <Typography variant="subtitle1" sx={{color: 'black'}}>
                Features
              </Typography>
            </Button>
            <Button>
              <Typography variant="subtitle1" sx={{color: 'black'}}>
                Pricing
              </Typography>
            </Button>
            <Divider orientation="vertical" variant='middle' flexItem sx={{margin: 1}}/>
            <Button sx={{
              backgroundColor: '#57cc99',
              color: 'white',
              '&:hover': {
                backgroundColor: '#adc178',
              }
            }}>
              <Typography variant="subtitle1" sx={{color: 'white'}}>
                Sign In
              </Typography>
            </Button>
          </Toolbar>
      </AppBar>
    </>
  );
}

export default TopBar;