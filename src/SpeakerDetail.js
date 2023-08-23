import React from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";



const SpeakerDetail = React.memo(
    ({speakerRec, onHeartFavoriteHandler}) => {
        const {id, firstName, lastName, bio, favorite} = speakerRec;
        return (
            <div className="card col-4 cardmin">
                <ImageToggleOnScroll className="card-img-top"
                                    primaryImg={`/static/speakers/bw/speaker-${id}.jpg`}
                                    secondaryImg={`/static/speakers/speaker-${id}.jpg`}
                                    alt={`${firstName} ${lastName}`} />
    
                <div className="card-body">
                    <h4 className="card-title">
                        <button
                            className={ favorite ? "heartredbutton" : "heartdarkbutton"}
                            onClick={(e) => onHeartFavoriteHandler(e, speakerRec)} />
                        <span>{firstName} {lastName}</span>
                    </h4>
                    <span>{bio}</span>
                </div>
            </div>
        );
    }
);


export default SpeakerDetail;