import React, { useState, useEffect } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
    const [mouseEventCnt, setMouseEventCnt] = useState(0);

    useEffect(() => {
        window.document.title = `SpeakerId: ${currentSpeakerId}`;
        return () => console.log(`useEffect: Setting Title => ${currentSpeakerId}`);
    }, [mouseEventCnt]);// Prevents useEffect from being called repeatedly except the value(s) in the changes

    return (
        <div>
            <span> MouseEventCnt: {mouseEventCnt} </span>
            {
                [1124, 187, 10803, 823, 1269, 1530].map((speakerId) => {
                    return (
                        <div key={speakerId}
                            onMouseOver={() => {
                                setCurrentSpeakerId(speakerId);
                                setMouseEventCnt(mouseEventCnt + 1);
                                console.log(`MouseEvent: ${speakerId}`);
                            }}>
                            <ImageToggleOnScroll
                                primaryImg={`/static/speakers/bw/speaker-${speakerId}.jpg`}
                                secondaryImg={`/static/speakers/speaker-${speakerId}.jpg`}/>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ImageChangeOnScroll;