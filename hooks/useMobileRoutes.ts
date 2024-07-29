import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { IoHome, IoSearchSharp } from "react-icons/io5";

const useMobileRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
        {
            label: "Search",
            href: "/RecipeApp/search",
            icon: ImSearch,
    
            active: pathname === "/RecipeApp/search",
          },
      {
        label: "Home",
        href: "/RecipeApp",
        icon: IoHome,
        active: pathname === "/RecipeApp",
      },
      {
        label: "Bookmarks",
        href: "/RecipeApp/bookmarks",
        icon: BsBookmarkHeartFill,
        active: pathname === "/RecipeApp/bookmarks",
      },
      
    ],
    [pathname]
  );

  return routes;
};
export default useMobileRoutes;
