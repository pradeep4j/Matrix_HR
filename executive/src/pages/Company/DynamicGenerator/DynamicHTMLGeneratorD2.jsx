import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const  DynamicHTMLGeneratorD2 = ({ formData, setFormData }) =>{
  const getState = useSelector((state) => state.getState);
  const { loadings, stateInfo } = getState;
  const handlenumberOfPersonsChange = (e) => {
    const numberOfPersons = parseInt(e.target.value);
    const newFormData = Array.from({ length: numberOfPersons }, () => ({
      esinumber: '',
      esidetails: '',
      esiimage: '',
      esiremarks: '',
      esidoc:'',
      esidocdetails: '',
      esidocimage: '',
      esidocremark: '',
      esioffaddress: '',
      esioffstate: '',
      esioffdistrict: '',
      esioffpin: '',
      esioffaddressdetails: '',
      esioffaddressimage: '',
      esioffaddressremark: '',
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
            <label className="form-label">ESI Subcodes{index+1}</label>
            <input
              type="text"
              className="form-control"
              placeholder="ESI Subcode"
              value={person.esinumber || ''}
              onChange={(e) => handleInputChange(e, 'esinumber', index)}
              id={`esinumber_${index}`}  
              name={`esinumber_${index}`} 
              required
            />
          </td>
          <td>
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
              value={person.esiremarks || ''}
              onChange={(e) => handleInputChange(e, 'esiremarks', index)}
              id={`esiremarks_${index}`}  
              name={`esiremarks_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <label className="form-label">Date of Coverage{index+1}</label>
            <input
              type="date"
              className="form-control"
              placeholder="Date of Coverage"
              value={person.esidoc || ''}
              onChange={(e) => handleInputChange(e, 'esidoc', index)}
              id={`doc_${index}`}  
              name={`doc_${index}`} 
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
          <label for="">Office Address as per Registration{index+1}</label>
            <table>
                <tr>
                    <td>
                        <input type="text" class="form-control" 
                         placeholder="Address" 
                         value={person.esioffaddress || ''}
                         onChange={(e)=>handleInputChange(e, 'esioffaddress', index)} 
                         name={`esioffaddress_${index}`}  
                         id={`esioffaddress_${index}`}  
                         required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        {/* <input type="text" class="form-control" 
                         placeholder="State" 
                         value={person.offstate || ''}
                         onChange={(e)=>handleInputChange(e, 'esioffstate', index)} 
                         name={`esioffstate_${index}`}  
                         id={`esioffstate_${index}`}  
                         required/> */}
                         <select className="form-select" aria-label="Default select example"  name={`esioffstate_${index}`}  
                         id={`esioffstate_${index}`}    value={person.esioffstate || ''} onChange={(e)=>handleInputChange(e, 'esioffstate', index)} required>
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
                         value={person.esioffdistrict || ''}
                         onChange={(e)=>handleInputChange(e, 'esioffdistrict', index)} 
                         name={`esioffdistrict_${index}`}  
                         id={`esioffdistrict_${index}`}  
                         required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="number" class="form-control" 
                         placeholder="PIN" 
                         value={person.esioffpin || ''}
                         onChange={(e)=>handleInputChange(e, 'esioffpin', index)} 
                         name={`esioffpin_${index}`}  
                         id={`esioffpin_${index}`}  
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
              value={person.esioffaddressdetails || ''}
              onChange={(e) => handleInputChange(e, 'esioffaddressdetails', index)}
              id={`esioffaddressdetails_${index}`}  
              name={`esioffaddressdetails_${index}`} 
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
                onChange={(e) => handleInputChange(e, 'esioffaddressimage', index)}
                id={`esioffaddressimage_${index}`}  
                name={`esioffaddressimage_${index}`} 
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
              value={person.esioffaddressremark || ''}
              onChange={(e) => handleInputChange(e, 'esioffaddressremark', index)}
              id={`esioffaddressremark_${index}`}  
              name={`esioffaddressremark_${index}`} 
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

export default DynamicHTMLGeneratorD2;
