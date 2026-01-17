// Code SubmitButton Component Here
import React from 'react';

function SubmitButton() {
    const handleEnter = () => {
        console.log("Mouse Entering");
    }

    const handleLeave = () => {
        console.log("Mouse Exiting");
    };
    return (
        <div>
            <button type="submit" onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="button">Submit Password</button>
        </div>
    )
}

export default SubmitButton;