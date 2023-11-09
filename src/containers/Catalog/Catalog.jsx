import React, { useContext, useState } from "react";
import { FiltersContainer, ItemsContainer, SelectWrapper, SortDirectionButton } from "./Catalog.styled";
import CardItem from "../../components/CardItem/CardItem";
import PrimarySelect from "../../components/PrimarySelect/PrimarySelect";
import SearchInput from "../../components/SearchInput/SearchInput";
import {
    CaretUpOutlined,
    CaretDownOutlined
} from "@ant-design/icons";
import { ItemContext } from "../../context/Items";

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
    "popularity": (a,b) => b.rating - a.rating,
    "no_sort": () => {}
};

const Catalog = () => {
    const data = useContext(ItemContext);
    const [items, setItems] = useState(data);

    const [sortMode, setSortMode] = useState("no_sort");
    const [filterMode, setFilterMode] = useState("all");
    const [searchValue, setSearchValue] = useState("");
    const [reverseSort, setReverseSort] = useState(false);

    const applyFilters = ({sort = sortMode, filter = filterMode, search = searchValue, reverse = reverseSort}) => {
        let newItems = [...data];
        console.log(data);

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
                ))
                }
            </ItemsContainer>
        </div>
    )
};

export default Catalog;