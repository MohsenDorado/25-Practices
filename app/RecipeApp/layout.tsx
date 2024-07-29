"use client"
import MobileFooter from "@/components/RecipeApp/MobileFooter";

export default function RecipeAppLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            
            {children}


        <MobileFooter/>
        </body>

      </html>
    );
  }
  