// const BASE_URL = 'http://127.0.0.1:5000/'
const BASE_URL = 'http://pavlodykyi.pythonanywhere.com/'
const RESOURCE_URL = `${BASE_URL}/insects`

const baseRequest = async ({urlPath = "", method = "GET", body = null}) => {
    try {
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

    }
}

export const getAllInsects = async () => {
    const rawResp = await baseRequest({method: 'GET'});

    return rawResp.json();
}

export const postInsects = (body) => baseRequest({method: 'POST', body});

export const putInsects = (body) => baseRequest({method: 'PUT', body});

export const deleteInsects = (id) => baseRequest({urlPath: `?id=${id}`, method: 'DELETE'});