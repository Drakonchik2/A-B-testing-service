import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { Formik } from 'formik';
import {useState} from 'react';

function PrelandListToolbar(props){
const [type, setType] = useState(0);
const [visible, setVisble] = useState('hidden');
const handleChange = (event) => {
  setType(event.target.value);
  if (event.target.value == 5) 
  {
    setVisble('visible');
  } else {
    setVisble('hidden');
  }
};


return(
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button
        color="primary"
        variant="contained"
        href="./addpreland"
      >
        Add preland
      </Button>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Formik>
      <Card>
        <CardContent
          sx={{
            display: 'flex'
          }}
        >
          <Box sx={{ maxWidth: 500 }}>
            <InputLabel id="label">Filter</InputLabel>
            <Select
            labelId="label"
            id="select"
            value={type}
            onChange={handleChange}
            >
              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={1}>This month</MenuItem>
              <MenuItem value={2}>Today</MenuItem>
              <MenuItem value={3}>Last week</MenuItem>
              <MenuItem value={4}>Yesterday</MenuItem>
              <MenuItem value={5}>Custom</MenuItem>
            </Select>
          </Box>
          <Box sx={{ ml: 3}} visibility={visible}>
            <TextField
              id="custom"
              type='number'
              label="Enter your duration"
              defaultValue="1"
            />
          </Box>
        </CardContent>
      </Card>
      </Formik>
    </Box>
  </Box>
);
}
export default PrelandListToolbar;
