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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import faceswapShowcase from "../public/svgs/faceswapShowcase.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import PricingCardFree from "./pricing-cards/pricingCardFree";
import PricingCardStandard from "./pricing-cards/pricingCardStandard";
import PricingCardPremium from "./pricing-cards/pricingCardPremium";
import SignupBox from "./signupBox";
import logoWhite from "../public/svgs/logoWhite.svg";
import faceSwapMobile from "../public/svgs/faceswapShowcaseMobile.svg";
import faceswapGraident from "../public/svgs/faceswapGradient.svg";

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
                <div id="demo" className="pt-5 flex justify-center items-center sm:ml-[5%]">
                    <video id="demo-video" className="border-2 rounded-xl sm:h-[340px] w-[457px]">
                        <source src="/videos/showcase.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            
            <div className="flex items-center justify-center pt-12">
                <div id="trusted-bg" className="bg-red-400 rounded-full w-[125px] h-[26px] flex items-center justify-center space-x-1">
                    <Image 
                        alt="logo-svg" 
                        src={logoWhite}  
                        width={20}
                        />
                    <p className="font-semibold flex justify-center text-white text-xs">Trusted By</p>
                </div>
            </div> 
            {/* Testamonials */}
            <div id="testamonials" className="flex flex-col sm:flex-row justify-center items-center pt-2 space-x-3">
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
            
            {/* Features */}
            <div id="features-container" className="pt-12 flex flex-col justify-center items-center">
                <p className="text-4xl font-semibold">Features</p>
                <div id="faceswap-feature" className="pt-6">
                    <Card className="sm:w-[1000px] h-[740px] sm:h-[340px] relative overflow-hidden">
                        <div 
                            className="absolute inset-[-2px] bg-no-repeat bg-cover z-10"
                            style={{ backgroundImage: `url(${faceswapGraident.src})` }}
                        ></div>
                        <div className="relative z-20">
                            <CardHeader>
                                <CardTitle className="pt-5">Faceswap</CardTitle>
                                <CardDescription>Upload a picture of yourself, and watch our AI smoothly swap out the original face with yours, ensuring your audience instantly recognizes you.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div id="mobile-showcase" className="block ml-5 sm:hidden">
                                    <Image
                                        alt="faceswap-showcase-mobile"
                                        src={faceSwapMobile}
                                    />
                                </div>
                                <div id="desktop-showcase" className="hidden sm:block">
                                    <Image 
                                        alt="faceswap-showcase"
                                        src={faceswapShowcase}  
                                    />
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Pricing */}
            <div id="pricing-container" className="pt-64 flex flex-col justify-center items-center">
                <div id="pricing-text" className="text-center">
                    <p className="text-3xl font-semibold">Pricing <span>🚀</span></p>
                    <p>Try for free and upgrade to get more and better features.</p>
                </div>
                <div id="pricing-tabs" className="pt-6">
                    <Tabs defaultValue="Monthly" className="w-[400px]">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="Monthly">Monthly</TabsTrigger>
                            <TabsTrigger value="Yearly">Yearly
                                <span id="save-badge" className="flex-grow-0 min-w-[75px] h-[25px] bg-green-200 ml-5 rounded-sm items-center justify-center flex text-green-800 font-light text-xs">Save 20%</span>
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                {/* Pricing cards */}
                <div id="cards-container" className="pt-6 flex flex-col sm:grid grid-cols-3 gap-8">
                    <PricingCardFree />
                    <PricingCardStandard />
                    <PricingCardPremium />
                </div>
            </div>
            <div id="signupbox" className="pt-32 flex justify-center">
                <SignupBox />
            </div>
        </div>
    )
};

export default Main;