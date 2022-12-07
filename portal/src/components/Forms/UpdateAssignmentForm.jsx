import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react"

export default function UpdateAssignmentForm(){
    const [formValues, setFormValues] = useState({
        name:"",
        unit: ""
    })
    const handleChange = (e) => {
        if (e.target.name==="unit"){
          setFormValues(
            {
              ...formValues, [e.target.name]:parseInt(e.target.value)
            }
          )
        } else{
        setFormValues({
          ...formValues, [e.target.name]:e.target.value
        })
        }
        console.log(formValues)
      }
    const handleSubmit = () => {

    }
    return (
        <FormWindow>
            <FormHeader>Update Assignment</FormHeader>
                <form>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" onChange = {handleChange}></input>
                    <label name="gitHubURL">Github URL : </label>
                    <input type="text" name="gitHubURL" onChange = {handleChange}></input>
                    <label name="deployedURL">Deployed URL : </label>
                    <input type="text" name="deployedURL" onChange = {handleChange}></input>
                    <label htmlFor="unit">Unit : </label>
                    <select className="dropdown" name="unit">
                    <option value="1">Unit 1</option>
                    <option value="2">Unit 2</option>
                    <option value="3">Unit 3</option>
                    <option value="4">Unit 4</option>
                    </select>
                    <GAButton>UPDATE ASSIGNMENT</GAButton>
                </form>



        </FormWindow>
    )
}