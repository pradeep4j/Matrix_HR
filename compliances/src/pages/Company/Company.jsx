import React,{useState,useEffect} from 'react';
// import {Space} from "antd";
// import {EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import {useDispatch,useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {companyCreates} from '../../store/actions/otherActions';
//import UsersTable from "./UsersTable";
//import {usersGet} from "../../store/actions/otherActions";
import $ from 'jquery';
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //formik is third party React form library. It provides basic form programming and validation
const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const userCreate = useSelector((state) => state.userCreate);
//   const { loading, userCreateInfo,error } = userCreate;
  var initialValues = {
    companyname: ''
  }
const schema = Yup.object({
    companyname: Yup.string('')
        .required('Company Name is required')
        .min(3, 'Company Name must be minimum of 3 charactors')
        .max(30, 'Company Name Name must be maximum of 30 charactors')          
});

//for inline validations via Yup and formik
const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values, action)=>{
      onBranchCreate(values,action);
    }}
);
const tocategorypage = () => {
    navigate('/dashboard')
};
const onBranchCreate = async (val,action) => {
    
    const postBody = {
        companyname: val.companyname
    }
    // api call        
    dispatch(companyCreates(postBody)); 
    action.resetForm();
   // document.getElementById('category').value='';
}

// useEffect(() => {
//     if(userCreateInfo)
//     {
//         //navigate('/usercreate')
//     }
    
// },[])  
// const calling = () => {
//   dispatch(usersGet());
// }

  return (

    <React.Fragment>
      <div className='dashboard_wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul class="nav nav-pills mb-3 bg-light" id="pills-tab" role="tablist">
                <li class="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                  <button class="nav-link w-100 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" >View All</button>
                </li>
                <li class="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                  <button class="nav-link w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Create New</button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent" >
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" >
                  <div class="row">
                    <div class="col-12 col-lg-12">
                      {/* <UsersTable /> */}
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <form class="row g-3" onSubmit={formik.handleSubmit}>
                    <div class="col-md-4">
                      <label for="" class="form-label">Company Name *</label>
                      <input type="text" class="form-control" placeholder='companyname' 
                         // required='required'
                          value={formik.values.companyname}
                          id="companyname"
                          name="companyname" 
                          onChange={formik.handleChange} 
                          maxlength = "30"    
                          />
                      {formik.touched.companyname && formik.errors.companyname && (
                        <div className="error">{formik.errors.companyname}</div>
                      )}
                    </div>
                    {/* <div class="col-md-4">
                      <label class="form-label">Last Name *</label>
                      <input type="text" class="form-control" placeholder='Lastname Name' 
                          value={formik.values.lastname}
                          id="lastname"
                          name="lastname" 
                          onChange={formik.handleChange} 
                          maxlength = "30" 
                      />
                      {formik.touched.lastname && formik.errors.lastname && (
                        <div className="error">{formik.errors.lastname}</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="" class="form-label">Select Role *</label><br />
                      <select id="role" name="role" class="form-control"
                        value={formik.values.role}
                        onChange={formik.handleChange} 
                        >
                        <option value="" >Select Role</option>
                        <option value="Executive(Matrix)" >Executive(Matrix)</option>
                        <option value="Companey Executive" >Companey Executive</option>
                        <option value="Executive" >Executive</option>
                        <option value="Auditor" >Auditor</option>
                      </select>
                      {formik.touched.role && formik.errors.role && (
                        <div className="error">{formik.errors.role}</div>
                      )}
                      
                    </div>
                    <div class="col-md-4">
                      <label for="" class="form-label">Email ID *</label>
                      <input type="text" class="form-control" placeholder='d@h.co' 
                         // required='required'
                          value={formik.values.email}
                          id="email"
                          name="email" 
                          onChange={formik.handleChange}    
                          />
                      {formik.touched.email && formik.errors.email && (
                        <div className="error">{formik.errors.email}</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label class="form-label">Password *</label>
                      <input class="form-control" placeholder='Password' 
                          value={formik.values.password}
                          id="password"
                          name="password" 
                          onChange={formik.handleChange} 
                          maxlength = "30" 
                          type={values.showPassword ? 'text' : 'password'}
                      /> */}
                       {/* <span className="d-flex align-items-center" onClick={handleClickShowPassword} style={{ justifyContent: "right" }}>
                            {values.showPassword  ? (
                            <EyeOutlined  className="d-flex mr-10" size={25}
                            style={{ position: "absolute", width: "3%", color: "#094D72", marginRight: "1%",marginTop:'-35px' }}/>
                            ) : (
                            
                            <EyeInvisibleOutlined  className="d-flex mr-10"  size={25}
                            style={{ position: "absolute", width: "3%", color: "#094D72", marginRight: "1%",marginTop:'-35px' }}/>
                            )}
                      </span> 
                      {formik.touched.password && formik.errors.password && (
                        <div className="error">{formik.errors.password}</div>
                      )}
                    </div>
                    {/* <div class="col-md-4">
                      <label class="form-label">Confirm Password *</label>
                      <input class="form-control" placeholder='Confirm Password' 
                          value={formik.values.repassword}
                          id="repassword"
                          name="repassword" 
                          onChange={formik.handleChange} 
                          maxlength = "30" 
                          type={valuesRe.showRePassword ? 'text' : 'password'} 
                      />
                      <span className="d-flex align-items-center" onClick={handleClickShowRePassword} style={{ justifyContent: "right" }}>
                            {valuesRe.showRePassword  ? (
                            <EyeOutlined  className="d-flex mr-10" size={25}
                            style={{ position: "absolute", width: "3%", color: "#094D72", marginRight: "1%",marginTop:'-35px' }}/>
                            ) : (
                            
                            <EyeInvisibleOutlined  className="d-flex mr-10"  size={25}
                            style={{ position: "absolute", width: "3%", color: "#094D72", marginRight: "1%",marginTop:'-35px' }}/>
                            )}
                      </span>
                      {formik.touched.repassword && formik.errors.repassword && (
                        <div className="error">{formik.errors.repassword}</div>
                      )}
                    </div>

                    <div class="col-md-6">
                      <button type="submit" class="w-100 btn btn-dark" id="cancel" onClick={tocategorypage}>Cancel</button>
                    </div> */}
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

export default Users