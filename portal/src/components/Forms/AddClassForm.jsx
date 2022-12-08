import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react";
import { CreateCohort, GetCohorts } from "../../services/CohortServices";

export default function AddClassForm({ user, authenticated, cohorts, setCohorts, changeModalState }) {
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
      const handleCreation = async (userId, data) => {
        await CreateCohort(userId, data);
        const updatedCohorts = await GetCohorts(userId);
        setCohorts(updatedCohorts);
      };
      await handleCreation(user.id, data)
    }
    e.target.value=""
    changeModalState();
  }

  return (
    <FormWindow>
      <FormHeader>Add Class</FormHeader>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" onChange={handleChange}></input>
        <GAButton>ADD CLASS</GAButton>
      </form>
    </FormWindow>
  );
}
