import React from "react";
import { StateContextProvider } from "../../../context/stateContext";
import "../globals.css";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import Providers from "./providers";
import ThemeToggle from "@/components/ThemeToggle";
import ProvidersLoading from './NextProgress'
export const metadata = {
  title: "Mubashir | Portfolio",
  description: "Portfolio",
};
import { Toaster } from "react-hot-toast";
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`px-[3rem] max-[500px]:px-[2rem] flex flex-col items-center justify-between h-full min-h-screen ${inter.className}`}
      >
        <StateContextProvider>
          <Providers>
            <ProvidersLoading>
              <Toaster/>
            
           
            <div className="flex justify-end w-full items-center pt-[0.5rem]">
                <ThemeToggle />
              </div>
              <div className="flex flex-col items-center justify-center w-full flex-grow">{children}</div>
            
            <Footer />
            </ProvidersLoading>
          </Providers>
        </StateContextProvider>
      </body>
    </html>
  );
}
