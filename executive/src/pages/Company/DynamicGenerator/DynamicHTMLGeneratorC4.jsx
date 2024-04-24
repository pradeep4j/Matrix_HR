import React, { useState } from 'react';

const  DynamicHTMLGeneratorC3 = ({ formData, setFormData }) =>{
  const handlenumberOfPersonsChange = (e) => {
    const numberOfPersons = parseInt(e.target.value);
    const newFormData = Array.from({ length: numberOfPersons }, () => ({
      name: '',
      details: '',
      nameimage: '',
      remarks: '',
      designation:'',
      designationdetails: '',
      designationimage: '',
      designationremark: '',
      mobile: '',
      mobiledetail: '',
      mobileremark: '',
      whatsAppNumber: '',
      whatsAppdetails: '',
      whatsAppremark: '',
      prefferedMComm: '',
      prefferedMCommdetails: '',
      prefferedMCommremark: '',
      email: '',
      emaildetails: '',
      emailremark: '',
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
            <label className="form-label">Name{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name of Person"
              value={person.name || ''}
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
              value={person.details || ''}
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
              value={person.remarks || ''}
              onChange={(e) => handleInputChange(e, 'remarks', index)}
              id={`remarks_${index}`}  
              name={`remarks_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="form-label">Designation{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Designation"
              value={person.designation || ''}
              onChange={(e) => handleInputChange(e, 'designation', index)}
              id={`designation${index}`}  
              name={`designation${index}`} 
              required
            />
          </td>
          <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={person.designationdetails || ''}
              onChange={(e) => handleInputChange(e, 'designationdetails', index)}
              id={`designationdetails_${index}`}  
              name={`designationdetails_${index}`} 
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
            <label className="form-label">Remarks{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remarks"
              value={person.designationremark || ''}
              onChange={(e) => handleInputChange(e, 'designationremark', index)}
              id={`designationremark_${index}`}  
              name={`designationremark_${index}`} 
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
              placeholder="Remark"
              value={person.mobileremark || ''}
              onChange={(e) => handleInputChange(e, 'mobileremark', index)}
              id={`mobileremark_${index}`}  
              name={`mobileremark_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="form-label">WhatsApp Number{index+1}</label>
            <input
              type="number"
              className="form-control"
              placeholder="WhatsApp Number"
              value={person.whatsAppNumber || ''}
              onChange={(e) => handleInputChange(e, 'whatsAppNumber', index)}
              id={`whatsAppNumber_${index}`}  
              name={`whatsAppNumber_${index}`} 
              required
            />
          </td>
          <td>
            <label className="form-label">whatsAppdetails{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={person.whatsAppdetails || ''}
              onChange={(e) => handleInputChange(e, 'whatsAppdetails', index)}
              id={`whatsAppdetails_${index}`}  
              name={`whatsAppdetails_${index}`} 
            />
          </td>
          <td>
            <label className="form-label">whatsAppremark{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={person.whatsAppremark || ''}
              onChange={(e) => handleInputChange(e, 'whatsAppremark', index)}
              id={`whatsAppremark_${index}`}  
              name={`whatsAppremark_${index}`} 
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
            <label className="form-label">Preffered Means Communication{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Preffered Means Communication"
              value={person.prefferedMComm || ''}
              onChange={(e) => handleInputChange(e, 'prefferedMComm', index)}
              id={`prefferedMComm_${index}`}  
              name={`prefferedMComm_${index}`} 
              required
            />
          </td>
          <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={person.prefferedMCommdetails || ''}
              onChange={(e) => handleInputChange(e, 'prefferedMCommdetails', index)}
              id={`prefferedMCommdetails_${index}`}  
              name={`prefferedMCommdetails_${index}`} 
            />
          </td>
          <td>
            <label className="form-label">Remark{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={person.prefferedMCommremark || ''}
              onChange={(e) => handleInputChange(e, 'prefferedMCommremark', index)}
              id={`prefferedMCommremark_${index}`}  
              name={`prefferedMCommremark_${index}`} 
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
              placeholder="Number of Persons"
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

export default DynamicHTMLGeneratorC3;
