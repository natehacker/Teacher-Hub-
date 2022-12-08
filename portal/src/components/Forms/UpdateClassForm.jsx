import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react"
import { UpdateCohort, GetCohorts } from "../../services/CohortServices";

export default function UpdateClassForm({ user, authenticated, cohorts, setCohorts, changeModalState, cohortId, cohortName }){
  const [formValues, setFormValues] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const data = formValues;
      const handleUpdate = async (classId, userId,data) => {
        await UpdateCohort(classId, data);
        const updatedCohorts = await GetCohorts(userId);
        setCohorts(updatedCohorts);
      };
      await handleUpdate(cohortId, user.id, data)
    }
    e.target.value=""
    changeModalState();
  }
  return(
  <FormWindow>
    <FormHeader>Update Class</FormHeader>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">New Name : </label>
            <input type="text" name="name" placeholder={cohortName} onChange={handleChange}></input>
            <GAButton>UPDATE CLASS</GAButton>
        </form>



 </FormWindow>
  )
}