import React, { useState } from 'react';

const  DynamicHTMLGeneratorD3FL = ({ formData, setFormData }) =>{
  const handlenumberOfPersonsChange = (e) => {
    const numberOfPersons = parseInt(e.target.value);
    const newFormData = Array.from({ length: numberOfPersons }, () => ({
      managernamelicense: '',
      managerlicensedetails: '',
      managerlicenseimage: '',
      managerlicenseremark: '',
      mobile: '',
      mobiledetail: '',
      mobileremark: '',
      email: '',
      emaildetails: '',
      emailremark: '',
      pan: '',
      pandetails: '',
      panimage: '',
      panremark: '',
      aadhaar: '',
      aadhaardetails: '',
      aadhaarimage: '',
      aadhaarremark: '',
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
          <td colspan="4">
            <label className="form-label">Date of Registration{index+1}</label>
            <input
              type="date"
              className="form-control"
              placeholder="Date of Registration"
              value={person.dor || ''}
              onChange={(e) => handleInputChange(e, 'dor', index)}
              id={`dor_${index}`}  
              name={`dor_${index}`} 
              required
            />
          </td>
          {/* <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={person.esidetails || ''}
              onChange={(e) => handleInputChange(e, 'esidetails', index)}
              id={`esidetails_${index}`}  
              name={`esidetails_${index}`} 
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
                onChange={(e) => handleInputChange(e, 'esiimage', index)}
                id={`esiimage_${index}`}  
                name={`esiimage_${index}`} 
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
              value={person.remarks || ''}
              onChange={(e) => handleInputChange(e, 'esiremarks', index)}
              id={`esiremarks_${index}`}  
              name={`esiremarks_${index}`} 
            />
          </td> */}
        </tr>
        <tr>
          <td colspan="4">
            <label className="form-label">Date of Expiry{index+1}</label>
            <input
              type="date"
              className="form-control"
              placeholder="Date of Expiry"
              value={person.doe || ''}
              onChange={(e) => handleInputChange(e, 'doe', index)}
              id={`doe_${index}`}  
              name={`doe_${index}`} 
              required
            />
          </td>
          {/* <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={person.esidocdetails || ''}
              onChange={(e) => handleInputChange(e, 'esidocdetails', index)}
              id={`esidocdetails_${index}`}  
              name={`esidocdetails_${index}`} 
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
                onChange={(e) => handleInputChange(e, 'esidocimage', index)}
                id={`esidocimage_${index}`}  
                name={`esidocimage_${index}`} 
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
              value={person.esidocremark || ''}
              onChange={(e) => handleInputChange(e, 'esidocremark', index)}
              id={`esidocremark_${index}`}  
              name={`esidocremark_${index}`} 
            />
          </td> */}
        </tr>
        <tr>
          <td colspan="4">
            <label className="form-label">Due Date of Renewal{index+1}</label>
            <input
              type="date"
              className="form-control"
              placeholder="Due Date of Renewal"
              value={person.doddr || ''}
              onChange={(e) => handleInputChange(e, 'doddr', index)}
              id={`doddr_${index}`}  
              name={`doddr_${index}`} 
              required
            />
          </td>
          {/* <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={person.esidocdetails || ''}
              onChange={(e) => handleInputChange(e, 'esidocdetails', index)}
              id={`esidocdetails_${index}`}  
              name={`esidocdetails_${index}`} 
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
                onChange={(e) => handleInputChange(e, 'esidocimage', index)}
                id={`esidocimage_${index}`}  
                name={`esidocimage_${index}`} 
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
              value={person.esidocremark || ''}
              onChange={(e) => handleInputChange(e, 'esidocremark', index)}
              id={`esidocremark_${index}`}  
              name={`esidocremark_${index}`} 
            />
          </td> */}
        </tr>
        <tr>
          <td>
                <label className="form-label">Manager Name of the License{index+1}</label>
                <input 
                type="text" 
                class="form-control" 
                placeholder="Manager Name of the License" 
                value={person.managernamelicense || ''}
                onChange={(e)=>handleInputChange(e, 'managernamelicense', index)} 
                name={`managernamelicense_${index}`}  
                id={`managernamelicense_${index}`}  
                required/>
          </td>

          <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={person.managerlicensedetails || ''}
              onChange={(e) => handleInputChange(e, 'managerlicensedetails', index)}
              id={`managerlicensedetails_${index}`}  
              name={`managerlicensedetails_${index}`} 
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
                onChange={(e) => handleInputChange(e, 'managerlicenseimage', index)}
                id={`managerlicenseimage_${index}`}  
                name={`managerlicenseimage_${index}`} 
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
              value={person.managerlicenseremark || ''}
              onChange={(e) => handleInputChange(e, 'managerlicenseremark', index)}
              id={`managerlicenseremark_${index}`}  
              name={`managerlicenseremark_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="form-label">Mobile Number{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile Number"
              value={person.mobile || ''}
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
              value={person.mobiledetail || ''}
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
              placeholder="Details"
              value={person.mobileremark || ''}
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
              value={person.email || ''}
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
              value={person.emaildetails || ''}
              onChange={(e) => handleInputChange(e, 'emaildetails', index)}
              id={`emaildetails_${index}`}  
              name={`emaildetails_${index}`} 
            />
          </td>
          <td>
            <label className="form-label">Remark{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={person.emailremark || ''}
              onChange={(e) => handleInputChange(e, 'emailremark', index)}
              id={`emailremark_${index}`}  
              name={`emailremark_${index}`} 
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
      </React.Fragment>
    ));
  };

  return (
    <table className="table  creat_tbl">
      <tbody>
        <tr>
          <td colSpan="4">
            <label className="form-label">Number</label>
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

export default DynamicHTMLGeneratorD3FL;
