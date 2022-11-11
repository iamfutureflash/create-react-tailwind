import React from 'react';
function Button(props) {
    return (
        <>
                <div className='card_button text-center text-black px-5 py-3'>
                    <button className='bg-green-400 px-4 py-2 rounded-lg text-xl cursor-pointer'>{props.buttonText}</button>
                </div>
        </>
    );
}

export default Button;