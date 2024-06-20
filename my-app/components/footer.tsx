import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import logo from "../public/svgs/logo.svg";
import Image from "next/image";

const Footer = () => {
    return (
        <div id="footer-container" className="pt-32 w-[90%] ml-[15%]">
            <div className="flex justify-center">
                <Separator className="w-[95%]" />
            </div>
            <div id="footer-top" className="pt-12 sm:flex">
                <div className="flex flex-col">
                    <p className="font-medium text-3xl">Never miss any news</p>
                    <p>We will send you weekly updates, no spam.</p>
                </div>
                <div id="newsletter-input" className="ml-[130px] flex space-x-1 mt-[12px]">
                    <Input className="w-[280px] h-[40px]" type="email" placeholder="Enter Your Email" />
                    <Button>Subscribe</Button>
                </div>
            </div>
            <div id="footer-bottom" className="pt-16 flex">
                <div id="brand">
                    <div id="logo-name" className="flex items-center space-x-1">
                        <Image alt="logo" src={logo} width={30} height={30} />
                        <p className="font-semibold text-2xl">Thumbnail AI</p>
                    </div>
                    <p className="text-sm ml-1 font-light">Create beautiful thumbnails.</p>
                </div>
                <div id="footer-list" className="ml-[50px] flex space-x-12">
                    <div id="footer-links">
                        <p className="text-xl font-semibold">Links</p>
                        <p>Blog</p>
                        <p>Pricing</p>
                        <p>Login</p>
                        <p>Showcase</p>
                        <p>Affiliate Program</p>
                    </div>
                    <div id="footer-tools">
                        <p className="text-xl font-semibold">Tools</p>
                        <p>AI Thumbnail Creator</p>
                        <p>AI Title Generator</p>
                        <p>Thumbnail Image Editor</p>
                        <p>AI Faceswap</p>
                        <p>Upcoming Features</p>
                    </div>
                    <div id="footer-legal">
                        <p className="text-xl font-semibold">Legal</p>
                        <p>Privacy Policy</p>
                        <p>Terms Of Service</p>
                        <p>Settings</p>
                        <p>Cookies</p>
                        <p>Contact </p>
                    </div>
                    <div id="footer-about">
                        <p className="text-xl font-semibold">About</p>
                        <p>About Us</p>
                        <p>Support</p>
                        <p>Settings</p>
                        <p>Media</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;