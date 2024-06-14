import thumb1 from "../../public/pictures/thumbnails/thumbnail1.webp";
import thumb2 from "../../public/pictures/thumbnails/thumbnail2.webp";
import thumb3 from "../../public/pictures/thumbnails/thumbnail3.webp";
import thumb4 from "../../public/pictures/thumbnails/thumbnail4.webp";
import thumb5 from "../../public/pictures/thumbnails/thumbnail5.webp";
import thumb6 from "../../public/pictures/thumbnails/thumbnail6.webp";
import thumb7 from "../../public/pictures/thumbnails/thumbnail7.webp";
import thumb8 from "../../public/pictures/thumbnails/thumbnail8.webp";
import Image from "next/image";
import "./thumbnails.css"

const topThumbnails = [thumb1, thumb2, thumb3, thumb4];
const bottomThumbnails = [thumb5, thumb6, thumb7, thumb8];

const Thumbnails = () => {
    return (
        <div id="thumbnail-container">
        {/* top thumbnails */}
        <div id="top-thumbnails">
            {topThumbnails.map((thumb, index) => (
                <div className="thumbnail" key={index}>
                    <Image 
                        src={thumb} 
                        alt="thumb-image" 
                        width={460}
                        height={260}
                    />
                </div>
            ))}
            {/* Repeat the thumbnails to create a seamless loop */}
            {topThumbnails.map((thumb, index) => (
                <div className="thumbnail" key={index + topThumbnails.length}>
                    <Image 
                        src={thumb} 
                        alt="thumb-image" 
                        width={460}
                        height={260}
                    />
                </div>
            ))}
        </div>
        {/* bottom thumbnails */}
        <div id="bottom-thumbnails">
            {bottomThumbnails.map((thumb, index) => (
                    <div className="thumbnail" key={index}>
                        <Image 
                            src={thumb} 
                            alt="thumb-image" 
                            width={460}
                            height={260}
                        />
                    </div>
            ))}
            {/* Repeat the thumbnails to create a seamless loop */}
            {bottomThumbnails.map((thumb, index) => (
                <div className="thumbnail" key={index + bottomThumbnails.length}>
                    <Image 
                        src={thumb} 
                        alt="thumb-image" 
                        width={460}
                        height={260}
                    />
                </div>
            ))}
        </div>
    </div>
    )
};


export default Thumbnails;