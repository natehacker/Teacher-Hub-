import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";

export default function DeleteClassForm(props){
  return(
  <FormWindow>
    <FormHeader>Delete Class</FormHeader>
        <form>
            <p>Are you sure you want to delete this class?</p>
            <GAButton>DELETE CLASS</GAButton>
        </form>



 </FormWindow>
  )
}