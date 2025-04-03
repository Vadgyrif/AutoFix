import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const BeforeAfterSliderComponent = () => {
    const FIRST_IMAGE = {
        imageUrl : process.env.PUBLIC_URL + "/images/after.png",
    }
    const SECOND_IMAGE = {
        imageUrl : process.env.PUBLIC_URL + "/images/before.png",
    }

    return (
        <div style={{width: "70%"}}>
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
        </div>
    );
}

export default BeforeAfterSliderComponent;