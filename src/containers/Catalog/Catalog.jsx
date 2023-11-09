import React, { useRef, useState } from "react";
import { FiltersContainer, ItemsContainer, SelectWrapper, SortDirectionButton } from "./Catalog.styled";
import CardItem from "../../components/CardItem/CardItem";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import PrimarySelect from "../../components/PrimarySelect/PrimarySelect";
import SearchInput from "../../components/SearchInput/SearchInput";
import {
    CaretUpOutlined,
    CaretDownOutlined
} from "@ant-design/icons";
import { Flex } from "antd";

const data = [
    {
        id: "1",
        title: "Arduino Mega 2560 R3 (CH340)",
        text: "A replica of the original Arduino Mega2560 board. The CH340 chip is used as a USB-UART adapter ...",
        image: require("../../icons/arduino_mega.jpg"),
        price: 15.85,
        category: "microcontrollers",
    },
    {
        id: "2",
        title: "Communication module SIM7600E-H LTE Cat-4 4G/3G/2G, GNSS for Raspberry Pi, Jetson Nano",
        text:"It is a 4G/3G/2G GNSS communication and positioning module that supports LTE CAT4 with a data rate of up to 150 Mbps for downlink data transmission with fairly low power consumption ...",
        image: require("../../icons/SIM7600E.jpg"),
        price: 68.09,
        category: "radio_modules",
    },
    {
        id: "3",
        title: 'OLED display 0.96" I2C 128x64 (yellow-blue)',
        text:
            "A bright, economical, high-contrast OLED display will nicely decorate any of your designs, for which size and appearance are important ...",
        image: require("../../icons/OLED_display.jpg"),
        price: 3.18,
        category: "displays",
    },
    {
        id: "4",
        title: 'GPS module NEO-7M Mini SMA',
        text:
            "GPS modules of the NEO-7 series are Multi-GNSS receivers. These modules are an excellent solution for portable and autonomous systems that require positioning information and accurate time with low power consumption and compact design. ...",
        image: require("../../icons/NEO-7m.jpg"),
        price: 9.00,
        category: "radio_modules",
    },
    {
        id: "5",
        title: 'Arduino Nano V3 ATmega328P-AU board unsoldered',
        text:
            "The Arduino Nano V3.0 is a small, self-contained, breadboard-compatible board built on the ATmega328 microcontroller. ...",
        image: require("../../icons/arduino_nano.jpg"),
        price: 6.83,
        category: "microcontrollers",
    },
    {
        id: "6",
        title: 'Arduino UNO R3 (CH340)',
        text:
            "A replica of the original Arduino UNO board. The CH340 microcircuit is used as a USB-UART adapter, which has proven itself and is characterized by good stability and high data transfer speed, but which requires additional installation of drivers. ...",
        image: require("../../icons/arduino_uno_r3.jpg"),
        price: 6.55,
        category: "microcontrollers",
    },
    {
        id: "7",
        title: 'ATMEGA328P-PU microcontroller (with Arduino Uno bootloader)',
        text:
            "ATMega328P in a DIP package, has a pre-flashed Arduino UNO bootloader (16MHz). This will allow you to use Arduino code in projects without actually using an Arduino board. ...",
        image: require("../../icons/atmega_328.jpg"),
        price: 5.48,
        category: "microcontrollers",
    },
];

const sortOptions = [
    { value: "no_sort", label: "No sort" },
    { value: "name", label: "Sort by name" },
    { value: "price", label: "Sort by price" },
    { value: "popularity", label: "Sort by popularity" },
];

const filterOptions = [
    { value: "all", label: "All categories" },
    { value: "microcontrollers", label: "Microcontrollers" },
    { value: "radio_modules", label: "Radio-modules" },
    { value: "displays", label: "Displays" },
];

const sortingFunctions = {
    "price": (a,b) => a.price - b.price,
    "name": (a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0),
    "popularity": (a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0),
    "no_sort": () => {}
};

const Catalog = () => {
    const [items, setItems] = useState(data);

    const [sortMode, setSortMode] = useState("no_sort");
    const [filterMode, setFilterMode] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [reverseSort, setReverseSort] = useState(false);

    const applyFilters = ({sort = sortMode, filter = filterMode, search = searchValue, reverse = reverseSort}) => {
        let newItems = [...data];
        console.log(search);

        const searchPattern = new RegExp(search, "i");

        newItems = newItems.filter(a => searchPattern.test(a.title));

        newItems.sort(sortingFunctions[sort]);
        if (filter !== "all") {
            newItems = newItems.filter(a => a.category === filter);
        }

        if (reverse) {
            newItems.reverse();
        }

        console.log(newItems);
        setItems([...newItems]);
        console.log(search);
    }
    
    const onSortChange = (value) => {
        console.log(value);
        setSortMode(value);
        setReverseSort(false);
        applyFilters({sort: value, reverse: false});
    }
    
    const onFilterChange = (value) => {
        console.log(value);
        setFilterMode(value);
        setReverseSort(false);
        applyFilters({filter: value, reverse: false});
    }

    const onSearch = (value) => {
        console.log(value);
        setSearchValue(value);
        setReverseSort(false);
        applyFilters({search: value,  reverse: false});
    }

    const reverseChange = (reverse) => {
        setReverseSort(reverse);
        applyFilters({reverse: reverse});
    }

    return (
        <div>
            <FiltersContainer>
                <SelectWrapper>
                    <PrimarySelect
                        defaultValue={sortMode}
                        onChange={onSortChange}
                        options={sortOptions}
                    />
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <SortDirectionButton 
                            type="text"
                            onClick={() => reverseChange(false)}
                            disabled={!reverseSort}
                        >
                            <CaretUpOutlined style={{ margin: "0px" }} />
                        </SortDirectionButton>
                        <SortDirectionButton 
                            type="text"
                            onClick={() => reverseChange(true)}
                            disabled={reverseSort}
                        >
                            <CaretDownOutlined style={{ margin: "0px" }} />
                        </SortDirectionButton>
                        
                    </div>
                    <PrimarySelect 
                        defaultValue={filterMode}
                        onChange={onFilterChange}
                        options={filterOptions}
                    />
                    {/* <PrimaryButton onClick={applyFilters}>Apply</PrimaryButton> */}
                </SelectWrapper>
                <SearchInput 
                    defaultValue={searchValue}
                    placeholder=""
                    onSearch={onSearch}
                />
            </FiltersContainer>
            <ItemsContainer>
                {
                items.map(({ title, text, image, price, id }) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        key={id}
                    />
                ))
                }
            </ItemsContainer>
        </div>
    )
};

export default Catalog;