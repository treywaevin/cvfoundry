import Landing from "../components/HomePage/Landing";
import TopBar from "@/components/HomePage/TopBar";
import theme from "@/app/theme";
import { ThemeProvider } from "@mui/material";
export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TopBar />
        <Landing />
      </ThemeProvider>
    </>
  );
}