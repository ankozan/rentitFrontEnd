
import { useLocation } from "react-router-dom";
import ToolCard from './ToolCard.js'
import './ToolItem.css'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Header from './Header'

function ToolItem() {
    const location = useLocation()
    const { tool } = location.state
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [deliveryMethod, setDeliveryMethod] = useState("pickup");

    return (
        <div className="container">
            <Header />
            <div className="tool-details">
                <ToolCard key={tool.id} tool={tool} />
                <div className="date-picker-container">
                    <div className="date-picker">
                        <label htmlFor="start-date">Start Date:</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id="start-date" />
                    </div>
                    <div className="date-picker">
                        <label htmlFor="end-date">End Date:</label>
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} id="end-date" />
                    </div>
                </div>
                <div className="delivery-method">
                    <label htmlFor="delivery-method">Delivery Method:</label>
                    <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)} id="delivery-method">
                        <option value="pickup">Pickup</option>
                        <option value="delivery">Delivery</option>
                    </select>
                </div>
                <button className="rent-button">Rent</button>
            </div>

        </div>

    );
}

export default ToolItem;
