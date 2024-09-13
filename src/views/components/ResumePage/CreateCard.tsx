import { Card, CardContent, CardActionArea } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
export default function CreateCard() {
  return (
    <Card sx={{
      width: 200, 
      height: 250,
      borderRadius: '20px',
    }}>
      <CardActionArea sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
        <AddIcon sx={{fontSize: 25}} />
      </CardActionArea>
    </Card>
  )
}