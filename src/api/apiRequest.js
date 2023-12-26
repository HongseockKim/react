import api from "./api";

class ApiRequest{
    static async loginRequest(){
        try {
            const data = await api.loginTest();
            return data;
        } catch (err){
            throw err;
        }
    }
    static async communityRequst(param){
        try {
            const data = await api.communityList(param);
            return data;
        } catch (err){
            throw err;
        }
    }
}

export default ApiRequest;