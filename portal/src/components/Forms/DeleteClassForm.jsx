import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { DeleteCohort } from "../../services/CohortServices";

export default function DeleteClassForm({user, authenticated, cohorts, setCohorts, changeModalState, cohortId}){

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (user) {
      console.log(cohortId)
      const handleDeletion = async (classId) => {
        await DeleteCohort(classId);
      };
      handleDeletion(cohortId);
    }
    window.location.reload()
    e.target.value=""
    changeModalState();
  };
  return(
  <FormWindow>
    <FormHeader>Delete Class</FormHeader>
        <form onSubmit={handleSubmit}>
            <p>Are you sure you want to delete this class?</p>
            <GAButton>DELETE CLASS</GAButton>
        </form>



 </FormWindow>
  )
}