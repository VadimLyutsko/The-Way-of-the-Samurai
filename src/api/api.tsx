import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '1e09ab9f-6c75-4b1b-b630-54d8c35cb68b'}
});

export const usersAPI = {
    getUsers: function (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
};

export const followAPI = {
    followUserApi: function (userId: number) {
        return instance.post(`follow/${userId}`, {},).then(response => response.data.resultCode);
    },
    unfollowUserApi: function (userId: number) {
        return instance.delete(`follow/${userId}`).then(response => response.data.resultCode);
    }
};

export const authAPI = {
    getAuthApi: function () {
        return instance.get(`auth/me`,).then(response => response.data);
    }
};

export const profileAPI = {
    getData: function (userId: string) {
        return instance.get(`profile/${userId}`,).then(response => response);
    }
};

