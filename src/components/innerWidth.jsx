import { useState } from "react";

export default function GetInnerWidth(){
    const [width, setWidth] = useState(window.innerWidth);
    
    function changeWidth() {setWidth(window.innerWidth)};
    window.addEventListener('resize', () => {
        changeWidth();
    })

    return(
        <h1>Inner Width: {width}</h1>
    )
}