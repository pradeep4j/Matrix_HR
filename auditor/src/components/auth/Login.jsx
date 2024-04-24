import React, { useState,useEffect } from 'react';
import {  Typography,FormGroup,FormControl,TextField,styled,Button, FormLabel,Avatar,InputAdornment,IconButton } from '@mui/material';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { deepOrange } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import {loginUser} from '../../store/actions/authActions';
import Loading from '../layout/Loading';
import { toast } from 'react-toastify';
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //formik is third party React form library. It provides basic form programming and validation
import {useDispatch,useSelector} from 'react-redux';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [values, setValues] = useState({showPassword: false});
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, userInfo } = userLogin;
    const initialValues = {
        email: '',
        password: '',
        recaptcha:''
      }
    const schema = Yup.object({
        email: Yup.string('')
            .required('Email is required')
            .email('Enter a valid email!'),
            
        password: Yup.string('')
            .min(8, 'The password must be at least 8 characters.')
            .required('Password is required')
            .matches(/^(?=(?:[^A-Z]*[A-Z]){1})(?=(?:[^0-9]*[0-9]){1})(?=(?:[^!@#$%^&*()_+|~\-=`{}\[\]:";'<>?,.\/]*[!@#$%^&*()_+|~\-=`{}\[\]:";'<>?,.\/]){1})[A-Za-z0-9!@#$%^&*()_+|~\-=`{}\[\]:";'<>?,.\/]{8}$/,"Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters!"),
    });
    //for inline validations via Yup and formik
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            onAdminLogin(values, resetForm);
        }
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const onAdminLogin = async (val) => {
        const postBody = {
            email: val.email,
            password: val.password
        }
        // api call
        document.getElementById("submitting").innerText="Logging User...Please wait";
        document.getElementById("submitting").disabled=true;            
        dispatch(loginUser(postBody)); 

    }
    useEffect(()=>{
        if(userInfo){
            navigate("/dashboard")
        }
    },[userInfo]);
    return (

        <Container>
            <center><Avatar style={{alignItems:'center'}} sx={{ bgcolor: deepOrange[500] }} /></center>
            <Typography  style={{textAlign:'center'}}><Ptags>(All the field having * are required)</Ptags></Typography>
            {loading && <Loading />}
            {/* <Form metod="post" onSubmit={(e) =>{ onSubmit(e)}}> */}
                <FormControl >
                    <TextField value={formik.values.email} 
                            required='required'
                            id="email"
                            name="email" 
                           // label="Email"  
                            label={<EmailIcon />} 
                            onChange={formik.handleChange} 
                            inputProps={{ maxLength: 50 }}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email} />
                </FormControl> 
                <FormControl>
                    <TextField value={formik.values.password} 
                            required='required' 
                            id='password' 
                            name='password' 
                            //label="Password"  
                            label={<LockIcon />}
                            onChange={formik.handleChange} 
                            /* inputProps={{ maxLength: 50 }} */
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password} 
                            type={values.showPassword ? 'text' : 'password'} 
                            InputProps={{endAdornment: (
                                
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                      >
                                        {values.showPassword ?  <Visibility /> : <VisibilityOff />}
                                      </IconButton>
                                    </InputAdornment>
                                  
                            )}} />
                </FormControl> 

                <FormControl>
                    <Buttons variant="contained" type="submit" id="submitting" onClick={formik.handleSubmit}>Login</Buttons>
                </FormControl>
        </Container>

    )
}

export default Login;
const Container = styled(FormGroup)`
width: 30%;
margin: 8% auto 0 auto;
& > div {
    margin-top:10px;
}
`
const Buttons = styled(Button)`
width: 100%;
line-height: 3.0;
`
const Ptags = styled('p')`
font-weight: 500;
letter-spacing: -0.025em;
color: #253992;
line-height: 1.2;
`