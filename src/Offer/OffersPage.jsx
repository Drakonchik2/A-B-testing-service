import OfferListResult from './OffersListResult';
import OffersListToolbar from './OffersListToolbar';
import offers from './offers';
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
