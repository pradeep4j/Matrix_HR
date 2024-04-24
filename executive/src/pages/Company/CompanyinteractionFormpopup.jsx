import React,{useState,useEffect,useMemo} from 'react';
import { FormGroup,styled,ImageListItem,ImageList } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {companyinteractionCreate,companyinteractionUpdateById,companyinteractionGetByid,companyTableGet} from "../../store/actions/otherActions";

//import { updatestatuswithremark } from '../../routes/api';
import { useForm, Form } from '../../components/useForm';
const CompanyinteractionFormpopup = ({ addOrEdit,recordForEdit }) => {
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
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    const companyinteractGetById = useSelector((state) => state.companyinteractGetById);
    const { loadingcigbid,companyinteractionGetByIDInfo } = companyinteractGetById; 
    const checklistId = useSelector((state) => state.checklistId);
    const { loadingg,checklistInfoId } = checklistId;
    const [company,  setCompany] = useState();
    const [companyTitle, setcompanyTitle] = useState();
    const [image,setImage] = useState('');
    const [remark,setremark] = useState('');
    const [details,setdetails] = useState('');
    const [fileto,setFile] = useState('');
    const [filepdf,setPdf] = useState('');
    const [pdffound, setCheckPdf] = useState(false);
    const handleProductImageUpload = (e) => {
        const file = e.target.files[0];
    //    alert(JSON.stringify(file))
        setFile(file);
        // setFileName(e.target.files[0].name);
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
    // alert(recordForEdit?.id)
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(recordForEdit?.id !== undefined && recordForEdit?.id !== null) {
            const formData = new FormData();
            formData.append("company", company);
            formData.append("companyTitle", companyTitle);
            formData.append("details", details);
            formData.append("remark", remark);
            formData.append("companyUpload", fileto);
            dispatch(companyinteractionUpdateById(formData,recordForEdit?.id));
            setcompanyTitle('')
            setremark('')
            setdetails('')
            setFile('')
            handleClose();
            handleClose();
        }
        else{
            const formData = new FormData();
            formData.append("company", company);
            formData.append("companyTitle", companyTitle);
            formData.append("details", details);
            formData.append("remark", remark);
            formData.append("companyUpload", fileto);
            dispatch(companyinteractionCreate(formData));
            setcompanyTitle('')
            setremark('')
            setdetails('')
            setFile('')
            handleClose();
        }
    }
    useEffect(() => {
        dispatch(companyTableGet());
    },[dispatch])
    useEffect(()=>{
        if(recordForEdit?.id !== undefined && recordForEdit?.id !== null) {
            dispatch(companyinteractionGetByid(recordForEdit.id));
        }
    },[dispatch]);
    useMemo(() => {
        if(recordForEdit?.id !== undefined && recordForEdit?.id !== null) {
            if(companyinteractionGetByIDInfo !== undefined ) {
                // alert(companyinteractionGetByIDInfo?.companyUpload)
                if(companyinteractionGetByIDInfo?.companyUpload !==  undefined ){
                    const imagedocsplit = (companyinteractionGetByIDInfo?.companyUpload).split('/');
                    if(imagedocsplit[4]  !==  undefined ){
                        const fileext = ((imagedocsplit[4].indexOf('pdf')))
                       
                        if(fileext !=-1){
                            setPdf(<a href={companyinteractionGetByIDInfo?.companyUpload} target="_blank">Click to show pdf</a>)
                            setCheckPdf(true);
                        }
                        else{
                            //setImageShow(<a href={complianceInfoId?.form} target="_blank">Click to show pdf</a>)
                            setImage(companyinteractionGetByIDInfo?.companyUpload)
                        }
                    }
                    
                }
                setCompany(companyinteractionGetByIDInfo?.company)
                setcompanyTitle(companyinteractionGetByIDInfo?.companyTitle)
                setremark(companyinteractionGetByIDInfo?.remark)
                setdetails(companyinteractionGetByIDInfo?.details)
                if(companyinteractionGetByIDInfo?.companyUpload !==  undefined ){
                    setFile(companyinteractionGetByIDInfo?.companyUpload)
                }
            }
        }    
    },[companyinteractionGetByIDInfo])
    const tocategorypage = () => {
        navigate('/dashboard')
    };
    return (
        <Container>
           
        <div>
            <form class="row g-3" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
           <div class="col-md-12 col-lg-12 mb-2">
                <label for="" class="form-label">Company *</label>
                <select className="form-select" aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>setCompany(e.target.value)} required>
                        <option value="">Select Company</option>
                        {companyGetTableInfo != 'undefind' && companyGetTableInfo?.length > 0 && companyGetTableInfo.map(item => 
                          <option value={item._id}>{item.companyname}</option>
                        )};
                </select>
            </div> 
             {/* <div class="col-md-12 col-lg-12 mb-2">
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
            </div>  <div class="col-md-12 col-lg-12 mb-2">
                <label for="cat" class="form-label">Branch *</label>
                <select className="form-select" aria-label="Default select example" id="branch" name="branch" onChange={(e)=>setBranch(e.target.value)} value={branch} required>
                    <option value="">Select Branch</option>
                    {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                        <option value={item._id}>{item.name}</option>
                    )};
                </select>
            </div>  */}
            <div class="col-12 col-lg-12 col-md-12 mb-2">
                <label for="inputtitle" class="form-label">Write a Label *</label>
                
            <input type="text" id="companyTitle" name="companyTitle" class="form-control" placeholder="Write a Label" aria-label="Write a Lable"  value={companyTitle} onChange={(e) => setcompanyTitle(e.target.value)} aria-describedby="button-addon2" required/>
            </div>
            <div class="col-12 col-lg-12 col-md-12 mb-2">
                <label for="" class="form-label">Details *</label>
                <input type="text" class="form-control" aria-label="Default select example"  id="details" name="details" placeholder="Write Details" value={details}  onChange={(e)=>setdetails(e.target.value)} required />
            </div> 
            {recordForEdit?.id !== undefined && recordForEdit?.id !== null ? 
            (<><div class="col-12 col-lg-12 col-md-12 mb-2" >
                <label for="inputAddress" class="form-label">Upload </label>
                <div>
                    <div class="form-group files">
                        <input type="file" name="companyUpload" class="form-control" multiple="" accept="image/*,application/pdf" id="companyUpload" className="file-upload"
                        dataHeight="500" onChange={(e) => {handleProductImageUpload(e)}}
                        />
                    </div>    
                </div>
            </div>
            <div class="col-12 col-lg-12 col-md-12 mb-2" >
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
                <label for="inputAddress" class="form-label">Upload *</label>
                <div>
                <div class="form-group files">
                    <input type="file" name="image" class="form-control" multiple="" accept="image/*,application/pdf" id="input-file-now-custom-2" className="file-upload"
                    dataHeight="500" onChange={(e) => {handleProductImageUpload(e)}}
                    required />
                </div>    
                </div>
            </div>)}
            <div class="col-12 col-lg-12 col-md-12 mb-2">
                <label for="" class="form-label">Remark *</label>
                <input type="text" class="form-control" aria-label="Default select example"  id="remark" placeholder="Write Remark"name="remark" value={remark}  onChange={(e)=>setremark(e.target.value)} required />
            </div> 
            
            <div class="col-md-6">
                <button type="submit" class="w-100 btn btn-dark" id="cancel" onClick={tocategorypage}>Cancel</button>
            </div>
            <div class="col-md-6">
                <button type="submit" className="w-100 btn btn-primary">Save</button>
            </div>
            </form>
            </div>
    </Container>    
    )
}

export default CompanyinteractionFormpopup;
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