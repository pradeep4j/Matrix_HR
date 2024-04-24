import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {categoryGet,createElibrary,stateGets,getElibrary,rejectedElibraryDocs,usersGet} from '../../store/actions/otherActions';
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //for
import {useDispatch,useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import ElibraryAllTable from './ElibraryAllTable';
import ElibraryEdit from './ElibraryEdit';
import ElibraryRejected from './ElibraryRejected';
const Elibrary = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('viewall');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
      }
    const [document,setDocument] = useState('');
    const [fileto,setFile] = useState('');
    const [notifications,setNotification] = useState('');
    const myElementRefTab1 = useRef(null);
    const myElementRefTab2 = useRef(null);
    const catGet = useSelector((state) => state.catGet);
    const { loading, categoryInfo,error } = catGet;
    console.log(categoryInfo);
    const userLogin = useSelector(state=>state.userLogin);
    const {userInfo} = userLogin;
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    const [date, setDate] = useState(defaultDate)
    const [dating, setDates] = useState('');
    const [category, setCategory] = useState('');
    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }
    useEffect(()=>{
        dispatch(categoryGet());
        dispatch(stateGets());
        dispatch(usersGet())
    },[dispatch])
    var initialValues = {
        category: '',
        placeholdername: '',
        label:'',
        description: ''
    }
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
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action)=>{
          onElibrary(values,action);
        }}
    );
    const onElibrary = async (val,action) => {
        // alert(fileto+'submit');return;
        const formData = new FormData();
        formData.append("category", val.category);
        formData.append("placeholdername", val.placeholdername);
        formData.append("dates", date);
        formData.append("label", val.label);
        formData.append("executive", userInfo._id);
        formData.append("description", val.description);
		formData.append("image", fileto);
        // api call        
        dispatch(createElibrary(formData)); 
        action.resetForm();
        setFile('')
        // const elementTab1 = myElementRefTab1.current;
        // if(elementTab1){
        //     elementTab1.click();
        // }
    }
    const handleProductImageUpload= (e) => {
        const file = e.target.files[0];
        // alert(file+'sasas');return;
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
            dispatch(getElibrary());
        }, 2000);
    }
    const rejected = () => {
        setTimeout(() => {
            dispatch(rejectedElibraryDocs());
        }, 2000);
    }
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-6 col-lg-4 col-12 border-end border-md-bottom" role="presentation">
                                    <button className={`nav-link w-100 rounded-0 text-dark ${activeTab === 'viewall' ? 'active' : ''}`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" ref={myElementRefTab1} onClick={(e)=>{viewall();handleTabChange('viewall')}}> View All </button>
                                </li>
                                {/* <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                                    <button className={`nav-link w-100 rounded-0 text-dark ${activeTab === 'approve' ? 'active' : ''}`} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" ref={myElementRefTab2} onClick={(e)=>{/*viewall();handleTabChange('viewall')}}>Approve</button>
                                </li> */}
                                <li className="nav-item col-md-6 col-lg-4 col-12 border-end" role="presentation">
                                    <button className={`nav-link w-100 rounded-0 text-dark ${activeTab === 'reject' ? 'active' : ''}`} id="creative-tab" data-bs-toggle="pill" data-bs-target="#creative-pill" type="button" role="tab" aria-controls="creative-pill" aria-selected="false" onClick={(e)=>{rejected();handleTabChange('reject')}}>Reject</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-4 col-12" role="presentation">
                                    <button className={`nav-link w-100 rounded-0 text-dark ${activeTab === 'Create New' ? 'active' : ''}`} id="reject-pill" data-bs-toggle="pill" data-bs-target="#reject-tab" type="button" role="tab" aria-controls="reject-tab" aria-selected="false" onClick={(e)=>{/*viewall();*/handleTabChange('Create New')}}>Create New </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className={`tab-pane fade ${activeTab === 'viewall' ? 'show active' : ''}`} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 ">
                                                <div className="table-responsive">
                                                    <ElibraryAllTable /*linktab={myElementRefTab2}*//>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className={`tab-pane fade ${activeTab === 'approve' ? 'show active' : ''}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row">
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 ">
                                                <ElibraryEdit />
                                                {/* <div className="table-responsive">
                                                    <table className="table table-striped all_tbl">
                                                        <thead>
                                                            <tr className='align-middle'>
                                                                <th scope="col">Sr .No</th>
                                                                <th scope="col">Category</th>
                                                                <th scope="col">Palaceholder Name</th>
                                                                <th scope="col">Excutive</th>
                                                                <th scope="col">Create Date</th>
                                                                <th scope="col">View</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>Act</td>
                                                                <td>ABC</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td>
                                                                    <Link className='text-white btn btn-dark text-decoration-none'> View <VisibilityOffIcon fontSize='mediam' /></Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className={`tab-pane fade ${activeTab === 'reject' ? 'show active' : ''}`} id="creative-pill" role="tabpanel" aria-labelledby="creative-tab">
                                    <div className="row">
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 ">
                                                <div className="table-responsive">
                                                    <ElibraryRejected />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 'Create New' ? 'show active' : ''}`} id="reject-tab" role="tabpanel" aria-labelledby="reject-pill">
                                    <form className="row g-3"  method="post" enctype="multipart/form-data" onSubmit={formik.handleSubmit}>
                                        <div className="col-md-12 col-lg-12">
                                            <label for="" className="form-label">Category</label>
                                            <select className="form-select" aria-label="Default select example" id="category" name="category" onChange={formik.handleChange} value={formik.values.category} >
                                                <option value="">Select category</option>
                                                {categoryInfo !== undefined && categoryInfo?.length > 0 && categoryInfo.map(item => 
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
                                            <label for="" className="form-label">Placeholder Name</label>
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
                                             // value={formik.values.dates} 
                                                id="dates"
                                                name="dates" 
                                                // onChange={formik.handleChange} 
                                                value={date.toLocaleDateString('en-CA')} 
                                                onChange={onSetDate} />
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
                                        <div className="col-md-7 col-lg-7">
                                            <div class="form-group files">
                                                <input type="file" name="document" class="form-control" multiple="" accept="image/*" id="input-file-now-custom-2" className="file-upload"
                                                dataHeight="450" onChange={(e) => {setFile(e.target.files[0]);}}
                                                 />
                                            </div> 
                                        </div>
                                        <div class="col-md-6">
                                            <button type="submit" class="w-100 btn btn-dark" id="cancel" onClick={tocategorypage} style={{marginTop:'0px'}}>Cancel</button>
                                            </div>
                                        <div class="col-md-6">
                                            <button type="submit" class="w-100 btn btn-primary " style={{marginBottom:'7px'}}>Submit</button>
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

export default Elibrary