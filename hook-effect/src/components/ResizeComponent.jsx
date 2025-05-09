import React, {useState, useEffect}  from "react";

function ResizeComponent() {
    const [windowWidth, setWindowWidth] = useState( window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth( window.innerWidth);
        };
        console.log("Event listener added for resize event");
        window.addEventListener('resize', handleResize);

        return () => {
            console.log("Event listener removed for resize event");
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run only on mount and unmount

    return (
        <div>
            <h1>Window Size</h1>
            <p>Width: {windowSize.width}px</p>
        </div>
    );
}

export default ResizeComponent;