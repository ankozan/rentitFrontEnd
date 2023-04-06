import React, { useState } from "react";
import './Home.css'; // Import the CSS file
import Header from './Header'
import './ToolItem.css'
import ToolCard from './ToolCard.js'

function AddItemCard() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle submission here
    };

    const handleImageChange = (event) => {
        setImages(Array.from(event.target.files));
    };
    return (
        <div className="container">
            <Header />
            <div className="tool-details">
                <div className="tool-card">
                    <label htmlFor="name-input">Name:</label>
                    <input
                        id="name-input"
                        type="text"
                    />

                    <label htmlFor="description-input">Description:</label>
                    <input
                        id="description-input"
                        type="text"

                    />

                    <label htmlFor="category-select">Category:</label>
                    <select
                        id="category-select"
                    >
                        <option value="">Select a category</option>
                        <option value="Power Tools">Power Tools</option>
                        <option value="Hand Tools">Hand Tools</option>
                        <option value="Gardening Tools">Gardening Tools</option>
                        <option value="Cleaning Tools">Cleaning Tools</option>
                    </select>
                    <label htmlFor="price-input">Price:</label>
                    <input
                        id="price-input"
                        type="text"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />

                    <label htmlFor="images-input">Images:</label>
                    <input
                        id="images-input"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                    />

                    <button type="submit">Add Item</button>
                </div></div></div>);
}

export default AddItemCard;
