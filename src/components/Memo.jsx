import { useMemo, useState } from "react";

export default function Memo(){
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const compute = useMemo(() => {
        console.log("Computing sum for " + a + " and " + b);
        return a + b;
    }, [a, b]);
    return(
        <div className="flex flex-col items-center">
            <input className="px-4 py-2 border border-gray-700 mb-2" type="number" onChange={(e) => setA(Number(e.target.value))} />
            <input className="px-4 py-2 border border-gray-700 mb-2" type="number" onChange={(e) => setB(Number(e.target.value))} />
            <div>Sum: {compute}</div>
        </div>
    )
}