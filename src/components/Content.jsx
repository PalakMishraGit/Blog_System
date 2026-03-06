export default function Content(){

    return (
        <main style={{ textAlign: 'center', marginTop: '20px', border: "2px solid black", padding: "20px", width: "200px", marginLeft: "auto", marginRight: "auto", borderRadius: "10px" }}>
            <img src="https://cdn.pixabay.com/photo/2022/05/04/17/32/skull-7174522_640.jpg" alt="Profile pic" style={{ borderRadius: '50%', width: '150px', height: '150px' }}/>
            <div style={{marginTop: "10px"}}>Skull</div>
            {/* <div onMouseEnter={() => {
                    document.getElementById("money").style.display = "none";
                }} id="money" onMouseLeave={() => {
                    document.getElementById("money").style.display = "block";
                }} style={{padding: "100px", border: "2px solid black", margin: "20px"}}>
                <button onClick={() => {alert("You lassy!")}}>Click me for money</button>
            </div> */}
        </main>
    );
}