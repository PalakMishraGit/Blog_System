import { useEffect, useState } from "react";
import { dataDelete, dataPost, dataPut, getPosts } from "./apiGet";

export default function ShowDataApi(){
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const apiData = await getPosts();
        setData(apiData);
        // console.log(data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    async function addData(e){
        e.preventDefault();
        const res = await dataPost({
            name: e.target.name.value,
            email: e.target.email.value
        });
        setData([...data, res]);
    }
    async function dataDeleteFunc(id){
        const res = await dataDelete(id);
        console.log(res);
        setData(data.filter((item) => item.id !== id));
    }
    // console.log(data);
    return(
        <div className="grid grid-cols-3 space-x-3 space-y-3">
            <div className="p-3 rounded-xl border">
                <form onSubmit={(e) => addData(e)} id="dataForm">
                    <label className="mr-2">Name</label>
                    <input type='text' name="name" placeholder="Add the name" id="inputName"/> <br/>
                    <label className="mr-2">Email</label>
                    <input type='text' name="email" placeholder="Add the email" id="inputEmail"/> <br/>
                    <button type="submit" id="submitBtn">Submit</button>
                </form>

            </div>
            {data.map((item) => {
                return(
                    <div key={item.id} className="p-3 border rounded-lg ">
                        <div className="text-center text-xl">{item.name}</div>
                        <div className="text-center mb-2">{item.email}</div>
                        <div className="flex justify-center space-x-2">
                            <button onClick={() => {
                                document.getElementById('inputName').value = item.name;
                                document.getElementById('inputEmail').value = item.email;
                                document.getElementById('submitBtn').innerText = "Update";
                                document.getElementById('dataForm').onsubmit = async (e) => {
                                    e.preventDefault();
                                    const res = await dataPut(item.id,{
                                        name: e.target.name.value,
                                        email: e.target.email.value
                                    });
                                    console.log(res);
                                    // setData(res);
                                    e.target.reset();
                                    document.getElementById('submitBtn').innerText = "Submit";
                                }
                            }} className="px-4 border rounded-sm">Edit</button>
                            <button onClick={() => dataDeleteFunc(item.id)} className="px-4 border rounded-sm">Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}