import React, { useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    if (signUpForm.password !== signUpForm.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        signUpForm.email,
        signUpForm.password
	  );
	  console.log('signup form value ', signUpForm.displayName)
      createUserProfileDocument(user, signUpForm.displayName);
      setSignUpForm({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = e => {
	const { name, value } = e.target;
	console.log('sign up form on change', signUpForm)
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={signUpForm.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={signUpForm.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={signUpForm.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={signUpForm.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
