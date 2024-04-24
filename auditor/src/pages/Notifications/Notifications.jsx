import React,{useState,useEffect} from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { message, Upload,Button,Form } from 'antd';
import {createNotification,getNotification} from '../../store/actions/otherActions';
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //for
import {useDispatch,useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
//import '../../hide.css';
import ReadMore from '../../components/readmore/ReadMore';

const redmore = {
    bottom: "10px",
    right: "15px",
    fontWeight: "bold",
}

function Notification() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tonotificationpage = () => {
        navigate('/dashboard')
    }
    const [document,setDocument] = useState('');
    const [documentto,setFileDocument] = useState('');
    const [notifications,setNotification] = useState('');
    const getttingNotification = useSelector((state) => state.getttingNotification);
    const { loading, notificationInfo,error } = getttingNotification;
    console.log(notificationInfo);
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    const [date, setDate] = useState(defaultDate)
    const [dating, setDates] = useState('')
    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }
    //console.log(date.toLocaleDateString('en-CA'))
    var initialValues = {
        label: '',
        role: '',
        document:'',
        description: ''
    }
    const schema = Yup.object({
        label: Yup.string('')
            .required('Notification Label is required!')
            .min(3, 'Notification must be minimum of 3 charactors')
            .max(50, 'External Link should be of maximum 100 characters length'),
        role: Yup.string('')
            .required('Role is required'), 
        document: Yup.mixed()
            .nullable()
            .notRequired()
            .required("Document Image is required!")
            .test('type',  "We only support pdf formats", function (value) {
                //alert('Here='+value.type)
                return value && (value.type === "application/pdf" )}),             
        description: Yup.string('')
            .required('Description is required')
            .min(3, 'Description must be minimum of 3 charactors'),      
        // externallink: Yup.string('')
        //     .required('External Link is required')
        //     .min(3, 'External Link must be minimum of 3 charactors')
        //     .max(100, 'External Link should be of maximum 100 characters length'),             
        // dates: Yup.string('')
        //     .required('Date is required')
    });
    //for inline validations via Yup and formik
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action)=>{
          onNotification(values,action);
        }}
    );
    const onNotification = async (val,action) => {
    
        const formData = new FormData();
        formData.append("label", val.label);
        formData.append("role", val.role);
        formData.append("dates", date);
        formData.append("description", val.description);
		formData.append("document", documentto);
		formData.append("externallink", val.externallink);
        // api call        
        dispatch(createNotification(formData)); 
        action.resetForm();
    }
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
    const calling = () => {
        dispatch(getNotification());
    }
    useEffect(() => {
        dispatch(getNotification());
    },[dispatch])
    useEffect(()=>{
        let notificationArr = [];
        if (typeof (notificationInfo) !== 'undefined' && notificationInfo?.length > 0 ) {
            //alert(categoryInfo?.length);
            notificationInfo.map((item, index) => {
                notificationArr.push({
                label:item.label,
                document:item.document,
                description: item.description,
                dated: new Date(item.dates).toLocaleDateString('en-CA')
              })
          });
        }
        setNotification(notificationArr);
    },[notificationInfo]);
    const tocategorypage = () => {
        navigate('/dashboard')
    };
    const formatDate = (currentDate) => {
        const dates = new Date(currentDate);
        const year = dates.getFullYear();
        const month = String(dates.getMonth() + 1).padStart(2, '0');
        const date = String(dates.getDate()).padStart(2, '0');
        const hours = String(dates.getHours()).padStart(2, '0');
        const minutes = String(dates.getMinutes()).padStart(2, '0');
        const seconds = String(dates.getSeconds()).padStart(2, '0');
        const formattedDateTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        return (formattedDateTime);
      }
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end border-md-bottom" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={calling}> View All </button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Create New</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 mb-2 mb-lg-3 mb-md-3" >
                                        {notifications != 'undefined' && notifications?.length >0 && notifications.map((item) =>    
                                            (<><div className='card shadow p-3 position-relative'>
                                                <div className='d-flex justify-content-between'>
                                                    <h5>{item.label}</h5>
                                                    <span className='text-muted'>{formatDate(item.dated)}</span>
                                                </div>
                                    
                                                 <p>   <ReadMore text={item.description} /></p>
                                                {/* <button onClick={myFunction} id="myBtn">Read more</button> */}
                                                <h6>Attached pdf with this Notification</h6>
                                                    <a href={item.document} target="_blank">Notification Pdf</a>
                                            </div><br /></>)
                                        )}
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <form className="row g-3" method="post" enctype="multipart/form-data" onSubmit={formik.handleSubmit}>
                                        <div className="col-md-4 col-lg-4">
                                            <label for="" className="form-label">Label *</label>
                                            <input type="text" className="form-control" 
                                                placeholder='Label Name' 
                                                value={formik.values.label}
                                                id="label"
                                                name="label" 
                                                onChange={formik.handleChange} 
                                                maxlength = "50" 
                                            />
                                            {formik.touched.label && formik.errors.label && (
                                            <div className="error">{formik.errors.label}</div>
                                            )}    
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <label for="" className="form-label">Seclect Roles/Users *</label>
                                            <select className="form-select" aria-label="Default select example" id="role" name="role" value={formik.values.role} onChange={formik.handleChange} >
                                                <option value="">Roles/Users</option>
                                                <option value="Executive(Matrix)" >Executive(Matrix)</option>
                                                <option value="Companey CEO" >Companey CEO</option>
                                                <option value="Executive" >Executive</option>
                                                <option value="Auditor" >Auditor</option>
                                            </select>
                                            {formik.touched.role && formik.errors.role && (
                                                <div className="error">{formik.errors.role}</div>
                                            )}
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                            <label for="" className="form-label">Date *</label>
                                            <input type="date" className="form-control" 
                                             // value={formik.values.dates} 
                                                id="dates"
                                                name="dates" 
                                                // onChange={formik.handleChange} 
                                                value={date.toLocaleDateString('en-CA')} 
                                                onChange={onSetDate}
                                            />
                                            {formik.touched.dates && formik.errors.dates && (
                                                <div className="error">{formik.errors.dates}</div>
                                            )}
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <label for="" className="form-label">Description *</label>
                                            <textarea class="form-control" placeholder='write here' rows="3" 
                                            value={formik.values.description}
                                            id="description"
                                            name="description" 
                                            row="20"
                                            onChange={formik.handleChange} 
                                            style={{overflow: 'hidden',maxHeight: '200px'}}
                                            />
                                            {formik.touched.description && formik.errors.description && (
                                                <div className="error">{formik.errors.description}</div>
                                            )}
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                        <label for="inputAddress" class="form-label">Documents *</label>
                                            <div>
                                            <div class="form-group files">
                                                <input type="file" name="document" class="form-control" multiple="" accept="application/pdf" id="input-file-now-custom-2" className="file-upload"
                                                dataHeight="500" onChange={(e) => {handleProductDocumentUpload(e);formik.setTouched({
                                                    ...formik.touched.document
                                                });formik.setFieldValue( "document", e.target.files[0] )}}
                                                 />
                                                {(formik.touched.document && formik.errors.document)?<div className="error">{formik.errors.document}</div>:null}
                                            </div> 
                                            
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label for="exampleFormControlTextarea1" class="form-label">External Link </label>
                                            <input type="text" className="form-control" placeholder='External Link' 
                                                value={formik.values.externallink}
                                                id="externallink"
                                                name="externallink" 
                                                onChange={formik.handleChange} 
                                                maxlength = "50" 
                                            />
                                            {formik.touched.externallink && formik.errors.externallink && (
                                            <div className="error">{formik.errors.externallink}</div>
                                            )}    
                                           
                                        </div>
                                        {/* <div className="col-md-12">
                                            <label for="exampleFormControlTextarea1" class="form-label">E-Librery</label>
                                            <input type="text" className="form-control" placeholder='write here' />
                                        </div>
                                        <div className="col-md-12 col-lg-12">
                                            <button type="submit" className="btn btn-primary w-100 opecity-5">Add Label Running in DAshboard</button>
                                        </div>
                                        <div className="col-lg-6 col-md-6 mb-2 mb-md-3">
                                        <button type="submit" className="w-100 btn btn-dark">Cancel</button>
                                        </div> */}
                                        <div class="col-md-6">
                                            <button type="submit" class="w-100 btn btn-dark" id="cancel" onClick={tocategorypage} style={{marginTop:'0px'}}>Cancel</button>
                                            </div>
                                        <div class="col-md-6">
                                            <button type="submit" class="w-100 btn btn-primary" style={{marginTop:'0px'}}>Save and Submit</button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Notification;