import "../styles/globals.css";
import { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

const sans = Open_Sans({
  weight: ["800", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={sans.className}>
      <Component {...pageProps} />
    </main>
  )
}