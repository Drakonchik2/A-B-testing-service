import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import {authorisation} from 'src/actions/user';
import { useDispatch } from 'react-redux';

const Addpreland = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Add preland</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              name: '',
              link: '',
              percent: '',
              unique: '',
              postback: ''
            }}
            onSubmit={(values) => {
              navigate('../customers', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                    align="center"
                  >
                    Add preland
                  </Typography>
                </Box>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    input data
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  label="Preland name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.name}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Link"
                  margin="normal"
                  name="link"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.link}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Percent"
                  margin="normal"
                  name="percent"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.percent}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Unique"
                  margin="normal"
                  name="unique"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.unique}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Postback"
                  margin="normal"
                  name="postback"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.postback}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Addpreland;
