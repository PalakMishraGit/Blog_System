import { useContext, useRef } from "react";
import { LanguageContext } from "../context";

export default function UsedRefFunc(){
    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "gray";
        inputRef.current.value = "K23SH";
    }
    
    const {language, setLanguage} = useContext(LanguageContext);
    return(
        <div>
            <input type="text" ref={inputRef} className="text-2xl p-2 m-2 border-2 border-gray-400 rounded"/>
            <button onClick={handleFocus} className="text-white bg-blue-500 p-2 m-2 rounded">Focus Input</button>
            <p>Current language: {language}</p>
            <select onChange={(e) => setLanguage(e.target.value)} value={language} className="bg-black p-2 m-2 border-2 border-gray-400 rounded">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
            </select>
        </div>
    )
}