import React, { useState } from 'react';

function DynamicHTMLGeneratorB2({ formData, setFormData }) {
  const handleNumberOfDirectorsChange = (e) => {
    const numberOfDirectors = parseInt(e.target.value);
    const newFormData = Array.from({ length: numberOfDirectors }, () => ({
      name: '',
      details: '',
      nameimage: '',
      remarks: '',
      designation:'',
      designationimage: '',
      designationremark: '',
      pan: '',
      pandetails: '',
      panimage: '',
      panremark: '',
      aadhaar: '',
      aadhaarimage: '',
      aadhaarremark: '',
      mobile: '',
      mobileremark: '',
      email: '',
      emailremark: '',
      authletter: '',
      authletterimage: '',
      authletterremark: '',
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
    
    // newFormData[index][fieldName] = e.target.value;
    // setFormData(newFormData);
  };

  const generateDirectorsForm = () => {
    return formData.map((director, index) => (
      <React.Fragment key={index}>
        <tr>
          <td>
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={director.name || ''}
              onChange={(e) => handleInputChange(e, 'name', index)}
              id={`name_${index}`}  
              name={`name_${index}`} 
              required
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
                onChange={(e) => handleInputChange(e, 'nameimage', index)}
                id={`nameimage_${index}`}  
                name={`nameimage_${index}`} 
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
              value={director.remarks || ''}
              onChange={(e) => handleInputChange(e, 'remarks', index)}
              id={`remarks_${index}`}  
              name={`remarks_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="form-label">Designation</label>
            <input
              type="text"
              className="form-control"
              placeholder="Designation"
              value={director.designation || ''}
              onChange={(e) => handleInputChange(e, 'designation', index)}
              id={`designation${index}`}  
              name={`designation${index}`} 
              required
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
                onChange={(e) => handleInputChange(e, 'designationimage', index)}
                id={`designationimage_${index}`}  
                name={`designationimage_${index}`} 
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
              value={director.designationremark || ''}
              onChange={(e) => handleInputChange(e, 'designationremark', index)}
              id={`designationremark_${index}`}  
              name={`designationremark_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="form-label">PAN Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="PAN Number"
              value={director.pan || ''}
              onChange={(e) => handleInputChange(e, 'pan', index)}
              id={`pan_${index}`}  
              name={`pan_${index}`} 
              required
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
                onChange={(e) => handleInputChange(e, 'panimage', index)}
                id={`panimage_${index}`}  
                name={`panimage_${index}`} 
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
              value={director.panremark || ''}
              onChange={(e) => handleInputChange(e, 'panremark', index)}
              id={`panremark_${index}`}  
              name={`panremark_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="form-label">AADHAAR Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="AADHAAR Number"
              value={director.aadhaar || ''}
              onChange={(e) => handleInputChange(e, 'aadhaar', index)}
              id={`aadhaar_${index}`}  
              name={`aadhaar_${index}`} 
              required
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
                onChange={(e) => handleInputChange(e, 'aadhaarimage', index)}
                id={`aadhaarimage_${index}`}  
                name={`aadhaarimage_${index}`} 
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
              value={director.aadhaarremark || ''}
              onChange={(e) => handleInputChange(e, 'aadhaarremark', index)}
              id={`aadhaarremark_${index}`}  
              name={`aadhaarremark_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td colspan="1">
            <label className="form-label">Mobile Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Mobile Number"
              value={director.mobile || ''}
              onChange={(e) => handleInputChange(e, 'mobile', index)}
              id={`mobile_${index}`}  
              name={`mobile_${index}`} 
              required
            />
          </td>
          <td colspan="2">
            <label className="form-label">Remarks</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={director.mobileremark || ''}
              onChange={(e) => handleInputChange(e, 'mobileremark', index)}
              id={`mobileremark_${index}`}  
              name={`mobileremark_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td colspan="1">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={director.email || ''}
              onChange={(e) => handleInputChange(e, 'email', index)}
              id={`email_${index}`}  
              name={`email_${index}`} 
              required
            />
          </td>
          <td colspan="2">
            <label className="form-label">Remark</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={director.emailremark || ''}
              onChange={(e) => handleInputChange(e, 'emailremark', index)}
              id={`emailremark_${index}`}  
              name={`emailremark_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td colspan="1">
            <label className="form-label">Authorized Letter</label>
            <input
              type="text"
              className="form-control"
              placeholder="Authorized Letter"
              value={director.authletter || ''}
              onChange={(e) => handleInputChange(e, 'authletter', index)}
              id={`authletter_${index}`}  
              name={`authletter_${index}`} 
              required
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
                onChange={(e) => handleInputChange(e, 'authletterimage', index)}
                id={`authletterimage_${index}`}  
                name={`authletterimage_${index}`} 
                required
              />
            </div>
          </td>
          <td colspan="2">
            <label className="form-label">Remark</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={director.authletterremark || ''}
              onChange={(e) => handleInputChange(e, 'authletterremark', index)}
              id={`authletterremark_${index}`}  
              name={`authletterremark_${index}`} 
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
            <label className="form-label">Number of Persons</label>
            <input
              type="number"
              className="form-control"
              placeholder="Number of Directors"
              value={formData.length}
              onChange={handleNumberOfDirectorsChange}
            />
          </td>
        </tr>
        {generateDirectorsForm()}
      </tbody>
    </table>
  );
}

export default DynamicHTMLGeneratorB2;