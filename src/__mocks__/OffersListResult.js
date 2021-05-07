import {
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    IconButton,

  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const limit=10;

const OfferListResult=({offerlist, ...rest})=>{

    return(
        <Card {...rest}>
            <Box sx={{minWidth: 1050}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Views
                            </TableCell>
                            <TableCell>
                                Transitions
                            </TableCell>
                            <TableCell>
                                Conversions
                            </TableCell>
                            <TableCell>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {offerlist.slice(0,limit).map((offerlist)=>(
                        <TableRow>
                        <TableCell>
                            {offerlist.offerName}
                        </TableCell>
                        <TableCell>
                            {offerlist.views}
                        </TableCell>
                        <TableCell>
                            {offerlist.transition}
                        </TableCell>
                        <TableCell>
                            {offerlist.conversion}
                        </TableCell>
                        <TableCell>
                        <Box 
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}>
                        <IconButton 
                        color ="primary" 
                        aria-label="Edit offer"
                        href='editoffer'
                        >
                            <EditIcon/>
                        </IconButton>
                        <IconButton color ="primary" aria-label="Delete offer" href="#">
                            <DeleteIcon/>
                        </IconButton>
                        </Box>
                        </TableCell>
                        </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </Box>

        </Card>

    )

}
export default OfferListResult;