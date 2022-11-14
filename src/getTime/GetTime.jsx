import React, { useState } from 'react';

const GetTime = () => {
    const [time, getTime] = useState(new Date().toLocaleTimeString());
    function setTime() {
        getTime(new Date().toLocaleTimeString());
    }
    return (
        <>
            <div className="bg-slate-400 w-screen h-screen flex justify-center items-center flex-col" >
                <h1 className="text-4xl font-extrabold bg-purple-600 px-4 py-2 my-3 rounded-xl"  > {time}</h1>
                <button className="text-4xl font-extrabold bg-purple-600 px-4 py-2 my-3 rounded-xl" onClick={setTime}  >Get Time</button>
            </div>
        </>
    );
}
export default GetTime;