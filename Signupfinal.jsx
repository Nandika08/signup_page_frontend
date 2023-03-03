import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from "react-router-dom";
import {Grid,Paper,TextField,Button,Typography,Link} from '@mui/material'
// import { SignupUser } from '../services/signupServices'

const Signupfinal = () => {


const [formData, setFormData] = useState({
    fname: "",
    lname:"",
    email: "",
    password:"",
    confirm:""
    
  });

const [errors, setErrors] = useState({
    fname: "",
    lname:"",
    email: "",
    password:"",
    confirm:""
  });

const handleChange = (event) => {
    console.log(formData)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


    const validateForm = (event) => {
   
        event.preventDefault();
        let hasError = false;
        const newErrors = {
          fname: "",
            lname:"",
            email: "",
            password:"",
            confirm:""
        };
    // first name validation
        if (formData.fname === "") {
          hasError = true;
          newErrors.fname = "First Name is required";
        }else if (!/^\S*$/i.test(formData.fname)) {
            hasError = true;
            newErrors.fname = "No spaces";
          }else if (!/^\D*$/i.test(formData.fname)) {
            hasError = true;
            newErrors.fname = "No numerics";
          }else if (!/^\w*$/i.test(formData.fname)) {
            hasError = true;
            newErrors.fname = "No special characters";
          }
          
    // last name validation 
        if (formData.lname === "") {
          hasError = true;
          newErrors.lname = "Last Name is required";
        }else if (!/^\S*$/i.test(formData.lname)) {
            hasError = true;
            newErrors.lname = "No spaces";
          }else if (!/^\D*$/i.test(formData.lname)) {
            hasError = true;
            newErrors.lname = "No numerics";
          }else if (!/^\w*$/i.test(formData.lname)) {
            hasError = true;
            newErrors.lname = "No special characters";
          }

    // email validation 
        if (formData.email === "") {
            hasError = true;
            newErrors.email = "Email is required";
          }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            hasError = true;
            newErrors.email = "Enter a valid email";
          }

    // password validation 
        if (formData.password === "") {
          hasError = true;
          newErrors.password = "Password is required";
        }else if (formData.password.length > 12) {
            hasError = true;
            newErrors.password = "Too long";
        }else if (formData.password.length < 6) {
            hasError = true;
            newErrors.password = "too short";
        }else if (!/^\S*$/i.test(formData.password)) {
            hasError = true;
            newErrors.password = "No spaces";
        }else if (/^\w*$/i.test(formData.password)) {
            hasError = true;
            newErrors.password = "Must contain atleast 1 special character";
        }

    // confirm password validation 
        if (formData.confirm === "") {
          hasError = true;
          newErrors.confirm = "Confirm password is required";
        }else if (formData.password !== formData.confirm){
            hasError = true;
            newErrors.confirm = "Confirm password must match the password entered";
        }
        
    
        setErrors(newErrors);
        if (!hasError) {
          console.log("Form submitted successfully");
          setFormData({
            fname: "",
            lname:"",
            email: "",
            password:"",
            confirm:""
          });
        }
      };


    const paperStyle={padding :20, height:'110vh', width:380, margin:'40px auto'}
    const btnStyle={margin:'8px 0'}

    return(
        <Grid rowSpacing={2}>
            <Paper elevation={10} style={paperStyle}>
                <h1>Sign Up</h1>
                
                <form onSubmit={validateForm}>
                    <label>First name</label>
                    <TextField 
                        placeholder="First name" 
                        name="fname" 
                        variant="outlined" 
                        margin='dense' 
                        fullWidth 
                        size="small"
                        value = {formData.fname} 
                        onChange={handleChange}
                    />
                    <div>{errors.fname && <p style={{ color: "red" ,fontSize:"9px", margin:"-1px 0px"}}>{errors.fname}</p>}</div>             
    
                    <label>Last name</label>
                    <TextField 
                        placeholder="Last name" 
                        name="lname" 
                        variant="outlined" 
                        margin='dense' 
                        fullWidth 
                        size="small" 
                        value = {formData.lname} 
                        onChange={handleChange}
                    />
                    <div>{errors.lname && <p style={{ color: "red" ,fontSize:"9px", margin:"-1px 0px"}}>{errors.lname}</p>}</div>
                    
                    <label>Email address</label>
                    <TextField 
                        placeholder="Enter email" 
                        name="email" 
                        variant="outlined" 
                        margin='dense' 
                        fullWidth 
                        size="small"
                        value = {formData.email} 
                        onChange={handleChange}
                    />
                    <div>{errors.email && <p style={{ color: "red" ,fontSize:"9px", margin:"-1px 0px"}}>{errors.email}</p>}</div>
                    
                    <label>Password</label>
                    <TextField 
                        placeholder="Enter Password" 
                        name="password" 
                        variant="outlined" 
                        type='password' 
                        margin='dense' 
                        fullWidth 
                        size="small" 
                        value = {formData.password} 
                        onChange={handleChange}
                    />
                    <div>{errors.password && <p style={{ color: "red" ,fontSize:"9px", margin:"-1px 0px"}}>{errors.password}</p>}</div>
    
                    <label>Confirm Password</label>
                    <TextField 
                        placeholder="Enter Confirmed Password" 
                        name="confirm" 
                        variant="outlined" 
                        type='password' 
                        margin='dense' 
                        fullWidth 
                        size="small" 
                        value = {formData.confirm} 
                        onChange={handleChange}
                    />
                    <div>{errors.confirm && <p style={{ color: "red" ,fontSize:"9px", margin:"-1px 0px"}}>{errors.confirm}</p>}</div>
                    
                    <Button 
                        type='submit' 
                        color='primary' 
                        variant='contained' 
                        fullWidth
                        onClick = {validateForm}
                        
                        style={btnStyle} > Sign Up 
                    </Button>
                </form>
               
                <div style={{display:'flex',justifyContent:'right'}}>    
                    <Typography >Already registered
                    <Link href="#" underline='none'> sign in?</Link> 
                    </Typography>
                </div>
            </Paper>
        </Grid>
    )
}

export default Signupfinal
