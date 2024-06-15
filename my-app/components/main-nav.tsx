import Image from "next/image";
import logo from "../public/svgs/logo.svg";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
    return (
        <div id="navbar-container" className="flex h-[80px] w-full items-center">
            <div id="navbar-brand" className="flex items-center space-x-1 ml-2">
                <Image 
                    alt="logo"
                    src={logo}
                />
                <p className="font-semibold">ThumbAI</p>
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
            <Button className="button ml-auto mr-2">Get Started</Button>
        </div>
    )
};

export default Navbar;