import httpClient from '../http-common';
import axios from 'axios';

const getAll = () => {
    return httpClient.get('/children');
}


const getAllDischarged = () => {
    return httpClient.get('dischargedList');
}
const create = (data) => {
    return httpClient.post("children", data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const get = samId => {
    return httpClient.get(`children/${samId}`);

}

const update = (data) => {
    return httpClient.put('children',data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
const discharge = (data) => {
    
    // var data = JSON.stringify({
    // "app_id": "f2596674-be88-45f6-a7f3-e77f1b82ae13",
    // "include_external_user_ids": [
    //     "user"
    // ],
    // "android_accent_color": "FF9976D2",
    // "small_icon": "ic_stat_onesignal_default",
    // "large_icon": "https://www.filepicker.io/api/file/zPloHSmnQsix82nlj9Aj?filename=name.jpg",
    // "headings": {
    //     "en": "Anubhav"
    // },
    // "contents": {
    //     "en": "2"
    // }
    // });

    // var config = {
    // method: 'post',
    // url: 'https://onesignal.com/api/v1/notifications',
    // headers: { 
    //     'Content-Type': 'application/json', 
    //     'Authorization': 'Bearer NjBiNTI3M2QtMDFhMy00N2RiLTgzZWMtZGFlY2MzMGUxZGEy'
    // },
    // data : data
    // };

    // axios(config)
    // .then(function (response) {
    // console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    // console.log(error);
    // });

    return httpClient.post("discharge", data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}



const remove = samId => {
    return httpClient.delete(`children/${samId}`);
}
//makes http call to rest api endpoint in springboot 

export default {getAll,getAllDischarged, create, get,update, remove, discharge};




