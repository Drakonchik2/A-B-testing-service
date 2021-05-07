import React, { useState, useEffect } from "react";
import {Button, TextField, Box, Typography } from '@material-ui/core';



const AddOffer = () => {
  const intialValues = { name: "", link: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Cannot be blank";
    }

    if (!values.link) {
      errors.link = "Cannot be blank";
    } 

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
      <Box 
      component="div"
      align='center'
      >
      <Typography 
      color='textPrimary'
      variant='body1'
      
      >
        Add new offer
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <TextField 
          variant="outlined"
          id="name" 
          label="Offer Name"
          />
          
        </div>
        <div className="form-row">
          <TextField
          variant="outlined"
          id="link"
          label="Offer Link"
          />
        </div>
        <div>
          <Button variant="contained" color="primary" href="/offer">
            Submit
          </Button>
        </div>
      </form>
      </Box>
  );
};

export default AddOffer;
