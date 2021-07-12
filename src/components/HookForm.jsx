import React, { useState } from "react"

const HookForm = (props) => {
  const initialState = {
    firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
  };
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    setValues({ 
      ...values, 
      [e.currentTarget.name]: e.currentTarget.value 
    });
  }



return (
  <>
  <h3> Hook Form</h3>
  <form> 
    <label htmlFor='firstName'> 
    First Name:
    <input type='text' id='firstName' name='firstName' value={values.firstName}
    onChange = {handleChange}
    />
    {(values.firstName.length !== 0) && (values.firstName.length <2) && <p>First Name should be at least 2 characters</p> }
    </label>
    <label htmlFor='lastName'> 
    Last Name:
    <input type='text' id='lastName' name='lastName' value={values.lastName}
    onChange = {handleChange}
    />
    {(values.lastName.length !== 0) && (values.lastName.length <2) && <p>Last Name should be at least 2 characters</p> }
    </label>
    <label htmlFor='email'> 
    Email:
    <input type='text' id='email' name='email' value={values.lastName}
    onChange = {handleChange}
    />
    {(values.email.length !== 0) && (values.lastName.length < 5) && <p>Email should be at least 5 characters</p> }
    </label>
    <label htmlFor='password'> 
    Password:
    <input type='password' id='password' name='password' value={values.password}
    onChange = {handleChange}
    />
    {(values.password.length !== 0) && (values.password.length < 5) && <p>Password should be at least 5 characters</p> }
    </label>
    <label htmlFor='lastName'> 
    Confirm Password:
    <input type='password' id='confirmPassword' name='confirmPassword' value={values.confirmPassword}
    onChange = {handleChange}
    />
    {(values.confirmPassword  !== values.password) && <p>Password must match</p> }
    </label>
  </form>
 
  </>
)
}




export default HookForm