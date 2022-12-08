import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react"
import { UpdateStudent, GetStudents } from "../../services/StudentServices"

export default function UpdateStudentForm({ user, student, changeModalState, setStudents }){
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: ""
  })
  const handleChange = (e) => {
    setFormValues({
      ...formValues, [e.target.name]:e.target.value
      
    })
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (user) {
  //     const data = formValues;
  //     const handleUpdate = async (studentId, data) => {
  //       await UpdateStudent(studentId, data);
  //     };
  //     handleUpdate(student.id, data);
  //   }
  //   window.location.reload()
  //   e.target.value=""
  //   changeModalState();
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const data = formValues;
      const handleUpdate = async (studentId, classId, data) => {
        await UpdateStudent(studentId, data);
        const updatedStudents = await GetStudents(classId);
        setStudents(updatedStudents);
      };
      await handleUpdate(student.id, student.classId, data)
    }
    e.target.value=""
    changeModalState();
  }

  return(
  <FormWindow>
    <FormHeader>Update Student</FormHeader>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name : </label>
            <input type="text" name="firstName" onChange={handleChange}></input>
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name="lastName" onChange={handleChange}></input>
            <GAButton>UPDATE STUDENT</GAButton>
        </form>



 </FormWindow>
  )
}