import { AppBar, Typography, Container, CssBaseline } from "@mui/material";

function TopBar() {
  return (
    <>
      <CssBaseline />
      <AppBar style={{
          backgroundColor: 'white',
          boxShadow: 'none',
          position: 'fixed',
        }}>
        <Typography variant="h5"
          sx={{
            ml: 1,
            fontWeight: "bold",
            padding: 2,
            color: 'black'
          }}>CVFoundry</Typography>
      </AppBar>
    </>
  );
}

export default TopBar;