import React from 'react'
import {useState} from 'react'

const User=() => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[dob,setDob]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    const[gender,setGender]=useState('')
    const[accept,setAccept]=useState('')
    const[errors,setErrors]=useState('')
    const[passed,setPassed]=useState('')

const handleSubmit=(el)=>{
    el.preventDefault();
    const validationE= validationForm()
    if(Object.keys(validationE).length===0){
setPassed(true)
    }else{
        setErrors(validationE)
    }
}
const validationForm=()=>{
    const errors={}
    if(name!=true){
        errors.name='Error Name'
    }
    if(!email){
        errors.email='Error Email'
    }else if(!/\S@\.\S+/.test(email)){
        errors.email="Error email"
    }
    if(!dob){
        errors.dob='Error dob'
    }else{
        const currentDate=new Date()
        const enteredDate=new Date(dob)
        const yearsdiff=currentDate.getFullYear()-enteredDate.getFullYear()
        if(yearsdiff<16){
        errors.dob="Age Error"
    }
}
if(password!=confirmPassword){
    errors.confirmPassword='Password Error'
}
if(!gender){
    errors.gender='Gender Error'
}
if(!accept){
    errors.accept='Error Accept'
}
return errors;
}

const handleReset=()=>{
    setName('')
    setAccept('')
    setEmail('')
    setConfirmPassword('')
    setDob('')
    setGender('')
    setPassword('')
    setErrors('')
    setPassed('')

}

  return (
    <div>
        <h1>User Reg Form</h1>
        {passed &&<p>reg successful!!!</p>}
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                {errors.name && <span className='error'>{errors.name}</span>}
            </div>
            <div>
            <label>email:</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div>
            <label>dob:</label>
                <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)}/>
                {errors.dob && <span className='error'>{errors.dob}</span>}
            </div>
            
            <div>
                <label>Password:</label>
                <input type='password' value ={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>




        </form>


    </div>

  )
}

export default User;


// Create a React component called UserRegistrationForm.
// The UserRegistrationForm component should have input fields 
// for the user's name, email,date of birth (check if user is above 
//     or equal to 16 years), password and confirm password (should match),
//      gender radio button (male/ female) at least one should be selected
//       (by default no radio button should be selected) and a check box to 
//       accept terms and conditions (must be checked before submitting)
// Implement validation for each input field (e.g., required fields, email format, password strength).
// Display error messages if the user enters invalid data or misses required fields.
// Add a "Submit" button to the form.
// When the user clicks the "Submit" button, display a success message if all the fields are valid.
// Add a "Reset" button to clear the form fields.
