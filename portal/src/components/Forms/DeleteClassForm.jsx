import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { DeleteCohort, GetCohorts } from "../../services/CohortServices";

export default function DeleteClassForm({user, authenticated, cohorts, setCohorts, changeModalState, cohortId}){

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      console.log(cohortId)
      const handleDeletion = async (classId,userId) => {
        await DeleteCohort(classId);
        const updatedCohorts = await GetCohorts(userId);
        setCohorts(updatedCohorts);
      };
      await handleDeletion(cohortId, user.id);
    }
    // window.location.reload()
    e.target.value=""
    changeModalState();
  };
  return(
  <FormWindow>
    <FormHeader>Delete Class</FormHeader>
        <form onSubmit={handleSubmit}>
            <p className="form-paragraph">Are you sure you want to delete this class?</p>
            <GAButton>DELETE CLASS</GAButton>
        </form>



 </FormWindow>
  )
}