import FormHeader from "./elements/FormHeader";
import FormWindow from "./elements/FormWindow";
import GAButton from "./elements/GAButton";

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