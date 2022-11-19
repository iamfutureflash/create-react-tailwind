import React, { useState } from 'react';
import question from './accordian_data';

const Accordian = () =>{
    const [data, setdata] = useState(question);
    const [show, setshow] = useState(false);
    return (
        <>

        
        {data.map((val)=>{
            return <>
            <div className=' items-center justify-center bg-slate-400 flex flex-row' >
            <button className='px-4 py-2 bg-green-600 rounded-xl shadow-lg' onClick={()=>setshow(!show)}>{show?"--":"+"}</button>
            <h1 className=' px-3 text-2xl font-semibold ' key={val.id} >{val.question}</h1>
            </div>
            {show && <h1 className='bg-slate-400 text-center text-xl font-thin' key={val.id} >{val.answer}</h1>}
            </>
        })}
        
        
        </>
    );
}
export default Accordian;