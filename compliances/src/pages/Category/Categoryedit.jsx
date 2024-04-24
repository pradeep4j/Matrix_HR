import React, { useState } from 'react';
import { Typography, FormGroup, FormControl, TextField, styled, Button, InputLabel, Select, MenuItem, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { toast } from 'react-toastify';
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //formik is third party React form library. It provides basic form programming and validation
import { editUserFromAdminById } from '../../routes/api';
import { useForm, Form } from '../../components/useForm';
import { Table, Row, Col } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {categoryEdit} from "../../store/actions/otherActions";
import {useNavigate} from 'react-router-dom';
const Categoryedit = ({ addOrEdit, recordForEdit }) => {
    //const [openPopup, setOpenPopup] = useState(true);
  //  let recordForEditArr=[];
   let recordForEditArr;

    //const finalresult = Object.keys(recordForEdit).filter(()=>{}).reduce(()=>{});
   // console.log('changes=',recordForEditArr,'real=',recordForEdit);
//    let valuesAfterSkipping;

//    valuesAfterSkipping = recordForEdit.map(item => item.value);
// let keys1 = []; 
// let values1 = []; 
  
// recordForEdit.forEach((values, keys) => { 
//     keys1.push(keys); 
//     values1.push(values); 
// }); 
// console.log(keys1); 
// console.log(values1[0].name);
//    let keys1 = Array.from(recordForEdit.keys()); 
//     let values1 = Array.from(recordForEdit.values());
    // console.log(valuesAfterSkipping);
    const initialValues = {
        name: ''
        
    }

    const savedValues = {
        name: recordForEdit[0].name,
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const schema = Yup.object({
        name: Yup.string('')
            .required('Category Name is required')
            .min(6, 'Category Name must be minimum of 6 charactors')
            .max(30, 'Category Name must be maximum of 30 charactors'),
           
            // dates: Yup.string('')
            // .required('Date is required')
    });

    //for inline validations via Yup and formik
    const formik = useFormik({
        initialValues: (savedValues || initialValues),
        enableReinitialize: true,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            onStatusUpdate(values, resetForm);
        }
    });
    const handleClose = () => {
        addOrEdit(values, resetForm);
        // recordForEdit(false)
    };
    const {
        values,
        resetForm
    } = useForm(initialValues, true);
    
    const onStatusUpdate = async (val) => {
        const postBody = {
            name:val.name,
        }
        //alert(JSON.stringify(postBody)); return;
        // api call
        dispatch(categoryEdit(postBody,recordForEdit[0]._id));
        handleClose();
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Container>
                <Row >
                    <Col>
                        <FormControl>
                            <TextField value={formik.values.name}
                                id='name'
                                name='name'
                                label="Category Name"
                                onChange={formik.handleChange}
                                //required
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            //style={{ lineHeight:1.0 }}
                            />
                        </FormControl>
                    </Col>
                    
                </Row>
                <Row >
                    <Col>
                        <FormControl>
                            <TextField value={formik.values.dates}
                                id='dates'
                                name='dates'
                                label="Created Date"
                                type="number"
                                onChange={formik.handleChange}
                                error={formik.touched.dates && Boolean(formik.errors.dates)}
                                helperText={formik.touched.dates && formik.errors.dates}
                                disabled
                            />
                        </FormControl>
                    </Col>
                    

                </Row>
                
                <div class="col-md-6">
                      <button type="submit" class="w-100 btn btn-primary" >Save</button>
                </div>
            </Container>
        </form>
    )
}

export default Categoryedit;
const Container = styled(FormGroup)`
width: 100%;
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
font-size: '20px';
font-weight: 300;
letter-spacing: -0.025em;
color: #253992;
line-height: 0.9;
`
const Spannings = styled(FormLabel)`
& > div {
    margin-left:14px;
}
color: #d32f2f;
font-size:12px;
`