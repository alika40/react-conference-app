import React from "react";
import App from "../src/App";
import path from "path";
import fs from "fs";


export const InitialSpeakerDataContext = React.createContext();


export async function getServerSideProps() { // Special function from Next.js to pass returned data to react component
    const {promisify} = require("util");
    const readFile = promisify(fs.readFile);
    const jsonFile = path.resolve('./', 'db.json');
    let initialSpeakerData;
    
    try {
        const readFileData = await readFile(jsonFile);
        initialSpeakerData = JSON.parse(readFileData).speakers;
    } catch(e) {
        console.log('api/speakers error message: ', e);
    }

    return {props: { initialSpeakerData }};
}


const speakers = ({initialSpeakerData}) => {
    return <InitialSpeakerDataContext.Provider value={initialSpeakerData}>
        <App pageName="Speakers" />
    </InitialSpeakerDataContext.Provider>;
};


export default speakers;

// import path from "path";
// import fs from "fs";


// export const InitialSpeakerDataContext = React.createContext();

// Integration of server-side generated codes with useContext on the client
// Solution to getServerSideProps: When the content changes, any page request causes the server to generate new
// codes, while that is going on, other page requests within this period get old content while subsequest ones get
// updated content. It scales to infinity. Run build command 'npm run build' to build the artifact for deployment. 
/**export async function getStaticProps() { // Special function from Next.js to pass returned data to react component
    const {promisify} = require("util");
    const readFile = promisify(fs.readFile);
    const jsonFile = path.resolve('./', 'db.json');
    let initialSpeakerData;
    
    try {
        const readFileData = await readFile(jsonFile);
        initialSpeakerData = JSON.parse(readFileData).speakers;
    } catch(e) {
        console.log('api/speakers error message: ', e);
    }

    return {revalidateValue: 1, props: {initialSpeakerData}};
}*/

// Integration of server-side generated codes with useContext on the client
// Downside: Overloading the server with page request for a particular page
// as it has to download all the components. It's ok if content doesn't change regularly and with requests.
/*export async function getServerSideProps() { // Special function from Next.js to pass returned data to react component
    const {promisify} = require("util");
    const readFile = promisify(fs.readFile);
    const jsonFile = path.resolve('./', 'db.json');
    let initialSpeakerData;
    
    try {
        const readFileData = await readFile(jsonFile);
        initialSpeakerData = JSON.parse(readFileData).speakers;
    } catch(e) {
        console.log('api/speakers error message: ', e);
    }

    return {props: {initialSpeakerData}};
}


const speakers = ({initialSpeakerData}) => {
    return <InitialSpeakerDataContext.Provider value={initialSpeakerData}>
        <App pageName="Speakers" />
    </InitialSpeakerDataContext.Provider>;
};*/