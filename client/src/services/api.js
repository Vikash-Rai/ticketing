import axios from 'axios'
const URL = 'http://localhost:8000';


export const registerTicket = async(issue)=>{
    try{
        const data = await axios.post(`${URL}/issueticket`,issue)
        return data

    }
    catch(error){
        console.log('Error while calling registerDoctor api',error)
    }
}


export const uploadFile=async(data)=>{
    try{
       return await axios.post(`${URL}/file`, data);

    }catch (error){
        console.log('Error while uploading image',error);
    }
}