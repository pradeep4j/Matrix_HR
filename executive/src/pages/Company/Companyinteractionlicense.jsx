import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import Highlighter from 'react-highlight-words';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table ,Modal,Form,message, Upload} from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {licenseCompanyInteractionGetOnCreate,companyTableGet,saveandapporveCompanyInteractionLicense,licenseCompanyIntractFilter} from "../../store/actions/otherActions";
import Popup from "../../components/Popup";
import Companyinteractionlicensepopup from './Companyinteractionlicensepopup';
import Loading from '../../components/layout/Loading';
// import AllChecklistTable from './AllChecklistTable';
// import ChecklistApprove from './ChecklistApprove';
// import RejectedChecklist from './RejectedChecklist';
const Companyinteractionlicense = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const getState = useSelector((state) => state.getState);
    // const { loadings,stateInfo } = getState;  
    // //console.log(stateInfo);
    // const userGet = useSelector((state) => state.userGet);
    // const { loadingu,usersInfo } = userGet;  
    // const getBranch = useSelector((state) => state.getBranch);
    // const { branchInfo } = getBranch; 
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    const companyinteractLicOnGetCreate = useSelector((state) => state.companyinteractLicOnGetCreate);
    const { loadingcil,companyInteractionLGetOnCreateInfo } = companyinteractLicOnGetCreate;
    const companyIntractFilter = useSelector((state) => state.companyIntractFilter);
    const { loadingcompanyintract,companyFilterInteractInfo } = companyIntractFilter; 
    const searchInput = useRef(null);
    const [name, setName] = useState(false);
    const [ciLicenseId, setciLicenseId] = useState([]);
    const [openPopup, setOpenPopup] = useState(false); 
    const [pageTitle, setPageTitle] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [state, setState] = useState('');
    const [company, setCompany] = useState('');
    const [branch,setBranch] = useState('');
    const [dateupdate, setDateUpdate] = useState('');
    const myElementRefState = useRef(null);
    const myElementRefDate = useRef(null);
    const myElementRefCompany = useRef(null);
    const myElementRefBranch = useRef(null);
    //const [loading, setLoading] = useState(false); 
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
   
    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    const openInPopupForUpdate = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
        setPageTitle('Edit License Company Interation');
        setModalWidth('400px');
    }
    const openInPopupForAdd = () => {
        setRecordForEdit();
        setOpenPopup(true);
        setPageTitle('Add License Company Interation');
        setModalWidth('400px');
    }
    const addOrEdit = (e) => {
        //alert(fromdate+'='+todate+'='+userId+'='+status)
        relodreport();
        setRecordForEdit(null);
      //  setPageTitle('Add Checklist');
        setOpenPopup(false);
    }
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
          <div
            style={{
              padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Input
              ref={searchInput}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: 'block',
              }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Search
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Reset
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({
                    closeDropdown: false,
                  });
                  setSearchText(selectedKeys[0]);
                  setSearchedColumn(dataIndex);
                }}
              >
                Filter
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  close();
                }}
              >
                close
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1677ff' : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) =>
          searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{
                backgroundColor: '#ffc069',
                padding: 0,
              }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
     });
    const relodreport = async () => {
        setTimeout(() => {
            dispatch(licenseCompanyInteractionGetOnCreate());
        }, 5000);
        
    }   
    useEffect(() => {
        // dispatch(stateGets());
        // dispatch(branchGet());
        dispatch(companyTableGet());
        dispatch(licenseCompanyInteractionGetOnCreate());
    },[dispatch])
    // const getBbranch = (company) => {
    //     const elementcompanybranch = myElementRefCompany.current;
    //     const postBody = {
    //      id : elementcompanybranch.value
    //    }
    //     dispatch(branchGet(postBody));
    //   }
    // alert('Companyinteractionlicense====beforeuseEffect')
    // alert(companyInteractionLGetOnCreateInfo?.length);
    useEffect(() => {
        let companyInteractionlicenseArr = [];
        let cilarr = [];
          if (typeof (companyInteractionLGetOnCreateInfo) !== 'undefined' && companyInteractionLGetOnCreateInfo?.length > 0 ) {
              companyInteractionLGetOnCreateInfo.map((item, index) => {
                cilarr.push(item._id);
                companyInteractionlicenseArr.push({
                    key:index+1,
                    id: item._id,
                    licenseTitle:item.licenseTitle,
                    image:<a href={item.licenseUpload} target="_blank">Upload</a>,
                    activatedDate:formatDate(item.activatedDate),
                    renewalDate:formatDate(item.renewalDate),
                    expiryDate:formatDate(item.expiryDate),
                    details:(item.details),
                    status: item.status === 1 ? (
                      <Link className='text-white btn btn-success text-decoration-none'>Approved</Link>
                    ) : (
                        <Link className='text-white btn btn-danger text-decoration-none'>Pending</Link>
                    ),
                })
            });
          }
          setciLicenseId(cilarr);
          setDataSource(companyInteractionlicenseArr);
      },[companyInteractionLGetOnCreateInfo])
      console.log(ciLicenseId);
      const resetForm = () => {
        // alert(state)
        //  setState('');
         setCompany('');
        //  setDateUpdate('');
        //  setBranch('');
    }
    useEffect(() => {
         resetForm();
    },[companyInteractionLGetOnCreateInfo])
      useEffect(() => {
        //  alert('2')
        let companyLicIntractFilterArr = [];
          if (typeof (companyFilterInteractInfo) !== 'undefined' && companyFilterInteractInfo?.length > 0 ) {
              //alert(categoryInfo?.length);
              companyFilterInteractInfo.map((item, index) => {
                companyLicIntractFilterArr.push({
                  key:index+1,
                  id: item._id,
                  licenseTitle:item.licenseTitle,
                  image:<a href={item.licenseUpload} target="_blank">Upload</a>,
                  activatedDate:formatDate(item.activatedDate),
                  renewalDate:formatDate(item.renewalDate),
                  expiryDate:formatDate(item.expiryDate),
                  details:(item.details),
                  status: item.status === 1 ? (
                    <Link className='text-white btn btn-success text-decoration-none'>Approved</Link>
                  ) : (
                      <Link className='text-white btn btn-danger text-decoration-none'>Pending</Link>
                  ),
                })
            });
          }
          setDataSource(companyLicIntractFilterArr);
      },[companyFilterInteractInfo])
      const formatDate = (currentDate) => {
        const dates = new Date(currentDate);
        const year = dates.getFullYear();
        const month = String(dates.getMonth() + 1).padStart(2, '0');
        const date = String(dates.getDate()).padStart(2, '0');
        const hours = String(dates.getHours()).padStart(2, '0');
        const minutes = String(dates.getMinutes()).padStart(2, '0');
        const seconds = String(dates.getSeconds()).padStart(2, '0');
  
        const formattedDateTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        return (formattedDateTime);
    }
    const columns = [
      {
        title: 'Sr. No.',
        dataIndex: 'key',
        key: 'key',
        width: 70,
       // ...getColumnSearchProps('key'),
       // sorter: (a, b) => a.key.length - b.key.length,
       // sortDirections: ['descend', 'ascend']
      },
      {
          title: 'Title',
          dataIndex: 'licenseTitle',
          key: 'licenseTitle',
          width: 100,
          // ...getColumnSearchProps('licenseTitle'),
          sorter: (a, b) => a.licenseTitle.length - b.licenseTitle.length,
          sortDirections: ['descend', 'ascend']
        },
      {
        title: 'Upload',
        dataIndex: 'image',
        key: 'image',
        width: 70,
      //   ...getColumnSearchProps('act'),
      //   sorter: (a, b) => a.act.length - b.act.length,
      //   sortDirections: ['descend', 'ascend']
      },
      {
          title: 'Activated Date',
          dataIndex: 'activatedDate',
          key: 'activatedDate',
          width: 100,
          // ...getColumnSearchProps('branchname'),
          sorter: (a, b) => a.activatedDate.length - b.activatedDate.length,
          sortDirections: ['descend', 'ascend']
      },
      {
          title: 'Expiry Date',
          dataIndex: 'expiryDate',
          key: 'expiryDate',
          width: 100,
          // ...getColumnSearchProps('createdAt'),
          sorter: (a, b) => a.expiryDate.length - b.expiryDate.length,
          sortDirections: ['descend', 'ascend']
      }, 
      {
          title: 'Renewal Date',
          dataIndex: 'renewalDate',
          key: 'renewalDate',
          width: 100,
         // ...getColumnSearchProps('renewalDate'),
         sorter: (a, b) => a.renewalDate.length - b.renewalDate.length,
         sortDirections: ['descend', 'ascend']
      },          
      {
          title: 'Details',
          dataIndex: 'details',
          key: 'details',
          width: 100,
          // ...getColumnSearchProps('executive'),
          sorter: (a, b) => a.details.length - b.details.length,
          sortDirections: ['descend', 'ascend']
      }, 
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 50,
      //    ...getColumnSearchProps('image'),
      //   sorter: (a, b) => a.image.length - b.image.length,
      //   sortDirections: ['descend', 'ascend']
      },
      { 
          key: "action", 
          title: "Actions", 
          width: 100,
          render: (record) => { 
              //console.log(JSON.stringify(record))
            return (
              <>
                <Link className='text-white btn btn-primary text-decoration-none mx-2' onClick={() => openInPopupForUpdate(record)}> Edit <EditIcon fontSize='mediam' /> </Link>
                {/* <DeleteOutlined
                  onClick={(e) => {
                    onDeleteUer(record);
                  }}
                  style={{ color: "red", marginLeft: 12 }}
                /> */}
              </>
            );
          }, 
      }, 
  ];
    const saveandapprove = () => {
        const postBody = {
            approvedate: defaultDate,
            status:1,
            id:ciLicenseId
        }
        dispatch(saveandapporveCompanyInteractionLicense(postBody));//relodreport
        relodreport();
    }
    const filter = () => {
        // const elementstate = myElementRefState.current;
        const elementcompany = myElementRefCompany.current;
        // const elementbranch = myElementRefBranch.current;
        // const elementdate = myElementRefDate.current;
        const postBody = {
            // created_at:elementdate.value,
            // state:elementstate.value,
            company:elementcompany.value,
            // branch:elementbranch.value
        }
        dispatch(licenseCompanyIntractFilter(postBody));
        // relodreport();
    }  
    return (
    <React.Fragment>
        <div className="col-lg-12">
            <div className="row">
                <div className="col-md-12  mb-2 col-lg-12 col-lg-12">
                    <select className="form-select" aria-label="Default select example" id="companies" name="company" ref={myElementRefCompany} value={company} onChange={(e)=>{setCompany(e.target.value);filter();/*getBbranch(e.target.value)*/}} required>
                            <option value="">Select Company</option>
                        {companyGetTableInfo != 'undefind' && companyGetTableInfo?.length > 0 && companyGetTableInfo.map(item => 
                            <option value={item._id}>{item.companyname}</option>
                        )};
                    </select>
                </div>   
                {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                        <select className="form-select" aria-label="Default select example"  id="states" ref={myElementRefState} value={state} name="state" onChange={(e)=>{setState(e.target.value);filter();}} >
                                <option value="">Select State</option> {/*onBlur={handlestateChange}
                            {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                <option value={item._id}>{item.name}</option>
                            )};
                        </select>
                </div>
                <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                    <select className="form-select" aria-label="Default select example" id="branchs" name="branch" ref={myElementRefBranch} onChange={(e)=>{setBranch(e.target.value);filter()}} value={branch} required>
                    <option value="">Select Branch</option>
                    {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                        <option value={item.id}>{item.name}</option>
                    )};
                    
                    </select>
                </div>
                <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                    <input type="date" id="dating" ref={myElementRefDate} className="form-control" value={dateupdate} onChange={(e) => {setDateUpdate(e.target.value);filter();}} />
                </div> */}
                
                <div className="col-12 col-lg-12">
                    <div className="card p-3 position-relative h-100">
                    {(loadingcil || loadingcompanyintract )&& <Loading />}    
                    <Table columns={columns} dataSource={dataSource} style={{ overflow:'-moz-hidden-unscrollable' }} pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false ,position: ["bottomCenter"],}} scroll={{ x: 1500 }} sticky={true}/>
                        <button className='btn btn-light border mb-2 text-decoration-none  bottom-10 start-30 ' style={{ width:'150px' }} onClick={() => openInPopupForAdd()}>  <AddCircleOutlineIcon /> Add More </button>
                        <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                            {(openPopup) && <Companyinteractionlicensepopup addOrEdit={(e) => addOrEdit(e)} recordForEdit={recordForEdit} />}
                        </Popup>
                    </div>
                    
                </div>
                
            </div>
            {/* <div style={{ width:'100%' }}> */}
            <form name="save" onSubmit={saveandapprove}>
                <button type="submit" style={{ width:'100%',marginBottom:'10px' }} className="w-80 btn btn-primary" onClick={saveandapprove}>Save And Submit</button>
                {/* </div> */}
            </form>
        </div>
    </React.Fragment>
    )
}

export default Companyinteractionlicense