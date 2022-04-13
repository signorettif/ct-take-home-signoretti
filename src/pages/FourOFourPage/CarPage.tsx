import React from 'react';

import { Text } from '@chakra-ui/react';
import PageLayout from '../../components/layout/PageLayout';
import ContentContainer from '../../components/layout/ContentContainer';

const FourOFourPage: React.FC = () => {
  return (
    <PageLayout>
      <ContentContainer marginTop={16}>
        <Text>404</Text>
      </ContentContainer>
    </PageLayout>
  );
};

export default FourOFourPage;
