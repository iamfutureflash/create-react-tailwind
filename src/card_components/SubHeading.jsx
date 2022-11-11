import React from 'react';
function SubHeading(props) {
    return (
        <>
                <div className='card_sub_title mt-4 mb-2'>
                    <div className='card_sub_title_text text-center text-gray-400 text-base'>{props.subHeading}</div>
                </div>      
        </>
    );
}
export default SubHeading;