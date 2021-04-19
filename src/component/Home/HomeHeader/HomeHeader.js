import React from 'react';
import './header.css'

const HomeHeader = () => {
    return (
        <div>
            <div className="header-banner d-flex align-items-center  justify-content-center">
                <h1 className="title-banner">Hear for hats</h1>
            </div>
            <div className="text-center mt-5 mb-5">
                <h1 className="mb-2">Salon</h1>
                <p>
                    “Working in a salon, you look at trends all day long. You’re looking at color all the time,<br/>
                    what new products are coming out. You’re a part of the fashion industry,<br/>
                    especially if you’re working in a higher-end salon.”<br/>
                </p>
            </div>
        </div>
    );
};

export default HomeHeader;