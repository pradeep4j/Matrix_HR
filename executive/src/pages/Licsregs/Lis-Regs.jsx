import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import { FormLabel,styled} from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined } from '@ant-design/icons';
import {stateGets,usersGet,branchGet,companyGet,nameRateCreate,documentCollection} from "../../store/actions/otherActions";
import { useDispatch,useSelector } from 'react-redux';
import LisRegs2 from './LisRegs2';
const LiseRegs = () => {
    const dispatch = useDispatch();
    const [company, setCompany] = useState('');
    const [state, setState] = useState('');
    const [branch,setBranch] = useState('');
    const [executive, setExecutive] = useState('');
    const [rate,setRate] = useState('');
    const [regn,setRn] = useState('');
    const [filetoDocColl,setFileDocColl] = useState('');
    const [imageDocColl,setImageDocColl] = useState('');
    const [dateReq,setDateReq] = useState('');
    const [dateFol,setDateFol] = useState('');
    const [dateRev,setDateRev] = useState('');
    const [status,setStatus] = useState('');
    const [remark,setRemark] = useState('');
    
    const [fileto,setFile] = useState('');
    const [image,setImage] = useState('');

    const [filetoChallan,setFileChallan] = useState('');
    const [imageChallan,setImageChallan] = useState('');  
    const [filetoAppDetails,setFileDocCollAppDetails] = useState('');
    const [imageAppDetails,setImageDocCollAppDetails] = useState('');
    const myElementRefTab1 = useRef(null);
    const myElementRefTab2 = useRef(null);
    const myElementRefTab3 = useRef(null);
    const myElementRefTab4 = useRef(null);
    const myElementRefTab5 = useRef(null);
    const myElementRefTab6 = useRef(null);
    const myElementRefTab7 = useRef(null);
    const myElementRefReqDate = useRef(null);
    const myElementRefFolDate = useRef(null);
    const myElementRefRecDate = useRef(null);
    const [activeTab, setActiveTab] = useState('pills-home-tab1');
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    //console.log(stateInfo);
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getCompney = useSelector((state) => state.getCompney);
    const { companyInfo } = getCompney; 
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )

    const [date, setDate] = useState(defaultDate)

    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }
    const handleTabClick = (tabId) => {
        setTimeout(() => {
            setActiveTab(tabId);  // Update the active tab state when a tab is clicked
        }, 3000);
        
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("rate",rate);
        formData.append("regNo",regn);
        dispatch(nameRateCreate(formData))
        const elementtab2 = myElementRefTab2.current; 
        handleTabClick(elementtab2.id);
    }
    const handleSubmitDocumentCollection = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("documents",filetoDocColl);
        formData.append("imagetypedoc", imageDocColl);
        formData.append("docReqDate",dateReq);
        formData.append("docReqFollow",dateFol);
        formData.append("docReviewDate",dateRev);
        formData.append("docStatus",status);
        formData.append("docRemark",remark);
        dispatch(documentCollection(formData))
        // const elementtab3 = myElementRefTab3.current; 
        // handleTabClick(elementtab3.id);
    }
    const handleSubmitAppDetails = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("company",company);
        formData.append("state",state);
        formData.append("branch",branch);
        formData.append("date",date);
        // dispatch(companyInfoDispatch(formData))
        const elementtab4 = myElementRefTab4.current; 
        handleTabClick(elementtab4.id);
    }
    const handleSubmitExpense = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("company",company);
        formData.append("state",state);
        formData.append("branch",branch);
        formData.append("date",date);
        // dispatch(companyInfoDispatch(formData))
        const elementtab5 = myElementRefTab5.current; 
        handleTabClick(elementtab5.id);
    }
    const handleSubmitLicence = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("company",company);
        formData.append("state",state);
        formData.append("branch",branch);
        formData.append("date",date);
        // dispatch(companyInfoDispatch(formData))
        const elementtab6 = myElementRefTab6.current; 
        handleTabClick(elementtab6.id);
    }
    const handleSubmitInvoice = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("company",company);
        formData.append("state",state);
        formData.append("branch",branch);
        formData.append("date",date);
        // dispatch(companyInfoDispatch(formData))
        const elementtab7 = myElementRefTab7.current; 
        // alert(elementtab7.id)
        handleTabClick(elementtab7.id);
    }
    const handleSubmitCompanyInfo = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("company",company);
        formData.append("state",state);
        formData.append("branch",branch);
        formData.append("date",date);
        // dispatch(companyInfoDispatch(formData))
    }    
    useEffect(()=>{
        dispatch(stateGets());
        dispatch(usersGet());
        dispatch(branchGet());
        dispatch(companyGet());
    },[dispatch]);
    const tab1 = () => {
    }
    const tab2 = () => {
    }
    const tab3 = () => {
    }
    const tab4 = () => {
    }
    const tab5 = () => {
    }
    const tab6 = () => {
    }
    const tab7 = () => {
    }
    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
        setFile(file);
        TransformFileDatatab1(file);
    }
    const TransformFileDatatab1 = (file) => {
        const reader = new FileReader();
        const fileType =file.type;
        let types = false; 
        if(fileType!=="image/svg+xml" && fileType!=="image/jpeg" && fileType!=="image/bmp" && fileType!=="image/jpg" && fileType!=="image/png" && fileType!=="image/gif"){
            types = false; 
            alert('You can only upload SVG/JPG/JPEG/PNG/BMP/GIF file!');
            return false;
        }
        else{
            types = true;
        }
        if(types===true){
            if (file) {
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setImage(reader.result);
                }
            }
        }
        else{
            setImage("");
        }
    } 
    const handleProductImageUploadDocCollection = (e) => {
        const file = e.target.files[0];
        setFileDocColl(file);
        TransformFileDatatab2(file);
    }
    const TransformFileDatatab2 = (file) => {
        const reader = new FileReader();
        const fileType =file.type;
        let types = false; 
        if(fileType!=="image/svg+xml" && fileType!=="image/jpeg" && fileType!=="image/bmp" && fileType!=="image/jpg" && fileType!=="image/png" && fileType!=="image/gif"){
            types = false; 
            alert('You can only upload SVG/JPG/JPEG/PNG/BMP/GIF file!');
            return false;
        }
        else{
            types = true;
        }
        if(types===true){
         
            if (file) {
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setImageDocColl(reader.result);
                }
            }
        }
        else{
            setImageDocColl("");
        }
    }
    const handleProductImageUploadAppDetails = (e) => {
        const file = e.target.files[0];
        setFileDocCollAppDetails(file);
        TransformFileDatatab3(file);
    }
    const TransformFileDatatab3 = (file) => {
        const reader = new FileReader();
        const fileType =file.type;
        let types = false; 
        if(fileType!=="image/svg+xml" && fileType!=="image/jpeg" && fileType!=="image/bmp" && fileType!=="image/jpg" && fileType!=="image/png" && fileType!=="image/gif"){
            types = false; 
            alert('You can only upload SVG/JPG/JPEG/PNG/BMP/GIF file!');
            return false;
        }
        else{
            types = true;
        }
        if(types===true){
         
            if (file) {
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setImageDocCollAppDetails(reader.result);
                }
            }
        }
        else{
            setImageDocCollAppDetails("");
        }
    }    
    const handleProductImageUploadChallan = (e) => {
        const file = e.target.files[0];
        setFileChallan(file);
        TransformFileDatatab4(file);
    }
    const TransformFileDatatab4 = (file) => {
        const reader = new FileReader();
        const fileType =file.type;
        let types = false; 
        if(fileType!=="image/svg+xml" && fileType!=="image/jpeg" && fileType!=="image/bmp" && fileType!=="image/jpg" && fileType!=="image/png" && fileType!=="image/gif"){
            types = false; 
            alert('You can only upload SVG/JPG/JPEG/PNG/BMP/GIF file!');
            return false;
        }
        else{
            types = true;
        }
        if(types===true){
            if (file) {
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setImageChallan(reader.result);
                }
            }
        }
        else{
            setImageChallan("");
        }
    }
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end border-md-bottom" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <ContentPasteIcon /> New </button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><ContentPasteIcon /> History</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" style={{ display:'none' }}>
                                            <select className="form-select" aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>setCompany(e.target.value)} required>
                                                    <option value="">Select Company</option>
                                                {companyInfo != 'undefind' && companyInfo?.length > 0 && companyInfo.map(item => 
                                                    <option value={item._id}>{item.companyname}</option>
                                                )};
                                            </select>
                                            {/* <Spanning id="companies"></Spanning> */}
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" style={{ display:'none' }}>
                                            <select className="form-select" aria-label="Default select example" id="state" name="state" value={state} onChange={(e)=>setState(e.target.value)} required>
                                                <option value="">Select State</option>
                                            {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                <option value={item._id}>{item.name}</option>
                                            )};
                                            </select>
                                        {/* <Spanning id="states"></Spanning> */}
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" style={{ display:'none' }}>
                                            <select className="form-select" aria-label="Default select example" id="branch" name="branch" onChange={(e)=>setBranch(e.target.value)} value={branch} required>
                                                <option value="">Select Branch</option>
                                                {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                                                    <option value={item._id}>{item.name}</option>
                                                )};
                                                
                                            </select>
                                            {/* <Spanning id="branchs"></Spanning> */}
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" style={{ display:'none' }} >
                                            <select className="form-select" aria-label="Default select example" id="executive" name="executive" onChange={(e)=>setExecutive(e.target.value)} value={executive} required>
                                                <option value="">Select Executive</option>
                                                {usersInfo != 'undefind' && usersInfo?.length > 0 && usersInfo.map(item => 
                                                    <option value={item._id}>{item.userName}</option>
                                                )};
                                            </select>
                                            {/* <Spanning id="executives"></Spanning> */}
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" style={{ display:'none' }} >
                                        <input type="date" className="form-control" ss
                                            name="dates" 
                                            value={date.toLocaleDateString('en-CA')} 
                                            onChange={onSetDate}
                                        />
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-primary">Save And Apporove</button>
                                        </div>
                                        {/* inner tab start here */}
                                        <div className="col-12 col-lg-12">
                                            <div className="card">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <ul className="nav nav-pills mb-3 bg-light rounded-top overflow-hidden" id="pills-tab" role="tablist">
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end border-md-bottom" role="presentation">
                                                                <button className={`nav-link ${activeTab === 'pills-home-tab1' ? 'active' : ''} w-100 rounded-0 text-dark`}  id="pills-home-tab1" ref={myElementRefTab1}  data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home1" aria-selected="true" onClick={(e) => {tab1(e);handleTabClick('pills-home-tab1')}}>  Name And Rate</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end border-md-bottom" role="presentation">
                                                                <button className={`nav-link ${activeTab === 'pills-profile-tab2' ? 'active' : ''} w-100 rounded-0 text-dark`} id="pills-profile-tab2" ref={myElementRefTab2} data-bs-toggle="pill" data-bs-target="#pills-profile2" type="button" role="tab" aria-controls="pills-profile2" aria-selected="false"  onClick={(e) => {tab2(e);handleTabClick('pills-profile-tab2')}}>  Documnet Collection</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className={`nav-link ${activeTab === 'creative-tab3' ? 'active' : ''} w-100 rounded-0 text-dark`} id="creative-tab3" ref={myElementRefTab3} data-bs-toggle="pill" data-bs-target="#creative-pill3" type="button" role="tab" aria-controls="creative-pill3" aria-selected="false" onClick={(e) => {tab3(e);handleTabClick('creative-tab3')}}> Application Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className={`nav-link ${activeTab === 'reject-tab4' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab4" ref={myElementRefTab4} data-bs-toggle="pill" data-bs-target="#reject-tab4" type="button" role="tab" aria-controls="reject-tab4" aria-selected="false" onClick={(e) => {tab4(e);handleTabClick('reject-tab4')}}> Expenses Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className={`nav-link ${activeTab === 'reject-tab5' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab5" ref={myElementRefTab5} data-bs-toggle="pill" data-bs-target="#reject-tab5" type="button" role="tab" aria-controls="reject-tab5" aria-selected="false" onClick={(e) => {tab5(e);handleTabClick('reject-tab5')}}> Licence Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className={`nav-link ${activeTab === 'reject-tab6' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab6" ref={myElementRefTab6} data-bs-toggle="pill" data-bs-target="#reject-tab6" type="button" role="tab" aria-controls="reject-tab6" aria-selected="false" onClick={(e) => {tab6(e);handleTabClick('reject-tab6')}}> Invoce Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12" role="presentation">
                                                                <button className={`nav-link ${activeTab === 'reject-tab7' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab7" ref={myElementRefTab7} data-bs-toggle="pill" data-bs-target="#reject-tab7" type="button" role="tab" aria-controls="reject-tab7" aria-selected="false" onClick={(e) => {tab7(e);handleTabClick('reject-tab7')}}> Company Info</button>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content" id="pills-tabContent">
                                                            <div className={`tab-pane ${activeTab === 'pills-home-tab1' ? 'active' : ''} fade show`} id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <form name="firsttab" onSubmit={handleSubmit}>
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-20'>Licence / Registration Name</th>
                                                                                        <td>
                                                                                            <div class="col-12 col-lg-12 col-md-12 mb-2">
                                                                                                <input type="text" class="form-control" name="regNo" id="regNo" value={regn} onChange={(e)=>setRn(e.target.value)}required/>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-20'>Rate</th>
                                                                                        <td>
                                                                                            <div class="col-12 col-lg-12 col-md-12 mb-2">
                                                                                                <CurrencyRupeeIcon />
                                                                                                <input type="text" class="form-control" name="rate" id="rate" value={rate} onChange={(e)=>setRate(e.target.value)} required/>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colspan="2" >
                                                                                            <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" >Next</button>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr> 
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`tab-pane ${activeTab === 'pills-profile-tab2' ? 'active ' : ''} fade show `}  id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">
                                                            <div className="row">
                                                                <div className="col-lg-12 col-md-12">
                                                                    <div className='table-responsive'>
                                                                        <form name="secondtab" onSubmit={handleSubmitDocumentCollection}>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document</th>
                                                                                        <td className='text-success'>
                                                                                            <div>
                                                                                                <div class="form-group files">
                                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" className="file-upload"
                                                                                                    dataHeight="500" onChange={(e) => {handleProductImageUploadDocCollection(e)}}
                                                                                                    required />
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Date</th>
                                                                                        <td><input type="date" className="form-control" ref={myElementRefReqDate} placeholder='Date' value={dateReq} onChange={(e) => {setDateReq(e.target.value)}} required/></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Folllow</th>
                                                                                        <td> <input type="date" className="form-control" ref={myElementRefFolDate} placeholder='Date' value={dateFol} onChange={(e) => {setDateFol(e.target.value)}} required/></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Revieved Date</th>
                                                                                        <td> <input type="date" className="form-control" ref={myElementRefRecDate} placeholder='Date' value={dateRev} onChange={(e) => {setDateRev(e.target.value)}} required/></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Status</th>
                                                                                        <td>
                                                                                            <select className="form-select" aria-label="Default select example"  name="status"  value={status} onChange={(e) => {setStatus(e.target.value)}} required>
                                                                                            <option value="">Select Status</option>
                                                                                                <option value="1">Pending</option>
                                                                                                <option value="2">Pending for Discrepancy</option>
                                                                                                <option value="3">Incomplete Document</option>
                                                                                                <option value="4">Submitted</option>
                                                                                                <option value="5">Approved</option>
                                                                                                <option value="6">Rejected</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Remark</th>
                                                                                        <td>
                                                                                            <input type="text" className='form-control' placeholder='Type here' value={remark} onChange={(e) => {setRemark(e.target.value)}} required/>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colspan="2" >
                                                                                            <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" >Next</button>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>  
                                                                                </tbody>
                                                                            </table>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>  
                                                            </div>
                                                            <div className={`tab-pane ${activeTab === 'creative-tab3' ? 'active' : ''} fade show`} id="creative-pill3" role="tabpanel" aria-labelledby="creative-tab3">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                        <form name="thirdtab" enctype="multipart/form-data" onSubmit={handleSubmitAppDetails}>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Applied Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Application Status</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                <option selected>Seclect Status</option>
                                                                                                <option value="1">Pending</option>
                                                                                                <option value="2">Pending for Discrepancy</option>
                                                                                                <option value="3">Incomplete Document</option>
                                                                                                <option value="4">Submitted</option>
                                                                                                <option value="5">Approved</option>
                                                                                                <option value="6">Rejected</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Remark</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Acknowledege</th>
                                                                                        <td>
                                                                                            <div className="col-lg-6 col-md-6">
                                                                                            <div>
                                                                                                <div class="form-group files">
                                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*,application/pdf" id="input-file-now-custom-2" className="file-upload"
                                                                                                    dataHeight="500" onChange={(e) => {handleProductImageUploadAppDetails(e)}}
                                                                                                    required />
                                                                                                </div>
                                                                                            </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colspan="2" >
                                                                                            <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" >Next</button>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr> 
                                                                                </tbody>
                                                                            </table>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`tab-pane ${activeTab === 'reject-tab4' ? 'active' : ''} fade show`} id="reject-tab4" role="tabpanel" aria-labelledby="reject-tab4">   
                                                            
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                        <form name="fourthtab" enctype="multipart/form-data" onSubmit={handleSubmitExpense}>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Challan Fee</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Upload</th>
                                                                                        <td>
                                                                                            <div className="col-lg-5 col-md-5">
                                                                                                <div>
                                                                                                <div class="form-group files">
                                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" className="file-upload"
                                                                                                    dataHeight="500" onChange={(e) => {handleProductImageUploadChallan(e)}}
                                                                                                    required />
                                                                                                </div>
                                                                                            </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Direct Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>InDirect Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Total Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colspan="2" >
                                                                                            <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" >Next</button>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr> 
                                                                                </tbody>
                                                                            </table>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`tab-pane ${activeTab === 'reject-tab5' ? 'active' : ''} fade show`} id="reject-tab5" role="tabpanel" aria-labelledby="reject-tab5">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                        <form name="fifthtab" enctype="multipart/form-data" onSubmit={handleSubmitLicence}>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Licence Number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Date Of Issue</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Renewal Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Expire Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>License Upload</th>
                                                                                        <td>
                                                                                            <div className="col-lg-5 col-md-5">
                                                                                            <div>
                                                                                                <div class="form-group files">
                                                                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" className="file-upload"
                                                                                                    dataHeight="500" onChange={(e) => {handleProductImageUploadChallan(e)}}
                                                                                                    required />
                                                                                                </div>
                                                                                            </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colspan="2" >
                                                                                            <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" >Next</button>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr> 
                                                                                </tbody>
                                                                            </table>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`tab-pane ${activeTab === 'reject-tab6' ? 'active ' : ''} fade show `}  id="reject-tab6" role="tabpanel" aria-labelledby="reject-tab6">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                        <form name="fifthtab" enctype="multipart/form-data" onSubmit={handleSubmitInvoice}>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoice Type</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>Invoice type</option>
                                                                                                    <option value="1">Performa Invoice</option>
                                                                                                    <option value="2">Reimbursement Invoice</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoice Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" />
                                                                                            </div></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoice number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoice submission date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colspan="2" >
                                                                                            <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" >Next</button>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr> 
                                                                                </tbody>
                                                                            </table>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className={`tab-pane ${activeTab === 'reject-tab7' ? 'active ' : ''} fade show `}  id="reject-tab7" role="tabpanel" aria-labelledby="reject-tab7">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                        <form name="seventab" onSubmit={handleSubmitCompanyInfo}>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Company</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                            <select className="form-select" aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>setCompany(e.target.value)} required>
                                                                                                        <option value="">Select Company</option>
                                                                                                    {companyInfo != 'undefind' && companyInfo?.length > 0 && companyInfo.map(item => 
                                                                                                        <option value={item._id}>{item.companyname}</option>
                                                                                                    )};
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Branch</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                            <select className="form-select" aria-label="Default select example" id="branch" name="branch" onChange={(e)=>setBranch(e.target.value)} value={branch} required>
                                                                                                    <option value="">Select Branch</option>
                                                                                                    {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                                                                                                        <option value={item._id}>{item.name}</option>
                                                                                                    )};
                                                                                                    
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>State</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                            <select className="form-select" aria-label="Default select example" id="state" name="state" value={state} onChange={(e)=>setState(e.target.value)} required>
                                                                                                    <option value="">Select State</option>
                                                                                                {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                                                                    <option value={item._id}>{item.name}</option>
                                                                                                )};
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                            <input type="date" className="form-control" 
                                                                                                    name="dates" 
                                                                                                    value={date.toLocaleDateString('en-CA')} 
                                                                                                    onChange={onSetDate}
                                                                                                />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td colspan="2" >
                                                                                            <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                                <button type="submit" variant="contained" class="w-100 btn btn-primary" >Save</button>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr> 
                                                                                </tbody>
                                                                            </table>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* inner tab stop here */}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row">
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Company</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect State</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Branch</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Branch</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <input type="date" className="form-control" id="" placeholder='start Date' />
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-success">Edit</button>
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-primary">Apporove</button>
                                        </div>
                                        {/* inner tab start here */}
                                        <div className="col-12 col-lg-12">
                                            <div className="card">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <ul className="nav nav-pills mb-3 bg-light rounded-top overflow-hidden" id="pills-tab" role="tablist">
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end border-md-bottom" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab11" data-bs-toggle="pill" data-bs-target="#pills-home11" type="button" role="tab" aria-controls="pills-home11" aria-selected="true">  Name And Rate</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab22" data-bs-toggle="pill" data-bs-target="#pills-profile22" type="button" role="tab" aria-controls="pills-profile22" aria-selected="false"> Document Collection</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="creative-tab33" data-bs-toggle="pill" data-bs-target="#creative-pill33" type="button" role="tab" aria-controls="creative-pill33" aria-selected="false"> Applocation Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill44" data-bs-toggle="pill" data-bs-target="#reject-tab44" type="button" role="tab" aria-controls="reject-tab44" aria-selected="false"> Expences Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill55" data-bs-toggle="pill" data-bs-target="#reject-tab55" type="button" role="tab" aria-controls="reject-tab55" aria-selected="false"> Licence Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill66" data-bs-toggle="pill" data-bs-target="#reject-tab66" type="button" role="tab" aria-controls="reject-tab66" aria-selected="false"> Invoce Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill77" data-bs-toggle="pill" data-bs-target="#reject-tab77" type="button" role="tab" aria-controls="reject-tab77" aria-selected="false"> Company Info</button>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content" id="pills-tabContent">
                                                            <div className="tab-pane fade show active" id="pills-home11" role="tabpanel" aria-labelledby="pills-home-tab11">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Licence / Registration Name</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                S & E Registration
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Rate</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <CurrencyRupeeIcon /> 50000
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="pills-profile22" role="tabpanel" aria-labelledby="pills-profile-tab22">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        {/* <th scope="row" className='bg-light w-lg-25'>Document Collection</th> */}
                                                                                        <th className='text-success'>Ducument</th>
                                                                                        <td>Document Name</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Date</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Folllow</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Recieved Date</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Status</th>
                                                                                        <td>
                                                                                            <select className="form-select" aria-label="Default select example">
                                                                                                <option selected>Seclect Status</option>
                                                                                                <option value="1">Pending</option>
                                                                                                <option value="2">Pending for Discrepancy</option>
                                                                                                <option value="3">Incomplete Document</option>
                                                                                                <option value="4">Submitted</option>
                                                                                                <option value="5">Approved</option>
                                                                                                <option value="6">Rejected</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Remark</th>
                                                                                        <td>
                                                                                            Type here
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Approve</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="creative-pill33" role="tabpanel" aria-labelledby="creative-tab33">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Applied Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span>  09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Application Status</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>Seclect Status</option>
                                                                                                    <option value="1">Pending</option>
                                                                                                    <option value="2">Pending for Discrepancy</option>
                                                                                                    <option value="3">Incomplete Document</option>
                                                                                                    <option value="4">Submitted</option>
                                                                                                    <option value="5">Approved</option>
                                                                                                    <option value="6">Rejected</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Remark</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Acknowledge</th>
                                                                                        <td>

                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Apporove</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab44" role="tabpanel" aria-labelledby="reject-pill44">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Challan Fee</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                09/09/2024
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Upload</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span className='text-success'>  Document Name</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Direct Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <CurrencyRupeeIcon />  4500.00
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>InDirect Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <CurrencyRupeeIcon />  4500.00
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Total Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <CurrencyRupeeIcon />  4500.00
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Approve</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab55" role="tabpanel" aria-labelledby="reject-pill55">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Licence Number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Date Of Issue</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span>09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Renewal Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span>09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Expire Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span>09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>License Upload</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span className='text-success'>  Document Name</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Approve</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab66" role="tabpanel" aria-labelledby="reject-pill66">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoice Type</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>Invoice type</option>
                                                                                                    <option value="1">Performa Invoice</option>
                                                                                                    <option value="2">Reimbursement Invoice</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoice Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span>09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoice number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoice submission date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span>09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Approve</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab77" role="tabpanel" aria-labelledby="reject-pill77">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Select Company</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>Invoice Type</option>
                                                                                                    <option value="1">One</option>
                                                                                                    <option value="2">Two</option>
                                                                                                    <option value="3">Three</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Branch</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>Invoce Type</option>
                                                                                                    <option value="1">One</option>
                                                                                                    <option value="2">Two</option>
                                                                                                    <option value="3">Three</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Approve</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* inner tab start here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LiseRegs;
const Spanning =  styled(FormLabel)`
color: red;
font-size:12px;
margin-left:2px;
`