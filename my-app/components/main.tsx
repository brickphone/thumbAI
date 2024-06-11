import { Button } from "./ui/button";
import Image from "next/image";
import Laurel from "../public/svgs/laurel.svg";
import Stars from "../public/svgs/stars.svg";
import avatar1 from "../public/pictures/avatar1.jpeg";

const Main = () => {
    return (
        <div id="landing-container" className="pt-12">
            <div id="landing-header" className="flex flex-col w-[600px] items-center space-y-2">
            <div id="laurel" className="relative flex flex-col items-center">
                <Image 
                    alt="laurel-svg"
                    src={Laurel}
                    width={215}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p>#1 AI Thumbnail App</p>
                    <Image 
                        alt="laurel-stars"
                        src={Stars}
                    />
                </div>
                </div>
                <div id="header-text">
                    <h1 className="text-center leading-[70px]">Most Advanced AI Thumbnail Generator</h1>
                    <p className="text-center">ThumbAI: Generate stunning AI-powered thumbnails in seconds,
                        faster and more reliably than hiring a designer or doing it yourself.
                    </p>
                </div>
                <Button className="w-[150px] h-[45px]">5 Free Thumbnails</Button>
                <div id="avatar-group" className="flex items-center space-x-1">
                    <div id="avatar-stack" className="flex -space-x-4">
                        <Image width={40} height={40} className="bozarder-2 border-white rounded-full dark:border-gray-800" src={avatar1} alt="avatar" />
                        <Image width={40} height={40} className="border-2 border-white rounded-full dark:border-gray-800" src={avatar1} alt="avatar" />
                        <Image width={40} height={40} className="border-2 border-white rounded-full dark:border-gray-800" src={avatar1} alt="avatar" />
                        <Image width={40} height={40} className="border-2 border-white rounded-full dark:border-gray-800" src={avatar1} alt="avatar" />
                        <Image width={40} height={40} className="border-2 border-white rounded-full dark:border-gray-800" src={avatar1} alt="avatar" />
                        <Image width={40} height={40} className="border-2 border-white rounded-full dark:border-gray-800" src={avatar1} alt="avatar" />
                    </div>
                    <p className="font-semibold">Trusted by 200+ Creators</p>
                </div>
                <div id="demo">
                    <video id="demo-video">
                        <source src="../public/videos/showcase.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
};

export default Main;