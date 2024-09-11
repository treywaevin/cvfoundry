import Preview from '../views/components/ResumePage/Preview';
import ResumeTopBar from '@/views/components/ResumePage/ResumeTopBar';
import '../styles/globals.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function Resume() {
  return (

    <ThemeProvider theme={theme}>
      <SignedIn>
        <ResumeTopBar />
        <Preview />
      </SignedIn>
      <SignedOut>
        <SignIn routing="hash"/>
      </SignedOut>
    </ThemeProvider>
  );
}