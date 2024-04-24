import React, { useState } from 'react';

const  DynamicHTMLGeneratorB1 = ({ formData, setFormData }) =>{
  const handleNumberOfDirectorsChange = (e) => {
    const numberOfDirectors = parseInt(e.target.value);
    const newFormData = Array.from({ length: numberOfDirectors }, () => ({
      name: '',
      details: '',
      nameimage: '',
      remarks: '',
      din: '',
      dindetails: '',
      dinimage: '',
      dinremark: '',
      pan: '',
      pandetails: '',
      panimage: '',
      panremark: '',
      aadhaar: '',
      aadhaardetails: '',
      aadhaarimage: '',
      aadhaarremark: '',
      mobile: '',
      mobiledetail: '',
      mobileremark: '',
      email: '',
      emaildetails: '',
      emailremark: '',
    }));
    setFormData(newFormData);
  };

  const handleInputChange = (e, fieldName, index) => {
    let newFormData = [...formData];
    

    if (fieldName.includes('image')) {
      newFormData[index][fieldName] = e.target.files[0];
    } else {
      newFormData[index][fieldName] = e.target.value;
    }
    // if((fieldName).indexOf('image') != -1)
    // {
    //   // alert((fieldName).indexOf('image')+'asasa')
    //   // newFormData = [...formData];
    //   newFormData[index][fieldName] = e.target.files[0];
    //   setFormData(newFormData);
    // }
    // else{
    //   // newFormData = [...formData];
    //   newFormData[index][fieldName] = e.target.value;
    //   setFormData(newFormData);
    // }
    setFormData(newFormData);
  };

  const generateDirectorsForm = () => {
    return formData.map((director, index) => (
      <React.Fragment key={index}>
        <tr>
          <td>
            <label className="form-label">Name{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name of Director"
              value={director.name || ''}
              onChange={(e) => handleInputChange(e, 'name', index)}
              id={`name_${index}`}  
              name={`name_${index}`} 
              required
            />
          </td>
          <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={director.details || ''}
              onChange={(e) => handleInputChange(e, 'details', index)}
              id={`details_${index}`}  
              name={`details_${index}`} 
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
            <label className="form-label">Remarks{index+1}</label>
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
            <label className="form-label">DIN Number{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="DIN Number"
              value={director.din || ''}
              onChange={(e) => handleInputChange(e, 'din', index)}
              id={`din_${index}`}  
              name={`din_${index}`} 
              required
            />
          </td>
          <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={director.dindetails || ''}
              onChange={(e) => handleInputChange(e, 'dindetails', index)}
              id={`dindetails_${index}`}  
              name={`dindetails_${index}`} 
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
                onChange={(e) => handleInputChange(e, 'dinimage', index)}
                id={`dinimage_${index}`}  
                name={`dinimage_${index}`} 
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
              value={director.dinremark || ''}
              onChange={(e) => handleInputChange(e, 'dinremark', index)}
              id={`dinremark_${index}`}  
              name={`dinremark_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="form-label">PAN Number{index+1}</label>
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
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={director.pandetails || ''}
              onChange={(e) => handleInputChange(e, 'pandetails', index)}
              id={`pandetails_${index}`}  
              name={`pandetails_${index}`} 
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
            <label className="form-label">Remarks{index+1}</label>
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
            <label className="form-label">AADHAAR Number{index+1}</label>
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
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={director.aadhaardetails || ''}
              onChange={(e) => handleInputChange(e, 'aadhaardetails', index)}
              id={`aadhaardetails_${index}`}  
              name={`aadhaardetails_${index}`} 
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
            <label className="form-label">Remarks{index+1}</label>
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
          <td>
            <label className="form-label">Mobile Number{index+1}</label>
            <input
              type="number"
              className="form-control"
              placeholder="Mobile Number"
              value={director.mobile || ''}
              onChange={(e) => handleInputChange(e, 'mobile', index)}
              id={`mobile_${index}`}  
              name={`mobile_${index}`} 
            />
          </td>
          <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={director.mobiledetail || ''}
              onChange={(e) => handleInputChange(e, 'mobiledetail', index)}
              id={`mobiledetail_${index}`}  
              name={`mobiledetail_${index}`} 
            />
          </td>
          <td>
            <label className="form-label">Remarks{index+1}</label>
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
          <td>
            <label className="form-label">Email{index+1}</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={director.email || ''}
              onChange={(e) => handleInputChange(e, 'email', index)}
              id={`email_${index}`}  
              name={`email_${index}`} 
            />
          </td>
          <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={director.emaildetails || ''}
              onChange={(e) => handleInputChange(e, 'emaildetails', index)}
              id={`emaildetails_${index}`}  
              name={`emaildetails_${index}`} 
            />
          </td>
          <td>
            <label className="form-label">Remark{index+1}</label>
            <input
              type="email"
              className="form-control"
              placeholder="Remark"
              value={director.emailremark || ''}
              onChange={(e) => handleInputChange(e, 'emailremark', index)}
              id={`emailremark_${index}`}  
              name={`emailremark_${index}`} 
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
            <label className="form-label">Number of Directors</label>
            <input
              type="number"
              className="form-control"
              placeholder="Number of Directors"
              value={formData.length}
              onChange={handleNumberOfDirectorsChange} required
            />
          </td>
        </tr>
        {generateDirectorsForm()}
      </tbody>
    </table>
  );
}

export default DynamicHTMLGeneratorB1;
