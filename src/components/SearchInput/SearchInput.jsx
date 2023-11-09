import React from "react";
import { SearchOutlined } from '@ant-design/icons';
import { InputWrapper } from "./SearchInput.styled";


const SearchInput = ({ children, ...props }) => (
    <InputWrapper 
        allowClear 
        {...props}>
            {children}
    </InputWrapper>
);


export default SearchInput;