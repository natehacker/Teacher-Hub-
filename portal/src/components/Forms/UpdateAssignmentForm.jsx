import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react";
import {
  UpdateAssignment,
  GetAssignments,
} from "../../services/AssignmentServices";

export default function UpdateAssignmentForm({
  assignment,
  user,
  changeModalState,
  setAssignments,
}) {
  const [formValues, setFormValues] = useState({
    name: assignment.name,
    gitHubURL: assignment.gitHubURL,
    deployedURL: assignment.deployedURL,
    unit: assignment.unit,
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
      const handleUpdate = async (assignmentId, studentId, data) => {
        await UpdateAssignment(assignmentId, data);
        const updatedAssignments = await GetAssignments(studentId);
        setAssignments(updatedAssignments);
      };
      await handleUpdate(assignment.id, assignment.studentId, data);
    }
    e.target.value = "";
    changeModalState();
  };

  return (
    <FormWindow>
      <FormHeader>Update Assignment</FormHeader>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder={assignment.name}
        ></input>
        <label name="gitHubURL">Github URL : </label>
        <input
          type="text"
          name="gitHubURL"
          onChange={handleChange}
          placeholder={assignment.githubURL}
        ></input>
        <label name="deployedURL">Deployed URL : </label>
        <input
          type="text"
          name="deployedURL"
          onChange={handleChange}
          placeholder={assignment.deployedURL}
        ></input>
        <label htmlFor="unit">Unit : </label>
        <select onChange={handleChange} className="dropdown" name="unit" defaultValue={assignment.unit}>
          <option value="1">
            Unit 1
          </option>
          <option value="2">
            Unit 2
          </option>
          <option value="3">
            Unit 3
          </option>
          <option value="4">
            Unit 4
          </option>
        </select>
        <GAButton>UPDATE ASSIGNMENT</GAButton>
      </form>
    </FormWindow>
  );
}
