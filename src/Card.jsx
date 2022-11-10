import React from 'react';
function Card(props) {
    return (
        <>
            <div className='card  my-6 mx-auto flex flex-col jusify-center content-center bg-slate-50  rounded-lg hover:shadow-2xl hover:shadow-blue-900 hover:scale-105 hover:border-4 hover:border-white'>
                <div className='card_image'>
                <img src={props.link} alt="" className='w-full rounded-t-lg' />
                </div>
                <div className='card_sub_title mt-4 mb-2'>
                    <div className='card_sub_title_text text-center text-gray-400 text-base'>{props.subHeading}</div>
                </div>
                <div className='card_title text-black mb-2'>
                    <div className='card_title_text text-center text-2xl font-semibold'>{props.name}</div>
                </div>
                <div className='card_button text-center text-black px-5 py-3'>
                <button className='bg-green-400 px-4 py-2 rounded-lg text-xl cursor-pointer'>{props.buttonText}</button>
                </div>
            </div>
        </>
    );
}

export default Card;