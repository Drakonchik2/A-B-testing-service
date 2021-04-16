import React,{useState,useEffect} from "react";
import "./Form.scss";
const AddForm=()=>{
    const initialValues={name:"",link:""};
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmitting, setIsSubmitting]=useState(false);

    const submit=()=>{
        console.log(formValues);
    };

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };
    const validate=(values)=>{
        let errors={};
        if (!values.name){
            errors.name="Cannot be blank";

        }
        if(!values.link){
            errors.link="Cannot be blank";
        }
        return errors;
    };
    useEffect(()=>{
        if (Object.keys(formErrors).length===0 && isSubmitting){
            submit();
        }
    },[formErrors]);
    return(
        <div className="container">
            <h1>Add Offer</h1>
            {Object.keys(formErrors).length===0 && isSubmitting &&(
            <span className="success-msg">Form submitted succesfully</span>
            )}
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                    <label htmlFor="name">Offer name</label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className={formErrors.name && "input error"}
                    />
                    {formErrors.name && (
                        <span className="error">{formErrors.name}</span>
                    )}
                </div>
                <div className="form-row">
                    <label htmlFor="password">Offer link</label>
                    <input
                    type="url"
                    name="link"
                    id="link"
                    value={formValues.link}
                    onChange={handleChange}
                    className={formErrors.link && "input-error"}
                    />
                    {formErrors.link && (
                        <span className="error">{formErrors.link}</span>
                    )}
                </div>
                <button type="submit">Add offer</button>
            </form>
        </div>

    );
};
export default AddForm;