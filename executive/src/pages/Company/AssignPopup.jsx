import React,{useState,useEffect,useMemo,useRef} from 'react';
import { FormGroup,styled,ImageListItem,ImageList } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {assignCreate,assignGetByid,assignUpdateById,stateGets,executiveGet,categoryGet,branchGet,assignGetOnCreate,companyTableGet} from "../../store/actions/otherActions";

//import { updatestatuswithremark } from '../../routes/api';
import { useForm, Form } from '../../components/useForm';
const AssignPopup = ({ addOrEdit,recordForEdit }) => {
    //alert(recordForEdit._id); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const myElementRefCompany = useRef(null);
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )

    const [date, setDate] = useState(defaultDate)

    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }
    const checklistAllComliance = useSelector((state) => state.checklistAllComliance);
    const { checklistAllComp } = checklistAllComliance; 
    console.log(checklistAllComp)
    const catGet = useSelector((state) => state.catGet);
    const { loading, categoryInfo,error } = catGet;  
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getExecutive = useSelector((state) => state.getExecutive);
    const { loadingexecutive,executiveInfo } = getExecutive; 
    console.log(executiveInfo);
    const checklist = useSelector((state) => state.checklist);
    const { loadingChecklist,checklistInfo } = checklist; 
    const checklistId = useSelector((state) => state.checklistId);
    const { loadingg,checklistInfoId } = checklistId;
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    const [assigndate, setassigndate] = useState('');
    const [state, setState] = useState('');
    const [executive, setExecutive] = useState();
    const [company, setCompany] = useState('');
    const [branchname,setBranch] = useState('');
    const handleClose = () => {
       // setDescription('');
        addOrEdit();
        //setOpenPopup(false);
       // recordForEdit(false)
    };
    useEffect(()=>{
      dispatch(categoryGet());
      dispatch(stateGets());
      dispatch(executiveGet());
      const elementcompanybranch = myElementRefCompany.current;
      const postBody = {
        id : elementcompanybranch.value
      }
      if (elementcompanybranch) {
        dispatch(branchGet(postBody));
      }
      // dispatch(compliancesAllForChecklist());
      // dispatch(companyGet());
      dispatch(companyTableGet());
  },[dispatch]);
  const getBbranch = (company) => {
      const elementcompanybranch = myElementRefCompany.current;
      const postBody = {
       id : elementcompanybranch.value
     }
      dispatch(branchGet(postBody));
    }
  useEffect(()=>{
      if(recordForEdit?.id !== undefined && recordForEdit?.id !== null) {
          dispatch(assignGetByid(recordForEdit.id));
      }
  },[dispatch]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(recordForEdit?.id !== undefined && recordForEdit?.id !== null) {
            const formData = new FormData();
            formData.append("state", state);
            formData.append("company", company);
            formData.append("executive", executive);
            formData.append("branchname", branchname);
            formData.append("dates",date);
            dispatch(assignUpdateById(formData,recordForEdit?.id));
            setState('');
            setCompany('');
            setExecutive('');
            setBranch('');
            handleClose();
        }
        else{
            const formData = new FormData();
            formData.append("state", state);
            formData.append("company", company);
            formData.append("executive", executive);
            formData.append("branchname", branchname);
            formData.append("assigndate",date);
            dispatch(assignCreate(formData));
            setState('');
            setCompany('');
            setExecutive('');
            setBranch('');
            handleClose();
        }
    }
    useMemo(() => {
        if(recordForEdit?.id !== undefined && recordForEdit?.id !== null) {
            // if(checklistInfoId !== undefined ) {
            //     setCompliance(checklistInfoId?.compliance);
            //     setCategorys(checklistInfoId?.category);
            //     setState(checklistInfoId?.state);
            //     setBranch(checklistInfoId?.branchname);
            //     setCompany(checklistInfoId?.company);
            //     let ruleTypeArr = [];
            //     if((checklistInfoId?.ruletype) !==  undefined) {
            //         (checklistInfoId?.ruletype).map((item)=>{
            //             if(item !== undefined) 
            //             {
            //                 ruleTypeArr.push({
            //                 id: item.id,
            //                 value: item.value
            //                 })
                            
            //             }
            //             setRules(ruleTypeArr)
            //         });
            //     }
            //     setInputList(rulestype);
            //     let questiontypeArr = [];
            //     if((checklistInfoId?.questiontype) !==  undefined) {
            //         (checklistInfoId?.questiontype).map((item)=>{
            //             if(item !== undefined) 
            //             {
            //                 questiontypeArr.push({
            //                 id: item.id,
            //                 value: item.value
            //                 })
            //             }
            //             setQuestions(questiontypeArr)
            //         });
            //     }
            //     setInputListQuestion(questionstype);
            //     let desctypeArr = [];
            //     if((checklistInfoId?.descriptiontype) !==  undefined) {
            //         (checklistInfoId?.descriptiontype).map((item)=>{
            //             if(item !== undefined) 
            //             {
            //                 desctypeArr.push({
            //                 id: item.id,
            //                 value: item.value
            //                 })
                            
            //             }
            //             setDesc(desctypeArr)
            //         });
            //     }
            //     if(checklistInfoId?.image !==  undefined ){
            //         const imagedocsplit = (checklistInfoId?.image).split('/');
            //         if(imagedocsplit[4]  !==  undefined ){
            //             const fileext = ((imagedocsplit[4].indexOf('pdf')))
                       
            //             if(fileext !=-1){
            //                 setPdf(<a href={checklistInfoId?.image} target="_blank">Click to show pdf</a>)
            //                 setCheckPdf(true);
            //             }
            //             else{
            //                 //setImageShow(<a href={complianceInfoId?.form} target="_blank">Click to show pdf</a>)
            //                 setImage(checklistInfoId?.image)
            //             }
            //         }
                    
            //     }
            //     if(checklistInfoId?.documents !==  undefined ){
            //         setPdf(<a href={checklistInfoId?.documents} target="_blank">Click to show pdf</a>)
            //     }
            //     setInputListDescription(desctype);
            //     //setCompliancetype(checklistInfoId?.compliancetype);
            //     setFrequency(checklistInfoId?.frequency);
            //     setRisk(checklistInfoId?.risk);
            // }
        }    
    },[checklistInfoId])
    const tocategorypage = () => {
        navigate('/dashboard')
    };
    return (
        <Container>
           
        <div>
            <form class="row g-3" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
            <div class="col-md-12 col-lg-12 mb-2">
                <label for="" class="form-label">Company *</label>
                <select className="form-select" ref={myElementRefCompany} aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>{setCompany(e.target.value);getBbranch(e.target.value)}} required>
                        <option value="">Select Company</option>
                        {companyGetTableInfo != 'undefind' && companyGetTableInfo?.length > 0 && companyGetTableInfo.map(item => 
							<option value={item._id}>{item.companyname}</option>
						)};
                </select>
            </div>    
            <div class="col-md-12 col-lg-12 mb-2">
                <label for="" class="form-label">State *</label>
                <select className="form-select" aria-label="Default select example" id="state" name="state" value={state} onChange={(e)=>setState(e.target.value)} required>
                        <option value="">Select State</option>
                    {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                        <option value={item._id}>{item.name}</option>
                    )};
                </select>
            </div>  
            <div class="col-md-12 col-lg-12 mb-2">
                <label for="" class="form-label">Executive *</label>
                <select className="form-select" aria-label="Default select example" id="executive" name="executive" value={executive} onChange={(e)=>setExecutive(e.target.value)} required>
                        <option value="">Select Executive</option>
                    {executiveInfo != 'undefind' && executiveInfo?.length > 0 && executiveInfo.map(item => 
                        <option value={item._id}>{item.firstName && item.firstName}{' '}{item.lastName && item.lastName}</option>
                    )};
                </select>
            </div>                           
            <div class="col-md-12 col-lg-12 mb-2">
                <label for="cat" class="form-label">Branch *</label>
                <select className="form-select" aria-label="Default select example" id="branchname" name="branchname" onChange={(e)=>setBranch(e.target.value)} value={branchname} required>
                    <option value="">Select Branch</option>
                    {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                        <option value={item.id}>{item.name}</option>
                    )};
                </select>
            </div>
        {recordForEdit?.id !== undefined && recordForEdit?.id !== null ? 
        (<div class="col-12 col-lg-12 col-md-12 mb-2">
            <label for="" className="form-label">Assign Date *</label>
            <input type="date" className="form-control" 
                id="assigndate"
                name="assigndate" 
                value={assigndate} 
                onChange={(e)=>setassigndate(e.target.value)}
                required
            />
        </div>):(<div class="col-12 col-lg-12 col-md-12 mb-2">
            <label for="" className="form-label">Assign Date *</label>
            <input type="date" className="form-control" 
                id="dates"
                name="dates" 
                value={assigndate} 
                onChange={(e)=>setassigndate(e.target.value)}
                required
            />
        </div>)}     
            <div class="col-md-6">
                <button type="submit" class="w-100 btn btn-dark" id="cancel" onClick={tocategorypage}>Cancel</button>
            </div>
            <div class="col-md-6">
                <button type="submit" className="w-100 btn btn-primary">Assign</button>
            </div>
            </form>
            </div>
    </Container>    
    )
}

export default AssignPopup;
const Container = styled(FormGroup)`
width: 90%;
margin: 3% auto 0 0%;
& > div {
    margin-top:10px;
    
}
`
const ImagePreview = styled(ImageListItem)`
  margin: 0 0 0 0;
  border: 1px solid rgb(183, 183, 183);
  max-width: 400px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(78, 78, 78);

  img {
    width: 100%;
    height: 100%;
  }
`;
const Ptags =  styled('p')`
font-size:10px;
`