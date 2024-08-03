"use client"
import MobileFooter from "@/components/RecipeApp/MobileFooter";
import GlobalState, { GlobalContext } from "@/context/context";
import globalState from "@/context/context"
export default function RecipeAppLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            
        <GlobalState>

        {children}
        </GlobalState>
            


        <MobileFooter/>
        </body>

      </html>
    );
  }
  