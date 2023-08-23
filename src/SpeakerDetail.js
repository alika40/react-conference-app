import React from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";
import useSpeakerDataManager from "./useSpeakerDataManager";



const SpeakerDetail = React.memo(
    ({speakerRec, onHeartFavoriteHandler}) => {
        const {id, firstName, lastName, bio, favorite} = speakerRec;
        const {favoriteClickCount, incrementFavoriteClickCount} = useSpeakerDataManager();
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
                            onClick={(e) => {
                                onHeartFavoriteHandler(e, speakerRec);
                                incrementFavoriteClickCount();
                            }} />
                        <span>{firstName} {lastName}</span>
                    </h4>
                    <h5>Click Count: {favoriteClickCount}</h5>
                    <span>{bio}</span>
                </div>
            </div>
        );
    }
);


export default SpeakerDetail;