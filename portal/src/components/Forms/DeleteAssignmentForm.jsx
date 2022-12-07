import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";

export default function DeleteAssignmentForm({props}){




  return(
  <FormWindow>
    <FormHeader>Delete Assignment</FormHeader>
        <form>
            <p className="form-paragraph">Are you sure you want to delete this assignment?</p>
            <GAButton>DELETE ASSIGNMENT</GAButton>
        </form>



 </FormWindow>
  )
}