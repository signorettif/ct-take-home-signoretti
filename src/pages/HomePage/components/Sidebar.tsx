import { Box } from '@chakra-ui/react';
import React from 'react';

interface SidebarProps {}

const Sidebar: React.FC = ({}: SidebarProps) => {
  return (
    <Box
      w="300px"
      p={4}
      border="1px"
      borderColor="gray.200"
      borderRadius={6}
    ></Box>
  );
};

export default Sidebar;
