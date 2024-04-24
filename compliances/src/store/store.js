import {createStore,combineReducers,applyMiddleware/*,compose*/} from 'redux';  // configureStore will be used to create store. combineReducers will be used for combining all reducers, applyMiddlware will be used with redux-thunk to apply thunk middlewares if needs.
import thunk from 'redux-thunk';  // if after getting dispatch from action if  it returns function thunk will apply ascynchronously some logic as middleware then give it to reducer.
import { composeWithDevTools } from "redux-devtools-extension";

import {
        userLoginReducer,
} from './reducers/authReducers';  // imporeting auth user reducers

import {
        auditorReducer,
        executiveReducer,
        auditorOnCreateReducer,
        auditorChecklistFilterReducer,
        auditorChecklistOnCreateAuditReducer,
        auditAllFilterReducer,
        auditOnGoingReducer,
        auditOverDueReducer,
        categoryReducer,
        categoryGetReducer,
        categoryEditReducer,
        categoryDeleteReducer,
        stateGetReducer,
        userGetReducer,
        notificationCreateReducer,
        userCreateReducer,
        userEditReducer,
        userDeleteReducer,
        branchGetReducer,
        companyGetReducer,
        complianceGetReducer,
        companyCreateReducer,
        complianceCreateReducer,
        complianceGetByIdReducer,
        complianceGetOnCreateReducer,        
        notificationGetReducer,
        complianceUpdateByIdReducer,
        complianceApproveReducer,
        complianceRejectReducer,
        complianceGetAllReducer,
        complianceFilterCreateReducer,
        complianceFilterRejectReducer,
        complianceFilterApproveReducer,
        complianceFilterAllReducer,
        checklistReducer,
        checklistGetReducer,
        checklistUpdateByIdReducer,
        checklistGetOnCreateReducer,
        checklistGetByIdReducer,
        checklistGetAllReducer,
        checklistApproveReducer,
        checklistFilterAllReducer,
        checklistFilterCreateReducer,
        checklistGetApproveReducer,
        checklistFilterApproveReducer,
        checklistGetOnRejectReducer,
        checklistRejectedReducer,
        checklistFilterRejectReducer,
        checklistAllComplianceReducer,
        auditAllReducer,
        namerateCreateReducer,
        docCreateReducer,
        appDetailsReducer,
        expenseDetailsReducer,
        licenseDetailsReducer,
        invoiceDetailsReducer,
        companyInfoDetailsReducer,
        regsDetailsReducer,
        regssaveandapproveReducer,
        regsFilterReducer,
        regsGetByIdReducer,
        regsrejectReducer,
        namerateUpdateReducer,
        docUpdateReducer,
        appDetailsUpdateReducer,
        expenseDetailsUpdateReducer,
        licenseDetailsUpdateReducer,
        invoiceDetailsUpdateReducer,
        companyInfoDetailsUpdateReducer,
        elibraryCreateReducer,
        elibraryGetReducer,
        elibraryGetByIDReducer,
        elibraryUpdateByIdReducer,
        elibraryRejectReducer,
        elibrarysaveandapproveIDReducer,
        elibraryRejectedListReducer,
        companytab1CreateReducer,
        companytab2CreateReducer,
        companytab3CreateReducer,
        companytab4CreateReducer,
        companytab5CreateReducer,
        companytab6CreateReducer,
        companytab7CreateReducer,
        companyLCreateReducer,
        companyGetTableReducer,
        companyGetByIdReducer,
        companyLGetReducer,
        companyLGetByIDReducer,
        companyLsaveandapproveIDReducer,
        companySaveApproveReducer,/////company save and approve not implemented in backendyet
        complianceGetttingByCSIDReducer,
        companyinteractionCreaeteReducer,
        companyinteractionGetByIdReducer,
        companyinteractionUpdateByIdReducer,
        companyinteractionTableGetReducer,
        companyinteractionLicSAReducer,
        companyFilterIntractProfileReducer,
        companyInteractionLicenseCreateReducer,
        companyInteractionLicenseGetOnCreateReducer,
        companyinteractionLicGetByIdReducer,
        companyinteractionLicUpdateByIdReducer,
        companyinteractionSAReducer,
        companyFilterIntractReducer,
        companyAssignCreateReducer,
        companyAssignGetByIdReducer,
        companyAssignTableReducer,
        companyAssignUpdateByIdReducer,
        companyAssignGetOnCreateReducer,
        companyLFilterReducer,
        companyViewAllAssignFilterReducer,
        companyAssignFilterReducer
} from './reducers/otherReducers';  // imporeting auth user reducers

