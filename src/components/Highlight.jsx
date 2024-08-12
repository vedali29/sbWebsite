import React, { useState } from 'react';
import './Highlight.css';

const Highlight = () => {
    const [activeTile, setActiveTile] = useState(0);

    const handleTileClick = (index) => {
        setActiveTile(index);
    };

    return (
        <div className="app-container">
            <div className="img-nav">
                {['Local Movements', 'Teachings', 'Nukkad natak', 'Sustainable Schemes', 'Tree Plantation', 'Webinars & Discussions'].map((title, index) => (
                    <div 
                        key={index} 
                        className={`tile ${activeTile === index ? 'active' : ''}`} 
                        onClick={() => handleTileClick(index)}
                    >
                        <p spine="">{title}</p>
                        <div className="content">
                            <h1>Example Text</h1>
                            <p>{title}</p>
                        </div>
                        <div className="img" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Highlight;
