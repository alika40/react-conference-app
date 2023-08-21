import React, { useEffect } from "react";


const Syntax = () => {

    useEffect(() => {
        console.log("using useEffect");

        return () => console.log("useEffect cleanup");
    });

    return (
        <div></div>
    );

};