import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import Image from "next/image"
import checkmark from "../../public/svgs/checkmark.svg";
import infoSvg from "../../public/svgs/info.svg";


const PricingCardPremium = () => {
    return (
        <div id="pricing-standard" className="w-[327px] h-[480px] border rounded-2xl border-gray-200">
            <div id="plan-top" className="flex flex-col space-y-5 pt-4 ml-4">
                <h2 className="text-2xl">Standard Plan</h2>
                <span className="flex flex-row items-center">
                    <p className="text-5xl font-semibold">$39</p>
                    <p className="pt-4 font-light">per month</p>
                </span>
                <p className="text-sm">Generate up to 1500 thumbnails per year.</p>
                <Button className="w-[242px] h-[35px] text-xs">Get Started</Button>
            </div>
            
            <Separator className="mt-9" />
            
            <div id="plan-bottom" className="flex flex-col space-y-2 pt-4 ml-4">
                <p className="text-sm font-semibold">Included</p>
                <div id="checkmark-text" className="flex flex-row space-x-1">
                    <Image alt="checkmark-svg" src={checkmark} />
                    <p className="text-sm font-light">120 Credits</p>
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

export default PricingCardPremium;