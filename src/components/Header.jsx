import { useState } from "react";

export default function Header(props) {
    const [page, setPage] = useState("Home");
    // const [brandname, setBrandname] = useState(props.brandname);
    // const handleClick = () => {
    //     const newBrandname = prompt("Enter new brand name:");
    //     setBrandname(newBrandname);
    // }
    function handleClick(page){
        setPage(page);
    }
        return (
            <header className="flex flex-row justify-between items-center p-4">
                <h2 className="text-5xl font-bold">{props.brandname}</h2>
                <nav>
                    <ul className="flex flex-row list-none">
                        {props.links.map((link, idx) => (
                            <li onClick={() => props.handleClick()} key={idx} className="text-lg mr-10 hover:text-blue-500 cursor-pointer">{link}</li>
                        ))}
                    </ul>
                </nav>
                <h1 className="text-3xl">{props.time}</h1>
            </header>
        );
}