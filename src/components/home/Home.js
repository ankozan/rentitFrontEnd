import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the CSS file
import Header from './Header'
import ToolCard from './ToolCard.js'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/tools')
            .then(response => response.json())
            .then(data => setTools(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container">
            <Header />
            <div className="tools-container"> {/* Use a class name to apply the container styles */}
                {tools.map(tool => (
                    <ToolCard key={tool.id} tool={tool} onClick={() => navigate(`/tools/${tool.name}`)}
                    />
                ))}
            </div></div>
    );
}
export default Home;
