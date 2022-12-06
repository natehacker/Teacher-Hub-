import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react"
import { UpdateCohort } from "../../services/CohortServices";

export default function UpdateClassForm(){
  const [formValues, setFormValues] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    
  }
  return(
  <FormWindow>
    <FormHeader>Update Class</FormHeader>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">New Name : </label>
            <input type="text" name="name" onChange={handleChange}></input>
            <GAButton>UPDATE CLASS</GAButton>
        </form>



 </FormWindow>
  )
}