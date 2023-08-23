import React, { 
    useState,
    useContext,
    useCallback,
    useMemo
} from "react";

import { Header } from "./Header";
import { Menu } from "./Menu";
import SpeakerDetail from "./SpeakerDetail";
import { ConfigContext } from "./App";
import { GlobalContext } from "./GlobalState";


const Speakers = () => {
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);
    const context = useContext(ConfigContext);

    const {
        isLoading,
        speakerList,
        toggleSpeakerFavorite
    } = useContext(GlobalContext);
    
    const handleChangeSaturday = () => setSpeakingSaturday(!speakingSaturday);
    const handleChangeSunday = () => setSpeakingSunday(!speakingSunday);

    const newSpeakerList = useMemo(// Use useMemo to cache value from complex computation for performance optimization
        () => speakerList
        .filter(({sat, sun}) => (speakingSaturday && sat) || (speakingSunday && sun))
        .sort((a, b) => {
                if(a.firstName < b.firstName) return -1;
                if(a.firstName > b.firstName) return 1;
                return 0;
            }), [speakingSaturday, speakingSunday, speakerList]
    );

    const speakerListFiltered = isLoading ? [] : newSpeakerList;

    const heartFavoriteHandler = useCallback((e, speakerRec) => { // Use useCallback together with React.memo to cache func, see SpeakerDetail
        e.preventDefault();
        toggleSpeakerFavorite(speakerRec);
    }, []);

    if(isLoading) return <div>Laoding....</div>;
    
    return (
        <div>
            <Header />
            <Menu />

            <div className="container">
                <div className="btn-toolbar margintopbottom5 checkbox-bigger">
                    {
                        context.showSpeakerSpeakingSaturtdays === false ? null : (
                            <div className="hide">
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input className="form-check-input"
                                            type="checkbox"
                                            onChange={handleChangeSaturday}
                                            checked={speakingSaturday}
                                            />
                                        Saturday Speakers
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input className="form-check-input"
                                            type="checkbox"
                                            onChange={handleChangeSunday}
                                            checked={speakingSunday}
                                            />
                                        Sunday Speakers
                                    </label>
                                </div>
                            </div>)
                    }
                </div>
                <div className="row">
                    <div className="card-deck">
                       {
                            speakerListFiltered.map((speakerRec) => {
                                return (
                                    <SpeakerDetail 
                                        key={speakerRec.id}
                                        speakerRec={speakerRec}
                                        onHeartFavoriteHandler={heartFavoriteHandler} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Speakers;