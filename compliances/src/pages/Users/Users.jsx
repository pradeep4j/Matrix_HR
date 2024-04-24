import React,{useState,useEffect} from 'react';
import {Space} from "antd";
import {EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import {useDispatch,useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {usersCreates} from '../../store/actions/otherActions';
import UsersTable from "./UsersTable";
import {usersGet} from "../../store/actions/otherActions";
import $ from 'jquery';
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //formik is third party React form library. It provides basic form programming and validation
const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({showPassword: false});
  const [valuesRe, setValuesRe] = useState({showRePassword: false});
  const userCreate = useSelector((state) => state.userCreate);
  const { loading, userCreateInfo,error } = userCreate;
  function generatePassword() {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const specialCharacters = '!@#$%^&*()-_=+[{]};:,<.>?/';
    const numbers = '0123456789';

    let password = '';

    // Generate one uppercase letter
    password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];

    // Generate five random lowercase letters (6 in total with the uppercase)
    for (let i = 0; i < 5; i++) {
        password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    }

    // Generate one special character
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    // Generate one numeric character
    password += numbers[Math.floor(Math.random() * numbers.length)];

    // Shuffle the password to mix the characters
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    // Check if the password length is less than 8
    if (password.length < 8) {
        const missingLength = 8 - password.length;
        const remainingCharacters = lowercaseLetters + specialCharacters + numbers;

        // Add missing characters to meet the length requirement
        for (let i = 0; i < missingLength; i++) {
            password += remainingCharacters[Math.floor(Math.random() * remainingCharacters.length)];
        }

        // Shuffle again to mix the added characters
        password = password.split('').sort(() => Math.random() - 0.5).join('');
    }

    return password;
  }
  let bothpassword =  generatePassword();
  var initialValues = {
    firstname: '',
    lastname: '',
    role: '',
    email:'',
    password: bothpassword,
    repassword:bothpassword
  }
const schema = Yup.object({
    firstname: Yup.string('')
        .required('First Name is required')
        .min(3, 'First Name must be minimum of 3 charactors')
        .max(30, 'First Name Name must be maximum of 30 charactors'),
    // lastname: Yup.string('')
    //     .required('Last Name is required')
    //     .min(3, 'Last Name must be minimum of 3 charactors')
    //     .max(30, 'Last Name Name must be maximum of 30 charactors'),        
    role: Yup.string('')
        .required('Role is required'),   
    email: Yup.string('')
        .required("Email is required!")
        .email("Email is invalid!")
        .min(6,'Email should have of minimum 6 characters length!')
        .max(50, 'Email should be of maximum 50 characters length'),        
    password: Yup.string()
        .min(6, 'Password should be of minimum 6 characters length')
        .max(15, 'Password should be of minimum 15 characters length')
        .required('Password is required'), //in editing password is not required initially because it comes from database and we will not check its required
        // .matches(/^(?=.*\d)(?=.*[@#\-_$%^&+=ยง!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=ยง!\?]+$/, 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters.'),
    repassword: Yup.string('')
        .min(6, 'Password should be of minimum 6 characters length')
        .max(15, 'Password should be of minimum 15 characters length')
        .required('Re Password is required') //.required('Password is required') in editing password is not required initially because it comes from database  and we will not check its required
        // .matches(/^(?=.*\d)(?=.*[@#\-_$%^&+=ยง!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=ยง!\?]+$/, 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters.')
        .when('password', {
          is: (val) => !!(val && val.length > 0),
          then: Yup.string().oneOf(
            [Yup.ref('password')],
            'Password and Retype Password do not match')
        }),             
});

//for inline validations via Yup and formik
const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values, action)=>{
      onUserCreate(values,action);
    }}
);
const tocategorypage = () => {
    navigate('/dashboard')
};

const onUserCreate = async (val,action) => {
    
    const postBody = {
        firstName: val.firstname,
        lastName: val.lastname,
        role: val.role,
        email: val.email,
        password: val.password
    }
    // api call        
    dispatch(usersCreates(postBody)); 
    action.resetForm();
   // document.getElementById('category').value='';
}
const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
};
const handleClickShowRePassword = () => {
    setValuesRe({ ...valuesRe, showRePassword: !valuesRe.showRePassword });
};
useEffect(() => {
    if(userCreateInfo)
    {
        //navigate('/usercreate')
    }
    
},[])  
const calling = () => {
  dispatch(usersGet());
}
const createnew = () => {
  // dispatch(usersCreates());
}
const handleClickGeneratePassword = () => {
  const newPassword = generatePassword();
  formik.setFieldValue('password', newPassword);
  formik.setFieldValue('repassword', newPassword);
};
  return (

    <React.Fragment>
      <div className='dashboard_wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul class="nav nav-pills mb-3 bg-light" id="pills-tab" role="tablist">
                <li class="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                  <button class="nav-link w-100 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={calling}>View All</button>
                </li>
                <li class="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                  <button class="nav-link w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={createnew}>Create New</button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent" >
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" >
                  <div class="row">
                    <div class="col-12 col-lg-12">
                      <UsersTable />
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <form class="row g-3" onSubmit={formik.handleSubmit}>
                    <div class="col-md-4">
                      <label for="" class="form-label">First Name *</label>
                      <input type="text" class="form-control" placeholder='Firstname Name' 
                         // required='required'
                          value={formik.values.firstname}
                          id="firstname"
                          name="firstname" 
                          onChange={formik.handleChange} 
                          maxlength = "30"    
                          />
                      {formik.touched.firstname && formik.errors.firstname && (
                        <div className="error">{formik.errors.firstname}</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label class="form-label">Last Name </label>
                      <input type="text" class="form-control" placeholder='Lastname Name' 
                          value={formik.values.lastname}
                          id="lastname"
                          name="lastname" 
                          onChange={formik.handleChange} 
                          maxlength = "30" 
                      />
                      {/* {formik.touched.lastname && formik.errors.lastname && (
                        <div className="error">{formik.errors.lastname}</div>
                      )} */}
                    </div>
                    <div class="col-md-4">
                      <label for="" class="form-label">Select Role *</label><br />
                      <select id="role" name="role" class="form-control"
                        value={formik.values.role}
                        onChange={formik.handleChange} 
                        >
                        <option value="" >Select Role</option>
                        <option value="Executive(Matrix)" >Executive(Matrix)</option>
                        <option value="Companey CEO" >Companey CEO</option>
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
                      />
                       <span className="d-flex align-items-center" onClick={handleClickShowPassword} style={{ justifyContent: "right" }}>
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
                    <div class="col-md-4">
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
                    {/* <div class="col-md-6"> */}
                      <button type="button" class="btn btn-secondary" onClick={handleClickGeneratePassword}>Generate New Password</button>
                    {/* </div> */}
                    <div class="col-md-6 mb-2">
                      <button type="submit" class="w-100 btn btn-dark" id="cancel" style={{marginTop:'230px'}} onClick={tocategorypage}>Cancel</button>
                    </div>
                   <div class="col-md-6 mb-2">
                      <button type="submit" class="w-100 btn btn-primary" style={{marginTop:'230px'}}>Save</button>
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