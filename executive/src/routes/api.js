import axios from 'axios';
import {getToken} from '../utils/localStorage'
const URL = 'http://localhost:8000/api/admin'; 

//const URL = 'http://103.160.107.21:8000/api/admin'; 
axios.defaults.withCredentials = true;  
///api of users starts
export const login = async(data) => {
   return await axios.post(`${URL}/login`,data);
}
export const logout = async() => {
    return await axios.get(`${URL}/logout`);
}
export const auditoreGet = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/auditoreGet`,config);
}
export const getExecutive = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/getExecutive`,config);
}
export const auditoreFilterChecklist = async(body) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/auditChecklistFilter`,body,config);
}
export const auditAllFilter = async(body) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/auditAllFilter`,body,config);
}
export const auditCreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/auditCreate`,data,config);
}
export const auditchecklistGetonCreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/auditchecklistGetonCreate`,config);
}
export const catCreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/catCreate`,data,config);
}
export const catGet = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/catGettting`,config);
}
export const catEdit = async(data,id) => {  //all users except logged in user
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.put(`${URL}/catEditById/${id}`,data,config);
}
export const catDelete = async(id) => {  //all users except logged in user
    return await axios.delete(`${URL}/deleteCat/${id}`);
}
export const userCreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/userCreate`,data,config);
}
export const editUser = async(data,id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.put(`${URL}/editUser/${id}`,data,config);
}
export const userDelete = async(id) => {  //all users except logged in user
    return await axios.delete(`${URL}/deleteUser/${id}`);
}

export const gettingState = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/stateGetting`,config);
}
export const gettingUser = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingUser`,config);
}
export const NotificationCreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/notificationCreate`,data,config);
}
export const gettingNotification = async() => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingNotification`,config);
}
export const createChecklist = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'
        }
    }
      // alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/checkListCreate`,data,config);
}
export const gettingChecklist = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checkListGetting`,config);
}
export const gettingBranch = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    // alert(id);return;
    return await axios.post(`${URL}/gettingCompanyBranch`,postBody,config);
}
export const allUsers = async(id) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/allUsers/${id}`,config);
}
export const searchUsers = async(data,loggedUserId) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/searchUsersRecords/${loggedUserId}`,data,config);
}
export const gettingCompliancesById = async(id) => {  //all users except logged in user
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliancesById/${id}`,config);
}
export const deleteUser = async(id) => {
    return await axios.delete(`${URL}/delete/${id}`);
}

