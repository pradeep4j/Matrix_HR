import React, { useState,useEffect } from 'react';
import {  Typography,FormGroup,FormControl,TextField,styled,/*Button,*/ FormLabel,Avatar,InputAdornment,IconButton } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Button, Flex } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
//import Loading from '../layout/Loading';
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //formik is third party React form library. It provides basic form programming and validation
import {useDispatch,useSelector} from 'react-redux';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { Table, Row, Col } from 'react-bootstrap';
import {categoryCreate} from '../../store/actions/otherActions';

const CreateCategory = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const catCreate = useSelector((state) => state.catCreate);
    const { loading, categoryInfo,error } = catCreate;
    // const viewall = () => {
    //     <ViewCategory />
    //   }
    //   const CreateCategory = () => {
    //     <CreateCategory />
    //   }
    const initialValues = {
        category: '',
        dates: ''
      }
    const schema = Yup.object({
        category: Yup.string('')
            .required('Category Name is required')
            .min(6, 'Category Name must be minimum of 6 charactors')
            .max(30, 'Category Name must be maximum of 30 charactors'),
           
            dates: Yup.string('')
            .required('Date is required')
    });
    //for inline validations via Yup and formik
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: async(values, { resetForm }) => {
            //onCategory(values);
          await onCategory(values)
          resetForm()
        }
    });
    const tocategorypage = () => {
        navigate('/dashboard')
    };
    const onCategory = async (val) => {
       // alert(val.dates); return;
        const postBody = {
            name: val.category,
            dates: val.dates
        }
        // api call        
        dispatch(categoryCreate(postBody)); 

    }
    useEffect(()=>{
        if(categoryInfo){
           // navigate("/dashboard")
        }
    },[]);
    return (

        <React.Fragment>
        <div className='dashboard_wrapper'>
          
            {/* <center><Avatar style={{alignItems:'center'}} sx={{ bgcolor: deepOrange[500] }} /></center> */}
            <Typography  style={{textAlign:'center'}}><Ptags>All the field having * are required</Ptags></Typography>
            {/* <Form metod="post" onSubmit={(e) =>{ onSubmit(e)}}> */}
                <Table >
                    <Row>
                        <DemoContainer
                                components={[]}
                            >
                            <Col >    
                            
                                <DemoItem label="Category Name *">
                                    <TextField value={formik.values.category} 
                                        required='required'
                                        id="category"
                                        name="category" 
                                        style={{ width:'500px' }}
                                        onChange={formik.handleChange} 
                                        inputProps={{ maxLength: 50 }}
                                        error={formik.touched.category && Boolean(formik.errors.category)}
                                        helperText={formik.touched.category && formik.errors.category} />
                                </DemoItem>   
     
                            </Col>          
                            <Col>
                                <DemoItem label="Date *">
                                        <TextField 
                                        value={formik.values.dates} 
                                        id="dates"
                                        name="dates" 
                                        style={{ width:'500px' }}
                                        onChange={formik.handleChange} 
                                        error={formik.touched.dates && Boolean(formik.errors.dates)}
                                        helperText={formik.touched.dates && formik.errors.dates}
                                        type="date" />
                                </DemoItem>       
                            
                            </Col>  
                        </DemoContainer>          
                    </Row>            
                </Table> 
                
                <Table >
                    <Row >
                        <Col  >    
                            {/* <Buttons  style={{ width:'498px' }} variant="contained" type="submit" id="cancel" onClick={tocategorypage} >Cancel</Buttons>&nbsp;&nbsp;&nbsp;
                            
                            <Buttons  style={{ width:'498px' }} variant="contained" type="submit" id="submitting" onClick={formik.handleSubmit}  >Save</Buttons> */}
                            {/* <Flex gap="small" wrap="wrap"> */}
                                <Button type="primary" style={{ width:'498px' }} id="cancel" onClick={tocategorypage}>Cancel</Button>
                            {/* </Flex>     */}
                            {/* <Flex gap="small" wrap="wrap"> */}
                                <Button type="primary" style={{ width:'498px' }} id="submitting" onClick={formik.handleSubmit} >Save</Button>
                            {/* </Flex> */}
                        </Col>    
                    </Row>            
                </Table> 
                <FormControl>
                    
                </FormControl>
                </div>
          
    </React.Fragment>

    )
}

export default CreateCategory;
const Container = styled(FormGroup)`
width: 80%;
margin: 8% auto 0 auto;
& > div {
    margin-top:10px;
}
`
const Buttons = styled(Button)`
line-height: 3.0;
margin: 20% auto 0 auto;
`
const Ptags = styled('p')`
font-weight: 500;
letter-spacing: -0.025em;
color: #253992;
line-height: 1.2;
margin-top:-50px;
`