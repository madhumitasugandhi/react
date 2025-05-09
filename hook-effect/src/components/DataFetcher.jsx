import React, {useState, useEffect} from "react";

function DataFetcher() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []); // Empty dependency array to run only on mount

    return (
        <div>
           {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DataFetcher;