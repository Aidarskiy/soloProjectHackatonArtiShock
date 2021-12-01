import React from 'react';
import "./SectionOne.css";

const SectionOne = () => {
    return (
        <div className='section1'>
            <div>
                {/* <span style={{paddingRight: '5px', paddingLeft: '45px'}}>Зима 2019</span> 
                ---- */}
                <span>The Best Flowers</span>
            </div>
            
            <div style={{lineHeight: '10px'}}>
                <p>The most beautiful</p>
                <span>Flowers in the world</span>
            </div>
        </div>
    );
};

export default SectionOne;