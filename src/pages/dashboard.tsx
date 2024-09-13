import Preview from '../views/components/ResumePage/Preview';
import ResumeTopBar from '@/views/components/ResumePage/ResumeTopBar';
import ResumeHome from '@/views/components/ResumePage/ResumeHome';
import '../styles/globals.css';
import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function Resume() {
  return (
    <div className="bg-mint h-screen">
      <SignedIn>
        <ResumeTopBar />
        <ResumeHome />
      </SignedIn>
      <SignedOut>
        <SignIn/>
      </SignedOut>
    </div>
  );
}