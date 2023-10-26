import React from "react";
import ArduinoImg from "../../icons/arduino_uno.jpg"
import ArduinoMegaImg from "../../icons/arduino_mega.jpg";
import SIM7600E from "../../icons/SIM7600E.jpg";
import OLED_disp from "../../icons/OLED_display.jpg";
import { HomeWrapper, DesctriptionWrapper, CardsWrapper, ButtonWrapper } from "./Home.styled";
import { Card, Button } from "antd";
import CardItem from "../../components/CardItem/CardItem";

const { Meta } = Card;

const data = [
    {
        title: "Arduino Mega 2560 R3 (CH340)",
        text: "A replica of the original Arduino Mega2560 board. The CH340 chip is used as a USB-UART adapter ...",
        image: ArduinoMegaImg,
        price: 15.85,
    },
    {
        title: "Communication module SIM7600E-H LTE Cat-4 4G/3G/2G, GNSS for Raspberry Pi, Jetson Nano",
        text:"It is a 4G/3G/2G GNSS communication and positioning module that supports LTE CAT4 with a data rate of up to 150 Mbps for downlink data transmission with fairly low power consumption ...",
        image: SIM7600E,
        price: 68.09,
    },
    {
        title: 'OLED display 0.96" I2C 128x64 (yellow-blue)',
        text:
            "A bright, economical, high-contrast OLED display will nicely decorate any of your designs, for which size and appearance are important ...",
        image: OLED_disp,
        price: 3.18,
    },
];

function Home() {
    return (
        <HomeWrapper>
            <DesctriptionWrapper>
                <img src={ArduinoImg} alt=""/>
                <div>
                    <h2>What is Arduino</h2>
                    <p>Arduino designs, manufactures, and supports electronic devices and software, allowing people around the world to easily access advanced technologies that interact with the physical world. Our products are straightforward, simple, and powerful, ready to satisfy users’ needs from students to makers and all the way to professional developers.</p>
                </div>
            </DesctriptionWrapper>
            <h2>Our recommendations for you</h2>
            <CardsWrapper>
                {data.map(({ title, text, image, price }, idx) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={idx}
                    />
                ))}
            </CardsWrapper>
            <ButtonWrapper>
                <Button styles={{}} size="large">View more</Button>
            </ButtonWrapper>
        </HomeWrapper>
    );
}

export default Home;
