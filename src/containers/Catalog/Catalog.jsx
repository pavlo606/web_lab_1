import React, { useState, useEffect } from "react";
import { FiltersContainer, ItemsContainer, SelectWrapper, SortDirectionButton } from "./Catalog.styled";
import CardItem from "../../components/CardItem/CardItem";
import PrimarySelect from "../../components/PrimarySelect/PrimarySelect";
import SearchInput from "../../components/SearchInput/SearchInput";
import {
    CaretUpOutlined,
    CaretDownOutlined
} from "@ant-design/icons";
import axios from "axios";
import { ItemsBaseURL, getFilters, getItems } from "../../API/api";

const sortOptions = [
    { value: "name", label: "Sort by name" },
    { value: "price", label: "Sort by price" },
    { value: "popularity", label: "Sort by popularity" },
];

// const filterOptions = [
//     { value: "all", label: "All categories" },
//     { value: "microcontrollers", label: "Microcontrollers" },
//     { value: "radio_modules", label: "Radio-modules" },
//     { value: "displays", label: "Displays" },
// ];

const Catalog = () => {
    const [items, setItems] = useState([]);

    const [filterOptions, setfilterOptions] = useState([{ value: "all", label: "All categories" }]);
    const [sortMode, setSortMode] = useState("name");
    const [filterMode, setFilterMode] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [reverseSort, setReverseSort] = useState(false);

    useEffect(() => {
        getItems({
            filter: filterMode,
            sort: sortMode,
            reverse_sort: reverseSort,
            search: searchValue,
        }, setItems);
        getFilters((filters) => setfilterOptions(filters));
    }, []);

    const applyFilters = ({sort = sortMode, filter = filterMode, search = searchValue, reverse = reverseSort}) => {
        getItems({
            filter,
            sort,
            reverse_sort: reverse,
            search,
        }, setItems);
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
        console.log(reverse);
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
                    <div style={{display: "flex", flexDirection: "column", marginRight: "20px"}}>
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
                </SelectWrapper>
                <SearchInput 
                    defaultValue={searchValue}
                    placeholder=""
                    onSearch={onSearch}
                />
            </FiltersContainer>
            <ItemsContainer>
                {
                items.length ?
                items.map(({ title, text, image, price, id, rating }) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={id}
                        rating={rating}
                        key={id}
                    />
                )) :
                <h2>No Items</h2>
                }
            </ItemsContainer>
        </div>
    )
};

export default Catalog;