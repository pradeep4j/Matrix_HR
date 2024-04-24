import React, { useState,useRef,useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryGet, stateGets, companytab1create, companytab2create, companytab3create, companytab4create,companytab5create,companytab6create,companytab7create,companyTableGet,licenseGetonCreate } from "../../../store/actions/otherActions";
const  DynamicHTMLGeneratorE = ({ formData, setFormData }) =>{
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(true);
  const useRefnoOfEmpDeployedAgreementE2 = useRef(null);
  const myRefE3div = useRef(null);
  const divstyleshowhidemyRefE3div =  useRefnoOfEmpDeployedAgreementE2.current >20 ? 'hide' : 'show';
  const getState = useSelector((state) => state.getState);
  const { loadings, stateInfo } = getState;
  // console.log(stateInfo)
  useEffect(() => {
    dispatch(stateGets())
}, [dispatch]);
  // const numberOfBranchesInputRef = useRef(null);
  var dateObj = new Date();
  // Convert the Date object to a Unix timestamp (in milliseconds)
  var timestamp = dateObj.getTime();
  const inputRefsE  = {
    inputRef1 : useRef(null),
    inputRef2 : useRef(null),
    inputRef3 : useRef(null),
    inputRef4 : useRef(null),
    inputRef5 : useRef(null),
    inputRef6 : useRef(null),
  };
  useEffect(()=>{
    Object.values(inputRefsE).forEach((ref) => {
    if (ref.current) 
    {
      //  alert(useRefnoOfEmpDeployedAgreementE2.current)
      if (isVisible && useRefnoOfEmpDeployedAgreementE2.current >20) {
        myRefE3div.current.style.display='inline';
        ref.current.setAttribute('required', 'required');
      }
      else{
        myRefE3div.current.style.display='none';
        if (ref.current === inputRefsE.inputRef1.current) {
          ref.current.removeAttribute('required');
        }
        if (ref.current === inputRefsE.inputRef2.current) {
            ref.current.removeAttribute('required');
        }
        if (ref.current === inputRefsE.inputRef3.current) {
            ref.current.removeAttribute('required');
        }
        if (ref.current === inputRefsE.inputRef4.current) {
            ref.current.removeAttribute('required');
        }
        if (ref.current === inputRefsE.inputRef5.current) {
            ref.current.removeAttribute('required');
        }
        if (ref.current === inputRefsE.inputRef6.current) {
            ref.current.removeAttribute('required');
        }
      }  
    }
  })
  },[inputRefsE,divstyleshowhidemyRefE3div])
  const handleNumberOfBranchsChange = (e) => {
    const numberOfBranchs = parseInt(e.target.value);
    const newFormData = Array.from({ length: numberOfBranchs }, () => ({
      name: '',
      nameimage:'',
      nameremarks:'',
      noe:'',
      noeimage:'',
      noeremarks:'',
      contractoraddress: '',
      contractorstate: '',
      contractordistrict: '',
      contractorpin: '',
      contractoraddressimage: '',
      contractoraddressremark: '',
      agreementExpiryDateE2:'',
      agreementRenewalDateE2:'',
      natureOfWorkAgreementE2:'',
      natureOfWorkAgreementE2image:'',
      natureOfWorkAgreementE2Remark:'',
      noOfEmpDeployedAgreementE2:'',
      companyTypeLabourE3:'',
      companyTypeLabourE3image:'',
      companyTypeLabourE3Remark:'',
      contractLabourLicNoE3:'',
      contractLabourLicNoE3image:'',
      contractLabourLicNoE3Remark:'',
      contractLicDateE3:'',
      contractExpiryDateE3:'',
      contractRenewalDueDateE3:'',
      noOfWorkersContractE3:'',
      panContractorsE3:'',
      panContractorsE3image:'',
      panContractorsE3Remark:'',
      gstContractorsE3:'',
      gstContractorsE3image:'',
      gstContractorsE3Remark:'',
      pfRegContractorsE3:'',
      pfRegContractorsE3image:'',
      pfRegContractorsE3Remark:'',
      esicRegContractorsE3Remark:'',
      esicRegContractorsE3image:'',
      esicRegContractorsE3:'',
      shopsandEstContractorsE3:'',
      shopsandEstContractorsE3image:'',
      shopsandEstContractorsE3Remark:'',
      lwfRegContractorsE3:'',
      lwfRegContractorsE3image:'',
      lwfRegContractorsE3Remark:'',
      profTaxContractorsE3:'',
      profTaxContractorsE3image:'',
      profTaxContractorsE3Remark:''
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
    setFormData(newFormData);
  };

  const generateBranchesForm = () => {
    return formData.map((branch, index) => (
      <React.Fragment key={index}>
        <h4>E.1. Details of the Labor Contractotrs</h4>
        <tr>
          <td>
            <label className="form-label">Name of the Contractor</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name of the Contractor"
              value={branch.name || ''}
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
              value={branch.nameremarks || ''}
              onChange={(e) => handleInputChange(e, 'nameremarks', index)}
              id={`nameremarks_${index}`}  
              name={`nameremarks_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="form-label">Name of the Establishment</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name of the Contractor"
              value={branch.noe || ''}
              onChange={(e) => handleInputChange(e, 'noe', index)}
              id={`noe_${index}`}  
              name={`noe_${index}`} 
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
                onChange={(e) => handleInputChange(e, 'noeimage', index)}
                id={`noeimage_${index}`}  
                name={`noeimage_${index}`} 
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
              value={branch.noeremarks || ''}
              onChange={(e) => handleInputChange(e, 'noeremarks', index)}
              id={`noeremarks_${index}`}  
              name={`noeremarks_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td>
          <label for="">Registered Address of the Contractor</label>
            <table>
                <tr>
                    <td>
                        <input type="text" class="form-control" 
                         placeholder="Address" 
                         value={branch.contractoraddress || ''}
                         onChange={(e)=>handleInputChange(e, 'contractoraddress', index)} 
                         name={`contractoraddress_${index}`}  
                         id={`contractoraddress_${index}`}  
                         required/>
                    </td>
                </tr>
                <tr>
                    <td>
                         <select className="form-select" aria-label="Default select example"  name={`contractorstate_${index}`}  
                         id={`contractorstate_${index}`}    value={branch.contractorstate || ''} onChange={(e)=>handleInputChange(e, 'contractorstate', index)} required>
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
                         value={branch.contractordistrict || ''}
                         onChange={(e)=>handleInputChange(e, 'contractordistrict', index)} 
                         name={`contractordistrict_${index}`}  
                         id={`contractordistrict_${index}`}  
                         required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="number" class="form-control" 
                         placeholder="PIN" 
                         value={branch.contractorpin || ''}
                         onChange={(e)=>handleInputChange(e, 'contractorpin', index)} 
                         name={`contractorpin_${index}`}  
                         id={`contractorpin_${index}`}  
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
                onChange={(e) => handleInputChange(e, 'contractoraddressimage', index)}
                id={`contractoraddressimage_${index}`}  
                name={`contractoraddressimage_${index}`} 
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
              value={branch.contractoraddressremark || ''}
              onChange={(e) => handleInputChange(e, 'contractoraddressremark', index)}
              id={`contractoraddressremark_${index}`}  
              name={`contractoraddressremark_${index}`} 
            />
          </td>
        </tr>
        <h4>E.2. Agreement Date</h4>
        <tr>
            <td colspan="3">
            <label for="">Date of Expiry</label>
            <input type="date" class="form-control" name={`agreementExpiryDateE2_${index}`}  id={`agreementExpiryDateE2_${index}`} value={branch.agreementExpiryDateE2 || ''} onChange={(e)=>handleInputChange(e,'agreementExpiryDateE2',index)}  placeholder="Date of Expiry" required/>
            </td>
        </tr>
        <tr>
            <td colspan="3">
            <label for="">Due date of Renewal</label>
            <input type="date" class="form-control" name={`agreementRenewalDateE2_${index}`} id={`agreementRenewalDateE2_${index}`}  value={branch.agreementRenewalDateE2 || ''} onChange={(e)=>handleInputChange(e,'agreementRenewalDateE2',index)} placeholder="Due date of Renewal" required/>
            </td>
        </tr>
        <tr>
            <td >
            <label for="">Nature of Work</label>
            <input type="text" class="form-control" name={`natureOfWorkAgreementE2_${index}`}  id={`natureOfWorkAgreementE2_${index}`} value={branch.natureOfWorkAgreementE2 || ''} onChange={(e)=>handleInputChange(e,'natureOfWorkAgreementE2',index)} placeholder="Nature of Work" required/>
            </td>
            <td>
            <div>
                    <div class="form-group files1">
                        <input type="file" 
                        multiple=""
                        accept="image/*,application/pdf" 
                        class="form-control" 
                        style={{ height: '10px' }}
                        onChange={(e) => handleInputChange(e, 'natureOfWorkAgreementE2image', index)}
                        name={`natureOfWorkAgreementE2image_${index}`} 
                        id={`natureOfWorkAgreementE2image_${index}`}  
                        required
                        />
                    </div>
                </div>
            </td>
            <td>
            <label for="">Remark</label>
            <input type="text" class="form-control" name={`natureOfWorkAgreementE2Remark_${index}`} value={branch.natureOfWorkAgreementE2Remark || ''} id={`natureOfWorkAgreementE2Remark_${index}`} onChange={(e)=>handleInputChange(e,'natureOfWorkAgreementE2Remark',index)} placeholder="Write Here"/>
            </td>
        </tr>
        <tr>
            <td colspan="3">
            <label for="">Number of Employees Deployed</label>
            <input type="number" class="form-control" name={`noOfEmpDeployedAgreementE2_${index}`} value={branch.noOfEmpDeployedAgreementE2 || ''}  id={`noOfEmpDeployedAgreementE2_${index}`} onChange={(e)=>{handleInputChange(e,'noOfEmpDeployedAgreementE2',index);useRefnoOfEmpDeployedAgreementE2.current = e.target.value}} 
            min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
            placeholder="Number of Employees Deployed" required/>
            </td>
        </tr>
        <h4>E.3. Contractors Registration Details</h4>
        <tr>
            <td>
            <label for="">Select Type of the Company</label>
            <div class="dropdown">
                <div class="form-group">
                <select class="form-select" name={`companyTypeLabourE3_${index}`} value={branch.companyTypeLabourE3 || ''}   id={`companyTypeLabourE3_${index}`} onChange={(e)=>handleInputChange(e,'companyTypeLabourE3',index)} required>
                <option value="">Type of the Company</option>
                    <option value="1">Private Limited Company</option>
                    <option value="2">Public Limited Company</option>
                    <option value="3">Sole Proprietorship</option>
                    <option value="4">Partnership</option>
                    <option value="5">Limited Liability Partnership (LLP)</option>
                    <option value="6">Non-Government Organization (NGO)</option>
                    <option value="7">One Person Company (OPC)</option>
                    <option value="8">Others</option>
                </select>
                </div>
            </div>
            </td>
            <td>
            <div>
                <div class="form-group files1">
                    <input type="file" name={`companyTypeLabourE3image_${index}`} id={`companyTypeLabourE3image_${index}`} class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                    onChange={(e)=>handleInputChange(e, 'companyTypeLabourE3image', index)}
                    />
                </div>
            </div>
            </td>
            <td>
            <label for="">Remark</label>
            <input type="text" class="form-control" name={`companyTypeLabourE3Remark_${index}`} value={branch.companyTypeLabourE3Remark || ''} id={`companyTypeLabourE3Remark_${index}`} onChange={(e)=>handleInputChange(e,'companyTypeLabourE3Remark',index)} placeholder="Write Here"/>
            </td>
        </tr>
        <tr><td colspan="3">                       
        <div style={{ display: isVisible ? 'none' : 'inline' }} ref={myRefE3div}>  
                                                        {/**E3 div starts */}
            <table className="table creat_tbl">
              <tr>
                <td>
                <label htmlFor="contractLabourLicNoE3">Contract Labour License Number</label>
                {isVisible && (<input
                    type="text"
                    className="form-control"
                    name={`contractLabourLicNoE3_${index}`}
                    value={branch.contractLabourLicNoE3 || ''}
                    id={`contractLabourLicNoE3_${index}`}
                    onChange={(e) => handleInputChange(e,'contractLabourLicNoE3',index)}
                    placeholder="Contract Labour License Number"
                    ref={inputRefsE.inputRef1}
                />
                )}
                </td>
                <td>
                <div className="form-group files1">
                {isVisible && (<input
                    type="file"
                    name={`contractLabourLicNoE3image_${index}`}
                    id={`contractLabourLicNoE3image_${index}`}
                    className="form-control"
                    multiple=""
                    accept="image/*,application/pdf"
                    style={{ height: '10px' }}
                    onChange={(e) => handleInputChange(e, 'contractLabourLicNoE3image', index)}
                    ref={inputRefsE.inputRef2}
                    />)}
                </div>
                </td>
                <td>
                <label htmlFor="contractLabourLicNoE3Remark">Remark</label>
                <input
                    type="text"
                    className="form-control"
                    name={`contractLabourLicNoE3Remark_${index}`}
                    value={branch.contractLabourLicNoE3Remark || ''}
                    id={`contractLabourLicNoE3Remark_${index}`}
                    onChange={(e) => handleInputChange(e,'contractLabourLicNoE3Remark',index)}
                    placeholder="Write Here"
                />
                </td>
            </tr>
            <tr>
                <td colSpan="3">
                <label htmlFor="contractLicDateE3">License Date</label>
                {isVisible && (<input
                    type="date"
                    className="form-control"
                    name={`contractLicDateE3_${index}`}
                    value={branch.contractLicDateE3 || ''}
                    id={`contractLicDateE3_${index}`}
                    onChange={(e) => handleInputChange(e,'contractLicDateE3',index)}
                    placeholder="License Date"
                    ref={inputRefsE.inputRef3}
                />)}
                </td>
            </tr>
            <tr>
                <td colSpan="3">
                <label htmlFor="contractExpiryDateE3">Date of Expiry</label>
                {isVisible && (<input
                    type="date"
                    className="form-control"
                    value={branch.contractExpiryDateE3 || ''}
                    name={`contractExpiryDateE3_${index}`}
                    id={`contractExpiryDateE3_${index}`}
                    onChange={(e) => handleInputChange(e,'contractExpiryDateE3',index)}
                    placeholder="Date of Expiry"
                    ref={inputRefsE.inputRef4}
                />)}
                </td>
            </tr>
            <tr>
                <td colSpan="3">
                <label htmlFor="contractRenewalDueDateE3">Due Date of Renewal</label>
                {isVisible && (<input
                    type="date"
                    className="form-control"
                    name={`contractRenewalDueDateE3_${index}`}
                    value={branch.contractRenewalDueDateE3 || ''}
                    id={`contractRenewalDueDateE3_${index}`}
                    onChange={(e) => handleInputChange(e,'contractRenewalDueDateE3',index)}
                    placeholder="Due Date of Renewal"
                    ref={inputRefsE.inputRef5}
                />)}
                </td>
            </tr>
            <tr>
                <td colSpan="3">
                <label htmlFor="noOfWorkersContractE3">Number of Workers as per the License</label>
                {isVisible && (<input
                    type="number"
                    className="form-control"
                    name={`noOfWorkersContractE3_${index}`}
                    value={branch.noOfWorkersContractE3 || ''}
                    id={`noOfWorkersContractE3_${index}`}
                    onChange={(e) => handleInputChange(e,'noOfWorkersContractE3',index)}
                    placeholder="Number of Workers as per the License"  min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                    ref={inputRefsE.inputRef6}
                />)}
                </td>
            </tr>
            </table>  
        </div> {/**E3 div ends */}
        </td></tr> 
        <tr>
            <td>
            <label for="">PAN</label>
            <input type="text" class="form-control" name={`panContractorsE3_${index}`} id={`panContractorsE3_${index}`} value={branch.panContractorsE3 || ''} onChange={(e)=>handleInputChange(e,'panContractorsE3',index)}  placeholder="PAN" required/>
            </td>
            <td>
            <div>
                    <div class="form-group files1">
                        <input type="file" name={`panContractorsE3image_${index}`} id={`panContractorsE3image_${index}`} class="form-control" multiple="" accept="image/*,application/pdf"  style={{ height: '10px' }}
                        onChange={(e)=>handleInputChange(e, 'panContractorsE3image', index)} required
                        />
                    </div>
                </div>
            </td>
            <td>
            <label for="">Remark</label>
            <input type="text" class="form-control" name={`panContractorsE3Remark_${index}`} value={branch.panContractorsE3Remark || ''} id={`panContractorsE3Remark_${index}`} onChange={(e)=>handleInputChange(e,'panContractorsE3Remark',index)} placeholder="Write Here"/>
            </td>
        </tr>
        <tr>
            <td>
            <label for="">GST</label>
            <input type="text" class="form-control" name={`gstContractorsE3_${index}`} id={`gstContractorsE3_${index}`} value={branch.gstContractorsE3 || ''} onChange={(e)=>handleInputChange(e,'gstContractorsE3',index)} placeholder="GST" required/>
            </td>
            <td>
            <div>
                    <div class="form-group files1">
                        <input type="file" name={`gstContractorsE3image_${index}`} id={`gstContractorsE3image_${index}`} class="form-control" multiple="" accept="image/*,application/pdf"  style={{ height: '10px' }}
                        onChange={(e)=>handleInputChange(e, 'gstContractorsE3image', index)} required
                        />
                    </div>
                </div>
            </td>
            <td>
            <label for="">Remark</label>
            <input type="text" class="form-control" name={`gstContractorsE3Remark_${index}`} value={branch.gstContractorsE3Remark || ''} id={`gstContractorsE3Remark_${index}`} onChange={(e)=>handleInputChange(e,'gstContractorsE3Remark',index)}  placeholder="Write Here"/>
            </td>
        </tr>
        <tr>
            <td>
            <label for="">PF Registration</label>
            <input type="text" class="form-control" value={branch.pfRegContractorsE3 || ''} name={`pfRegContractorsE3_${index}`} id={`pfRegContractorsE3_${index}`} onChange={(e)=>handleInputChange(e,'pfRegContractorsE3',index)}  placeholder="PF Registration" required/>
            </td>
            <td>
            <div>
                <div class="form-group files1">
                    <input type="file" 
                    accept="image/*,application/pdf" name={`pfRegContractorsE3image_${index}`} id={`pfRegContractorsE3image_${index}`} class="form-control" multiple=""  className="file-upload" style={{ height: '10px' }}
                    onChange={(e)=>handleInputChange(e, 'pfRegContractorsE3image', index)} required
                    />
                </div>
            </div>
            </td>
            <td>
            <label for="">Remark</label>
            <input type="text" class="form-control" name={`pfRegContractorsE3Remark_${index}`} value={branch.pfRegContractorsE3Remark || ''} id={`pfRegContractorsE3Remark_${index}`} onChange={(e)=>handleInputChange(e,'pfRegContractorsE3Remark',index)} placeholder="Write Here"/> 
            </td>
        </tr>
        <tr>
            <td>
            <label for="">ESIC Registration</label>
            <input type="text" class="form-control" value= {branch.esicRegContractorsE3 || ''} name={`esicRegContractorsE3_${index}`} id={`esicRegContractorsE3_${index}`} onChange={(e)=>handleInputChange(e,'esicRegContractorsE3',index)} placeholder="ESIC Registration" required/>
            </td>
            <td>
            <div>
                    <div class="form-group files1">
                        <input type="file" name={`esicRegContractorsE3image_${index}`} id={`esicRegContractorsE3image_${index}`} class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                            onChange={(e)=>handleInputChange(e, 'esicRegContractorsE3image', index)} required
                        />
                    </div>
                </div>
            </td>
            <td>
            <label for="">Remark</label>
            <input type="text" class="form-control" name={`esicRegContractorsE3Remark_${index}`} value= {branch.esicRegContractorsE3Remark || ''}  id={`esicRegContractorsE3Remark_${index}`} onChange={(e)=>handleInputChange(e,'esicRegContractorsE3Remark',index)} placeholder="Write Here"/>
            </td>
        </tr>
        <tr>
            <td>
            <label for="">Shops and Establishment</label>
            <input type="text" class="form-control" name={`shopsandEstContractorsE3_${index}`} value= {branch.shopsandEstContractorsE3 || ''}   id={`shopsandEstContractorsE3_${index}`} onChange={(e)=>handleInputChange(e,'shopsandEstContractorsE3',index)} placeholder="Shops and Establishment" required/>
            </td>
            <td>
            <div>
                    <div class="form-group files1">
                        <input type="file" name={`shopsandEstContractorsE3image_${index}`} id={`shopsandEstContractorsE3image_${index}`}  class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                        onChange={(e)=>handleInputChange(e, 'shopsandEstContractorsE3image', index)} required
                        />
                    </div>
                </div>
            </td>
            <td>
            <label for="">Remark</label>
            <input type="text" class="form-control" name={`shopsandEstContractorsE3Remark_${index}`} value= {branch.shopsandEstContractorsE3Remark}  id={`shopsandEstContractorsE3Remark_${index}`} onChange={(e)=>handleInputChange(e,'shopsandEstContractorsE3Remark',index)} placeholder="Write Here"/>
            </td>
        </tr>
        <tr>
            <td>
            <label for="">LWF Registration</label>
            <input type="text" class="form-control" name={`lwfRegContractorsE3_${index}`} id={`lwfRegContractorsE3_${index}`} value= {branch.lwfRegContractorsE3 || ''}  onChange={(e)=>handleInputChange(e,'lwfRegContractorsE3',index)} placeholder="LWF Registration" required/>
            </td>
            <td>
            <div>
                    <div class="form-group files1">
                        <input type="file" name={`lwfRegContractorsE3image_${index}`} id={`lwfRegContractorsE3image_${index}`} class="form-control" multiple="" accept="image/*,application/pdf"  style={{ height: '10px' }}
                        onChange={(e)=>handleInputChange(e, 'lwfRegContractorsE3image', index)} required
                        />
                    </div>
                </div>
            </td>
            <td>
            <label for="">Remark</label>
            <input type="text" class="form-control" name={`lwfRegContractorsE3Remark_${index}`} value= {branch.lwfRegContractorsE3Remark || ''} id={`lwfRegContractorsE3Remark_${index}`} onChange={(e)=>handleInputChange(e,'lwfRegContractorsE3Remark',index)} placeholder="Write Here"/>
            </td>
        </tr>
        <tr>
            <td>
            <label for="">Professional Tax</label>
            <input type="text" class="form-control" value= {branch.profTaxContractorsE3 || ''} name={`profTaxContractorsE3_${index}`} id={`profTaxContractorsE3_${index}`} onChange={(e)=>handleInputChange(e,'profTaxContractorsE3',index)} placeholder="Professional Tax" required/>
            </td>
            <td>
            <div>
                    <div class="form-group files1">
                        <input type="file" name={`profTaxContractorsE3image_${index}`} id={`profTaxContractorsE3image_${index}`} class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                        onChange={(e)=>handleInputChange(e, 'profTaxContractorsE3image', index)} required
                        />
                    </div>
                </div>
            </td>
            <td>
                <label class="form-label">Remarks</label>
                <input type="text" class="form-control" name={`profTaxContractorsE3Remark_${index}`} value= {branch.profTaxContractorsE3Remark || ''}  id={`profTaxContractorsE3Remark_${index}`} onChange={(e)=>handleInputChange(e,'profTaxContractorsE3Remark',index)} placeholder="Write Here"/>
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
            <label className="form-label">Number of Contractors</label>
            <input
              type="number"
              className="form-control"
              placeholder="Number of Contractors"
              value={formData.length}
              onChange={handleNumberOfBranchsChange} 
              // ref={numberOfBranchesInputRef}
              min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
              required
            />
          </td>
        </tr>
        {generateBranchesForm()}
      </tbody>
    </table>
  );
}

export default DynamicHTMLGeneratorE;