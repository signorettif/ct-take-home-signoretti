import React from 'react';

import { Container } from '@chakra-ui/react';

interface ContentContainerProps {
  children: React.ReactNode;
  [x: string]: any;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  ...props
}) => (
  <Container paddingX={4} m="auto" maxW="1024px" {...props}>
    {children}
  </Container>
);

export default ContentContainer;
