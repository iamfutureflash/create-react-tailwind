import React from 'react';
function Names(props) {
    return (
        <>
                <div className='card_title text-black mb-2'>
                    <div className='card_title_text text-center text-2xl font-semibold'>{props.name}</div>
                </div>
        </>
    );
}

export default Names;