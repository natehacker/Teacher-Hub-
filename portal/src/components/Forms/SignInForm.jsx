import GAButton from "./GAButton";
import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignInUser } from "../../services/Auth";

export default function SignInForm({ setUser, toggleAuthenticated }) {
  let navigate = useNavigate();
  const [signInForm, setSignInForm] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(signInForm);
    setSignInForm({
      email: "",
      password: "",
    });
    setUser(payload);
    toggleAuthenticated(true);
    navigate("/portal");
  };

  return (
    <FormWindow>
      <FormHeader>Welcome</FormHeader>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input onChange={handleChange} type="text" name="email"></input>
        <label htmlFor="password">Password : </label>
        <input onChange={handleChange} type="password" name="password"></input>
        <GAButton checkDisabled={!signInForm.email || !signInForm.password}>
          LOG IN
        </GAButton>
      </form>

      <div className="form-footer">
        <small>
          Don't have an account? <Link to="/register">Register</Link>
        </small>
      </div>
    </FormWindow>
  );
}
