import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react"

export default function UpdateAssignmentForm(){
    const [formValues, setFormValues] = useState({
        name:"",
        unit: ""
    })
    const handleChange = e => {
        setFormValues({
            ...formValues, 
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = () => {

    }
    return (
        <FormWindow>
            <FormHeader>Update Assignemnt</FormHeader>
                <form>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" onChange = {handleChange}></input>
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