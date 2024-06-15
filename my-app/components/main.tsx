import { Button } from "./ui/button";
import Image from "next/image";
import Laurel from "../public/svgs/laurel.svg";
import Stars from "../public/svgs/stars.svg";
import avatar1 from "../public/pictures/avatar1.jpeg";
import redStars from "../public/svgs/redstars.svg";
import cashjordan from "../public/pictures/cashjordan.jpeg";
import mrbeast from "../public/pictures/mrbeast.jpeg";
import magnates from "../public/pictures/magnates.jpeg";
import Thumbnails from "./landing/thumbnails";
import redBackground from "../public/svgs/redbg.svg";

const Main = () => {
    return (
       <div id="landing-container" className="pt-12">
            <Image 
                alt="red-background" 
                src={redBackground}
                className="absolute top-0 left-0 w-full h-full object-cover z-[-10]"
                />
            <div id="landing-header-video" className="flex flex-col sm:flex-row">
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
                        <h1 className="text-center leading-[70px]">
                            Most Advanced <span className="text-[#FF4444]">AI Thumbnail</span> Generator
                        </h1>
                        <p className="text-center">ThumbAI: Generate stunning AI-powered thumbnails in seconds,
                                faster and more reliably than hiring a designer or doing it yourself.
                    </p>
                    </div>
                    <Button className="button w-[150px] h-[45px]">5 Free Thumbnails</Button>
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
                
                {/* Demo video */}
                <div id="demo" className="pt-5 flex justify-center items-center sm:ml-auto mr-12">
                    <video id="demo-video" className="border-2 rounded-xl h-[340px] w-[457px]">
                        <source src="/videos/showcase.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            
            <div className="flex items-center justify-center pt-12">
                <p className="font-semibold">Trusted By</p>
            </div> 
            {/* Testamonials */}
            <div id="testamonials" className="flex flex-row justify-center items-center pt-2 space-x-3">
                <div id="testamonial-1" className="flex flex-col pt-2 items-center">
                    <Image alt="red-stars" className="ml-4" src={redStars} />
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
            {/* thumbnail shocase */}
            <div id="thumbnail-showcase" className="pt-12">
                <Thumbnails />
            </div>
        </div>
    )
};

export default Main;