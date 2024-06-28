import Image from "next/image";
import logo from "../public/svgs/logo.svg";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import menuSvg from "../public/svgs/menu.svg";

const Navbar = () => {
    return (
        <div id="navbar-container" className="flex rounded-full h-[80px] w-full border-white items-center backdrop-blur-3xl bg-white/10 sticky top-3 z-10">
            <div id="navbar-brand" className="flex items-center space-x-1 ml-2">
                <div id="mobile-menu" className="sm:hidden rounded-lg w-[40px] h-[40px] flex items-center justify-center bg-black mr-5">
                    <Image 
                        alt="menu-svg"
                        src={menuSvg}
                    />
                </div>
                <Image 
                    alt="logo"
                    src={logo}
                />
                <p className="font-semibold text-xl">ThumbAI</p>
            </div>
            <div id="navbar-middle" className="flex space-x-5 absolute left-1/2 transform -translate-x-1/2">
                <p className="flex font-semibold">Features
                    <ChevronDown className="cursor-pointer" />
                </p>
                <p className="font-semibold">Pricing</p>
                <p className="flex font-semibold">Resources
                    <ChevronDown className="cursor-pointer" />
                </p>
            </div>
            <Button className="button ml-auto mr-3">Get Started</Button>
        </div>
    )
};

export default Navbar;