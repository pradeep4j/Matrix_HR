import React, { useState,useEffect,useRef,useMemo  } from 'react';
import DynamicHTMLGeneratorF1RLicense from './DynamicHTMLGeneratorF1RLicense'
import DynamicHTMLGeneratorF1FL from './DynamicHTMLGeneratorF1FL'
import DynamicHTMLGeneratorF1FP from './DynamicHTMLGeneratorF1FP'
import DynamicHTMLGeneratorF54NSP from './DynamicHTMLGeneratorF54NSP'
import DynamicHTMLGeneratorF54OTP from './DynamicHTMLGeneratorF54OTP'
import DynamicHTMLGeneratorF54WOE from './DynamicHTMLGeneratorF54WOE'
import DynamicHTMLGeneratorF54TL from './DynamicHTMLGeneratorF54TL'
import { useDispatch, useSelector } from 'react-redux';
import Loading1 from '../../../components/layout/Loading1';
import { stateGets,companytab6create } from "../../../store/actions/otherActions";
const  DynamicHTMLGeneratorF1 = ({ formData, setFormData,myElementRefTab6,myReftab6buttun,myElementRefTab7,activeTab,setActiveTab }) =>{
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(true);
  const [functionCalledInEffect, setFunctionCalledInEffect] = useState(false);
  const [functionCalledInEffectfactoryRef, setFunctionCalledInEffectfactoryRef] = useState(false);
  const [functionCalledicle, setfunctionCalledicle] = useState(false);
  const factoryRefClicknotshow = useRef(null);
  const factoryRef = useRef(null);
  const myRefBranch = useRef(null);
  const myRefF1Labour = useRef(null);
  const icleshow = useRef(null);
  const iclenoshow = useRef(null);  
  const buttonRefnoshowbranch = useRef(null);
  const buttonRefshowbranch = useRef(null);
  const inputRefsfactoryRefClicknotshow  = {
    inputRef1 : useRef(null),
    inputRef2 : useRef(null),
    inputRef3 : useRef(null),
    inputRef4 : useRef(null),
    inputRef5 : useRef(null),
    inputRef6 : useRef(null),
    inputRef7 : useRef(null),
    inputRef8 : useRef(null),
    inputRef9 : useRef(null),
    inputRef10 : useRef(null),
    inputRef11 : useRef(null),
    inputRef12 : useRef(null),
    inputRef13 : useRef(null),
    inputRef14 : useRef(null),
    inputRef15 : useRef(null),
    inputRef16 : useRef(null),
    inputRef17 : useRef(null),
    inputRef18 : useRef(null),
    inputRef19 : useRef(null),
    inputRef20 : useRef(null),
    inputRef21 : useRef(null),
    inputRef22 : useRef(null),
    inputRef23 : useRef(null),
    inputRef24 : useRef(null),
    inputRef25 : useRef(null),
    inputRef26 : useRef(null),
    inputRef27 : useRef(null),
    inputRef28 : useRef(null),
    inputRef29 : useRef(null),
    inputRef30 : useRef(null),
    inputRef31: useRef(null),
  };
//   const inputRefsfactoryRef  = {
//     inputRef16 : useRef(null),
//     inputRef17 : useRef(null),
//     inputRef18 : useRef(null),
//     inputRef19 : useRef(null),
//     inputRef20 : useRef(null),
//     inputRef21 : useRef(null),
//     inputRef22 : useRef(null),
//     inputRef23 : useRef(null),
//     inputRef24 : useRef(null),
//     inputRef25 : useRef(null),
//     inputRef26 : useRef(null),
//     inputRef27 : useRef(null),
//     inputRef28 : useRef(null),
//     inputRef29 : useRef(null),
//     inputRef30 : useRef(null),
//     inputRef31: useRef(null),
//   };
  const inputRefs = {
    //  inputRef1 : useRef(null),
    //  inputRef2 : useRef(null),
    //  inputRef3 : useRef(null),
    //  inputRef4 : useRef(null),
    //  inputRef5 : useRef(null),
    //  inputRef6 : useRef(null),
    //  inputRef7 : useRef(null),
    //  inputRef8 : useRef(null),
    //  inputRef9 : useRef(null),
    //  inputRef10 : useRef(null),
    //  inputRef11 : useRef(null),
    //  inputRef12 : useRef(null),
    //  inputRef13 : useRef(null),
    //  inputRef14 : useRef(null),
    //  inputRef15 : useRef(null),
    //  inputRef16 : useRef(null),
    //  inputRef17 : useRef(null),
    //  inputRef18 : useRef(null),
    //  inputRef19 : useRef(null),
    //  inputRef20 : useRef(null),
    //  inputRef21 : useRef(null),
    //  inputRef22 : useRef(null),
    //  inputRef23 : useRef(null),
    //  inputRef24 : useRef(null),
    //  inputRef25 : useRef(null),
    //  inputRef26 : useRef(null),
    //  inputRef27 : useRef(null),
    //  inputRef28 : useRef(null),
    //  inputRef29 : useRef(null),
    //  inputRef30 : useRef(null),
    //  inputRef31: useRef(null),
     
    //  inputRef51 : useRef(null),
    //  inputRef52 : useRef(null),
     
     inputRef61 : useRef(null),
     inputRef62 : useRef(null),
     inputRef63 : useRef(null),
     inputRef64 : useRef(null),
     inputRef67 : useRef(null),
     inputRef68 : useRef(null),
     inputRef69 : useRef(null),
    };
    const icleinputRefs = {
        inputRef32 : useRef(null),
        inputRef33 : useRef(null),
        inputRef34 : useRef(null),
        inputRef35 : useRef(null),
        inputRef36 : useRef(null),
        inputRef37 : useRef(null),
        inputRef38 : useRef(null),
        inputRef39 : useRef(null),
        inputRef40 : useRef(null),
        inputRef41 : useRef(null),
        inputRef42 : useRef(null),
        inputRef43 : useRef(null),
        inputRef44 : useRef(null),
        inputRef45 : useRef(null),
        inputRef46 : useRef(null),
        inputRef47 : useRef(null),
        inputRef48 : useRef(null),
        inputRef49 : useRef(null),
        inputRef50 : useRef(null),
        inputRef53 : useRef(null),
        inputRef54 : useRef(null),
        inputRef55 : useRef(null),
        inputRef56 : useRef(null),
        inputRef57 : useRef(null),
        inputRef58 : useRef(null),
        inputRef59 : useRef(null),
        inputRef60 : useRef(null),
        inputRef70 : useRef(null),
        inputRef71 : useRef(null),
        inputRef72 : useRef(null),
        inputRef73 : useRef(null),
        inputRef74 : useRef(null),
        inputRef75 : useRef(null),
        inputRef76 : useRef(null),
        inputRef77 : useRef(null),
        inputRef78 : useRef(null),
        inputRef79 : useRef(null),
        inputRef80 : useRef(null),
        inputRef81 : useRef(null),
        inputRef82 : useRef(null),
        inputRef83 : useRef(null),
        //  inputRef84 : useRef(null),
        //  inputRef85 : useRef(null),
        //  inputRef86 : useRef(null),
        //  inputRef87 : useRef(null),
        //  inputRef88 : useRef(null),
        //  inputRef89 : useRef(null),
        //  inputRef90 : useRef(null),
        //  inputRef91 : useRef(null),
        //  inputRef92 : useRef(null),
        //  inputRef93 : useRef(null),
        //  inputRef94 : useRef(null),
        //  inputRef95 : useRef(null),
        //  inputRef96 : useRef(null),
        //  inputRef97 : useRef(null),
        //  inputRef98 : useRef(null),
        //  inputRef99 : useRef(null),
        //  inputRef100 : useRef(null),
        };
  
  const useRefnoOfEmpDeployedAgreementE2 = useRef(null);
  const divstyleshowhidemyRefE3div =  useRefnoOfEmpDeployedAgreementE2.current >20 ? 'show' : 'hide';
  const divstyleshowhidemyRefF2 =  factoryRefClicknotshow.current ? 'hide' : 'show';
  const divstyleshowhidemyRefF3 =  factoryRef.current ? 'hide' : 'show';
  const divstyleshowhidemymyRefF1Labour =  myRefF1Labour.current ? 'hide' : 'show';
  const divstyleshowhide = formData?.length === 0 ? 'hide' : 'show';
  const showbranch = () => {
    factoryRefClicknotshow.current.style.display = 'inline'
    factoryRef.current.style.display = 'none'
  //   myRefBranch.current.style.display = 'none'
    setFunctionCalledInEffect(true);
    setFunctionCalledInEffectfactoryRef(false);
  }
  const noshowbranch = () => {
    factoryRefClicknotshow.current.style.display = 'none'
    factoryRef.current.style.display = 'inline'
    setFunctionCalledInEffect(false);
    setFunctionCalledInEffectfactoryRef(true);
  //   myRefBranch.current.style.display = 'inline'
  }
  const showf1show = () => {
      myRefF1Labour.current.style.display = 'none'
      setfunctionCalledicle(true)
  }
  const noshowf1show = () => {
      myRefF1Labour.current.style.display = 'inline'
      setfunctionCalledicle(false)
  }
  const handleTabClick = (tabId) => {
        setActiveTab(tabId);  // Update the active tab state when a tab is clicked
  }

  useEffect(() => {
    Object.values(inputRefs).forEach((ref) => {
        if (ref.current) {
            if (isVisible) {
              if (divstyleshowhide === 'show') {
                ref.current.setAttribute('required', 'required');
                  
                  if (ref.current === inputRefs.inputRef61.current) {
                    // alert(ref.current +'==='+ inputRefs.inputRef61.current)
                    // ref.current.focus();
                  }
              } else {
                ref.current.style.display = 'none';
                ref.current.removeAttribute('required');
                // ref.current.blur(); // Remove focus from hidden element
              }

            } else {
              ref.current.removeAttribute('required');
            //   ref.current.blur(); // Remove focus from hidden element
            }
          }
    });
  }, [isVisible, inputRefs, divstyleshowhide]);

  useMemo(() => {
        const inputRefs1 = inputRefsfactoryRefClicknotshow;
        const isFactoryRefClicknotshowInline =
        factoryRefClicknotshow.current && factoryRefClicknotshow.current.style && factoryRefClicknotshow.current.style.display === 'inline';
        const isFactoryRefInline = factoryRef.current && factoryRef.current.style && factoryRef.current.style.display === 'inline';
        const buttonbuttonRefnoshowbranch = buttonRefnoshowbranch.current;

       

        if (divstyleshowhide === 'show') {
        Object.values(inputRefs1).forEach((ref) => {
            if (isVisible && (isFactoryRefClicknotshowInline && isFactoryRefInline)) {
                if (ref.current) {
                  ref.current.setAttribute('required', 'required');
                }
              } else {
                if (ref.current) {
                  if (isVisible && functionCalledInEffect===false) { ///isFactoryRefClicknotshowInline=false then setAttribute('required', 'required'); will not be set 

                    ref.current.setAttribute('required', 'required');
                    if (ref.current === inputRefs1.inputRef1.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef2.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef3.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef4.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef5.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef6.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef7.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef8.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef9.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef10.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef11.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef12.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef13.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef14.current) {
                        ref.current.removeAttribute('required');
                    }
                  }
                  else if(isVisible && functionCalledInEffectfactoryRef===false)  {
                    // alert(functionCalledInEffectfactoryRef+'==else if')
                    ref.current.setAttribute('required', 'required');
                    if (ref.current === inputRefs1.inputRef15.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef16.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef17.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef18.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef19.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef20.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef21.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef22.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef23.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef24.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef25.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef26.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef27.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef28.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef29.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef30.current) {
                        ref.current.removeAttribute('required');
                    }
                    if (ref.current === inputRefs1.inputRef31.current) {
                        ref.current.removeAttribute('required');
                    }
                    
                }
                //   } else {
                //     alert('else')
                //     ref.current.removeAttribute('required');
                //   }
                }
              }
        });
        }
  }, [divstyleshowhide, isVisible, inputRefsfactoryRefClicknotshow,factoryRefClicknotshow,functionCalledInEffect,functionCalledInEffectfactoryRef]);
  useMemo(() => {
    const inputRefs1 = icleinputRefs;
    // const isFactoryRefClicknotshowInline =
    // factoryRefClicknotshow.current && factoryRefClicknotshow.current.style && factoryRefClicknotshow.current.style.display === 'inline';
    // const isFactoryRefInline = factoryRef.current && factoryRef.current.style && factoryRef.current.style.display === 'inline';
    // const buttonbuttonRefnoshowbranch = buttonRefnoshowbranch.current;

    if (divstyleshowhide === 'show') {
    Object.values(inputRefs1).forEach((ref) => {
        // if (isVisible && (myRefF1Labour)) {
            
        //     if (ref.current) {
        //         alert('sas')
        //       ref.current.setAttribute('required', 'required');
        //     }
        //   } else {
            if (ref.current) {
              if (isVisible && functionCalledicle===true) { ///myRefF1Labour=true then removeAttribute('required'); will be set 
                if (ref.current === inputRefs1.inputRef32.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef33.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef34.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef35.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef36.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef37.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef38.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef39.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef40.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef41.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef42.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef43.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef44.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef45.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef46.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef47.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef48.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef49.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef50.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef53.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef54.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef55.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef56.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef57.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef58.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef59.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef60.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef70.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef71.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef72.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef73.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef74.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef75.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef76.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef77.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef78.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef79.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef80.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef81.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef82.current) {
                    ref.current.removeAttribute('required');
                }
                if (ref.current === inputRefs1.inputRef83.current) {
                    ref.current.removeAttribute('required');
                }
              } else {
                // alert('else')
                ref.current.setAttribute('required', 'required');
              }
            // }
          }
    });
    }
}, [divstyleshowhide, isVisible, functionCalledicle]);
  const [formData18, setFormData18] = useState([]);
  const [formData19, setFormData19] = useState([]);
  const [formData20, setFormData20] = useState([]);
  const [formData21, setFormData21] = useState([]);
  const [formData22, setFormData22] = useState([]);
  const [formData23, setFormData23] = useState([]);
  const [formData24, setFormData24] = useState([]);
  // const numberOfBranchesInputRef = useRef(null);
  const getState = useSelector((state) => state.getState);
  const { loadings, stateInfo } = getState;
  // console.log(stateInfo)
  const createCompanytab6 = useSelector((state) => state.createCompanytab6);
  const { loadingtab6,companytab6CreateInfo } = createCompanytab6;
  const createCompanytab7 = useSelector((state) => state.createCompanytab7);
  var branchcount;
  useEffect(() => {
    dispatch(stateGets())
  }, [dispatch]);

  branchcount = formData?.length;
  var dateObj = new Date();
  // Convert the Date object to a Unix timestamp (in milliseconds)
  var timestamp = dateObj.getTime();
  const handleNumberOfBranchsChange = (e) => {
    const numberOfBranchs = parseInt(e.target.value);
    const newFormData = Array.from({ length: numberOfBranchs }, () => ({
      id: timestamp,
      name: '',
      details: '',
      branchimage: '',
      remarks: '',
      branchaddress: '',
      branchstate: '',
      branchdistrict: '',
      branchpin: '',
      contractorAddBranchFimage: '',
      contractorAddBranchFRemark: '',
      branchOpeningDateF: '',
      noOfEmpBranchF: '',
      managerNameF1: '',
      managerNameF1image: '',
      managerNameF1Remark: '',
      managerMobNoF1: '',
      managerMobNoF1Remark: '',
      managerEmailF1: '',
      managerEmailF1Remark: '',
      managerAadharNoF1: '',
      managerAadharNoF1image: '',
      managerAadharNoF1Remark: '',
      managerPanF1: '',
      managerPanF1image: '',
      managerPanF1Remark: '',
      shopsEstLicenseF2: '',
      shopsEstLicenseF2image: '',
      shopsEstLicenseF2Remark: '',
      contractLabRegNoF5: '',
      contractLabRegNoF5image: '',
      contractLabRegNoF5Remark: '',
      regDateContractorF5: '',
      coOfContractEmpF5: '',
      noOfContractorsF5: '',
      contractorNameF51: '',
      contractorNameF51image: '',
      contractorNameF51Remark: '',
      establishmentNameF51: '',
      establishmentNameF51image: '',
      establishmentNameF51Remark: '',
      regisocontractaddress: '',
      regStateContractorF51: '',
      regDistContractorF51: '',
      regPinContractorF51: '',
      regAddContractorF51image: '',
      regAddContractorF51Remark: '',
      expiryDateF52: '',
      renewalDateF52: '',
      natureOfWorkF52: '',
      natureOfWorkF52image: '',
      natureOfWorkF52Remark: '',
      noOfEmpDeployedF52: '',
      companyTypeF53: '',
      companyTypeF53image: '',
      companyTypeF53Remark: '',
      contractLabLicNoF53: '',
      contractLabLicNoF53image: '',
      contractLabLicNoF53Remark: '',
      licenseDateF53: '',
      expiryDateF53: '',
      renewalDateF53: '',
      noOfWorkerF53: '',
      panF53: '',
      panF53image: '',
      panF53Remark: '',
      gstF53: '',
      gstF53image:'',
      gstF53Remark:'',
      esicRegF53:'',
      esicRegF53image:'',
      esicRegF53Remark:'',
      pfRegContractorsE3:'',
      pfRegContractorsE3image:'',
      pfRegContractorsE3Remark:'',
      shopsandEstContractorsE3:'',
      shopsandEstContractorsE3image:'',
      shopsandEstContractorsE3Remark:'',
      lwfRegContractorsE3:'',
      lwfRegContractorsE3image:'',
      lwfRegContractorsE3Remark:'',
      profTaxContractorsE3:'',
      profTaxContractorsE3image:'',
      profTaxContractorsE3Remark:'',
      licensenumber: '',
      licenseimage: '',
      licenseremark: '',
      dor: '',
      doe: '',
      doddr: '',
      managernamelicense: '',
      managerlicenseimage: '',
      managerlicenseremark: '',
      noe: '',
      nom: '',
      nof: '',
      issuingauth: '',
      issuingauthimage: '',
      issuingauthremark: '',
      licensenumber1: '',
      licenseimage1: '',
      licenseremark1: '',
      dor1: '',
      doe1: '',
      doddr1: '',
      managernamelicense1: '',
      managerlicenseimage1: '',
      managerlicenseremark1: '',
      noe1: '',
      nom1: '',
      nof1: '',
      issuingauth1: '',
      issuingauthimage1: '',
      issuingauthremark1: '',
      licensenumber2: '',
      licenseimage2: '',
      licenseremark2: '',
      dor2: '',
      issuingauth2: '',
      issuingauthimage2: '',
      issuingauthremark2: '',
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
  const handleSubmitTab6 = (e) => {
    e.preventDefault();
    const formDataTab6 = new FormData();
    
    formDataTab6.append("numberofbranches",formData?.length);
    formData.forEach((item, index) => {
        Object.entries(item).forEach(([key, value]) => {
            formDataTab6.append(`F1branch[${index}][${key}]`, value);
        });
    });   

    formData21.forEach((item, index) => {
        Object.entries(item).forEach(([key, value]) => {
            formDataTab6.append(`F54NSP[${index}][${key}]`, value);
        });
    }); 
    formData22.forEach((item, index) => {
        Object.entries(item).forEach(([key, value]) => {
            formDataTab6.append(`F54OTP[${index}][${key}]`, value);
        });
    }); 
    formData23.forEach((item, index) => {
        Object.entries(item).forEach(([key, value]) => {
            formDataTab6.append(`F54WOE[${index}][${key}]`, value);
        });
    }); 
    formData24.forEach((item, index) => {
        Object.entries(item).forEach(([key, value]) => {
            formDataTab6.append(`F54TL[${index}][${key}]`, value);
        });
    });         
    if (myReftab6buttun.current) {
        myReftab6buttun.current.disabled = true;
    }
    dispatch(companytab6create(formDataTab6))
    const elementtab7 = myElementRefTab7.current; 
    if (myReftab6buttun.current && loadingtab6) {
        myReftab6buttun.current.disabled = false;
    }
    setTimeout(() => {
        handleTabClick(elementtab7.id);  // Update the active tab state when a tab is clicked
    }, 35000);
}
const handleSubmitTab61 = async (e) => {
    // console.log('here')
    if (myReftab6buttun.current && loadingtab6) {
        myReftab6buttun.current.disabled = true;
    }
    const elementtab7 = myElementRefTab7.current; 
    // setTimeout(() => {
        handleTabClick(elementtab7.id); // Update the active tab state when a tab is clicked
    // }, 8000);
}
  const generateBranchesForm = () => {
    return formData.map((branch, index) => (
      <React.Fragment key={index}>
        
        <tr>
          <td>
            <label className="form-label">Branch Name/ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Branch Name/ID"
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
                onChange={(e) => handleInputChange(e, 'branchimage', index)}
                id={`branchimage_${index}`}  
                name={`branchimage_${index}`} 
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
              value={branch.remarks || ''}
              onChange={(e) => handleInputChange(e, 'remarks', index)}
              id={`remarks_${index}`}  
              name={`remarks_${index}`} 
            />
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <h4>F. Details of the Branch's(1)</h4>
                      
            <div style={{ display: divstyleshowhide === 'hide' ? 'none' : 'inline' }} >   
            {/**whole div after number of branch starts*/}
                  <table className="table  creat_tbl">
                    <tr className='align-middle'>
                        <td colspan="3">
                            <label for="">Is Factory or S&E</label>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" style={{ width: '100%' }}>
                            <input name="Factory"
                                id="Factory"
                                class="btn " type="button"
                                value="Factory" style={{ width: '20%', backgroundColor: '#cee9f2' }} ref={buttonRefnoshowbranch}
                                onClick={noshowbranch} />
                            <input 
                                id="S&E"
                                name="S&E"
                                class="btn " type="button"
                                value="S&E" onClick={showbranch} style={{ width: '20%', backgroundColor: '#cee9f2' }} ref={buttonRefshowbranch}/>
                        </td>
                    </tr>
                  </table>
                  {/* <div style={{ display: 'none' }} ref={myRefBranch}>     */}
                  <div style={{ display: isVisible ? 'inline' : 'none' }}>
                  {/** div for Is Factory or S&E  starts */}
                      <table className="table  creat_tbl">
                          <tr>
                              <td>
                                  <table className="table  creat_tbl">
                                      <tr>
                                          <td>
                                              <label for="">Registered Address of the Branch</label>
                                              {isVisible && (<input type="text"
                                                  class="form-control"
                                                  name={`branchaddress_${index}`}
                                                  id={`branchaddress_${index}`}
                                                  value={branch.branchaddress || ''}
                                                  onChange={(e) => handleInputChange(e, 'branchaddress', index)}
                                                  placeholder="Address" 
                                                  ref={inputRefs.inputRef61}
                                                  />)}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                          {isVisible && (<select className="form-select" aria-label="Default select example"
                                                  name={`branchstate_${index}`}
                                                  id={`branchstate_${index}`}
                                                  value={branch.branchstate || ''}
                                                  onChange={(e) => handleInputChange(e, 'branchstate', index)}
                                                  ref={inputRefs.inputRef62}
                                              >
                                                  <option value="">Select State</option>
                                                  {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item =>
                                                      <option value={item._id}>{item.name}</option>
                                                  )};
                                              </select>)}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                          {isVisible && (<input type="text"
                                                  class="form-control"
                                                  name={`branchdistrict_${index}`}
                                                  id={`branchdistrict_${index}`}
                                                  value={branch.branchdistrict || ''}
                                                  onChange={(e) => handleInputChange(e, 'branchdistrict', index)}
                                                  placeholder="District" 
                                                  ref={inputRefs.inputRef63}/>
                                                  )}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                          {isVisible && (<input type="number"
                                                  class="form-control"
                                                  name={`branchpin_${index}`}
                                                  id={`branchpin_${index}`}
                                                  value={branch.branchpin || ''}
                                                  onChange={(e) => handleInputChange(e, 'branchpin', index)}
                                                  placeholder="PIN" 
                                                  ref={inputRefs.inputRef64}
                                                  />)}
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible && (<input type="file"
                                              name={`contractorAddBranchFimage_${index}`}
                                              id={`contractorAddBranchFimage_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'contractorAddBranchFimage', index)}
                                              ref={inputRefs.inputRef67}
                                          />)}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.contractorAddBranchFRemark || ''}
                                      name={`contractorAddBranchFRemark_${index}`}
                                      id={`contractorAddBranchFRemark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'contractorAddBranchFRemark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <label for="">Date of Opening</label>
                                  {isVisible && (<input type="date"
                                      class="form-control"
                                      value={branch.branchOpeningDateF || ''}
                                      name={`branchOpeningDateF_${index}`}
                                      id={`branchOpeningDateF_${index}`}
                                      onChange={(e) => handleInputChange(e, 'branchOpeningDateF', index)}
                                      placeholder="Date of Opening" 
                                      ref={inputRefs.inputRef68}
                                      />)}
                              </td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <label for="">Number of Employees</label>
                                  {isVisible && (<input type="number"
                                      class="form-control"
                                      name={`noOfEmpBranchF_${index}`}
                                      id={`noOfEmpBranchF_${index}`}
                                      value={branch.noOfEmpBranchF || ''} min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                      onChange={(e) => handleInputChange(e, 'noOfEmpBranchF', index)}
                                      placeholder="Number of Employees" 
                                      ref={inputRefs.inputRef69}
                                      />)}
                              </td>
                          </tr>
                      </table>
                  </div>
                  <h4>F.1. Manager Details</h4>
                  <table className="table  creat_tbl">
                      <tr>
                          <td>
                              <label for="">Name of the Manager</label>
                              <input type="text"
                                  class="form-control"
                                  name={`managerNameF1_${index}`}
                                  id={`managerNameF1_${index}`}
                                  value={branch.managerNameF1 || ''}
                                  onChange={(e) => handleInputChange(e, 'managerNameF1', index)}
                                  placeholder="Manager Details" required />
                          </td>
                          <td>
                              <div>
                                  <div class="form-group files1">
                                      <input type="file"
                                          name={`managerNameF1image_${index}`}
                                          id={`managerNameF1image_${index}`}
                                          class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                          onChange={(e) => handleInputChange(e, 'managerNameF1image', index)}
                                          required />
                                  </div>
                              </div>
                          </td>
                          <td>
                              <label for="">Remark</label>
                              <input type="text"
                                  class="form-control"
                                  value={branch.managerNameF1Remark || ''}
                                  name={`managerNameF1Remark_${index}`}
                                  id={`managerNameF1Remark_${index}`}
                                  onChange={(e) => handleInputChange(e, 'managerNameF1Remark', index)}
                                  placeholder="Write Here" />
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <label for="">Mobile Number</label>
                              <input type="number"
                                  class="form-control"
                                  name={`managerMobNoF1_${index}`}
                                  id={`managerMobNoF1_${index}`}
                                  value={branch.managerMobNoF1 || ''}
                                  onChange={(e) => handleInputChange(e, 'managerMobNoF1', index)}
                                  placeholder="Mobile Number" required />
                          </td>
                          <td colspan="2">
                              <label for="">Remark</label>
                              <input type="text"
                                  class="form-control"
                                  value={branch.managerMobNoF1Remark || ''}
                                  name={`managerMobNoF1Remark_${index}`}
                                  id={`managerMobNoF1Remark_${index}`}
                                  onChange={(e) => handleInputChange(e, 'managerMobNoF1Remark', index)}
                                  placeholder="Write Here" />
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <label for="">Email</label>
                              <input type="email"
                                  class="form-control"
                                  name={`managerEmailF1_${index}`}
                                  id={`managerEmailF1_${index}`}
                                  value={branch.managerEmailF1 || ''}
                                  onChange={(e) => handleInputChange(e, 'managerEmailF1', index)}
                                  placeholder="Email" required />
                          </td>
                          <td >
                              <label for="">Remark</label>
                              <input type="text"
                                  class="form-control"
                                  value={branch.managerEmailF1Remark || ''}
                                  name={`managerEmailF1Remark_${index}`}
                                  id={`managerEmailF1Remark_${index}`}
                                  onChange={(e) => handleInputChange(e, 'managerEmailF1Remark', index)}
                                  placeholder="Write Here" />
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <label for="">Aadhaar Number</label>
                              <input type="text"
                                  class="form-control"
                                  name={`managerAadharNoF1_${index}`}
                                  id={`managerAadharNoF1_${index}`}
                                  value={branch.managerAadharNoF1 || ''}
                                  onChange={(e) => handleInputChange(e, 'managerAadharNoF1', index)}
                                  placeholder="Aadhar Number" required />
                          </td>
                          <td>
                              <div>
                                  <div class="form-group files1">
                                      <input type="file"
                                          name={`managerAadharNoF1image_${index}`}
                                          id={`managerAadharNoF1image_${index}`}
                                          class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                          onChange={(e) => handleInputChange(e, 'managerAadharNoF1image', index)}
                                          required
                                      />
                                  </div>
                              </div>
                          </td>
                          <td>
                              <label for="">Remark</label>
                              <input type="text"
                                  class="form-control"
                                  value={branch.managerAadharNoF1Remark || ''}
                                  name={`managerAadharNoF1Remark_${index}`}
                                  id={`managerAadharNoF1Remark_${index}`}
                                  onChange={(e) => handleInputChange(e, 'managerAadharNoF1Remark', index)}
                                  placeholder="Write Here" />
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <label for="">PAN</label>
                              <input type="text"
                                  class="form-control"
                                  name={`managerPanF1_${index}`}
                                  id={`managerPanF1_${index}`}
                                  value={branch.managerPanF1 || ''}
                                  onChange={(e) => handleInputChange(e, 'managerPanF1', index)}
                                  placeholder="PAN" required />
                          </td>
                          <td>
                              <div>
                                  <div class="form-group files1">
                                      <input type="file"
                                          name={`managerPanF1image_${index}`}
                                          id={`managerPanF1image_${index}`}
                                          class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                          onChange={(e) => handleInputChange(e, 'managerPanF1image', index)}
                                          required
                                      />
                                  </div>
                              </div>
                          </td>
                          <td>
                              <label for="">Remark</label>
                              <input type="text"
                                  class="form-control"
                                  value={branch.managerPanF1Remark || ''}
                                  name={`managerPanF1Remark_${index}`}
                                  id={`managerPanF1Remark_${index}`}
                                  onChange={(e) => handleInputChange(e, 'managerPanF1Remark', index)}
                                  placeholder="Write Here" />
                          </td>
                      </tr>
                  </table>
                  <div style={{ display: isVisible ? 'inline' : 'none' }} ref={factoryRefClicknotshow} >
                        <h4>F.2. Details of Registration & Licenses</h4>
                        <table className="table creat_tbl">
                            <tbody>
                            <tr>
                                    <td>
                                        <label htmlFor={`shopsEstLicenseF2_${index}`}>Shops and Establishment License</label>
                                        {isVisible && (<input
                                            type="text"
                                            className="form-control"
                                            name={`shopsEstLicenseF2_${index}`}
                                            id={`shopsEstLicenseF2_${index}`}
                                            value={branch.shopsEstLicenseF2 || ''}
                                            onChange={(e) => handleInputChange(e, 'shopsEstLicenseF2', index)}
                                            placeholder="Shops and Establishment License"
                                            ref={inputRefsfactoryRefClicknotshow.inputRef1}
                                        />)}
                                    </td>
                                    <td>
                                        <div className="form-group files1">
                                        {isVisible && (<input
                                                type="file"
                                                name={`shopsEstLicenseF2image_${index}`} // Make sure name is not empty
                                                id={`shopsEstLicenseF2image_${index}`} // Unique id for each file input
                                                className="form-control"
                                                multiple=""
                                                accept="image/*,application/pdf"
                                                style={{ height: '10px'/*,display: 'inline'*/ }}
                                                onChange={(e) => handleInputChange(e, 'shopsEstLicenseF2image', index)}
                                                ref={inputRefsfactoryRefClicknotshow.inputRef2}
                                            />)}
                                        </div>
                                    </td>
                                    <td>
                                        <label htmlFor={`shopsEstLicenseF2Remark_${index}`}>Remark</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={branch.shopsEstLicenseF2Remark || ''}
                                            name={`shopsEstLicenseF2Remark_${index}`}
                                            id={`shopsEstLicenseF2Remark_${index}`}
                                            onChange={(e) => handleInputChange(e, 'shopsEstLicenseF2Remark', index)}
                                            placeholder="Write Here"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table  creat_tbl">
                        <tr>
                            <td>
                            <label className="form-label">License Number</label>
                            {isVisible && (<input
                                    type="text"
                                    className="form-control"
                                    placeholder="Licence Number"
                                    value={branch.licensenumber || ''}
                                    id={`licensenumber_${index}`}  
                                    name={`licensenumber_${index}`} 
                                    onChange={(e)=>handleInputChange(e, 'licensenumber', index)}
                                    ref={inputRefsfactoryRefClicknotshow.inputRef3}
                                    />)}
                                </td>
                                <td colspan="2"> 
                                <div>
                                        <div class="form-group files1">
                                        {isVisible && (<input type="file" class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px'/*,display: 'inline'*/ }}
                                            id={`licenseimage_${index}`}  
                                            name={`licenseimage_${index}`} 
                                            onChange={(e) => handleInputChange(e,'licenseimage', index)} 
                                            ref={inputRefsfactoryRefClicknotshow.inputRef4}
                                            />)}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <label for="">Remark</label>
                                <input type="text" class="form-control"  
                                id={`licenseremark_${index}`}  
                                name={`licenseremark_${index}`} 
                                value={branch.licenseremark || ''} 
                                onChange={(e) => handleInputChange(e,'licenseremark', index)} placeholder="Write Here"/>
                                </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Date of Registration</label>
                                {isVisible && (<input
                                type="date"
                                className="form-control"
                                placeholder="Date of Registration"
                                value={branch.dor || ''}
                                onChange={(e) => handleInputChange(e, 'dor', index)}
                                id={`dor_${index}`}  
                                name={`dor_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef5}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Date of Expiry</label>
                                {isVisible && (<input
                                type="date"
                                className="form-control"
                                placeholder="Date of Expiry"
                                value={branch.doe || ''}
                                onChange={(e) => handleInputChange(e, 'doe', index)}
                                id={`doe_${index}`}  
                                name={`doe_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef6}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Due Date of Renewal</label>
                                {isVisible && (<input
                                type="date"
                                className="form-control"
                                placeholder="Due Date of Renewal"
                                value={branch.doddr || ''}
                                onChange={(e) => handleInputChange(e, 'doddr', index)}
                                id={`doddr_${index}`}  
                                name={`doddr_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef7}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                    <label className="form-label">Manager Name of the License</label>
                                    {isVisible && (<input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Manager Name of the License" 
                                    value={branch.managernamelicense || ''}
                                    onChange={(e)=>handleInputChange(e, 'managernamelicense', index)} 
                                    name={`managernamelicense_${index}`}  
                                    id={`managernamelicense_${index}`}  
                                    ref={inputRefsfactoryRefClicknotshow.inputRef8}
                                    />)}
                            </td>
                            <td>
                                <div className="form-group files1">
                                {isVisible && (<input
                                    type="file"
                                    multiple=""
                                    accept="image/*,application/pdf"
                                    className="form-control"
                                    style={{ height: '10px'/*,display: 'inline'*/ }}
                                    onChange={(e) => handleInputChange(e, 'managerlicenseimage', index)}
                                    id={`managerlicenseimage_${index}`}  
                                    name={`managerlicenseimage_${index}`} 
                                    ref={inputRefsfactoryRefClicknotshow.inputRef9}
                                />)}
                                </div>
                            </td>
                            <td>
                                <label className="form-label">Remarks</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Remark"
                                value={branch.managerlicenseremark || ''}
                                onChange={(e) => handleInputChange(e, 'managerlicenseremark', index)}
                                id={`managerlicenseremark_${index}`}  
                                name={`managerlicenseremark_${index}`} 
                                />
                            </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Number of the Employees</label>
                                {isVisible && (<input
                                type="number"
                                className="form-control"
                                placeholder="Number of the Employees"
                                value={branch.noe || ''}
                                onChange={(e) => handleInputChange(e, 'noe', index)}
                                min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                id={`noe_${index}`}  
                                name={`noe_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef10}
                               />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Male</label>
                                {isVisible && (<input
                                type="number"
                                className="form-control"
                                placeholder="Male"
                                value={branch.nom || ''}
                                onChange={(e) => handleInputChange(e, 'nom', index)}
                                min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                id={`nom_${index}`}  
                                name={`nom_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef11}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Female</label>
                                {isVisible && (<input
                                type="number"
                                className="form-control"
                                placeholder="Female"
                                value={branch.nof || ''}
                                onChange={(e) => handleInputChange(e, 'nof', index)}
                                min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                id={`nof_${index}`}  
                                name={`nof_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef12}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                    <label className="form-label">Issuing Authority</label>
                                    {isVisible && (<input type="text" class="form-control" 
                                    placeholder="Issuing Authority" 
                                    value={branch.issuingauth || ''}
                                    onChange={(e)=>handleInputChange(e, 'issuingauth', index)} 
                                    name={`issuingauth_${index}`}  
                                    id={`issuingauth_${index}`} 
                                    ref={inputRefsfactoryRefClicknotshow.inputRef13}
                                    />)}
                            </td>
                            <td>
                                <div className="form-group files1">
                                {isVisible && (<input
                                    type="file"
                                    multiple=""
                                    accept="image/*,application/pdf"
                                    className="form-control"
                                    style={{ height: '10px'/*,display: 'inline'*/ }}
                                    onChange={(e) => handleInputChange(e, 'issuingauthimage', index)}
                                    id={`issuingauthimage_${index}`}  
                                    name={`issuingauthimage_${index}`} 
                                    ref={inputRefsfactoryRefClicknotshow.inputRef14}
                                />)}
                                </div>
                            </td>
                            <td>
                                <label className="form-label">Remarks</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Remark"
                                value={branch.issuingauthremark || ''}
                                onChange={(e) => handleInputChange(e, 'issuingauthremark', index)}
                                id={`issuingauthremark_${index}`}  
                                name={`issuingauthremark_${index}`} 
                                />
                            </td>
                            </tr>
                        </table>
                  </div>
                   <div style={{ display: isVisible ? 'inline' : 'none' }} ref={factoryRef}>   
                      <h4>F.3. Factory License </h4>
                      <table className="table  creat_tbl">
                        <tr>
                            <td>
                            <label className="form-label">License Number</label>
                            {isVisible && (<input
                                    type="text"
                                    className="form-control"
                                    placeholder="Licence Number"
                                    value={branch.licensenumber1 || ''}
                                    id={`licensenumber1_${index}`}  
                                    name={`licensenumber1_${index}`} 
                                    onChange={(e)=>handleInputChange(e, 'licensenumber1', index)}
                                    ref={inputRefsfactoryRefClicknotshow.inputRef15}
                                    />)}
                                </td>
                                <td colspan="2"> 
                                <div>
                                        <div class="form-group files1">
                                        {isVisible && (<input type="file" class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px'/*,display: 'inline'*/ }}
                                            id={`licenseimage1_${index}`}  
                                            name={`licenseimage1_${index}`} 
                                            onChange={(e) => handleInputChange(e,'licenseimage1', index)} 
                                            ref={inputRefsfactoryRefClicknotshow.inputRef16}
                                            />)}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <label for="">Remark</label>
                                <input type="text" class="form-control"  
                                id={`licenseremark1_${index}`}  
                                name={`licenseremark1_${index}`} 
                                value={branch.licenseremark1 || ''} 
                                onChange={(e) => handleInputChange(e,'licenseremark1', index)} placeholder="Write Here"/>
                                </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Date of Registration</label>
                                {isVisible && (<input
                                type="date"
                                className="form-control"
                                placeholder="Date of Registration"
                                value={branch.dor1 || ''}
                                onChange={(e) => handleInputChange(e, 'dor1', index)}
                                id={`dor1_${index}`}  
                                name={`dor1_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef17}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Date of Expiry</label>
                                {isVisible && (<input
                                type="date"
                                className="form-control"
                                placeholder="Date of Expiry"
                                value={branch.doe1 || ''}
                                onChange={(e) => handleInputChange(e, 'doe1', index)}
                                id={`doe1_${index}`}  
                                name={`doe1_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef18}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Due Date of Renewal</label>
                                {isVisible && (<input
                                type="date"
                                className="form-control"
                                placeholder="Due Date of Renewal"
                                value={branch.doddr1 || ''}
                                onChange={(e) => handleInputChange(e, 'doddr1', index)}
                                id={`doddr1_${index}`}  
                                name={`doddr1_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef19}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                    <label className="form-label">Manager Name of the License</label>
                                    {isVisible && (<input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Manager Name of the License" 
                                    value={branch.managernamelicense1 || ''}
                                    onChange={(e)=>handleInputChange(e, 'managernamelicense1', index)} 
                                    name={`managernamelicense1_${index}`}  
                                    id={`managernamelicense1_${index}`}  
                                    ref={inputRefsfactoryRefClicknotshow.inputRef20}
                                    />)}
                            </td>
                            <td>
                                <div className="form-group files1">
                                {isVisible && (<input
                                    type="file"
                                    multiple=""
                                    accept="image/*,application/pdf"
                                    className="form-control"
                                    style={{ height: '10px'/*,display: 'inline'*/ }}
                                    onChange={(e) => handleInputChange(e, 'managerlicenseimage1', index)}
                                    id={`managerlicenseimage1_${index}`}  
                                    name={`managerlicenseimage1_${index}`} 
                                    ref={inputRefsfactoryRefClicknotshow.inputRef21}
                                />)}
                                </div>
                            </td>
                            <td>
                                <label className="form-label">Remarks</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Remark"
                                value={branch.managerlicenseremark1 || ''}
                                onChange={(e) => handleInputChange(e, 'managerlicenseremark1', index)}
                                id={`managerlicenseremark1_${index}`}  
                                name={`managerlicenseremark1_${index}`} 
                                />
                            </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Number of the Employees</label>
                                {isVisible && (<input
                                type="number"
                                className="form-control"
                                placeholder="Number of the Employees"
                                value={branch.noe1 || ''}
                                onChange={(e) => handleInputChange(e, 'noe1', index)}
                                min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                id={`noe1_${index}`}  
                                name={`noe1_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef22}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Male</label>
                                {isVisible && (<input
                                type="number"
                                className="form-control"
                                placeholder="Male"
                                value={branch.nom1 || ''}
                                onChange={(e) => handleInputChange(e, 'nom1', index)}
                                min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                id={`nom1_${index}`}  
                                name={`nom1_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef23}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Female</label>
                                {isVisible && (<input
                                type="number"
                                className="form-control"
                                placeholder="Female"
                                value={branch.nof1 || ''}
                                onChange={(e) => handleInputChange(e, 'nof1', index)}
                                min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                id={`nof1_${index}`}  
                                name={`nof1_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef24}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                    <label className="form-label">Issuing Authority</label>
                                    {isVisible && (<input type="text" class="form-control" 
                                    placeholder="Issuing Authority" 
                                    value={branch.issuingauth1 || ''}
                                    onChange={(e)=>handleInputChange(e, 'issuingauth1', index)} 
                                    name={`issuingauth1_${index}`}  
                                    id={`issuingauth1_${index}`} 
                                    ref={inputRefsfactoryRefClicknotshow.inputRef25}
                                    />)}
                            </td>
                            <td>
                                <div className="form-group files1">
                                {isVisible && (<input
                                    type="file"
                                    multiple=""
                                    accept="image/*,application/pdf"
                                    className="form-control"
                                    style={{ height: '10px'/*,display: 'inline'*/ }}
                                    onChange={(e) => handleInputChange(e, 'issuingauthimage1', index)}
                                    id={`issuingauthimage1_${index}`}  
                                    name={`issuingauthimage1_${index}`} 
                                    ref={inputRefsfactoryRefClicknotshow.inputRef26}
                                />)}
                                </div>
                            </td>
                            <td>
                                <label className="form-label">Remarks</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Remark"
                                value={branch.issuingauthremark1 || ''}
                                onChange={(e) => handleInputChange(e, 'issuingauthremark1', index)}
                                id={`issuingauthremark1_${index}`}  
                                name={`issuingauthremark1_${index}`} 
                                />
                            </td>
                            </tr>
                        </table>
                      <h4>F.4. Factory Plan</h4>
                      <table className="table  creat_tbl">
                      <tr>
                            <td>
                            <label className="form-label">License Number</label>
                            {isVisible && (<input
                                    type="text"
                                    className="form-control"
                                    placeholder="Licence Number"
                                    value={branch.licensenumber2 || ''}
                                    id={`licensenumber2_${index}`}  
                                    name={`licensenumber2_${index}`} 
                                    onChange={(e)=>handleInputChange(e, 'licensenumber2', index)}
                                    ref={inputRefsfactoryRefClicknotshow.inputRef27}
                                    />)}
                                </td>
                                <td colspan="2"> 
                                <div>
                                        <div class="form-group files1">
                                        {isVisible && (<input type="file" class="form-control" multiple="" accept="image/*,application/pdf" style={{ height:'10px'/*,display: 'inline'*/ }}
                                            id={`licenseimage2_${index}`}  
                                            name={`licenseimage2_${index}`} 
                                            onChange={(e) => handleInputChange(e,'licenseimage2', index)} 
                                            ref={inputRefsfactoryRefClicknotshow.inputRef28}
                                            />)}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <label for="">Remark</label>
                                <input type="text" class="form-control"  
                                id={`licenseremark2_${index}`}  
                                name={`licenseremark2_${index}`} 
                                value={branch.licenseremark2 || ''} 
                                onChange={(e) => handleInputChange(e,'licenseremark2', index)} placeholder="Write Here"/>
                                </td>
                            </tr>
                            <tr>
                            <td colspan="4">
                                <label className="form-label">Date of Registration</label>
                                {isVisible && (<input
                                type="date"
                                className="form-control"
                                placeholder="Date of Registration"
                                value={branch.dor2 || ''}
                                onChange={(e) => handleInputChange(e, 'dor2', index)}
                                id={`dor2_${index}`}  
                                name={`dor2_${index}`} 
                                ref={inputRefsfactoryRefClicknotshow.inputRef29}
                                />)}
                            </td>
                            </tr>
                            <tr>
                            <td colspan="2">
                                    <label className="form-label">Issuing Authority</label>
                                    {isVisible && (<input type="text" class="form-control" 
                                    placeholder="Issuing Authority" 
                                    value={branch.issuingauth2 || ''}
                                    onChange={(e)=>handleInputChange(e, 'issuingauth2', index)} 
                                    name={`issuingauth2_${index}`}  
                                    id={`issuingauth2_${index}`} 
                                    ref={inputRefsfactoryRefClicknotshow.inputRef30}
                                    />)}
                            </td>
                            <td>
                                <div className="form-group files1">
                                {isVisible && (<input
                                    type="file"
                                    multiple=""
                                    accept="image/*,application/pdf"
                                    className="form-control"
                                    style={{ height: '10px'/*,display: 'inline'*/ }}
                                    onChange={(e) => handleInputChange(e, 'issuingauthimage2', index)}
                                    id={`issuingauthimage2_${index}`}  
                                    name={`issuingauthimage2_${index}`} 
                                    ref={inputRefsfactoryRefClicknotshow.inputRef31}
                                />)}
                                </div>
                            </td>
                            <td>
                                <label className="form-label">Remarks</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Remark"
                                value={branch.issuingauthremark2 || ''}
                                onChange={(e) => handleInputChange(e, 'issuingauthremark2', index)}
                                id={`issuingauthremark2_${index}`}  
                                name={`issuingauthremark2_${index}`} 
                                />
                            </td>
                            </tr>
                      </table>
                  </div>
                  <h4>F.5. Details of the Labour Contractors</h4>
                  <table className="table  creat_tbl">
                      <tr className='align-middle'>
                          <td colspan="3">
                              <label for="">Is Contract labour Engaged(Yes/No)</label>
                          </td>
                      </tr>
                      <tr>
                          <td colspan="3" style={{ width: '100%' }}>
                              <input name=""
                                  id={`shivam_${index}`}
                                  class="btn " type="button"
                                  value="YES" style={{ width: '20%', backgroundColor: '#cee9f2' }}
                                  ref={iclenoshow}
                                  onClick={noshowf1show} />
                              <input name=""
                                  id={`shivam1_${index}`}
                                  class="btn " type="button"
                                  value="NO" onClick={showf1show} ref={icleshow}
                                  style={{ width: '20%', backgroundColor: '#cee9f2' }} />
                          </td>
                      </tr>
                  </table>
                  <div style={{ display: isVisible ? 'inline' : 'none' }}
                      ref={myRefF1Labour}> {/** div for Is Contract labour Engaged(Yes/No) starts */}
                      <table className="table  creat_tbl">
                      <tr>
                              <td>
                                  <label for="">Contract Labour Registration Number</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      name={`contractLabRegNoF5_${index}`}
                                      id={`contractLabRegNoF5_${index}`}
                                      value={branch.contractLabRegNoF5 || ''}
                                      onChange={(e) => handleInputChange(e, 'contractLabRegNoF5', index)}
                                      placeholder="Contract Labour Registration Number" 
                                      ref={icleinputRefs.inputRef32}
                                      />)}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`contractLabRegNoF5image_${index}`}
                                              id={`contractLabRegNoF5image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'contractLabRegNoF5image', index)}
                                              ref={icleinputRefs.inputRef33}
                                          />)}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.contractLabRegNoF5Remark || ''}
                                      name={`contractLabRegNoF5Remark_${index}`}
                                      id={`contractLabRegNoF5Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'contractLabRegNoF5Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <label for="">Date of Registration</label>
                                  {isVisible  && (<input type="date"
                                      class="form-control"
                                      value={branch.regDateContractorF5 || ''}
                                      name={`regDateContractorF5_${index}`}
                                      id={`regDateContractorF5_${index}`}
                                      onChange={(e) => handleInputChange(e, 'regDateContractorF5', index)}
                                      placeholder="Type here" 
                                      ref={icleinputRefs.inputRef34}
                                      />)}
                              </td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <label for="">Number of Contract Employee</label>
                                  {isVisible  && (<input type="number"
                                      class="form-control"
                                      name={`coOfContractEmpF5_${index}`}
                                      id={`coOfContractEmpF5_${index}`}
                                      value={branch.coOfContractEmpF5 || ''}
                                      onChange={(e) => handleInputChange(e, 'coOfContractEmpF5', index)}
                                      placeholder="Number of Contract Employee" 
                                      ref={icleinputRefs.inputRef35}
                                      />)}
                              </td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <label for="">Number of Contractors</label>
                                  {isVisible  && (<input type="number"
                                      class="form-control"
                                      name={`noOfContractorsF5_${index}`}
                                      id={`noOfContractorsF5_${index}`}
                                      value={branch.noOfContractorsF5 || ''}
                                      onChange={(e) => handleInputChange(e, 'noOfContractorsF5', index)}
                                      placeholder="Number of Contractors" 
                                      ref={icleinputRefs.inputRef36}
                                      />)}
                              </td>
                          </tr>
                      </table>

                      <h4>F.5.1. Details of the Labour Contractors</h4>
                      <table className="table  creat_tbl">
                          <tr>
                              <td>
                                  <label for="">Name of the Contractor</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      name={`contractorNameF51_${index}`}
                                      id={`contractorNameF51_${index}`}
                                      value={branch.contractorNameF51 || ''}
                                      onChange={(e) => handleInputChange(e, 'contractorNameF51', index)}
                                      placeholder="Name of the Contractor" 
                                      ref={icleinputRefs.inputRef37}
                                      />)}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`contractorNameF51image_${index}`}
                                              id={`contractorNameF51image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'contractorNameF51image', index)}
                                              ref={icleinputRefs.inputRef38}
                                          />)}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.contractorNameF51Remark || ''}
                                      name={`contractorNameF51Remark_${index}`}
                                      id={`contractorNameF51Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'contractorNameF51Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label for="">Name of the Establishment</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      value={branch.establishmentNameF51 || ''}
                                      name={`establishmentNameF51_${index}`}
                                      id={`establishmentNameF51_${index}`}
                                      onChange={(e) => handleInputChange(e, 'establishmentNameF51', index)}
                                      placeholder="Name of the Establishment" 
                                      ref={icleinputRefs.inputRef39}
                                      />)}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`establishmentNameF51image_${index}`}
                                              id={`establishmentNameF51image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'establishmentNameF51image', index)}
                                              ref={icleinputRefs.inputRef40}
                                          />)}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.establishmentNameF51Remark || ''}
                                      name={`establishmentNameF51Remark_${index}`}
                                      id={`establishmentNameF51Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'establishmentNameF51Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label for="">Registered Address of the Contractor</label>
                                  <table className="table  creat_tbl">
                                      <tr>
                                          <td>
                                          {isVisible  && (<input type="text"
                                                  class="form-control"
                                                  name={`regisocontractaddress_${index}`}
                                                  id={`regisocontractaddress_${index}`}
                                                  value={branch.regisocontractaddress || ''}
                                                  onChange={(e) => handleInputChange(e, 'regisocontractaddress', index)}
                                                  placeholder="Address" 
                                                  ref={icleinputRefs.inputRef41}
                                                  />)}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                          <select className="form-select" aria-label="Default select example"
                                                  name={`regStateContractorF51_${index}`}
                                                  id={`regStateContractorF51_${index}`}
                                                  value={branch.regStateContractorF51 || ''}
                                                  onChange={(e) => handleInputChange(e, 'regStateContractorF51', index)}
                                                  ref={icleinputRefs.inputRef42}
                                                  >
                                                  <option value="">Select State</option>
                                                  {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item =>
                                                      <option value={item._id}>{item.name}</option>
                                                  )};
                                              </select>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                          {isVisible  && (<input type="text"
                                                  class="form-control"
                                                  value={branch.regDistContractorF51 || ''}
                                                  name={`regDistContractorF51_${index}`}
                                                  id={`regDistContractorF51_${index}`}
                                                  onChange={(e) => handleInputChange(e, 'regDistContractorF51', index)}
                                                  placeholder="District" 
                                                  ref={icleinputRefs.inputRef43}
                                                  />)}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                          {isVisible  && (<input type="number"
                                                  class="form-control"
                                                  name={`regPinContractorF51_${index}`}
                                                  id={`regPinContractorF51_${index}`}
                                                  value={branch.regPinContractorF51 || ''}
                                                  onChange={(e) => handleInputChange(e, 'regPinContractorF51', index)}
                                                  placeholder="PIN" 
                                                  ref={icleinputRefs.inputRef44}
                                                  />)}
                                          </td>
                                      </tr>
                                  </table>
                              </td>

                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`regAddContractorF51image_${index}`}
                                              id={`regAddContractorF51image_${index}`}
                                              class="form-control"
                                              multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'regAddContractorF51image', index)}
                                              ref={icleinputRefs.inputRef45}
                                          />)}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.regAddContractorF51Remark || ''}
                                      name={`regAddContractorF51Remark_${index}`}
                                      id={`regAddContractorF51Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'regAddContractorF51Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                      </table>
                      <h4>F.5.2. Agreement Date</h4>
                      <table className="table  creat_tbl">
                          <tr>
                              <td colspan="3">
                                  <label for="">Date of Expiry</label>
                                  {isVisible  && (<input type="date"
                                      class="form-control"
                                      value={branch.expiryDateF52 || ''}
                                      name={`expiryDateF52_${index}`}
                                      id={`expiryDateF52_${index}`}
                                      onChange={(e) => handleInputChange(e, 'expiryDateF52', index)}
                                      placeholder="Date of Expiry" 
                                      ref={icleinputRefs.inputRef46}
                                      />)}
                              </td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <label for="">Due Date for Renewal</label>
                                  {isVisible  && (<input type="date"
                                      class="form-control"
                                      name={`renewalDateF52_${index}`}
                                      id={`renewalDateF52_${index}`}
                                      value={branch.renewalDateF52 || ''}
                                      onChange={(e) => handleInputChange(e, 'renewalDateF52', index)}
                                      placeholder="Due Date for Renewal" 
                                      ref={icleinputRefs.inputRef47}
                                      />)}
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label for="">Nature of Work</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      name={`natureOfWorkF52_${index}`}
                                      id={`natureOfWorkF52_${index}`}
                                      value={branch.natureOfWorkF52 || ''}
                                      onChange={(e) => handleInputChange(e, 'natureOfWorkF52', index)}
                                      placeholder="Type here" 
                                      ref={icleinputRefs.inputRef48}
                                      />)}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`natureOfWorkF52image_${index}`}
                                              id={`natureOfWorkF52image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'natureOfWorkF52image', index)}
                                              ref={icleinputRefs.inputRef49}
                                          />)}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.natureOfWorkF52Remark || ''}
                                      name={`natureOfWorkF52Remark_${index}`}
                                      id={`natureOfWorkF52Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'natureOfWorkF52Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <label for="">Number of Employees Deployed</label>
                                  {isVisible  && (<input type="number"
                                      class="form-control"
                                      name={`noOfEmpDeployedF52_${index}`}
                                      id={`noOfEmpDeployedF52_${index}`}
                                      value={branch.noOfEmpDeployedF52 || ''}
                                      onChange={(e) => {handleInputChange(e, 'noOfEmpDeployedF52', index);useRefnoOfEmpDeployedAgreementE2.current = e.target.value}}
                                      min="0" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" placeholder="Type here" ref={icleinputRefs.inputRef50} />)}
                              </td>
                          </tr>
                      </table>
                      <h4>F.5.3. Contractors Registration Details</h4>
                      <table className="table  creat_tbl">
                          <tr>
                              <td>
                                  <label for="">Type of the Company</label>
                                  {isVisible  && (<select class="form-select" 
                                      name={`companyTypeF53_${index}`}
                                      id={`companyTypeF53_${index}`}
                                      value={branch.companyTypeF53 || ''}
                                      onChange={(e) => handleInputChange(e, 'companyTypeF53', index)}
                                      placeholder="Type of the Company" 
                                      ref={icleinputRefs.inputRef53}>
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
                                      )} 
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`companyTypeF53image_${index}`}
                                              id={`companyTypeF53image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'companyTypeF53image', index)}
                                              ref={icleinputRefs.inputRef54}
                                          />
                                          )} 
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      name={`companyTypeF53Remark_${index}`}
                                      id={`companyTypeF53Remark_${index}`}
                                      value={branch.companyTypeF53Remark || ''}
                                      onChange={(e) => handleInputChange(e, 'companyTypeF53Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                      <tr><td colspan="3">    
                      {/* <div style={{ display: divstyleshowhidemyRefE3div === 'show' ? 'none' : 'inline' }}
                          ref={myRefE3div}>  *E3 div starts */}

                        <table className="table creat_tbl">
                        <tr>
                              <td>
                                  <label for="">Contract Labour License Number</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      value={branch.contractLabLicNoF53 || ''}
                                      name={`contractLabLicNoF53_${index}`}
                                      id={`contractLabLicNoF53_${index}`}
                                      onChange={(e) => handleInputChange(e, 'contractLabLicNoF53', index)}
                                      placeholder="Contract Labour License Number"  
                                      ref={icleinputRefs.inputRef55}
                                      />
                                      )}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`contractLabLicNoF53image_${index}`}
                                              id={`contractLabLicNoF53image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px'/*,display: 'inline'*/ }}
                                              onChange={(e) => handleInputChange(e, 'contractLabLicNoF53image', index)}
                                              ref={icleinputRefs.inputRef56}
                                          />
                                          )} 
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control" nname="contractLabLicNoF53Remark"
                                      value={branch.contractLabLicNoF53Remark || ''}
                                      name={`contractLabLicNoF53Remark_${index}`}
                                      id={`contractLabLicNoF53Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'contractLabLicNoF53Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <label for="">License Date</label>
                                  {isVisible  && (<input type="date"
                                      class="form-control"
                                      name={`licenseDateF53_${index}`}
                                      id={`licenseDateF53_${index}`}
                                      value={branch.licenseDateF53 || ''}
                                      onChange={(e) => handleInputChange(e, 'licenseDateF53', index)}
                                      placeholder="License Date"  
                                      ref={icleinputRefs.inputRef57}
                                      />
                                      )}
                              </td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <label for="">Date of Expiry</label>
                                  {isVisible  && (<input type="date"
                                      class="form-control"
                                      value={branch.expiryDateF53 || ''}
                                      name={`expiryDateF53_${index}`}
                                      id={`expiryDateF53_${index}`}
                                      onChange={(e) => handleInputChange(e, 'expiryDateF53', index)}
                                      placeholder="Date of Expiry"  
                                      ref={icleinputRefs.inputRef58}
                                      />
                                      )} 
                              </td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <label for="">Due Date for Renewal</label>
                                  {isVisible  && (<input type="date"
                                      class="form-control"
                                      value={branch.renewalDateF53 || ''}
                                      name={`renewalDateF53_${index}`}
                                      id={`renewalDateF53_${index}`}
                                      onChange={(e) => handleInputChange(e, 'renewalDateF53', index)}
                                      placeholder="Due Date for Renewal"  
                                      ref={icleinputRefs.inputRef59}
                                      />
                                    )}
                              </td>
                          </tr>
                          <tr>
                              <td colspan="3">
                                  <label for="">Number of Workers as per the License</label>
                                  {isVisible  && (<input type="number"
                                      class="form-control"
                                      value={branch.noOfWorkerF53 || ''}
                                      name={`noOfWorkerF53_${index}`}
                                      id={`noOfWorkerF53_${index}`}
                                      onChange={(e) => handleInputChange(e, 'noOfWorkerF53', index)}
                                      placeholder="Number of Workers as per the License"  
                                      ref={icleinputRefs.inputRef60} 
                                      />
                                       )}
                              </td>
                          </tr>
                        </table>
                      {/* </div>     */}
                      </td></tr>  
                          <tr>
                              <td>
                                  <label for="">PAN</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      value={branch.panF53 || ''}
                                      name={`panF53_${index}`}
                                      id={`panF53_${index}`}
                                      onChange={(e) => handleInputChange(e, 'panF53', index)}
                                      placeholder="PAN" ref={icleinputRefs.inputRef70}/>
                                  )}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`panF53image_${index}`}
                                              id={`panF53image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'panF53image', index)}
                                              ref={icleinputRefs.inputRef71}
                                          />
                                      )}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.panF53Remark || ''}
                                      name={`panF53Remark_${index}`}
                                      id={`panF53Remark_${index}`}
                                      placeholder="Remark"
                                      onChange={(e) => handleInputChange(e, 'panF53Remark', index)} />
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label for="">GST</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      value={branch.gstF53 || ''}
                                      name={`gstF53_${index}`}
                                      id={`gstF53_${index}`}
                                      onChange={(e) => handleInputChange(e, 'gstF53', index)}
                                      placeholder="GST" 
                                      ref={icleinputRefs.inputRef72} />
                                  )}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`gstF53image_${index}`}
                                              id={`gstF53image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'gstF53image', index)}
                                              ref={icleinputRefs.inputRef73}
                                          />
                                      )}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.gstF53Remark || ''}
                                      name={`gstF53Remark_${index}`}
                                      id={`gstF53Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'gstF53Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label for="">PF Registration</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      value={branch.pfRegContractorsE3 || ''}
                                      name={`pfRegContractorsE3_${index}`}
                                      id={`pfRegContractorsE3_${index}`}
                                      onChange={(e) => handleInputChange(e, 'pfRegContractorsE3', index)}
                                      placeholder="PF Registration" 
                                      ref={icleinputRefs.inputRef74}
                                      />
                                    )}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`pfRegContractorsE3image_${index}`}
                                              id={`pfRegContractorsE3image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'pfRegContractorsE3image', index)}
                                              ref={icleinputRefs.inputRef75}
                                          />
                                      )}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.pfRegContractorsE3Remark || ''}
                                      name={`pfRegContractorsE3Remark_${index}`}
                                      id={`pfRegContractorsE3Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'pfRegContractorsE3Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label for="">ESIC Registration</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      value={branch.esicRegF53 || ''}
                                      name={`esicRegF53_${index}`}
                                      id={`esicRegF53_${index}`}
                                      onChange={(e) => handleInputChange(e, 'esicRegF53', index)}
                                      placeholder="ESIC Registration" 
                                      ref={icleinputRefs.inputRef76} />
                                  )}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`esicRegF53image_${index}`}
                                              id={`esicRegF53image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'esicRegF53image', index)}
                                              ref={icleinputRefs.inputRef77}
                                          />
                                      )}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.esicRegF53Remark || ''}
                                      name={`esicRegF53Remark_${index}`}
                                      id={`esicRegF53Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'esicRegF53Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label for="">Shops and Establishment</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      value={branch.shopsandEstContractorsE3 || ''}
                                      name={`shopsandEstContractorsE3_${index}`}
                                      id={`shopsandEstContractorsE3_${index}`}
                                      onChange={(e) => handleInputChange(e, 'shopsandEstContractorsE3', index)}
                                      placeholder="Shops and Establishment" 
                                      ref={icleinputRefs.inputRef78} />
                                  )}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`shopsandEstContractorsE3image_${index}`}
                                              id={`shopsandEstContractorsE3image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'shopsandEstContractorsE3image', index)}
                                              ref={icleinputRefs.inputRef79}
                                          />
                                      )}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.shopsandEstContractorsE3Remark || ''}
                                      name={`shopsandEstContractorsE3Remark_${index}`}
                                      id={`shopsandEstContractorsE3Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'shopsandEstContractorsE3Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label for="">LWF Registration</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      value={branch.lwfRegContractorsE3 || ''}
                                      name={`lwfRegContractorsE3_${index}`}
                                      id={`lwfRegContractorsE3_${index}`}
                                      onChange={(e) => handleInputChange(e, 'lwfRegContractorsE3', index)}
                                      placeholder="LWF Registration" 
                                      ref={icleinputRefs.inputRef80}
                                      />
                                  )}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`lwfRegContractorsE3image_${index}`}
                                              id={`lwfRegContractorsE3image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'lwfRegContractorsE3image', index)}
                                              ref={icleinputRefs.inputRef81}
                                          />
                                          )}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.lwfRegContractorsE3Remark || ''}
                                      name={`lwfRegContractorsE3Remark_${index}`}
                                      id={`lwfRegContractorsE3Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'lwfRegContractorsE3Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label for="">Professional Tax</label>
                                  {isVisible  && (<input type="text"
                                      class="form-control"
                                      value={branch.profTaxContractorsE3 || ''}
                                      name={`profTaxContractorsE3_${index}`}
                                      id={`profTaxContractorsE3_${index}`}
                                      onChange={(e) => handleInputChange(e, 'profTaxContractorsE3', index)}
                                      placeholder="Professional Tax" 
                                      ref={icleinputRefs.inputRef82}
                                      />
                                  )}
                              </td>
                              <td>
                                  <div>
                                      <div class="form-group files1">
                                      {isVisible  && (<input type="file"
                                              name={`profTaxContractorsE3image_${index}`}
                                              id={`profTaxContractorsE3image_${index}`}
                                              class="form-control" multiple="" accept="image/*,application/pdf" style={{ height: '10px' }}
                                              onChange={(e) => handleInputChange(e, 'profTaxContractorsE3image', index)}
                                              ref={icleinputRefs.inputRef83}
                                          />
                                      )}
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <label for="">Remark</label>
                                  <input type="text"
                                      class="form-control"
                                      value={branch.profTaxContractorsE3Remark || ''}
                                      name={`profTaxContractorsE3Remark_${index}`}
                                      id={`profTaxContractorsE3Remark_${index}`}
                                      onChange={(e) => handleInputChange(e, 'profTaxContractorsE3Remark', index)}
                                      placeholder="Write Here" />
                              </td>
                          </tr>
                      </table>
                  </div> {/** div for Is Contract labour Engaged(Yes/No) ends */}
                  <h4>F.5.4 Night Shift Permission</h4>
                  <DynamicHTMLGeneratorF54NSP formData={formData21} setFormData={setFormData21} />
                  <h4>F.5.5 OT Permission</h4>
                  <DynamicHTMLGeneratorF54OTP formData={formData22} setFormData={setFormData22} />

                  <h4>F.5.6 Weekly Off Exemption</h4>
                  <DynamicHTMLGeneratorF54WOE formData={formData23} setFormData={setFormData23} />

                  <h4>F.5.7 Trade License </h4>
                  <DynamicHTMLGeneratorF54TL formData={formData24} setFormData={setFormData24} />
              </div>    {/**whole div after number of branch ends */}
          </td>
        </tr>
        
       
      </React.Fragment>
    ));
  };

  return (
    <>
    {branchcount === 0 ? <>
    <table className="table  creat_tbl">
      <tbody>
      
        <tr>
          <td colSpan="4">
            <label className="form-label">Number of Branches</label>
            <input
              type="number"
              className="form-control"
              placeholder="Number of Branches"
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
    <table className="table  creat_tbl">
        <tr>
                <td colspan="3" >
                    <div class="col-6 col-lg-6 col-md-6 mb-2" >
                        <button type="submit" ref={myReftab6buttun} class="w-100 btn btn-primary" /*disabled={isDisabled}*/ onClick={handleSubmitTab61}>Next</button>{loadingtab6 && <Loading1 /> }
                    </div>
                </td>
            </tr> 
        </table>
    </>
    :
    (<form  name="branchform" method="post" onSubmit={handleSubmitTab6}>
    <table className="table  creat_tbl">
      <tbody>
      
        <tr>
          <td colSpan="4">
            <label className="form-label">Number of Branches</label>
            <input
              type="number"
              className="form-control"
              placeholder="Number of Branches"
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
    <table className="table  creat_tbl">
        <tr>
                <td colspan="3" >
                    <div class="col-6 col-lg-6 col-md-6 mb-2" >
                        <button type="submit" ref={myReftab6buttun} class="w-100 btn btn-primary" /*disabled={isDisabled}*/ >Next</button>{loadingtab6 && <Loading1 /> }
                    </div>
                </td>
            </tr> 
        </table>
    </form>)}
    </>
  )
}

export default DynamicHTMLGeneratorF1;