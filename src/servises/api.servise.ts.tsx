import axios from "axios";
import {AuthDataModels} from "../models/AuthDataModels";

const axiosInstance  = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2",
    headers: {}
});

const authServise = {
    authenticate: async (authData :AuthDataModels):Promise<boolean> => {
        return true;
    },
    refresh: () => {},
};


export {
    authServise,
}