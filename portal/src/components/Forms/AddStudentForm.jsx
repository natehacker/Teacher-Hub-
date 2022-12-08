import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react"
import { CreateStudent, GetStudents } from "../../services/StudentServices"



export default function AddStudentForm({ cohortId, students, setStudents, user, changeModalState, renderState, setRenderState }){
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: ""
  })
  const handleChange = (e) => {
    setFormValues({
      ...formValues, [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const data = formValues;
      const handleCreation = async (classId, data) => {
        await CreateStudent(classId, data);
        const updatedStudents = await GetStudents(cohortId);
        setStudents(updatedStudents);
      };
      await handleCreation(cohortId, data)
    }
    e.target.value=""
    changeModalState();
  }
  return(
  <FormWindow>
    <FormHeader>Add Student</FormHeader>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name : </label>
            <input type="text" name="firstName" onChange={handleChange}></input>
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name="lastName" onChange={handleChange}></input>
            <GAButton>ADD STUDENT</GAButton>
        </form>



 </FormWindow>
  )
}