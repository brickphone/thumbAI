'use client';

import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import faceswapShowcase from "../../public/svgs/faceswapShowcase.svg";
import faceswapMobile from "../../public/svgs/faceswapShowcaseMobile.svg";

const FaceswapImage = () => {
     // determine mobile screen breakpoint
     const isMobile = useMediaQuery({ maxWidth: 640 });
     return (
        <div>
            {isMobile ? (
                <Image 
                    alt="faceswap-showcase-mobile"
                    src={faceswapMobile}
                />
            ) : (
                <Image 
                    alt="faceswap-showcase"
                    src={faceswapShowcase}
                />
            )}
        </div>
     )
};

export default FaceswapImage;