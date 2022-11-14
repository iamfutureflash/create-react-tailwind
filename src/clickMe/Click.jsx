import React, { useState } from "react";



const Click = () => {
    const [count, setCount] = useState(0);
    function IncrimentNumber() {
        setCount(count + 1);
    }
    function DecrimentNumber() {
        setCount(count - 1);
    }
    return (
        <>
            <div className="bg-slate-400 w-screen h-screen flex justify-center items-center flex-col">
                <h1 className="text-4xl font-extrabold bg-purple-600 px-4 py-2 my-3 rounded-xl" >{count}</h1>
                {/* <button className="text-4xl font-extrabold bg-purple-600 px-4 py-2 my-3 rounded-xl" onClick={IncrimentNumber}  >Click Me</button> */}
                <div className="flex " >
                <button className="text-4xl font-extrabold bg-purple-600 px-4 py-2 my-3 mx-4 rounded-xl" onClick={IncrimentNumber} o >Plus</button>
                <button className="text-4xl font-extrabold bg-purple-600 px-4 py-2 my-3 mx-4 rounded-xl" onClick={DecrimentNumber}  >Minus</button>
                </div>
            </div>
        </>
    );
}
export default Click;