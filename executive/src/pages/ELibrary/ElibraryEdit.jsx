import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, DialogContent, Button, ImageListItem,ImageList,styled  } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Modal, Form, TextArea,} from 'antd';
import {categoryGet,createElibrary,stateGets,eLibraryGettingById,updateElibraryById,rejectsElibrary,elibrarySaveandApproved,usersGet} from '../../store/actions/otherActions';
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //for
import {useDispatch,useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import ElibraryAllTable from './ElibraryAllTable';
const ElibraryEdit = ({ addOrEdit,recordForEdit }) => {
   
// console.log(recordForEdit)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [document,setDocument] = useState('');
    const [fileto,setFile] = useState('');
    const [notifications,setNotification] = useState('');
    const myElementRefTab1 = useRef(null);
    const myElementRefTab2 = useRef(null);
    const catGet = useSelector((state) => state.catGet);
    const { loading, categoryInfo,error } = catGet;
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    const userLogin = useSelector(state=>state.userLogin);
    const {userInfo} = userLogin;
    const elibraryGetByIds = useSelector((state) => state.elibraryGetByIds);
    const { loadingebid,elibraryGetByIDInfo } = elibraryGetByIds;
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    const [dates, setDate] = useState()
    const [dating, setDates] = useState('');
    const [category, setCategory] = useState('');
    const [reason, setReason] = useState('');
    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }
    const handleClose = () => {
        // setDescription('');
         addOrEdit();
         //setOpenPopup(false);
        // recordForEdit(false)
     };
     useEffect(()=>{
        dispatch(categoryGet());
        dispatch(stateGets());
        dispatch(usersGet())
        dispatch(eLibraryGettingById(recordForEdit)).then(() => {
            if (elibraryGetByIDInfo?.dates) {
                setDate(new Date(elibraryGetByIDInfo.dates));
            }
        });
    },[dispatch,recordForEdit])
    var initialValues = {
        category: '',
        placeholdername: '',
        label:'',
        description: '',
        image:''
    }
    let savedValues = {
        category: elibraryGetByIDInfo?.category,
        placeholdername: elibraryGetByIDInfo?.placeholdername,
        label:elibraryGetByIDInfo?.label,
        description: elibraryGetByIDInfo?.description,
        image:elibraryGetByIDInfo?.image,
        // dates:formatDate(elibraryGetByIDInfo?.dates)
   }
//    alert(savedValues.dates)
    const schema = Yup.object({
        category: Yup.string('')
            .required('Category Label is required!'),
        placeholdername: Yup.string('')
            .required('Placeholdername is required!'), 
        label: Yup.string('')
            .required('Label is required!'),     
        description: Yup.string('')
            .required('Description is required!'), 
        // image: Yup.mixed()
        //     .nullable()
        //     .notRequired()
        //     .required("Document Image is required!")
        //     .test('type',  "We only support pdf formats", function (value) {
        //         //alert('Here='+value.type)
        //         return value && (value.type === "application/pdf" )}),                 
        // externallink: Yup.string('')
        //     .required('External Link is required')
        //     .min(3, 'External Link must be minimum of 3 charactors')
        //     .max(100, 'External Link should be of maximum 100 characters length'),             
        // dates: Yup.string('')
        //     .required('Date is required')
    });
    //for inline validations via Yup and formik
    const formik = useFormik({
        initialValues: (savedValues || initialValues),
        validationSchema: schema,
        enableReinitialize:true,  //this variable must be true if data comes from API
        onSubmit: (values, action)=>{
          onElibrary(values,action);
        }}
    );
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
    const onElibrary = async (val,action) => {
        const formData = new FormData();
        formData.append("category", val.category);
        formData.append("placeholdername", val.placeholdername);
        formData.append("dates", dates);
        formData.append("label", val.label);
        formData.append("executive", userInfo._id);
        formData.append("description", val.description);
		formData.append("image", fileto);
        // api call        
        dispatch(updateElibraryById(formData,recordForEdit)); 
        action.resetForm();
        setFile('')
        handleClose();
        // const elementTab1 = myElementRefTab1.current;
        // if(elementTab1){
        //     elementTab1.click();
        // }
    }
    const handleProductImageUpload= (e) => {
        const file = e.target.files[0];
        setFile(e.target.files[0]);
        TransformFileDataDoc(file);
    };
    //reading image using The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
    const TransformFileDataDoc = (file) => {
        const reader = new FileReader();
        const fileType =file.type;
        let types = false; 
        if(fileType!=="image/jpeg" && fileType!=="image/bmp" && fileType!=="image/jpg" && fileType!=="image/png" ){
            types = true; 
            alert('You can only upload JPG/JPEG/PNG/BMP file!');
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
    const tocategorypage = () => {
        navigate('/dashboard')
    };
    const viewall = () => {
        setTimeout(() => {
            // dispatch(getElibrary());
        }, 2000);
    }
    ////Reject modal handling functions start
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
      username: '',
    });
    const [errors, setErrors] = useState({});
  
    const showModal = () => {
        // alert('showModal')
      setVisible(true);
    };
    // console.log(visible)
    const handleCancel = () => {
      setVisible(false);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmitModal = (e) => {
        e.preventDefault();
        // alert(''); return;

        const postBody = {
            id:recordForEdit,
            rejected_at: defaultDate,
            reason:reason,
            status:2
        }
        dispatch(rejectsElibrary(postBody));
        console.log('Form submitted:', formData);
        setVisible(false);
        handleClose();
      };
    // console.log(elibraryGetByIDInfo?.status)
    ////Reject modal handling functions ends
    const saveandapprove = (e) => {
        e.preventDefault();
        const postBody = {
            approvedate: defaultDate,
            status:0,
            id:recordForEdit,
            type:'executive'
        }
        dispatch(elibrarySaveandApproved(postBody));//relodreport
        handleClose();
    }
    console.log(formatDate(elibraryGetByIDInfo?.dates),elibraryGetByIDInfo?.dates)
    return(
        <><div style={{/*width: '900px',*/marginTop:'20px',overflowY: 'hidden',height:'570px',overflowX: 'hidden',marginLeft:'20px' }} >
            <form className="row g-3"  method="post" enctype="multipart/form-data" onSubmit={formik.handleSubmit}>
                <div className="col-md-12 col-lg-12">
                    <label for="" className="form-label">Category</label>
                    <select className="form-select" aria-label="Default select example" id="category" name="category" onChange={formik.handleChange} value={formik.values.category} >
                        <option value="">Select category</option>
                        {categoryInfo != 'undefind' && categoryInfo?.length > 0 && categoryInfo.map(item => 
                            <option value={item._id}>{item.name}</option>
                        )};
                        
                    </select>
                    {formik.touched.category && formik.errors.category && (
                        <div className="error">{formik.errors.category}</div>
                    )}
                </div>
                {/* <div className="col-md-4 col-lg-4">
                    <label for="" className="form-label">Palaceholder Name</label>
                    <select className="form-select" aria-label="Default select example" id="state" name="state" value={formik.values.state} onChange={formik.handleChange} >
                            <option value="">Select State</option>
                        {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                            <option value={item._id}>{item.name}</option>
                        )};
                    </select>
                    {formik.touched.state && formik.errors.state && (
                    <div className="error">{formik.errors.state}</div>)}
                </div> */}
                <div className="col-md-4 col-lg-4">
                    <label for="" className="form-label">Palaceholder Name</label>
                    <input className="form-control" placeholder='Placeholder Name' id="placeholdername" name="placeholdername" value={formik.values.placeholdername} onChange={formik.handleChange} 
                    />
                        {formik.touched.placeholdername && formik.errors.placeholdername && (
                        <div className="error">{formik.errors.placeholdername}</div>
                    )}
                </div>
                <div className="col-md-4 col-lg-4">
                    <label for="" className="form-label">Label</label>
                    <input type="text" className="form-control" placeholder='write here' 
                        value={formik.values.label}
                        id="label"
                        name="label" 
                        onChange={formik.handleChange}/>
                        {formik.touched.label && formik.errors.label && (
                        <div className="error">{formik.errors.label}</div>
                        )}
                </div>
                <div className="col-md-4 col-lg-4">
                    <label for="" className="form-label">Date</label>
                    <input   type="date" className="form-control" 
                          value={dates ? dates.toISOString().substr(0, 10) : ''}
                        id="dates"
                        name="dates" 
                        // onChange={formik.handleChange} 
                        // value={date.toLocaleDateString('en-CA')} 
                        onChange={(e)=>setDate(e.target.value)} />
                </div>
                <div className="col-md-12 col-lg-12">
                    <label for="" className="form-label">Write Description</label>
                    <textarea class="form-control" placeholder='write here' rows="3" 
                    value={formik.values.description}
                    id="description"
                    name="description" 
                    onChange={formik.handleChange} 
                    style={{overflow: 'hidden',maxHeight: '200px'}}
                    />
                    {formik.touched.description && formik.errors.description && (
                        <div className="error">{formik.errors.description}</div>
                    )}
                </div>
                <div className="col-md-9 col-lg-9" style={{marginLeft:'5px'}}>
                    <div class="form-group files">
                        <input type="file" name="document" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" className="file-upload"
                        dataHeight="450" onChange={(e) => {handleProductImageUpload(e);}}
                            />
                        {(formik.touched.document && formik.errors.document)?<div className="error">{formik.errors.document}</div>:null}
                    </div> 
                    <ImageList>
                               
                                    {savedValues.image ? (
                                    <>
                                        <img src={savedValues.image} width="70" alt="error!" />
                                    </>)
                                    :
                                    (''
                                    )}
                               
                    </ImageList>
                </div>
                  {/*    <div className="col-md-4 col-lg-4" >
                  {elibraryGetByIDInfo?.status ===2 ?(<button type="button" className="w-100 btn btn-danger" >Rejected</button>):(<button type="button" className="w-100 btn btn-danger"  onClick={showModal}>Reject</button>)} */}
                {/* </div> */}
                <div className="col-md-4 col-lg-4">
                    <button type="submit" className="w-100 btn btn btn-success" >Edit <EditIcon fontSize='mediam' /></button>
                </div>
                <div className="col-md-4 col-lg-4">
                    {elibraryGetByIDInfo?.status ===0 ?(<button type="button" className="w-100 btn btn-primary"  onClick={saveandapprove}>Save And Get an Approval</button>):(<button type="button" className="w-100 btn btn-primary" >Approved</button>)}
                </div>
            </form>
        </div>
        <div>
        <Dialog open={visible} onClose={handleCancel} style={{width:'50%', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',}} BackdropProps={{ invisible: true }}>
                <DialogTitle style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold',lineHeight:'1' }}>Reason <span className='modal__close' onClick={(e) => setVisible(false)}><CloseIcon /></span></DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmitModal}>
                        <textarea
                            autoFocus
                            margin="dense"
                            id="reason"
                            label="Reason"
                            class="form-control"
                            type="text"
                            fullWidth
                            placeholder="Reason"
                            row="4"
                            style={{marginTop:'10px'}}
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                        />
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <button onClick={handleClose} variant="contained" style={{  width: '170px',backgroundColor: '#050505', color: 'white', borderRadius: '5%', border: 'none', marginRight: '10px' }}>
                                Cancel
                            </button>
                            <button type="submit" variant="contained" style={{  width: '170px',backgroundColor: '#293094', color: 'white', borderRadius: '5%', border: 'none' }}>
                                Submit
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div></>
    )
}
export default ElibraryEdit;    
const ImagePreview = styled(ImageListItem)`

  border: 1px solid rgb(183, 183, 183);

  width: 60%;
  height:60%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(78, 78, 78);

  img {
    width: 60%;
    height: 60%;
  }
`;
