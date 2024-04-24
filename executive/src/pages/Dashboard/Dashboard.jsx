import React,{useState,useEffect} from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import { FormLabel,styled} from '@mui/material';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table ,Modal,Form,message} from 'antd';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import {usersGet,companyTableGet,auditorGet,checklistGetonCreateAudit,auditGetDataAll,ongoingAudits,gettingAuditorOverdueDashboard} from "../../store/actions/otherActions";//outgoingAudit, overDueAudit
import { useDispatch,useSelector } from 'react-redux';
import DashboardTableAudit from "./DashboardTableAudit";
import DashboardTableCompany from "./DashboardTableCompany";
import DashboardTableNotification from "./DashboardTableNotification";
const Dashboard = () => {
    const dispatch = useDispatch();
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  // All executives
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable; // All company
    const allAuditGet = useSelector((state) => state.allAuditGet);
    const { getAllAudit } = allAuditGet; /// All audit 
    const getAuditor = useSelector((state) => state.getAuditor);
    const { auditorInfo } = getAuditor;  // All auditor
    const onCreateChecklistAudit = useSelector((state) => state.onCreateChecklistAudit);
    const { auditorChecklistInfoOncreate } = onCreateChecklistAudit; //all checklist except rejected
    const onGoingAudit = useSelector((state) => state.onGoingAudit);
    const { auditOnGoingInfo } = onGoingAudit; //on going audits
    // alert(auditOnGoingInfo?.length)
    const overDueAudit = useSelector((state) => state.overDueAudit);
    const { auditOverdueInfos } = overDueAudit; //on going audits

    const companyCount = companyGetTableInfo?.length?companyGetTableInfo?.length:0;
    const executiveCount = usersInfo?.length?usersInfo?.length:0;
    const auditorCount = auditorInfo?.length?auditorInfo?.length:0;
    const auditTotalCount = getAllAudit?.length?getAllAudit?.length:0;
    const checklistCount = auditorChecklistInfoOncreate?.length?auditorChecklistInfoOncreate?.length:0;
    const auditOnGoingCount = auditOnGoingInfo?.length?auditOnGoingInfo?.length:0;
    const auditOverDueCount = auditOverdueInfos?auditOverdueInfos:0;
    // alert(auditOverDueCount)

    useEffect(()=>{
        dispatch(usersGet());
        dispatch(companyTableGet());
        dispatch(auditGetDataAll())
        dispatch(auditorGet());
        dispatch(checklistGetonCreateAudit());
        dispatch(ongoingAudits());
        dispatch(gettingAuditorOverdueDashboard())
    },[dispatch]);
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className='user_dashboard_box active'>
                                <h3>
                                    Total Companies
                                </h3>
                                <div className='user_box_title'>
                                    <h3>{companyCount}</h3>
                                    <div className='user_data_descrip'>
                                        <div className='d-block'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 15.8334V4.16675M9.99999 4.16675L4.16666 10.0001M9.99999 4.16675L15.8333 10.0001" stroke="#6CE9A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>  <p className='d-inline-block mb-0'>40%</p>
                                        </div>
                                        <span className='d-block text-white'>
                                            Last Month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className='user_dashboard_box bg-white'>
                                <h3 className='text-dark'>
                                    Total Executives
                                </h3>
                                <div className='user_box_title'>
                                    <h3 className='text-dark'>{executiveCount}</h3>
                                    <div className='user_data_descrip'>
                                        <div className='d-block'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 15.8334V4.16675M9.99999 4.16675L4.16666 10.0001M9.99999 4.16675L15.8333 10.0001" stroke="#6CE9A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>  <p className='d-inline-block mb-0'>40%</p>
                                        </div>
                                        <span className='d-block'>
                                            Last Month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-12">
                            <div className='user_dashboard_box bg-white'>
                                <h3 className='text-dark'>
                                    Total Auditors
                                </h3>
                                <div className='user_box_title'>
                                    <h3 className='text-dark'>{auditorCount}</h3>
                                    <div className='user_data_descrip'>
                                        <div className='d-block'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 15.8334V4.16675M9.99999 4.16675L4.16666 10.0001M9.99999 4.16675L15.8333 10.0001" stroke="#6CE9A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>  <p className='d-inline-block mb-0'>40%</p>
                                        </div>
                                        <span className='d-block'>
                                            Last Month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-6 col-lg-3 col-12">
                            <div className='user_dashboard_box bg-white'>
                                <h3 className='text-dark'>
                                    Due Dates
                                </h3>
                                <div className='user_box_title'>
                                    <h3 className='text-dark'>25</h3>
                                    <div className='user_data_descrip'>
                                        <div className='d-block'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 15.8334V4.16675M9.99999 4.16675L4.16666 10.0001M9.99999 4.16675L15.8333 10.0001" stroke="#6CE9A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>  <p className='d-inline-block mb-0'>40%</p>
                                        </div>
                                        <span className='d-block'>
                                            Last Month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className='user_dashboard_box bg-white'>
                                <h3 className='text-dark'>
                                   Over Due
                                </h3>
                                <div className='user_box_title'>
                                    <h3 className='text-dark'>{auditOverDueCount}</h3>
                                    <div className='user_data_descrip'>
                                        <div className='d-block'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 15.8334V4.16675M9.99999 4.16675L4.16666 10.0001M9.99999 4.16675L15.8333 10.0001" stroke="#6CE9A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>  <p className='d-inline-block mb-0'>40%</p>
                                        </div>
                                        <span className='d-block'>
                                            Last Month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className='user_dashboard_box bg-white'>
                                <h3 className='text-dark'>
                                    Total Checklist
                                </h3>
                                <div className='user_box_title'>
                                    <h3 className='text-dark'>{checklistCount}</h3>
                                    <div className='user_data_descrip'>
                                        <div className='d-block'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 15.8334V4.16675M9.99999 4.16675L4.16666 10.0001M9.99999 4.16675L15.8333 10.0001" stroke="#6CE9A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>  <p className='d-inline-block mb-0'>40%</p>
                                        </div>
                                        <span className='d-block'>
                                            Last Month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className='user_dashboard_box bg-white'>
                                <h3 className='text-dark'>
                                    Total Audit
                                </h3>
                                <div className='user_box_title'>
                                    <h3 className='text-dark'>{auditTotalCount}</h3>
                                    <div className='user_data_descrip'>
                                        <div className='d-block'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 15.8334V4.16675M9.99999 4.16675L4.16666 10.0001M9.99999 4.16675L15.8333 10.0001" stroke="#6CE9A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>  <p className='d-inline-block mb-0'>40%</p>
                                        </div>
                                        <span className='d-block'>
                                            Last Month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12">
                            <div className='user_dashboard_box bg-white'>
                                <h3 className='text-dark'>
                                    Ongoing Audit
                                </h3>
                                <div className='user_box_title'>
                                    <h3 className='text-dark'>{auditOnGoingCount}</h3>
                                    <div className='user_data_descrip'>
                                        <div className='d-block'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.99999 15.8334V4.16675M9.99999 4.16675L4.16666 10.0001M9.99999 4.16675L15.8333 10.0001" stroke="#6CE9A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>  <p className='d-inline-block mb-0'>40%</p>
                                        </div>
                                        <span className='d-block'>
                                            Last Month
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-6'>
                            <DashboardTableCompany />
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            {/* <div className="card p-3">
                                <div className="card-boy">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th colSpan={2}>Notification (25)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>You have a bug that needs to be the fix</td>
                                                <td className='text-muted'>20 Minuts Ago</td>
                                            </tr>
                                            <tr>
                                                <td>You have a bug that needs to be the fix</td>
                                                <td className='text-muted'>20 Minuts Ago</td>
                                            </tr>
                                            <tr>
                                                <td>You have a bug that needs to be the fix</td>
                                                <td className='text-muted'>20 Minuts Ago</td>
                                            </tr>
                                            <tr>
                                                <td>You have a bug that needs to be the fix</td>
                                                <td className='text-muted'>20 Minuts Ago</td>
                                            </tr>
                                            <tr>
                                                <td>You have a bug that needs to be the fix</td>
                                                <td className='text-muted'>20 Minuts Ago</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> */}
                            <DashboardTableNotification />
                        </div>
                        <div className='col-md-12 col-lg-12 col-xl-12'>
                            <DashboardTableAudit />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;