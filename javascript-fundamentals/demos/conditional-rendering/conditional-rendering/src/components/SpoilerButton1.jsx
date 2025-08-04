import { useState } from 'react';

function SpoilerButton1() {
    const [isVisible, setIsVisible] = useState(false);

    function handleSpoilerClick() {
        setIsVisible(!isVisible);
    }

    return (
        <div className="spoiler-container">
            <p>The movie's plot twist is...</p>
            <button className="spoiler-button"
                onClick={handleSpoilerClick}
            >
                Show Spoiler
            </button>
            {isVisible ? (
                <p className="spoiler-text">Kaiser Soze is Verbal Kent!</p>
            ) : null}
        </div>
    );
};

export default SpoilerButton1;
