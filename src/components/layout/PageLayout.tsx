import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from './Header';

interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <Box w="100%" paddingBottom={16}>
    <Header />
    {children}
  </Box>
);

export default PageLayout;
