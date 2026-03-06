import { useEffect, useState } from "react";

export default function Clock(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
            console.log(document.title)
        }, 1000);
        document.title = time;

        return () => {
            clearInterval(intervalId);
        }
    }); 
    return(
        <div>
            {time}
        </div>
    )
}