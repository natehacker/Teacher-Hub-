import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";

export default function UpdateClassForm(props){
  return(
  <FormWindow>
    <FormHeader>Update Class</FormHeader>
        <form>
            <label htmlFor="name">New Name : </label>
            <input type="text" name="name"></input>
            <GAButton>UPDATE CLASS</GAButton>
        </form>



 </FormWindow>
  )
}