import React,{useState,useEffect,useRef} from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import { FormLabel,styled} from '@mui/material';
import { Modal } from 'antd';
import {stateGets,branchGet,companyGet,auditGetDataAll,auditOnCreate,checklistGetonCreateAudit,companyTableGet} from "../../store/actions/otherActions";
import { useDispatch,useSelector } from 'react-redux';
import AuditTable from './AuditTable';
import AuditChecklistTable from './AuditChecklistTable';
import Checkilist from '../Checklist/Checklist'
import checklist from '../../../src/checklist.jpg'
const Audit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [auditor, setAuditor] = useState();
    const [title,setTitle] = useState('');
    const [fileto,setFile] = useState('');
    const [startDate,setStartDate] = useState(''); 
    const [endDate,setEndDate] = useState('');
    const [auditstatus,setAuditStatus] = useState('');
    const [risk,setRisk] = useState('');
    const [endDateDisabled, setEndDateDisabled] = useState(true);
    const [scope,setScope] = useState('');
    const [briefauditor,setBriefAuditor] = useState('');  
    const [value, setValue] = useState('Select Checklist');
    const [state, setState] = useState('');
    const [company, setCompany] = useState('');
    const [branch,setBranch] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);  
    const [error, setError] = useState(''); 
    const myElementRefTable = useRef(null);
    const myElementRefTitle = useRef(null);
    const myElementRefState = useRef(null);
    const myElementRefStartdate = useRef(null);
    const myElementRefEnddate = useRef(null); 
    const myElementRefRisk = useRef(null);
    const myElementRefAuditStatus = useRef(null);
    const myElementRefScope = useRef(null);
    const myElementRefAuditor = useRef(null);
    const myElementRefBriefAuditor = useRef(null); 
    const myElementRefCompany = useRef(null);
    const myElementCompany = useRef(null);
    const myElementRefBranch = useRef(null);
    const myElementRefTableInput = useRef(null);
    const myElementRefTab1 = useRef(null);
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    const createOnAudit = useSelector((state) => state.createOnAudit);
    const { auditorCreateInfo } = createOnAudit;
    const getAuditor = useSelector((state) => state.getAuditor);
    const { auditorInfo } = getAuditor; 
    const onCreateChecklistAudit = useSelector((state) => state.onCreateChecklistAudit);
    const { loadingoncreate,auditorChecklistInfoOncreate } = onCreateChecklistAudit; 
    useEffect(()=>{
        dispatch(stateGets());
        // const elementcompanybranch = myElementCompany.current;
        // const postBody = {
        //   id : elementcompanybranch.value
        // }
        // if (elementcompanybranch) {
        //   dispatch(branchGet(postBody));
        // }
        dispatch(companyTableGet());
        dispatch(auditGetDataAll())
        // dispatch(getExecutive())
        dispatch(checklistGetonCreateAudit());
    },[dispatch]);
    const getBbranchs = (company) => {
        // const elementcompanybranch = myElementRefCompany1.current;
        // alert(company);return;
        const postBody = {
         id : company
       }
        dispatch(branchGet(postBody));
      }
    useEffect(()=>{
        setAuditor('');
        setTitle('');
        setEndDate('');
        setScope('');
        setBriefAuditor('');
        setState('');
        setCompany('');
        setBranch('');
        setStartDate('');
        setRisk('');
        setAuditStatus('');
        setSelectedRows([])
        const elementtitle = myElementRefTitle.current;
        const elementcompany = myElementRefCompany.current;
        const elementstate = myElementRefState.current;
        const elementbranch = myElementRefBranch.current;
        const elementsdate = myElementRefStartdate.current;
        const elementedate =  myElementRefEnddate.current;
        const elementrisk = myElementRefRisk.current;
        const elementauditstatus = myElementRefAuditStatus.current;
        const elementscope =  myElementRefScope.current;
        const elementauditor =  myElementRefAuditor.current;
        const elementbauditor =  myElementRefBriefAuditor.current;
        elementtitle.innerText='';
        elementcompany.innerText='';
        elementstate.innerText='';
        elementbranch.innerText='';
        elementsdate.innerText='';
        elementedate.innerText='';  
        elementrisk.innerText='';
        elementauditstatus.innerText='';
        elementscope.innerText='';
        elementauditor.innerText='';
        elementbauditor.innerText='';
        // unsetRefValue(elementtitle);
        // unsetRefValue(elementcompany);
        // unsetRefValue(elementstate);
        // unsetRefValue(elementbranch);
        // unsetRefValue(elementrisk);
        // unsetRefValue(elementauditstatus);
        // unsetRefValue(elementauditor);
        // unsetRefValue(elementbauditor);
        
        const elementtable= myElementRefTable.current;
        if(typeof(myElementRefTable) === 'object') {
            elementtable.style.display = 'none';
        }
        const elementtableinput = myElementRefTableInput.current;
        if(elementtableinput)
        {
           elementtableinput.innerText='';
        } 
        // unsetRefValue(elementtable);
        // unsetRefValue(elementtableinput);
    },[]);
    const showtable = () => {
        const elementtable = myElementRefTable.current;
        const elementtableinput = myElementRefTableInput.current;
        elementtable.style.display = 'inline';
        // const elementtable = myElementRefTable.current;
        if(elementtableinput)
        {
             elementtableinput.innerText='';
        } 
    }
    const handleStartDateChange = (event) => {
        const selectedStartDate = event.target.value;
        setStartDate(selectedStartDate);
        if (endDate && selectedStartDate > endDate) {
        setEndDate(null);
        }
        
    };
    const handleEndDateChange = (event) => {
        const selectedEndDate = event.target.value;
        setEndDate(selectedEndDate);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const elementtitle = myElementRefTitle.current;
        const elementcompany = myElementRefCompany.current;
        const elementstate = myElementRefState.current;
        const elementbranch = myElementRefBranch.current;
        const elementsdate = myElementRefStartdate.current;
        const elementedate =  myElementRefEnddate.current;
        const elementrisk = myElementRefRisk.current;
        const elementauditstatus = myElementRefAuditStatus.current;
        const elementscope =  myElementRefScope.current;
        const elementauditor =  myElementRefAuditor.current;
        const elementbauditor =  myElementRefBriefAuditor.current;
        let i=true;
        //alert(typeof(title))
        if(title === '')
        {
            // alert(elementtitle)
            elementtitle.focus();
            elementtitle.innerText='Please select a Title!';
            i=false;
        }
        else{
            // elementtitle.style.display='none';
            elementtitle.innerText='';
        }
        // alert(i+'1')
        if(company ==='')
        {
            elementcompany.focus();
            elementcompany.innerText='Please select a Company!';
            i=false;
        }
        else{
            // elementcompany.style.display='none';
            elementcompany.innerText='';
        }
        // alert(i+'2')
        if(state === '')
        {
            elementstate.focus();
            elementstate.innerText='Please select a State!';
            i=false;
        }
        else{
            // elementstate.style.display='none';
            elementstate.innerText='';
        }
        // alert(i+'3')
        if( branch === '')
        {
            elementbranch.focus();
            elementbranch.innerText='Please select a Branch!';
            i=false;
        }
        else{
            // elementbranch.style.display='none';
            elementbranch.innerText='';
        }
        // alert(i+'4')
        if(startDate === '')
        {
            elementsdate.focus();
            elementsdate.innerText='Please select a Start Date!';
            i=false;
        }
        else{
            // elementsdate.style.display='none';
            elementsdate.innerText='';
        }
        // alert(i+'5')
        if(endDate === '' )
        {
            elementedate.focus();
            elementedate.innerText='Please select a End date!';
            i=false;
        }
        else{
            elementedate.innerText='';
            // elementedate.style.display='none';
        }
        // alert(i+'6')
        if(risk === '' )
        {
            elementrisk.focus();
            elementrisk.innerText='Please select a Risk!';
            i=false;
        }
        else{
            // elementrisk.style.display='none';
            elementrisk.innerText='';
        } 
        // alert(i+'7')
        if(auditstatus === '' )
        {
            elementauditstatus.focus();
            elementauditstatus.innerText='Please select a Audit Status!';
            i=false;
        }
        else{
            // elementauditstatus.style.display='none';
            elementauditstatus.innerText='';
        }
        // alert(i+'8')
        if(scope === ''  )
        {
            elementscope.focus();
            elementscope.innerText='Please select a Scope!';
            i=false;
        }
        else{
            // elementscope.style.display='none';
            elementscope.innerText='';
        }
        // alert(i+'9')
        if(auditor === '' )
        {
            elementauditor.focus();
            elementauditor.innerText='Please select an Auditor!';
            i=false;
        }
        else{
            // elementauditor.style.display='none';
            elementauditor.innerText='';
        }
        // alert(i+'10')
        if(briefauditor === '')
        {
            elementbauditor.focus();
            elementbauditor.innerText='Please select a brief of Auditor!';
            i=false;
        }
        else{
            // elementbauditor.style.display='none';
            elementbauditor.innerText='';
        }
        // alert(i+'11')
        const selectedRowIds = selectedRows.map((row) => row.id);
        const elementtable = myElementRefTable.current;
        const elementtableinput = myElementRefTableInput.current;
        
        if(elementtable.style.display === 'none')
        {
            // alert(elementtableinput)
            elementtableinput.innerText='Please click on Select Checklist!';
            i=false;
        } 
        else if (selectedRows.length === 0) {
            // Prompt user to select at least one item
            Modal.error({
              title: 'Error',
              content: 'Please click Add Button or select at least one checklist from list.',
            });
            i=false;
        } 
        // alert(i)
        if(i===true)
        {
            // showtable();
            // alert('start')
            const formData = new FormData();
            formData.append("title", title);
            formData.append("state", state);
            formData.append("company", company);
            formData.append("branch", branch);
            formData.append("start_date", startDate);
            formData.append("end_date", endDate);
            formData.append("executive", '659d4f2609c9923c9e7b8f72');
            formData.append("auditor", auditor);
            formData.append("scope", scope);
            formData.append("briefauditor", briefauditor);
            formData.append("checkboxlist", selectedRowIds);
            formData.append("risk", risk);
            formData.append("auditstatus", auditstatus);
            // alert('end')
            dispatch(auditOnCreate(formData));
            // alert('after')
            setAuditor('');
            setTitle('');
            setStartDate('');
            setEndDate('');
            setScope('');
            setBriefAuditor('');
            setState('');
            setCompany('');
            setBranch('');
            setRisk('');
            setAuditStatus('');
            setSelectedRows([])
            const elementtitle = myElementRefTitle.current;
            const elementcompany = myElementRefCompany.current;
            const elementstate = myElementRefState.current;
            const elementbranch = myElementRefBranch.current;
            const elementsdate = myElementRefStartdate.current;
            const elementedate =  myElementRefEnddate.current;
            const elementrisk = myElementRefRisk.current;
            const elementauditstatus = myElementRefAuditStatus.current;
            const elementscope =  myElementRefScope.current;
            const elementauditor =  myElementRefAuditor.current;
            const elementbauditor =  myElementRefBriefAuditor.current;
            // alert(typeof(myElementRefTable))
            if(typeof(myElementRefTable) === 'object') {
                elementtable.style.display = 'none';
            }
            const elementtableinput = myElementRefTableInput.current;
            if(elementtable)
            {
               elementtableinput.innerText='';
            } 
            
            elementtitle.innerText='';
            elementcompany.innerText='';
            elementstate.innerText='';
            elementbranch.innerText='';
            elementsdate.innerText='';
            elementedate.innerText='';  
            elementrisk.innerText='';
            elementauditstatus.innerText='';
            elementscope.innerText='';
            elementauditor.innerText='';
            elementbauditor.innerText='';
            unsetRefValue(elementtitle);
            unsetRefValue(elementcompany);
            unsetRefValue(elementstate);
            unsetRefValue(elementbranch);
            unsetRefValue(elementrisk);
            unsetRefValue(elementauditstatus);
            unsetRefValue(elementauditor);
            unsetRefValue(elementbauditor);
            unsetRefValue(elementtableinput);
            unsetRefValue(elementtable);
            // setTimeout(() => {
            //     navigate(0);
            // }, 5000);
            
            const elementTab1 = myElementRefTab1.current;
            if (elementTab1) {
                elementTab1.click();
            }
        }
        
        // console.log('Selected Row IDs:', selectedRowIds);
        // dispatch(auditOnCreate())
    }   
    const unsetRefValue = (ref) => {
        ref = null;
    };
    const viewall = () => {
        setTimeout(() => {
            dispatch(auditGetDataAll());
        }, 2000);
    }
    const createnew = () => {
        setTimeout(() => {
            dispatch(checklistGetonCreateAudit());
        }, 2000);
    }
    const tocategorypage = () => {
        navigate('/dashboard')
    };
    const filter = () => {
        const elementstate = myElementRefState.current;
        const elementcompany = myElementRefCompany.current;
        const elementbranch = myElementRefBranch.current;
        // const elementdate = myElementRefDate.current;
        const postBody = {
            // created_at:elementdate.value,
            state:elementstate.value,
            company:elementcompany.value,
            branch:elementbranch.value
        }
        // dispatch(checklistCreateFilters(postBody));
    }  
    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
       // alert(JSON.stringify(file))
        setFile(file);
        TransformFileData(file);
    };
    //reading image using The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
    const TransformFileData = (file) => {
        const reader = new FileReader();
        const fileType =file.type;
        let types = false; 
        if(fileType!=="image/jpeg" && fileType!=="image/bmp" && fileType!=="image/jpg" && fileType!=="image/png" && fileType!=="application/pdf"){
            types = true; 
            alert('You can only upload JPG/JPEG/PNG/BMP/PDF file!');
            return false;
        }
        else{
            types = false;
        }
        if(types===false){
         //   alert('sdsds')
            if (file) {
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                //   setImage(reader.result);
                }
            }
        }
        else{
            // setImage("");
        }
     
    }; 
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                          <div className='card'>
                            <div className='card-body'>
                            <ul className="nav nav-pills mb-3 bg-light" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                                    <button className="nav-link w-100 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" ref={myElementRefTab1} type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={viewall}>View All</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                                    <button className="nav-link w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={createnew}>Create New</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <AuditTable />
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <form class="row g-3"  method="post" enctype="multipart/form-data" onSubmit={handleSubmit} novalidate="novalidate">
                                        <div className="col-md-12">
                                            <h4 className='text-center my-2'>General Details</h4>
                                        </div>
                                        <div className="col-md-3">
                                            <label for="inputtitle" className="form-label">Title</label>
                                            <input type="text" id="title" name="title" aria-label="Default select example" className="form-control"  placeholder='Write here'  value={title} onChange={(e) => setTitle(e.target.value)}  required/>
                                            <Spanning ref={myElementRefTitle}></Spanning>
                                        </div> 
                                        <div className="col-md-3">
                                            <label for="inputcompany" className="form-label">Select Company</label>
                                            <select className="form-select"  aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>{setCompany(e.target.value);getBbranchs(e.target.value)}} required>
                                            <option value="">Select Company</option>
                                            {companyGetTableInfo && companyGetTableInfo.length > 0 &&
                                                companyGetTableInfo.map((item) => (
                                                <option key={item._id} value={item._id}>
                                                    {item.companyname}
                                                </option>
                                                ))}
                                            </select>
                                            <Spanning ref={myElementRefCompany}></Spanning>
                                        </div>
                                        <div className="col-md-3">
                                            <label for="" className="form-label">Select State</label>
                                                <select className="form-select" aria-label="Default select example"  id="states"  value={state} name="state"  onChange={(e)=>{setState(e.target.value);}} required>
                                                            <option value="">Select State</option> {/*onBlur={handlestateChange}*/}
                                                        {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                            <option value={item._id}>{item.name}</option>
                                                        )};
                                                </select>
                                                <Spanning id="states" ref={myElementRefState}></Spanning>
                                        </div>
                                        <div className="col-md-3">
                                            <label for="" className="form-label">Select Branch</label>
                                                <select className="form-select"  onChange={(e)=>{setBranch(e.target.value);}} value={branch}  required>
                                                    <option value="">Select Branch</option>
                                                    {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                                                    <option value={item._id}>{item.name}</option>
                                                    )};
                                                </select>
                                                <Spanning ref={myElementRefBranch}></Spanning>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="" className="form-label">Start Date</label>
                                            <input type="date" className="form-control" id=""  placeholder='start date' value={startDate} onChange={(e)=>{handleStartDateChange(e)}} required/>
                                            <Spanning ref={myElementRefStartdate}></Spanning>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="" className="form-label">End Date</label>
                                            <input type="date" className="form-control" id="" placeholder='End date' value={endDate} onChange={(e)=>{handleEndDateChange(e)}} min={startDate || undefined}
                                            disabled={!startDate} required/>
                                            <Spanning ref={myElementRefEnddate}></Spanning>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="" className="form-label">Risk</label>
                                            <select className="form-select" id="risk" aria-label="Default select example" name="risk" value={risk} onChange={(e)=>setRisk(e.target.value)} required>
                                                <option value="">Select Risk</option>
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                                <option value="Very High">Very High</option>
                                            </select>
                                            <Spanning ref={myElementRefRisk}></Spanning>
                                        </div>
                                        <div className="col-md-6">
                                            <label for="" className="form-label">Audit Status</label>
                                            <select className="form-select" id="risk" aria-label="Default select example" name="auditstatus" value={auditstatus} onChange={(e)=>setAuditStatus(e.target.value)} required>
                                                <option value="">Select Audit Status</option>
                                                <option value="1">Ongoing</option>
                                                {/* <option value="2">Pending for Discrepancy</option>
                                                <option value="3">Incomplete Document</option> */}
                                                <option value="2">Submitted</option>
                                                <option value="3">Approved</option>
                                                <option value="4">Rejected</option>
                                            </select>
                                            <Spanning ref={myElementRefAuditStatus}></Spanning>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="exampleFormControlTextarea1" class="form-label">Scope</label>
                                            <textarea class="form-control" placeholder='write a discription' id="exampleFormControlTextarea1" rows="3" value={scope} onChange={(e)=>{setScope(e.target.value)}} required/>
                                            <Spanning ref={myElementRefScope}></Spanning>
                                        </div>
                                        <div className="col-md-12">
                                            <h4 className='text-center my-2'>Auditor Details</h4>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="" className="form-label">Select Auditor</label>
                                            <select className="form-select" aria-label="Default select example" name="users" value= {auditor} onChange={(e)=>setAuditor(e.target.value)} required>
                                                <option value="">Select Auditor</option>
                                                {auditorInfo != 'undefind' && auditorInfo?.length > 0 && auditorInfo.map(item => 
                                                <option value={item._id}>{item.firstName}{' '}{item.lastName}
                                                </option>
                                            )};
                                            </select> 
                                            <Spanning ref={myElementRefAuditor}></Spanning>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="exampleFormControlTextarea1" class="form-label">Brief To Auditor</label>
                                            <textarea class="form-control" placeholder='Brif To Auditor' id="exampleFormControlTextarea1" rows="3" value={briefauditor} onChange={(e)=>{setBriefAuditor(e.target.value)}} required></textarea> 
                                            <Spanning ref={myElementRefBriefAuditor}></Spanning>
                                        </div>
                                        <div className="col-md-12">
                                            <h4 className='text-center my-2'>Checklist Details</h4>
                                        </div>
                                        <div className="col-md-12">
                                            <a onClick={showtable} >
                                                <input type="text" class="form-control"   className="custom-input" style={{ width:'100%' }} value={value}
                                                onChange={(e)=>setValue(e.target.value)} readOnly/>
                                                {/* <img src={checklist} style={{ width:'100%',height:'40px' }} onClick={showtable}/> */}
                                            </a>
                                            <Spanning ref={myElementRefTableInput}></Spanning>
                                        </div>
                                        <div className="col-md-12" style={{ display:'none' }} ref={myElementRefTable}>
                                            <AuditChecklistTable  selectedRows={selectedRows} setSelectedRows={setSelectedRows} />  
                                        </div>
                                        {/* <div className="col-md-12">
                                            <div>
                                                <div class="form-group files">
                                                    <input type="file" name="image" class="form-control" multiple="" accept="image/*,application/pdf" id="input-file-now-custom-2" className="file-upload"
                                                    dataHeight="500" onChange={(e) => {handleProductImageUpload(e)}}
                                                    />
                                                </div>   
                                            </div>     
                                        </div> */}
                                        <div className="col-md-4 col-3 text-lg-end">
                                            <button type="submit" className="btn btn-light">Draf</button>
                                        </div>
                                        <div className="col-md-4 col-3  text-lg-center">
                                            <button type="submit" className="btn btn-dark"  onClick={tocategorypage}>Cancel</button>
                                        </div>
                                        <div className="col-md-4 col-3 text-lg-start">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
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

export default Audit;
const Spanning =  styled(FormLabel)`
color: red;
font-size:13px;
`