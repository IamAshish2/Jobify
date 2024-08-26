import * as yup from "yup";

export const signUpSchema = yup.object().shape({
    UserName:yup.string().required("userName cannot be empty!").min(5,"The username should be at least 5 character's long"),
    Email:yup.string().email().required("email cannot be empty!"),
    Password:yup.string().required("Password cannot be empty").min(8,"The password should at least be 8 characters long").max(16,"The password length limit is 16"),
    ConformPassword:yup.string().oneOf([yup.ref("Password"),null],"Password's do not match"),
    Role:yup.string().required("Please select one role!"),
    iAgree:yup.bool().oneOf([true],"You must agree to all Terms and Conditions.")
});

export const signInSchema = yup.object().shape({
    UserName:yup.string().required("UserName cannot be empty!"),
    Password:yup.string().required("Password Cannot be empty!")
});