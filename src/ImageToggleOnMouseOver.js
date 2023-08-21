import React, { useRef } from "react";


const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);
    return (
        <img src={primaryImg}
            width="35%"
            onMouseOver={() => imageRef.current.src = secondaryImg}
            onMouseOut={() => imageRef.current.src = primaryImg}
            ref={imageRef}
            alt=""/>
    );
};

export default  ImageToggleOnMouseOver;