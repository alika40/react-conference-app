//import speakerData from "../../../src/speakerData";
import path from "path";
import fs from "fs";


const {promisify} = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
    //res.status(200).send(JSON.stringify(speakerData, null, 2));

    const method = req?.method;
    const id = parseInt(req?.query.id);
    const recordFromBody = req?.body;

    if(method != "PUT") {
        res.status(501).send(`Method ${method} not implemented!`);
    } else {
        const jsonFile = path.resolve('./', 'db.json');
        try{
            const readFileData = await readFile(jsonFile);
            await delay(100);
            const data = JSON.parse(readFileData);
            if(!data.speakers) {
                res.status(404).send('ERROR: Request failed with status code 404');
            } else {
                const newSpeakerArray = data.speakers.map((rec) => rec.id === id ? recordFromBody : rec);
                writeFile(jsonFile, JSON.stringify({speakers: newSpeakerArray}, null, 2));
                console.log(`PUT: api/speakers/${id} status code: 200`);
            }
        } catch(e) {
            console.log('api/speakers error message: ', e);
        }
    }
}