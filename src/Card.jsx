import React from 'react';
import Images from "./card_components/Images"
import SubHeading from "./card_components/SubHeading"
import Names from "./card_components/Names"
import Button from "./card_components/Button"
function Card(props) {
    return (
        <>
            <div className='card my-6 mx-auto flex flex-col jusify-center content-center bg-slate-50  rounded-lg hover:shadow-2xl hover:shadow-blue-900 hover:scale-105 hover:border-4 hover:border-white'>
                <Images link={props.link} />
                <SubHeading subHeading={props.subHeading} />
                <Names name={props.name} />
                <Button buttonText={props.buttonText} />
            </div>
        </>
    );
}
export default Card;