const reducer = combineReducers({
        getAuditor:auditorReducer,
        getExecutive:executiveReducer,
        createOnAudit:auditorOnCreateReducer,
        auditFilterChecklist:auditorChecklistFilterReducer,
        onCreateChecklistAudit:auditorChecklistOnCreateAuditReducer,
        filterAllAudit:auditAllFilterReducer,
        onGoingAudit:auditOnGoingReducer,
        overDueAudit:auditOverDueReducer,
        userLogin: userLoginReducer,
        catCreate:categoryReducer,
        catGet:categoryGetReducer,
        catEdit:categoryEditReducer,
        catDelete:categoryDeleteReducer,
        getState:stateGetReducer,
        userGet:userGetReducer,
        notificationCreate:notificationCreateReducer,
        userCreate:userCreateReducer,
        userEdits:userEditReducer,
        userDeletes:userDeleteReducer,
        checklist:checklistReducer,
        checklistGet:checklistGetReducer,
        getBranch:branchGetReducer,
        getCompney:companyGetReducer,
        getCompliance:complianceGetReducer,
        createCompany:companyCreateReducer,
        createCompliance:complianceCreateReducer,
        getttingNotification:notificationGetReducer,
        complianceId:complianceGetByIdReducer,
        getComplianceOnCreate:complianceGetOnCreateReducer,
        complianceByIdUpdate:complianceUpdateByIdReducer,
        approveCompliance:complianceApproveReducer,
        rejectCompliance:complianceRejectReducer,
        getComplianceall:complianceGetAllReducer,
        getComplianceCreateFilter:complianceFilterCreateReducer,
        getComplianceRejectFilter:complianceFilterRejectReducer,
        getComplianceApproveFilter:complianceFilterApproveReducer,
        complianceAllFiltered:complianceFilterAllReducer,
        checklistByIdUpdate:checklistUpdateByIdReducer,
        getCheckOnCreate:checklistGetOnCreateReducer,
        checklistId:checklistGetByIdReducer,
        getChecklistall:checklistGetAllReducer,
        getChecklistApprove:checklistGetApproveReducer,
        approveChecklist:checklistApproveReducer,
        filterAllChecklist:checklistFilterAllReducer,
        filterCreateChecklist:checklistFilterCreateReducer,
        filterApproveChecklist:checklistFilterApproveReducer,
        rejectChecklist:checklistGetOnRejectReducer,
        rejectedChecklist:checklistRejectedReducer,
        rejectFilterChecklist:checklistFilterRejectReducer,
        checklistAllComliance:checklistAllComplianceReducer,
        allAuditGet:auditAllReducer,
        namerate:namerateCreateReducer,
        createDoc:docCreateReducer,
        createAppD:appDetailsReducer,
        createExpense:expenseDetailsReducer,
        createLicense:licenseDetailsReducer,
        createInvoice:invoiceDetailsReducer,
        createCompanyInfo:companyInfoDetailsReducer,
        getRegs:regsDetailsReducer,
        regssaveandapprove:regssaveandapproveReducer,
        regsFilter:regsFilterReducer,
        getRegsById:regsGetByIdReducer,
        getRejectRegs:regsrejectReducer,
        namerateU:namerateUpdateReducer,
        updateDoc:docUpdateReducer,
        updateAppD:appDetailsUpdateReducer,
        updateExpense:expenseDetailsUpdateReducer,
        updateLicense:licenseDetailsUpdateReducer,
        updatecreateInvoice:invoiceDetailsUpdateReducer,
        updateCompanyInfo:companyInfoDetailsUpdateReducer,
        createElibrary:elibraryCreateReducer,
        elibraryGet:elibraryGetReducer,
        elibraryGetByIds:elibraryGetByIDReducer,
        elibraryUpdateByIds:elibraryUpdateByIdReducer,
        rejectsEl:elibraryRejectReducer,
        SAEl:elibrarysaveandapproveIDReducer,
        listElibraryRejected:elibraryRejectedListReducer,
        createCompanytab1:companytab1CreateReducer,
        createCompanytab2:companytab2CreateReducer,
        createCompanytab3:companytab3CreateReducer,
        createCompanytab4:companytab4CreateReducer,
        createCompanytab5:companytab5CreateReducer,
        createCompanytab6:companytab6CreateReducer,
        createCompanytab7:companytab7CreateReducer,
        createCompL:companyLCreateReducer,
        getCompanyTable:companyGetTableReducer,
        getByIdCompany:companyGetByIdReducer,
        getCompL:companyLGetReducer,
        getCompanySA:companyLsaveandapproveIDReducer,
        getCompLById:companyLGetByIDReducer,
        companyLFilter:companyLFilterReducer,
        saveapproveCompany:companySaveApproveReducer,
        getCompbyCS:complianceGetttingByCSIDReducer,
        companyIntract:companyinteractionCreaeteReducer,
        companyinteractGetById:companyinteractionGetByIdReducer,
        companyinteractUpdateById:companyinteractionUpdateByIdReducer,
        companyinteractTableGet:companyinteractionTableGetReducer,
        companyIntractPSA:companyinteractionLicSAReducer,
        companyProfileFilter:companyFilterIntractProfileReducer,
        companyinteractLicCreate:companyInteractionLicenseCreateReducer,
        companyinteractLicOnGetCreate:companyInteractionLicenseGetOnCreateReducer,
        companyinteractLicById:companyinteractionLicGetByIdReducer,
        companyinteractLicUpdateById:companyinteractionLicUpdateByIdReducer,
        companyLicSA:companyinteractionSAReducer,
        companyIntractFilter:companyFilterIntractReducer,
        companyCreateAssign:companyAssignCreateReducer,
        companyGetByIdeAssign:companyAssignGetByIdReducer,
        companyAssignTable:companyAssignTableReducer,
        companyaissiguById:companyAssignUpdateByIdReducer,
        companyGetAssignOnCreate:companyAssignGetOnCreateReducer,
        compamyVAAFilter:companyViewAllAssignFilterReducer,
        companyAssignF:companyAssignFilterReducer
        
});

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) :"";

const initialState = {
        userLogin : {userInfo: userInfoFromStorage},
       // category

};

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));//this is also correct
//const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk))); // this is also correct

export default store;