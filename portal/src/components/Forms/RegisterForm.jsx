import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { RegisterUser } from '../../services/Auth'

export default function RegisterForm(props){

  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })



  const validation = () => {
    if (formValues.password === formValues.confirmPassword){
      return true
    } else {
      return false
    }
  }

  const handleChange = (e) => {
    setFormValues({
      ...formValues, [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validation){
      const register = await RegisterUser({
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email, 
        password: formValues.password
      })
      navigate("/registered")
    }
  }





  return(
  <FormWindow>
    <FormHeader>Register</FormHeader>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name : </label>
            <input type="text" name="firstName"
            onChange={handleChange}></input>
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name="lastName"
            onChange={handleChange}></input>
            <label htmlFor="email">Email : </label>
            <input type="text" name="email"
            onChange={handleChange}></input>
            <label htmlFor="password">Password : </label>
            <input type="text" name="password" onChange={handleChange}></input>
            <label htmlFor="confirmPassword">Confirm Password : </label>
            <input type="text" name="confirmPassword"
            onChange={handleChange}></input>
            <GAButton>REGISTER</GAButton>
        </form>


        <div className="form-footer">
            <small>Already have an account? <Link to="/">Sign in</Link>.</small>
        </div>


 </FormWindow>
  )
}