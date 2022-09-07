// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignInForm from "../../componenets/signin-form/signin-form.component";
import SignUpForm from "../../componenets/signup-form/signup-form.component";
import "./authentication.style.scss";

const Authentication = () => {
  //sign in with google redirect
  //   useEffect(() => {
  //     const asyncFunction = async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //       //   console.log(response);
  //     };
  //     asyncFunction();
  //   }, []);

  //sign in with google popup

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
