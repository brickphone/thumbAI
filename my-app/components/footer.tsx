import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import logo from "../public/svgs/logo.svg";
import Image from "next/image";

const Footer = () => {
    return (
        <div id="footer-container">
             <div className="flex justify-center pt-12">
                    <Separator className="w-[90%]" />
                </div>
            <div id="footer-inner" className="ml-[7%] pt-5 w-[90%] sm:ml-[15%]">
                <div id="footer-top" className="pt-12 sm:flex">
                    <div className="flex flex-col">
                        <p className="font-medium text-3xl">Never miss any news</p>
                        <p>We will send you weekly updates, no spam.</p>
                    </div>
                    <div id="newsletter-input" className="sm:ml-[130px] flex space-x-1 mt-[12px]">
                        <Input className="w-[280px] h-[40px]" type="email" placeholder="Enter Your Email" />
                        <Button>Subscribe</Button>
                    </div>
                </div>
                <div id="footer-bottom" className="pt-16 sm:flex">
                    <div id="brand" className="mb-8">
                        <div id="logo-name" className="flex items-center space-x-1">
                            <Image alt="logo" src={logo} width={30} height={30} />
                            <p className="font-semibold text-2xl">ThumbAI</p>
                        </div>
                        <p className="text-sm ml-1 font-light">Create beautiful thumbnails.</p>
                    </div>
                    <div id="footer-list" className="space-y-8 flex flex-col sm:flex-row sm:ml-[50px] sm:space-y-0 space-x-0 sm:space-x-12 pt-0">
                        <div id="footer-links">
                            <p className="text-xl font-semibold">Links</p>
                            <p className="text-sm">Blog</p>
                            <p className="text-sm">Pricing</p>
                            <p className="text-sm">Login</p>
                            <p className="text-sm">Showcase</p>
                            <p className="text-sm">Affiliate Program</p>
                        </div>
                        <div id="footer-tools">
                            <p className="text-xl font-semibold">Tools</p>
                            <p className="text-sm">AI Thumbnail Creator</p>
                            <p className="text-sm">AI Title Generator</p>
                            <p className="text-sm">Thumbnail Image Editor</p>
                            <p className="text-sm">AI Faceswap</p>
                            <p className="text-sm">Upcoming Features</p>
                        </div>
                        <div id="footer-legal">
                            <p className="text-xl font-semibold">Legal</p>
                            <p className="text-sm">Privacy Policy</p>
                            <p className="text-sm">Terms Of Service</p>
                            <p className="text-sm">Settings</p>
                            <p className="text-sm">Cookies</p>
                            <p className="text-sm">Contact </p>
                        </div>
                        <div id="footer-about">
                            <p className="text-xl font-semibold">About</p>
                            <p className="text-sm">About Us</p>
                            <p className="text-sm">Support</p>
                            <p className="text-sm">Settings</p>
                            <p className="text-sm">Media</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;