import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from "react-redux";
import * as Yup from 'yup';

import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { deleteAll } from "../../redux/actions/actions";
import { StyledCheckout, ButtonWrapper, InputWrapper, PaymentWrapper } from "./Checkout.styled";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email')
        .required('Required'),
    phone: Yup.number()
        .integer('Cannot have decimal')
        .test(
            "Number length",
            "Incorrect phone number",
            (number) => String(number).length >= 9 && String(number).length <= 12
        )
        .required('Requaried'),
    address: Yup.string()
        .min(5, 'Too short')
        .required('Required'),
});
const Checkout = () => {
    const navigate = useNavigate();
    const itemList = useSelector((state) => state.itemList);
    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        let sum = 0;
        itemList.forEach(element => {
            sum += element.price * element.count;
        });
        console.log(sum);
        setTotalPrice(sum);
    }, [itemList])

    return (
        <StyledCheckout>
            <h2>Checkout</h2>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                    payment: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    navigate("/success");
                    dispatch(deleteAll());
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <InputWrapper>
                            <div>
                                <div style={{ marginRight: "20px" }}>
                                    <label htmlFor="firstName">First name:</label>
                                    <Field name="firstName" id="firstName" />
                                    {errors.firstName && touched.firstName ? (
                                        <div className="input_error">*{errors.firstName}</div>
                                    ) : null}
                                </div>

                                <div style={{ marginLeft: "20px" }}>
                                    <label htmlFor="lastName">Last name:</label>
                                    <Field name="lastName" id="lastName" />
                                    {errors.lastName && touched.lastName ? (
                                        <div className="input_error">*{errors.lastName}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div>
                                <div style={{ marginRight: "20px" }}>
                                    <label htmlFor="email">Email:</label>
                                    <Field name="email" id="email" type="email" />
                                    {errors.email && touched.email ? (
                                        <div className="input_error">*{errors.email}</div>
                                    ) : null}
                                </div>

                                <div style={{ marginLeft: "20px" }}>
                                    <label htmlFor="phone">Phone:</label>
                                    <Field name="phone" id="phone" />
                                    {errors.phone && touched.phone ? (
                                        <div className="input_error">*{errors.phone}</div>
                                    ) : null}
                                </div>
                            </div>

                            <label htmlFor="address">Address:</label>
                            <Field name="address" id="address" />
                            {errors.address && touched.address ? (
                                <div className="input_error">*{errors.address}</div>
                            ) : null}
                        </InputWrapper>
                        
                        <PaymentWrapper>
                            <div>
                                <label htmlFor="payment">Payment method:</label>
                                <Field as="select" name="payment" id="payment" >
                                    <option value="card">Card</option>
                                    <option value="cash_on_delivery">Cash on delivery</option>
                                </Field>
                                {errors.select && touched.select ? (
                                    <div className="input_error">*{errors.select}</div>
                                ) : null}
                            </div>
                            <p>Total price: {Number(totalPrice).toFixed(2)}$</p>
                        </PaymentWrapper>

                        <ButtonWrapper>
                            <Link to="/cart"><PrimaryButton>Back to cart</PrimaryButton></Link>
                            <PrimaryButton type="primary" htmlType="submit">Submit</PrimaryButton>
                        </ButtonWrapper>
                    </Form>
                )}
            </Formik>
        </StyledCheckout>
    )
}

export default Checkout;