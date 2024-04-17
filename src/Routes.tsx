import React from 'react';
import InputFile from './pages/InputFile';
import OutputFile from './pages/OutputFile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const RoutesInstance = () => {
    return (
        <Router>
            <Routes>
                <Route path="/input-file" element={<InputFile />}/>
                <Route path="/output-file" element={<OutputFile />} />
            </Routes>
      </Router>
    )
}

export default RoutesInstance;
