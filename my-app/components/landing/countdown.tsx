'use client'

import { useState, useEffect } from "react";

const DiscountCountdown = () => {
    const [timeString, setTimeString] = useState("22h 15m 32s");

    useEffect(() => {
        // starting time in seconds
        let timeInSeconds = (22 * 3600) + (24 * 60) + 13;

        const updateCountdown = () => {
            // Calculate hours, minutes, and seconds
            const hours = Math.floor(timeInSeconds / 3600);
            const minutes = Math.floor((timeInSeconds % 3600) / 60);
            const seconds = timeInSeconds % 60;
 
            // Format the time string
            const formattedTime = `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
 
             // Update the state with the new time string
             setTimeString(formattedTime);

             // Decrease time by one second
             timeInSeconds--;
        }

        // update countdown every second
        const interval = setInterval(updateCountdown, 1000);

        updateCountdown();

    }, []);

    return (
        <p className="text-red-600">{timeString}</p>
    )
};

export default DiscountCountdown;