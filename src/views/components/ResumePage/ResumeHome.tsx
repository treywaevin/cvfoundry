import { Typography } from "@mui/material"
import CreateCard from "./CreateCard"
import ResumeCard from "./ResumeCard"
export default function ResumeHome(){
  return (
    <div className="p-10">
      <Typography variant="h4" sx={{fontWeight: 'bold', mb: 2}}>My Resumes</Typography>
      <div className="flex space-x-4">
        <CreateCard/>
        <ResumeCard />
      </div>
    </div>
  )
}