export const createBranch = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/createBranch`,data,config);
}  
// export const createCompany = async(data) => {

//     const config = {
//         headers: {
//             "Content-Type":"application/json",
//             Authorization : `Bearer ${getToken()}`
//         }
//     }
//     //alert(JSON.stringify(data)); return;
//     return await axios.post(`${URL}/createCompany`,data,config);
// }
export const createCompliances = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/createCompliances`,data,config);
}
export const gettingCompliances = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliances`,config);
}
export const gettingCompliancesAll = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliancesAll`,config);
}
export const gettingCompliancesFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
  //  alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/gettingCompliancesFilter`,postBody,config);
}
export const gettingCompliancesRejetFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/gettingCompliancesRejetFilter`,postBody,config);
}
export const gettingCompliancesAllFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //  alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/gettingCompliancesAllFilter`,postBody,config);
}
export const gettingcomplianceOnApproveFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/complianceApproveFilter`,postBody,config);
}
export const checklistOnRejectegetting = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    // alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/checklistOnRejectegetting`,config);
}
export const gettingCompliancesOnCreate = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliancesOnCreate`,config);
}
export const updateCompliancesById = async(data,id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.put(`${URL}/updateCompliancesById/${id}`,data,config);
}
export const complianceApporve = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/complianceApporve`,data,config);
}
export const gettingCompliancesReject = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.get(`${URL}/gettingCompliancesReject`,config);
}
export const complianceReject = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/complianceReject`,data,config);
}
export const updateChecklistsById = async(data,id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.put(`${URL}/updateChecklistsById/${id}`,data,config);
}
export const checklistOnCreateegetting = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checklistOnCreateegetting`,config);
}
export const gettingchecklistById = async(id) => {  //all users except logged in user
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
   // alert(JSON.stringify(id)); return;
    return await axios.get(`${URL}/gettingchecklistById/${id}`,config);
}
export const checklistAllgetting = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checklistAllgetting`,config);
}
export const checklistApprovegetting = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checklistApprovegetting`,config);
}
export const checklistApporve = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/checklistApporve`,data,config);
}
// export const checkListAllFilter = async(postBody) => {
//     const config = {
//         headers: {
//             "Content-Type":"application/json",
//             Authorization : `Bearer ${getToken()}`
//         }
//     }
//     //alert(JSON.stringify(postBody));return;
//    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
//     return await axios.post(`${URL}/checkListAllFilter`,postBody,config);
// }
export const gettingchecklistAllFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListAllFilter`,postBody,config);
}
export const gettingchecklistOnCreateFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListCreateFilter`,postBody,config);
}
export const gettingchecklistOnApproveFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListApproveFilter`,postBody,config);
}
export const rejectChecklist = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/rejectChecklist`,data,config);
}
export const gettingchecklistOnrejectFilter = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListRejectedFilter`,postBody,config);
}
export const gettingchecklistAllCompliance = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingchecklistAllCompliance`,config);
}
export const gettingAuditDetail = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingAuditDetail`,config);
}
export const gettingOnGoingAuditDetail = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingOnGoingAuditDetail`,config);
}
export const gettingOverviewAuditDetail = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingOverviewAuditDetail`,config);
}
export const createLiseReg = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/createLiseReg`,data,config);
}   
export const getttingReg = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/liseRegGetting`,config);
}
export const liseRegGettingByIds = async(id) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/liseRegGettingById/${id}`,config);
}
export const liseregsFilters = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/liseRegHistoryFilter`,postBody,config);
}
export const regsApporve = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.patch(`${URL}/regsApporve`,postBody,config);
}
export const regsReject = async(postBody) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.patch(`${URL}/regsReject`,postBody,config);
}
export const liseRegUpdateByIds = async(postBody,id) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    // alert(JSON.stringify(id+));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.put(`${URL}/liseRegUpdateById/${id}`,postBody,config);
}
export const ElibraryCreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/elibraryCreate`,data,config);
}  
export const ElibraryGet = async() => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.get(`${URL}/elibraryGet`,config);
}
export const elibraryGetById = async(id) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/elibraryGetById/${id}`,config);
}
export const elibraryUpdateById = async(data,id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.put(`${URL}/elibraryUpdateById/${id}`,data,config);
}
export const elibraryReject = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/elibraryReject`,data,config);
}
export const elibraryRejectedDocs = async() => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.get(`${URL}/elibraryRejectedDocs`,config);
}
export const elibrarySaveandApprove = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/elibrarySaveandApprove`,data,config);
}
export const createCompany = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/createCompany`,data,config);
}
export const gettingCompany = async(id) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingCompany`,config);
}
export const gettingCompanyTable = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingCompanyTable`,config);
}
export const gettingCompanyById = async(id) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingCompanyById/${id}`,config);
}
export const gettingCompliaceCSById = async(cid,sid) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingCompliaceCSById/${cid}/${sid}`,config);
}
export const companySaveandApprove = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companySaveandApprove`,data,config);
}
export const companyLcreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companyLcreate`,data,config);
}
export const companyL = async() => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/companyL`,config);
}
export const companyLById = async(id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/companyLById/${id}`,config);
}
export const companyLUpdateById = async(data,id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.put(`${URL}/companyLUpdateById/${id}`,data,config);
}
export const apporveCompanyL = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.patch(`${URL}/apporveCompanyL`,data,config);
}
export const companyLicenseFilter = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/companyLicenseFilter`,data,config);
}
export const companytab1 = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab1`,data,config);
}
export const companytab2 = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab2`,data,config);
}  
export const companytab3 = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab3`,data,config);
}  
export const companytab4 = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab4`,data,config);
}  
export const companytab5 = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab5`,data,config);
}  
export const companytab6 = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab6`,data,config);
}  
export const companytab7 = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab7`,data,config);
}  
export const createcompanyinteraction = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/createcompanyinteraction`,data,config);
} 
export const gettingComppanyInterationById = async(id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingComppanyInterationById/${id}`,config);
}
export const updatecompanyinteractionById = async(postBody,id) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    // alert(JSON.stringify(id+));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.put(`${URL}/updatecompanyinteractionById/${id}`,postBody,config);
}    
export const gettingCompanyInractionTable = async() => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompanyInractionTable`,config);
}
export const apporveCompanyInteraction = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.patch(`${URL}/apporveCompanyInteraction`,data,config);
}

export const companyProfileFilter = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/companyProfileFilter`,data,config);
}
export const licenseCompanyInteractcreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/licenseCompanyInteractcreate`,data,config);
} 
export const companyinteractLicGetByid = async(id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/companyinteractLicGetByid/${id}`,config);
}
export const companyinteractLicUpdateById = async(postBody,id) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    // alert(JSON.stringify(id+));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.put(`${URL}/companyinteractLicUpdateById/${id}`,postBody,config);
}    
export const licenseCompanyInteractGetOnCreate = async() => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/licenseCompanyInteractGetOnCreate`,config);
}
export const companyLicenseIntractFilter = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/companyLicenseIntractFilter`,data,config);
}
export const apporveCompanyInteractionLicense = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.patch(`${URL}/apporveCompanyInteractionLicense`,data,config);
}
export const createAssign = async(data) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/createAssign`,data,config);
} 
export const getAssignid = async(id) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/getAssignid/${id}`,config);
}
export const assignsUpdateById = async(postBody,id) => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    // alert(JSON.stringify(id+));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.put(`${URL}/assignsUpdateById/${id}`,postBody,config);
}  
export const assignTableGet = async() => {
    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
   // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/assignTableGet`,config);
}
export const getAssignOnCreate = async() => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/getAssignOnCreate`,config);
}

export const viewAllAssignedCompanyFilter = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/viewAllAssignedCompanyFilter`,data,config);
}
export const assignedCompanyFilter = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/assignedCompanyFilter`,data,config);
}
///api of users endcomplianceReject