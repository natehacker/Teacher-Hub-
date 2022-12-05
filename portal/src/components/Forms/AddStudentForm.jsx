import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";

export default function AddStudentForm(props){
  return(
  <FormWindow>
    <FormHeader>Add Student</FormHeader>
        <form>
            <label htmlFor="firstName">First Name : </label>
            <input type="text" name="firstName"></input>
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name="lastName"></input>
            <GAButton>ADD STUDENT</GAButton>
        </form>



 </FormWindow>
  )
}