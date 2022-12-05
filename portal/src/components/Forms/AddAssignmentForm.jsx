import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react"

export default function AddAssignmentForm(props){
  const [formValues, setFormValues] = useState({
    name: ""
  })
  const handleChange = (e) => {
    setFormValues({
      ...formValues, [e.target.name]:e.target.value
    })
  }
  const handleSubmit = () => {

  }
  return(
  <FormWindow>
    <FormHeader>Add Assignemnt</FormHeader>
        <form>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" onChange = {handleChange}></input>
            <GAButton>ADD ASSIGNMENT</GAButton>
        </form>



 </FormWindow>
  )
}