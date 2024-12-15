import { ChevronDown, Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import BellIcon from "./svgs/bell";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <div className="border-b  h-20 flex items-center relative justify-center gap-x-2 w-full">

    <div className="h-full w-[95%] flex items-center justify-between gap-x-2 ">
      <div className="bg-[#F7F7F7] px-2 gap-x-3 h-10 border-0 flex items-center w-[40%] ">
        <Search />
        <Input
          placeholder="Quick search patient"
          className=" placeholder:text-[#ACACAC] ring-0 outline-none h-10 border-0 bg-inherit focus:ring-ring-0
        focus-visible:ring-0 placeholder:text-xl focus-visible:ring-ring focus-visible:ring-offset-0
        "
        />
      </div>

      <div className="flex gap-x-2 items-center">
        <BellIcon />
        <div className="flex gap-x-1 items-center">

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-[#0C091F]">Kim Jones</p>
        </div>
        <div className="flex items-center gap-x-1 border-b-2">
          <p>EN</p>
          <ChevronDown />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
