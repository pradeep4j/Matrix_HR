import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const  DynamicHTMLGeneratorD1 = ({ formData, setFormData }) =>{
  const getState = useSelector((state) => state.getState);
  const { loadings, stateInfo } = getState;
  const handlenumberOfPersonsChange = (e) => {
    const numberOfPersons = parseInt(e.target.value);
    const newFormData = Array.from({ length: numberOfPersons }, () => ({
      regnumber: '',
      regdetails: '',
      regimage: '',
      regremarks: '',
      doc:'',
      docdetails: '',
      docimage: '',
      docremark: '',
      offaddress: '',
      offstate: '',
      offdistrict: '',
      offpin: '',
      offaddressdetails: '',
      offaddressimage: '',
      offaddressremark: '',
    }));
    setFormData(newFormData);
  };

  const handleInputChange = (e, fieldName, index) => {
    let newFormData = [...formData];
    
    if((fieldName).indexOf('image') != -1)
    {
      // alert((fieldName).indexOf('image')+'asasa')
      // newFormData = [...formData];
      newFormData[index][fieldName] = e.target.files[0];
      setFormData(newFormData);
    }
    else{
      // newFormData = [...formData];
      newFormData[index][fieldName] = e.target.value;
      setFormData(newFormData);
    }
  };
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
  const generateDirectorsForm = () => {
    return formData.map((person, index) => (
      <React.Fragment key={index}>
        <tr>
          <td>
            <label className="form-label">Registration Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Registration Number"
              value={person.regnumber || ''}
              onChange={(e) => handleInputChange(e, 'regnumber', index)}
              id={`regnumber_${index}`}  
              name={`regnumber_${index}`} 
              required
            />
          </td>
          {/* <td>
            <label className="form-label">Details</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={person.regdetails || ''}
              onChange={(e) => handleInputChange(e, 'regdetails', index)}
              id={`regdetails_${index}`}  
              name={`regdetails_${index}`} 
            />
          </td> */}
          <td>
            <div className="form-group files1">
              <input
                type="file"
                multiple=""
                accept="image/*,application/pdf"
                className="form-control"
                style={{ height: '10px' }}
                onChange={(e) => handleInputChange(e, 'regimage', index)}
                id={`regimage_${index}`}  
                name={`regimage_${index}`} 
                required
              />
            </div>
          </td>
          <td>
            <label className="form-label">Remarks</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={person.regremarks || ''}
              onChange={(e) => handleInputChange(e, 'regremarks', index)}
              id={`regremarks_${index}`}  
              name={`regremarks_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <label className="form-label">Date of Coverage</label>
            <input
              type="date"
              className="form-control"
              placeholder="Date of Coverage"
              value={formatDate(person.doc) || ''}
              onChange={(e) => handleInputChange(e, 'doc', index)}
              id={`doc_${index}`}  
              name={`doc_${index}`} 
              required
            />
          </td>
          {/* <td>
            <label className="form-label">Details</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={person.docdetails || ''}
              onChange={(e) => handleInputChange(e, 'docdetails', index)}
              id={`docdetails_${index}`}  
              name={`docdetails_${index}`} 
            />
          </td>
          <td>
            <div className="form-group files1">
              <input
                type="file"
                multiple=""
                accept="image/*,application/pdf"
                className="form-control"
                style={{ height: '10px' }}
                onChange={(e) => handleInputChange(e, 'docimage', index)}
                id={`docimage_${index}`}  
                name={`docimage_${index}`} 
                required
              />
            </div>
          </td>
          <td>
            <label className="form-label">Remarks</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={person.docremark || ''}
              onChange={(e) => handleInputChange(e, 'docremark', index)}
              id={`docremark_${index}`}  
              name={`docremark_${index}`} 
            />
          </td> */}
        </tr>

        <tr>
          <td>
          <label for="">Office Address as per Registration</label>
            <table>
                <tr>
                    <td>
                        <input type="text" class="form-control" 
                         placeholder="Address" 
                         value={person.offaddress || ''}
                         onChange={(e)=>handleInputChange(e, 'offaddress', index)} 
                         name={`offaddress_${index}`}  
                         id={`offaddress_${index}`}  
                         required/>
                    </td>
                </tr>
                <tr>
                    <td>
                         <select className="form-select" aria-label="Default select example" id={`offstate_${index}`} name={`offstate_${index}`} value={person.offstate || ''} onChange={(e)=>handleInputChange(e, 'offstate', index)} required>
                                  <option value="">Select State</option>
                              {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                  <option value={item._id}>{item.name}</option>
                              )};
                          </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" class="form-control" 
                         placeholder="District" 
                         value={person.offdistrict || ''}
                         onChange={(e)=>handleInputChange(e, 'offdistrict', index)} 
                         name={`offdistrict_${index}`}  
                         id={`offdistrict_${index}`}  
                         required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="number" class="form-control" 
                         placeholder="PIN" 
                         value={person.offpin || ''}
                         onChange={(e)=>handleInputChange(e, 'offpin', index)} 
                         name={`offpin_${index}`}  
                         id={`offpin_${index}`}  
                         required/>
                    </td>
                </tr>
            </table>
          </td>
          <td>
            <div className="form-group files1">
              <input
                type="file"
                multiple=""
                accept="image/*,application/pdf"
                className="form-control"
                style={{ height: '10px' }}
                onChange={(e) => handleInputChange(e, 'offaddressimage', index)}
                id={`offaddressimage_${index}`}  
                name={`offaddressimage_${index}`} 
                required
              />
            </div>
          </td>
          <td>
            <label className="form-label">Remarks</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={person.offaddressremark || ''}
              onChange={(e) => handleInputChange(e, 'offaddressremark', index)}
              id={`offaddressremark_${index}`}  
              name={`offaddressremark_${index}`} 
            />
          </td>
        </tr>
      </React.Fragment>
    ));
  };
  
  return (
    <table className="table  creat_tbl">
      <tbody>
        <tr>
          <td colSpan="4">
            <label className="form-label">Number of Subcodes</label>
            <input
              type="number"
              className="form-control"
              placeholder="Number of Subcodes"
              value={formData.length}
              onChange={handlenumberOfPersonsChange}
            />
          </td>
        </tr>
        {generateDirectorsForm()}
      </tbody>
    </table>
  );
}

export default DynamicHTMLGeneratorD1;