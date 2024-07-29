import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { IoHome, IoRestaurant } from "react-icons/io5";

const useMobileRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
        {
            label: "Food",
            href: "/RecipeApp/foods/",
            icon: IoRestaurant,
            
            active: pathname.includes(`/RecipeApp/foods`),
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
