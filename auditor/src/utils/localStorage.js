import axios from 'axios';
const URL = 'http://localhost:8000'; 
export const getUrl = () => {
        return URL;
}
export const getAPIUrl = () => {
        let URL = `${getUrl()}/api/user`;
        return URL;

}
export const getToken = () => {
        let userInfos = localStorage.getItem('userInfo');
        const userToken = JSON.parse(userInfos);
        var date = new Date(); // some mock date
        var milliseconds = date.getTime();
       // alert(userToken.tokenexp  +'<'+ milliseconds/10000)
      // const jwtPayload = JSON.parse(window.atob((userToken.access_token).split('.')[1]))
      // alert(JSON.stringify(jwtPayload.exp))
        if(userToken){
                return userToken.access_token;
        }
        /*else if (10000000 < (milliseconds/10000)) {
        //localStorage.removeItem("jwtToken");
            removeUser()
            window.location.href = "/";
        } */

}
export const setUser = (user_logged) =>
{
        const user = localStorage.setItem('userInfo',JSON.stringify(user_logged))
        return user;
}
export const getUser = () =>
{
        let userInfo = localStorage.getItem('userInfo');
        const user_detail = JSON.parse(userInfo);
        return user_detail;
}
export const removeUser = () =>
{   
        localStorage.removeItem('userInfo');
        localStorage.clear();
        
}
export const isUserLoggedIn = () => {
       // alert(getUser())
      if(getUser()===null)
            return false;     
      else   
            return true;       
}
export const http = axios.create({
        baseURL:`${getAPIUrl()}`,
    });