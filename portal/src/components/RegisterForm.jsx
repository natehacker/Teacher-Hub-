import FormHeader from "./elements/FormHeader";
import FormWindow from "./elements/FormWindow";
import GAButton from "./elements/GAButton";

export default function RegisterForm(props){
  return(
  <FormWindow>
    <FormHeader>Register</FormHeader>
        <form>
            <label htmlFor="firstName">First Name : </label>
            <input type="text" name="firstName"></input>
            <label htmlFor="lastName">Last Name : </label>
            <input type="text" name="lastName"></input>
            <label htmlFor="email">Email : </label>
            <input type="text" name="email"></input>
            <label htmlFor="password">Password : </label>
            <input type="text" name="password"></input>
            <label htmlFor="confirmPassword">Confirm Password : </label>
            <input type="text" name="confirmPassword"></input>
            <GAButton>REGISTER</GAButton>
        </form>


        <div className="form-footer">
            <small>Already have an account? <a href="/">Sign in</a>.</small>
        </div>


 </FormWindow>
  )
}