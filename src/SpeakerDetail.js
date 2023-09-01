import React, { useContext } from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";
import { FavoriteClickCountContext } from "./favoriteClickCountContext";



const SpeakerDetail = React.memo(
    ({speakerRec, onHeartFavoriteHandler}) => {
        const {id, firstName, lastName, bio, favorite} = speakerRec;
        const {incrementFavoriteClickCount} = useContext(FavoriteClickCountContext);

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
                    <span>{bio}</span>
                </div>
            </div>
        );
    }
);


export default SpeakerDetail;