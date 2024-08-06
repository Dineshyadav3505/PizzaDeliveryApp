import { ThemeProvider } from "next-themes";
import "./globals.css";
import Layouts from "@/components/Layouts/Layouts"; 


export const metadata = {
  title: "The Foodie cafe",
  description: "Generated by create next app",
};


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Layouts attribute='class'>
            {children}
          </Layouts>
        </ThemeProvider>
      </body>
    </html>
  );
}