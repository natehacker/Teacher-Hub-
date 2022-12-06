import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { useState } from "react";
import { CreateCohort } from "../../services/CohortServices";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && authenticated) {
      const data = formValues;
      const handleCreation = async (userId, data) => {
        await CreateCohort(userId, data);
      };
      handleCreation(user.id, data);
      let localCohorts = cohorts;
      localCohorts.push(data);
      setCohorts(localCohorts)
    }
    e.target.value=""
    changeModalState();
  };

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
