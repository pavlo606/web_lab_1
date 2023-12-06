import React from "react";
import logo from "../../../icons/logo.svg";
import { HorizontalLine, StyledFooter, IconsWrapper, Wrapper, StyledText } from "./Footer.styled";
import LinkedImg from "../../../components/LinkedImg/LinkedImg";
import {
    TwitterOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
    FacebookOutlined
} from "@ant-design/icons";

function Footer() {
    return (
        <StyledFooter>
            <Wrapper>
                <div>
                    <h3>Branding stuff</h3>
                    <p>Some very interesting text...</p>
                </div>
                
                <img src={logo} alt="" width={100}/>

                <IconsWrapper>
                    <LinkedImg href="https://www.facebook.com/" component={FacebookOutlined} color='#4267B2'/>
                    <LinkedImg href="https://twitter.com/" component={TwitterOutlined} color='#03A9F4'/>
                    <LinkedImg href="https://www.linkedin.com/home" component={LinkedinOutlined} color='#007AB9'/>
                    <LinkedImg href="https://youtube.com/" component={YoutubeOutlined} color='#FF0000'/>
                </IconsWrapper>
            </Wrapper>
            <HorizontalLine />
            <StyledText>2023 IoT © Copyright all rights reserved</StyledText>
        </StyledFooter>
    );
}

export default Footer;
