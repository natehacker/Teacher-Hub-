import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";

export default function AddClassForm(props){
  return(
  <FormWindow>
    <FormHeader>Add Class</FormHeader>
        <form>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name"></input>
            <GAButton>ADD CLASS</GAButton>
        </form>



 </FormWindow>
  )
}