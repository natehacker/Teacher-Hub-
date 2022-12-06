import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react"

export default function UpdateClassForm(props){
  const [formValues, setFormValues] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {

  }
  return(
  <FormWindow>
    <FormHeader>Update Class</FormHeader>
        <form>
            <label htmlFor="name">New Name : </label>
            <input type="text" name="name" onChange={handleChange}></input>
            <GAButton>UPDATE CLASS</GAButton>
        </form>



 </FormWindow>
  )
}