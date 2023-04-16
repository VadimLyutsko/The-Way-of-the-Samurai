import axios, {AxiosResponse} from 'axios';
import {FormDataType} from '../components/Login/Login';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '6460e8b1-6d9f-47f4-9d85-6295c9ba0d11'}
});


export const authAPI = {
    me: function () {
        return instance.get(`auth/me`,)
    },
    login(data:FormDataType) {
        return instance.post<{ email: string, password:string  }, AxiosResponse<ResponseType<{ userId:number }>>>('auth/login', data);
    },
    logout(){
        return instance.delete<ResponseType>(`/auth/login`);
    }
};


export const usersAPI = {
    getUsers: function (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response);
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


export const profileAPI = {
    getData: function (userId: string) {
        return instance.get(`profile/${userId}`,).then(response => response);
    },
    getUserStatus: function (userId: string) {
        return instance.get(`profile/status/${userId}`,).then(response => response);
    },
    updateUserStatus: function (status: string) {
        console.log('updateUserStatus')
        return instance.put(`profile/status`, {status: status}).then(response => response);
    }
};

//types
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}