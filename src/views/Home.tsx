import Landing from "./components/HomePage/Landing";
import TopBar from "@/views/components/HomePage/TopBar";
import '../styles/globals.css';
import Preview from "@/views/components/ResumePage/Preview";
export default function Home() {
  return (
    <>
      <TopBar />
      <Landing />
      <Preview />
      <h1>Hello World!</h1>
    </>
  );
}