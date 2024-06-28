import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import checkmark from "../../public/svgs/checkmark.svg";
import infoSvg from "../../public/svgs/info.svg";
import "../landing/landing.css";

const PricingCardStandard = () => {
    return (
        <div id="pricing-standard" className="w-[327px] h-[480px] border rounded-2xl border-red-400">
            <div id="plan-top" className="flex flex-col pt-4 ml-4">
                <div className="flex items-center">
                    <h2 className="text-2xl">Standard Plan</h2>
                    <span id="save-badge" className="flex-grow-0 min-w-[75px] h-[25px] bg-green-200 ml-12 rounded-sm items-center justify-center flex text-green-800 font-semibold text-xs">Popular</span>
                </div>
                <div id="price-discount" className="mt-2 flex items-center space-x-2">
                    <p className="text-2xl line-through font-semibold text-gray-600">$39</p>
                    <span id="discount-badge" className="px-2 h-[30px] flex items-center rounded-xl text-green-600">Save 48%</span>
                </div>
                <span className="flex flex-row items-center mt-2">
                    <p className="text-5xl font-semibold">$20</p>
                    <p className="pt-4 font-light">per month</p>
                </span>
                <p className="text-sm mt-2">Generate up to 900 thumbnails per year.</p>
                <Button className="w-[242px] h-[35px] text-xs mt-1">Get Started</Button>
            </div>
            
            <Separator className="mt-9" />
            
            <div id="plan-bottom" className="flex flex-col space-y-2 pt-4 ml-4">
                <p className="text-sm font-semibold">Included</p>
                <div id="checkmark-text" className="flex flex-row space-x-1">
                    <Image alt="checkmark-svg" src={checkmark} />
                    <p className="text-sm font-light">50 Credits</p>
                    <Image alt="info-svg" src={infoSvg} />
                </div>
                <div id="checkmark-text" className="flex flex-row space-x-1">
                    <Image alt="checkmark-svg" src={checkmark} />
                    <p className="text-sm font-light">Options to get more credits</p>
                    <Image alt="info-svg" src={infoSvg} />
                </div>
                <div id="checkmark-text" className="flex flex-row space-x-1">
                    <Image alt="checkmark-svg" src={checkmark} />
                    <p className="text-sm font-light">Faceswap</p>
                    <Image alt="info-svg" src={infoSvg} />
                </div>   
                <div id="checkmark-text" className="flex flex-row space-x-1">
                    <Image alt="checkmark-svg" src={checkmark} />
                    <p className="text-sm font-light">Edit Thumbnail</p>
                    <Image alt="info-svg" src={infoSvg} />
                </div>
                <div id="checkmark-text" className="flex flex-row space-x-1">
                    <Image alt="checkmark-svg" src={checkmark} />
                    <p className="text-sm font-light">Unlimited re-edits</p>
                    <Image alt="info-svg" src={infoSvg} />
                </div>
                <div id="checkmark-text" className="flex flex-row space-x-1">
                    <Image alt="checkmark-svg" src={checkmark} />
                    <p className="text-sm font-light">Title Generation</p>
                    <Image alt="info-svg" src={infoSvg} />
                </div>                   
            </div>
        </div>
    )
};

export default PricingCardStandard;