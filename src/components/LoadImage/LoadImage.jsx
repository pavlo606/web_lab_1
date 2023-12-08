import React, { useState, useEffect } from "react";

import { downloadImage } from "../../API/api";

const LoadImage = ({ image }) => {
    const [imageData, setImageData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        downloadImage(image, setImageData, setLoading);
    }, [image])

    return loading ? (
        <div>Loading...</div>
    ) : (
        imageData && <img src={imageData} alt={image} />
    )
}

export default LoadImage;