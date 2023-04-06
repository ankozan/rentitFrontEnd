import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/Home.js';
import ToolItem from './components/home/ToolItem.js';
import AddItemCard from './components/home/AddItemCard.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools/:id" element={<ToolItem />} />
        <Route path="/add" element={<AddItemCard />} />
      </Routes>
    </Router>
  );
}

export default App;
