import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const  DynamicHTMLGeneratorGCC = ({ formData, setFormData }) =>{
  // alert(formData?.length)
  const getState = useSelector((state) => state.getState);
  const { loadings, stateInfo } = getState;
  const handlenumberOfPersonsChange = (e) => {
    const numberOfPersons = parseInt(e.target.value);
    const newFormData = Array.from({ length: numberOfPersons }, () => ({
      clientname: '',
      clientdetail: '',
      clientimage: '',
      clientremarks: '',
      clientaddress: '',
      clientstate: '',
      clientdistrict: '',
      clientpin: '',
      clientaddressdetails: '',
      clientaddressimage: '',
      clientaddressremark: '',
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

  const generateDirectorsForm = () => {
    return formData.map((person, index) => (
      <React.Fragment key={index}>
        <tr>
          <td>
            <label className="form-label">Client{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Client"
              value={person.clientname || ''}
              onChange={(e) => handleInputChange(e, 'clientname', index)}
              id={`clientname_${index}`}  
              name={`clientname_${index}`} 
              required
            />
          </td>
          <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text" 
              className="form-control"
              placeholder="Details"
              value={person.clientdetail || ''}
              onChange={(e) => handleInputChange(e, 'clientdetail', index)}
              id={`clientdetail_${index}`}  
              name={`clientdetail_${index}`} 
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
                onChange={(e) => handleInputChange(e, 'clientimage', index)}
                id={`clientimage_${index}`}  
                name={`clientimage_${index}`} 
                required
              />
            </div>
          </td>
          <td>
            <label className="form-label">Remarks{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={person.clientremarks || ''}
              onChange={(e) => handleInputChange(e, 'clientremarks', index)}
              id={`clientremarks_${index}`}  
              name={`clientremarks_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td>
          <label for="">Regsitered Office address of Client{index+1}</label>
            <table>
                <tr>
                    <td>
                        <input type="text" class="form-control" 
                         placeholder="Address" 
                         value={person.clientaddress || ''}
                         onChange={(e)=>handleInputChange(e, 'clientaddress', index)} 
                         name={`clientaddress_${index}`}  
                         id={`clientaddress_${index}`}  
                         required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        {/* <input type="text" class="form-control" 
                         placeholder="State" 
                         value={person.offstate || ''}
                         onChange={(e)=>handleInputChange(e, 'clientstate', index)} 
                         name={`clientstate_${index}`}  
                         id={`clientstate_${index}`}  
                         required/> */}
                         <select className="form-select" aria-label="Default select example"  name={`clientstate_${index}`}  
                         id={`clientstate_${index}`}    value={person.clientstate || ''} onChange={(e)=>handleInputChange(e, 'clientstate', index)} required>
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
                         value={person.clientdistrict || ''}
                         onChange={(e)=>handleInputChange(e, 'clientdistrict', index)} 
                         name={`clientdistrict_${index}`}  
                         id={`clientdistrict_${index}`}  
                         required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="number" class="form-control" 
                         placeholder="PIN" 
                         value={person.clientpin || ''}
                         onChange={(e)=>handleInputChange(e, 'clientpin', index)} 
                         name={`clientpin_${index}`}  
                         id={`clientpin_${index}`}  
                         required/>
                    </td>
                </tr>
            </table>
          </td>
          <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={person.clientaddressdetails || ''}
              onChange={(e) => handleInputChange(e, 'clientaddressdetails', index)}
              id={`clientaddressdetails_${index}`}  
              name={`clientaddressdetails_${index}`} 
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
                onChange={(e) => handleInputChange(e, 'clientaddressimage', index)}
                id={`clientaddressimage_${index}`}  
                name={`clientaddressimage_${index}`} 
                required
              />
            </div>
          </td>
          <td>
            <label className="form-label">Remarks{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={person.clientaddressremark || ''}
              onChange={(e) => handleInputChange(e, 'clientaddressremark', index)}
              id={`clientaddressremark_${index}`}  
              name={`clientaddressremark_${index}`} 
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
            <label className="form-label">Number of Client</label>
            <input
              type="number"
              className="form-control"
              placeholder="Number of Client"
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

export default DynamicHTMLGeneratorGCC;
