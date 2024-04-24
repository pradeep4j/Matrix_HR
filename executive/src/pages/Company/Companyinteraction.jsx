import React, { useState, useEffect, useRef } from 'react';
// import {Space} from "antd";
// import {EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { companyInractionTableGet, licenseCompanyInteractionGetOnCreate} from "../../store/actions/otherActions";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Loading1 from '../../components/layout/Loading1';
import CompanyinteractionForm from './CompanyinteractionForm'
import Companyinteractionlicense from './Companyinteractionlicense'
import Companylicense from './Companylicense';
const Companyinteraction = () => {
    const dispatch = useDispatch();
    // useEffect(() => {

    // },[disptach])
    const profiles = () => {
        setTimeout(() => {
            dispatch(companyInractionTableGet());
        }, 2000);
    }
    const licenses = () => {
        setTimeout(() => {
            dispatch(licenseCompanyInteractionGetOnCreate());
        }, 2000);
    }
    return (
    <React.Fragment>
         <div className="row">
            <div className="col-lg-12">
                <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-12 col-lg-12 col-12 border-end border-md-bottom" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark active"  id="pills-home-tab-company-interaction" data-bs-toggle="pill" data-bs-target="#pills-home-company-interaction" type="button" role="tab" aria-controls="pills-home-company-interaction" aria-selected="true" /*onClick={createnew}*/> <ContentPasteIcon /> New </button>
                                </li>
                                {/* <li className="nav-item col-md-6 col-lg-6 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab-company-interaction" data-bs-toggle="pill" data-bs-target="#pills-profile-company-interaction" type="button" role="tab" aria-controls="pills-profile-company-interaction" aria-selected="false" ><ContentPasteIcon /> History</button>
                                </li> */}
                            </ul>
                    
                       
                    <div className="tab-pane fade show" id="pills-home-company-interaction" role="tabpanel"  aria-labelledby="pills-home-tab-company-interaction">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                    <li className="nav-item col-md-6 col-lg-6 col-12 border-end border-md-bottom" role="presentation">
                                        <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab-creat1" data-bs-toggle="pill" data-bs-target="#pills-home-creat1" type="button" role="tab" aria-controls="pills-home-creat1" aria-selected="true" onClick={profiles}> Profile </button>
                                    </li>
                                    <li className="nav-item col-md-6 col-lg-6 col-12 border-end " role="presentation">
                                        <button className="nav-link w-100 rounded-0 text-dark " id="pills-profile-tab-creat-li1" data-bs-toggle="pill" data-bs-target="#pills-profile-creat-li1" type="button" role="tab" aria-controls="pills-profile-creat-li1" aria-selected="false" onClick={licenses}>Licenses</button>
                                    </li>
                                </ul>
                            </div>    
                        </div>    
                        <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home-creat1" role="tabpanel" aria-labelledby="pills-home-tab-creat1">
                                        <div className="row">
                                            <div className="col-lg-12">
                                            <CompanyinteractionForm />
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="tab-pane fade show" id="pills-profile-creat-li1" role="tabpanel" aria-labelledby="pills-profile-tab-creat-li1" >
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <Companyinteractionlicense />
                                            </div> 
                                        </div>    
                                    </div>
                        </div> 
                </div>
                {/* <div className="tab-pane fade " id="pills-profile-company-interaction" role="tabpanel"  aria-labelledby="pills-profile-tab-company-interaction">
                    <div className="tab-content" id="pills-tabContent">
                            <div className="row">
                                <div className="col-lg-12">
                                    Pradeep Maurya
                                </div>
                            </div>    
                    </div>    
                </div> */}
            </div>          
        </div>        
    </React.Fragment>            
    )
}
export default Companyinteraction;
