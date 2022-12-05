import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";

export default function AddAssignmentForm(props){
  return(
  <FormWindow>
    <FormHeader>Add Assignemnt</FormHeader>
        <form>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name"></input>
            <GAButton>ADD ASSIGNMENT</GAButton>
        </form>



 </FormWindow>
  )
}