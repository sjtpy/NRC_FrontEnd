import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/api/v1/children');
}

const create = (data) => {
    return httpClient.post("/api/v1/children", data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
//makes http call to rest api endpoint in springboot 

export default {getAll, create};
