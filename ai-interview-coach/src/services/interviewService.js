import api from "./api";

export const createInterview = async(data,token) => {
    const response = await api.post("interviews",data,{
        headers : {
            Authorization : `Bearer ${token}`,
        },
    })
    return response.data;
};
