import ThemeToggle from "@/components/ThemeToggle";
import Providers from "../(site)/providers";
import "../globals.css";
import { Poppins } from "next/font/google";
export const metadata = {
  title: "Resume | Mubashir",
  description: "Detailed Resumer",
};

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`px-[3rem] max-[500px]:px-[2rem] flex items-center justify-center h-screen ${inter.className}`}
        >
          <div className="flex justify-end w-full items-center pt-[0.5rem]">
            <ThemeToggle />
          </div>
          {children}
        </body>
      </Providers>
    </html>
  );
}
