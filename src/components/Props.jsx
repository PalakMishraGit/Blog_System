import React from "react";

// Class Component Version

export default class Props extends React.Component {
    render() {
        return (
            <>
                <style>{`
                    @keyframes shadowPulse {
                        0%   { box-shadow: 2px 2px 10px grey; }
                        25%  { box-shadow: 2px 2px 10px pink; }
                        50% { box-shadow: 2px 2px 20px white; }
                        75% { box-shadow: 2px 2px 10px pink; }
                        100% { box-shadow: 2px 2px 10px grey; }
                    }
                `}</style>

                <div
                    style={{border: '2px solid black', display: 'inline-block', margin: '10px', padding: '10px', borderRadius: '10px', boxShadow: '1px 1px 1px', animation: 'shadowPulse 2s ease-in-out infinite'}}>
                    <h2>{this.props.name}</h2>
                    <p>Price: {this.props.price}</p>
                    <p>Category: {this.props.category}</p>
                    <ul className="flex flex-row">
                        Features: {this.props.arr.map((item, idx) => (
                            <li className="mx-1" key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </>
        )
}
}


// Functional Component Version

// export default function Props({name, price, category, arr = []}) {
//     return (
//         <>
//             <style>{`
//                 @keyframes shadowPulse {
//                     0%   { box-shadow: 2px 2px 10px grey; }
//                     25%  { box-shadow: 2px 2px 10px pink; }
//                     50% { box-shadow: 2px 2px 20px white; }
//                     75% { box-shadow: 2px 2px 10px pink; }
//                     100% { box-shadow: 2px 2px 10px grey; }
//                 }
//             `}</style>

//             <div
//                 style={{border: '2px solid black', display: 'inline-block', margin: '10px', padding: '10px', borderRadius: '10px', boxShadow: '1px 1px 1px', animation: 'shadowPulse 2s ease-in-out infinite'}}>
//                 <h2>{name}</h2>
//                 <p>Price: {price}</p>
//                 <p>Category: {category}</p>
//                 <ul className="flex flex-row">
//                     Features: {arr.map((item, idx) => (
//                         <li className="mx-1" key={idx}>{item}</li>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     )
// }