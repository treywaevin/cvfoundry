import Preview from '../views/components/ResumePage/Preview';
import '../styles/globals.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
export default function Resume() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
        {/* <Preview /> */}
      </div>
    </ThemeProvider>
  );
}