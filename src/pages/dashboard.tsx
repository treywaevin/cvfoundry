import Preview from '../views/components/ResumePage/Preview';
import ResumeTopBar from '@/views/components/ResumePage/ResumeTopBar';
import '../styles/globals.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
export default function Resume() {
  return (
    <ThemeProvider theme={theme}>
      <ResumeTopBar />
      <Preview />
    </ThemeProvider>
  );
}