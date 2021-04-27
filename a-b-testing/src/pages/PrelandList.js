import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import PrelandListResults from 'src/components/preland/PrelandListResults';
import PrelandListToolbar from 'src/components/preland/PrelandListToolbar';
import customers from 'src/__mocks__/customers';

const PrelandList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <PrelandListToolbar />
        <Box sx={{ pt: 3 }}>
          <PrelandListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default PrelandList;
