import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import { FormLabel,styled,ImageListItem,ImageList} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined } from '@ant-design/icons';
import {stateGets,usersGet,branchGet,companyGet,nameRateCreate,documentCollection,appDetailsDispatch,expenseDispatch,licenseInfoDispatch,invoiceInfoDispatch,companyInfoDispatch,regsGets,lisregsSaveandApprove,liseRegGettingById} from "../../store/actions/otherActions";
import { useDispatch,useSelector } from 'react-redux';
import LisRegsTables from './LisRegsTables';
import Swal from 'sweetalert2';
const LiseRegsshare = (props) => {
    const { editId } = props;
    const dispatch = useDispatch();
    const [company, setCompany] = useState('');
    const [state, setState] = useState('');
    const [branch,setBranch] = useState('');
    const [executive, setExecutive] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    // alert(isDisabled)
    /**reg name and create start*/
    const [rate,setRate] = useState('');
    const [regNo,setRn] = useState('');
    /**reg name and create ends*/
    /**doc collection start*/
    const [documents,setFileDocColl] = useState('');
    const [imageDocColl,setImageDocColl] = useState('');
    const [docReqDate,setDateReq] = useState('');
    const [docReqFollow,setDateFol] = useState('');
    const [docReviewDate,setDateRev] = useState('');
    const [docStatus,setStatus] = useState('');
    const [docRemark,setRemark] = useState('');
    /**doc collection ends*/
    /**App detailes start*/
    const [appliedDate,setDateAppD] = useState('');
    const [applicationStatus,setStatusAppD] = useState('');
    const [applicationRemark,setRemarkAppD] = useState('');
    const [acknowledge,setFileDocAppDetails] = useState('');
    const [imageAppDetails,setImageDocAppDetails] = useState('');
    /**App detailes ends*/
    /**Expense Srart */
    const [challlanFees,setChallanFee] = useState('');
    const [challanNumber,setChallanNumber] = useState('');
    const [challanDate,setDateChallanExpense] = useState('');
    const [challanUpload,setFileChallan] = useState('');
    const [imageChallan,setImageChallan] = useState(''); 
    const [challanDExpense,setChallanDExpense] = useState('');
    const [challanInDExpense,setChallanInDExpense] = useState('');
    const [challanTotDExpense,setChallanTotDExpense] = useState('');
    /**Expense ends */

    /**License Srart */
    const [dateOfIssue,setDateIssue] = useState('');
    const [renewalDate,setDateRenew] = useState('');
    const [expireDate,setDateExpire] = useState('');
    const [licenseUpload,setFileLicense] = useState(''); 
    const [imageLicense,setImageLicense] = useState(''); 
    /**License ends */
    /**Invoice Srart */
    const [invoiceType,setInvoiceType] = useState('');
    const [invoiceDate,setDateInvoice] = useState('');
    const [invoiceNumber,setInvoiceNumber] = useState('');
    const [submissionDate,setDateInvoiceSubD] = useState('');
    /**Invoice ends */ 
    ///external tabs
    const myElementRefEexTab1 = useRef(null);
    const myElementRefEexTab2 = useRef(null);

    ///inner tabs
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
    ////image upload refs start
    const myElementRefDocImage = useRef(null);
    const myElementRefAckImage = useRef(null);
    const myElementRefChallanImage = useRef(null);
    const myElementRefLicImage = useRef(null);
    ////image upload refs ends
    ///filter refs
    const myElementRefCompany = useRef(null);
    const myElementRefState = useRef(null);
    const myElementRefBranch = useRef(null);
    const myElementRefUser = useRef(null);
    const myElementRefDate = useRef(null);
    ///next refs
    const myElementRefButton1 = useRef(null);
    const myElementRefButton2 = useRef(null);
    const myElementRefButton3 = useRef(null);
    const myElementRefButton4 = useRef(null);
    const myElementRefButton5 = useRef(null);
    const myElementRefButton6 = useRef(null);
    const myElementRefButton7 = useRef(null);
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
    const createExpense = useSelector(state => state.createExpense)
    const { expenseDetailsCreateInfo } = createExpense;
    console.log(expenseDetailsCreateInfo) 
    const createLicense = useSelector(state => state.createLicense)
    const { licenseDetailsCreateInfo } = createLicense;
    console.log(licenseDetailsCreateInfo) 
    const createInvoice = useSelector(state => state.createInvoice)
    const { invoiceDetailsCreateInfo } = createInvoice;
    console.log(invoiceDetailsCreateInfo) 
    const createCompanyInfo = useSelector(state => state.createCompanyInfo)
    const { companyInfoDetailsCreateInfo } = createCompanyInfo;
    console.log(companyInfoDetailsCreateInfo) 

    const namerate = useSelector(state => state.namerate)
    const { namerateCreateInfo } = namerate;
    console.log(namerateCreateInfo) 

    const createDoc = useSelector(state => state.createDoc)
    const { docCreateInfo } = createDoc;
    console.log(docCreateInfo) 
    const createAppD = useSelector(state => state.createAppD)
    const { appDetailsCreateInfo } = createAppD;
    console.log(appDetailsCreateInfo) 

    const getRegsById = useSelector(state => state.getRegsById)
    const { regsGetByIdInfo } = getRegsById;
    console.log(regsGetByIdInfo)      
    
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )

    const [date, setDate] = useState(defaultDate)

    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }
    const handleTabClick = (tabId) => {
        setTimeout(() => {
            setActiveTab(tabId);  // Update the active tab state when a tab is clicked
        }, 7000);
        
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("rate",rate);
        formData.append("regNo",regNo);
        dispatch(nameRateCreate(formData))
        // if(namerateCreateInfo?.regNo!==regsInfoDetailsGetInfo?.regNo){
            const elementtab2 = myElementRefTab2.current; 
            handleTabClick(elementtab2.id);
        // }
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    const handleSubmitDocumentCollection = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("documents",documents);
        // formData.append("imagetypedoc", imageDocColl);
        formData.append("docReqDate",docReqDate);
        formData.append("docReqFollow",docReqFollow);
        formData.append("docReviewDate",docReviewDate);
        formData.append("docStatus",docStatus);
        formData.append("docRemark",docRemark);
        dispatch(documentCollection(formData))
        const elementtab3 = myElementRefTab3.current; 
        handleTabClick(elementtab3.id);
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    const handleSubmitAppDetails = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("appliedDate",appliedDate);
        formData.append("applicationStatus",applicationStatus);
        formData.append("applicationRemark",applicationRemark);
        formData.append("acknowledge",acknowledge);
        // formData.append("acknowledgeType",imageAppDetails);
        dispatch(appDetailsDispatch(formData))
        const elementtab4 = myElementRefTab4.current; 
        handleTabClick(elementtab4.id);
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    const handleSubmitExpense = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("challlanFees",challlanFees);
        formData.append("challanNumber",challanNumber);
        formData.append("challanDate",challanDate);
        formData.append("challanUpload",challanUpload);
        formData.append("directExpenses",challanDExpense);
        formData.append("inDirectExpenses",challanInDExpense);
        formData.append("totalExpenses",challanTotDExpense);
        dispatch(expenseDispatch(formData))
        const elementtab5 = myElementRefTab5.current; 
        handleTabClick(elementtab5.id);
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    const handleSubmitLicence = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("dateOfIssue",dateOfIssue);
        formData.append("renewalDate",renewalDate);
        formData.append("expireDate",expireDate);
        formData.append("licenseUpload",licenseUpload);
        // formData.append("licenseUploadType",imageLicense);
        dispatch(licenseInfoDispatch(formData))
        const elementtab6 = myElementRefTab6.current; 
        handleTabClick(elementtab6.id);
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    const handleSubmitInvoice = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("invoiceType",invoiceType);
        formData.append("invoiceDate",invoiceDate);
        formData.append("invoiceNumber",invoiceNumber);
        formData.append("submissionDate",submissionDate); 
        // invoiceType invoiceDate  invoiceNumber submissionDate
        dispatch(invoiceInfoDispatch(formData))
        const elementtab7 = myElementRefTab7.current; 
        handleTabClick(elementtab7.id);
        // if(isDisabled === true){
        //     setIsDisabled(isDisabled)
        // }
    }
    const handleSubmitCompanyInfo = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("company",company);
        formData.append("state",state);
        formData.append("branch",branch);
        formData.append("executive",'659d4f2609c9923c9e7b8f72'); //super admin Opject Id
        formData.append("created_at",date);
        dispatch(companyInfoDispatch(formData))
        // if(isDisabled === true){
            // alert(isDisabled)
            // setIsDisabled(true)
            Swal.fire({
                icon: "success",
                title: "Your License/Registraion has been submitted.",
                text: "But, Please click On Save and Approve button to Approve all Information. Before going to other page else information will be lost!"
            });
            // Swal.fire({
            //     title: "warning",
            //     text: "Please click On Save and Approve button to Approve all Information. Before going to other page else information will be lost!",
            // });
        // }
    }    
    useEffect(()=>{
        if(isDisabled === true){
            setIsDisabled(false);
        }
    },[isDisabled]);
    useEffect(()=>{
        // alert('as')
        dispatch(stateGets());
        dispatch(usersGet());
        dispatch(branchGet());
        dispatch(companyGet());
        dispatch(liseRegGettingById(editId));
        // setIsDisabled(isDisabled);
    },[dispatch]);
    useEffect(() => {
        setRn(expenseDetailsCreateInfo?.regNo)
        if(namerateCreateInfo?.regNo && expenseDetailsCreateInfo?.regNo && expenseDetailsCreateInfo?.docRemark && expenseDetailsCreateInfo?.applicationRemark && expenseDetailsCreateInfo?.challanNumber && licenseDetailsCreateInfo?.licenseUpload && licenseDetailsCreateInfo?.licenseUpload  && invoiceDetailsCreateInfo?.invoiceType && companyInfoDetailsCreateInfo?.branch){
            setIsDisabled(!isDisabled)
        }
    },[namerateCreateInfo,expenseDetailsCreateInfo,licenseDetailsCreateInfo,invoiceDetailsCreateInfo,companyInfoDetailsCreateInfo])
    function formatDate(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        
        if (month.length < 2) 
          month = '0' + month;
        if (day.length < 2) 
          day = '0' + day;
        
        return [year, month, day].join('-');
    }
    useEffect(() => {
        const elementcompany = myElementRefCompany.current;
        const elementstate = myElementRefState.current;
        const elementbranch = myElementRefBranch.current;
        const elementuser =  myElementRefUser.current;
        const elementdate = myElementRefDate.current;
        // alert(elementcompany)
        elementcompany.style.display='none';
        elementstate.style.display='none';
        elementbranch.style.display='none';
        elementuser.style.display='none';
        elementdate.style.display='none';
        if(typeof(regsGetByIdInfo) !== 'undefined' && regsGetByIdInfo !== null) {
            

            // alert(regsGetByIdInfo.docReqDate)
            setCompany(regsGetByIdInfo.company);
            setState(regsGetByIdInfo.state);
            setBranch(regsGetByIdInfo.branch);
            setExecutive(regsGetByIdInfo.executive);
           // setIsDisabled(true);
            setRate(regsGetByIdInfo.rate);
            setRn(regsGetByIdInfo.regNo);
            setDateReq(formatDate(regsGetByIdInfo.docReqDate));
            setDateFol(formatDate(regsGetByIdInfo.docReqFollow));
            setDateRev(formatDate(regsGetByIdInfo.docReviewDate));
            setStatus(regsGetByIdInfo.docStatus);
            setRemark(regsGetByIdInfo.docRemark);
            setDateAppD(formatDate(regsGetByIdInfo.appliedDate));
            setStatusAppD(regsGetByIdInfo.applicationStatus);
            setRemarkAppD(regsGetByIdInfo.applicationRemark);
            setChallanFee(regsGetByIdInfo.challlanFees);
            setChallanNumber(regsGetByIdInfo.challanNumber);
            // setDateChallanExpense(regsGetByIdInfo.challanDate);
            setDateChallanExpense(formatDate(regsGetByIdInfo.challanDate));
            setChallanDExpense(regsGetByIdInfo.directExpenses);
            setChallanInDExpense(regsGetByIdInfo.inDirectExpenses);
            setChallanTotDExpense(regsGetByIdInfo.totalExpenses);
            setDateIssue(formatDate(regsGetByIdInfo.dateOfIssue));
            setDateRenew(formatDate(regsGetByIdInfo.renewalDate));
            setDateExpire(formatDate(regsGetByIdInfo.expireDate));
            setInvoiceType(regsGetByIdInfo.invoiceType);
            setDateInvoice(formatDate(regsGetByIdInfo.invoiceDate));
            setInvoiceNumber(regsGetByIdInfo.invoiceNumber);
            setDateInvoiceSubD(formatDate(regsGetByIdInfo.submissionDate));
                if(regsGetByIdInfo?.documents !==  undefined ){
                    setImageDocColl(regsGetByIdInfo?.documents)
                }
                if(regsGetByIdInfo?.acknowledge !==  undefined ){
                    setImageDocAppDetails(regsGetByIdInfo?.acknowledge)
                }
                if(regsGetByIdInfo?.challanUpload !==  undefined ){
                    setImageChallan(regsGetByIdInfo.challanUpload)
                }
                if(regsGetByIdInfo?.licenseUpload !==  undefined ){
                    setImageLicense(regsGetByIdInfo.licenseUpload)
                }
        }    
    },[regsGetByIdInfo])
   // const createnew = () => {
    //     setTimeout(() => {
    //         const elementTab1 = myElementRefTab1.current;
    //         if (elementTab1) {
    //             elementTab1.click();
    //         }
    //         setCompany('');
    //         setState('');
    //         setBranch('');
    //         setExecutive('');
    //         setIsDisabled(isDisabled);
    //         setRate('');
    //         setRn('');
    //         //  alert(myElementRefDocImage.current.value)
    //         if (myElementRefDocImage.current) {
    //             myElementRefDocImage.current.value='';
    //         }
    //         setDateReq('');
    //         setDateFol('');
    //         setDateRev('');
    //         setStatus('');
    //         setRemark('');
    //         setDateAppD('');
    //         setStatusAppD('');
    //         setRemarkAppD('');
    //         if (myElementRefAckImage.current) {
    //             myElementRefAckImage.current.value='';
    //         }
    //         setChallanFee('');
    //         setChallanNumber('');
    //         setDateChallanExpense('');
    //         if (myElementRefChallanImage.current.value!=='') {
    //             myElementRefChallanImage.current.value='';
    //         }
    //         setChallanDExpense('');
    //         setChallanInDExpense('');
    //         setChallanTotDExpense('');
    //         setDateIssue('');
    //         setDateRenew('');
    //         setDateExpire('');
    //         if (myElementRefLicImage.current.value!=='') {
    //             myElementRefLicImage.current.value='';
    //         }
    //         setInvoiceType('');
    //         setDateInvoice('');
    //         setInvoiceNumber('');
    //         setDateInvoiceSubD('');
    //         setDateInvoice('');
    //         setDateInvoice('');

    //     }, 2000);
    // }
    const editclick = () =>{
        const elementB1 = myElementRefButton1.current;
        const elementB2 = myElementRefButton2.current;
        const elementB3 = myElementRefButton3.current;
        const elementB4 = myElementRefButton4.current;
        const elementB5 = myElementRefButton5.current;
        const elementB6 = myElementRefButton6.current;
        const elementB7 = myElementRefButton7.current;
        elementB1.style.display = 'inline';
        elementB2.style.display = 'inline';
        elementB3.style.display = 'inline';
        elementB4.style.display = 'inline';
        elementB5.style.display = 'inline';
        elementB6.style.display = 'inline';
        elementB7.style.display = 'inline';
    }
    const saveandapprove = () => {
        const postBody = {
            id:regsGetByIdInfo?._id,
            approvedate: defaultDate,
            status:1
        }
        dispatch(lisregsSaveandApprove(postBody));
    }
    const reject = () => {
        const postBody = {
            id:regsGetByIdInfo?._id,
            approvedate: defaultDate,
            status:2
        }
        dispatch(lisregsSaveandApprove(postBody));
    }
    const share = () => {
        const postBody = {
            // id:regsGetByIdInfo?._id,
            // approvedate: defaultDate,
            // status:3
        }
        dispatch(lisregsSaveandApprove(postBody));
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
                //   setImageDocColl(reader.result);
                }
            }
        }
        else{
            // setImageDocColl("");
        }
    }
    const handleProductImageUploadAppDetails = (e) => {
        const file = e.target.files[0];
        setFileDocAppDetails(file);
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
                    // setImageDocAppDetails(reader.result);
                }
            }
        }
        else{
            // setImageDocAppDetails("");
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
                //   setImageChallan(reader.result);
                }
            }
        }
        else{
            // setImageChallan("");
        }
    }
    const handleProductImageUploadLicense = (e) => {
        const file = e.target.files[0];
        setFileLicense(file);
        TransformFileDatatab5(file);
    }
    const TransformFileDatatab5 = (file) => {
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
                //   setImageLicense(reader.result);
                }
            }
        }
        else{
            // setImageLicense("");
        }
    }
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
    return (
        <React.Fragment>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" style={{ display:'none' }}>
                                <select className="form-select" aria-label="Default select example" id="company" name="company" value={company}  ref={myElementRefCompany} onChange={(e)=>setCompany(e.target.value)} required>
                                        <option value="">Select Company</option>
                                    {companyInfo != 'undefind' && companyInfo?.length > 0 && companyInfo.map(item => 
                                        <option value={item._id}>{item.companyname}</option>
                                    )};
                                </select>
                                {/* <Spanning id="companies"></Spanning> */}
                            </div>
                            <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" style={{ display:'none' }}>
                                <select className="form-select" aria-label="Default select example" ref={myElementRefState} id="state" name="state" value={state} onChange={(e)=>setState(e.target.value)} required>
                                    <option value="">Select State</option>
                                {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                    <option value={item._id}>{item.name}</option>
                                )};
                                </select>
                            {/* <Spanning id="states"></Spanning> */}
                            </div>
                            <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" style={{ display:'none' }}>
                                <select className="form-select" aria-label="Default select example" ref={myElementRefBranch} id="branch" name="branch" onChange={(e)=>setBranch(e.target.value)} value={branch} required>
                                    <option value="">Select Branch</option>
                                    {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                                        <option value={item._id}>{item.name}</option>
                                    )};
                                    
                                </select>
                                {/* <Spanning id="branchs"></Spanning> */}
                            </div>
                            <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" style={{ display:'none' }} >
                                <select className="form-select" aria-label="Default select example" id="executive" name="executive" ref={myElementRefUser} onChange={(e)=>setExecutive(e.target.value)} value={executive} required>
                                    <option value="">Select Executive</option>
                                    {usersInfo != 'undefind' && usersInfo?.length > 0 && usersInfo.map(item => 
                                        <option value={item._id}>{item.userName}</option>
                                    )};
                                </select>
                                {/* <Spanning id="executives"></Spanning> */}
                            </div>
                            <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" ref={myElementRefDate} style={{ display:'none' }} >
                            <input type="date" className="form-control" ss
                                name="dates" 
                                value={date.toLocaleDateString('en-CA')} 
                                onChange={onSetDate}
                            />
                            </div>
                            {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" >
                                <button type="submit" className="w-100 btn btn-success" style={{ borderRadius:'0.9'}} onClick={editclick}>Edit</button>
                            </div>
                            <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3" style={{  }}>
                                <button type="submit" className="w-100 btn btn-primary"  onClick={saveandapprove}>Apporove</button>
                            </div> */}
                            {/* inner tab start here */}
                            <div className="col-12 col-lg-12">
                                <div className="card">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="nav nav-pills mb-3 bg-light rounded-top overflow-hidden" id="pills-tab" role="tablist">
                                                <li className="nav-item col-md-3 col-lg-14 col-12 border-end border-md-bottom" role="presentation">
                                                    <button className={`nav-link ${activeTab === 'pills-home-tab1' ? 'active' : ''} w-100 rounded-0 text-dark`}  id="pills-home-tab1" ref={myElementRefTab1}  data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home1" aria-selected="true" onClick={(e) => {tab1(e);handleTabClick('pills-home-tab1')}} disabled={isDisabled}>  Name And Rate</button>
                                                </li>
                                                <li className="nav-item col-md-3 col-lg-14 col-12 border-end border-md-bottom" role="presentation">
                                                    <button className={`nav-link ${activeTab === 'pills-profile-tab2' ? 'active' : ''} w-100 rounded-0 text-dark`} id="pills-profile-tab2" ref={myElementRefTab2} data-bs-toggle="pill" data-bs-target="#pills-profile2" type="button" role="tab" aria-controls="pills-profile2" aria-selected="false"  onClick={(e) => {tab2(e);handleTabClick('pills-profile-tab2')}} disabled={isDisabled}>  Documnet Collection</button>
                                                </li>
                                                <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                    <button className={`nav-link ${activeTab === 'creative-tab3' ? 'active' : ''} w-100 rounded-0 text-dark`} id="creative-tab3" ref={myElementRefTab3} data-bs-toggle="pill" data-bs-target="#creative-pill3" type="button" role="tab" aria-controls="creative-pill3" aria-selected="false" onClick={(e) => {tab3(e);handleTabClick('creative-tab3')}} disabled={isDisabled}> Application Details</button>
                                                </li>
                                                <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                    <button className={`nav-link ${activeTab === 'reject-tab4' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab4" ref={myElementRefTab4} data-bs-toggle="pill" data-bs-target="#reject-tab4" type="button" role="tab" aria-controls="reject-tab4" aria-selected="false" onClick={(e) => {tab4(e);handleTabClick('reject-tab4')}} disabled={isDisabled}> Expenses Details</button>
                                                </li>
                                                <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                    <button className={`nav-link ${activeTab === 'reject-tab5' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab5" ref={myElementRefTab5} data-bs-toggle="pill" data-bs-target="#reject-tab5" type="button" role="tab" aria-controls="reject-tab5" aria-selected="false" onClick={(e) => {tab5(e);handleTabClick('reject-tab5')}} disabled={isDisabled}> Licence Details</button>
                                                </li>
                                                <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                    <button className={`nav-link ${activeTab === 'reject-tab6' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab6" ref={myElementRefTab6} data-bs-toggle="pill" data-bs-target="#reject-tab6" type="button" role="tab" aria-controls="reject-tab6" aria-selected="false" onClick={(e) => {tab6(e);handleTabClick('reject-tab6')}} disabled={isDisabled}> Invoice Details</button>
                                                </li>
                                                <li className="nav-item col-md-3 col-lg-14 col-12" role="presentation">
                                                    <button className={`nav-link ${activeTab === 'reject-tab7' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab7" ref={myElementRefTab7} data-bs-toggle="pill" data-bs-target="#reject-tab7" type="button" role="tab" aria-controls="reject-tab7" aria-selected="false" onClick={(e) => {tab7(e);handleTabClick('reject-tab7')}} disabled={isDisabled}> Company Info</button>
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
                                                                                    <input type="text" class="form-control" name="regNo" id="regNo" value={regNo} onChange={(e)=>setRn(e.target.value)} disabled/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-20'>Rate</th>
                                                                            <td>
                                                                                <div class="col-12 col-lg-12 col-md-12 mb-2">
                                                                                    <CurrencyRupeeIcon />
                                                                                    <input type="number" step="2.2" class="form-control" name="rate" id="rate" value={rate} onChange={(e)=>setRate(e.target.value)} required/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2" >
                                                                                <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                    <button type="submit" ref={myElementRefButton1} style={{ display:'none' }}  variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>
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
                                                                                        ref={myElementRefDocImage}
                                                                                        dataHeight="500" onChange={(e) => {handleProductImageUploadDocCollection(e)}}
                                                                                            />
                                                                                    </div>
                                                                                </div>
                                                                                <br />
                                                                                <ImageList>
                                                                                        <ImagePreview>
                                                                                        <img src={imageDocColl}  alt="error!" />  
                                                                                        </ImagePreview>
                                                                                </ImageList>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Document Request Date</th>
                                                                            <td><input type="date" className="form-control" ref={myElementRefReqDate} placeholder='Date' value={docReqDate} onChange={(e) => {setDateReq(e.target.value)}} required/></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Document Request Folllow</th>
                                                                            <td> <input type="date" className="form-control" ref={myElementRefFolDate} placeholder='Date' value={docReqFollow} onChange={(e) => {setDateFol(e.target.value)}} required/></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Document Revieved Date</th>
                                                                            <td> <input type="date" className="form-control" ref={myElementRefRecDate} placeholder='Date' value={docReviewDate} onChange={(e) => {setDateRev(e.target.value)}} required/></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Status</th>
                                                                            <td>
                                                                                <select className="form-select" aria-label="Default select example"  name="status"  value={docStatus} onChange={(e) => {setStatus(e.target.value)}} required>
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
                                                                                <input type="text" className='form-control' placeholder='Type here' value={docRemark} onChange={(e) => {setRemark(e.target.value)}} required/>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2" >
                                                                                <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                    <button type="submit" ref={myElementRefButton2} style={{ display:'none' }}  variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>
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
                                                                                    <input type="date" className="form-control" placeholder='type here' ref={myElementRefRecDate} value={appliedDate} onChange={(e) => {setDateAppD(e.target.value)}} required/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Application Status</th>
                                                                            <td>
                                                                                <div className="col-lg-4 col-md-4">
                                                                                    <select className="form-select" aria-label="Default select example" value={applicationStatus} onChange={(e) => {setStatusAppD(e.target.value)}} required>
                                                                                    <option value="">Seclect Status</option>
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
                                                                                    <input type="text" className="form-control" placeholder='type here' value={applicationRemark} onChange={(e) => {setRemarkAppD(e.target.value)}} required/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Acknowledege</th>
                                                                            <td>
                                                                                <div className="col-lg-6 col-md-6">
                                                                                <div>
                                                                                    <div class="form-group files">
                                                                                        <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" className="file-upload"
                                                                                        ref={myElementRefAckImage}
                                                                                        dataHeight="500" onChange={(e) => {handleProductImageUploadAppDetails(e)}}
                                                                                            />
                                                                                    </div>
                                                                                </div>
                                                                                </div>
                                                                                <br />
                                                                                <ImageList>
                                                                                        <ImagePreview>
                                                                                        <img src={imageAppDetails}  alt="error!" />  
                                                                                        </ImagePreview>
                                                                                </ImageList>
                                                                            </td>
                                                                        </tr>
                                                                        <tr> 
                                                                            <td colspan="2" >
                                                                                <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                    <button type="submit" ref={myElementRefButton3} style={{ display:'none' }}  variant="contained" class="w-100 btn btn-primary" disabled={isDisabled}>Next</button>
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
                                                                                    <input type="number" step="2.2" className="form-control" placeholder='type here' value={challlanFees} onChange={(e) => {setChallanFee(e.target.value)}} required/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Challan Number</th>
                                                                            <td>
                                                                                <div className="col-lg-4 col-md-4">
                                                                                    <input type="text" className="form-control" placeholder='type here' value={challanNumber} onChange={(e) => {setChallanNumber(e.target.value)}} disabled/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Challan Date</th>
                                                                            <td>
                                                                                <div className="col-lg-4 col-md-4">
                                                                                    <input type="date" className="form-control" placeholder='type here' ref={myElementRefRecDate} value={challanDate} onChange={(e) => {setDateChallanExpense(e.target.value)}} required/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Challan Upload</th>
                                                                            <td>
                                                                                <div className="col-lg-5 col-md-5">
                                                                                    <div>
                                                                                    <div class="form-group files">
                                                                                        <input type="file" name="image" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" 
                                                                                        ref={myElementRefChallanImage}className="file-upload"
                                                                                        dataHeight="500" onChange={(e) => {handleProductImageUploadChallan(e)}}
                                                                                            />
                                                                                    </div>
                                                                                </div>
                                                                                </div>
                                                                                <br />
                                                                                <ImageList>
                                                                                        <ImagePreview>
                                                                                        <img src={imageChallan}  alt="error!" />  
                                                                                        </ImagePreview>
                                                                                </ImageList>
                                                                            </td> 
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Direct Expenses</th>
                                                                            <td>
                                                                                <div className="col-lg-4 col-md-4">
                                                                                    <input type="number" step="2.2" className="form-control" placeholder='type here' ref={myElementRefRecDate} value={challanDExpense} onChange={(e) => {setChallanDExpense(e.target.value)}} required/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>InDirect Expenses</th>
                                                                            <td>
                                                                                <div className="col-lg-4 col-md-4">
                                                                                    <input type="number" step="2.2" className="form-control" placeholder='type here' ref={myElementRefRecDate} value={challanInDExpense} onChange={(e) => {setChallanInDExpense(e.target.value)}} required/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Total Expenses</th>
                                                                            <td>
                                                                                <div className="col-lg-4 col-md-4">
                                                                                    <input type="number" step="2.2" className="form-control" placeholder='type here' value={challanTotDExpense} onChange={(e) => {setChallanTotDExpense(e.target.value)}} required/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2" >
                                                                                <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                    <button type="submit" ref={myElementRefButton4} style={{ display:'none' }}  variant="contained" class="w-100 btn btn-primary" disabled={isDisabled}>Next</button>
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
                                                                                    <input type="text" className="form-control" placeholder='type here' name="regNo" id="regNo" value={regNo}  disabled/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Date Of Issue</th>
                                                                            <td>
                                                                                <div className="col-lg-4 col-md-4">
                                                                                    <input type="date" className="form-control" placeholder='type here' value={dateOfIssue} onChange={(e) => {setDateIssue(e.target.value)}} required/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Renewal Date</th>
                                                                            <td>
                                                                                <div className="col-lg-4 col-md-4">
                                                                                    <input type="date" className="form-control" placeholder='type here' value={renewalDate} onChange={(e) => {setDateRenew(e.target.value)}} required/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Expire Date</th>
                                                                            <td>
                                                                                <div className="col-lg-4 col-md-4">
                                                                                    <input type="date" className="form-control" placeholder='type here' value={expireDate} onChange={(e) => {setDateExpire(e.target.value)}} required/>
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
                                                                                        ref={myElementRefLicImage}
                                                                                        dataHeight="500" onChange={(e) => {handleProductImageUploadLicense(e)}}
                                                                                        required />
                                                                                    </div>
                                                                                </div>
                                                                                </div>
                                                                                <br />
                                                                                <ImageList>
                                                                                        <ImagePreview>
                                                                                        <img src={imageLicense}  alt="error!" />  
                                                                                        </ImagePreview>
                                                                                </ImageList>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2" >
                                                                                <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                    <button type="submit" ref={myElementRefButton5} style={{ display:'none' }}  variant="contained" class="w-100 btn btn-primary"  disabled={isDisabled}>Next</button>
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
                                                                                    <select className="form-select" aria-label="Default select example" value={invoiceType} onChange={(e) => {setInvoiceType(e.target.value)}} required>
                                                                                        <option value="">Invoice type</option>
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
                                                                                    <input type="date" className="form-control" value={invoiceDate} onChange={(e) => {setDateInvoice(e.target.value)}} required/>
                                                                                </div></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Invoice number</th>
                                                                            <td>
                                                                                <div className="col-lg-4 col-md-4">
                                                                                    <input type="text" className="form-control" placeholder='type here' value={invoiceNumber} onChange={(e) => {setInvoiceNumber(e.target.value)}} disabled/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" className='bg-light w-lg-25'>Invoice submission date</th>
                                                                            <td>
                                                                                <div className="col-lg-4 col-md-4">
                                                                                    <input type="date" className="form-control" value={submissionDate} onChange={(e) => {setDateInvoiceSubD(e.target.value)}} required/>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2" >
                                                                                <div class="col-3 col-lg-3 col-md-3 mb-2" >
                                                                                    <button type="submit" ref={myElementRefButton6} style={{ display:'none' }}  variant="contained" class="w-100 btn btn-primary" disabled={isDisabled}>Next</button>
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
                                                                                <select className="form-select" aria-label="Default select example" id="branch" name="branch" value={branch} onChange={(e)=>setBranch(e.target.value)}  required>
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
                                                                                    <button type="submit" ref={myElementRefButton7} style={{ display:'none' }} variant="contained" class="w-100 btn btn-primary" disabled={isDisabled===false?false:true}>Save</button>
                                                                                </div>
                                                                            </td>
                                                                        </tr> 
                                                                    </tbody>
                                                                    
                                                                </table>
                                                                </form>
                                                                <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3 p-2" >
                                                                    <button type="submit" className="w-100 btn btn-primary"  onClick={share}>Share</button>
                                                                </div>
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
                    {/* <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="row">
                            <LisRegsTables />
                        </div>
                    </div> */}`
                </div>
        </React.Fragment>
    )
}

export default LiseRegsshare;
const Spanning =  styled(FormLabel)`
color: red;
font-size:12px;
margin-left:2px;
`
const ImagePreview = styled(ImageListItem)`
  margin: 0 0 0 0;
  border: 1px solid rgb(183, 183, 183);
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(78, 78, 78);
`;