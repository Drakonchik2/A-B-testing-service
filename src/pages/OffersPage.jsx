import OfferListResult from 'src/__mocks__/OffersListResult';
import OffersListToolbar from 'src/__mocks__/OffersListToolbar';
import offers from 'src/__mocks__/offers';
import {Box, Container} from '@material-ui/core';
const OffersPage = () => (
 <Box
 sx={{
   backgroundColor: 'background.default',
   minHeight: '100%',
   py: 3
 }}
 >
   <Container maxWidth={false}>
     <OffersListToolbar/>
     <OfferListResult offerlist={offers}/>
   </Container>
 </Box>
);

export default OffersPage;
