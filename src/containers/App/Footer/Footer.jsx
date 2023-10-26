import React from "react";
import logo from "../../../icons/logo.svg";
import { HorizontalLine, StyledFooter, IconsWrapper, IconBase, Wrapper, StyledText } from "./Footer.styled";
import Icon, {
    TwitterOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
    FacebookOutlined,
    AliwangwangOutlined
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
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <IconBase component={FacebookOutlined} color='#4267B2'/>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <IconBase component={TwitterOutlined} color='#03A9F4' />
                    </a>
                    <a href="https://www.linkedin.com/home" target="_blank" rel="noreferrer">
                        <IconBase component={LinkedinOutlined} color='#007AB9'/>
                    </a>
                    <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                        <IconBase component={YoutubeOutlined} color='#FF0000'/>
                    </a>
                </IconsWrapper>
            </Wrapper>
            <HorizontalLine />
            <StyledText>2023 IoT © Copyright all rights reserved</StyledText>
        </StyledFooter>
    );
}

export default Footer;
