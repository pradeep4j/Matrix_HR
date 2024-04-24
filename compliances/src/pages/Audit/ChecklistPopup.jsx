import React,{useState,useEffect} from 'react';
import { FormGroup,styled,ImageListItem,ImageList } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {checklistCreate,stateGets,usersGet,categoryGet,branchGet,compliancesAllForChecklist,companyGet,checklistUpdateById,checklistGetByid} from "../../store/actions/otherActions";

import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //formik is third party React form library. It provides basic form programming and validation
//import { updatestatuswithremark } from '../../routes/api';
import { useForm, Form } from '../../components/useForm';
const ChecklistPopup = ({ addOrEdit,recordForEdit }) => {
    //alert(recordForEdit._id); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
    //console.log(stateInfo);
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getCompney = useSelector((state) => state.getCompney);
    const { companyInfo } = getCompney; 
    const checklist = useSelector((state) => state.checklist);
    const { loadingChecklist,checklistInfo } = checklist; 
    const checklistId = useSelector((state) => state.checklistId);
    const { loadingg,checklistInfoId } = checklistId;
   
    const [category, setCategory] = useState();
    const [image,setImage] = useState('');
    const [document,setDocument] = useState('');
    const [fileName,setFileName] = useState('');
    const [state, setState] = useState('');
    const [categorys, setCategorys] = useState();
    const [company, setCompany] = useState('');
    const [compliance,setCompliance] = useState('');
    const [branch,setBranch] = useState('');
    const [rule,setRule] = useState('');
    const [question,setQuestion] = useState('');
    const [description,setDescription] = useState('');
    const [frequency,setFrequency] = useState('');
    const [risk,setRisk] = useState('');
    const [fileto,setFile] = useState('');
    const [documentto,setFileDocument] = useState('');
    const [inputList, setInputList] = useState([{ id: 1, value: '' }]);
    const [inputListQuestion, setInputListQuestion] = useState([{ id: 1, value: '' }]);
    const [inputListDescription, setInputListDescription] = useState([{ id: 1, value: '' }]);
    const [rulestype, setRules] = useState([]);
    const [questionstype, setQuestions] = useState([]);
    const [desctype, setDesc] = useState([]);
    const [pdffound, setCheckPdf] = useState(false);
    const [filepdf,setPdf] = useState('');
    
    const handleAddInput = () => {
        const newInputList = [...inputList];
        const newInput = { id: inputList.length + 1, value: '' };
        newInputList.push(newInput);
        setInputList(newInputList);
    };
    const handleInputChange = (id, event) => {
        const newInputList = inputList.map((item) =>
          item.id === id ? { ...item, value: event.target.value } : item
        );
        setInputList(newInputList);
    };
    const handleAddInputQuestion = () => {
        const newInputListQuestion = [...inputListQuestion];
        const newInputQuestion = { id: inputListQuestion.length + 1, value: '' };
        newInputListQuestion.push(newInputQuestion);
        setInputListQuestion(newInputListQuestion);
    };
    const handleInputChangeQuestion = (id, event) => {
        const newInputListQuestion = inputListQuestion.map((item) =>
          item.id === id ? { ...item, value: event.target.value } : item
        );
        setInputListQuestion(newInputListQuestion);
    };
    const handleAddInputDescription = () => {
        const newInputListDescription = [...inputListDescription];
        const newInputDescription = { id: inputListDescription.length + 1, value: '' };
        newInputListDescription.push(newInputDescription);
        setInputListDescription(newInputListDescription);
    };
    const handleInputChangeDescription = (id, event) => {
        const newInputListDescription = inputListDescription.map((item) =>
          item.id === id ? { ...item, value: event.target.value } : item
        );
        setInputListDescription(newInputListDescription);
    };
    const handleProductDocumentUpload= (e) => {
        const file = e.target.files[0];
        setFileDocument(e.target.files[0]);
        TransformFileDataDoc(file);
    };
    //reading image using The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
    const TransformFileDataDoc = (file) => {
        const reader = new FileReader();
        const fileType =file.type;
        let types = false; 
        if(fileType!=="application/pdf"){
            types = true; 
            alert('You can only upload PDF file!');
            return false;
        }
        else{
            types = false;
        }
        if(types===false){
           // alert('sdsds')
            if (file) {
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    setDocument(reader.result);
                }
            }
        }
        else{
            setDocument("");
        }
      }; 
    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
       // alert(JSON.stringify(file))
        setFile(file);
        setFileName(e.target.files[0].name);
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
                  setImage(reader.result);
                }
            }
        }
        else{
            setImage("");
        }
    }; 
   
    const handleClose = () => {
       // setDescription('');
        addOrEdit();
        //setOpenPopup(false);
       // recordForEdit(false)
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
          let rules = '';
        inputList.map((item,index)=>(rules= rules+"\n"+item.value))
        rules.slice(1);
        let questions = '';
        inputListQuestion.map((item,index)=>(questions= questions+"\n"+item.value)) 
        questions.slice(1)
        let description = '';
        inputListDescription.map((item,index)=>(description= description+"\n"+item.value))
        description.slice(1)
        // alert(rules.slice(1));
        // alert(questions.slice(1));
        // alert( description.slice(1)); return;
        if(recordForEdit?.id !== undefined && recordForEdit?.id !== null) {
            const formData = new FormData();
            formData.append("state", state);
            formData.append("category", categorys);
            formData.append("company", company);
            formData.append("compliance", compliance);
            formData.append("executive", '659d4f2609c9923c9e7b8f72');
            formData.append("branch", branch);
            formData.append("rule", rules.slice(1));
            formData.append("question", questions.slice(1));
            formData.append("description", description.slice(1));
            formData.append("image", fileto);
            formData.append("document", documentto);
            formData.append("imagetype", image);
            formData.append("documentstype", document);
            formData.append("frequency", frequency);
            formData.append("risk",risk);
            formData.append("dates",date);
            //alert(loadingChecklist)
            dispatch(checklistUpdateById(formData,recordForEdit?.id));
            setState('');
            setCategorys('');
            setCompany('');
            setCompliance('');
            setBranch('');
            setCompliance('');
            setRule('');
            setQuestion('');
            setDescription('');
            setFrequency('');
            setRisk('');
            handleClose();
        }
        else{
            const formData = new FormData();
            formData.append("state", state);
            formData.append("category", categorys);
            formData.append("company", company);
            formData.append("compliance", compliance);
            formData.append("executive", '659d4f2609c9923c9e7b8f72');
            formData.append("branch", branch);
            formData.append("rule", rules.slice(1));
            formData.append("question", questions.slice(1));
            formData.append("description", description.slice(1));
            formData.append("image", fileto);
            formData.append("document", documentto);
            formData.append("imagetype", image);
            formData.append("documentstype", document);
            formData.append("frequency", frequency);
            formData.append("risk",risk);
            formData.append("dates",date);
            //alert(loadingChecklist)
            dispatch(checklistCreate(formData));
                setState('');
                setCategorys('');
                setCompany('');
                setCompliance('');
                setBranch('');
                setCompliance('');
                setRule('');
                setQuestion('');
                setDescription('');
                setFrequency('');
                setRisk('');
                handleClose();
        }
    }
    useEffect(()=>{
        dispatch(categoryGet());
        dispatch(stateGets());
        dispatch(usersGet());
        dispatch(branchGet());
        dispatch(compliancesAllForChecklist());
        dispatch(companyGet());
    },[dispatch]);
    useEffect(()=>{
        let categoryArr = [];
        if (typeof (categoryInfo) !== 'undefined' && categoryInfo?.length > 0 ) {
            //alert(categoryInfo?.length);
            categoryInfo.map((item, index) => {
                categoryArr.push({
                key:index,
                id: item._id,
                name: item.name
              })
          });
        }
        setCategory(categoryArr);
    },[categoryInfo]);
    useEffect(()=>{
        if(recordForEdit?.id !== undefined && recordForEdit?.id !== null) {
            dispatch(checklistGetByid(recordForEdit.id));
        }
        dispatch(categoryGet());
        dispatch(stateGets());
    },[dispatch]);
    useEffect(() => {
        if(recordForEdit?.id !== undefined && recordForEdit?.id !== null) {
            if(checklistInfoId !== undefined ) {
                setCompliance(checklistInfoId?.compliance);
                setCategorys(checklistInfoId?.category);
                setState(checklistInfoId?.state);
                setBranch(checklistInfoId?.branchname);
                setCompany(checklistInfoId?.company);
                let ruleTypeArr = [];
                if((checklistInfoId?.ruletype) !==  undefined) {
                    (checklistInfoId?.ruletype).map((item)=>{
                        if(item !== undefined) 
                        {
                            ruleTypeArr.push({
                            id: item.id,
                            value: item.value
                            })
                            
                        }
                        setRules(ruleTypeArr)
                    });
                }
                setInputList(rulestype);
                let questiontypeArr = [];
                if((checklistInfoId?.questiontype) !==  undefined) {
                    (checklistInfoId?.questiontype).map((item)=>{
                        if(item !== undefined) 
                        {
                            questiontypeArr.push({
                            id: item.id,
                            value: item.value
                            })
                        }
                        setQuestions(questiontypeArr)
                    });
                }
                setInputListQuestion(questionstype);
                let desctypeArr = [];
                if((checklistInfoId?.descriptiontype) !==  undefined) {
                    (checklistInfoId?.descriptiontype).map((item)=>{
                        if(item !== undefined) 
                        {
                            desctypeArr.push({
                            id: item.id,
                            value: item.value
                            })
                            
                        }
                        setDesc(desctypeArr)
                    });
                }
                if(checklistInfoId?.image !==  undefined ){
                    const imagedocsplit = (checklistInfoId?.image).split('/');
                    if(imagedocsplit[4]  !==  undefined ){
                        const fileext = ((imagedocsplit[4].indexOf('pdf')))
                       
                        if(fileext !=-1){
                            setPdf(<a href={checklistInfoId?.image} target="_blank">Click to show pdf</a>)
                            setCheckPdf(true);
                        }
                        else{
                            //setImageShow(<a href={complianceInfoId?.form} target="_blank">Click to show pdf</a>)
                            setImage(checklistInfoId?.image)
                        }
                    }
                    
                }
                if(checklistInfoId?.documents !==  undefined ){
                    setPdf(<a href={checklistInfoId?.documents} target="_blank">Click to show pdf</a>)
                }
                setInputListDescription(desctype);
                //setCompliancetype(checklistInfoId?.compliancetype);
                setFrequency(checklistInfoId?.frequency);
                setRisk(checklistInfoId?.risk);
            }
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
                <label for="" class="form-label">State *</label>
                <select className="form-select" aria-label="Default select example" id="state" name="state" value={state} onChange={(e)=>setState(e.target.value)} required>
                        <option value="">Select State</option>
                    {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                        <option value={item._id}>{item.name}</option>
                    )};
                </select>
            </div>    
            <div class="col-md-12 col-lg-12 mb-2">
                <label for="cat" class="form-label">Category *</label>
                <select className="form-select" aria-label="Default select example" id="category" name="category" onChange={(e)=>setCategorys(e.target.value)} value={categorys} required>
                    <option value="">Select category</option>
                    {category != 'undefind' && category?.length > 0 && category.map(item => 
                        <option value={item.id}>{item.name}</option>
                    )};
                    
                </select>
            </div>
            <div class="col-md-12 col-lg-12 mb-2">
                <label for="" class="form-label">Company *</label>
                <select className="form-select" aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>setCompany(e.target.value)} required>
                        <option value="">Select Company</option>
                    {companyInfo != 'undefind' && companyInfo?.length > 0 && companyInfo.map(item => 
                        <option value={item._id}>{item.companyname}</option>
                    )};
                </select>
            </div>    
            <div class="col-md-12 col-lg-12 mb-2">
                <label for="cat" class="form-label">Compliances *</label>
                <select className="form-select" aria-label="Default select example" id="compliance" name="compliance" onChange={(e)=>setCompliance(e.target.value)} value={compliance} required>
                    <option value="">Select Compliances</option>
                    {checklistAllComp != 'undefind' && checklistAllComp?.length > 0 && checklistAllComp.map(item => 
                        <option value={item._id}>{item.act}</option>
                    )};
                    
                </select>
            </div>
            <div class="col-md-12 col-lg-12 mb-2">
                <label for="cat" class="form-label">Branch *</label>
                <select className="form-select" aria-label="Default select example" id="branch" name="branch" onChange={(e)=>setBranch(e.target.value)} value={branch} required>
                    <option value="">Select Branch</option>
                    {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                        <option value={item._id}>{item.name}</option>
                    )};
                </select>
            </div>
            <div class="col-12 col-lg-12 col-md-12 mb-2">
                <label for="inputrule" class="form-label">Rule *</label>
                
            {inputList.map((input) => (<><input type="text" id="rule"  class="form-control" placeholder="Type Rule Name" aria-label="Type Rule Name"  value={input.value} onChange={(event) => handleInputChange(input.id, event)} aria-describedby="button-addon2" required/><br /></>))}
                    <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={handleAddInput}>Add  <AddCircleOutlineIcon /></button>
            </div>
            <div class="col-12 col-lg-12 col-md-12 mb-2">
                <label for="inputAddress" class="form-label">Question *</label>
                {inputListQuestion.map((inputQuestion) => (<><input type="text" class="form-control" id="question" name="question" value={inputQuestion.value} onChange={(event) => handleInputChangeQuestion(inputQuestion.id, event)} placeholder="type question" required/><br /></>))}
                <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={handleAddInputQuestion}>Add  <AddCircleOutlineIcon /></button>
            </div> 
            <div class="col-12 col-lg-12 col-md-12 mb-2">
                <label for="inputAddress" class="form-label">Description *</label>
                {inputListDescription.map((inputDescription) => (<><input type="text" class="form-control" id="inputdescription" name="description" value={inputDescription.value} onChange={(event) => handleInputChangeDescription(inputDescription.id, event)} placeholder="type description" required/><br /></>))}
                <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={handleAddInputDescription}>Add  <AddCircleOutlineIcon /></button>
            </div>
            {recordForEdit?.id !== undefined && recordForEdit?.id !== null ? 
            (<><div class="col-12 col-lg-12 col-md-12 mb-2" >
                <label for="inputAddress" class="form-label">Form </label>
                <div>
                <div class="form-group files">
                    <input type="file" name="image" class="form-control" multiple="" accept="image/*,application/pdf" id="input-file-now-custom-2" className="file-upload"
                    dataHeight="500" onChange={(e) => {handleProductImageUpload(e)}}
                    />
                </div>    
                </div>
            </div><div class="col-12 col-lg-12 col-md-12 mb-2" >
                <ImageList>
                        <ImagePreview>
                            {image ? (
                            <>
                                <img src={image} alt="error!" />
                            </>
                            ) : (pdffound === true) ? (<>{filepdf}</>):(
                            <p>Form image upload preview will appear here!</p>
                            )}
                        </ImagePreview>
                </ImageList>
            </div></>):(<div class="col-12 col-lg-12 col-md-12 mb-2" >
                <label for="inputAddress" class="form-label">Form *</label>
                <div>
                <div class="form-group files">
                    <input type="file" name="image" class="form-control" multiple="" accept="image/*,application/pdf" id="input-file-now-custom-2" className="file-upload"
                    dataHeight="500" onChange={(e) => {handleProductImageUpload(e)}}
                    required />
                </div>    
                </div>
            </div>)}
            {recordForEdit?.id !== undefined && recordForEdit?.id !== null ? 
            (<><div class="col-12 col-lg-12 col-md-12 mb-2" >
                <label for="inputAddress" class="form-label">Documents </label>
                <div>
                <div class="form-group files">
                    <input type="file" name="document" class="form-control" multiple="" accept="application/pdf" id="input-file-now-custom-2" className="file-upload"
                    dataHeight="500" onChange={(e) => {handleProductDocumentUpload(e);}}
                    />
                </div> 
                </div>
            </div><div class="col-12 col-lg-12 col-md-12 mb-2" >
                <ImageList>
                        <ImagePreview>
                            {filepdf}
                        </ImagePreview>
                </ImageList>
            </div></>):(<div class="col-12 col-lg-12 col-md-12 mb-2" >
                <label for="inputAddress" class="form-label">Documents *</label>
                <div>
                <div class="form-group files">
                    <input type="file" name="document" class="form-control" multiple="" accept="application/pdf" id="input-file-now-custom-2" className="file-upload"
                    dataHeight="500" onChange={(e) => {handleProductDocumentUpload(e);}}
                    required />
                </div> 
                </div>
            </div> )}                                                               
            <div class="col-12 col-lg-12 col-md-12 mb-2">
                <label for="" class="form-label">Recurrence/Frequency *</label>
                <select className="form-select" aria-label="Default select example"  id="frequency" name="frequency" value={frequency}  onChange={(e)=>setFrequency(e.target.value)} required>
                        <option value="">Select Recurrence/Frequency</option>
                        <option value="Fortnightly">Fortnightly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Half Yearly">Half Yearly</option>
                    </select>
            </div>  
            <div class="col-12 col-lg-12 col-md-12 mb-2">
                <label for="" class="form-label">Risk *</label>
                <select className="form-select" id="risk" aria-label="Default select example" name="risk" value={risk} onChange={(e)=>setRisk(e.target.value)} required>
                        <option value="">Select Risk</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Very High">Very High</option>
                    </select>
        </div> 

        {recordForEdit?.id !== undefined && recordForEdit?.id !== null ? 
        (<div class="col-12 col-lg-12 col-md-12 mb-2">
            <label for="" className="form-label">Updated Date *</label>
            <input type="date" className="form-control" 
                id="dates"
                name="dates" 
                value={date.toLocaleDateString('en-CA')} 
                onChange={onSetDate}
                required
            />
        </div>):(<div class="col-12 col-lg-12 col-md-12 mb-2">
            <label for="" className="form-label">Creation Date *</label>
            <input type="date" className="form-control" 
                id="dates"
                name="dates" 
                value={date.toLocaleDateString('en-CA')} 
                onChange={onSetDate}
                required
            />
        </div>)}     
        {/* <div className="modal-footer justify-content-center">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            {/* <button type="button" className="btn btn-success">Edit</button> 
            <button type="submit" id="btnSave" className="btn btn-primary" >Save</button>
        </div> */}
            <div class="col-md-6">
                <button type="submit" class="w-100 btn btn-dark" id="cancel" onClick={tocategorypage}>Cancel</button>
            </div>
            <div class="col-md-6">
                <button type="submit" variant="contained" class="w-100 btn btn-primary" >Save</button>
            </div>
            </form>
            </div>
    </Container>    
    )
}

export default ChecklistPopup;
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