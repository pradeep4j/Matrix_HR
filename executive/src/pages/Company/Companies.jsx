import React, { useState, useEffect, useRef,useMemo } from 'react';
// import {Space} from "antd";
// import {EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { categoryGet, stateGets, companytab1create, companytab2create, companytab3create, companytab4create,companytab5create,companytab6create,companytab7create,companyTableGet,licenseGetonCreate,SaveandApproveCompany,companyGettingById } from "../../store/actions/otherActions";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Companyprofile from './Companyprofile';
import Companylicense from './Companylicense';
import Assigncompanies from './Assigncompanies';
import Companyinteraction from './Companyinteraction'
import DynamicHTMLGeneratorB1 from './DynamicGenerator/DynamicHTMLGeneratorB1'
import DynamicHTMLGeneratorB2 from './DynamicGenerator/DynamicHTMLGeneratorB2'
import DynamicHTMLGeneratorB3 from './DynamicGenerator/DynamicHTMLGeneratorB3'
import DynamicHTMLGeneratorC2 from './DynamicGenerator/DynamicHTMLGeneratorC2'
import DynamicHTMLGeneratorC3 from './DynamicGenerator/DynamicHTMLGeneratorC3'
import DynamicHTMLGeneratorC4 from './DynamicGenerator/DynamicHTMLGeneratorC4'
import DynamicHTMLGeneratorD1 from './DynamicGenerator/DynamicHTMLGeneratorD1'
import DynamicHTMLGeneratorD2 from './DynamicGenerator/DynamicHTMLGeneratorD2'
import DynamicHTMLGeneratorD3NSP from './DynamicGenerator/DynamicHTMLGeneratorD3NSP'
import DynamicHTMLGeneratorD3OTP from './DynamicGenerator/DynamicHTMLGeneratorD3OTP'
import DynamicHTMLGeneratorD3WOE from './DynamicGenerator/DynamicHTMLGeneratorD3WOE'
import DynamicHTMLGeneratorD3TD from './DynamicGenerator/DynamicHTMLGeneratorD3TD'
import DynamicHTMLGeneratorD3MSME from './DynamicGenerator/DynamicHTMLGeneratorD3MSME'
import DynamicHTMLGeneratorD3BOCW from './DynamicGenerator/DynamicHTMLGeneratorD3BOCW'
import DynamicHTMLGeneratorD3IMW from './DynamicGenerator/DynamicHTMLGeneratorD3IMW'
import DynamicHTMLGeneratorE from './DynamicGenerator/DynamicHTMLGeneratorE'
import DynamicHTMLGeneratorF1 from './DynamicGenerator/DynamicHTMLGeneratorF1'
import DynamicHTMLGeneratorGCC from './DynamicGenerator/DynamicHTMLGeneratorGCC'
import Loading1 from '../../components/layout/Loading1';
const Companies = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    const [isVisible, setIsVisible] = useState(true);
    const [functionCallediclra, setfunctionCallediclra] = useState(false);
    const myRefSubcodes = useRef(null);
    const myRefSubcodesESI = useRef(null);
    const myRefSubcodesLabour = useRef(null);
    const refCompanyProfile = useRef(null);
    const myRefF1Labour = useRef(null);
    const myRefGLabour = useRef(null);
    const myRefGCLRA = useRef(null);
    const factoryRefmain = useRef(null);
    const factoryRefClicknotshowmain = useRef(null);
    const myRefE3div = useRef(null);
    const useRefnoOfEmpDeployedAgreementE2 = useRef(null);
     
    const refnoshowgclrashow = useRef(null);
    const refshowgclrashow = useRef(null);
    const inputRefsclra  = {
        inputRef1 : useRef(null),
        inputRef2 : useRef(null),
        inputRef3 : useRef(null),
        inputRef4 : useRef(null),
        inputRef5 : useRef(null),
        inputRef6 : useRef(null),
        inputRef7 : useRef(null),
        inputRef8 : useRef(null),
        inputRef9 : useRef(null),
        inputRef10 : useRef(null),
        inputRef11 : useRef(null),
        inputRef12 : useRef(null),
        inputRef13 : useRef(null),
        inputRef14 : useRef(null),
        inputRef15 : useRef(null),
    }

    const myReftab1buttun = useRef(null);
    const myReftab2buttun = useRef(null);
    const myReftab3buttun = useRef(null);
    const myReftab4buttun = useRef(null);
    const myReftab5buttun = useRef(null);
    const myReftab6buttun = useRef(null);
    const myReftab7buttun= useRef(null);

    const numberOfBranchesInputRef = useRef(null);
    
    const createCompanytab1 = useSelector((state) => state.createCompanytab1);
    const { loadingtab1,companytab1CreateInfo } = createCompanytab1; 
    const createCompanytab2 = useSelector((state) => state.createCompanytab2);
    const { loadingtab2,companytab2CreateInfo } = createCompanytab2;
    const createCompanytab3 = useSelector((state) => state.createCompanytab3);
    const { loadingtab3,companytab3CreateInfo } = createCompanytab3;
    const createCompanytab4 = useSelector((state) => state.createCompanytab4);
    const { loadingtab4,companytab4CreateInfo } = createCompanytab4;
    const createCompanytab5 = useSelector((state) => state.createCompanytab5);
    const { loadingtab5,companytab5CreateInfo } = createCompanytab5;
    const createCompanytab6 = useSelector((state) => state.createCompanytab6);
    const { loadingtab6,companytab6CreateInfo } = createCompanytab6;
    const createCompanytab7 = useSelector((state) => state.createCompanytab7);
    const { loadingtab7,companytab7CreateInfo } = createCompanytab7;
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    const [category, setCategory] = useState('')
    const [state, setState] = useState('')
    const [isDisabled, setIsDisabled] = useState(false);
    const [activeTab, setActiveTab] = useState('pills-home-tab1');
    console.log(companytab1CreateInfo);
    const handleTabClick = (tabId) => {
        // setTimeout(() => {
            setActiveTab(tabId);  // Update the active tab state when a tab is clicked
        // }, 10000);
        
    };
    // console.log(companytab1CreateInfo);
    const myElementRefTab1 = useRef(null);
    const myElementRefTab2 = useRef(null);
    const myElementRefTab3 = useRef(null);
    const myElementRefTab4 = useRef(null);
    const myElementRefTab5 = useRef(null);
    const myElementRefTab6 = useRef(null);
    const myElementRefTab7 = useRef(null);
    // const noofdir = useRef(null);
    // const [dirno,setdirno] = useState('');
    // const setdirnof = () => {
    //     setdirno(noofdir.current.value);
    // }
    const [formData, setFormData] = useState([]);
    const [formData1, setFormData1] = useState([]);
    const [formData2, setFormData2] = useState([]);
    const [formData3, setFormData3] = useState([]);
    const [formData4, setFormData4] = useState([]);
    const [formData5, setFormData5] = useState([]);
    const [formData6, setFormData6] = useState([]);
    const [formData7, setFormData7] = useState([]);
    const [formData8, setFormData8] = useState([]);
    const [formData9, setFormData9] = useState([]);
    const [formData10, setFormData10] = useState([]);
    const [formData11, setFormData11] = useState([]);
    const [formData12, setFormData12] = useState([]);
    const [formData13, setFormData13] = useState([]);
    const [formData14, setFormData14] = useState([]);
    const [formData15, setFormData15] = useState([]);
    const [formData16, setFormData16] = useState([]);
    const [formData17, setFormData17] = useState([]);
    const [formData18, setFormData18] = useState([]);
    const [formData19, setFormData19] = useState([]);
    const [formData20, setFormData20] = useState([]);
    const [formData21, setFormData21] = useState([]);
    const [formData22, setFormData22] = useState([]);
    const [formData23, setFormData23] = useState([]);
    const [formData24, setFormData24] = useState([]);
    const [formData25, setFormData25] = useState([]);
    const [formData26, setFormData26] = useState([]);
    // console.log(formData1)
    //tab1
    const [companyname,setcompanyname] = useState('');
    const [companyimage,setcompanyimage] = useState('');
    const [companyremark,setcompanyremark] = useState('');
    const [companyaddress,setcompanyaddress] = useState('');
    const [companystate,setcompanystate] = useState('');
    const [companydistrict,setcompanydistrict] = useState('');
    const [companypin,setcompanypin] = useState('');
    const [companyaddressimage,setcompanyaddressimage] = useState('');
    const [companyaddressremark,setcompanyaddressremark] = useState('');
    const [companytype,setcompanytype] = useState('');
    const [companytypeimage,setcompanytypeimage] = useState('');
    const [companytyperemark,setcompanytyperemark] = useState('');
    const [companycategory,setcompanycategory] = useState('');
    const [companycategoryimage,setcompanycategoryimage] = useState('');
    const [companycategoryremark,setcompanycategoryremark] = useState('');
    const [companynatureofbusiness,setcompanynatureofbusiness] = useState('');
    const [companynatureofbusinessimage,setcompanynatureofbusinessimage] = useState('');
    const [companynatureofbusinessremark,setcompanynatureofbusinessremark] = useState('');
    //tab2
    const [companyregistration,setcompanyregistration] = useState('');
    const [companyregistrationimage,setcompanyregistrationimage] = useState('');
    const [companyregistrationremark,setcompanyregistrationremark] = useState('');
    const [companycin,setcompanycin] = useState('');
    const [companyciniamge,setcompanyciniamge] = useState('');
    const [companycinremark,setcompanycinremark] = useState('');
    const [companyissuedplace,setcompanyissuedplace] = useState('');
    const [companyissuedplaceimage,setcompanyissuedplaceimage] = useState('');
    const [companyissuedplaceremark,setcompanyissuedplaceremark] = useState('');
    const [companyauthority,setcompanyauthority] = useState('');
    const [companyauthorityimage,setcompanyauthorityimage] = useState('');
    const [companyauthorityremark,setcompanyauthorityremark] = useState('');
    const [companyregistrationdate,setcompanyregistrationdate] = useState('');
    const [companytan,setcompanytan] = useState('');
    const [companytandetails,setcompanytandetails] = useState('');
    const [companytanimage,setcompanytanimage] = useState('');
    const [companytanremark,setcompanytanremark] = useState('');
    const [companytin,setcompanytin] = useState('');
    const [companypan,setcompanypan] = useState('');
    const [companypanimage,setcompanypanimage] = useState('');
    const [companypanremark,setcompanypanremark] = useState('');
    const [companytinimage,setcompanytinimage] = useState('');
    const [companytinremark,setcompanytinremark] = useState('');
    const [companygst,setcompanygst] = useState('');
    const [companygstimage,setcompanygstimage] = useState('');
    const [companygstremark,setcompanygstremark] = useState('');
    //tab4
    const [pfnumber,setpfnumber] = useState('');
    const [pfdetails,setpfdetails] = useState('');
    const [pfimage,setpfimage] = useState('');
    const [pfdremark,setpfdremark] = useState('');
    const [doc,setdoc] = useState('');
    const [pfaddress,setpfaddress] = useState('');
    const [pfstate,setpfstate] = useState('');
    const [pfdistrict,setpfdistrict] = useState('');
    const [pfpin,setpfpin] = useState('');
    const [pfaddressimage,setpfaddressimage] = useState('');
    const [pfaddressremark,setpfaddressremark] = useState('');
    const [esinumber,setesinumber] = useState('');
    const [esiimage,setesiimage] = useState('');
    const [esidremark,setesidremark] = useState('');
    const [esidoc,setesidoc] = useState('');
    const [esiaddress,setesiaddress] = useState('');
    const [esistate,setesistate] = useState('');
    const [esidistrict,setesidistrict] = useState('');
    const [esipin,setesipin] = useState('');
    const [esiaddressimage,setesiaddressimage] = useState('');
    const [esiaddressremark,setesiaddressremark] = useState('');
    const [registrationD3,setregistrationD3] = useState('');
    const [registrationD3image,setregistrationD3image] = useState('');
    const [registrationD3remark,setregistrationD3remark] = useState('');
    const [doregistrationD3,setdoregistrationD3] = useState('');
    const [doeregistrationD3,setdoeregistrationD3] = useState('');
    const [doddrregistrationD3,setdoddrregistrationD3] = useState('');
    const [managernameD3,setmanagernameD3] = useState('');
    const [managernameD3image,setmanagernameD3image] = useState('');
    const [managernameD3remark,setmanagernameD3remark] = useState('');
    const [noeD3,setnoeD3] = useState('');
    const [noemD3,setnoemD3] = useState('');
    const [noefD3,setnoefD3] = useState('');
    const [issueauthfD3,setissueauthfD3] = useState('');
    const [issueauthfD3image,setissueauthfDimage] = useState('');
    const [issueauthfD3remark,setissueauthfD3remark] = useState('');
    const [licensenumber,setlicensenumber] = useState('');
    const [licensenumberimage,setlicensenumberimage] = useState('');
    const [licensenumberremark,setlicensenumberremark] = useState('');
    const [dor,setdor] = useState('');
    const [doe,setdoe] = useState('');
    const [doddr,setdoddr] = useState('');
    const [managernamelicense,setmanagernamelicense] = useState('');
    const [managerlicenseimage,setmanagerlicenseimage] = useState('');
    const [managerlicenseremark,setmanagerlicenseremark] = useState('');
    const [noe,setnoe] = useState('');
    const [nom,setnom] = useState('');
    const [nof,setnof] = useState('');
    const [issuingauth,setissuingauth] = useState('');
    const [issuingauthimage,setissuingauthimage] = useState('');
    const [issuingauthremark,setissuingauthremark] = useState('');
    
    const [fpD3,setfpD3] = useState('');
    const [fpD3image,setfpD3image] = useState('');
    const [fpD3remark,setfpD3remark] = useState('');
    const [doapp,setdoapp] = useState('');
    const [issueauthfpD3,setissueauthfpD3] = useState('');
    const [issueauthfpD3image,setissueauthfpD3image] = useState('');
    const [issueauthfpD3remark,setissueauthfpD3remark] = useState('');
    const [powerfpD3,setpowerfpD3] = useState('');
    const [powerfpD3image,setpowerfpD3image] = useState('');
    const [powerfpD3remark,setpowerfpD3remark] = useState('');
    const [powerhpfpD3,setpowerhpfpD3] = useState('');
    const [powerhpfpD3image,setpowerhpfpD3image] = useState('');
    const [powerhpfpD3remark,setpowerhpfpD3remark] = useState('');
    const [registrationlwfD3,setregistrationlwfD3] = useState('');
    const [registrationlwfD3image,setregistrationlwfD3image] = useState('');
    const [registrationlwfD3remark,setregistrationlwfD3remark] = useState('');
    const [doregistrationlwfD3,setdoregistrationlwfD3] = useState('');
    const [registrationptrD3,setregistrationptrD3] = useState('');
    const [registrationptrD3image,setregistrationptrD3image] = useState('');
    const [registrationptrD3remark,setregistrationptrD3remark] = useState('');
    const [doregistrationptrD3,setdoregistrationptrD3] = useState('');

    //tab5 is now handled by DynamicHTMLGeneratorE.jsx
    
    const [labourEngaged, setlabourEngaged] = useState(false)
  
    //tab6 handled by another file DynamicHTMLGeneratorF1.jsx
    
    //tab7
    const [g12ncw,setg12ncw] = useState('')
    const [g12ncwimage,setg12ncwimage] = useState('')
    const [g12ncwremark,setg12ncwremark] = useState('')
    const [g12ncwdate,setg12ncwdate] = useState('')
    const [g12ncwdatevalid,setg12ncwdatevalid] = useState('')
    const [g12ncwnow,setg12ncwnow] = useState('')
    const [g12ncwcoe,setg12ncwcoe] = useState('')
    const [g12ncwcoeimage,setg12ncwcoeimage] = useState('')
    const [g12ncwcoeremark,setg12ncwcoeremark] = useState('')
    const [g13form,setg13form] = useState('')
    const [g13formimage,setg13formimage] = useState('')
    const [g13formremark,setg13formremark] = useState('')
    const [g13form5date,setg13form5date] = useState('')
    const [g13form5dateofcommence,setg13form5dateofcommence] = useState('')
    const [g13form5licenece,setg13form5licenece] = useState('')
    const [g13form5liceneceimage,setg13form5liceneceimage] = useState('')
    const [g13form5liceneceremark,setg13form5liceneceremark] = useState('')
    const [g13form5licensedol,setg13form5licensedol] = useState('');
    const [g13form5licensedolvalid,setg13form5licensedolvalid] = useState('');
    const [g13form5licensedoldor,setg13form5licensedoldor] = useState('');
    const [g13form5licenseworkers,setg13form5licenseworkers] = useState('');
    const [g13form5licensemanresp,setg13form5licensemanresp] = useState('');
    const [g14dcwc,setg14dcwc] = useState('');
    const [g14dncc,setg14dncc] = useState('');
    const [g14dars,setg14dars] = useState('');
    const [g14dls,setg14dls] = useState('');
    const [g13form5licensefee,setg13form5licensefee] = useState('');
    const [g13form5licensefeeimage,setg13form5licensefeeimage] = useState('');
    const [g13form5licensefeeremark,setg13form5licensefeeremark] = useState('');
    const [g13form5securityfee,setg13form5securityfee] = useState('');
    const [g13form5securityfeeimage,setg13form5securityfeeimage] = useState('');
    const [g13form5securityfeeremark,setg13form5securityfeeremark] = useState('');
    
    const catGet = useSelector((state) => state.catGet);
    const { loading, categoryInfo, error } = catGet;
    const getState = useSelector((state) => state.getState);
    const { loadings, stateInfo } = getState;
    const handleSubmitTab1= async (e) => {
        e.preventDefault();
        const formDataTab1 = new FormData();
        formDataTab1.append("companyname",companyname);
        formDataTab1.append("companyimage",companyimage);
        formDataTab1.append("companyremark",companyremark);
        formDataTab1.append("companyaddress",companyaddress);
        formDataTab1.append("companystate",companystate);
        formDataTab1.append("companydistrict",companydistrict);
        formDataTab1.append("companypin",companypin);
        formDataTab1.append("companyaddressimage",companyaddressimage);
        formDataTab1.append("companyaddressremark",companyaddressremark);
        formDataTab1.append("companytype",companytype);
        formDataTab1.append("companytypeimage",companytypeimage);
        formDataTab1.append("companytyperemark",companytyperemark);
        formDataTab1.append("companycategory",companycategory);
        formDataTab1.append("companycategoryimage",companycategoryimage);
        formDataTab1.append("companycategoryremark",companycategoryremark);
        formDataTab1.append("companynatureofbusiness",companynatureofbusiness);
        formDataTab1.append("companynatureofbusinessimage",companynatureofbusinessimage);
        formDataTab1.append("companynatureofbusinessremark",companynatureofbusinessremark);
        if (myReftab1buttun.current) {
            myReftab1buttun.current.disabled = true;
        }
        dispatch(companytab1create(formDataTab1))
        if (myReftab1buttun.current && loadingtab1) {
            myReftab1buttun.current.disabled = false;
        }
        const elementtab2 = myElementRefTab2.current; 
        setTimeout(() => {
            handleTabClick(elementtab2.id);  // Update the active tab state when a tab is clicked
            }, 10000);
        }
    const handleSubmitTab2 = async (e) => {
        e.preventDefault();

        const formDataTab2 = new FormData();
        formDataTab2.append("companyregistration",companyregistration);
        formDataTab2.append("companyregistrationimage",companyregistrationimage);
        formDataTab2.append("companyregistrationremark",companyregistrationremark);
        formDataTab2.append("companycin",companycin);
        formDataTab2.append("companyciniamge",companyciniamge);
        formDataTab2.append("companycinremark",companycinremark);
        formDataTab2.append("companyissuedplace",companyissuedplace);
        formDataTab2.append("companyissuedplaceimage",companyissuedplaceimage);
        formDataTab2.append("companyissuedplaceremark",companyissuedplaceremark);
        formDataTab2.append("companyauthority",companyauthority);
        formDataTab2.append("companyauthorityimage",companyauthorityimage);
        formDataTab2.append("companyauthorityremark",companyauthorityremark);
        formDataTab2.append("companyregistrationdate",companyregistrationdate);
        formDataTab2.append("companypan",companypan);
        formDataTab2.append("companypanimage",companypanimage);
        formDataTab2.append("companypanremark",companypanremark);
        formDataTab2.append("companytan",companytan);
        formDataTab2.append("companytanimage",companytanimage);
        formDataTab2.append("companytanremark",companytanremark);
        formDataTab2.append("companytin",companytin);
        formDataTab2.append("companytinimage",companytinimage);
        formDataTab2.append("companytinremark",companytinremark);        
        formDataTab2.append("companygst",companygst);
        formDataTab2.append("companygstimage",companygstimage);
        formDataTab2.append("companygstremark",companygstremark);
        formData.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab2.append(`RegistrationB1[${index}][${key}]`, value);
            });
        });
        formData1.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab2.append(`RegistrationB2[${index}][${key}]`, value);
            });
        });
        formData2.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab2.append(`RegistrationB3[${index}][${key}]`, value);
            });
        });
        if (myReftab2buttun.current) {
            myReftab2buttun.current.disabled = true;
        }
        dispatch(companytab2create(formDataTab2))
        const elementtab3 = myElementRefTab3.current; 
        if (myReftab2buttun.current && loadingtab2) {
            myReftab2buttun.current.disabled = false;
        }
        setTimeout(() => {
            
            handleTabClick(elementtab3.id);  // Update the active tab state when a tab is clicked
        }, 20000);
    }
    const handleSubmitTab3 = async (e) => {
        e.preventDefault();
        const formDataTab3 = new FormData();
        formData4.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab3.append(`ClientcontactC2[${index}][${key}]`, value);
            });
        });
        formData5.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab3.append(`ClientcontactC3[${index}][${key}]`, value);
            });
        });
        formData6.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab3.append(`ClientcontactC4[${index}][${key}]`, value);
            });
        });
        if (myReftab3buttun.current) {
            myReftab3buttun.current.disabled = true;
        }
        dispatch(companytab3create(formDataTab3))
        const elementtab3 = myElementRefTab3.current; 
        if (myReftab3buttun.current && loadingtab3) {
            myReftab3buttun.current.disabled = false;
        }
        const elementtab4 = myElementRefTab4.current; 
        setTimeout(() => {
            handleTabClick(elementtab4.id);  // Update the active tab state when a tab is clicked
        }, 15000);
    }
    const handleSubmitTab4 = async (e) => {
        e.preventDefault();

        const formDataTab4 = new FormData();
        formDataTab4.append("pfnumber",pfnumber);
        formDataTab4.append("pfimage",pfimage);
        formDataTab4.append("pfdremark",pfdremark);
        formDataTab4.append("doc",doc);
        formDataTab4.append("pfaddress",pfaddress);
        formDataTab4.append("pfstate",pfstate);
        formDataTab4.append("pfdistrict",pfdistrict);
        formDataTab4.append("pfpin",pfpin);
        formDataTab4.append("pfaddressimage",pfaddressimage);
        formData7.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD1PFsubcodes[${index}][${key}]`, value);
            });
        });
        formDataTab4.append("esinumber",esinumber);
        formDataTab4.append("esiimage",esiimage);
        formDataTab4.append("esidremark",esidremark);
        formDataTab4.append("esidoc",esidoc);
        formDataTab4.append("esiaddress",esiaddress);
        formDataTab4.append("esistate",esistate);
        formDataTab4.append("esidistrict",esidistrict);
        formDataTab4.append("esipin",esipin);
        formDataTab4.append("esiaddressimage",esiaddressimage);
        formDataTab4.append("esiaddressremark",esiaddressremark);
        formData8.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD1ESIsubcodes[${index}][${key}]`, value);
            });
        });        
        formDataTab4.append("registrationD3",registrationD3);
        formDataTab4.append("registrationD3image",registrationD3image);
        formDataTab4.append("registrationD3remark",registrationD3remark);
        formDataTab4.append("doregistrationD3",doregistrationD3);        
        formDataTab4.append("doeregistrationD3",doeregistrationD3);
        formDataTab4.append("doddrregistrationD3",doddrregistrationD3);
        formDataTab4.append("managernameD3",managernameD3);
        formDataTab4.append("managernameD3image",managernameD3image);
        formDataTab4.append("managernameD3remark",managernameD3remark);
        formDataTab4.append("noeD3",noeD3);
        formDataTab4.append("noemD3",noemD3);
        formDataTab4.append("noefD3",noefD3);
        formDataTab4.append("issueauthfD3",issueauthfD3);
        formDataTab4.append("issueauthfD3image",issueauthfD3image);
        formDataTab4.append("issueauthfD3remark",issueauthfD3remark);
        formDataTab4.append("licensenumber",licensenumber);
        formDataTab4.append("licensenumberimage",licensenumberimage);
        formDataTab4.append("licensenumberremark",licensenumberremark);
        formDataTab4.append("dor",dor);
        formDataTab4.append("doe",doe);
        formDataTab4.append("doddr",doddr);
        formDataTab4.append("managerlicenseimage",managerlicenseimage);
        formDataTab4.append("managerlicenseremark",managerlicenseremark);
        formDataTab4.append("managernamelicense",managernamelicense);
        formDataTab4.append("noe",noe);
        formDataTab4.append("nom",nom);
        formDataTab4.append("nof",nof);
        formDataTab4.append("issuingauth",issuingauth);
        formDataTab4.append("issuingauthimage",issuingauthimage);
        formDataTab4.append("issuingauthremark",issuingauthremark);
        formDataTab4.append("fpD3",fpD3);
        formDataTab4.append("fpD3image",fpD3image);
        formDataTab4.append("fpD3remark",fpD3remark);
        formDataTab4.append("doapp",doapp);
        formDataTab4.append("issueauthfpD3",issueauthfpD3);
        formDataTab4.append("issueauthfpD3image",issueauthfpD3image);
        formDataTab4.append("issueauthfpD3remark",issueauthfpD3remark);
        formDataTab4.append("powerfpD3",powerfpD3);
        formDataTab4.append("powerfpD3image",powerfpD3image);
        formDataTab4.append("powerfpD3remark",powerfpD3remark);
        formDataTab4.append("powerhpfpD3",powerhpfpD3);
        formDataTab4.append("powerhpfpD3image",powerhpfpD3image);
        formDataTab4.append("powerhpfpD3remark",powerhpfpD3remark);
        formDataTab4.append("registrationlwfD3",registrationlwfD3);
        formDataTab4.append("registrationlwfD3image",registrationlwfD3image);
        formDataTab4.append("registrationlwfD3remark",registrationlwfD3remark);
        formDataTab4.append("doregistrationlwfD3",doregistrationlwfD3);
        formDataTab4.append("registrationptrD3",registrationptrD3);
        formDataTab4.append("registrationptrD3image",registrationptrD3image);
        formDataTab4.append("registrationptrD3remark",registrationptrD3remark);
        formDataTab4.append("doregistrationptrD3",doregistrationptrD3);
        formData10.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3NSP[${index}][${key}]`, value);
            });
        });   
        formData11.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3OTP[${index}][${key}]`, value);
            });
        });
        formData12.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3WOE[${index}][${key}]`, value);
            });
        });     
        formData13.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3TD[${index}][${key}]`, value);
            });
        });      
        formData14.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3MSME[${index}][${key}]`, value);
            });
        });     
        formData15.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3BOCW[${index}][${key}]`, value);
            });
        });         
        formData16.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab4.append(`OtherRegsitrationD3IMW[${index}][${key}]`, value);
            });
        });      
        if (myReftab4buttun.current) {
            myReftab4buttun.current.disabled = true;
        }
        dispatch(companytab4create(formDataTab4))
        if (myReftab4buttun.current && loadingtab4) {
            myReftab4buttun.current.disabled = false;
        }             
        const elementtab5 = myElementRefTab5.current; 
        setTimeout(() => {
            handleTabClick(elementtab5.id);  // Update the active tab state when a tab is clicked
        }, 30000);
    }
    // console.log(labourEngaged);
    const handleSubmitTab5 = async (e) => {
        e.preventDefault();
        const formDataTab5 = new FormData();
        // formDataTab5.append("labourEngaged",labourEngaged);
        formData26.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab5.append(`Tab5E[${index}][${key}]`, value);
            });
        });    
        if (myReftab5buttun.current) {
            myReftab5buttun.current.disabled = true;
        }
        dispatch(companytab5create(formDataTab5))
        if (myReftab5buttun.current && loadingtab5) {
            myReftab5buttun.current.disabled = false;
        }
        const elementtab6 = myElementRefTab6.current; 
        setTimeout(() => {
            handleTabClick(elementtab6.id);  // Update the active tab state when a tab is clicked
        }, 20000);
    }
    const handleSubmitTab51 = async (e) => {
        // console.log('here')
        if (myReftab5buttun.current && loadingtab5) {
            myReftab5buttun.current.disabled = true;
        }
        const elementtab6 = myElementRefTab6.current; 
        // setTimeout(() => {
            handleTabClick(elementtab6.id);  // Update the active tab state when a tab is clicked
        // }, 8000);
    }
    const divstyleshowhide = formData17?.length === 0 ? 'hide' : 'show';
    const divstyleshowhidemyRefE3div =  useRefnoOfEmpDeployedAgreementE2.current >20 ? 'hide' : 'show';
    // console.log(useRefnoOfEmpDeployedAgreementE2.current)
    const divstyleshowhidemyRefF2main =  factoryRefClicknotshowmain.current ? 'show' : 'hide';
    const divstyleshowhidemyRefF3main =  factoryRefmain.current ? 'show' : 'hide';
    // console.log(noOfEmpDeployedAgreementE2)
    // const handleSubmitTab6 = (e) => {
    //     e.preventDefault();

    //     // return;
    //     const formDataTab6 = new FormData();
        
    //     formDataTab6.append("numberofbranches",formData17?.length);
    //     formData17.forEach((item, index) => {
    //         Object.entries(item).forEach(([key, value]) => {
    //             formDataTab6.append(`F1branch[${index}][${key}]`, value);
    //         });
    //     });           
    //     if (myReftab6buttun.current) {
    //         myReftab6buttun.current.disabled = true;
    //     }
    //     dispatch(companytab6create(formDataTab6))
    //     const elementtab7 = myElementRefTab7.current; 
    //     if (myReftab6buttun.current && loadingtab6) {
    //         myReftab6buttun.current.disabled = false;
    //     }
    //     setTimeout(() => {
    //         handleTabClick(elementtab7.id);  // Update the active tab state when a tab is clicked
    //     }, 15000);
    // }
    const handleSubmitTab7 = async (e) => {
        e.preventDefault();

        const formDataTab7 = new FormData();
        formData25.forEach((item, index) => {
            Object.entries(item).forEach(([key, value]) => {
                formDataTab7.append(`GCC4TL[${index}][${key}]`, value);
            });
        });   
        formDataTab7.append("g12ncw",g12ncw);
        formDataTab7.append("g12ncwimage",g12ncwimage);
        formDataTab7.append("g12ncwremark",g12ncwremark);
        formDataTab7.append("g12ncwdate",g12ncwdate);
        formDataTab7.append("g12ncwdatevalid",g12ncwdatevalid);
        formDataTab7.append("g12ncwnow",g12ncwnow);
        formDataTab7.append("g12ncwcoe",g12ncwcoe);
        formDataTab7.append("g12ncwcoeimage",g12ncwcoeimage);
        formDataTab7.append("g12ncwcoeremark",g12ncwcoeremark);
        formDataTab7.append("g13form",g13form);
        formDataTab7.append("g13formimage",g13formimage);
        formDataTab7.append("g13formremark",g13formremark);
        formDataTab7.append("g13form5date",g13form5date);
        formDataTab7.append("g13form5dateofcommence",g13form5dateofcommence);
        formDataTab7.append("g13form5licenece",g13form5licenece);
        formDataTab7.append("g13form5liceneceimage",g13form5liceneceimage);
        formDataTab7.append("g13form5liceneceremark",g13form5liceneceremark);
        formDataTab7.append("g13form5licensedol",g13form5licensedol);
        formDataTab7.append("g13form5licensedolvalid",g13form5licensedolvalid);
        formDataTab7.append("g13form5licensedoldor",g13form5licensedoldor);
        formDataTab7.append("g13form5licenseworkers",g13form5licenseworkers);
        formDataTab7.append("g13form5licensemanresp",g13form5licensemanresp);
        formDataTab7.append("g13form5licensefee",g13form5licensefee);
        formDataTab7.append("g13form5licensefeeimage",g13form5licensefeeimage);        
        formDataTab7.append("g13form5licensefeeremark",g13form5licensefeeremark);
        formDataTab7.append("g13form5securityfee",g13form5securityfee);
        formDataTab7.append("g13form5securityfeeimage",g13form5securityfeeimage);
        formDataTab7.append("g13form5securityfeeremark",g13form5securityfeeremark);
        formDataTab7.append("g14dcwc",g14dcwc);
        formDataTab7.append("g14dncc",g14dncc);
        formDataTab7.append("g14dars",g14dars);
        formDataTab7.append("g14dls",g14dls);
        if (myReftab7buttun.current ) {
            myReftab7buttun.current.disabled = true;
        }
        dispatch(companytab7create(formDataTab7))
        if (myReftab7buttun.current && loadingtab7) {
            myReftab7buttun.current.disabled = false;
        }
        Swal.fire({
            icon: "success",
            title: "Your Company Information has been submitted.",
            // text: "But, Please click On Save and Approve button to Approve all Information. Before going to other page else information will be lost!"
        });
    }
    useEffect(() => {
        dispatch(categoryGet());
        dispatch(stateGets())
        dispatch(companyTableGet());
        // if(companytab1CreateInfo?._id){
        //     dispatch(companyGettingById(companytab1CreateInfo?._id))
        // }
    }, [dispatch]); 
    const showSubcodes = () => {
        myRefSubcodes.current.style.display = 'none'
    }
    const noshowSubcodes = () => {
        setFormData7([]);
        myRefSubcodes.current.style.display = 'inline'
    }
    const showSubcodesESI = () => {
        myRefSubcodesESI.current.style.display = 'none'
    }
    const noshowSubcodesESI = () => {
        setFormData8([]);
        myRefSubcodesESI.current.style.display = 'inline'
    }
    const showLabour = () => {
        myRefSubcodesLabour.current.style.display = 'none'
        setlabourEngaged(true);
    }
    const noshowLabour = () => {
        myRefSubcodesLabour.current.style.display = 'inline'
        setlabourEngaged(false);
    }
    // const showbranch = () => {
    //     factoryRefClicknotshowmain.current.style.display = 'inline'
    //     factoryRefmain.current.style.display = 'none'
    //     myRefBranch.current.style.display = 'none'
    // }
    // const noshowbranch = () => {
    //     factoryRefClicknotshowmain.current.style.display = 'none'
    //     factoryRefmain.current.style.display = 'inline'
    //     myRefBranch.current.style.display = 'inline'
    // }
    // const showf1show = () => {
    //     // myRefF1Labour.current.style.display = 'none'
    // }
    // const noshowf1show = () => {
    //     // setFormData7([]);
    //     // myRefF1Labour.current.style.display = 'inline'
    // }
    const showgshow = () => {
        myRefGLabour.current.style.display = 'none'
    }
    const noshowgshow = () => {
        setFormData25([]);
        myRefGLabour.current.style.display = 'inline'
    }
    const showgclrashow = () => {
        myRefGCLRA.current.style.display = 'none'
        setfunctionCallediclra(false)
    }
    const noshowgclrashow = () => {
        myRefGCLRA.current.style.display = 'inline'
        setfunctionCallediclra(true)
    }

    //////clra required not required handling according to the show/hide
    useMemo(() => {
        const inputRefs1 = inputRefsclra;
        // alert(isVisible)
        Object.values(inputRefs1).forEach((ref) => {
                if (ref.current) {
                  if (isVisible && functionCallediclra===true) { ///functionCalledInEffect=true then setAttribute('required', 'required'); will not be set 
                    myRefGCLRA.current.style.display='inline';
                    ref.current.setAttribute('required', 'required');
                  
                  }
                  else 
                  {
                    myRefGCLRA.current.style.display='none';
                    if (ref.current === inputRefs1.inputRef1.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef2.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef3.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef4.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef5.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef6.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef7.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef8.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef9.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef10.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef11.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef12.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef13.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef14.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef15.current) {
                        ref.current.removeAttribute('required');
                    }
                 }
               }
        });
  }, [isVisible,inputRefsclra, functionCallediclra]);

    const getcompanyall = () => {
        setTimeout(() => {
            //    alert('yes getting')
              dispatch(companyTableGet());
        }, 2000);
    }
    const createnewlicences = () =>{
        setTimeout(() => {
            dispatch(licenseGetonCreate());
        }, 2000);
    }
    // const createnewprofile = () =>{
    //     setTimeout(() => {
    //         licenseGetonCreate()
    //     }, 2000);
    // }
    const createnew = () => {
        setTimeout(() => {
            // // const elementTab1 = myElementRefTab1.current;
            // // if (elementTab1) {
            // //     elementTab1.click();
            // // }
            // setFormData([]);
            // setFormData1([]);
            // setFormData2([]);
            // setFormData3([]);
            // setFormData4([]);
            // setFormData5([]);
            // setFormData6([]);
            // setFormData7([]);
            // setFormData8([]);
            // setFormData9([]);
            // setFormData10([]);
            // setFormData11([]);
            // setFormData12([]);
            // setFormData13([]);
            // setFormData14([]);
            // setFormData15([]);
            // setFormData16([]);
            // setFormData17([]);
            // setFormData18([]);
            // setFormData19([]);
            // setFormData20([]);
            // setFormData21([]);
            // setFormData22([]);
            // setFormData23([]);
            // setFormData24([]);
            // setFormData25([]);
            // console.log(formData1)
            // //tab1
            // setcompanyname('');
            // setcompanydetails('');
            // setcompanyimage('');
            // setcompanyremark('');
            // setcompanyaddress('');
            // setcompanystate('');
            // setcompanydistrict('');
            // setcompanypin('');
            // setcomapnyaddressdetails('');
            // setcompanyaddressimage('');
            // setcompanyaddressremark('');
            // setcompanytype('');
            // setcompanytypedetails('');
            // setcompanytypeimage('');
            // setcompanytyperemark('');
            // setcompanycategory('');
            // setcompanycategorydetails('');
            // setcompanycategoryimage('');
            // setcompanycategoryremark('');
            // setcompanynatureofbusiness('');
            // setcompanynatureofbusinessdetails('');
            // setcompanynatureofbusinessimage('');
            // setcompanynatureofbusinessremark('');
            // setcompanyregistration('');
            // setcompanyregistrationdetails('');
            // setcompanyregistrationimage('');
            // setcompanyregistrationremark('');
            // setcompanycin('');
            // setcompanycindetails('');
            // setcompanyciniamge('');
            // setcompanycinremark('');
            // setcompanyissuedplace('');
            // setcompanyissuedplacedetails('');
            // setcompanyissuedplaceimage('');
            // setcompanyissuedplaceremark('');
            // setcompanyauthority('');
            // setcompanyauthoritydetails('');
            // setcompanyauthorityimage('');
            // setcompanyauthorityremark('');
            // setcompanyregistrationdate('');
            // setcompanytan('');
            // setcompanytandetails('');
            // setcompanytanimage('');
            // setcompanytanremark('');
            // setcompanytin('');
            // setcompanypan('');
            // setcompanypandetails('');
            // setcompanypanimage('');
            // setcompanypanremark('');
            // setcompanytindetails('');
            // setcompanytinimage('');
            // setcompanytinremark('');
            // setcompanygst('');
            // setcompanygstdetails('');
            // setcompanygstimage('');
            // setcompanygstremark('');
            // setpfnumber('');
            // setpfdetails('');
            // setpfimage('');
            // setpfdremark('');
            // setdoc('');
            // setpfaddress('');
            // setpfstate('');
            // setpfdistrict('');
            // setpfpin('');
            // setpfaddressdetails('');
            // setpfaddressimage('');
            // setpfaddressremark('');
            // setesinumber('');
            // setesidetails('');
            // setesiimage('');
            // setesidremark('');
            // setesidoc('');
            // setesiaddress('');
            // setesistate('');
            // setesidistrict('');
            // setesipin('');
            // setesiaddressdetails('');
            // setesiaddressimage('');
            // setesiaddressremark('');
            // setregistrationD3('');
            // setregistrationD3details('');
            // setregistrationD3image('');
            // setregistrationD3remark('');
            // setdoregistrationD3('');
            // setdoeregistrationD3('');
            // setdoddrregistrationD3('');
            // setmanagernameD3('');
            // setmanagernameD3details('');
            // setmanagernameD3image('');
            // setmanagernameD3remark('');
            // setnoeD3('');
            // setnoemD3('');
            // setnoefD3('');
            // setissueauthfD3('');
            // setissueauthfD3details('');
            // setissueauthfDimage('');
            // setissueauthfD3remark('');
            // setfpD3('');
            // setfpD3details('');
            // setfpD3image('');
            // setfpD3remark('');
            // setdoapp('');
            // setissueauthfpD3('');
            // setissueauthfpD3details('');
            // setissueauthfpD3image('');
            // setissueauthfpD3remark('');
            // setpowerfpD3('');
            // setpowerfpD3details('');
            // setpowerfpD3image('');
            // setpowerfpD3remark('');
            // setpowerhpfpD3('');
            // setpowerhpfpD3details('');
            // setpowerhpfpD3image('');
            // setpowerhpfpD3remark('');
            // setregistrationlwfD3('');
            // setregistrationlwfD3details('');
            // setregistrationlwfD3image('');
            // setregistrationlwfD3remark('');
            // setdoregistrationlwfD3('');
            // setregistrationptrD3('');
            // setregistrationptrD3details('');
            // setregistrationptrD3image('');
            // setregistrationptrD3remark('');
            // setdoregistrationptrD3('');
            // setContLabRegNoE('')
            // setContLabRegNoEDet('')
            // setContLabRegNoEFile('')
            // setContLabRegNoERemark('')
            // setDateOfRegistrationE('')
            // setNoOfContractEmployeesE('')
            // setNoOfContractorsE('')
            // setNameOfContractorE1('')
            // setNameOfContractorsE1Det('')
            // setNameOfContractorsE1File('')
            // setNameOfContractorsE1Remark('')
            // setNameOfEstablishmentE1('')
            // setNameOfEstablishmentE1Det('')
            // setNameOfEstablishmentE1File('')
            // setNameOfEstablishmentE1Remark('')
            // setAddressE1('')
            // setStateE1('')
            // setDistrictE1('')
            // setpinE1('')
            // setDetailsE1('')
            // setImageE1('')
            // setremarkE1('')
            // setAgreementExpiryDateE2('')
            // setAgreementRenewalDateE2('')
            // setNatureOfWorkAgreementE2('')
            // setNatureOfWorkAgreementE2Det('')
            // setNatureOfWorkAgreementE2File('')
            // setNatureOfWorkAgreementE2Remark('')
            // setNoOfEmpDeployedAgreementE2('')
            // setCompanyTypeLabourE3('')
            // setCompanyTypeLabourE3Det('')
            // setCompanyTypeLabourE3File('')
            // setCompanyTypeLabourE3Remark('')
            // setContractLabourLicNoE3('')
            // setContractLabourLicNoE3Det('')
            // setContractLabourLicNoE3File('')
            // setContractLabourLicNoE3Remark('')
            // setContractLicDateE3('')
            // setContractExpiryDateE3('')
            // setContractRenewalDueDateE3('')
            // setNoOfWorkersContractE3('')
            // setPanContractorsE3('')
            // setPanContractorsE3Det('')
            // setPanContractorsE3File('')
            // setPanContractorsE3Remark('')
            // setGstContractorsE3('')
            // setGstContractorsE3Det('')
            // setGstContractorsE3File('')
            // setGstContractorsE3Remark('')
            // setPfRegContractorsE3('')
            // setPfRegContractorsE3Det('')
            // setPfRegContractorsE3File('')
            // setPfRegContractorsE3Remark('')
            // setEsicRegContractorsE3('')
            // setEsicRegContractorsE3Det('')
            // setEsicRegContractorsE3File('')
            // setEsicRegContractorsE3Remark('')
            // setShopsandEstContractorsE3('')
            // setShopsandEstContractorsE3Det('')
            // setShopsandEstContractorsE3File('')
            // setShopsandEstContractorsE3Remark('')
            // setLwfRegContractorsE3('')
            // setLwfRegContractorsE3Det('')
            // setLwfRegContractorsE3File('')
            // setLwfRegContractorsE3Remark('')
            // setProfTaxContractorsE3('')
            // setProfTaxContractorsE3Det('')
            // setProfTaxContractorsE3File('')
            // setProfTaxContractorsE3Remark('')
            // setBranchAddress('')
            // setBranchState('')
            // setBranchDistrict('')
            // setBranchPin('')
            // setContractorAddBranchFDet('')
            // setContractorAddBranchFFile('')
            // setContractorAddBranchFRemark('')
            // setBranchOpeningDateF('')
            // setNoOfEmpBranchF('')
            // setManagerNameF1('')
            // setManagerNameF1Det('')
            // setManagerNameF1File('')
            // setManagerNameF1Remark('')
            // setManagerMobNoF1('')
            // setManagerMobNoF1Det('')
            // setManagerMobNoF1Remark('')
            // setManagerEmailF1('')
            // setManagerEmailF1Det('')
            // setManagerEmailF1Remark('')
            // setManagerAadharNoF1('')
            // setManagerAadharNoF1Det('')
            // setManagerAadharNoF1File('')
            // setManagerAadharNoF1Remark('')
            // setManagerPanF1('')
            // setManagerPanF1Det('')
            // setManagerPanF1File('')
            // setManagerPanF1Remark('')
            // setShopsEstLicenseF2('')
            // setShopsEstLicenseF2Det('')
            // setShopsEstLicenseF2File('')
            // setShopsEstLicenseF2Remark('')
            // setContractorNameF51('')
            // setContractorNameF51Det('')
            // setContractorNameF51File('')
            // setContractorNameF51Remark('')
            // setEstablishmentNameF51('')
            // setEstablishmentNameF51Det('')
            // setEstablishmentNameF51File('')
            // setEstablishmentNameF51Remark('')
            // setRegAddContractorF51Det('')
            // setregisocontractaddress('')
            // setregisocontractstate('')
            // setregisocontractdistrict('')
            // setregisocontractpin('')
            // setRegAddContractorF51File('')
            // setRegAddContractorF51Remark('')
            // setExpiryDateF52('')
            // setRenewalDateF52('')
            // setNatureOfWorkF52('')
            // setNatureOfWorkF52Det('')
            // setNatureOfWorkF52File('')
            // setNatureOfWorkF52Remark('')
            // setNoOfEmpDeployedF52('')
            // setCompanyTypeF53('')
            // setCompanyTypeF53Det('')
            // setCompanyTypeF53File('')
            // setCompanyTypeF53Remark('')
            // setContractLabLicNoF53('')
            // setContractLabLicNoF53Det('')
            // setContractLabLicNoF53File('')
            // setContractLabLicNoF53Remark('')
            // setLicenseDateF53('')
            // setExpiryDateF53('')
            // setRenewalDateF53('')
            // setNoOfWorkerF53('')
            // setPanF53('')
            // setPanF53Det('')
            // setPanF53File('')
            // setPanF53Remark('')
            // setGstF53('')
            // setGstF53Det('')
            // setGstF53File('')
            // setGstF53Remark('')
            // setPfRegF53('')
            // setPfRegF53Det('')
            // setPfRegF53File('')
            // setPfRegF53Remark('')
            // setEsicRegF53('')
            // setEsicRegF53Det('')
            // setEsicRegF53File('')
            // setEsicRegF53Remark('')
            // setShopsEstF53('')
            // setShopsEstF53Det('')
            // setShopsEstF53File('')
            // setShopsEstF53Remark('')
            // setLwfRegF53('')
            // setLwfRegF53Det('')
            // setLwfRegF53File('')
            // setLwfRegF53Remark('')
            // setProfTaxF53('')
            // setProfTaxF53Det('')
            // setProfTaxF53File('')
            // setProfTaxF53Remark('')
            // setg12ncw('')
            // setg12ncwdet('')
            // setg12ncwimage('')
            // setg12ncwremark('')
            // setg12ncwdate('')
            // setg12ncwdatevalid('')
            // setg12ncwnow('')
            // setg12ncwcoe('')
            // setg12ncwcoedet('')
            // setg12ncwcoeimage('')
            // setg12ncwcoeremark('')
            // setg13form('')
            // setg13formdet('')
            // setg13formimage('')
            // setg13formremark('')
            // setg13form5date('')
            // setg13form5dateofcommence('')
            // setg13form5licenece('')
            // setg13form5licenecedet('')
            // setg13form5liceneceimage('')
            // setg13form5liceneceremark('')
            // setg13form5licensedol('');
            // setg13form5licensedolvalid('');
            // setg13form5licensedoldor('');
            // setg13form5licenseworkers('');
            // setg13form5licensemanresp('');
            // setg14dcwc('');
            // setg14dncc('');
            // setg14dars('');
            // setg14dls('');
            // setg13form5licensefee('');
            // setg13form5licensefeedet('');
            // setg13form5licensefeeimage('');
            // setg13form5licensefeeremark('');
            // setg13form5securityfee('');
            // setg13form5securityfeedet('');
            // setg13form5securityfeeimage('');
            // setg13form5securityfeeremark('');
        }, 2000);
    }
    const saveandapprove = () => {
        const postBody = {
            approvedate: defaultDate,
            status:1,
            id:companyGetTableInfo?._id
        }
        dispatch(SaveandApproveCompany(postBody));//relodreport
        // relodreport();
    }
    return (
<React.Fragment>
    <div className='dashboard_wrapper'>
        <div className="container">
            <div className="row">
    <div className="col-lg-12">
        <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
            <li className="nav-item col-md-6 col-lg-3 col-12 border-end border-md-bottom" role="presentation">
                <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" ref={refCompanyProfile} aria-controls="pills-home" aria-selected="true" onClick={getcompanyall}>  Company Profile</button>
            </li>
            <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={createnew}> Create New</button>
            </li>
            <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                <button className="nav-link w-100 rounded-0 text-dark" id="creative-tab" data-bs-toggle="pill" data-bs-target="#creative-pill" type="button" role="tab" aria-controls="creative-pill" aria-selected="false"> Company Interection</button>
            </li>
            <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
            <button className="nav-link w-100 rounded-0 text-dark" id="assign-tab" data-bs-toggle="pill" data-bs-target="#assign-pill" type="button" role="tab" aria-controls="assign-pill" aria-selected="false"> Assign Companies</button>
            </li>
        </ul>
        
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row">
                    <Companyprofile linkref={refCompanyProfile}/>
                </div>
            </div>

            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                            <li className="nav-item col-md-6 col-lg-6 col-12 border-end border-md-bottom" role="presentation">
                                <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab-creat" data-bs-toggle="pill" data-bs-target="#pills-home-creat" type="button" role="tab" aria-controls="pills-home-creat" aria-selected="true" /*onClick={createnewprofile}*/> Profile </button>
                            </li>
                            <li className="nav-item col-md-6 col-lg-6 col-12 border-end " role="presentation">
                                <button className="nav-link w-100 rounded-0 text-dark " id="pills-profile-tab-creat-li" data-bs-toggle="pill" data-bs-target="#pills-profile-creat-li" type="button" role="tab" aria-controls="pills-profile-creat-li" aria-selected="false" onClick={createnewlicences}>Licenses</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home-creat" role="tabpanel" aria-labelledby="pills-home-tab-creat">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <ul className="nav nav-pills mb-3 bg-light rounded-top overflow-hidden" id="pills-tab" role="tablist">
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end border-md-bottom" role="presentation">
                                            <button className={`nav-link ${activeTab === 'pills-home-tab1' ? 'active' : ''} w-100 rounded-0 text-dark`}  id="pills-home-tab1" ref={myElementRefTab1}  data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home1" aria-selected="true" onClick={(e) => {handleTabClick('pills-home-tab1')}} disabled={isDisabled}>General</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                            <button className={`nav-link ${activeTab === 'pills-profile-tab2' ? 'active' : ''} w-100 rounded-0 text-dark`} id="pills-profile-tab2" ref={myElementRefTab2} data-bs-toggle="pill" data-bs-target="#pills-profile2" type="button" role="tab" aria-controls="pills-profile2" aria-selected="false"  onClick={(e) => {handleTabClick('pills-profile-tab2')}} disabled={isDisabled}>Registration Details</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                <button className={`nav-link ${activeTab === 'creative-tab3' ? 'active' : ''} w-100 rounded-0 text-dark`} id="creative-tab3" ref={myElementRefTab3} data-bs-toggle="pill" data-bs-target="#creative-pill3" type="button" role="tab" aria-controls="creative-pill3" aria-selected="false" onClick={(e) => {handleTabClick('creative-tab3')}} disabled={isDisabled}> Client Information</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                <button className={`nav-link ${activeTab === 'reject-tab4' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab4" ref={myElementRefTab4} data-bs-toggle="pill" data-bs-target="#reject-tab4" type="button" role="tab" aria-controls="reject-tab4" aria-selected="false" onClick={(e) => {handleTabClick('reject-tab4')}} disabled={isDisabled}>Other Registration Details</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                <button className={`nav-link ${activeTab === 'reject-tab5' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab5" ref={myElementRefTab5} data-bs-toggle="pill" data-bs-target="#reject-tab5" type="button" role="tab" aria-controls="reject-tab5" aria-selected="false" onClick={(e) => {handleTabClick('reject-tab5')}} disabled={isDisabled}>Labour Contractor Details</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                <button className={`nav-link ${activeTab === 'reject-tab6' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab6" ref={myElementRefTab6} data-bs-toggle="pill" data-bs-target="#reject-tab6" type="button" role="tab" aria-controls="reject-tab6" aria-selected="false" onClick={(e) => {handleTabClick('reject-tab6')}} disabled={isDisabled}>Branch Details</button>
                                            </li>
                                            <li className="nav-item col-md-3 col-lg-14 col-12" role="presentation">
                                                <button className={`nav-link ${activeTab === 'reject-tab7' ? 'active' : ''} w-100 rounded-0 text-dark`} id="reject-tab7" ref={myElementRefTab7} data-bs-toggle="pill" data-bs-target="#reject-tab7" type="button" role="tab" aria-controls="reject-tab7" aria-selected="false" onClick={(e) => {handleTabClick('reject-tab7')}} disabled={isDisabled}>Company Contractor Details</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className={`tab-pane ${activeTab === 'pills-home-tab1' ? 'active' : ''} fade show`} id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                        <form name="firsttab" method="post" onSubmit={handleSubmitTab1}>      
                                                            <table className="table  creat_tbl">
                                                                <thead>
                                                                    <tr >
                                                                        <th>Title</th>
                                                                        {/* <th>Details</th> */}
                                                                        <th>Upload</th>
                                                                        <th>Remark</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr >
                                                                        
                                                                        <td colSpan={4}>
                                                                            <h4>A. General</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                            <label class="form-label">Name of the company as per registration</label>
                                                                            <input type="text" class="form-control" placeholder="Company" name="companyname"
                                                                            id="companyname" value={companyname} onChange={(e)=>setcompanyname(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                            <div >
                                                                                <div class="form-group files1" >
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }} name="companyimage" id="companyimage" 
                                                                                    onChange={(e) => setcompanyimage(e.target.files[0])} 
                                                                                    required />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" name="companyremark" id="companyremark" value={companyremark} onChange={(e)=>setcompanyremark(e.target.value)} class="form-control" placeholder="Write here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                            <label class="form-label">Registered Address of the Company</label>
                                                                            
                                                                            <table>
                                                                                <tr>
                                                                                    <td><input type="text" class="form-control" placeholder="Address" name="companyaddress" value={companyaddress} id="companyaddress" onChange={(e)=>setcompanyaddress(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                    <select className="form-select" aria-label="Default select example" id="state" name="state" value={companystate} onChange={(e)=>setcompanystate(e.target.value)} required>
                                                                                            <option value="">Select State</option>
                                                                                        {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                                                            <option value={item._id}>{item.name}</option>
                                                                                        )};
                                                                                    </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="text" class="form-control" placeholder="District" name="companydistrict" id="companydistrict" value={companydistrict} onChange={(e)=>setcompanydistrict(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="number" class="form-control" placeholder="PIN"  name="companypin" id="companypin" value={companypin} onChange={(e)=>setcompanypin(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                    name="companyaddressimage" id="companyaddressimage" 
                                                                                    onChange={(e) => setcompanyaddressimage(e.target.files[0])}
                                                                                    required />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" class="form-control" placeholder="Remark" name="companyaddressremark" id="companyaddressremark" value={companyaddressremark}
                                                                                    onChange={(e) => setcompanyaddressremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                            <div class="dropdown">
                                                                                <label class="form-label">
                                                                                    Type of the Company
                                                                                </label>
                                                                                <div  aria-labelledby="dropdownMenuButton">
                                                                                    <select class="form-select" name="companytype" id="companytype" value={companytype}
                                                                                    onChange={(e) => setcompanytype(e.target.value)} required>
                                                                                        <option value="">Type of the Company</option>
                                                                                        <option value="1">Private Limited Company</option>
                                                                                        <option value="2">Public Limited Company</option>
                                                                                        <option value="3">Sole Proprietorship</option>
                                                                                        <option value="4">Partnership</option>
                                                                                        <option value="5">Limited Liability Partnership (LLP)</option>
                                                                                        <option value="6">Non-Government Organization (NGO)</option>
                                                                                        <option value="7">One Person Company (OPC)</option>
                                                                                        <option value="8">Others</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                    name="companytypeimage" id="companytypeimage" 
                                                                                    onChange={(e) => setcompanytypeimage(e.target.files[0])}
                                                                                    required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" class="form-control" placeholder="Remark" name="companytyperemark" id="companytyperemark" value={companytyperemark}
                                                                                    onChange={(e) => setcompanytyperemark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        <td>
                                                                            <div class ="dropdown">
                                                                            <label class="form-label">Select a Category</label>
                                                                                <select className="form-select" aria-label="Default select example" id="companycategory" name="companycategory" onChange={(e)=>setcompanycategory(e.target.value)} value={companycategory} required>
                                                                                    <option value="">Select Category of the Company</option>
                                                                                    {categoryInfo != 'undefind' && categoryInfo?.length > 0 && categoryInfo.map(item => 
                                                                                        <option value={item._id}>{item.name}</option>
                                                                                    )};
                                                                                    
                                                                                </select>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*,application/pdf" 
                                                                                    id="companycategoryimage" 
                                                                                    name="companycategoryimage" 
                                                                                     style={{ height:'10px' }}
                                                                                    onChange={(e) => {setcompanycategoryimage(e.target.files[0])}} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" class="form-control" placeholder="Remark" name="companycategoryremark" id="companycategoryremark" value={companycategoryremark}
                                                                                    onChange={(e) => setcompanycategoryremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div class="dropdown">
                                                                            <label class="form-label">Select nature of buisness</label>
                                                                                <div  aria-labelledby="dropdownMenuButton">
                                                                                <input id="companynatureofbusiness" class="form-control" name="companynatureofbusiness" onChange={(e)=>setcompanynatureofbusiness(e.target.value)} value={companynatureofbusiness} required />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                    id="companynatureofbusinessimage" 
                                                                                    name="companynatureofbusinessimage" 
                                                                                    onChange={(e) => {setcompanynatureofbusinessimage(e.target.files[0])}} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Remark" name="companynatureofbusinessremark" id="companynatureofbusinessremark" value={companynatureofbusinessremark}
                                                                                    onChange={(e) => setcompanynatureofbusinessremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" ref={myReftab1buttun} class="w-100 btn btn-primary" >Next </button>{loadingtab1 && <Loading1 />}
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
                                            <div className={`tab-pane ${activeTab === 'pills-profile-tab2' ? 'active ' : ''} fade show `}  id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">
                                            <form name="secondtab" method="post" onSubmit={handleSubmitTab2}>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                            <table className="table  creat_tbl">
                                                                <tbody>
                                                                    <tr >
                                                                        
                                                                        <td colSpan={4}>
                                                                            <h4>B. Details of Registration</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">Select Company registration</label>
                                                                            <div class="dropdown">
                                                                            <select class="form-select" id="companyregistration" name="companyregistration" onChange={(e)=>setcompanyregistration(e.target.value)} value={companyregistration} required>
                                                                                        <option value="">Select Company registration</option>
                                                                                        <option value="">Type of the Company</option>
                                                                                        <option value="1" selected={companytab1CreateInfo?.companytype === "1"}>Private Limited Company</option>
                                                                                        <option value="2" selected={companytab1CreateInfo?.companytype === "2"}>Public Limited Company</option>
                                                                                        <option value="3" selected={companytab1CreateInfo?.companytype === "3"}>Sole Proprietorship</option>
                                                                                        <option value="4" selected={companytab1CreateInfo?.companytype === "4"}>Partnership</option>
                                                                                        <option value="5" selected={companytab1CreateInfo?.companytype === "5"}>Limited Liability Partnership (LLP)</option>
                                                                                        <option value="6" selected={companytab1CreateInfo?.companytype === "6"}>Non-Government Organization (NGO)</option>
                                                                                        <option value="7" selected={companytab1CreateInfo?.companytype === "7"}>One Person Company (OPC)</option>
                                                                                        <option value="8" selected={companytab1CreateInfo?.companytype === "8"}>Others</option>
                                                                                    </select>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*,application/pdf" id="companyregistrationimage" 
                                                                                    name="companyregistrationimage" style={{ height:'10px' }} 
                                                                                    onChange={(e) => {setcompanyregistrationimage(e.target.files[0])}}
                                                                                    required />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companyregistrationremark" id="companyregistrationremark" value={companyregistrationremark}
                                                                                    onChange={(e) => setcompanyregistrationremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                            <label class="form-label">CIN Number</label>
                                                                            <input type="text" class="form-control" placeholder="CIN Number" name="companycin" id="companycin" value={companycin}
                                                                                    onChange={(e) => setcompanycin(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf"   style={{ height:'10px' }}
                                                                                id="companyciniamge" 
                                                                                name="companyciniamge"  
                                                                                
                                                                                onChange={(e) => {setcompanyciniamge(e.target.files[0])}}
                                                                                required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companycinremark" id="companycinremark" value={companycinremark}
                                                                                    onChange={(e) => setcompanycinremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">Issued Place</label>
                                                                            <input type="text" class="form-control" placeholder="Issued Place" name="companyissuedplace" id="companyissuedplace" value={companyissuedplace}
                                                                                    onChange={(e) => setcompanyissuedplace(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf"  style={{ height:'10px' }}
                                                                                id="companyissuedplaceimage" 
                                                                                name="companyissuedplaceimage" 
                                                                                 
                                                                                onChange={(e) => {setcompanyissuedplaceimage(e.target.files[0])}} required/>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companyissuedplaceremark" id="companyissuedplaceremark" value={companyissuedplaceremark}
                                                                                    onChange={(e) => setcompanyissuedplaceremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">Issuing Authority</label>
                                                                            <input type="text" class="form-control" placeholder="Issuing Authority" name="companyauthority" id="companyauthority" value={companyauthority}
                                                                                    onChange={(e) => setcompanyauthority(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf"  style={{ height:'10px' }}
                                                                                id="companyauthorityimage" 
                                                                                name="companyauthorityimage" 
                                                                                
                                                                                onChange={(e) => {setcompanyauthorityimage(e.target.files[0])}} required/>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companyauthorityremark" id="companyauthorityremark" value={companyauthorityremark}
                                                                                    onChange={(e) => setcompanyauthorityremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                            <label class="form-label">Registration Date</label>
                                                                            <input type="date" class="form-control" placeholder="Type here" name="companyregistrationdate" id="companyregistrationdate" value={companyregistrationdate}
                                                                                    onChange={(e) => setcompanyregistrationdate(e.target.value)} required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">PAN Number</label>
                                                                            <input type="text" class="form-control" placeholder="PAN Number" name="companypan" id="companypan" value={companypan}
                                                                                    onChange={(e) => setcompanypan(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf"  style={{ height:'10px' }}
                                                                                id="companypanimage" 
                                                                                name="companypanimage" 
                                                                                 
                                                                                onChange={(e) => {setcompanypanimage(e.target.files[0])}}
                                                                                
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companypanremark" id="companypanremark" value={companyauthorityremark}
                                                                                    onChange={(e) => setcompanypanremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">TAN Number</label>
                                                                            <input type="text" class="form-control" placeholder="TAN Number" name="companytan" id="companytan" value={companytan}
                                                                                    onChange={(e) => setcompanytan(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                id="companytanimage" 
                                                                                name="companytanimage" 
                                                                                 
                                                                                onChange={(e) => {setcompanytanimage(e.target.files[0])}} required/>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companytanremark" id="companytanremark" value={companytanremark}
                                                                                    onChange={(e) => setcompanytanremark(e.target.value)} />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">TIN Number</label>
                                                                            <input type="text" class="form-control" placeholder="TIN Number" name="companytin" id="companytin" value={companytin}
                                                                                    onChange={(e) => setcompanytin(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf"  style={{ height:'10px' }}
                                                                                id="companytinimage" 
                                                                                name="companytanimage" 
                                                                                
                                                                                onChange={(e) => {setcompanytinimage(e.target.files[0])}}
                                                                                required/>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companytinremark" id="companytinremark" value={companytinremark}
                                                                                    onChange={(e) => setcompanytinremark(e.target.value)} />
                                                                        </td>
                                                                    </tr>                                              
                                                                    <tr>
                                                                        <td>
                                                                            <label class="form-label">GST Number</label>
                                                                            <input type="text" class="form-control" placeholder="GST Number" name="companygst" id="companygst" value={companygst}
                                                                                    onChange={(e) => setcompanygst(e.target.value)} required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" multiple="" accept="image/*,application/pdf"  class="form-control" style={{ height:'10px' }}
                                                                                id="companygstimage" 
                                                                                name="companygstimage" 
                                                                                
                                                                                onChange={(e) => {setcompanygstimage(e.target.files[0])}}
                                                                                required/>
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remarks</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="companygstremark" id="companygstremark" value={companygstremark}
                                                                                    onChange={(e) => setcompanygstremark(e.target.value)} />
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                                <table className="table  creat_tbl">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={4}>
                                                                                <h4>B.1 Details of Directors and Authorized person</h4>
                                                                            </td>
                                                                        </tr>
                                                                        <DynamicHTMLGeneratorB1 formData={formData} setFormData={setFormData}/>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                                <table className="table  creat_tbl">
                                                                    <tbody>
                                                                        <tr >
                                                                            
                                                                            <td colSpan={4}>
                                                                                <h4>B.2 Authorized persons to Apply for Licencense/Registration </h4>
                                                                            </td>
                                                                        </tr>
                                                                        <DynamicHTMLGeneratorB2 formData={formData1} setFormData={setFormData1}/>
                                                                        
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                        <div className="table-responsive">
                                                        <table className="table  creat_tbl">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan={4}>
                                                                                <h4>B.3 Persons Responsible for Compliance Activities</h4>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="3" >
                                                                                <DynamicHTMLGeneratorB3  formData={formData2} setFormData={setFormData2}/>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="3" >
                                                                                <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                    <button type="submit" variant="contained" ref={myReftab2buttun} class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>{loadingtab2 && <Loading1 /> }
                                                                                </div>
                                                                            </td>
                                                                        </tr> 
                                                                        </tbody>
                                                                    </table>
                                                            </div>			
                                                    </div>
                                                </div>
                                            </div>
                                            </form>
                                            </div>

                                            <div className={`tab-pane ${activeTab === 'creative-tab3' ? 'active' : ''} fade show`} id="creative-pill3" role="tabpanel" aria-labelledby="creative-tab3">
                                            <form name="thirdtab" method="post" onSubmit={handleSubmitTab3}>
                                            <div className='row'>
                                                <div className="col-12 col-lg-12">
                                                    <div className="card p-3 position-relative">
                                                        
                                                        <div className="table-responsive">
                                                            <table className="table  creat_tbl">
                                                                <tbody>
                                                                    <tr >
                                                                        
                                                                        <td colspan="4">
                                                                            <h4>C.1. MIS</h4>
                                                                        </td>
                                                                    </tr>
                                                                    
                                                                    <DynamicHTMLGeneratorC2 formData={formData4} setFormData={setFormData4}/>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-12 col-lg-12">
                                                    <div className="card p-3 position-relative">
                                                        <div className="table-responsive">
                                                            <table className="table  creat_tbl">
                                                                <tbody>
                                                                    <tr >
                                                                        
                                                                        <td colSpan={4}>
                                                                            <h4>C.2. Compliance Executives</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <DynamicHTMLGeneratorC3 formData={formData5} setFormData={setFormData5}/>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-12 col-lg-12">
                                                    <div className="card p-3 position-relative">
                                                        <div className="table-responsive">
                                                            <table className="table  creat_tbl">
                                                                <tbody>
                                                                    <tr >
                                                                        
                                                                        <td colSpan={4}>
                                                                            <h4>C.3. Escalation</h4>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colSpan={4}>
                                                                            <DynamicHTMLGeneratorC4 formData={formData6} setFormData={setFormData6}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" ref={myReftab3buttun} variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>{loadingtab3 && <Loading1 /> }
                                                                            </div>
                                                                        </td>
                                                                    </tr> 
                                                                </tbody>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                            <div className={`tab-pane ${activeTab === 'reject-tab4' ? 'active' : ''} fade show`} id="reject-tab4" role="tabpanel" aria-labelledby="reject-tab4"> {/*remember*/}
                                            <form name="fourthtab" method="post" onSubmit={handleSubmitTab4}>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                                {/* <table className="table  creat_tbl"> */}
                                                                <h4>D. Other Registration Details</h4>
                                                                    <h4>D.1. PF Registration</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="" className="form-label">Regsitration Number</label>
                                                                        <input type="text" class="form-control" name="pfnumber" id="pfnumber" 
                                                                        value={pfnumber}
                                                                        onChange={(e) => setpfnumber(e.target.value)}placeholder="Registration Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="pfimage" class="form-control" multiple="" accept="image/*,application/pdf" id="pfimage" style={{ height:'10px' }}
                                                                                
                                                                                onChange={(e) => {setpfimage(e.target.files[0])}} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="" className="form-label">Remark</label>
                                                                        <input type="text" class="form-control" name="pfdremark" id="pfdremark" value={pfdremark}
                                                                                    onChange={(e) => setpfdremark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                        <label for="">Date of Coverage</label>
                                                                        <input type="date" class="form-control" name="doc" id="doc" 
                                                                        value={doc}
                                                                        onChange={(e) => setdoc(e.target.value)} 
                                                                        placeholder="Date of Agreement and validity" required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                        <label for="">Office Address as per Registration</label>
                                                                            
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <input type="text" class="form-control" placeholder="Address" name="pfaddress" value={pfaddress} id="pfaddress" onChange={(e)=>setpfaddress(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <select className="form-select" aria-label="Default select example" id="state" name="state" value={pfstate} onChange={(e)=>setpfstate(e.target.value)} required>
                                                                                            <option value="">Select State</option>
                                                                                        {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                                                            <option value={item._id}>{item.name}</option>
                                                                                        )};
                                                                                    </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="text" class="form-control" placeholder="District" name="pfdistrict" id="pfdistrict" value={pfdistrict} onChange={(e)=>setpfdistrict(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="number" class="form-control" placeholder="PIN" name="pfpin" id="pfpin" value={pfpin} onChange={(e)=>setpfpin(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                    name="pfaddressimage" id="pfaddressimage" 
                                                                                    onChange={(e) => setpfaddressimage(e.target.files[0])}
                                                                                    required />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="pfaddressremark" id="pfaddressremark" value={pfaddressremark}
                                                                                    onChange={(e) => setpfaddressremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className='align-middle'>
                                                                        <td>
                                                                        <label for="">Is PF Subcodes Available?</label>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="3" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowSubcodes}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showSubcodes} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                    </tr>
                                                                </table>
                                                                                                                                                                                        <div style={{ display:'none' }} 
                                                                ref={myRefSubcodes}>       
                                                                <table className="table  creat_tbl">    

                                                                    <DynamicHTMLGeneratorD1 formData={formData7} setFormData={setFormData7}/>
                                                                </table>
                                                                </div>
                                                                <h4>D.2. ESI Registration</h4>
                                                                <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="" className="form-label">Regsitration Number</label>
                                                                        <input type="text" class="form-control" name="esinumber" id="esinumber" 
                                                                        value={esinumber}
                                                                        onChange={(e) => setesinumber(e.target.value)}placeholder="Registration Number" />
                                                                        </td>
                                                                        <td> 
                                                                        <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="esiimage" class="form-control" multiple="" accept="image/*,application/pdf" id="esiimage" style={{ height:'10px' }}
                                                                                
                                                                                onChange={(e) => {setesiimage(e.target.files[0])}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="" className="form-label">Remark</label>
                                                                        <input type="text" class="form-control" name="esidremark" id="esidremark" value={esidremark}
                                                                                    onChange={(e) => setesidremark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                        <label for="">Date of Coverage</label>
                                                                        <input type="date" class="form-control" name="esidoc" id="esidoc" 
                                                                        value={esidoc}
                                                                        onChange={(e) => setesidoc(e.target.value)} 
                                                                        placeholder="Date of Agreement and validity" required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr >
                                                                        
                                                                        <td>
                                                                        <label for="">Office Address as per Registration</label>
                                                                            
                                                                            <table>
                                                                                <tr>
                                                                                    <td>
                                                                                        <input type="text" class="form-control" placeholder="Address" name="esiaddress" value={esiaddress} id="esiaddress" onChange={(e)=>setesiaddress(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <select className="form-select" aria-label="Default select example" id="state" name="state" value={esistate} onChange={(e)=>setesistate(e.target.value)} required>
                                                                                            <option value="">Select State</option>
                                                                                        {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                                                            <option value={item._id}>{item.name}</option>
                                                                                        )};
                                                                                    </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="text" class="form-control" placeholder="District" name="esidistrict" id="esidistrict" value={esidistrict} onChange={(e)=>setesidistrict(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td><input type="number" class="form-control" placeholder="PIN" name="esipin" id="esipin" value={esipin} onChange={(e)=>setesipin(e.target.value)} required/>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td>
                                                                            <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                    name="esiaddressimage" id="esiaddressimage" 
                                                                                    onChange={(e) => setesiaddressimage(e.target.files[0])}
                                                                                    required />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <label class="form-label">Remark</label>
                                                                            <input type="text" class="form-control" placeholder="Write here" name="esiaddressremark" id="esiaddressremark" value={esiaddressremark}
                                                                                    onChange={(e) => setesiaddressremark(e.target.value)}/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className='align-middle'>
                                                                        <td>
                                                                        <label for="">Is ESI Subcodes Available?</label>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="3" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowSubcodesESI}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showSubcodesESI} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                    </tr>
                                                                </table>
                                                                                                                                                                                                <div style={{ display:'none' }} 
                                                                ref={myRefSubcodesESI}>       
                                                                {/* <table className="table  creat_tbl">     */}

                                                                    <DynamicHTMLGeneratorD2 formData={formData8} setFormData={setFormData8}/>
                                                                {/* </table> */}
                                                                </div>
                                                                    <h4>D.3. Shop and Establishment Registration</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Regsitration Number</label>
                                                                        <input type="text" class="form-control" name="registrationD3" id="registrationD3" 
                                                                        value={registrationD3}
                                                                        onChange={(e) => setregistrationD3(e.target.value)}placeholder="Registration Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="registrationD3image" class="form-control" multiple="" accept="image/*,application/pdf" id="registrationD3image" style={{ height:'10px' }}
                                                                                    
                                                                                    onChange={(e) => {setregistrationD3image(e.target.files[0])}} 
                                                                                    required/>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="registrationD3remark" id="registrationD3remark"
                                                                        value={registrationD3remark} 
                                                                        onChange={(e) => setregistrationD3remark(e.target.value)}placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                        <label for="">Date of Registration</label>
                                                                        <input type="date" class="form-control" name="doregistrationD3" id="doregistrationD3"
                                                                        value={doregistrationD3} 
                                                                        onChange={(e) => setdoregistrationD3(e.target.value)} placeholder="Date of Registration" required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                        <label for="">Date of Expiry</label>
                                                                        <input type="date" class="form-control" name="doeregistrationD3" id="doeregistrationD3"
                                                                        value={doeregistrationD3} 
                                                                        onChange={(e) => setdoeregistrationD3(e.target.value)} placeholder="Date of Expiry"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                        <label for="">Due Date of Renewal</label>
                                                                        <input type="date" class="form-control" name="doddrregistrationD3" id="doddrregistrationD3"
                                                                        value={doddrregistrationD3} 
                                                                        onChange={(e) => setdoddrregistrationD3(e.target.value)}placeholder="Due Date of Renewal"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Manager Name on the License</label>
                                                                        <input type="text" class="form-control" name="managernameD3" id="managernameD3"
                                                                        value={managernameD3} 
                                                                        onChange={(e) => setmanagernameD3(e.target.value)} placeholder="Type here" required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                    name="managernameD3image" id="managernameD3image"
                                                                                    
                                                                                    onChange={(e) => setmanagernameD3image(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="managernameD3remark" id="managernameD3remark"
                                                                        value={managernameD3remark} 
                                                                        onChange={(e) => setmanagernameD3remark(e.target.value)}  placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                        <label for="">Number of Employees</label>
                                                                        <input type="number" class="form-control" name="noeD3" id="noeD3"
                                                                        value={noeD3} 
                                                                        onChange={(e) => setnoeD3(e.target.value)}  
                                                                        min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" placeholder="Type here" required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                        <label for="">Male</label>
                                                                        <input type="number" class="form-control" name="noemD3" id="noemD3"
                                                                        value={noemD3} 
                                                                        onChange={(e) => setnoemD3(e.target.value)}  min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" placeholder="Type here" required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3"> 
                                                                        <label for="">Female</label>
                                                                        <input type="number" class="form-control" name="noefD3" id="noefD3"
                                                                        value={noefD3} 
                                                                        onChange={(e) => setnoefD3(e.target.value)}  min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" placeholder="Type here" required/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Issuing Authority</label>
                                                                        <input type="text" class="form-control" name="issueauthfD3" id="issueauthfD3"
                                                                        value={issueauthfD3} 
                                                                        onChange={(e) => setissueauthfD3(e.target.value)}  placeholder="Type here" required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                    name="issueauthfD3image" id="issueauthfD3image"
                                                                                    
                                                                                    onChange={(e) => setissueauthfDimage(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="issueauthfD3remark" id="issueauthfD3remark"
                                                                        value={issueauthfD3remark} 
                                                                        onChange={(e) => setissueauthfD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.3.1. Factory License</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                    <td>
                                                                                <label className="form-label">License Number</label>
                                                                                <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Licence Number"
                                                                                value={licensenumber}
                                                                                id="licensenumber"
                                                                                name="licensenumber"
                                                                                onChange={(e)=>setlicensenumber(e.target.value)}
                                                                                required/>
                                                                            </td>
                                                                            <td colspan="2"> 
                                                                            <div>
                                                                                    <div class="form-group files1">
                                                                                        <input type="file" class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                        name="licensenumberimage"id="licensenumberimage"
                                                                                        onChange={(e) => setlicensenumberimage(e.target.files[0])} required
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                            <label for="">Remark</label>
                                                                            <input type="text" class="form-control" name="licensenumberremark"id="licensenumberremark"
                                                                            value={licensenumberremark} 
                                                                            onChange={(e) => setlicensenumberremark(e.target.value)} placeholder="Write Here"/>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="4">
                                                                                <label className="form-label">Date of Registration</label>
                                                                                <input
                                                                                type="date"
                                                                                className="form-control"
                                                                                placeholder="Date of Registration"
                                                                                value={dor}
                                                                                onChange={(e) => setdor(e.target.value)}
                                                                                id="dor"  
                                                                                name="dor"
                                                                                required
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="4">
                                                                                <label className="form-label">Date of Expiry</label>
                                                                                <input
                                                                                type="date"
                                                                                className="form-control"
                                                                                placeholder="Date of Expiry"
                                                                                value={doe}
                                                                                onChange={(e) => setdoe(e.target.value)}
                                                                                id="doe"  
                                                                                name="doe"
                                                                                required
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="4">
                                                                                <label className="form-label">Due Date of Renewal</label>
                                                                                <input
                                                                                type="date"
                                                                                className="form-control"
                                                                                placeholder="Due Date of Renewal"
                                                                                value={doddr}
                                                                                onChange={(e) => setdoddr(e.target.value)}
                                                                                id="doddr"  
                                                                                name="doddr"
                                                                                required
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">
                                                                                    <label className="form-label">Manager Name of the License</label>
                                                                                    <input 
                                                                                    type="text" 
                                                                                    class="form-control" 
                                                                                    placeholder="Manager Name of the License" 
                                                                                    value={managernamelicense}
                                                                                    onChange={(e)=>setmanagernamelicense(e.target.value)} 
                                                                                    name="managernamelicense"  
                                                                                    id="managernamelicense"
                                                                                    required/>
                                                                            </td>
                                                                            <td>
                                                                                <div className="form-group files1">
                                                                                <input
                                                                                    type="file"
                                                                                    multiple=""
                                                                                    accept="image/*,application/pdf"
                                                                                    className="form-control"
                                                                                    style={{ height: '10px' }}
                                                                                    onChange={(e) => setmanagerlicenseimage(e.target.files[0])}
                                                                                    id="managerlicenseimage"  
                                                                                    name="managerlicenseimage"
                                                                                    required
                                                                                />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <label className="form-label">Remarks</label>
                                                                                <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Remark"
                                                                                value={managerlicenseremark}
                                                                                onChange={(e) => setmanagerlicenseremark(e.target.value)}
                                                                                id="managerlicenseremark" 
                                                                                name="managerlicenseremark" 
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="4">
                                                                                <label className="form-label">Number of the Employees</label>
                                                                                <input
                                                                                type="number"
                                                                                className="form-control"
                                                                                placeholder="Number of the Employees"
                                                                                value={noe}
                                                                                min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                                                                onChange={(e) => setnoe(e.target.value)}
                                                                                id="noe"  
                                                                                name="noe" 
                                                                                required
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="4">
                                                                                <label className="form-label">Male</label>
                                                                                <input
                                                                                type="number"
                                                                                className="form-control"
                                                                                placeholder="Male"
                                                                                value={nom}
                                                                                min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                                                                onChange={(e) => setnom(e.target.value)}
                                                                                id="nom" 
                                                                                name="nom"
                                                                                required
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="4">
                                                                                <label className="form-label">Female</label>
                                                                                <input
                                                                                type="number"
                                                                                className="form-control"
                                                                                placeholder="Female"
                                                                                value={nof}
                                                                                min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                                                                onChange={(e) => setnof(e.target.value)}
                                                                                id="nof"  
                                                                                name="nof"
                                                                                required
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="2">
                                                                                    <label className="form-label">Issuing Authority</label>
                                                                                    <input type="text" class="form-control" 
                                                                                    placeholder="Issuing Authority" 
                                                                                    value={issuingauth}
                                                                                    onChange={(e)=>setissuingauth(e.target.value)} 
                                                                                    name="issuingauth"
                                                                                    id="issuingauth" 
                                                                                    required/>
                                                                            </td>
                                                                            <td>
                                                                                <div className="form-group files1">
                                                                                <input
                                                                                    type="file"
                                                                                    multiple=""
                                                                                    accept="image/*,application/pdf"
                                                                                    className="form-control"
                                                                                    style={{ height: '10px' }}
                                                                                    onChange={(e) => setissuingauthimage(e.target.files[0])}
                                                                                    id="issuingauthimage"  
                                                                                    name="issuingauthimage"
                                                                                    required
                                                                                />
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <label className="form-label">Remarks</label>
                                                                                <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Remark"
                                                                                value={issuingauthremark}
                                                                                onChange={(e) => setissuingauthremark(e.target.value)}
                                                                                id="issuingauthremark"  
                                                                                name="issuingauthremark" />
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                    <h4>D.3.1. Factory Plan</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">License Number</label>
                                                                        <input type="text" class="form-control" name="fpD3" id="fpD3"
                                                                        value={fpD3} 
                                                                        onChange={(e) => setfpD3(e.target.value)} placeholder="Type here" required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                    name="fpD3image"id="fpD3image"
                                                                                    
                                                                                    onChange={(e) => setfpD3image(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="fpD3remark"id="fpD3remark"
                                                                        value={fpD3remark} 
                                                                        onChange={(e) => setfpD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                        <label for="">Date of Approval</label>
                                                                        <input type="date" class="form-control" name="doapp" id="doapp" 
                                                                        value={doapp}
                                                                        onChange={(e) => setdoapp(e.target.value)} 
                                                                        placeholder="Date of Approval"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Issuing Authority</label>
                                                                        <input type="text" class="form-control" name="issueauthfpD3" id="issueauthfpD3"
                                                                        value={issueauthfpD3} 
                                                                        onChange={(e) => setissueauthfpD3(e.target.value)}  placeholder="Type here" required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file"  class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                    name="issueauthfpD3image" id="issueauthfpD3image"
                                                                                    
                                                                                    onChange={(e) => setissueauthfpD3image(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="issueauthfpD3remark" id="issueauthfpD3remark"
                                                                        value={issueauthfpD3remark} 
                                                                        onChange={(e) => setissueauthfpD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Power-KW</label>
                                                                        <input type="text" class="form-control" name="powerfpD3" id="powerfpD3"
                                                                        value={powerfpD3} 
                                                                        onChange={(e) => setpowerfpD3(e.target.value)}  placeholder="KW" required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*,application/pdf"  style={{ height:'10px' }}
                                                                                    name="powerfpD3image" id="powerfpD3image"
                                                                                    
                                                                                    onChange={(e) => setpowerfpD3image(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="powerfpD3remark" id="powerfpD3remark"
                                                                        value={powerfpD3remark} 
                                                                        onChange={(e) => setpowerfpD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Power-HP</label>
                                                                        <input type="text" class="form-control" name="powerhpfpD3" id="powerhpfpD3"
                                                                        value={powerhpfpD3} 
                                                                        onChange={(e) => setpowerhpfpD3(e.target.value)}  placeholder="KW" required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" class="form-control" multiple="" accept="image/*,application/pdf"  style={{ height:'10px' }}
                                                                                    name="powerhpfpD3image" id="powerhpfpD3image"
                                                                                    
                                                                                    onChange={(e) => setpowerhpfpD3image(e.target.files[0])} required
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="powerhpfpD3remark" id="powerhpfpD3remark"
                                                                        value={powerhpfpD3remark} 
                                                                        onChange={(e) => setpowerhpfpD3remark(e.target.value)} placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.4. LWF Registration</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Regsitration Number</label>
                                                                        <input type="text" class="form-control" name="registrationlwfD3" id="registrationlwfD3" 
                                                                        value={registrationlwfD3}
                                                                        onChange={(e) => setregistrationlwfD3(e.target.value)} placeholder="Registration Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="registrationlwfD3image" class="form-control" multiple="" accept="image/*,application/pdf" id="registrationlwfD3image" style={{ height:'10px' }}
                                                                                    
                                                                                    onChange={(e) => {setregistrationlwfD3image(e.target.files[0])}}
                                                                                    required/>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="registrationlwfD3remark" id="registrationlwfD3remark"
                                                                        value={registrationlwfD3remark} 
                                                                        onChange={(e) => setregistrationlwfD3remark(e.target.value)}placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                        <label for="">Date of Registration</label>
                                                                        <input type="date" class="form-control" name="doregistrationlwfD3" id="doregistrationlwfD3"
                                                                        value={doregistrationlwfD3} 
                                                                        onChange={(e) => setdoregistrationlwfD3(e.target.value)} placeholder="Date of Registration" required/>
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.5. Professional Tax Registration</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                        <label for="">Regsitration Number</label>
                                                                        <input type="text" class="form-control" name="registrationptrD3" id="registrationptrD3" 
                                                                        value={registrationptrD3}
                                                                        onChange={(e) => setregistrationptrD3(e.target.value)}placeholder="Registration Number" required/>
                                                                        </td>
                                                                        <td>
                                                                        <div>
                                                                                <div class="form-group files1">
                                                                                    <input type="file" name="registrationptrD3image" class="form-control" multiple="" accept="image/*,application/pdf" id="registrationptrD3image" style={{ height:'10px' }}
                                                                                    
                                                                                    onChange={(e) => {setregistrationptrD3image(e.target.files[0])}}
                                                                                    required/>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                        <label for="">Remark</label>
                                                                        <input type="text" class="form-control" name="registrationptrD3remark" id="registrationptrD3remark"
                                                                        value={registrationptrD3remark} 
                                                                        onChange={(e) => setregistrationptrD3remark(e.target.value)}placeholder="Write Here"/>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3">
                                                                        <label for="">Date of Registration</label>
                                                                        <input type="date" class="form-control" name="doregistrationptrD3" id="doregistrationptrD3"
                                                                        value={doregistrationptrD3} 
                                                                        onChange={(e) => setdoregistrationptrD3(e.target.value)} placeholder="Date of Registration" required/>
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.6. Night Shift Permission</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3NSP formData={formData10} setFormData={setFormData10} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.7. OT Permission</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3OTP formData={formData11} setFormData={setFormData11} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.8. Weekly Off Exemption</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3WOE formData={formData12} setFormData={setFormData12} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.9. Trade License </h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3TD formData={formData13} setFormData={setFormData13} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.10. MSME </h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3MSME formData={formData14} setFormData={setFormData14} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.11. BOCW</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td>
                                                                            <DynamicHTMLGeneratorD3BOCW formData={formData15} setFormData={setFormData15} />
                                                                        </td>
                                                                    </tr>
                                                                    </table>
                                                                    <h4>D.12. Interstate Migrant Workmen</h4>
                                                                    <table className="table  creat_tbl">
                                                                    <tr>
                                                                        <td colspan="3">
                                                                            <DynamicHTMLGeneratorD3IMW formData={formData16} setFormData={setFormData16} />
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="3" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" ref={myReftab4buttun} variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>{loadingtab4 && <Loading1 /> }
                                                                            </div>
                                                                        </td>
                                                                    </tr> 
                                                                    </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                            {labourEngaged ===false ?
                                            <div className={`tab-pane ${activeTab === 'reject-tab5' ? 'active' : ''} fade show`} id="reject-tab5" role="tabpanel" aria-labelledby="reject-tab5"> {/**remember */}
                                           
                                            <form name="fifthtab" method="post" onSubmit={handleSubmitTab5}>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                            <h4>E. Details of the Labour Contractors</h4>
                                                            <table className="table  creat_tbl"> 
                                                                    <tr className='align-middle'>
                                                                        <td>
                                                                        <label for="">Is Contract Labour Engaged?</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="3" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowLabour}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showLabour} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                    </tr>
                                                                </table>
                                                                <div style={{ display:'inline' }} 
                                                                    ref={myRefSubcodesLabour}>       {/**whole form div starts */}
                                                                    <DynamicHTMLGeneratorE formData={formData26} setFormData={setFormData26} />
                                                                </div> {/**whole form div ends */}
                                                                <table className="table  creat_tbl">
                                                                <tr>
                                                                        <td colspan="3" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" ref={myReftab5buttun} variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>{loadingtab5 && <Loading1 /> }
                                                                            </div>
                                                                        </td>
                                                                    </tr> 
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </form></div>  : <div className={`tab-pane ${activeTab === 'reject-tab5' ? 'active' : ''} fade show`} id="reject-tab5" role="tabpanel" aria-labelledby="reject-tab5">
                                                    
                                                    <form name="fifthtab" method="post" >
                                                    <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                                <table className="table  creat_tbl">
                                                                <h4>E. Details of the Labour Contractors</h4>   
                                                                <tr className='align-middle'>
                                                                        <td>
                                                                        <label for="">Is Contract Labour Engaged?</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="3" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowLabour}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showLabour} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                    </tr>
                                                                </table>
                                                                <div style={{ display:'none' }} 
                                                                    ref={myRefSubcodesLabour}>       {/**whole form div starts */}
                                                                
                                                                </div>
                                                                <table className="table  creat_tbl">    
                                                                <tr>
                                                                        <td colspan="3" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="button" ref={myReftab5buttun} onClick={handleSubmitTab51}variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Next</button>{loadingtab5 && <Loading1 /> }
                                                                            </div>
                                                                        </td>
                                                                    </tr> 
                                                                </table>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </form>
                                                </div>}
                                <div className={`tab-pane ${activeTab === 'reject-tab6' ? 'active ' : ''} fade show `} id="reject-tab6" role="tabpanel" aria-labelledby="reject-tab6"> {/**remember */}
                                {/* <form name="sixthtab" method="post" onSubmit={handleSubmitTab6}> */}
                                    <div className='row'>
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 position-relative">
                                                <div className="table-responsive">
                                                    {/* <h4>F. Details of the Branch's(1)</h4> */}
                                                                <DynamicHTMLGeneratorF1 formData={formData17} setFormData={setFormData17} myElementRefTab6={myElementRefTab6} myReftab6buttun={myReftab6buttun} myElementRefTab7={myElementRefTab7} activeTab={activeTab} setActiveTab={setActiveTab} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </form> */}
                                </div>
                                <div className={`tab-pane ${activeTab === 'reject-tab7' ? 'active ' : ''} fade show `} id="reject-tab7" role="tabpanel" aria-labelledby="reject-tab7"> 
                                            <form name="seventhform" method="post" onSubmit={handleSubmitTab7}>
                                                <div className='row'>
                                                    <div className="col-12 col-lg-12">
                                                        <div className="card p-3 position-relative">
                                                            <div className="table-responsive">
                                                            <h4>G. Is the Company a Contractor</h4>
                                                            <table className="table  creat_tbl">
                                                                    <tr className='align-middle'>
                                                                        <td colspan="3">
                                                                        <label for="">Is the Contract Labour Engaged (Yes/No)</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="3" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowgshow}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showgshow} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                </tr>
                                                                </table>
                                                                <div style={{ display:'none' }} 
                                                                        ref={myRefGLabour}> 
                                                                <h4>G.1.1. Details of Contract Work</h4>        
                                                                <DynamicHTMLGeneratorGCC formData={formData25} setFormData={setFormData25}/>
                                                                </div>
                                                                <h4>G.1.2. Nature of the Contract Work</h4>
                                                                <table className="table creat_tbl">
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Agreement Reference Number</label>
                                                                    <input type="text" class="form-control" name="g12ncw" value={g12ncw} id="g12ncw" onChange={(e)=>setg12ncw(e.target.value)} placeholder="Agreement Reference Number" required/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" name="g12ncwimage" class="form-control" multiple="" accept="image/*,application/pdf" id="g12ncwimage" style={{ height:'10px' }}
                                                                                onChange={(e) => {setg12ncwimage(e.target.files[0])}} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" value={g12ncwremark} name="g12ncwremark" id="g12ncwremark" onChange={(e)=>setg12ncwremark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3">
                                                                    <label for="">Agreement Date</label>
                                                                    <input type="date" class="form-control" value={g12ncwdate} name="g12ncwdate" id="g12ncwdate" onChange={(e)=>setg12ncwdate(e.target.value)}  placeholder="Agreement Date" required/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3">
                                                                    <label for="">Agreement Validity</label>
                                                                    <input type="date" class="form-control" value={g12ncwdatevalid} name="g12ncwdatevalid" id="g12ncwdatevalid" onChange={(e)=>setg12ncwdatevalid(e.target.value)}  placeholder="Agreement Date" required/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3">
                                                                    <label for="">Number of Workers to be engaged</label>
                                                                    <input type="number" class="form-control" value={g12ncwnow} name="g12ncwnow" id="g12ncwnow" onChange={(e)=>setg12ncwnow(e.target.value)} placeholder="Number of Workers to be engaged" required/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label for="">Category of the Establishment</label>
                                                                    <input type="text" class="form-control" value={g12ncwcoe} name="g12ncwcoe" id="g12ncwcoe" onChange={(e)=>setg12ncwcoe(e.target.value)} placeholder="Category of the Establishment" required/>
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                                <input type="file" class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px' }}
                                                                                name="g12ncwcoeimage" id="g12ncwcoeimage" onChange={(e)=>setg12ncwcoeimage(e.target.files[0])} required
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" value={g12ncwcoeremark} name="g12ncwcoeremark" id="g12ncwcoeremark" onChange={(e)=>setg12ncwcoeremark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                </table>
                                                                <table className="table  creat_tbl">
                                                                    <tr className='align-middle'>
                                                                        <td colspan="3">
                                                                        <label for="">Is CLRA Applicable?</label>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="3" style={{ width:'100%' }}>
                                                                            <input name="" id="" class="btn " type="button" value="YES" style={{ width:'20%',backgroundColor:'#cee9f2' }}  onClick={noshowgclrashow} ref={refnoshowgclrashow}/>
                                                                            <input name="" id="" class="btn " type="button" value="NO"  onClick={showgclrashow} ref={refshowgclrashow} style={{ width:'20%',backgroundColor:'#cee9f2' }}/>
                                                                            </td>
                                                                </tr>
                                                                </table>
                                                                <div style={{ display: isVisible ? 'inline' : 'none' }} 
                                                                        ref={myRefGCLRA}>
                                                                <h4>G.1.3. Details of CLRA License</h4>
                                                                <table className="table creat_tbl">
                                                                <tr>
                                                                    <td><label for="">Number of Form 5/Form III and date</label>
                                                                    {isVisible && (<input type="text" class="form-control" value={g13form} name="g13form" id="g13form" onChange={(e)=>setg13form(e.target.value)} placeholder="Number of Form 5/Form III and date" 
                                                                    ref={inputRefsclra.inputRef1}
                                                                    />)}
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                            {isVisible && (<input type="file" name="g13formimage" class="form-control" multiple="" accept="image/*,application/pdf" id="g13formimage" style={{ height:'10px' }}
                                                                                onChange={(e) => {setg13formimage(e)}} 
                                                                                ref={inputRefsclra.inputRef2}
                                                                                />)}
                                                                            </div>
                                                                        </div> 
                                                                    </td>
                                                                    <td>
                                                                    <label for="">Remark</label>
                                                                    <input type="text" class="form-control" value={g13formremark} name="g13formremark" id="g13formremark" onChange={(e)=>setg13formremark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3"><label for="">Form 5/Form III date</label>
                                                                    {isVisible && (<input type="date" class="form-control" value={g13form5date} name="g13form5date" id="g13form5date" onChange={(e)=>setg13form5date(e.target.value)} placeholder="Form 5/Form III date" 
                                                                    ref={inputRefsclra.inputRef3}
                                                                    />)}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3"><label for="">Date on which the contract work commenced</label>
                                                                    {isVisible && (<input type="date" class="form-control" name="g13form5dateofcommence" value={g13form5dateofcommence} id="g13form5dateofcommence" onChange={(e)=>setg13form5dateofcommence(e.target.value)} placeholder="Date" 
                                                                    ref={inputRefsclra.inputRef4}
                                                                    />)}
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td><label for="">License Number</label>
                                                                    {isVisible && (<input type="text" class="form-control" name="g13form5licenece" id="g13form5licenece" value={g13form5licenece} onChange={(e)=>setg13form5licenece(e.target.value)}  placeholder="Type here" 
                                                                    ref={inputRefsclra.inputRef5}
                                                                    />)}
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                            {isVisible && (<input type="file" name="g13form5liceneceimage" class="form-control" multiple="" accept="image/*,application/pdf" id="g13form5liceneceimage" style={{ height:'10px' }}
                                                                                onChange={(e) => {setg13form5liceneceimage(e.target.files[0])}}  
                                                                                ref={inputRefsclra.inputRef6}
                                                                                />)}
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td><label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="g13form5liceneceremark" value={g13form5liceneceremark} id="g13form5liceneceremark" onChange={(e)=>setg13form5liceneceremark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3"><label for="">Date of License</label>
                                                                    {isVisible && (<input type="date" class="form-control" value={g13form5licensedol} name="g13form5licensedol" id="g13form5licensedol" onChange={(e)=>setg13form5licensedol(e.target.value)} placeholder="Date of License" 
                                                                    ref={inputRefsclra.inputRef7}
                                                                    />)}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3"><label for="">Validity</label>
                                                                    {isVisible && (<input type="date" class="form-control" name="g13form5licensedolvalid" value={g13form5licensedolvalid} id="g13form5licensedolvalid" onChange={(e)=>setg13form5licensedolvalid(e.target.value)}  placeholder="Valid" 
                                                                    ref={inputRefsclra.inputRef8}
                                                                    />)}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3"><label for="">Due Date for Renewal</label>
                                                                    {isVisible && (<input type="date" class="form-control" name="g13form5licensedoldor"  value={g13form5licensedoldor}  id="g13form5licensedoldor" onChange={(e)=>setg13form5licensedoldor(e.target.value)} placeholder="Duse Date of Renewal" 
                                                                    ref={inputRefsclra.inputRef9}
                                                                    />)}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3"><label for="">Number of Contract Workers</label>
                                                                    {isVisible && (<input type="number" class="form-control" name="g13form5licenseworkers" value={g13form5licenseworkers} id="g13form5licenseworkers" onChange={(e)=>setg13form5licenseworkers(e.target.value)}  placeholder="Number of Contract Workers" 
                                                                    ref={inputRefsclra.inputRef10}
                                                                    />)}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="3"><label for="">Number of Manager Responsible</label>
                                                                    {isVisible && (<input type="number" class="form-control" name="g13form5licensemanresp" value={g13form5licensemanresp} id="g13form5licensemanresp" onChange={(e)=>setg13form5licensemanresp(e.target.value)}  placeholder="Number of Manager Responsible" 
                                                                    ref={inputRefsclra.inputRef11}
                                                                    />)}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><label for="">License Fee</label>
                                                                    {isVisible && (<input type="text" class="form-control" name="g13form5licensefee" id="g13form5licensefee" value={g13form5licensefee} onChange={(e)=>setg13form5licensefee(e.target.value)} placeholder="License Fee" 
                                                                    ref={inputRefsclra.inputRef12}
                                                                    />)}
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                            {isVisible && (<input type="file" class="form-control" multiple="" accept="image/*,application/pdf"  style={{ height:'10px' }}
                                                                                name="g13form5licensefeeimage" id="g13form5licensefeeimage" onChange={(e)=>setg13form5licensefeeimage(e.target.files[0])} 
                                                                                ref={inputRefsclra.inputRef13}
                                                                                />)}
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td><label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="g13form5licensefeeremark" value={g13form5licensefeeremark} id="g13form5licensefeeremark" onChange={(e)=>setg13form5licensefeeremark(e.target.value)} placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td><label for="">Security Deposit</label>
                                                                    {isVisible && (<input type="text" class="form-control" name="g13form5securityfee" id="g13form5securityfee" value={g13form5securityfee}  onChange={(e)=>setg13form5securityfee(e.target.value)} placeholder="Security Deposit" 
                                                                    ref={inputRefsclra.inputRef14}
                                                                    />)}
                                                                    </td>
                                                                    <td>
                                                                    <div>
                                                                            <div class="form-group files1">
                                                                            {isVisible && (<input type="file" class="form-control" multiple="" accept="image/*,application/pdf"  style={{ height:'10px' }}name="g13form5securityfeeimage" id="g13form5securityfeeimage" onChange={(e)=>setg13form5securityfeeimage(e.target.files[0])} 
                                                                            ref={inputRefsclra.inputRef15}    
                                                                            />)}
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td><label for="">Remark</label>
                                                                    <input type="text" class="form-control" name="g13form5securityfeeremark" value={g13form5securityfeeremark} id="g13form5securityfeeremark" onChange={(e)=>setg13form5securityfeeremark(e.target.value)}  placeholder="Write Here"/>
                                                                    </td>
                                                                </tr>
                                                                
                                                                </table>
                                                                </div>
                                                                <h4>G.1.4. Details of the Completion of the Contract</h4>
                                                                <table className="table creat_tbl">
                                                                   <tr>
                                                                    <td><label for="">Date on which the contract work completed</label>
                                                                        <input type="date" class="form-control" value={g14dcwc} name="g14dcwc" id="g14dcwc" onChange={(e)=>setg14dcwc(e.target.value)} placeholder="Date" required/>
                                                                    </td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td><label for="">Date of Notice of the Completion of contract</label>
                                                                        <input type="date" class="form-control" value={g14dncc} name="g14dncc" id="g14dncc" onChange={(e)=>setg14dncc(e.target.value)} placeholder="Date" required/>
                                                                    </td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td><label for="">Date of application for the refund of the security deposit</label>
                                                                        <input type="date" class="form-control" value={g14dars} name="g14dars" id="g14dars" onChange={(e)=>setg14dars(e.target.value)} placeholder="Date" required/>
                                                                    </td>
                                                                    </tr>
                                                                    <tr>
                                                                    <td><label for="">Date on which the license is surrendered</label>
                                                                        <input type="date" class="form-control" value={g14dls} name="g14dls" id="g14dls" onChange={(e)=>setg14dls(e.target.value)} placeholder="Date" required/>
                                                                    </td>
                                                                    </tr>
                                                                    <tr>
                                                                            <td colspan="3" >
                                                                            <div class="col-6 col-lg-6 col-md-6 mb-2" >
                                                                                <button type="submit" ref={myReftab7buttun} variant="contained" class="w-100 btn btn-primary" disabled={isDisabled} >Save</button>{loadingtab7 && <Loading1 /> }
                                                                            </div>
                                                                        </td>
                                                                    </tr> 
                                                                </table>
                                                            

                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                </form>
                                            </div>
                                            
                                        </div>
                                        {/* <form name="save" onSubmit={saveandapprove}> */}
                                            <button type="submit" style={{ width:'100%',marginBottom:'10px' }} className="w-80 btn btn-primary" onClick={saveandapprove} disabled={companytab1CreateInfo && companytab1CreateInfo.created_at === null?'disabled':''}>Save And Approve</button>
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade" id="pills-profile-creat-li" role="tabpanel" aria-labelledby="pills-profile-tab-creat-li" >
                                    <div className="row">
                                        <Companylicense />
                                        
                                    </div> 
                            </div>
                        </div> 
                        
                    </div>
                    
                </div>
            </div>
            <div className="tab-pane fade" id="creative-pill" role="tabpanel" aria-labelledby="creative-tab">
                <div className="row">
                    <Companyinteraction />
                </div>
            </div>
            <div className="tab-pane fade" id="assign-pill" role="tabpanel" aria-labelledby="assign-tab">
                <div className="row">
                    <Assigncompanies />
                </div>
            </div>
        </div>
    </div>
            </div>
        </div>
    </div>
</React.Fragment >
    )
}

export default Companies;