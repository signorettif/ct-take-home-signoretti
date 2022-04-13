import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import HomePage from '../../pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarPage from '../../pages/CarPage/CarPage';

const AppEntryPoint: React.FC = () => (
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/car/:carId" element={<CarPage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
export default AppEntryPoint;
