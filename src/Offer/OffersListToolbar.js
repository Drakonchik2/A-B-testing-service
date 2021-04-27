import {
    Box,
    Button,
} from '@material-ui/core';

const OffersListToolbar=(props)=>(
<Box {...props}>
    <Box
    sx={{
        display:'flex',
        justifyContent: 'flex-end'
    }}
    >
        <Button
        color="primary"
        variant="contained"
        href="/add"
        >
            Add new offer
        </Button>
    </Box>
</Box>
);
export default OffersListToolbar;