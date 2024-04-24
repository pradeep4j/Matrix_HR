import { auditoreGet,getExecutive,catCreate,catGet,catEdit,catDelete,gettingState,gettingUser,NotificationCreate,gettingNotification,userCreate,editUser,userDelete,createChecklist,gettingChecklist,gettingCompany,gettingCompanyTable,gettingBranch,createBranch,createCompany,createCompliances,gettingCompliances,gettingCompliancesById,gettingCompliancesOnCreate,complianceApporve,gettingCompliancesReject,complianceReject,updateCompliancesById,gettingCompliancesAll,gettingCompliancesFilter,gettingCompliancesAllFilter,gettingCompliancesRejetFilter,updateChecklistsById,checklistOnCreateegetting,gettingchecklistById,checklistAllgetting,checklistApporve,gettingchecklistAllFilter,gettingchecklistOnCreateFilter,checklistApprovegetting,gettingchecklistOnApproveFilter,checklistOnRejectegetting,rejectChecklist,gettingchecklistOnrejectFilter,gettingchecklistAllCompliance,gettingcomplianceOnApproveFilter,gettingChecklistOnCreate,createLiseReg,gettingAuditDetail,getttingReg,regsApporve,liseRegGettingByIds,liseregsFilters,liseRegUpdateByIds,regsReject,auditCreate,auditoreFilterChecklist,auditchecklistGetonCreate,auditAllFilter,gettingOnGoingAuditDetail,gettingOverviewAuditDetail,ElibraryCreate,ElibraryGet,elibraryGetById,elibraryUpdateById,elibraryReject,elibrarySaveandApprove,elibraryRejectedDocs,companytab1,companytab2,companytab3,companytab4,companytab5,companytab6,companytab7,companyL,gettingCompanyById,companyLcreate,companyLById,companyLUpdateById,apporveCompanyL,companyLicenseFilter,gettingCompliaceCSById,companySaveandApprove,createcompanyinteraction,gettingComppanyInterationById,updatecompanyinteractionById,gettingCompanyInractionTable,apporveCompanyInteraction,companyProfileFilter,licenseCompanyInteractcreate,licenseCompanyInteractGetOnCreate,companyinteractLicGetByid,companyinteractLicUpdateById,apporveCompanyInteractionLicense,companyLicenseIntractFilter,createAssign,getAssignid,assignsUpdateById,assignTableGet,getAssignOnCreate,viewAllAssignedCompanyFilter,assignedCompanyFilter} from "../../routes/api";

