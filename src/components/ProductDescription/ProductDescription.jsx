import React from 'react';
import ReactMarkdown from 'react-markdown';

const ProductDescription = ({ children }) => {
    return <ReactMarkdown>{children}</ReactMarkdown>;
};

export default ProductDescription;