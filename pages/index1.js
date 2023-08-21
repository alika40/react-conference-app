import React, { useState } from "react";


const InputElement = () => {

    const [inputText, setInputText] = useState("");
    const [historyList, setHistotyList] = useState([]);

    return( 
            <div><input
                onChange={(e) => {
                    setInputText(e.target.value);
                    setHistotyList([...historyList, e.target.value]);
                } } 
                placeholder="Enter Text Here" /><br/>
                {inputText}
                <hr/><br/>
                <ul>
                    {
                        historyList.map((char) => <div>{char}</div>)
                    }
                </ul>
            </div>
        );
};

export default InputElement;