import axios from "axios";
export const BACKEND_ENPOINT="https://qtify-backend-labs.crio.do";

// function to get the Top-albums data from backend api
export const fetchTopAlbums=async()=>{
    try{
        const res= await axios.get(`${BACKEND_ENPOINT}/albums/top`);
        // console.log(res.data);
        return res.data;
    }
    catch(error){
        // console.log(error);
        return null;
    }
    
}