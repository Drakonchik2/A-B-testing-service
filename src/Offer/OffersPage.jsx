import OfferListResult from './OffersListResult';
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
     <OfferListResult offerlist={offers}/>
   </Container>
 </Box>
);

export default OffersPage;
