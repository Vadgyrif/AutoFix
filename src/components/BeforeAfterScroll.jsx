import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import "./BeforeAfterScroll.css";


const BeforeAfterSliderComponent = () => {
    const FIRST_IMAGE = {
        imageUrl : process.env.PUBLIC_URL + "/images/after.png",
    }
    const SECOND_IMAGE = {
        imageUrl : process.env.PUBLIC_URL + "/images/before.png",
    }

    return (
        <div className='BeforeAfterContainer' >
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
        </div>
    );
}

export default BeforeAfterSliderComponent;