import { useEffect, useState } from "react";

export default function StopWatch(){
    const [time, setTime] = useState(0);
    let running = true;
    useEffect(() => {
        const interval = setInterval(() => {
            if(running) setTime(time + 1); 
        }, 1000);
        return () => clearInterval(interval);
    });

    

    return(
        <div>
        <div>StopWatch Component</div>
        <div>Timer: {time}</div>
        <button onClick={() => {
            running = true;
            const interval = setInterval(() => {
                if(running) setTime(time + 1); 
            }, 1000);
            return () => clearInterval(interval);
        }}>Start</button> | 
        <button onClick={() => {running = false;}}> Stop</button> | 
        <button onClick={() => {setTime(0); }}> Reset</button>
        </div>
    )
}