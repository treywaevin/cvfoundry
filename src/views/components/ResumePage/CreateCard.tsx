import { Card, CardContent, CardActionArea, Backdrop, Button, Box, Typography, TextField, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
export default function CreateCard() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="static">
      <Card sx={{
        width: 200, 
        height: 250,
        borderRadius: '20px',
      }}>
        <CardActionArea 
          onClick={handleOpen}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
          <AddIcon sx={{fontSize: 25}} />
        </CardActionArea>
      </Card>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })} 
        open={open}
      >
        <Box sx={{backgroundColor: 'white', borderRadius: '20px', padding: 2}}>
          <div className="flex justify-between items-center sm:space-x-2 md:space-x-40">
            <Typography variant="h4" sx={{color: 'black', flexGrow: 1}}>Create New Resume</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{color:'black'}}/>
            </IconButton>
          </div>
          <Typography variant="body1" sx={{color: 'black', paddingBottom: 2}}>Add a title for your new resume.</Typography>
          <div className='flex flex-col'>
            <TextField sx={{paddingBottom: 3}}label="Title" variant="outlined" />
            <div className='flex flex-row justify-end space-x-1'>
              <Button variant="contained" onClick={handleClose}>Cancel</Button>
              <Button variant="contained" onClick={handleClose}>Create</Button>
            </div>
          </div>
        </Box>
      </Backdrop>
    </div>
  )
}