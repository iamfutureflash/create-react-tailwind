import React from 'react';
function Images(props) {
    return (
        <>
                <div className='card_image'>
                    <img src={props.link} alt="" className='w-full rounded-t-lg' />
                </div>
        </>
    );
}

export default Images;