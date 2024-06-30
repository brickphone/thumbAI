import { Separator } from "../ui/separator";
import logo from "../../public/svgs/logo.svg";
import Image from "next/image";
import infoSvg from "../../public/svgs/info.svg";
import { Progress } from "../ui/progress";

const Sidebar = () => {
    return (
         <div id="sidebar-container" className="w-1/5 flex">
            <div className="flex-1">
                <div id="brand" className="flex items-center space-x-1 ml-4 mt-4">
                    <Image 
                        alt="logo"
                        src={logo}
                    />
                    <p className="font-semibold text-2xl">ThumbAI</p>
                    <span id="beta-badge" className="px-2 h-[30px] flex items-center rounded-xl text-red-600">Beta</span>
                </div>
                <Separator className="my-4" />

                {/* credit usage */}
                <div id="credit-usage" className="flex w-[220px] h-[135px] bg-gray-100 rounded-xl py-2 ml-4">
                    <div id="credits-text" className="flex flex-col ml-4">
                        <div className="flex flex-row items-center">
                            <p className="font-semibold">Your Credits</p>
                            <Image 
                                className="ml-[70px]"
                                alt="info-svg" 
                                src={infoSvg} 
                            />
                        </div>
                        <p className="text-sm pt-3">You have used 50% of your credits</p>
                    </div>
                </div>
            </div>
            <Separator orientation="vertical" className="pt-[3000px] my-1 ml-3" />
        </div>
    )
};

export default Sidebar;