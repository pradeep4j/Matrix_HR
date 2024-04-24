import React,{useState,useEffect} from 'react'
import { CloudUploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {createNotification} from '../../store/actions/otherActions';
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //for
const redmore = {
    bottom: "25px",
    right: "15px",
    fontWeight: "bold",
}
;

const Notification = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tonotificationpage = () => {
        navigate('/dashboard')
    }
    var initialValues = {
        label: ''
      }
    const schema = Yup.object({
        label: Yup.string('')
            .required('Notification Label is required!'),
           
            // dates: Yup.string('')
            // .required('Date is required')
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
    
        const postBody = {
            label: val.label
        }
        // api call        
        dispatch(createNotification(postBody)); 
        action.resetForm();
       // document.getElementById('category').value='';
    }
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end border-md-bottom" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> View All </button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Create New</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 mb-2 mb-lg-3 mb-md-3">
                                            <div className='card shadow p-3 position-relative'>
                                                <div className='d-flex justify-content-between'>
                                                    <h5>Label</h5>
                                                    <span className='text-muted'>12:12 AM</span>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id cupiditate optio architecto, sed voluptas quae culpa officia praesentium placeat odit quaerat eaque distinctio. Eum repellendus dignissimos deleniti? At, quia soluta. Consectetur quia assumenda beatae nostrum adipisci quo tempore, nisi minima provident iure vel nihil molestiae exercitationem reprehenderit labore, quae maxime voluptatem dolores fugit veniam rerum? Itaque cum enim tenetur nostrum aperiam molestiae magni debitis asperiores laborum labor
                                                </p>
                                                <div class="position-absolute redmore" style={redmore}>....More</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 mb-2 mb-lg-3 mb-md-3">
                                            <div className='card shadow p-3 position-relative'>
                                                <div className='d-flex justify-content-between'>
                                                    <h5>Label</h5>
                                                    <span className='text-muted'>12:12 AM</span>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id cupiditate optio architecto, sed voluptas quae culpa officia praesentium placeat odit quaerat eaque distinctio. Eum repellendus dignissimos deleniti? At, quia soluta. Consectetur quia assumenda beatae nostrum adipisci quo tempore, nisi minima provident iure vel nihil molestiae exercitationem reprehenderit labore, quae maxime voluptatem dolores fugit veniam rerum? Itaque cum enim tenetur nostrum aperiam molestiae magni debitis asperiores laborum labor
                                                </p>
                                                <div class="position-absolute redmore" style={redmore}>....More</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 mb-2 mb-lg-3 mb-md-3">
                                            <div className='card shadow p-3 position-relative'>
                                                <div className='d-flex justify-content-between'>
                                                    <h5>Label</h5>
                                                    <span className='text-muted'>12:12 AM</span>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id cupiditate optio architecto, sed voluptas quae culpa officia praesentium placeat odit quaerat eaque distinctio. Eum repellendus dignissimos deleniti? At, quia soluta. Consectetur quia assumenda beatae nostrum adipisci quo tempore, nisi minima provident iure vel nihil molestiae exercitationem reprehenderit labore, quae maxime voluptatem dolores fugit veniam rerum? Itaque cum enim tenetur nostrum aperiam molestiae magni debitis asperiores laborum labor
                                                </p>
                                                <div class="position-absolute redmore" style={redmore}>....More</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 mb-2 mb-lg-3 mb-md-3">
                                            <div className='card shadow p-3 position-relative'>
                                                <div className='d-flex justify-content-between'>
                                                    <h5>Label</h5>
                                                    <span className='text-muted'>12:12 AM</span>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id cupiditate optio architecto, sed voluptas quae culpa officia praesentium placeat odit quaerat eaque distinctio. Eum repellendus dignissimos deleniti? At, quia soluta. Consectetur quia assumenda beatae nostrum adipisci quo tempore, nisi minima provident iure vel nihil molestiae exercitationem reprehenderit labore, quae maxime voluptatem dolores fugit veniam rerum? Itaque cum enim tenetur nostrum aperiam molestiae magni debitis asperiores laborum labor
                                                </p>
                                                <div class="position-absolute redmore" style={redmore}>....More</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-lg-12 mb-2 mb-lg-3 mb-md-3">
                                            <div className='card shadow p-3 position-relative'>
                                                <div className='d-flex justify-content-between'>
                                                    <h5>Label</h5>
                                                    <span className='text-muted'>12:12 AM</span>
                                                </div>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id cupiditate optio architecto, sed voluptas quae culpa officia praesentium placeat odit quaerat eaque distinctio. Eum repellendus dignissimos deleniti? At, quia soluta. Consectetur quia assumenda beatae nostrum adipisci quo tempore, nisi minima provident iure vel nihil molestiae exercitationem reprehenderit labore, quae maxime voluptatem dolores fugit veniam rerum? Itaque cum enim tenetur nostrum aperiam molestiae magni debitis asperiores laborum labor
                                                </p>
                                                <div class="position-absolute redmore" style={redmore}>....More</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <form class="row g-3" onSubmit={formik.handleSubmit}>
                                    <div class="col-md-12">
                                    <label for="" class="form-label">Notification Label *</label>
                                    <textarea  class="form-control" placeholder='Write something for notification' 
                                        // required='required'
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
                                    <div class="col-md-6">
                                    <button type="submit" class="w-100 btn btn-dark" id="cancel" onClick={tonotificationpage}>Cancel</button>
                                    </div>
                                <div class="col-md-6">
                                    <button type="submit" class="w-100 btn btn-primary" >Save</button>
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