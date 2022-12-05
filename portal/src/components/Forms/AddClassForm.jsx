import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react"

export default function AddClassForm(props){
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
    <FormHeader>Add Class</FormHeader>
        <form>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" onChange={handleChange}></input>
            <GAButton>ADD CLASS</GAButton>
        </form>



 </FormWindow>
  )
}