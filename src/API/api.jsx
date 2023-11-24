import axios from "axios";


export const ItemsBaseURL = "http://127.0.0.1:5000/items";

export const getItems = async (params, callback) => {
    axios.get(`${ItemsBaseURL}`, { params }).then((response) => {
        callback(response.data);
    });
};

export const getFilters = async (callback) => {
    axios.get(`${ItemsBaseURL}/category`).then((response) => {
        console.log(response.data);
        let resp = response.data.map((item) => ({ 
            value: item,
            label: item
        }));
        resp.unshift({ value: "all", label: "All categories" });
        callback(resp);
    });
};

export const downloadImage = async (name, setImageData, setLoading) => {
    if (!name) {
        return null;
    }
    try {
        setLoading(true);
        const response = await axios.get(`${ItemsBaseURL}/image/${name}`, {
            responseType: 'arraybuffer',
        });

        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const dataUrl = URL.createObjectURL(blob);

        setImageData(dataUrl);
    } catch (error) {
        console.error('Error downloading image:', error);
    } finally {
        setLoading(false);
    }
};