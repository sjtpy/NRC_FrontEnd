import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/child/getAll');
}

export default {getAll};
