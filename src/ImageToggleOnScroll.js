import React, { useRef, useEffect, useState, useContext } from "react";
import { GlobalContext } from "./GlobalState";


const ImageToggleOnScroll = ({primaryImg, secondaryImg}) => {
    const {imageRerenderIdentifier} = useContext(GlobalContext);

    const imageRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const scrollHandler = () => setInView(isInView());

    useEffect(() => {
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [imageRerenderIdentifier]);


    return (
        <img src={// transparent gif required
                isLoading ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAICRA" :
                inView ? secondaryImg : primaryImg
            }
            ref={imageRef}
            alt=""/>
    );
};

export default ImageToggleOnScroll;