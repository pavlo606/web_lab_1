import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { InputWrapper, LoginWrapper } from "./Login.styled";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, 'Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Password must have at least 5 characters')
        .required('Required'),
});

const Login = () => {
    return (
        <LoginWrapper>
            <h2>Login</h2>
            <Formik
                validationSchema={LoginSchema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <InputWrapper>
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
                        </InputWrapper>

                        <Link to="/signup">Don't have account?</Link>

                        <PrimaryButton type="primary" htmlType="submit">Login</PrimaryButton>
                    </Form>
                )}
            </Formik>
        </LoginWrapper>
    )
}

export default Login;