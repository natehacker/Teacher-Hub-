import GAButton from "./elements/GAButton";
import FormHeader from "./elements/FormHeader";

export default function SignInForm () {
    return(
    <div className="signin-form">
        
       
        <FormHeader>Welcome</FormHeader>
        <form>
            <label htmlFor="email">Email : </label>
            <input type="text" name="email"></input>
            <label htmlFor="password">Password : </label>
            <input type="text" name="password"></input>
            <GAButton>LOG IN</GAButton>
        </form>


        
        

        <div className="form-footer">
            <small>Don't have an account? <a href="/">Register</a></small>
        </div>
    </div>
    )
}