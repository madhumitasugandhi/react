import React, { useState, useEffect } from 'react';

function TimerComponent() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup function to clear the interval
    }, []); // Empty dependency array to run only on mount and unmount

    return (
        <div>
            <h1>Timer: {seconds} seconds</h1>
            <p>This timer updates every second.</p>
        </div>
    );
}

export default TimerComponent;