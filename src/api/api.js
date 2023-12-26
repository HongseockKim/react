import axiosInstance from "../axios/axios";

export default {
    loginTest(){
        return axiosInstance.post('/login')
    },
    communityList(param){
        return axiosInstance.post('/alarm/list',param)
    }
}