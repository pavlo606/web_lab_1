import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { addUser } from "../../../redux/actions/actions";
import { SignUpWrapper, InputWrapper } from "./SignUp.styled";

const SignUpSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Username must have at least 3 characters')
        .required('Required'),
    email: Yup.string()
        .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, 'Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Password must have at least 5 characters')
        .required('Required'),
    confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});


const SignUp = ({ setAuth }) => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users);

    return (
        <SignUpWrapper>
            <h2>Sign Up</h2>
            <Formik
                validationSchema={SignUpSchema}
                initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                onSubmit={(values) => {
                    if (userList.find((a) => a.username === values.username)) {
                        alert("This username is already using");
                        return;
                    }
                    if (userList.find((a) => a.email === values.email)) {
                        alert("This email is already using");
                        return;
                    }
                    dispatch(addUser(values));
                    localStorage.setItem("login", JSON.stringify({
                        username: values.username,
                        email: values.email,
                        password: values.password,
                    }));
                    setAuth(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <InputWrapper>
                            <div>
                                <Field name="username" id="username" placeholder="Username" />
                                {errors.username && touched.username ? (
                                    <div className="input_error">*{errors.username}</div>
                                ) : null}
                            </div>

                            <div>
                                <Field name="email" id="email" placeholder="Email" />
                                {errors.email && touched.email ? (
                                    <div className="input_error">*{errors.email}</div>
                                ) : null}
                            </div>

                            <div>
                                <Field name="password" type="password" placeholder="Password" />
                                {errors.password && touched.password ? (
                                    <div className="input_error">*{errors.password}</div>
                                ) : null}
                            </div>

                            <div>
                                <Field name="confirmPassword" type="password" placeholder="Confirm Password" />
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <div className="input_error">*{errors.confirmPassword}</div>
                                ) : null}
                            </div>
                        </InputWrapper>

                        <Link to="/login">Already have account?</Link>

                        <PrimaryButton type="primary" htmlType="submit">Sign Up</PrimaryButton>
                    </Form>
                )}
            </Formik>
        </SignUpWrapper>
    )
}

export default SignUp;