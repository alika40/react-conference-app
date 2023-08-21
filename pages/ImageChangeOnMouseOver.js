import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const imageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver 
                primaryImg="/static/speakers/bw/speaker-187.png" 
                secondaryImg="/static/speakers/speaker-187.png"/>

                &nbsp;&nbsp;&nbsp;

            <ImageToggleOnMouseOver 
                primaryImg="/static/speakers/bw/speaker-1124.png"
                secondaryImg="/static/speakers/speaker-1124.png"/>
        </div>
    );
};

export default imageChangeOnMouseOver;