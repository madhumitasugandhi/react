import React, {useState, useEffect} from "react";

function LoggerComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component  rendered or count changed:', count);
       
    }); // Dependency array to run effect when count changes

    return (
        <div>
            <h1>Logger Component</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default LoggerComponent;