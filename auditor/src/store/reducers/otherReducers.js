import {
    AUDITOR_REQUEST_GET,
    AUDITOR_SUCCESS_GET,
    AUDITOR_GET_FAIL,   
    EXECUTIVE_REQUEST_GET,
    EXECUTIVE_SUCCESS_GET,
    EXECUTIVE_GET_FAIL, 
    AUDIT_REQUEST_CREATE,
    AUDIT_SUCCESS_CREATE,
    AUDIT_FAIL_CREATE,
    AUDITOR_REQUEST_GET_FILTER,
    AUDITOR_SUCCESS_GET_FILTER,
    AUDITOR_GET_FAIL_FILTER,
    AUDITOR_REQUEST_GET_ALL_FILTER,
    AUDITOR_SUCCESS_GET_ALL_FILTER,
    AUDITOR_GET_FAIL_ALL_FILTER,
    AUDIT_REQUEST_ONGOING_DETAIL,
    AUDIT_SUCCESS_ONGOING_DETAIL,
    AUDIT_FAIL_ONGOING_DETAIL,
    AUDIT_REQUEST_OVERDUE_DETAIL_DASHBOARD,
    AUDIT_SUCCESS_OVERDUE_DETAIL_DASHBOARD,
    AUDIT_FAIL_OVERDUE_DETAIL_DASHBOARD,
    CHECKLIST_REQUEST_GET_CREATE_AUDIT,
    CHECKLIST_SUCCESS_GET_CREATE_AUDIT,
    CHECKLIST_GET_FAIL_CREATE_AUDIT,
    CATEGORY_REQUEST,
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,
    CATEGORY_REQUEST_GET,
    CATEGORY_SUCCESS_GET,
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
    COMPLIANCE_REQUEST_GET_FILTER,
    COMPLIANCE_SUCCESS_GET_FILTER,
    COMPLIANCE_GET_FAIL_FILTER,
    COMPLIANCE_REQUEST_REJECT_FILTER,
    COMPLIANCE_SUCCESS_REJECT_FILTER,
    COMPLIANCE_REJECT_FAIL_FILTER,
    COMPLIANCE_REQUEST_APPROVE_FILTER,
    COMPLIANCE_SUCCESS_APPROVE_FILTER,
    COMPLIANCE_APPROVE_FAIL_FILTER,
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
    COMPANY_LICENSE_REQUEST_GET_APPROVE,
    COMPANY_LICENSE_SUCCESS_GET_APPROVE,
    COMPANY_LICENSE_REQUEST_GET_APPROVE_FAIL,
    COMPANY_LICENSE_REQUEST_GET_FILTER,
    COMPANY_LICENSE_SUCCESS_GET_FILTER,
    COMPANY_LICENSE_GET_FAIL_FILTER,
    COMPANY_GET_TABLE_REQUEST,
    COMPANY_GET_TABLE_SUCCESS,
    COMPANY_GET_TABLE_FAIL,
    COMPANY_REQUEST_GET_BYID,
    COMPANY_SUCCESS_GET_BYID,
    COMPANY_REQUEST_GET_BYID_FAIL,
    COMPANYL_GET_REQUEST_BY_ID,
    COMPANYL_GET_SUCCESS_BY_ID,
    COMPANYL_GET_FAIL_BY_ID,
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
export const auditorReducer = (state= {}, action) => {
        switch(action.type) {
        case AUDITOR_REQUEST_GET: return { loading:true };
        case AUDITOR_SUCCESS_GET: return { loading:false, auditorInfo: action.payload };
        case AUDITOR_GET_FAIL: return { loading:false, error: action.payload };
        default: return state;
        }
}     
export const executiveReducer = (state= {}, action) => {
        switch(action.type) {
        case EXECUTIVE_REQUEST_GET: return { loadingexecutive:true };
        case EXECUTIVE_SUCCESS_GET: return { loadingexecutive:false, executiveInfo: action.payload };
        case EXECUTIVE_GET_FAIL: return { loadingexecutive:false, error: action.payload };
        default: return state;
        }
}   
export const auditorOnCreateReducer = (state= {}, action) => {
        switch(action.type) {
        case AUDIT_REQUEST_CREATE: return { loading:true };
        case AUDIT_SUCCESS_CREATE: return { loading:false, auditorCreateInfo: action.payload };
        case AUDIT_FAIL_CREATE: return { loading:false, error: action.payload };
        default: return state;
        }
}   
export const auditorChecklistFilterReducer = (state= {}, action) => {
        switch(action.type) {
        case AUDITOR_REQUEST_GET_FILTER: return { loading:true };
        case AUDITOR_SUCCESS_GET_FILTER: return { loading:false, auditorChecklistInfoFilter: action.payload };
        case AUDITOR_GET_FAIL_FILTER: return { loading:false, error: action.payload };
        default: return state;
        }
}
export const auditorChecklistOnCreateAuditReducer = (state= {}, action) => {
        switch(action.type) {
        case CHECKLIST_REQUEST_GET_CREATE_AUDIT: return { loading:true };
        case CHECKLIST_SUCCESS_GET_CREATE_AUDIT: return { loading:false, auditorChecklistInfoOncreate: action.payload };
        case CHECKLIST_GET_FAIL_CREATE_AUDIT: return { loading:false, error: action.payload };
        default: return state;
        }
}    
export const auditAllFilterReducer = (state= {}, action) => {
        switch(action.type) {
        case AUDITOR_REQUEST_GET_ALL_FILTER: return { loadingallAuditFilter:true };
        case AUDITOR_SUCCESS_GET_ALL_FILTER: return { loadingallAuditFilter:false, auditAllFilterInfo: action.payload };
        case AUDITOR_GET_FAIL_ALL_FILTER: return { loadingallAuditFilter:false, error: action.payload };
        default: return state;
        }
}   
export const auditOnGoingReducer = (state= {}, action) => {
        switch(action.type) {
        case AUDIT_REQUEST_ONGOING_DETAIL: return { loadingOnGoing:true };
        case AUDIT_SUCCESS_ONGOING_DETAIL: return { loadingOnGoing:false, auditOnGoingInfo: action.payload };
        case AUDIT_FAIL_ONGOING_DETAIL: return { loadingOnGoing:false, error: action.payload };
        default: return state;
        }
}
export const auditOverDueReducer = (state= {}, action) => {
        switch(action.type) {
        case AUDIT_REQUEST_OVERDUE_DETAIL_DASHBOARD: return { loadingOverdue:true };
        case AUDIT_SUCCESS_OVERDUE_DETAIL_DASHBOARD: return { loadingOverdue:false, auditOverdueInfos: action.payload };
        case AUDIT_FAIL_OVERDUE_DETAIL_DASHBOARD: return { loadingOverdue:false, error: action.payload };
        default: return state;
        }
}
export const categoryReducer = (state= {}, action) => {
    switch(action.type) {
            case CATEGORY_REQUEST: return { loading:true };
            case CATEGORY_SUCCESS: return { loading:false, catGetInfo: action.payload };
            case CATEGORY_FAIL: return { loading:false, error: action.payload };
            default: return state;
    }
}
export const categoryGetReducer = (state= {}, action) => {
  switch(action.type) {
          case CATEGORY_REQUEST_GET: return { loading:true };
          case CATEGORY_SUCCESS_GET: return { loading:false, categoryInfo: action.payload };
          case CATEGORY_GET_FAIL: return { loading:false, error: action.payload };
          default: return state;
  }
}
export const categoryEditReducer = (state= {}, action) => {
  switch(action.type) {
          case CATEGORY_REQUEST_EDIT: return { loading:true };
          case CATEGORY_SUCCESS_EDIT: return { loading:false, categoryEditInfo: action.payload };
          case CATEGORY_EDIT_FAIL: return { loading:false, error: action.payload };
          default: return state;
  }
}
export const categoryDeleteReducer = (state= {}, action) => {
        switch (action.type) {
                case CATEGORY_DELETE_REQUEST:
                        return { loadings: true };
                case CATEGORY_DELETE_SUCCESS:
                        return { loadings: false, categoryDeleteInfo: action.payload };
                case CATEGORY_DELETE_FAIL:
                        return { loadings: false, error: action.payload };
                default:
                        return state;
      
        }
}
export const stateGetReducer = (state= {}, action) => {
        switch(action.type) {
                case STATE_REQUEST_GET: return { loadings:true };
                case STATE_SUCCESS_GET: return { loadings:false, stateInfo: action.payload };
                case STATE_GET_FAIL: return { loadings:false, error: action.payload };
                default: return state;
        }
}
export const userGetReducer = (state= {}, action) => {
        switch(action.type) {
                case USER_REQUEST_GET: return { loadingu:true };
                case USER_SUCCESS_GET: return { loadingu:false, usersInfo: action.payload };
                case USER_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const notificationCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case NOTFICATION_CREATE_REQUEST: return { loading:true };
                case NOTFICATION_CREATE_SUCCESS: return { loading:false, notificatioInfo: action.payload };
                case NOTFICATION_CREATE_FAIL: return { loading:false, error: action.payload };
                default: return state;
        }
}
export const notificationGetReducer = (state= {}, action) => {
        switch(action.type) {
                case NOTFICATION_REQUEST_GET: return { loadingu:true };
                case NOTFICATION_SUCCESS_GET: return { loadingu:false, notificationInfo: action.payload };
                case NOTFICATION_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const userCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case USER_CREATE_REQUEST: return { loading:true };
                case USER_CREATE_SUCCESS: return { loading:false, userCreateInfo: action.payload };
                case USER_CREATE_FAIL: return { loading:false, error: action.payload };
                default: return state;
        }
}
export const userEditReducer = (state= {}, action) => {
        switch(action.type) {
                case USER_REQUEST_EDIT: return { loading:true };
                case USER_SUCCESS_EDIT: return { loading:false, userEditInfo: action.payload };
                case USER_EDIT_FAIL: return { loading:false, error: action.payload };
                default: return state;
        }
}

export const branchGetReducer = (state= {}, action) => {
        switch(action.type) {
                case BRANCH_REQUEST_GET: return { loadingu:true };
                case BRANCH_SUCCESS_GET: return { loadingu:false, branchInfo: action.payload };
                case BRANCH_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const companyGetReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_REQUEST_GET: return { loadingu:true };
                case COMPANY_SUCCESS_GET: return { loadingu:false, companyInfo: action.payload };
                case COMPANY_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}

export const companyCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_CREATE_REQUEST: return { loading:true };
                case COMPANY_CREATE_SUCCESS: return { loading:false, companyCreateInfo: action.payload };
                case COMPANY_CREATE_FAIL: return { loading:false, error: action.payload };
                default: return state;
        }
}
export const complianceCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_CREATE_REQUEST: return { loadingCompliance:true };
                case COMPLIANCE_CREATE_SUCCESS: return { loadingCompliance:false, complianceCreateInfo: action.payload };
                case COMPLIANCE_CREATE_FAIL: return { loadingCompliance:false, error: action.payload };
                default: return state;
        }
}
export const complianceGetReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET: return { loadingu:false, complianceInfo: action.payload };
                case COMPLIANCE_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceGetAllReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_ALL: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET_ALL: return { loadingu:false, complianceInfoAll: action.payload };
                case COMPLIANCE_GET_FAIL_ALL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceGetOnCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_CREATE: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET_CREATE: return { loadingu:false, complianceInfoOnCreate: action.payload };
                case COMPLIANCE_GET_FAIL_CREATE: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceGetByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_BYID: return { loadingg:true };
                case COMPLIANCE_SUCCESS_GET_BYID: return { loadingg:false, complianceInfoId: action.payload };
                case COMPLIANCE_FAIL_GET_BYID: return { loadingg:false, error: action.payload };
                default: return state;
        }
}
export const complianceUpdateByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_UPDATE_BYID: return { loadingupdate:true };
                case COMPLIANCE_SUCCESS_UPDATE_BYID: return { loadingupdate:false, complianceInfoUpdateId: action.payload };
                case COMPLIANCE_FAIL_UPDATE_BYID: return { loadingupdate:false, error: action.payload };
                default: return state;
        }
}
export const complianceApproveReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_APPROVE: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET_APPROVE: return { loadingu:false, complianceApporve: action.payload };
                case COMPLIANCE_REQUEST_GET_APPROVE_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceRejectReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_REJECT: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET_REJECT: return { loadingu:false, complianceReject: action.payload };
                case COMPLIANCE_REQUEST_GET_REJECT_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceRejectedReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_REJECT: return { loadingu:true };
                case COMPLIANCE_SUCCESS_REJECT: return { loadingu:false, complianceRejected: action.payload };
                case COMPLIANCE_REQUEST_REJECT_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceFilterCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_FILTER: return { loadingu:true };
                case COMPLIANCE_SUCCESS_GET_FILTER: return { loadingu:false, complianceGetFilterInfo: action.payload };
                case COMPLIANCE_GET_FAIL_FILTER: return { loadingu:false, error: action.payload };
                default: return state;
        }
}   
export const complianceFilterAllReducer = (state= {}, action) => {
        // alert(JSON.stringify(action.payload))
        switch(action.type) {
                case COMPLIANCE_REQUEST_GET_ALL_FILTER: return { loadingallFilter:true };
                case COMPLIANCE_SUCCESS_GET_ALL_FILTER: return { loadingallFilter:false, complianceGetAllFilterInfo: action.payload };
                case COMPLIANCE_GET_FAIL_ALL_FILTER: return { loadingallFilter:false, error: action.payload };
                default: return state;
        }
} 
export const complianceFilterRejectReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_REJECT_FILTER: return { loadingu:true };
                case COMPLIANCE_SUCCESS_REJECT_FILTER: return { loadingu:false, complianceRejectFilterInfo: action.payload };
                case COMPLIANCE_REJECT_FAIL_FILTER: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const complianceFilterApproveReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPLIANCE_REQUEST_APPROVE_FILTER: return { loadingap:true };
                case COMPLIANCE_SUCCESS_APPROVE_FILTER: return { loadingap:false, complianceApproveFilterInfo: action.payload };
                case COMPLIANCE_APPROVE_FAIL_FILTER: return { loadingap:false, error: action.payload };
                default: return state;
        }
}
export const checklistReducer = (state= {}, action) => {  ///createchecklist
        switch(action.type) {
                case CHECKLIST_CREATE_REQUEST: return { loadingChecklist:true };
                case CHECKLIST_CREATE_SUCCESS: return { loadingChecklist:false, checklistInfo: action.payload };
                case CHECKLIST_CREATE_FAIL: return { loadingChecklist:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET: return { loadingu:true };
                case CHECKLIST_SUCCESS_GET: return { loadingu:false, checklistGetInfo: action.payload };
                case CHECKLIST_GET_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistUpdateByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_UPDATE_BYID: return { loadingu:true };
                case CHECKLIST_SUCCESS_UPDATE_BYID: return { loadingu:false, checklistInfoUpdateId: action.payload };
                case CHECKLIST_FAIL_UPDATE_BYID: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetOnCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_CREATE: return { loadingoncreate:true };
                case CHECKLIST_SUCCESS_GET_CREATE: return { loadingoncreate:false, checklistInfoOnCreate: action.payload };
                case CHECKLIST_GET_FAIL_CREATE: return { loadingoncreate:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_BYID: return { loadingg:true };
                case CHECKLIST_SUCCESS_GET_BYID: return { loadingg:false, checklistInfoId: action.payload };
                case CHECKLIST_FAIL_GET_BYID: return { loadingg:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetAllReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_ALL: return { loadingall:true };
                case CHECKLIST_SUCCESS_GET_ALL: return { loadingall:false, checklistInfoAll: action.payload };
                case CHECKLIST_GET_FAIL_ALL: return { loadingall:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetApproveReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_APPROVE_PAGE: return { loadingApprove:true };
                case CHECKLIST_SUCCESS_GET_APPROVE_PAGE: return { loadingApprove:false, checklistInfoApprove: action.payload };
                case CHECKLIST_GET_FAIL_APPROVE_PAGE: return { loadingApprove:false, error: action.payload };
                default: return state;
        }
}
export const checklistApproveReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_APPROVE: return { loadingu:true };
                case CHECKLIST_SUCCESS_GET_APPROVE: return { loadingu:false, checklistApporve: action.payload };
                case CHECKLIST_REQUEST_GET_APPROVE_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistFilterAllReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_ALL_FILTER: return { loadingu:true };
                case CHECKLIST_SUCCESS_ALL_FILTER: return { loadingu:false, checklistAllFilter: action.payload };
                case CHECKLIST_ALL_FAIL_FILTER: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistFilterCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_CREATE_FILTER: return { loadingcreatefilter:true };
                case CHECKLIST_SUCCESS_CREATE_FILTER: return { loadingcreatefilter:false, checklistInfoFilter: action.payload };
                case CHECKLIST_ALL_CREATE_FILTER: return { loadingcreatefilter:false, error: action.payload };
                default: return state;
        }
}

export const checklistFilterApproveReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_APPROVE_FILTER: return { loadingapp:true };
                case CHECKLIST_SUCCESS_APPROVE_FILTER: return { loadingapp:false, checklistApproveFilter: action.payload };
                case CHECKLIST_ALL_APPROVE_FILTER: return { loadingapp:false, error: action.payload };
                default: return state;
        }
}
export const checklistGetOnRejectReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_GET_REJECT: return { loadingu:true };
                case CHECKLIST_SUCCESS_GET_REJECT: return { loadingu:false, checklistInfoOnReject: action.payload };
                case CHECKLIST_GET_FAIL_REJECT: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistRejectedReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_REJECT: return { loadingu:true };
                case CHECKLIST_SUCCESS_REJECT: return { loadingu:false, checklistRejected: action.payload };
                case CHECKLIST_REQUEST_REJECT_FAIL: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const checklistFilterRejectReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_REJECT_FILTER: return { loadingreject:true };
                case CHECKLIST_SUCCESS_REJECT_FILTER: return { loadingreject:false, checklistRejectinfo: action.payload };
                case CHECKLIST_ALL_REJECT_FILTER: return { loadingreject:false, error: action.payload };
                default: return state;
        }
}
export const checklistAllComplianceReducer = (state= {}, action) => {
        switch(action.type) {
                case CHECKLIST_REQUEST_All_COMPLIANCE: return { loadingallcomp:true };
                case CHECKLIST_SUCCESS_All_COMPLIANCE: return { loadingallcomp:false, checklistAllComp: action.payload };
                case CHECKLIST_FAIL_All_COMPLIANCE: return { loadingallcomp:false, error: action.payload };
                default: return state;
        }
}
export const auditAllReducer = (state= {}, action) => {
        switch(action.type) {
                case AUDIT_REQUEST_All_DETAIL: return { loadingallAudit:true };
                case AUDIT_SUCCESS_All_DETAIL: return { loadingallAudit:false, getAllAudit: action.payload };
                case AUDIT_FAIL_All_DETAIL: return { loadingallAudit:false, error: action.payload };
                default: return state;
        }
}
export const namerateCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case NAMERATE_CREATE_REQUEST: return { loadingCompliance:true };
                case NAMERATE_CREATE_SUCCESS: return { loadingCompliance:false, namerateCreateInfo: action.payload };
                case NAMERATE_CREATE_FAIL: return { loadingCompliance:false, error: action.payload };
                default: return state;
        }
}
export const docCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case DOC_CREATE_REQUEST: return { loadingdoc:true };
                case DOC_CREATE_SUCCESS: return { loadingdoc:false, docCreateInfo: action.payload };
                case DOC_CREATE_FAIL: return { loadingdoc:false, error: action.payload };
                default: return state;
        }
}
export const appDetailsReducer = (state= {}, action) => {
        switch(action.type) {
                case APPDETAILS_CREATE_REQUEST: return { loadingAppD:true };
                case APPDETAILS_CREATE_SUCCESS: return { loadingAppD:false, appDetailsCreateInfo: action.payload };
                case APPDETAILS_CREATE_FAIL: return { loadingAppD:false, error: action.payload };
                default: return state;
        }
}
export const expenseDetailsReducer = (state= {}, action) => {
        switch(action.type) {
                case EXPENSE_CREATE_REQUEST: return { loadingExpense:true };
                case EXPENSE_CREATE_SUCCESS: return { loadingExpense:false, expenseDetailsCreateInfo: action.payload };
                case EXPENSE_CREATE_FAIL: return { loadingExpense:false, error: action.payload };
                default: return state;
        }
}
export const licenseDetailsReducer = (state= {}, action) => {
        switch(action.type) {
                case LICENSE_CREATE_REQUEST: return { loadingLicense:true };
                case LICENSE_CREATE_SUCCESS: return { loadingLicense:false, licenseDetailsCreateInfo: action.payload };
                case LICENSE_CREATE_FAIL: return { loadingLicense:false, error: action.payload };
                default: return state;
        }
}
export const invoiceDetailsReducer = (state= {}, action) => {
        switch(action.type) {
                case INVOICE_CREATE_REQUEST: return { loadingLicense:true };
                case INVOICE_CREATE_SUCCESS: return { loadingLicense:false, invoiceDetailsCreateInfo: action.payload };
                case INVOICE_CREATE_FAIL: return { loadingLicense:false, error: action.payload };
                default: return state;
        }
}
export const companyInfoDetailsReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYINFO_CREATE_REQUEST: return { loadingLicense:true };
                case COMPANYINFO_CREATE_SUCCESS: return { loadingLicense:false, companyInfoDetailsCreateInfo: action.payload };
                case COMPANYINFO_CREATE_FAIL: return { loadingLicense:false, error: action.payload };
                default: return state;
        }
}
export const regsDetailsReducer = (state= {}, action) => {
        switch(action.type) {
                case REGSGET_REQUEST: return { loadingLicense:true };
                case REGSGET_SUCCESS: return { loadingLicense:false, regsInfoDetailsGetInfo: action.payload };
                case REGSGET_FAIL: return { loadingLicense:false, error: action.payload };
                default: return state;
        }
}
export const regssaveandapproveReducer = (state= {}, action) => {
        switch(action.type) {
                case LISEREGS_REQUEST_GET_APPROVE: return { loadingLicense:true };
                case LISEREGS_SUCCESS_GET_APPROVE: return { loadingLicense:false, regssaveandapproveGetInfo: action.payload };
                case LISEREGS_REQUEST_GET_APPROVE_FAIL: return { loadingLicense:false, error: action.payload };
                default: return state;
        }
}
export const regsrejectReducer = (state= {}, action) => {
        switch(action.type) {
                case LISEREGS_REQUEST_GET_REJECT: return { loadingregsr:true };
                case LISEREGS_SUCCESS_GET_REJECT: return { loadingregsr:false, regsrejectGetInfo: action.payload };
                case LISEREGS_REQUEST_GET_REJECT_FAIL: return { loadingregsr:false, error: action.payload };
                default: return state;
        }
}
export const regsFilterReducer = (state= {}, action) => {
        switch(action.type) {
                case LISEREGS_REQUEST_GET_FILTER: return { loadingregsFilter:true };
                case LISEREGS_SUCCESS_GET_FILTER: return { loadingregsFilter:false, regsFilterGetInfo: action.payload };
                case LISEREGS_REQUEST_GET_FILTER_FAIL: return { loadingregsFilter:false, error: action.payload };
                default: return state;
        }
}
export const regsGetByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case LISEREGS_REQUEST_GET_BYID: return { loadingLicense:true };
                case LISEREGS_SUCCESS_GET_BYID: return { loadingLicense:false, regsGetByIdInfo: action.payload };
                case LISEREGS_REQUEST_GET_BYID_FAIL: return { loadingLicense:false, error: action.payload };
                default: return state;
        }
}
export const namerateUpdateReducer = (state= {}, action) => {
        switch(action.type) {
                case NAMERATE_UPDATE_REQUEST: return { loadingCompliance:true };
                case NAMERATE_UPDATE_SUCCESS: return { loadingCompliance:false, namerateUpdateInfo: action.payload };
                case NAMERATE_UPDATE_FAIL: return { loadingCompliance:false, error: action.payload };
                default: return state;
        }
}
export const docUpdateReducer = (state= {}, action) => {
        switch(action.type) {
                case DOC_UPDATE_REQUEST: return { loadingdoc:true };
                case DOC_UPDATE_SUCCESS: return { loadingdoc:false, docUpdateInfo: action.payload };
                case DOC_UPDATE_FAIL: return { loadingdoc:false, error: action.payload };
                default: return state;
        }
}
export const appDetailsUpdateReducer = (state= {}, action) => {
        switch(action.type) {
                case APPDETAILS_UPDATE_REQUEST: return { loadingAppD:true };
                case APPDETAILS_UPDATE_SUCCESS: return { loadingAppD:false, appDetailsUpdateInfo: action.payload };
                case APPDETAILS_UPDATE_FAIL: return { loadingAppD:false, error: action.payload };
                default: return state;
        }
}
export const expenseDetailsUpdateReducer = (state= {}, action) => {
        switch(action.type) {
                case EXPENSE_UPDATE_REQUEST: return { loadingExpense:true };
                case EXPENSE_UPDATE_SUCCESS: return { loadingExpense:false, expenseDetailsUpdateInfo: action.payload };
                case EXPENSE_UPDATE_FAIL: return { loadingExpense:false, error: action.payload };
                default: return state;
        }
}
export const licenseDetailsUpdateReducer = (state= {}, action) => {
        switch(action.type) {
                case LICENSE_UPDATE_REQUEST: return { loadingLicense:true };
                case LICENSE_UPDATE_SUCCESS: return { loadingLicense:false, licenseDetailsUpdateInfo: action.payload };
                case LICENSE_UPDATE_FAIL: return { loadingLicense:false, error: action.payload };
                default: return state;
        }
}
export const invoiceDetailsUpdateReducer = (state= {}, action) => {
        switch(action.type) {
                case INVOICE_UPDATE_REQUEST: return { loadingLicense:true };
                case INVOICE_UPDATE_SUCCESS: return { loadingLicense:false, invoiceDetailsUpdateInfo: action.payload };
                case INVOICE_UPDATE_FAIL: return { loadingLicense:false, error: action.payload };
                default: return state;
        }
}
export const companyInfoDetailsUpdateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYINFO_UPDATE_REQUEST: return { loadingLicense:true };
                case COMPANYINFO_UPDATE_SUCCESS: return { loadingLicense:false, companyInfoDetailsUpdateInfo: action.payload };
                case COMPANYINFO_UPDATE_FAIL: return { loadingLicense:false, error: action.payload };
                default: return state;
        }
}
export const elibraryCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case ELIBRARY_CREATE_REQUEST: return { loading:true };
                case ELIBRARY_CREATE_SUCCESS: return { loading:false, elibraryInfo: action.payload };
                case ELIBRARY_CREATE_FAIL: return { loading:false, error: action.payload };
                default: return state;
        }
}
export const elibraryGetReducer = (state= {}, action) => {
        switch(action.type) {
                case ELIBRARY_GET_REQUEST: return { loadingget:true };
                case ELIBRARY_GET_SUCCESS: return { loadingget:false, elibraryGetInfo: action.payload };
                case ELIBRARY_GET_FAIL: return { loadingebid:false, error: action.payload };
                default: return state;
        }
}    
export const elibraryGetByIDReducer = (state= {}, action) => {
        switch(action.type) {
                case ELIBRARY_REQUEST_GET_BYID: return { loadingebid:true };
                case ELIBRARY_SUCCESS_GET_BYID: return { loadingebid:false, elibraryGetByIDInfo: action.payload };
                case ELIBRARY_REQUEST_GET_BYID_FAIL: return { loadingebid:false, error: action.payload };
                default: return state;
        }
}
export const elibraryUpdateByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case ELIBRARY_GET_REQUEST_UPDATE_BY_ID: return { loadingu:true };
                case ELIBRARY_GET_SUCCESS_UPDATE_BY_ID: return { loadingu:false, elibraryInfoUpdateId: action.payload };
                case ELIBRARY_GET_FAIL_UPDATE_BY_ID: return { loadingu:false, error: action.payload };
                default: return state;
        }
}
export const elibraryRejectedListReducer = (state= {}, action) => {
        switch(action.type) {
                case ELIBRARY_REQUEST_GET_REJECT_LIST: return { loadingerl:true };
                case ELIBRARY_SUCCESS_GET_REJECT_LIST: return { loadingerl:false, elibraryRejectedLInfo: action.payload };
                case ELIBRARY_GET_FAIL_REJECT_LIST: return { loadingerl:false, error: action.payload };
                default: return state;
        }
}
export const elibrarysaveandapproveIDReducer = (state= {}, action) => {
        switch(action.type) {
                case ELIBRARY_REQUEST_SAVE_APPROVE: return { loadingesa:true };
                case ELIBRARY_SUCCESS_SAVE_APPROVE: return { loadingesa:false, elibrarySAInfo: action.payload };
                case ELIBRARY_REQUEST_SAVE_APPROVE_FAIL: return { loadingesa:false, error: action.payload };
                default: return state;
        }
}
export const elibraryRejectReducer = (state= {}, action) => {
        switch(action.type) {
                case ELIBRARY_REQUEST_GET_REJECT: return { loadinger:true };
                case ELIBRARY_SUCCESS_GET_REJECT: return { loadinger:false, elibraryReject: action.payload };
                case ELIBRARY_REQUEST_GET_REJECT_FAIL: return { loadinger:false, error: action.payload };
                default: return state;
        }
}
export const companytab1CreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYTAB1_CREATE_REQUEST: return { loadingtab1:true };
                case COMPANYTAB1_CREATE_SUCCESS: return { loadingtab1:false, companytab1CreateInfo: action.payload };
                case COMPANYTAB1_CREATE_FAIL: return { loadingtab1:false, error: action.payload };
                default: return state;
        }
}
export const companytab2CreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYTAB2_CREATE_REQUEST: return { loadingtab2:true };
                case COMPANYTAB2_CREATE_SUCCESS: return { loadingtab2:false, companytab2CreateInfo: action.payload };
                case COMPANYTAB2_CREATE_FAIL: return { loadingtab2:false, error: action.payload };
                default: return state;
        }
}
export const companytab3CreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYTAB3_CREATE_REQUEST: return { loadingtab3:true };
                case COMPANYTAB3_CREATE_SUCCESS: return { loadingtab3:false, companytab3CreateInfo: action.payload };
                case COMPANYTAB3_CREATE_FAIL: return { loadingtab3:false, error: action.payload };
                default: return state;
        }
}
export const companytab4CreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYTAB4_CREATE_REQUEST: return { loadingtab4:true };
                case COMPANYTAB4_CREATE_SUCCESS: return { loadingtab4:false, companytab4CreateInfo: action.payload };
                case COMPANYTAB4_CREATE_FAIL: return { loadingtab4:false, error: action.payload };
                default: return state;
        }
}
export const companytab5CreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYTAB5_CREATE_REQUEST: return { loadingtab5:true };
                case COMPANYTAB5_CREATE_SUCCESS: return { loadingtab5:false, companytab5CreateInfo: action.payload };
                case COMPANYTAB5_CREATE_FAIL: return { loadingtab5:false, error: action.payload };
                default: return state;
        }
}
export const companytab6CreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYTAB6_CREATE_REQUEST: return { loadingtab6:true };
                case COMPANYTAB6_CREATE_SUCCESS: return { loadingtab6:false, companytab6CreateInfo: action.payload };
                case COMPANYTAB6_CREATE_FAIL: return { loadingtab6:false, error: action.payload };
                default: return state;
        }
}
export const companytab7CreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYTAB7_CREATE_REQUEST: return { loadingtab7:true };
                case COMPANYTAB7_CREATE_SUCCESS: return { loadingtab7:false, companytab7CreateInfo: action.payload };
                case COMPANYTAB7_CREATE_FAIL: return { loadingtab7:false, error: action.payload };
                default: return state;
        }
}
export const companyGetByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_REQUEST_GET_BYID: return { loadingcompanygetbyid:true };
                case COMPANY_SUCCESS_GET_BYID: return { loadingcompanygetbyid:false, companyGetByIdInfo: action.payload };
                case COMPANY_REQUEST_GET_BYID_FAIL: return { loadingcompanygetbyid:false, error: action.payload };
                default: return state;
        }
}
export const companyLCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYL_CREATE_REQUEST: return { loadingtab7:true };
                case COMPANYL_CREATE_SUCCESS: return { loadingtab7:false, companyLCreateInfo: action.payload };
                case COMPANYL_CREATE_FAIL: return { loadingtab7:false, error: action.payload };
                default: return state;
        }
}
export const companyLGetReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYL_GET_REQUEST: return { loadingLicenseget:true };
                case COMPANYL_GET_SUCCESS: return { loadingLicenseget:false, companyLGetInfo: action.payload };
                case COMPANYL_GET_FAIL: return { loadingLicenseget:false, error: action.payload };
                default: return state;
        }
}
export const companyGetTableReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_GET_TABLE_REQUEST: return { loadingcompanytable:true };
                case COMPANY_GET_TABLE_SUCCESS: return { loadingcompanytable:false, companyGetTableInfo: action.payload };
                case COMPANY_GET_TABLE_FAIL: return { loadingcompanytable:false, error: action.payload };
                default: return state;
        }
}
export const companyLGetByIDReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANYL_GET_REQUEST_BY_ID: return { loadingcompanytable:true };
                case COMPANYL_GET_SUCCESS_BY_ID: return { loadingcompanytable:false, companyLGetByIdInfo: action.payload };
                case COMPANYL_GET_FAIL_BY_ID: return { loadingcompanytable:false, error: action.payload };
                default: return state;
        }
}
export const companyLsaveandapproveIDReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_LICENSE_REQUEST_GET_APPROVE: return { loadingcompanysa:true };
                case COMPANY_LICENSE_SUCCESS_GET_APPROVE: return { loadingcompanysa:false, companyLSAInfo: action.payload };
                case COMPANY_LICENSE_REQUEST_GET_APPROVE_FAIL: return { loadingcompanysa:false, error: action.payload };
                default: return state;
        }
}
export const companyLFilterReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_LICENSE_REQUEST_GET_FILTER: return { loadingcompanyf:true };
                case COMPANY_LICENSE_SUCCESS_GET_FILTER: return { loadingcompanyf:false, companyLFilterInfo: action.payload };
                case COMPANY_LICENSE_GET_FAIL_FILTER: return { loadingcompanyf:false, error: action.payload };
                default: return state;
        }
}
export const companySaveApproveReducer = (state= {}, action) => {  /////company save and approve not implemented in backendyet
        switch(action.type) {
                case COMPANY_REQUEST_SAVE_APPROVE: return { loadingcompanysaveapprove:true };
                case COMPANY_SUCCESS_SAVE_APPROVE: return { loadingcompanysaveapprove:false, companysaveapproveInfo: action.payload };
                case COMPANY_REQUEST_SAVE_APPROVE_FAIL: return { loadingcompanysaveapprove:false, error: action.payload };
                default: return state;
        }
}
export const complianceGetttingByCSIDReducer = (state= {}, action) => { /////getting compliance by state and category id
        switch(action.type) {
                case COMLIANCE_REQUEST_GET_BY_CSID: return { loadingcs:true };
                case COMLIANCE_SUCCESS_GET_BY_CSID: return { loadingcs:false, complianceGetttingByCSIDInfo: action.payload };
                case COMLIANCE_GET_BY_CSID_FAIL: return { loadingcs:false, error: action.payload };
                default: return state;
        }
}
export const companyinteractionCreaeteReducer = (state= {}, action) => { 
        switch(action.type) {
                case COMPANY_INERACTION_CREATE_REQUEST: return { loadingcic:true };
                case COMPANY_INERACTION_CREATE_SUCCESS: return { loadingcic:false, companyinteractionCreateInfo: action.payload };
                case COMPANY_INERACTION_CREATE_FAIL: return { loadingcic:false, error: action.payload };
                default: return state;
        }
}
export const companyinteractionGetByIdReducer = (state= {}, action) => { 
        switch(action.type) {
                case COMPANY_INTERACTION_REQUEST_GET_BYID: return { loadingcigbid:true };
                case COMPANY_INTERACTION_SUCCESS_GET_BYID: return { loadingcigbid:false, companyinteractionGetByIDInfo: action.payload };
                case COMPANY_INTERACTION_FAIL_GET_BYID: return { loadingcigbid:false, error: action.payload };
                default: return state;
        }
}
export const companyinteractionUpdateByIdReducer = (state= {}, action) => { 
        switch(action.type) {
                case COMPANY_INTERACTION_REQUEST_UPDATE_BYID: return { loadingciubd:true };
                case COMPANY_INTERACTION_SUCCESS_UPDATE_BYID: return { loadingciubd:false, companyinteractionUpdateByIDInfo: action.payload };
                case COMPANY_INTERACTION_FAIL_UPDATE_BYID: return { loadingciubd:false, error: action.payload };
                default: return state;
        }
}
export const companyinteractionTableGetReducer = (state= {}, action) => { 
        switch(action.type) {
                case COMPANY_INTERACTION_GET_TABLE_REQUEST: return { loadingcit:true };
                case COMPANY_INTERACTION_GET_TABLE_SUCCESS: return { loadingcit:false, companyinteractionTableGetInfo: action.payload };
                case COMPANY_INTERACTION_GET_TABLE_FAIL: return { loadingcit:false, error: action.payload };
                default: return state;
        }
}
export const companyinteractionSAReducer = (state= {}, action) => { 
        switch(action.type) {
                case COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE: return { loadingcisa:true };
                case COMPANY_LICENSE_INERACTION_SUCCESS_GET_APPROVE: return { loadingcisa:false, companyinteractionSAGetInfo: action.payload };
                case COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE_FAIL: return { loadingcisa:false, error: action.payload };
                default: return state;
        }
}
export const companyFilterIntractProfileReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_INTERACT_REQUEST_GET_FILTER: return { loadingcompanyintract:true };
                case COMPANY_INTERACT_SUCCESS_GET_FILTER
                : return { loadingcompanyintract:false, companyFilterInteractProfileInfo: action.payload };
                case COMPANY_INTERACT_GET_FAIL_FILTER: return { loadingcompanyintract:false, error: action.payload };
                default: return state;
        }
}
export const companyInteractionLicenseGetOnCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_INTERACTION_LICENSE_GET_REQUEST: return { loadingcil:true };
                case COMPANY_INTERACTION_LICENSE_GET_SUCCESS: return { loadingcil:false, companyInteractionLGetOnCreateInfo: action.payload };
                case COMPANY_INTERACTION_LICENSE_CREATE_FAIL: return { loadingcil:false, error: action.payload };
                default: return state;
        }
}
export const companyInteractionLicenseCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_INTERACTION_LIC_CREATE_REQUEST: return { loadingtab7:true };
                case COMPANY_INTERACTION_LIC_CREATE_SUCCESS: return { loadingtab7:false, companyInteractionLicCreateInfo: action.payload };
                case COMPANY_INTERACTION_LIC_CREATE_FAIL: return { loadingtab7:false, error: action.payload };
                default: return state;
        }
}
export const companyinteractionLicGetByIdReducer = (state= {}, action) => { 
        switch(action.type) {
                case COMPANY_INTERACTION_LIC_REQUEST_GET_BYID: return { loadingcigbid:true };
                case COMPANY_INTERACTION_LIC_SUCCESS_GET_BYID: return { loadingcigbid:false, companyinteractionLicGetByIDInfo: action.payload };
                case COMPANY_INTERACTION_LIC_FAIL_GET_BYID: return { loadingcigbid:false, error: action.payload };
                default: return state;
        }
}
export const companyinteractionLicUpdateByIdReducer = (state= {}, action) => { 
        switch(action.type) {
                case COMPANY_INTERACTION_LIC_REQUEST_UPDATE_BYID: return { loadingciubd:true };
                case COMPANY_INTERACTION_LIC_SUCCESS_UPDATE_BYID: return { loadingciubd:false, companyinteractionLicUpdateByIDInfo: action.payload };
                case COMPANY_INTERACTION_LIC_FAIL_UPDATE_BYID: return { loadingciubd:false, error: action.payload };
                default: return state;
        }
}
export const companyinteractionLicSAReducer = (state= {}, action) => { 
        switch(action.type) {
                case COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE: return { loadingcisap:true };
                case COMPANY_PROFILE_INERACTION_SUCCESS_GET_APPROVE: return { loadingcisap:false, companyinteractionLicSAInfo: action.payload };
                case COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE_FAIL: return { loadingcisap:false, error: action.payload };
                default: return state;
        }
}        
export const companyFilterIntractReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_LICENSE_INTERACT_REQUEST_GET_FILTER: return { loadingcompanyintract:true };
                case COMPANY_LICENSE_INTERACT_SUCCESS_GET_FILTER
                : return { loadingcompanyintract:false, companyFilterInteractInfo: action.payload };
                case COMPANY_LICENSE_INTERACT_GET_FAIL_FILTER: return { loadingcompanyintract:false, error: action.payload };
                default: return state;
        }
}
export const companyAssignCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_ASSIGN_CREATE_REQUEST: return { loadingtabassignc:true };
                case COMPANY_ASSIGN_CREATE_SUCCESS: return { loadingtabassignc:false, companyAssignCreateInfo: action.payload };
                case COMPANY_ASSIGN_CREATE_FAIL: return { loadingtabassignc:false, error: action.payload };
                default: return state;
        }
}
export const companyAssignGetByIdReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_ASSIGNREQUEST_GET_BYID: return { loadingtabassigncbid:true };
                case COMPANY_ASSIGNSUCCESS_GET_BYID: return { loadingtabassigncbid:false, companyAssignGetByIdInfo: action.payload };
                case COMPANY_ASSIGNFAIL_GET_BYID: return { loadingtabassigncbid:false, error: action.payload };
                default: return state;
        }
}
export const companyAssignTableReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_ASSIGN_GET_REQUEST: return { loadingcat:true };
                case COMPANY_ASSIGN_GET_SUCCESS: return { loadingcat:false, companyAssignTableInfo: action.payload };
                case COMPANY_ASSIGN_TABLE_FAIL: return { loadingcat:false, error: action.payload };
                default: return state;
        }
}
export const companyAssignUpdateByIdReducer = (state= {}, action) => { 
        switch(action.type) {
                case COMPANY_ASSIGN_REQUEST_UPDATE_BYID: return { loadingciubd:true };
                case COMPANY_ASSIGN_SUCCESS_UPDATE_BYID: return { loadingciubd:false, companyAssignUpdateByIDInfo: action.payload };
                case COMPANY_ASSIGN_FAIL_UPDATE_BYID: return { loadingciubd:false, error: action.payload };
                default: return state;
        }
}
export const companyAssignGetOnCreateReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_ASSIGN_ON_CREATE_GET_REQUEST: return { loadingcagoc:true };
                case COMPANY_ASSIGN_ON_CREATE_GET_SUCCESS: return { loadingcagoc:false, companyAssignGetOnCreateInfo: action.payload };
                case COMPANY_ASSIGN_ON_CREATE_CREATE_FAIL: return { loadingcagoc:false, error: action.payload };
                default: return state;
        }
}
export const companyViewAllAssignFilterReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_ASSIGN_REQUEST_GET_FILTER: return { loadingcompanyava:true };
                case COMPANY_ASSIGN_SUCCESS_GET_FILTER
                : return { loadingcompanyava:false, companyFilterVAAInfo: action.payload };
                case COMPANY_ASSIGN_GET_FAIL_FILTER: return { loadingcompanyava:false, error: action.payload };
                default: return state;
        }
}
export const companyAssignFilterReducer = (state= {}, action) => {
        switch(action.type) {
                case COMPANY_ASSIGNA_REQUEST_GET_FILTER: return { loadingcompanyaf:true };
                case COMPANY_ASSIGNA_SUCCESS_GET_FILTER
                : return { loadingcompanyaf:false, companyFilterAAInfo: action.payload };
                case COMPANY_ASSIGNA_GET_FAIL_FILTER: return { loadingcompanyaf:false, error: action.payload };
                default: return state;
        }
}
















    










