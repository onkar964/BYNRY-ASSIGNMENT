import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './component/Display';
import ProfileGallery from './component/Profile_galary'; // Corrected import

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileGallery />} />
          <Route path='/:id' element={<Display />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;