import GAButton from "./elements/GAButton";
import FormHeader from "./elements/FormHeader";

export default function SignInForm () {
    return(
    <div className="signin-form">
        
       
        <FormHeader>Welcome</FormHeader>



        
        <GAButton>LOG IN</GAButton>

        <div className="form-footer">
            <small>Don't have an account? Register</small>
        </div>
    </div>
    )
}