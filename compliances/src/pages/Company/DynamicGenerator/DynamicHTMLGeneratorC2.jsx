import React, { useState } from 'react';

const  DynamicHTMLGeneratorC2 = ({ formData, setFormData }) =>{
  const handlenumberOfPersonsChange = (e) => {
    const numberOfPersons = parseInt(e.target.value);
    const newFormData = Array.from({ length: numberOfPersons }, () => ({
      name: '',
      nameimage: '',
      remarks: '',
      designation:'',
      designationimage: '',
      designationremark: '',
      mobile: '',
      mobiledetail: '',
      mobileremark: '',
      whatsAppNumber: '',
      whatsAppdetails: '',
      whatsAppremark: '',
      prefferedMComm: '',
      prefferedMCommremark: '',
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
            <label className="form-label">Name</label>
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
          <td colspan="2">
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
          <td >
            <label className="form-label">Remarks</label>
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
            <label className="form-label">Designation</label>
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
          <td colspan="2">
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
          <td >
            <label className="form-label">Remarks</label>
            <input
              type="text"
              className="form-control"
              placeholder="Remark"
              value={person.designationremark || ''}
              onChange={(e) => handleInputChange(e, 'designationremark', index)}
              id={`designationremark_${index}`}  
              name={`designationremark_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td >
            <label className="form-label">Mobile Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Mobile Number"
              value={person.mobile || ''}
              onChange={(e) => handleInputChange(e, 'mobile', index)}
              id={`mobile_${index}`}  
              name={`mobile_${index}`} 
              required/>
          </td>
          <td colspan="3">
            <label className="form-label">Remarks</label>
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
          <td >
            <label className="form-label">WhatsApp Number</label>
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
          <td colspan="3">
            <label className="form-label">whatsAppremark</label>
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
          <td >
            <label className="form-label">Preffered Means Communication</label>
            <select className="form-select" aria-label="Default select example" id={`email_${index}`}  
              name={`email_${index}`}  value={person.prefferd || ''} onChange={(e) => handleInputChange(e, 'prefferd', index)} placeholder="Prefferd means Of Communication" required>
                  <option value="">Prefferd means Of Communication</option>
                  <option value="1">Call</option>
                  <option value="2">SMS</option>
                  <option value="3">WhatsApp</option>
                  <option value="4">Email</option>
            </select>
          </td>
          <td colspan="3">
            <label className="form-label">Remark</label>
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
          <td colspan="4">
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

export default DynamicHTMLGeneratorC2;