import { useState } from 'react';

function SpoilerButton2() {
    const [isVisible, setIsVisible] = useState(false);

    const spoilerMessage = (
        <p className="spoiler-text">Kaiser Soze is Verbal Kent!</p>
    );

    function handleSpoilerClick() {
        setIsVisible(!isVisible);
    }

    return (
        <div className="spoiler-container">
            <p>The movie's plot twist is...</p>
            <button className={`spoiler-button ${isVisible ? "spoiler-button-visible" : ""}`}
                onClick={handleSpoilerClick}
            >
                {isVisible ? "Hide Spoiler" : "Show Spoiler"}
            </button>
            {isVisible && spoilerMessage}
        </div>
    );
};

export default SpoilerButton2;