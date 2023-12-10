import React, { useState, useEffect } from "react";
import {
    CaretUpOutlined,
    CaretDownOutlined,
    LoadingOutlined
} from "@ant-design/icons";
import { Spin } from 'antd';

import CardItem from "../../components/CardItem/CardItem";
import PrimarySelect from "../../components/PrimarySelect/PrimarySelect";
import SearchInput from "../../components/SearchInput/SearchInput";
import { getFilters, getItems } from "../../API/api";
import { FiltersContainer, ItemsContainer, SelectWrapper, SortDirectionButton } from "./Catalog.styled";

const sortOptions = [
    { value: "name", label: "Sort by name" },
    { value: "price", label: "Sort by price" },
    { value: "rating", label: "Sort by popularity" },
];

const Catalog = () => {
    const [items, setItems] = useState([]);

    const [filterOptions, setfilterOptions] = useState([{ value: "all", label: "All categories" }]);
    const [sortMode, setSortMode] = useState("name");
    const [filterMode, setFilterMode] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [reverseSort, setReverseSort] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getFilters((filters) => setfilterOptions(filters));
    }, [])

    useEffect(() => {
        setIsLoading(true);
        getItems({
            filter: filterMode,
            sort: sortMode,
            reverse_sort: reverseSort,
            search: searchValue,
        }, (val) => {
            setItems(val);
            setIsLoading(false);
        });
    }, [filterMode, sortMode, searchValue, reverseSort]);

    const onSortChange = (value) => {
        setSortMode(value);
        setReverseSort(false);
    }

    const onFilterChange = (value) => {
        setFilterMode(value);
        setReverseSort(false);
    }

    const onSearch = (value) => {
        setSearchValue(value);
        setReverseSort(false);
    }

    const reverseChange = (reverse) => {
        setReverseSort(reverse);
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
                ( isLoading ?
                    <Spin style={{ margin: "auto" }} indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} /> :
                    <h2>No Items</h2>
                )
                }
            </ItemsContainer>
        </div>
    )
};

export default Catalog;