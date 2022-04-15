import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ChakraProvider } from '@chakra-ui/react';

import HomePage from 'pages/HomePage/HomePage';
import CarPage from 'pages/CarPage/CarPage';
import FourOFourPage from 'pages/FourOFourPage/CarPage';

const queryClient = new QueryClient();

const AppEntryPoint: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car/:carId" element={<CarPage />} />
          <Route path="*" element={<FourOFourPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </QueryClientProvider>
);
export default AppEntryPoint;