import { toast } from 'react-toastify';
import {
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,
    CATEGORY_REQUEST_GET,
    CATEGORY_SUCCESS_GET,
    AUDITOR_REQUEST_GET,
    AUDITOR_SUCCESS_GET,
    AUDITOR_GET_FAIL,
    EXECUTIVE_REQUEST_GET,
    EXECUTIVE_SUCCESS_GET,
    EXECUTIVE_GET_FAIL,
    AUDITOR_REQUEST_GET_FILTER,
    AUDITOR_SUCCESS_GET_FILTER,
    AUDITOR_GET_FAIL_FILTER,
    AUDITOR_REQUEST_GET_ALL_FILTER,
    AUDITOR_SUCCESS_GET_ALL_FILTER,
    AUDITOR_GET_FAIL_ALL_FILTER,
    CHECKLIST_REQUEST_GET_CREATE_AUDIT,
    CHECKLIST_SUCCESS_GET_CREATE_AUDIT,
    CHECKLIST_GET_FAIL_CREATE_AUDIT,
    CATEGORY_GET_FAIL,
    CATEGORY_REQUEST_EDIT,
    CATEGORY_SUCCESS_EDIT,
    CATEGORY_EDIT_FAIL,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_FAIL,
    STATE_REQUEST_GET,
    STATE_SUCCESS_GET,
    STATE_GET_FAIL,
    USER_REQUEST_GET,
    USER_SUCCESS_GET,
    USER_GET_FAIL,
    NOTFICATION_CREATE_REQUEST,
    NOTFICATION_CREATE_SUCCESS,
    NOTFICATION_CREATE_FAIL,
    NOTFICATION_REQUEST_GET,
    NOTFICATION_SUCCESS_GET,
    NOTFICATION_GET_FAIL,
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    USER_REQUEST_EDIT,
    USER_SUCCESS_EDIT,
    USER_EDIT_FAIL,
    CHECKLIST_CREATE_REQUEST,
    CHECKLIST_CREATE_SUCCESS,
    CHECKLIST_CREATE_FAIL,
    CHECKLIST_REQUEST_GET,
    CHECKLIST_SUCCESS_GET,
    CHECKLIST_GET_FAIL,
    CHECKLIST_REQUEST_UPDATE_BYID,
    CHECKLIST_SUCCESS_UPDATE_BYID,
    CHECKLIST_FAIL_UPDATE_BYID,
    CHECKLIST_REQUEST_GET_CREATE,
    CHECKLIST_SUCCESS_GET_CREATE,
    CHECKLIST_GET_FAIL_CREATE,
    CHECKLIST_REQUEST_GET_BYID,
    CHECKLIST_SUCCESS_GET_BYID,
    CHECKLIST_FAIL_GET_BYID,
    CHECKLIST_REQUEST_GET_ALL,
    CHECKLIST_SUCCESS_GET_ALL,
    CHECKLIST_GET_FAIL_ALL,
    CHECKLIST_REQUEST_GET_APPROVE_PAGE,
    CHECKLIST_SUCCESS_GET_APPROVE_PAGE,
    CHECKLIST_GET_FAIL_APPROVE_PAGE,
    CHECKLIST_REQUEST_GET_APPROVE,
    CHECKLIST_SUCCESS_GET_APPROVE,
    CHECKLIST_REQUEST_GET_APPROVE_FAIL,
    CHECKLIST_REQUEST_ALL_FILTER,
    CHECKLIST_SUCCESS_ALL_FILTER,
    CHECKLIST_ALL_FAIL_FILTER,
    CHECKLIST_REQUEST_CREATE_FILTER,
    CHECKLIST_SUCCESS_CREATE_FILTER,
    CHECKLIST_ALL_CREATE_FILTER,
    CHECKLIST_REQUEST_APPROVE_FILTER,
    CHECKLIST_SUCCESS_APPROVE_FILTER,
    CHECKLIST_ALL_APPROVE_FILTER,
    CHECKLIST_REQUEST_GET_REJECT,
    CHECKLIST_SUCCESS_GET_REJECT,
    CHECKLIST_GET_FAIL_REJECT,
    CHECKLIST_REQUEST_REJECT,
    CHECKLIST_SUCCESS_REJECT,
    CHECKLIST_REQUEST_REJECT_FAIL,
    CHECKLIST_REQUEST_REJECT_FILTER,
    CHECKLIST_SUCCESS_REJECT_FILTER,
    CHECKLIST_ALL_REJECT_FILTER,
    CHECKLIST_REQUEST_All_COMPLIANCE,
    CHECKLIST_SUCCESS_All_COMPLIANCE,
    CHECKLIST_FAIL_All_COMPLIANCE,
    AUDIT_REQUEST_All_DETAIL,
    AUDIT_SUCCESS_All_DETAIL,
    AUDIT_FAIL_All_DETAIL,
    AUDIT_REQUEST_CREATE,
    AUDIT_SUCCESS_CREATE,
    AUDIT_FAIL_CREATE,
    AUDIT_REQUEST_ONGOING_DETAIL,
    AUDIT_SUCCESS_ONGOING_DETAIL,
    AUDIT_FAIL_ONGOING_DETAIL,
    BRANCH_REQUEST_GET,
    BRANCH_SUCCESS_GET,
    BRANCH_GET_FAIL,
    COMPANY_REQUEST_GET,
    COMPANY_SUCCESS_GET,
    COMPANY_GET_FAIL,
    COMPLIANCE_REQUEST_GET,
    COMPLIANCE_SUCCESS_GET,
    COMPLIANCE_GET_FAIL,
    COMPLIANCE_REQUEST_GET_ALL,
    COMPLIANCE_SUCCESS_GET_ALL,
    COMPLIANCE_GET_FAIL_ALL,
    COMPLIANCE_REQUEST_GET_CREATE,
    COMPLIANCE_SUCCESS_GET_CREATE,
    COMPLIANCE_GET_FAIL_CREATE,
    COMPLIANCE_REQUEST_GET_BYID,
    COMPLIANCE_SUCCESS_GET_BYID,
    COMPLIANCE_FAIL_GET_BYID,
    COMPLIANCE_REQUEST_UPDATE_BYID,
    COMPLIANCE_SUCCESS_UPDATE_BYID,
    COMPLIANCE_FAIL_UPDATE_BYID,
    COMPLIANCE_REQUEST_GET_APPROVE,
    COMPLIANCE_SUCCESS_GET_APPROVE,
    COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
    COMPLIANCE_REQUEST_GET_REJECT,
    COMPLIANCE_SUCCESS_GET_REJECT,
    COMPLIANCE_REQUEST_GET_REJECT_FAIL,
    COMPLIANCE_REQUEST_REJECT_FILTER,
    COMPLIANCE_SUCCESS_REJECT_FILTER,
    COMPLIANCE_REJECT_FAIL_FILTER,
    COMPLIANCE_REQUEST_APPROVE_FILTER,
    COMPLIANCE_SUCCESS_APPROVE_FILTER,
    COMPLIANCE_APPROVE_FAIL_FILTER,
    COMPLIANCE_REQUEST_GET_FILTER,
    COMPLIANCE_SUCCESS_GET_FILTER,
    COMPLIANCE_GET_FAIL_FILTER,
    COMPLIANCE_REQUEST_REJECT,
    COMPLIANCE_SUCCESS_REJECT,
    COMPLIANCE_REQUEST_REJECT_FAIL,
    COMPLIANCE_SUCCESS_GET_ALL_FILTER,
    COMPLIANCE_REQUEST_GET_ALL_FILTER,
    COMPLIANCE_GET_FAIL_ALL_FILTER,
    BRANCH_CREATE_REQUEST,
    BRANCH_CREATE_SUCCESS,
    BRANCH_CREATE_FAIL,
    COMPANY_CREATE_REQUEST,
    COMPANY_CREATE_SUCCESS,
    COMPANY_CREATE_FAIL,
    COMPLIANCE_CREATE_REQUEST,
    COMPLIANCE_CREATE_SUCCESS,
    COMPLIANCE_CREATE_FAIL,
    NAMERATE_CREATE_REQUEST,
    NAMERATE_CREATE_SUCCESS,
    NAMERATE_CREATE_FAIL,
    DOC_CREATE_REQUEST,
    DOC_CREATE_SUCCESS,
    DOC_CREATE_FAIL,
    APPDETAILS_CREATE_REQUEST,
    APPDETAILS_CREATE_SUCCESS,
    APPDETAILS_CREATE_FAIL,
    EXPENSE_CREATE_REQUEST,
    EXPENSE_CREATE_SUCCESS,
    EXPENSE_CREATE_FAIL,
    LICENSE_CREATE_REQUEST,
    LICENSE_CREATE_SUCCESS,
    LICENSE_CREATE_FAIL,
    INVOICE_CREATE_REQUEST,
    INVOICE_CREATE_SUCCESS,
    INVOICE_CREATE_FAIL,
    COMPANYINFO_CREATE_REQUEST,
    COMPANYINFO_CREATE_SUCCESS,
    COMPANYINFO_CREATE_FAIL,
    REGSGET_REQUEST,
    REGSGET_SUCCESS,
    REGSGET_FAIL,
    LISEREGS_REQUEST_GET_APPROVE,
    LISEREGS_SUCCESS_GET_APPROVE,
    LISEREGS_REQUEST_GET_APPROVE_FAIL,
    LISEREGS_REQUEST_GET_FILTER,
    LISEREGS_SUCCESS_GET_FILTER,
    LISEREGS_REQUEST_GET_FILTER_FAIL,
    LISEREGS_REQUEST_GET_BYID,
    LISEREGS_SUCCESS_GET_BYID,
    LISEREGS_REQUEST_GET_BYID_FAIL,
    LISEREGS_REQUEST_GET_REJECT,
    LISEREGS_SUCCESS_GET_REJECT,
    LISEREGS_REQUEST_GET_REJECT_FAIL,
    NAMERATE_UPDATE_REQUEST,
    NAMERATE_UPDATE_SUCCESS,
    NAMERATE_UPDATE_FAIL,
    DOC_UPDATE_REQUEST,
    DOC_UPDATE_SUCCESS,
    DOC_UPDATE_FAIL,
    APPDETAILS_UPDATE_REQUEST,
    APPDETAILS_UPDATE_SUCCESS,
    APPDETAILS_UPDATE_FAIL,
    EXPENSE_UPDATE_REQUEST,
    EXPENSE_UPDATE_SUCCESS,
    EXPENSE_UPDATE_FAIL,
    LICENSE_UPDATE_REQUEST,
    LICENSE_UPDATE_SUCCESS,
    LICENSE_UPDATE_FAIL,
    INVOICE_UPDATE_REQUEST,
    INVOICE_UPDATE_SUCCESS,
    INVOICE_UPDATE_FAIL,
    COMPANYINFO_UPDATE_REQUEST,
    COMPANYINFO_UPDATE_SUCCESS,
    COMPANYINFO_UPDATE_FAIL,
    ELIBRARY_CREATE_REQUEST,
    ELIBRARY_CREATE_SUCCESS,
    ELIBRARY_CREATE_FAIL,
    ELIBRARY_GET_REQUEST,
    ELIBRARY_GET_SUCCESS,
    ELIBRARY_GET_FAIL,
    ELIBRARY_REQUEST_GET_BYID,
    ELIBRARY_SUCCESS_GET_BYID,
    ELIBRARY_REQUEST_GET_BYID_FAIL,
    ELIBRARY_GET_REQUEST_UPDATE_BY_ID,
    ELIBRARY_GET_SUCCESS_UPDATE_BY_ID,
    ELIBRARY_GET_FAIL_UPDATE_BY_ID,
    ELIBRARY_REQUEST_GET_REJECT,
    ELIBRARY_SUCCESS_GET_REJECT,
    ELIBRARY_REQUEST_GET_REJECT_FAIL,
    ELIBRARY_REQUEST_SAVE_APPROVE,
    ELIBRARY_SUCCESS_SAVE_APPROVE,
    ELIBRARY_REQUEST_SAVE_APPROVE_FAIL,
    ELIBRARY_REQUEST_GET_REJECT_LIST,
    ELIBRARY_SUCCESS_GET_REJECT_LIST,
    ELIBRARY_GET_FAIL_REJECT_LIST,
    AUDIT_REQUEST_OVERDUE_DETAIL_DASHBOARD,
    AUDIT_SUCCESS_OVERDUE_DETAIL_DASHBOARD,
    AUDIT_FAIL_OVERDUE_DETAIL_DASHBOARD,
    COMPANYTAB1_CREATE_REQUEST,
    COMPANYTAB1_CREATE_SUCCESS,
    COMPANYTAB1_CREATE_FAIL,
    COMPANYTAB2_CREATE_REQUEST,
    COMPANYTAB2_CREATE_SUCCESS,
    COMPANYTAB2_CREATE_FAIL,
    COMPANYTAB3_CREATE_REQUEST,
    COMPANYTAB3_CREATE_SUCCESS,
    COMPANYTAB3_CREATE_FAIL,
    COMPANYTAB4_CREATE_REQUEST,
    COMPANYTAB4_CREATE_SUCCESS,
    COMPANYTAB4_CREATE_FAIL,
    COMPANYTAB5_CREATE_REQUEST,
    COMPANYTAB5_CREATE_SUCCESS,
    COMPANYTAB5_CREATE_FAIL,
    COMPANYTAB6_CREATE_REQUEST,
    COMPANYTAB6_CREATE_SUCCESS,
    COMPANYTAB6_CREATE_FAIL,
    COMPANYTAB7_CREATE_REQUEST,
    COMPANYTAB7_CREATE_SUCCESS,
    COMPANYTAB7_CREATE_FAIL,
    COMPANYL_CREATE_REQUEST,
    COMPANYL_CREATE_SUCCESS,
    COMPANYL_CREATE_FAIL,
    COMPANYL_GET_REQUEST,
    COMPANYL_GET_SUCCESS,
    COMPANYL_GET_FAIL,
    COMPANY_GET_TABLE_REQUEST,
    COMPANY_GET_TABLE_SUCCESS,
    COMPANY_GET_TABLE_FAIL,
    COMPANY_REQUEST_GET_BYID,
    COMPANY_SUCCESS_GET_BYID,
    COMPANY_REQUEST_GET_BYID_FAIL,
    COMPANYL_GET_REQUEST_BY_ID,
    COMPANYL_GET_SUCCESS_BY_ID,
    COMPANYL_GET_FAIL_BY_ID,
    COMPANY_LICENSE_REQUEST_GET_APPROVE,
    COMPANY_LICENSE_SUCCESS_GET_APPROVE,
    COMPANY_LICENSE_REQUEST_GET_APPROVE_FAIL,
    COMPANY_LICENSE_REQUEST_GET_FILTER,
    COMPANY_LICENSE_SUCCESS_GET_FILTER,
    COMPANY_LICENSE_GET_FAIL_FILTER,
    COMPANY_REQUEST_SAVE_APPROVE,
    COMPANY_SUCCESS_SAVE_APPROVE,
    COMPANY_REQUEST_SAVE_APPROVE_FAIL,
    COMLIANCE_REQUEST_GET_BY_CSID,
    COMLIANCE_SUCCESS_GET_BY_CSID,
    COMLIANCE_GET_BY_CSID_FAIL,
    COMPANY_INERACTION_CREATE_REQUEST,
    COMPANY_INERACTION_CREATE_SUCCESS,
    COMPANY_INERACTION_CREATE_FAIL,
    COMPANY_INTERACTION_REQUEST_GET_BYID,
    COMPANY_INTERACTION_SUCCESS_GET_BYID,
    COMPANY_INTERACTION_FAIL_GET_BYID,
    COMPANY_INTERACTION_REQUEST_UPDATE_BYID,
    COMPANY_INTERACTION_SUCCESS_UPDATE_BYID,
    COMPANY_INTERACTION_FAIL_UPDATE_BYID,
    COMPANY_INTERACTION_GET_TABLE_REQUEST,
    COMPANY_INTERACTION_GET_TABLE_SUCCESS,
    COMPANY_INTERACTION_GET_TABLE_FAIL,
    COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE,
    COMPANY_PROFILE_INERACTION_SUCCESS_GET_APPROVE,
    COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE_FAIL,
    COMPANY_INTERACT_REQUEST_GET_FILTER,
    COMPANY_INTERACT_SUCCESS_GET_FILTER,
    COMPANY_INTERACT_GET_FAIL_FILTER,
    COMPANY_INTERACTION_LICENSE_GET_REQUEST,
    COMPANY_INTERACTION_LICENSE_GET_SUCCESS,
    COMPANY_INTERACTION_LICENSE_CREATE_FAIL,
    COMPANY_INTERACTION_LIC_CREATE_REQUEST,
    COMPANY_INTERACTION_LIC_CREATE_SUCCESS,
    COMPANY_INTERACTION_LIC_CREATE_FAIL,
    COMPANY_INTERACTION_LIC_REQUEST_GET_BYID,
    COMPANY_INTERACTION_LIC_SUCCESS_GET_BYID,
    COMPANY_INTERACTION_LIC_FAIL_GET_BYID,
    COMPANY_INTERACTION_LIC_REQUEST_UPDATE_BYID,
    COMPANY_INTERACTION_LIC_SUCCESS_UPDATE_BYID,
    COMPANY_INTERACTION_LIC_FAIL_UPDATE_BYID,
    COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE,
    COMPANY_LICENSE_INERACTION_SUCCESS_GET_APPROVE,
    COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE_FAIL,
    COMPANY_LICENSE_INTERACT_REQUEST_GET_FILTER,
    COMPANY_LICENSE_INTERACT_SUCCESS_GET_FILTER,
    COMPANY_LICENSE_INTERACT_GET_FAIL_FILTER,
    COMPANY_ASSIGN_CREATE_REQUEST,
    COMPANY_ASSIGN_CREATE_SUCCESS,
    COMPANY_ASSIGN_CREATE_FAIL,
    COMPANY_ASSIGNREQUEST_GET_BYID,
    COMPANY_ASSIGNSUCCESS_GET_BYID,
    COMPANY_ASSIGNFAIL_GET_BYID,
    COMPANY_ASSIGN_GET_REQUEST,
    COMPANY_ASSIGN_GET_SUCCESS,
    COMPANY_ASSIGN_TABLE_FAIL,
    COMPANY_ASSIGN_REQUEST_UPDATE_BYID,
    COMPANY_ASSIGN_SUCCESS_UPDATE_BYID,
    COMPANY_ASSIGN_FAIL_UPDATE_BYID,
    COMPANY_ASSIGN_ON_CREATE_GET_REQUEST,
    COMPANY_ASSIGN_ON_CREATE_GET_SUCCESS,
    COMPANY_ASSIGN_ON_CREATE_CREATE_FAIL,
    COMPANY_ASSIGN_REQUEST_GET_FILTER,
    COMPANY_ASSIGN_SUCCESS_GET_FILTER,
    COMPANY_ASSIGN_GET_FAIL_FILTER,
    COMPANY_ASSIGNA_REQUEST_GET_FILTER,
    COMPANY_ASSIGNA_SUCCESS_GET_FILTER,
    COMPANY_ASSIGNA_GET_FAIL_FILTER
} from "../actiontypes/otherConstants";
export const categoryCreate = (postbody) => async (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST });

                await catCreate(postbody).then(response=>{
                dispatch({ type: CATEGORY_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Category is Added Successfully!', {
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
                else if(response.data===409)
                { 
                        dispatch({
                                type: CATEGORY_FAIL,
                                payload:
                                "Category is already exists!" });
                        toast.error('Category is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: CATEGORY_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const categoryEdit = (postbody,id) => async (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST_EDIT });
                await catEdit(postbody,id).then(response=>{
                
                dispatch({ type: CATEGORY_SUCCESS_EDIT, payload: response.data });    
           //   alert(response.data); return;
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Category is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: CATEGORY_EDIT_FAIL,
                                payload:
                                "Category is already exists!" });
                        toast.error('Category is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: CATEGORY_EDIT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                        
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const ongoingAudits = () => async (dispatch) => {
        dispatch({ type: AUDIT_REQUEST_ONGOING_DETAIL });

                await gettingOnGoingAuditDetail().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: AUDIT_SUCCESS_ONGOING_DETAIL, payload: response.data });    
                // alert(response.status)
                if(response.status===201)
                {
                        // toast.success('Audit is Created Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: AUDIT_FAIL_ONGOING_DETAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: AUDIT_FAIL_ONGOING_DETAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
     
}
export const gettingAuditorOverdueDashboard = () => async (dispatch) => {
        dispatch({ type: AUDIT_REQUEST_OVERDUE_DETAIL_DASHBOARD });

                await gettingOverviewAuditDetail().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: AUDIT_SUCCESS_OVERDUE_DETAIL_DASHBOARD, payload: response.data });    
                // alert(response.status)
                if(response.status===200)
                {
                        // toast.success('Audit is Created Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: AUDIT_FAIL_OVERDUE_DETAIL_DASHBOARD,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: AUDIT_FAIL_OVERDUE_DETAIL_DASHBOARD,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
     
}
export const auditGetDataAll = (postBody) => async (dispatch) => {
        dispatch({ type: AUDIT_REQUEST_All_DETAIL });

                await gettingAuditDetail(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: AUDIT_SUCCESS_All_DETAIL, payload: response.data });    
                // alert(response.status)
                if(response.status===200)
                {
                        // toast.success('Audit is Created Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: AUDIT_FAIL_All_DETAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: AUDIT_FAIL_All_DETAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
     
}
export const auditOnCreate = (postBody) => async (dispatch) => {
        dispatch({ type: AUDIT_REQUEST_CREATE });

                await auditCreate(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: AUDIT_SUCCESS_CREATE, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Audit is Created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                } 
                else
                {
                        dispatch({
                                type: AUDIT_FAIL_CREATE,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: AUDIT_FAIL_CREATE,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
     
}
export const auditChecklistFilter = (postBody) => async (dispatch) => {
        dispatch({ type: AUDITOR_REQUEST_GET_FILTER });
                await auditoreFilterChecklist(postBody).then(response=>{
                dispatch({ type: AUDITOR_SUCCESS_GET_FILTER, payload: response.data });    
                if(response.status===201)
                {
                }
                else
                {
                        dispatch({
                                type: AUDITOR_GET_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: AUDITOR_GET_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const auditAllFilters = (postBody) => async (dispatch) => {
        dispatch({ type: AUDITOR_REQUEST_GET_ALL_FILTER });
                await auditAllFilter(postBody).then(response=>{
                // console.log(response.data);        
                dispatch({ type: AUDITOR_SUCCESS_GET_ALL_FILTER, payload: response.data });    
                if(response.status===200)
                {
                }
                else
                {
                        dispatch({
                                type: AUDITOR_GET_FAIL_ALL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: AUDITOR_GET_FAIL_ALL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const auditorGet = () => async (dispatch) => {
        dispatch({ type: AUDITOR_REQUEST_GET });
                await auditoreGet().then(response=>{
                dispatch({ type: AUDITOR_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                }
                else
                {
                        dispatch({
                                type: AUDITOR_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: AUDITOR_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const executiveGet = () => async (dispatch) => {
        dispatch({ type: EXECUTIVE_REQUEST_GET });
                await getExecutive().then(response=>{
                dispatch({ type: EXECUTIVE_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                }
                else
                {
                        dispatch({
                                type: EXECUTIVE_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: EXECUTIVE_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const categoryGet = () => async (dispatch) => {
        dispatch({ type: CATEGORY_REQUEST_GET });
                await catGet().then(response=>{
                dispatch({ type: CATEGORY_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                }
                else
                {
                        dispatch({
                                type: CATEGORY_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const deleteCategory = (id) => async (dispatch) => {
        dispatch({ type: CATEGORY_DELETE_REQUEST });
                await catDelete(id).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success(response.data, {
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
                else
                {
                        dispatch({
                                type: CATEGORY_DELETE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_DELETE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const stateGets = () => async (dispatch) => {
        dispatch({ type: STATE_REQUEST_GET });

                await gettingState().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: STATE_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: STATE_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: STATE_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const usersCreates = (postbody) => async (dispatch) => {
        dispatch({ type: USER_CREATE_REQUEST });

                await userCreate(postbody).then(response=>{
                dispatch({ type: USER_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('User is Added Successfully!', {
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
                else if(response.data===409)
                { 
                        dispatch({
                                type: USER_CREATE_FAIL,
                                payload:
                                "User is already exists!" });
                        toast.error('User is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: USER_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const usersGet = () => async (dispatch) => {
        dispatch({ type: USER_REQUEST_GET });

                await gettingUser().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: USER_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: USER_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: USER_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const userEdit = (postbody,id) => async (dispatch) => {
        dispatch({ type: USER_REQUEST_EDIT });
                await editUser(postbody,id).then(response=>{
                dispatch({ type: USER_SUCCESS_EDIT, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('User is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: USER_EDIT_FAIL,
                                payload:
                                "Email is already exists!" });
                        toast.error('Email is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: USER_EDIT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                       
                }
                }).catch(error =>{
                        dispatch({
                                type: USER_EDIT_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const deleteUser = (id) => async (dispatch) => {
        dispatch({ type: CATEGORY_DELETE_REQUEST });
                await userDelete(id).then(response=>{
                dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success(response.data, {
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
                else
                {
                        dispatch({
                                type: CATEGORY_DELETE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                      
                }
                }).catch(error =>{
                        dispatch({
                                type: CATEGORY_DELETE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                       
                });  
     
}
export const createNotification = (postbody) => async (dispatch) => {
        dispatch({ type: NOTFICATION_CREATE_REQUEST });

                await NotificationCreate(postbody).then(response=>{
                dispatch({ type: NOTFICATION_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Notification is created Successfully!', {
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
                else
                {
                        dispatch({
                                type: NOTFICATION_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: NOTFICATION_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const getNotification = () => async (dispatch) => {
        dispatch({ type: NOTFICATION_REQUEST_GET });

                await gettingNotification().then(response=>{
                dispatch({ type: NOTFICATION_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: NOTFICATION_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: NOTFICATION_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                         
                });  
}
export const branchGet = (postBody) => async (dispatch) => {
               dispatch({ type: BRANCH_REQUEST_GET });
                await gettingBranch(postBody).then(response=>{
                dispatch({ type: BRANCH_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: BRANCH_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: BRANCH_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                });  
}
export const companyGet = () => async (dispatch) => {
        dispatch({ type: COMPANY_REQUEST_GET });
                await gettingCompany().then(response=>{
                dispatch({ type: COMPANY_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const branchCreates = (postbody) => async (dispatch) => {
        dispatch({ type: BRANCH_CREATE_REQUEST });
                await createBranch(postbody).then(response=>{
                dispatch({ type: BRANCH_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Branch is Added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: USER_CREATE_FAIL,
                                payload:
                                "Branch is already exists!" });
                        toast.error('Branch is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: BRANCH_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: BRANCH_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                        
                });  
}
export const companyCreates = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANY_CREATE_REQUEST });

                await createCompany(postbody).then(response=>{
                dispatch({ type: COMPANY_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Company is Added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: COMPANY_CREATE_FAIL,
                                payload:
                                "Company is already exists!" });
                        toast.error('Company is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: COMPANY_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                       
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                         
                });  
}
export const complianceCreate = (postbody) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_CREATE_REQUEST });

                await createCompliances(postbody).then(response=>{
                dispatch({ type: COMPLIANCE_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Compliance is Added Successfully!', {
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
                else if(response.data===409)
                { 
                        dispatch({
                                type: COMPLIANCE_CREATE_FAIL,
                                payload:
                                "Compliance for this Act is already exists!" });
                        toast.error('Compliance for this Act is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                       
                });  
}
export const compliancesGet = () => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET });
                await gettingCompliances().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: COMPLIANCE_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const compliancesFilter = (postBody) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_FILTER });
                await gettingCompliancesFilter(postBody).then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                   
                });  
}
export const complianceAllFiltering = (postBody) => async (dispatch) => {
        // alert('all')
        dispatch({ type: COMPLIANCE_REQUEST_GET_ALL_FILTER });

                await gettingCompliancesAllFilter(postBody).then(response=>{
                        
                dispatch({ type: COMPLIANCE_SUCCESS_GET_ALL_FILTER, payload: response.data });    
                // alert(JSON.stringify(response.data))
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_ALL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_ALL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const compliancesGetAll = () => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_ALL });

                await gettingCompliancesAll().then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_ALL, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_ALL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                });  
}
export const compliancesGetonCreate = () => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_CREATE });

                await gettingCompliancesOnCreate().then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_CREATE, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_CREATE,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                        
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_GET_FAIL_CREATE,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                       
                });  
}
export const compliancesGetByid = (id) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_BYID });

                await gettingCompliancesById(id).then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_BYID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_FAIL_GET_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_FAIL_GET_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });      
}
export const complianceUpdateById = (postbody,id) => async (dispatch) => {

        dispatch({ type: COMPLIANCE_REQUEST_UPDATE_BYID });
                await updateCompliancesById(postbody,id).then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_UPDATE_BYID, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Compliance is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: COMPLIANCE_FAIL_UPDATE_BYID,
                                payload:
                                "Compliance is already exists!" });
                        toast.error('Compliance is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_FAIL_UPDATE_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_FAIL_UPDATE_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const compliancesSaveandApprove = (data) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_APPROVE });

                await complianceApporve(data).then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_APPROVE, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Compliace is Approved Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.status===202){
                        toast.success('Compliace is sent for Approval Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const compliancesGetOnreject = () => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_GET_REJECT });

                await gettingCompliancesReject().then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_GET_REJECT, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('All Compliace is Approved Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_REQUEST_GET_REJECT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const compliancesReject = (data) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_REJECT });

                await complianceReject(data).then(response=>{
                dispatch({ type: COMPLIANCE_SUCCESS_REJECT, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Compliace is Rejected Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_REQUEST_REJECT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                       
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_REQUEST_REJECT_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const compliancesRejectFilter = (postBody) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_REJECT_FILTER });

                await gettingCompliancesRejetFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: COMPLIANCE_SUCCESS_REJECT_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_REJECT_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_REJECT_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const compliancesApproveFilter = (postBody) => async (dispatch) => {
        dispatch({ type: COMPLIANCE_REQUEST_APPROVE_FILTER });

                await gettingcomplianceOnApproveFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: COMPLIANCE_SUCCESS_APPROVE_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: COMPLIANCE_APPROVE_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPLIANCE_APPROVE_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistCreate = (postbody) => async (dispatch) => {
        dispatch({ type: CHECKLIST_CREATE_REQUEST });

                await createChecklist(postbody).then(response=>{
                dispatch({ type: CHECKLIST_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Check List is Added Successfully!', {
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
                else if(response.data===409)
                { 
                        dispatch({
                                type: CHECKLIST_CREATE_FAIL,
                                payload:
                                "Check List for this Act is already exists!" });
                        toast.error('Check List for this Act is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGetonCreateAudit = () => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_CREATE_AUDIT });

                await auditchecklistGetonCreate().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_GET_CREATE_AUDIT, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_GET_FAIL_CREATE_AUDIT,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_GET_FAIL_CREATE_AUDIT,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGetonCreate = () => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_CREATE });

                await checklistOnCreateegetting().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_GET_CREATE, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_GET_FAIL_CREATE,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_GET_FAIL_CREATE,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGettting = () => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET });

                await gettingChecklist().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_GET, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: USER_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistUpdateById = (postbody,id) => async (dispatch) => {

        dispatch({ type: CHECKLIST_REQUEST_UPDATE_BYID });
                await updateChecklistsById(postbody,id).then(response=>{
                
                dispatch({ type: CHECKLIST_SUCCESS_UPDATE_BYID, payload: response.data });    
           //   alert(response.data); return;
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Checklist is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: CHECKLIST_FAIL_UPDATE_BYID,
                                payload:
                                "Checklist is already exists!" });
                        toast.error('Checklist is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_FAIL_UPDATE_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                        
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_FAIL_UPDATE_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGetByid = (id) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_BYID });

                await gettingchecklistById(id).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_GET_BYID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type:  CHECKLIST_FAIL_GET_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:  CHECKLIST_FAIL_GET_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGetAll = () => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_ALL });

                await checklistAllgetting().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_GET_ALL, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_GET_FAIL_ALL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGetApprove = () => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_APPROVE_PAGE });

                await checklistApprovegetting().then(response=>{ 
  
                dispatch({ type: CHECKLIST_SUCCESS_GET_APPROVE_PAGE, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_GET_FAIL_APPROVE_PAGE,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_GET_FAIL_APPROVE_PAGE,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistsReject = (data) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_REJECT });

                await rejectChecklist(data).then(response=>{
                dispatch({ type: CHECKLIST_SUCCESS_REJECT, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Checklist is Rejected Successfully!', {
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
                else
                {
                        dispatch({
                                type: CHECKLIST_REQUEST_REJECT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_REQUEST_REJECT_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistSaveandApprove = (data) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_APPROVE });

                await checklistApporve(data).then(response=>{
                dispatch({ type: CHECKLIST_SUCCESS_GET_APPROVE, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Selected data is Approved Successfully!', {
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
                else if(response.status===202){
                        toast.success('Checklist is sent for Approval Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistsAllFilter = (postBody) => async (dispatch) => {
        // alert('sasas')
        dispatch({ type: CHECKLIST_REQUEST_ALL_FILTER });

                await gettingchecklistAllFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_ALL_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_ALL_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_ALL_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistCreateFilters = (postBody) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_CREATE_FILTER });

                await gettingchecklistOnCreateFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_CREATE_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_ALL_CREATE_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_ALL_CREATE_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistsApproveFilter = (postBody) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_APPROVE_FILTER });

                await gettingchecklistOnApproveFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_APPROVE_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_ALL_APPROVE_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_ALL_APPROVE_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistGetOnreject = () => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_GET_REJECT });

                await checklistOnRejectegetting().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_GET_REJECT, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_GET_FAIL_REJECT,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_GET_FAIL_REJECT,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const checklistRejectFilter = (postBody) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_REJECT_FILTER });

                await gettingchecklistOnrejectFilter(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_REJECT_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_ALL_REJECT_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_ALL_REJECT_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const compliancesAllForChecklist = (postBody) => async (dispatch) => {
        dispatch({ type: CHECKLIST_REQUEST_All_COMPLIANCE });

                await gettingchecklistAllCompliance(postBody).then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: CHECKLIST_SUCCESS_All_COMPLIANCE, payload: response.data });    
                if(response.status===201)
                {
                }
                else
                {
                        dispatch({
                                type: CHECKLIST_FAIL_All_COMPLIANCE,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: CHECKLIST_FAIL_All_COMPLIANCE,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
     
}
export const nameRateCreate = (postbody) => async (dispatch) => {
        dispatch({ type: NAMERATE_CREATE_REQUEST });

                await createLiseReg(postbody).then(response=>{
                dispatch({ type: NAMERATE_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Licence/Registration data is added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: NAMERATE_CREATE_FAIL,
                                payload:
                                "Licence/Registration Name already exists!" });
                        toast.error('Licence/Registration Name is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                        return false;
                }
                else
                {
                        dispatch({
                                type: NAMERATE_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: NAMERATE_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                      
                });  
}
export const documentCollection = (postbody) => async (dispatch) => {
        dispatch({ type: DOC_CREATE_REQUEST });

                await createLiseReg(postbody).then(response=>{
                dispatch({ type: DOC_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Lise/Regs Document Colletion data is added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: DOC_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: DOC_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const appDetailsDispatch = (postbody) => async (dispatch) => {
        dispatch({ type: APPDETAILS_CREATE_REQUEST });

                await createLiseReg(postbody).then(response=>{
                dispatch({ type: APPDETAILS_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Lise/Regs Application Details data is added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: APPDETAILS_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:APPDETAILS_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const expenseDispatch = (postbody) => async (dispatch) => {
        dispatch({ type: EXPENSE_CREATE_REQUEST });

                await createLiseReg(postbody).then(response=>{
                dispatch({ type: EXPENSE_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Lise/Regs Expense Details data is added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: EXPENSE_CREATE_FAIL,
                                payload:
                                "Challan Number is already exists!" });
                        toast.error('Challan Number is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                        return false;
                }
                else
                {
                        dispatch({
                                type: EXPENSE_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:EXPENSE_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const licenseInfoDispatch = (postbody) => async (dispatch) => {
        dispatch({ type: LICENSE_CREATE_REQUEST });

                await createLiseReg(postbody).then(response=>{
                dispatch({ type: LICENSE_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Lise/Regs Licence Details data is added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: LICENSE_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:LICENSE_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const invoiceInfoDispatch = (postbody) => async (dispatch) => {
        dispatch({ type: INVOICE_CREATE_REQUEST });

                await createLiseReg(postbody).then(response=>{
                dispatch({ type: INVOICE_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Lise/Regs Invoice Details data is added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: INVOICE_CREATE_FAIL,
                                payload:
                                "Invoice Number is already exists!" });
                        toast.error('Invoice Number is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                        return false;
                }
                else
                {
                        dispatch({
                                type: INVOICE_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:INVOICE_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const companyInfoDispatch = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANYINFO_CREATE_REQUEST });

                await createLiseReg(postbody).then(response=>{
                dispatch({ type: COMPANYINFO_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Lise/Regs Company Information data is added Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANYINFO_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:COMPANYINFO_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const regsGets = (postbody) => async (dispatch) => {
        dispatch({ type: REGSGET_REQUEST });

                await getttingReg(postbody).then(response=>{
                dispatch({ type: REGSGET_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                }
                else
                {
                        dispatch({
                                type: REGSGET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:REGSGET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const lisregsSaveandApprove = (data) => async (dispatch) => {
        dispatch({ type: LISEREGS_REQUEST_GET_APPROVE });

                await regsApporve(data).then(response=>{
                dispatch({ type: LISEREGS_SUCCESS_GET_APPROVE, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('License/Registration is Approved Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.status===202){
                        toast.success('License/Registration is sent for Approval Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: LISEREGS_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: LISEREGS_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const lisregsRejects = (data) => async (dispatch) => {
        dispatch({ type: LISEREGS_REQUEST_GET_REJECT });

                await regsReject(data).then(response=>{
                dispatch({ type: LISEREGS_SUCCESS_GET_REJECT, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('License/Registration is Rejected Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: LISEREGS_REQUEST_GET_REJECT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: LISEREGS_REQUEST_GET_REJECT_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const liseregAllFilter = (data) => async (dispatch) => {
        dispatch({ type: LISEREGS_REQUEST_GET_FILTER });

                await liseregsFilters(data).then(response=>{
                dispatch({ type: LISEREGS_SUCCESS_GET_FILTER, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('License/Registration is Approved Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: LISEREGS_REQUEST_GET_FILTER_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: LISEREGS_REQUEST_GET_FILTER_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const liseRegGettingById = (id) => async (dispatch) => {
        dispatch({ type: LISEREGS_REQUEST_GET_BYID });

                await liseRegGettingByIds(id).then(response=>{
                dispatch({ type: LISEREGS_SUCCESS_GET_BYID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('License/Registration is Approved Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: LISEREGS_REQUEST_GET_BYID_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: LISEREGS_REQUEST_GET_BYID_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const nameRateUpdate = (postbody,id) => async (dispatch) => {
        dispatch({ type: NAMERATE_UPDATE_REQUEST });

                await liseRegUpdateByIds(postbody,id).then(response=>{
                dispatch({ type: NAMERATE_UPDATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Licence/Registration data is updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: NAMERATE_UPDATE_FAIL,
                                payload:
                                "Licence/Registration Name already exists!" });
                        toast.error('Licence/Registration Name is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                        return false;
                }
                else
                {
                        dispatch({
                                type: NAMERATE_UPDATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: NAMERATE_UPDATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                      
                });  
}
export const documentCollectionUpdate = (postbody,id) => async (dispatch) => {
        dispatch({ type: DOC_UPDATE_REQUEST });

                await liseRegUpdateByIds(postbody,id).then(response=>{
                dispatch({ type: DOC_UPDATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Lise/Regs Document Colletion data is updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: DOC_UPDATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: DOC_UPDATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const appDetailsDispatchUpdate = (postbody,id) => async (dispatch) => {
        dispatch({ type: APPDETAILS_UPDATE_REQUEST });

                await liseRegUpdateByIds(postbody,id).then(response=>{
                dispatch({ type: APPDETAILS_UPDATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Lise/Regs Application Details data is updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: APPDETAILS_UPDATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:APPDETAILS_UPDATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const expenseDispatchUpdate = (postbody,id) => async (dispatch) => {
        dispatch({ type: EXPENSE_UPDATE_REQUEST });

                await liseRegUpdateByIds(postbody,id).then(response=>{
                dispatch({ type: EXPENSE_UPDATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Lise/Regs Expense Details data is updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: EXPENSE_UPDATE_FAIL,
                                payload:
                                "Challan Number is already exists!" });
                        toast.error('Challan Number is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                        return false;
                }
                else
                {
                        dispatch({
                                type: EXPENSE_UPDATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:EXPENSE_UPDATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const licenseInfoDispatchUpdate = (postbody,id) => async (dispatch) => {
        dispatch({ type: LICENSE_UPDATE_REQUEST });

                await liseRegUpdateByIds(postbody,id).then(response=>{
                dispatch({ type: LICENSE_UPDATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Lise/Regs Licence Details data is updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: LICENSE_UPDATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:LICENSE_UPDATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const invoiceInfoDispatchUpdate = (postbody,id) => async (dispatch) => {
        dispatch({ type: INVOICE_UPDATE_REQUEST });

                await liseRegUpdateByIds(postbody,id).then(response=>{
                dispatch({ type: INVOICE_UPDATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Lise/Regs Invoice Details data is updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409)
                { 
                        dispatch({
                                type: INVOICE_UPDATE_FAIL,
                                payload:
                                "Invoice Number is already exists!" });
                        toast.error('Invoice Number is already exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                        return false;
                }
                else
                {
                        dispatch({
                                type: INVOICE_UPDATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:INVOICE_UPDATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const companyInfoDispatchUpdate = (postbody,id) => async (dispatch) => {
        dispatch({ type: COMPANYINFO_UPDATE_REQUEST });

                await liseRegUpdateByIds(postbody,id).then(response=>{
                dispatch({ type: COMPANYINFO_UPDATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Lise/Regs Company Information data is updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANYINFO_UPDATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                           
                }
                }).catch(error =>{
                        dispatch({
                                type:COMPANYINFO_UPDATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                          
                });  
}
export const createElibrary = (postbody) => async (dispatch) => {
        dispatch({ type: ELIBRARY_CREATE_REQUEST });

                await ElibraryCreate(postbody).then(response=>{
                dispatch({ type: ELIBRARY_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Elibrary is created Successfully!', {
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
                else
                {
                        dispatch({
                                type: ELIBRARY_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: ELIBRARY_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const getElibrary = (postbody) => async (dispatch) => {
        dispatch({ type: ELIBRARY_GET_REQUEST });

                await ElibraryGet(postbody).then(response=>{
                dispatch({ type: ELIBRARY_GET_SUCCESS, payload: response.data });    
                if(response.status===200)
                {
                        
                }
                else
                {
                        dispatch({
                                type: ELIBRARY_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: ELIBRARY_GET_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
}     
export const eLibraryGettingById = (id) => async (dispatch) => {
        dispatch({ type: ELIBRARY_REQUEST_GET_BYID });

                await elibraryGetById(id).then(response=>{
                dispatch({ type: ELIBRARY_SUCCESS_GET_BYID, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('License/Registration is Approved Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: ELIBRARY_REQUEST_GET_BYID_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: ELIBRARY_REQUEST_GET_BYID_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const updateElibraryById = (postbody,id) => async (dispatch) => {
        dispatch({ type: ELIBRARY_GET_REQUEST_UPDATE_BY_ID });

                await elibraryUpdateById(postbody,id).then(response=>{
                dispatch({ type: ELIBRARY_GET_SUCCESS_UPDATE_BY_ID, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Elibrary is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: ELIBRARY_GET_FAIL_UPDATE_BY_ID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: ELIBRARY_GET_FAIL_UPDATE_BY_ID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
}
export const elibrarySaveandApproved = (postBody) => async (dispatch) => {
        dispatch({ type: ELIBRARY_REQUEST_SAVE_APPROVE });

                await elibrarySaveandApprove(postBody).then(response=>{
                dispatch({ type: ELIBRARY_SUCCESS_SAVE_APPROVE, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Elibrary is Approved Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.status===202){
                        toast.success('Elibrary is sent for Approval Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }

                else
                {
                        dispatch({
                                type: ELIBRARY_REQUEST_SAVE_APPROVE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: ELIBRARY_REQUEST_SAVE_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const rejectsElibrary = (data) => async (dispatch) => {
        dispatch({ type: ELIBRARY_REQUEST_GET_REJECT });

                await elibraryReject(data).then(response=>{
                dispatch({ type: ELIBRARY_SUCCESS_GET_REJECT, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Elibrary is Rejected Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: ELIBRARY_REQUEST_GET_REJECT_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: ELIBRARY_REQUEST_GET_REJECT_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const rejectedElibraryDocs = () => async (dispatch) => {
        dispatch({ type: ELIBRARY_REQUEST_GET_REJECT_LIST });

                await elibraryRejectedDocs().then(response=>{
                // alert(JSON.stringify(response.data)) 
                dispatch({ type: ELIBRARY_SUCCESS_GET_REJECT_LIST, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
                }
                else
                {
                        dispatch({
                                type: ELIBRARY_GET_FAIL_REJECT_LIST,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                           
                }
                }).catch(error =>{
                        dispatch({
                                type: ELIBRARY_GET_FAIL_REJECT_LIST,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                // document.getElementById("submitting").innerText = "Save";
                // document.getElementById("submitting").disabled  = false;                                            
                });  
     
}
export const companytab1create = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANYTAB1_CREATE_REQUEST });

                await createCompany(postbody).then(response=>{
                dispatch({ type: COMPANYTAB1_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('General Details is created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.data===409){
                        toast.error('Company is alreay Exists!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANYTAB1_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANYTAB1_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const companytab2create = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANYTAB2_CREATE_REQUEST });

                await createCompany(postbody).then(response=>{
                dispatch({ type: COMPANYTAB2_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Registratiion Details is created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANYTAB2_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANYTAB2_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const companytab3create = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANYTAB3_CREATE_REQUEST });

                await createCompany(postbody).then(response=>{
                dispatch({ type: COMPANYTAB3_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Client Details is created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANYTAB3_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANYTAB3_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const companytab4create = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANYTAB4_CREATE_REQUEST });

                await createCompany(postbody).then(response=>{
                dispatch({ type: COMPANYTAB4_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Other Registration Details is created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANYTAB4_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANYTAB4_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const companytab5create = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANYTAB5_CREATE_REQUEST });

                await createCompany(postbody).then(response=>{
                dispatch({ type: COMPANYTAB5_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Labour Contractor Details is created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANYTAB5_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANYTAB5_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const companytab6create = (postbody) => async (dispatch) => {
        console.log(JSON.stringify(postbody))
        dispatch({ type: COMPANYTAB6_CREATE_REQUEST });

                await createCompany(postbody).then(response=>{
                dispatch({ type: COMPANYTAB6_CREATE_SUCCESS, payload: response.data });    
                // alert(response.status+'='+response.data);return;
                if(response.status===201 /*&& response.data!==408*/)
                {
                        toast.success('Branch Details is created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                // else if(response.data===408)
                // { 
                //         dispatch({
                //                 type: COMPANYTAB6_CREATE_FAIL,
                //                 payload:
                //                 'No data to save for branch!!'});
                //         toast.error('No data to save for branch!!', {
                //                 position: "bottom-right",
                //                 hideProgressBar: false,
                //                 progress: undefined,
                //         }); 
                // }
                else
                {
                        dispatch({
                                type: COMPANYTAB6_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANYTAB6_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const companytab7create = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANYTAB7_CREATE_REQUEST });

                await createCompany(postbody).then(response=>{
                dispatch({ type: COMPANYTAB7_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Company Contractor Details is created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANYTAB7_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANYTAB7_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const companyTableGet = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANY_GET_TABLE_REQUEST });

                await gettingCompanyTable(postbody).then(response=>{
                dispatch({ type: COMPANY_GET_TABLE_SUCCESS, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('Company Contractor Details is created Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_GET_TABLE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_GET_TABLE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const getComplianceBycandsId = (cid,sid) => async (dispatch) => { ///getting compliance by state and category id
        dispatch({ type: COMLIANCE_REQUEST_GET_BY_CSID });

                await gettingCompliaceCSById(cid,sid).then(response=>{
                dispatch({ type: COMLIANCE_SUCCESS_GET_BY_CSID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('License/Registration is Approved Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMLIANCE_GET_BY_CSID_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: COMLIANCE_GET_BY_CSID_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const companyGettingById = (id) => async (dispatch) => {
        dispatch({ type: COMPANY_REQUEST_GET_BYID });

                await gettingCompanyById(id).then(response=>{
                dispatch({ type: COMPANY_SUCCESS_GET_BYID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('License/Registration is Approved Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_REQUEST_GET_BYID_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_REQUEST_GET_BYID_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const SaveandApproveCompany = (postBody) => async (dispatch) => {
        dispatch({ type: COMPANY_REQUEST_SAVE_APPROVE });

                await companySaveandApprove(postBody).then(response=>{
                dispatch({ type: COMPANY_SUCCESS_SAVE_APPROVE, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Company is Approved Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else if(response.status===202){
                        toast.success('Company is sent for Approval Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANY_REQUEST_SAVE_APPROVE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_REQUEST_SAVE_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const licenseCreate = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANYL_CREATE_REQUEST });

                await companyLcreate(postbody).then(response=>{
                dispatch({ type: COMPANYL_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Company License is created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANYL_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANYL_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const licenseGetonCreate = () => async (dispatch) => {
        dispatch({ type: COMPANYL_GET_REQUEST });

                await companyL().then(response=>{
                dispatch({ type: COMPANYL_GET_SUCCESS, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('Company License is created Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANYL_GET_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANYL_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const licenseGetByid = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANYL_GET_REQUEST_BY_ID });

                await companyLById(postbody).then(response=>{
                dispatch({ type: COMPANYL_GET_SUCCESS_BY_ID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Company License is created Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANYL_GET_FAIL_BY_ID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANYL_GET_FAIL_BY_ID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
}    
export const licenseUpdateByid = (postbody,id) => async (dispatch) => {
        dispatch({ type: COMPANYL_GET_REQUEST_BY_ID });

                await companyLUpdateById(postbody,id).then(response=>{
                dispatch({ type: COMPANYL_GET_SUCCESS_BY_ID, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Company License is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANYL_GET_FAIL_BY_ID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANYL_GET_FAIL_BY_ID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
}    
export const companylicenseSaveandApprove = (data) => async (dispatch) => {
        dispatch({ type: COMPANY_LICENSE_REQUEST_GET_APPROVE });

                await apporveCompanyL(data).then(response=>{
                dispatch({ type: COMPANY_LICENSE_SUCCESS_GET_APPROVE, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Company Licenses is Approved Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANY_LICENSE_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_LICENSE_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const licenseCompanyFilter = (postBody) => async (dispatch) => {
        dispatch({ type: COMPANY_LICENSE_REQUEST_GET_FILTER });
                await companyLicenseFilter(postBody).then(response=>{
                dispatch({ type: COMPANY_LICENSE_SUCCESS_GET_FILTER, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_LICENSE_GET_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_LICENSE_GET_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                   
                });  
}
export const companyinteractionCreate = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANY_INERACTION_CREATE_REQUEST });

                await createcompanyinteraction(postbody).then(response=>{
                dispatch({ type: COMPANY_INERACTION_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Company Interaction is created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANY_INERACTION_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_INERACTION_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const companyinteractionGetByid = (id) => async (dispatch) => {
        dispatch({ type: COMPANY_INTERACTION_REQUEST_GET_BYID });

                await gettingComppanyInterationById(id).then(response=>{
                dispatch({ type: COMPANY_INTERACTION_SUCCESS_GET_BYID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_INTERACTION_FAIL_GET_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_INTERACTION_FAIL_GET_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });      
}
export const companyinteractionUpdateById = (postbody,id) => async (dispatch) => {

        dispatch({ type: COMPANY_INTERACTION_REQUEST_UPDATE_BYID });
                await updatecompanyinteractionById(postbody,id).then(response=>{
                dispatch({ type: COMPANY_INTERACTION_SUCCESS_UPDATE_BYID, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Company Interaction is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANY_INTERACTION_FAIL_UPDATE_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_INTERACTION_FAIL_UPDATE_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const companyInractionTableGet = () => async (dispatch) => {
        dispatch({ type: COMPANY_INTERACTION_GET_TABLE_REQUEST });

                await gettingCompanyInractionTable().then(response=>{
                dispatch({ type: COMPANY_INTERACTION_GET_TABLE_SUCCESS, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('Company Contractor Details is created Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_INTERACTION_GET_TABLE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_INTERACTION_GET_TABLE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const saveandapporveCompanyInteraction = (data) => async (dispatch) => {
        dispatch({ type: COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE });

                await apporveCompanyInteraction(data).then(response=>{
                dispatch({ type: COMPANY_PROFILE_INERACTION_SUCCESS_GET_APPROVE, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Company Interaction Profiles is Approved Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}
export const saveandapporveCompanyInteractionLicense = (data) => async (dispatch) => {
        dispatch({ type: COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE });

                await apporveCompanyInteractionLicense(data).then(response=>{
                dispatch({ type: COMPANY_LICENSE_INERACTION_SUCCESS_GET_APPROVE, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Company Interaction Liceneses is Approved Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                  
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                        
                });  
}

export const profileCompanyFilter = (postBody) => async (dispatch) => {
        dispatch({ type: COMPANY_INTERACT_REQUEST_GET_FILTER });
                await companyProfileFilter(postBody).then(response=>{
                dispatch({ type: COMPANY_INTERACT_SUCCESS_GET_FILTER, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_INTERACT_GET_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_INTERACT_GET_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                   
                });  
}
export const licenseCompanyInteractionGetById = (id) => async (dispatch) => {
        dispatch({ type: COMPANY_INTERACTION_REQUEST_GET_BYID });

                await gettingComppanyInterationById(id).then(response=>{
                dispatch({ type: COMPANY_INTERACTION_SUCCESS_GET_BYID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_INTERACTION_FAIL_GET_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_INTERACTION_FAIL_GET_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });      
}
export const licenseCompanyInteractionCreate = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANY_INTERACTION_LIC_CREATE_REQUEST });

                await licenseCompanyInteractcreate(postbody).then(response=>{
                dispatch({ type: COMPANY_INTERACTION_LIC_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Company Ineraction License is created Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANY_INTERACTION_LIC_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_INTERACTION_LIC_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const licenseCompanyInteractionGetOnCreate = () => async (dispatch) => {
        dispatch({ type: COMPANY_INTERACTION_LICENSE_GET_REQUEST });

                await licenseCompanyInteractGetOnCreate().then(response=>{
                dispatch({ type: COMPANY_INTERACTION_LICENSE_GET_SUCCESS, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('Company Ineraction License is created Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_INTERACTION_LICENSE_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_INTERACTION_LICENSE_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const companyinteractionLicGetByid = (id) => async (dispatch) => {
        dispatch({ type: COMPANY_INTERACTION_LIC_REQUEST_GET_BYID });

                await companyinteractLicGetByid(id).then(response=>{
                dispatch({ type: COMPANY_INTERACTION_LIC_SUCCESS_GET_BYID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_INTERACTION_LIC_FAIL_GET_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_INTERACTION_LIC_FAIL_GET_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });      
}
export const companyinteractionLicUpdateById = (postbody,id) => async (dispatch) => {

        dispatch({ type: COMPANY_INTERACTION_LIC_REQUEST_UPDATE_BYID });
                await companyinteractLicUpdateById(postbody,id).then(response=>{
                dispatch({ type: COMPANY_INTERACTION_LIC_SUCCESS_UPDATE_BYID, payload: response.data });    
                if(response.status===201 && response.data!==409)
                {
                        toast.success('Company Interaction License is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANY_INTERACTION_LIC_FAIL_UPDATE_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_INTERACTION_LIC_FAIL_UPDATE_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const licenseCompanyIntractFilter = (postBody) => async (dispatch) => {
        dispatch({ type: COMPANY_LICENSE_INTERACT_REQUEST_GET_FILTER });
                await companyLicenseIntractFilter(postBody).then(response=>{
                dispatch({ type: COMPANY_LICENSE_INTERACT_SUCCESS_GET_FILTER, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_LICENSE_INTERACT_GET_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_LICENSE_INTERACT_GET_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                   
                });  
}
export const assignCreate = (postbody) => async (dispatch) => {
        dispatch({ type: COMPANY_ASSIGN_CREATE_REQUEST });

                await createAssign(postbody).then(response=>{
                dispatch({ type: COMPANY_ASSIGN_CREATE_SUCCESS, payload: response.data });    
                if(response.status===201)
                {
                        toast.success('Company is Assigned to Selected Executive Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANY_ASSIGN_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_ASSIGN_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}

export const assignGetByid = (id) => async (dispatch) => {
        dispatch({ type: COMPANY_ASSIGNREQUEST_GET_BYID });

                await getAssignid(id).then(response=>{
                dispatch({ type: COMPANY_ASSIGNSUCCESS_GET_BYID, payload: response.data });    
                if(response.status===201)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_ASSIGNFAIL_GET_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_ASSIGNFAIL_GET_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });      
}
export const assignUpdateById = (postbody,id) => async (dispatch) => {

        dispatch({ type: COMPANY_ASSIGN_REQUEST_UPDATE_BYID });
                await assignsUpdateById(postbody,id).then(response=>{
                dispatch({ type: COMPANY_ASSIGN_SUCCESS_UPDATE_BYID, payload: response.data });    
                if(response.status===201 )
                {
                        toast.success('Company is Assigned to Selected Executive is Updated Successfully!', {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });
                }
                else
                {
                        dispatch({
                                type: COMPANY_ASSIGN_FAIL_UPDATE_BYID,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_ASSIGN_FAIL_UPDATE_BYID,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                });  
}
export const assignGetTable = () => async (dispatch) => {
        dispatch({ type: COMPANY_ASSIGN_GET_REQUEST });

                await assignTableGet().then(response=>{
                dispatch({ type: COMPANY_ASSIGN_GET_SUCCESS, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('Company Ineraction License is created Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_ASSIGN_TABLE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_ASSIGN_TABLE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const assignGetOnCreate = () => async (dispatch) => {
        dispatch({ type: COMPANY_ASSIGN_ON_CREATE_GET_REQUEST });

                await getAssignOnCreate().then(response=>{
                dispatch({ type: COMPANY_ASSIGN_ON_CREATE_GET_SUCCESS, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('Company Ineraction License is created Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_ASSIGN_ON_CREATE_CREATE_FAIL,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_ASSIGN_ON_CREATE_CREATE_FAIL,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        });                                         
                });  
     
}
export const companyViewAllAssignedFilter = (postBody) => async (dispatch) => {
        dispatch({ type: COMPANY_ASSIGN_REQUEST_GET_FILTER });
                await viewAllAssignedCompanyFilter(postBody).then(response=>{
                dispatch({ type: COMPANY_ASSIGN_SUCCESS_GET_FILTER, payload: response.data });    
                if(response.status===200)
                {
                     
                }
                else
                {
                        dispatch({
                                type: COMPANY_ASSIGN_GET_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_ASSIGN_GET_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                   
                });  
}
export const companyAssignedFilter = (postBody) => async (dispatch) => {
        dispatch({ type: COMPANY_ASSIGNA_REQUEST_GET_FILTER });
                await assignedCompanyFilter(postBody).then(response=>{
                dispatch({ type: COMPANY_ASSIGNA_SUCCESS_GET_FILTER, payload: response.data });    
                if(response.status===200)
                {
                        // toast.success('Category is Added Successfully!', {
                        //         position: "bottom-right",
                        //         hideProgressBar: false,
                        //         progress: undefined,
                        // });
                }
                else
                {
                        dispatch({
                                type: COMPANY_ASSIGNA_GET_FAIL_FILTER,
                                payload:
                                response.data });
                        toast.error(response.data, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                }
                }).catch(error =>{
                        dispatch({
                                type: COMPANY_ASSIGNA_GET_FAIL_FILTER,
                                payload:
                                error.message });

                        toast.error(error.message, {
                                position: "bottom-right",
                                hideProgressBar: false,
                                progress: undefined,
                        }); 
                                   
                });  
}