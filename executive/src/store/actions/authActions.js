import { login,logout,addUser,updateUsersProfileById,editUserFromAdminById,allUsers,usersProfileByid,confirmUser,searchUsers,deleteUser } from "../../routes/api";
import {setUser,removeUser} from '../../utils/localStorage';
import { toast } from 'react-toastify';
import {
        USER_LOGIN_FAIL,
        USER_LOGIN_REQUEST,
        USER_LOGIN_SUCCESS,
        USER_LOGOUT,
    } from "../actiontypes/authConstants";
    export const loginUser = (postbody) => async (dispatch) => {
        //login dispatch
        dispatch({ type: USER_LOGIN_REQUEST });

                await login(postbody).then(response=>{
                dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });     
                if(response.status===201 && (response.data!==400 && response.data!==404 ))
                {
                        setUser(response.data);
                        toast.success('Executive is Logged in Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else if(response.data===404)
                {
                        dispatch({
                                type: USER_LOGIN_FAIL,
                                payload:
                                'Executive is not registered with us!' });                        
                        toast.error('Executive is not registered with us!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });       
                document.getElementById("submitting").innerText = "Login";
                document.getElementById("submitting").disabled  = false;
                }
                else if(response.data===400)
                {
                        dispatch({
                                type: USER_LOGIN_FAIL,
                                payload:
                                'Entered Email/Password is wrong!' });
                        toast.error('Entered Email/Password is wrong!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                document.getElementById("submitting").innerText = "Login";
                document.getElementById("submitting").disabled  = false;  
                }
                else
                {
                        dispatch({
                                type: USER_LOGIN_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                document.getElementById("submitting").innerText = "Login";
                document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: USER_LOGIN_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                document.getElementById("submitting").innerText = "Login";
                document.getElementById("submitting").disabled  = false;                                            
                });  
     
}    
export const logoutUser = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT }); 
    await logout().then(response => {
    if(response.status===201) {
            removeUser();
            toast.success('Executive is Logged Out in Successfully!', {
                    position: "bottom-right",
                    hideProgressBar: false,
                    progress: undefined,
            });
            
    }
    else if(response.status===208){
            toast.error('Executive is already Logged out successfully!', {
                    position: "bottom-right",
                    hideProgressBar: false,
                    progress: undefined,
            });
    }       
    }).catch(error =>{
            toast.error(error.maessage, {
                    position: "bottom-right",
                    hideProgressBar: false,
                    progress: undefined,
            });
    });  
  
}