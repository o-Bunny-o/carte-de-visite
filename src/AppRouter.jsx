

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarteDeVisite from './components/CarteDeVisite';
import Cadrants from './components/Cadrants';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CarteDeVisite />} />
                <Route path="/cadrants" element={<Cadrants />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
