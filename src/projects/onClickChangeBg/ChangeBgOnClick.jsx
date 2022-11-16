import React, { useState } from "react";
const ChangeBgOnClick = () => {
    const [bgColor, SetColor] = useState("bg-slate-400");
    const [name, SetName] = useState("Click Me");
    let s = true;
    function ChangeColorAndName() {
        if (s) {
            s = false;
            SetColor('bg-purple-400');
            SetName('Clicked 👍');
        } else {
            SetColor('bg-slate-400');
            SetName('Click Me');
            s = true;
        }
    }
    function ChangeColorAndName1() {
        SetColor('bg-green-400');
        SetName('Double Clicked👍');
    }
    return (
        <>
            <div className={bgColor} id="div1">
                <button id="btn1" onClick={ChangeColorAndName} onMouseEnter={ChangeColorAndName} onDoubleClick={ChangeColorAndName1} >{name}</button>
            </div>
        </>
    );
};
export default ChangeBgOnClick;