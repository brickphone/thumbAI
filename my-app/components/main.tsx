import { Button } from "./ui/button";
import Image from "next/image";
import Laurel from "../public/svgs/laurel.svg";
import Stars from "../public/svgs/stars.svg";
import avatar1 from "../public/pictures/avatar1.jpeg";
import redStars from "../public/svgs/redstars.svg";
import cashjordan from "../public/pictures/cashjordan.jpeg";
import mrbeast from "../public/pictures/mrbeast.jpeg";
import magnates from "../public/pictures/magnates.jpeg";

const Main = () => {
    return (
        <div id="landing-container" className="pt-12">
            <div id="landing-header-video" className="flex flex-row">
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
                </div>
                <div id="demo" className="ml-auto mr-2">
                    <video id="demo-video" width="457" className="border-2 rounded-xl h-[340px]">
                        <source src="/videos/showcase.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            
            <div className="flex items-center justify-center pt-6">
                <p className="font-semibold">Trusted By</p>
            </div>
            <div id="testamonials" className="flex flex-row justify-center items-center pt-2 space-x-3">
                <div id="testamonial-1" className="flex flex-col pt-2 items-center">
                    <Image alt="red-stars" src={redStars} />
                    <div id="profile-name" className="flex items-center pt-2 ml-2">
                        <Image 
                            width={34} 
                            height={34} 
                            alt="testamonial-profile" 
                            src={cashjordan} 
                            className="rounded-full"
                            />
                        <p className="font-semibold text-xl ml-1">Cash Jordan</p>
                    </div>
                    <p className="text-sm">&quot;Exactly what I was looking for&quot;.</p>
                </div>
                <div id="testamonial-2" className="flex flex-col pt-2 items-center">
                    <Image alt="red-stars" src={redStars} />
                    <div id="profile-name" className="flex items-center pt-2">
                        <Image 
                            width={34} 
                            height={34} 
                            alt="testamonial-profile" 
                            src={mrbeast} 
                            className="rounded-full"
                            />
                        <p className="font-semibold text-xl ml-1">MrBeast 2</p>
                    </div>
                    <p className="text-sm">&quot;Very easy to use&quot;.</p>
                </div>
                <div id="testamonial-3" className="flex flex-col pt-2 items-center">
                    <Image alt="red-stars" src={redStars} />
                    <div id="profile-name" className="flex items-center pt-2">
                        <Image 
                            width={34} 
                            height={34} 
                            alt="testamonial-profile" 
                            src={magnates} 
                            className="rounded-full"
                            />
                        <p className="font-semibold text-xl ml-1">MagnatesMedia</p>
                    </div>
                    <p className="text-sm">&quot;Just fired my designer&quot;.</p>
                </div>
            </div>
        </div>
    )
};

export default Main;