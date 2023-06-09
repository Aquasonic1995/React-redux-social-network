import  axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId:any) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId:any) {
        return instance.delete(`follow/${userId}`)
    },

}

export const profileAPI = {
    getProfile(userId:any) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId:any) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status:any) {
        return instance.put(`profile/status`, { status: status });
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email:any, password:any, rememberMe:boolean = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}