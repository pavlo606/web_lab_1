import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Layout from "../App/Layout/Layout";
import ItemPage from "../ItemPage/ItemPage";
import { ItemContext } from "../../context/Items"

const data = [
    {
        id: "1",
        title: "Arduino Mega 2560 R3 (CH340)",
        text: `A replica of the original Arduino Mega2560 board. The CH340 microcircuit is used as a USB-UART adapter, which has proven itself well and is characterized by good stability, high data transfer speed, but which requires additional installation of drivers. Also, the controller differs from its predecessors by additional SDA and SCL contacts (I2C interface) and AREF outputs - sources reference voltage for the ADC of the controller and IOREF - the output voltage of the input-output ports (for automatic switching of the peripheral voltage when using 5V and 3.3V controllers). In everything else, it is still the same Arduino Mega2560 controller based on the Atmega2560 microcontroller with a lot of example programs, libraries and a description of the construction of ready-made structures.

Arduino is an open platform with open source programs and freely available libraries that allows you to assemble a variety of electronic devices. The Arduino Mega2560 board will be of interest to designers, programmers, creative and curious people who want to assemble and program their own device or controllable structure.
A huge number of different application programs and libraries have been written for this platform. There are probably no sensors, displays, and actuators left for which an Arduino library or program that uses them is not written.

A simplified version of C++ is used for programming. Software development can be conducted both using the free Arduino IDE environment and using arbitrary C/C++ tools. A USB cable is required for programming and data transfer to a PC, and for autonomous operation you can use a power supply unit, batteries or a 7-12 V battery with a 5.5*2.1 mm connector.`,
        image: require("../../icons/arduino_mega.jpg"),
        price: 15.85,
        category: "microcontrollers",
        quantity: 51,
        rating: 5,

    },
    {
        id: "2",
        title: "Communication module SIM7600E-H LTE Cat-4 4G/3G/2G, GNSS for Raspberry Pi, Jetson Nano",
        text: `4G/3G/2G/GSM/GPRS/GNSS Communication Module for Raspberry Pi SIM7600E-H 4G is a 4G/3G/2G GNSS communication and positioning module that supports LTE CAT4 with data transfer rate up to 150Mbps for data transmission on the downlink with fairly low power consumption. You can connect this 4G module to your computer for internet or connect it to Raspberry Pi to enable functions such as high-speed 4G connection, wireless communication, voice communication, SMS sending, global positioning, etc. The module is perfect for providing your Raspberry with the Internet in offline mode and for creating autonomous portable devices for collecting, processing and transmitting data over the networks of mobile operators.

Manufacturer code: 14952, SIM7600E-H 4G HAT`,
        image: require("../../icons/SIM7600E.jpg"),
        price: 68.09,
        category: "radio_modules",
        quantity: 2,
        rating: 4.5,
    },
    {
        id: "3",
        title: 'OLED display 0.96" I2C 128x64 (yellow-blue)',
        text: `A bright, economical, high-contrast OLED display will be a worthy decoration of any of your designs, for which size and appearance are important. The contrast of the display will allow you to confidently read information from it even in very bright light. The common I2C interface will allow you to connect several displays to a modern microcontroller (STM32/ESP32/Mega2560) or a mini-computer (RaspberryPi/OrangePi/NanoPi).

The address can be selected by resoldering the jumper, a typical address is 0x3c. Please note: this display is not suitable for Arduino Uno and similar due to the features of the U8g2lib library.`,
        image: require("../../icons/OLED_display.jpg"),
        price: 3.18,
        category: "displays",
        quantity: 60,
        rating: 4.5,
    },
    {
        id: "4",
        title: 'GPS module NEO-7M Mini SMA',
        text: `GPS modules of the NEO-7 series are Multi-GNSS receivers (with support for several common satellite navigation standards). These modules are an excellent solution for portable and autonomous systems that require positioning information and accurate time with low power consumption and compact design. The NEO-7 modules are compatible with the previous NEO-6 and NEO-5 series. The module can be used in Arduino, AVR, PIC, ARM and mini-computer devices. The module includes a second pulse output that can be used for time synchronization.

        To save the current settings and data about the current location, a battery and an EEPROM memory chip are installed on the board.
        
        You can check the functionality of the module and change its settings in the service program, the link to which is below.`,
        image: require("../../icons/NEO-7m.jpg"),
        price: 9.00,
        category: "radio_modules",
        quantity: 20,
        rating: 3.5,
    },
    {
        id: "5",
        title: 'Arduino Nano V3 ATmega328P-AU board unsoldered',
        text: `The Arduino Nano V3.0 with Unsoldered Connectors is a small, self-contained, breadboard-compatible board built on the ATmega328 microcontroller. It is largely functionally identical to the Arduino Duemilanove/Uno, but has a different form factor. Arduino Nano only lacks a power connector and uses a Mini-B USB cable instead of a standard one (the cable is not included). This board differs in that it does not have unsoldered contacts, which allows it to be used in portable devices.

A replica of the original board, made in China. The CH340G microcircuit is used to connect to the computer (link to the driver at the bottom of the page).
        
Arduino Nano can be powered from a Mini-B USB connector or an external 6-12V power supply ("Vin" pin) or from a stable external 5V power supply ("5V" pin). The power supply automatically switches to a source with a higher voltage.
        
WARNING! In Arduino IDE versions above 1.6.20, the option to select the bootloader version appeared (by default - new), therefore, boards with an older version of the bootloader will not be flashed via USB.`,
        image: require("../../icons/arduino_nano.jpg"),
        price: 6.83,
        category: "microcontrollers",
        quantity: 45,
        rating: 4,
    },
    {
        id: "6",
        title: 'Arduino UNO R3 (CH340)',
        text: `A replica of the original Arduino UNO board. The CH340 microcircuit is used as a USB-UART adapter, which has proven itself well and is characterized by good stability, high data transfer speed, but which requires additional installation of drivers. Also, the controller differs from its predecessors by additional SDA and SCL contacts (I2C interface) and AREF outputs - sources reference voltage for the ADC of the controller and IOREF - the output voltage of the input-output ports (for automatic switching of the peripheral voltage when using 5V and 3.3V controllers). In everything else, it is still the same Arduino UNO controller based on the Atmega328p microcontroller with a lot of example programs, libraries and a description of the construction of ready-made structures.

Arduino is an open platform with open source programs and freely available libraries that allows you to assemble a variety of electronic devices. The Arduino UNO board will be of interest to designers, programmers, creative and curious people who want to assemble and program their own device or controlled structure.
        
A huge number of different application programs and libraries have been written for this platform. There are probably no sensors, displays, and actuators left for which an Arduino library or program that uses them is not written.
        
A simplified version of C++ is used for programming. Software development can be conducted both using the free Arduino IDE environment and using arbitrary C/C++ tools. A USB cable is required for programming and data transfer to a PC, and for autonomous operation you can use a power supply unit, batteries or a 7-12 V battery with a 5.5*2.1 mm connector.`,
        image: require("../../icons/arduino_uno_r3.jpg"),
        price: 6.55,
        category: "microcontrollers",
        quantity: 63,
        rating: 5,
    },
    {
        id: "7",
        title: 'ATMEGA328P-PU microcontroller (with Arduino Uno bootloader)',
        text: `ATMega328P in a DIP package, has a pre-flashed Arduino UNO bootloader (16MHz). This will allow you to use Arduino code in projects without actually using an Arduino board.

For full operation, you will need an additional 16MHz resonator, a 5V power supply and a serial connection.`,
        image: require("../../icons/atmega_328.jpg"),
        price: 5.48,
        category: "microcontrollers",
        quantity: 25,
        rating: 4.5,
    },
];

function Navigation() {

    return (
        <div>
            <Layout />
            <ItemContext.Provider value={data}>
                <Routes>
                    <Route path="/" element={<Home />} key="/"/>
                    <Route path="/catalog" element={<Catalog />} key="/catalog"/>
                    <Route path="/cart" element={<h1>Cart</h1>} key="/cart"/>
                    <Route path="/item/:itemId" element={<ItemPage />} key="/cart"/>
                    <Route path="/*" element={<Navigate to="/"/>} key="/*"/>
                </Routes>
            </ItemContext.Provider>
        </div>
    );
}

export default Navigation;
