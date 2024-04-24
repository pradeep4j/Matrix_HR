import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {categoryCreate,categoryGet} from '../../store/actions/otherActions';
import CategoryTables from "./CategoryTables";
import * as Yup from 'yup'; // Yup is a JavaScript object schema validator.
import { useFormik } from 'formik'; //formik is third party React form library. It provides basic form programming and validation
function Category() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate() )

  const [date, setDate] = useState(defaultDate)

  const onSetDate = (event) => {
      setDate(new Date(event.target.value))
  }
  const catCreate = useSelector((state) => state.catCreate);
  const { loading, categoryInfo,error } = catCreate;
  var initialValues = {
    category: ''
  }
const schema = Yup.object({
    category: Yup.string('')
        .required('Category Name is required')
        .min(6, 'Category Name must be minimum of 6 charactors')
        .max(30, 'Category Name must be maximum of 30 charactors'),
       
        // dates: Yup.string('')
        // .required('Date is required')
});
//for inline validations via Yup and formik
const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values, action)=>{
      onCategory(values,action);
    }}
);
const tocategorypage = () => {
    navigate('/dashboard')
};
const onCategory = async (val,action) => {
    
    const postBody = {
        name: val.category,
        dates: val.dates
    }
    // api call        
    dispatch(categoryCreate(postBody)); 
    action.resetForm();
   // document.getElementById('category').value='';
}
const calling = () => {
  dispatch(categoryGet());
}
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
                  <button class="nav-link w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Create New</button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div class="row">
                    <div class="col-12 col-lg-12">
                      <CategoryTables />
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <form class="row g-3" onSubmit={formik.handleSubmit}>
                    <div class="col-md-6">
                      <label for="" class="form-label">Category Name *</label>
                      <input type="text" class="form-control" placeholder='Category Name' 
                         // required='required'
                          value={formik.values.category}
                          id="category"
                          name="category" 
                          onChange={formik.handleChange} 
                          maxlength = "50"    
                          />
                      {formik.touched.category && formik.errors.category && (
                        <div className="error">{formik.errors.category}</div>
                      )}
                    </div>
                    <div class="col-md-6">
                      <label class="form-label">Date *</label>
                      <input type="date" class="form-control" 
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
                    <div class="col-md-6">
                      <button type="submit" class="w-100 btn btn-dark" id="cancel" style={{marginTop:'330px'}} onClick={tocategorypage}>Cancel</button>
                    </div>
                   <div class="col-md-6">
                      <button type="submit" class="w-100 btn btn-primary" style={{marginTop:'330px'}}>Save</button>
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

export default Category;