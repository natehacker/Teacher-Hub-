import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react"
import { UpdateAssignment } from "../../services/AssignmentServices"

export default function UpdateAssignmentForm({
  assignment, user, changeModalState
}){
    const [formValues, setFormValues] = useState({
        name: assignment.name,
        gitHubURL: assignment.gitHubURL,
        deployedURL: assignment.deployedURL,
        unit: assignment.unit
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
    const handleSubmit = (e) => {
      e.preventDefault();
    if (user) {
      const data = formValues;
      const handleUpdate = async (assignmentId, data) => {
        await UpdateAssignment(assignmentId, data);
      };
      handleUpdate(assignment.id, data);
    }
    window.location.reload()
    e.target.value=""
    changeModalState();
    }
    return (
        <FormWindow>
            <FormHeader>Update Assignment</FormHeader>
                <form onSubmit={handleSubmit}>
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