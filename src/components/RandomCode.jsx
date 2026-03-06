import { useContext } from "react";
import { LanguageContext } from "../context";

function Random(){
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export default function RandomQoute(){
    const {language} = useContext(LanguageContext);
    // console.log(language);
    return(
        <div className="m-10 p-10 border-4 border-dashed border-gray-300 text-center">
            <h1 className="text-2xl font-bold mb-4">Random Code in Language: {language}</h1>
            {Random()}
        </div>
    )
}