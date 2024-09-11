import "../styles/globals.css";
import { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const sans = Open_Sans({
  weight: ["800", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={sans.className}>
      <ClerkProvider>
        <Component {...pageProps} />
      </ClerkProvider>
    </main>
  )
}