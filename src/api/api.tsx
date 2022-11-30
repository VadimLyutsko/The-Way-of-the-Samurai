import axios from 'axios';

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '1e09ab9f-6c75-4b1b-b630-54d8c35cb68b'}
})

export const usersApi = {
    getUsers: function (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(response => response.data);
    },

    unfollowUserAPI: function (userId: number) {
        return instance.delete(`follow/${userId}`, {
            withCredentials: true,
            headers: {'API-KEY': '1e09ab9f-6c75-4b1b-b630-54d8c35cb68b'}
        }).then(response => response.data.resultCode);
    },
    followUserAPI: function (userId: number) {
        return instance.post(`follow/${userId}`, {}, {
            withCredentials: true,
            headers: {'API-KEY': '1e09ab9f-6c75-4b1b-b630-54d8c35cb68b'}
        }).then(response => response.data.resultCode);
    }
};

