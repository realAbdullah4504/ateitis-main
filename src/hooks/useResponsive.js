import { useEffect, useState } from "react";

export const useResponsive = () => {
    const [isTablet, setIsTablet] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth <= 992);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return isTablet;
};