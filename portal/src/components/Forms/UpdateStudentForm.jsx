import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react"

export default function AddStudentForm(props){
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: ""
  })
  const handleChange = (e) => {
    setFormValues({
      ...formValues, [e.target.firstName]:e.target.value,
      [e.target.lastName]:e.target.value
      
    })
  }
  const handleSubmit = () => {

  }
  return(
  <FormWindow>
    <FormHeader>Update Student</FormHeader>
        <form>
            <label htmlFor="firstName">First Name : </label>
            <input type="text" name="firstName" onChange={handleChange}></input>
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name="lastName" onChange={handleChange}></input>
            <GAButton>UPDATE STUDENT</GAButton>
        </form>



 </FormWindow>
  )
}