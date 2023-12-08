import React from "react";
import { Link } from "react-router-dom";

import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { StyledSuccess } from "./Success.styled";

const Success = () => {
    return (
        <StyledSuccess>
            <img src={require("../../icons/success-icon.png")} alt="Success" />
            <h2>Success!</h2>
            <p>Your order was sent to processing</p>
            <p>Check your e-mail box for further information</p>
            <Link to="/catalog"><PrimaryButton>Back to Catalog</PrimaryButton></Link>
        </StyledSuccess>
    )
}

export default Success;