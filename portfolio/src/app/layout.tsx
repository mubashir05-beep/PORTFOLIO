import React, { useEffect } from "react";
import { StateContextProvider } from "../../context/stateContext";
import './globals.css'
import Footer from "@/components/Footer";
import {Poppins} from 'next/font/google'
export const metadata = {
  title: "Mubashir | Portfolio",
  
  description: "Portfolio",
};
const inter = Poppins({ subsets: ['latin'] ,weight:['400','100','200','300','500','600','700','800','900']})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`px-[3rem] max-[500px]:px-[2rem] flex flex-col justify-between h-screen ${inter.className}`}>
        <StateContextProvider>
          <div >{children}</div>
        </StateContextProvider>
        <Footer/>
      </body>
    </html>
  );
}
