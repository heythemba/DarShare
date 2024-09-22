import React from "react";
import ProfileMenu from "./ProfileMenu";
import NavList from "./NavList";
import $ from "jquery";
import mylogo from "../../logo.png";

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

//  this is main function of NavBar
export default function MyNavbar() {
  const navigateTo = useNavigate();
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );

    // Check if .swiperVideo class exists in the document
    const swiperVideoExists = $(".swiperVideo").length > 0;

    // Add or remove the opacity class based on the presence of .swiperVideo
    const navbarElement = $(".navBar-itm");
    if (navbarElement.length > 0) {
      if (swiperVideoExists) {
        navbarElement.addClass("opacity-[0.5]");
      } else {
        navbarElement.removeClass("opacity-[0.5]");
      }
    }
  }, []);

  return (
    <Navbar className="navBar-itm hover:opacity-[1] border-none rounded-none max-w-full bg-[#23252b;] mx-auto p-2 lg:pl-6 text-white fixed mt-0 z-50">
      <div className="relative mx-auto flex items-center ">
        <IconButton
          size="sm"
          color="white"
          variant="text"
          onClick={toggleIsNavOpen}
          className="mr-2 lg:hidden"
        >
          <Bars3Icon className="h-6 w-6" />
        </IconButton>
        <div className="flex">
          <Avatar
            variant="rectangular"
            alt="user image"
            src={mylogo}
            crossOrigin="anonymous"
            size="sm"
          />
  
            <Typography
              as="a"
              color="#006837"
              onClick={() => {
                navigateTo("/");
              }}
              className="ml-2 cursor-pointer text-xl py-1.5 changa-one text-[#006837]"
            >
              Dar
            </Typography>
            <Typography
              as="a"
              color="#8BC34A"
              onClick={() => {
                navigateTo("/");
              }}
              className="cursor-pointer text-xl py-1.5 changa-one text-[#8BC34A]"
            >
              Share
            </Typography>
          
        </div>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <div className="ml-auto">
          <ProfileMenu />
        </div>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
