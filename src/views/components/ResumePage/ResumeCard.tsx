import { Card, CardActionArea, Typography } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
export default function ResumeCard() {
  return (
    <div className="flex flex-col items-center">
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
          <DescriptionIcon sx={{fontSize: 75}} />
        </CardActionArea>
      </Card>
      <Typography variant="subtitle1">TEST 1</Typography>
    </div>
  )
}