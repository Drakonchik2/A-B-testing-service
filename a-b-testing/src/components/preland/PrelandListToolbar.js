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
import {useState} from 'react';

function PrelandListToolbar(props){
const [type, setType] = useState(1);
const handleChange = (event) => {
  setType(event.target.value);
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
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <InputLabel id="label">Filter</InputLabel>
            <Select
            labelId="label"
            id="select"
            value={type}
            onChange={handleChange}
            >
              <MenuItem value={1}>This month</MenuItem>
              <MenuItem value={2}>Today</MenuItem>
              <MenuItem value={3}>Last week</MenuItem>
              <MenuItem value={4}>Yesterday</MenuItem>
            </Select>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
}
export default PrelandListToolbar;
