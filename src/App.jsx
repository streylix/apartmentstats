import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ApartmentList from './pages/ApartmentList';
import ApartmentDetail from './pages/ApartmentDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApartmentList />} />
        <Route path="/apartment/:id" element={<ApartmentDetail />} />
      </Routes>
    </Router>
  );
};

export default App;