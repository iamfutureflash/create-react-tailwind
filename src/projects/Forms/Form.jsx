import React, { useState } from "react";

let name = "hi";
const Form = () => {
    const [name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [Fullname, setFullName] = useState("");
    function SaveData(e) {
        e.preventDefault();
        setFullName(name + " " + Password);
    }
    function saveName(e) {
        setName(e.target.value);
    }
    function savePassword(e) {
        setPassword(e.target.value);
    }
    return (
        <div  >
            <form onSubmit={SaveData} className="bg-slate-400 flex flex-col justify-center items-center px-4 py-4 w-screen h-screen font-extrabold">
                <h1 className="text-3xl py-2">Hello 🙋 {Fullname}</h1>
                <input onChange={saveName} className="text-xl my-4 rounded-lg py-2 px-2 hover:bg-green-400" type="text" placeholder=" 💁 Enter Your Name" />
                <input onChange={savePassword} className="text-xl my-4 rounded-lg py-2 px-2 hover:bg-green-400" type="password" placeholder="🔒 Enter Your Password" />
                <button type="submit" className="text-3xl my-4 bg-green-500 px-6 py-2 rounded-xl"> Submit 🥇</button>
            </form>
        </div>
    );
}
export default Form;