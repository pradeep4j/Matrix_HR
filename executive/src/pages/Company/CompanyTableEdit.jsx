import React,{useState,useEffect,useRef} from 'react';
import CompanyEdit from './CompanyEdit';
import Companyprofile from './Companyprofile';
const CompanyTableEdit = () => {
  const [showTable1, setShowTable1] = useState(true);  
  const toggleTables = () =>{
    setShowTable1(!showTable1);
  }
  useEffect(() => {
    setShowTable1(showTable1);
      toggleTables();
    
  },[])
  return (
    <div>
         <a href="#" onClick={toggleTables}>
        {showTable1 ? 'Show Component' : 'Show Table'}
      </a>
      {showTable1 ? (
                    <div>
                        <CompanyEdit />
                    </div>  
                    ) : (
                    <Companyprofile />
                    )} 
    </div>
  )
}

export default CompanyTableEdit
