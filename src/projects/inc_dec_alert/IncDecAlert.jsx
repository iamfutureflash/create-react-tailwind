import React, { useState } from "react";


const IncDecAlert = () =>{

    const [number,updateNumber]= useState(0);

    const incNumber = ()=>{
        updateNumber(number+1);
    }

const decNumber = () =>{
    if(number>0){
        updateNumber(number-1);
    }else{
        alert("stop");
        updateNumber(0);
    }
}

    return(
        <>
<div className="bg-slate-800 w-screen h-screen text-white py-4" >
<div className="middel bg-slate-700 mx-5 my-4 rounded-xl">
<h1 className="text-8xl text-center my-4 py-4 text-purple-800">{number}</h1>
<div className="buttons text-center my-4 py-4">
<button className="mx-4 px-8 py-1 text-4xl bg-purple-800 rounded-3xl shadow-lg shadow-purple-600" onClick={incNumber} >Inc</button>
<button className="mx-4 px-8 py-1 text-4xl bg-purple-800 rounded-3xl shadow-lg shadow-purple-600" onClick={decNumber} >Dec</button>
</div>
</div>
</div>
        </>
    );
}

export default IncDecAlert;