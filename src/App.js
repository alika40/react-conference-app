import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";
import { GlobalProvider } from "./GlobalState";


export const ConfigContext = React.createContext();

const configValues = {
    showSignMeUp: true,
    showSpeakerSpeakingSaturtdays: true,
};

const PageToShow = (pageName) => {
    if(pageName === "Home") return <Home></Home>;
    if(pageName === "Speakers") return <Speakers></Speakers>;
    return <div>Not Found.</div>;
};

const App = ({pageName}) => {
    return (
        <ConfigContext.Provider value={configValues}>
            <GlobalProvider>
                <div>{ PageToShow(pageName) }</div>
            </GlobalProvider>
        </ConfigContext.Provider>
    );
};


export default App;