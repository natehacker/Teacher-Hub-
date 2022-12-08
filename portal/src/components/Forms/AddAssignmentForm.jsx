import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react";
import { CreateAssignment } from "../../services/AssignmentServices";
import { GetStudents } from "../../services/StudentServices";


export default function AddAssignmentForm({
  authenticated,
  user,
  setAllAssignments,
  allAssignments,
  changeModalState,
  cohortId,
  setStudents,
  students,
}) {
  const [formValues, setFormValues] = useState({
    name: "",
    unit: 1,
  });
  const handleChange = (e) => {
    if (e.target.name === "unit") {
      setFormValues({
        ...formValues,
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const data = formValues;
      const handleCreation = async (classId, data) => {
        await CreateAssignment(classId, data);
        setStudents([]);
        const updatedStudents = await GetStudents(cohortId);
        setStudents(updatedStudents);
        setAllAssignments(!allAssignments);
      };
      await handleCreation(cohortId, data);
    }
    setFormValues({
      name: "",
      unit: 1,
    })
    changeModalState();
  };

  return (
    <FormWindow>
      <FormHeader>Add Assignment</FormHeader>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input type="text" placeholder={formValues.name} name="name" onChange={handleChange}></input>
        <label htmlFor="unit">Unit : </label>
        <select onChange={handleChange} className="dropdown" name="unit" defaultValue="1">
          <option value="1">
            Unit 1
          </option>
          <option value="2">Unit 2</option>
          <option value="3">Unit 3</option>
          <option value="4">Unit 4</option>
        </select>
        <GAButton>ADD ASSIGNMENT</GAButton>
      </form>
    </FormWindow>
  );
}
