// const BASE_URL = 'http://127.0.0.1:5000/'
const BASE_URL = 'http://pavlodykyi.pythonanywhere.com/'
const RESOURCE_URL = `${BASE_URL}/insects`

const loader = document.getElementById("loader");

const baseRequest = async ({urlPath = "", method = "GET", body = null}) => {
    try {
        loader.classList.remove("d-none");
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams)
    } catch (error) {

    } finally {
        loader.classList.add("d-none");
    }
}

export const getAllInsects = async () => {
    const rawResp = await baseRequest({method: 'GET'});

    return rawResp.json();
}

export const postInsects = async (body) => {
    const rawResp = await baseRequest({method: 'POST', body});
    
    return rawResp.json();
}

// export const putInsects = (body) => baseRequest({method: 'PUT', body});

// export const deleteInsects = (id) => baseRequest({urlPath: `?id=${id}`, method: 'DELETE'});
export const putInsects = async (body) => {
    const rawResp = await baseRequest({method: 'PUT', body});
    
    return rawResp.json();
}
export const deleteInsects = async (id) => {
    const rawResp = await baseRequest({urlPath: `?id=${id}`, method: 'DELETE'});
    
    return rawResp.json();
}