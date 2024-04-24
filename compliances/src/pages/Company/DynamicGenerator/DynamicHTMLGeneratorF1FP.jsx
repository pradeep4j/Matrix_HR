import React, { useState } from 'react';

const  DynamicHTMLGeneratorD3MSME = ({ formData, setFormData }) =>{
  const handlenumberOfPersonsChange = (e) => {
    const numberOfPersons = parseInt(e.target.value);
    const newFormData = Array.from({ length: numberOfPersons }, () => ({
      dor: '',
      issuingauth: '',
      issuingauthdetails: '',
      issuingauthimage: '',
      issuingauthremark: '',
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
          <td>
                <label className="form-label">Issuing Authority{index+1}</label>
                <input type="text" class="form-control" 
                placeholder="Issuing Authority" 
                value={person.issuingauth || ''}
                onChange={(e)=>handleInputChange(e, 'issuingauth', index)} 
                name={`issuingauth_${index}`}  
                id={`issuingauth_${index}`}  
                required/>
          </td>
          <td>
            <label className="form-label">Details{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="Details"
              value={person.issuingauthdetails || ''}
              onChange={(e) => handleInputChange(e, 'issuingauthdetails', index)}
              id={`issuingauthdetails_${index}`}  
              name={`issuingauthdetails_${index}`} 
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
                onChange={(e) => handleInputChange(e, 'issuingauthimage', index)}
                id={`issuingauthimage_${index}`}  
                name={`issuingauthimage_${index}`} 
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
              value={person.issuingauthremark || ''}
              onChange={(e) => handleInputChange(e, 'issuingauthremark', index)}
              id={`issuingauthremark_${index}`}  
              name={`issuingauthremark_${index}`} 
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

export default DynamicHTMLGeneratorD3MSME;
