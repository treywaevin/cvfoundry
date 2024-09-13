import { AppBar, Typography, Button, CssBaseline, Toolbar, Divider, Icon } from "@mui/material";
import { UserButton } from "@clerk/nextjs";
import logo from "@/images/logo.png";

function ResumeTopBar() {
  return (
    <>
    <CssBaseline />
    <AppBar sx={{
      position: 'static', 
      backgroundColor:'transparent', 
      boxShadow: 'none'
    }}>
      <Toolbar></Toolbar>
    </AppBar>
    <AppBar style={{
        boxShadow: 'none',
        position: 'fixed',
        backgroundColor: 'white',
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
          <UserButton />
        </Toolbar>
    </AppBar>
  </>
  )
}

export default ResumeTopBar;