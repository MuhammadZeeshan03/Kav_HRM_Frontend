import jwt_decode from "jwt-decode";
const storeToken = (value) =>{
    if (value){

        const {access,refresh}= value;

        // console.log("Token Stored");
        localStorage.setItem('Access_token', JSON.stringify(access))
        localStorage.setItem('Refresh_token', JSON.stringify(refresh))
    }
}
const getToken =()=>
    
    {

        let access_token= localStorage.getItem('Access_token')
        

        return access_token;
    }

    const decodeToken =()=>{
        let access_token= localStorage.getItem('Access_token')
        let token = JSON.parse(access_token)
            var decode = jwt_decode(token)
        // console.log("Token Decoded")
        // console.log(decode)
        return(decode);

    }

const removeToken = () =>{

    localStorage.removeItem('access_token')
}
export {storeToken,getToken,decodeToken,removeToken}
