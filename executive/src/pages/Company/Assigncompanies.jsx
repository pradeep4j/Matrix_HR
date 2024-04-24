import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import Highlighter from 'react-highlight-words';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table ,Modal,Form,message, Checkbox} from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {stateGets,branchGet,executiveGet,companyTableGet,assignGetTable,assignGetOnCreate,companyAssignedFilter} from "../../store/actions/otherActions";
import Popup from "../../components/Popup";
// import ChecklistPopup from './ChecklistPopup';
import Loading from '../../components/layout/Loading';
import AssignTable from './AssignTable';
// import AuditChecklistTable from './AuditChecklistTable';
import Checkilist from '../Checklist/Checklist'
import AssignPopup from './AssignPopup'
import checklist from '../../../src/checklist.jpg'
const Assigncompanies = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const [name, setName] = useState(false);
    const [openPopup, setOpenPopup] = useState(false); 
    const [pageTitle, setPageTitle] = useState('');
    const [dateupdate, setDateUpdate] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [showTable1, setShowTable1] = useState(true);
    const [executive, setUser] = useState('');
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [state, setState] = useState('');
    const [company, setCompany] = useState('');
    const [branch,setBranch] = useState('');
    const myElementRefState = useRef(null);
    const myElementRefDate = useRef(null);
    const myElementRefCompany = useRef(null);
    const myElementRefBranch = useRef(null);
    const myElementRefUser = useRef(null);
    const myElementRefTab1 = useRef(null);
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    let selectedRowIds = [];
    const userGet = useSelector((state) => state.userGet);
    const { loadingu,usersInfo } = userGet; 
    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    useEffect(() => {
        const saved = localStorage.getItem("userInfo");
        if(saved){
            const initialValue = JSON.parse(saved);
            if(initialValue)
            {
            setName(initialValue.name);
            }
        }
      },[usersInfo]);
      const openInPopupForUpdate = (item) => {
          setRecordForEdit(item);
          setOpenPopup(true);
          setPageTitle('Edit Assign Company To Executive');
          setModalWidth('400px');
      }
      const relodreport = async () => {
        setTimeout(() => {
            dispatch(assignGetOnCreate());
        }, 5000);
        
    }   
      const openInPopupForAdd = () => {
          setRecordForEdit();
          setOpenPopup(true);
          setPageTitle('Add Assign Company To Executive');
          setModalWidth('400px');
      }
      const addOrEdit = (e) => {
          //alert(fromdate+'='+todate+'='+userId+'='+status)
          relodreport();
          setRecordForEdit(null);
        //  setPageTitle('Add Checklist');
          setOpenPopup(false);
      }
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getExecutive = useSelector((state) => state.getExecutive);
    const { executiveInfo } = getExecutive;  
    const companyGetAssignOnCreate = useSelector((state) => state.companyGetAssignOnCreate);
    const {loadingcagoc,companyAssignGetOnCreateInfo } = companyGetAssignOnCreate;
    const getAuditor = useSelector((state) => state.getAuditor);
    const { auditorInfo } = getAuditor; 
    const companyAssignF = useSelector((state) => state.companyAssignF);
    const { loadingcompanyaf,companyFilterAAInfo } = companyAssignF;
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    useEffect(()=>{
        dispatch(stateGets());
        const elementcompanybranch = myElementRefCompany.current;
        const postBody = {
          id : elementcompanybranch.value
        }
        if (elementcompanybranch) {
          dispatch(branchGet(postBody));
        }
        dispatch(companyTableGet());
        dispatch(assignGetTable())
        dispatch(assignGetOnCreate());
    },[dispatch]);
    const getBbranch = (company) => {
      const elementcompanybranch = myElementRefCompany.current;
      const postBody = {
       id : elementcompanybranch.value
     }
      dispatch(branchGet(postBody));
    }
    useEffect(()=>{
      let companyAssignGetOnCreateArr = [];
      if(companyAssignGetOnCreateInfo!==undefined && companyAssignGetOnCreateInfo.length>0)
      {
        companyAssignGetOnCreateInfo.map((item, index) => {
        companyAssignGetOnCreateArr.push({
          key:index+1,
          id: item._id,
          company:item.company,
          state:item.state,
          branchname: item.branchname,
          executive:item.executive,
          assigndate:formatDate(item.assigndate),
        })
      })
    }
      setDataSource(companyAssignGetOnCreateArr);
    },[companyAssignGetOnCreateInfo])
    useEffect(() => {
      resetForm();
    },[companyAssignGetOnCreateInfo])
    const resetForm = () => {
        // alert(state)
         setState('');
         setCompany('');
         setUser('');
         setBranch('')
    }
    useEffect(()=>{
      let companyAssignArr = [];
      if(companyFilterAAInfo!==undefined && companyFilterAAInfo.length>0)
      {
        companyFilterAAInfo.map((item, index) => {
          companyAssignArr.push({
          key:index+1,
          id: item._id,
          company:item.company,
          state:item.state,
          branchname: item.branchname,
          executive:item.executive,
          assigndate:formatDate(item.assigndate),
        })
      })
    }
      setDataSource(companyAssignArr);
    },[companyFilterAAInfo])
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
    const viewall = () => {
        setTimeout(() => {
            dispatch(assignGetTable());
        }, 2000);
    }
    const createnew = () => {
        setTimeout(() => {
            dispatch(assignGetOnCreate());
        }, 2000);
    }
    const tocategorypage = () => {
        navigate('/dashboard')
    };
    const filter = () => {
        const elementstate = myElementRefState.current;
        const elementcompany = myElementRefCompany.current;
        const elementbranch = myElementRefBranch.current;
        const elementexecutive = myElementRefUser.current;
        const postBody = {
            executive:elementexecutive.value,
            state:elementstate.value,
            company:elementcompany.value,
            branch:elementbranch.value
        }
        dispatch(companyAssignedFilter(postBody));
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
    const columns1 = [
          {
            title: 'Sr. No.',
            dataIndex: 'key',
            key: 'key',
            width: 50,
           // ...getColumnSearchProps('key'),
           // sorter: (a, b) => a.key.length - b.key.length,
           // sortDirections: ['descend', 'ascend']
          },
          {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: 100,
            // ...getColumnSearchProps('company'),
            sorter: (a, b) => a.company.length - b.company.length,
            sortDirections: ['descend', 'ascend']
          },
          {
              title: 'State',
              dataIndex: 'state',
              key: 'state',
              width: 100,
              // ...getColumnSearchProps('state'),
              sorter: (a, b) => a.state.length - b.state.length,
              sortDirections: ['descend', 'ascend']
            },
          {
              title: 'Branch Name',
              dataIndex: 'branchname',
              key: 'branchname',
              width: 100,
              // ...getColumnSearchProps('branchname'),
              sorter: (a, b) => a.branchname.length - b.branchname.length,
              sortDirections: ['descend', 'ascend']
          },
          {
              title: 'Executive',
              dataIndex: 'executive',
              key: 'executive',
              width: 100,
              // ...getColumnSearchProps('executive'),
              sorter: (a, b) => a.executive.length - b.executive.length,
              sortDirections: ['descend', 'ascend']
          },            
          {
            title: 'Assigned Date',
            dataIndex: 'assigndate',
            key: 'assigndate',
            width: 100,
            // ...getColumnSearchProps('approvedate'),
            // sorter: (a, b) => a.approvedate.length - b.approvedate.length,
            // sortDirections: ['descend', 'ascend']
          }, 
          // { 
          //     key: "action", 
          //     title: "Actions", 
          //     width: 100,
          //     render: (record) => { 
          //         //console.log(JSON.stringify(record))
          //       return (
          //         <>
          //           <Link className='text-white btn btn-primary text-decoration-none mx-2' onClick={() => openInPopupForUpdate(record)}> Edit <EditIcon fontSize='mediam' /> </Link>
          //           {/* <DeleteOutlined
          //             onClick={(e) => {
          //               onDeleteUer(record);
          //             }}
          //             style={{ color: "red", marginLeft: 12 }}
          //           /> */}
          //         </>
          //       );
          //     }, 
          // }, 
      ];
      const saveandapprove = () => {
        const postBody = {
            approvedate: defaultDate,
            status:1,
            id:selectedRowIds
        }
        // dispatch(checklistSaveandApprove(postBody));//relodreport
        relodreport();
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className='card'>
                        <div className='card-body'>
                        <ul className="nav nav-pills mb-3 bg-light" id="pills-tab" role="tablist">
                            <li className="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                                <button className="nav-link w-100 active" id="assign-home-tab" data-bs-toggle="pill" data-bs-target="#assign-home" ref={myElementRefTab1} type="button" role="tab" aria-controls="assign-home" aria-selected="true" onClick={viewall}>View All</button>
                            </li>
                            <li className="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                                <button className="nav-link w-100" id="assign-profile-tab" data-bs-toggle="pill" data-bs-target="#assign-profile" type="button" role="tab" aria-controls="assign-profile" aria-selected="false" onClick={createnew}>Assign</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="assign-home" role="tabpanel" aria-labelledby="assign-home-tab">
                                <AssignTable />
                            </div>
                        <div className="tab-pane fade" id="assign-profile" role="tabpanel" aria-labelledby="assign-profile-tab">
                            <div className="row">
                                
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                          <select className="form-select" aria-label="Default select example"     id="companies" name="company" ref={myElementRefCompany} value={company} onChange={(e)=>{setCompany(e.target.value);filter();getBbranch(e.target.value)}} required>
                                                    <option value="">Select Company</option>
                                                    {companyGetTableInfo != 'undefind' && companyGetTableInfo?.length > 0 && companyGetTableInfo.map(item => 
                                                      <option value={item._id}>{item.companyname}</option>
                                                    )};
                                            </select>
                                        </div>   
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                                <select className="form-select" aria-label="Default select example"  id="states" ref={myElementRefState} value={state} name="state" onChange={(e)=>{setState(e.target.value);filter();}} >
                                                        <option value="">Select State</option> {/*onBlur={handlestateChange}*/}
                                                    {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                        <option value={item._id}>{item.name}</option>
                                                    )};
                                                </select>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-2 mb-md-2">
                                            {/* <label for="" class="form-label">Executive</label> */}
                                            <select className="form-select" aria-label="Default select example" id="executives" name="executive" ref={myElementRefUser} value={executive} onChange={(e) => {setUser(e.target.value);filter();}} >
                                                    <option value="">Select Executive</option>
                                                {executiveInfo != 'undefind' && executiveInfo?.length > 0 && executiveInfo.map(item => 
                                                    <option value={item._id}>{item.userName}</option>
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
                                        {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <input type="date" id="dating" ref={myElementRefDate} className="form-control" value={dateupdate} onChange={(e) => {setDateUpdate(e.target.value);filter();}} />
                                        </div> */}
                                        {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-primary" onClick={saveandapprove}>Save And Approve</button>
                                        </div> */}
                                        {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button className="w-100 btn btn-primary" onClick={() => branch()}>   Add Branch </button>
                                        </div> */}
                                        {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button className="w-100 btn btn-primary" onClick={() => company()}>   Add Company </button>
                                        </div> */}
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 position-relative h-100">
                                            {loadingcagoc && <Loading />}    
                                            {/* {showTable1 ? (
                                                  <Table columns={columns} dataSource={dataSource}  pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 1250 }} sticky={true}/>
                                              ) : ( */}
                                                  <Table dataSource={dataSource} columns={columns1} pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 1000 }} sticky={true}/>
                                              {/* )}  */}
                                                <button className='btn btn-light border mb-2 text-decoration-none  bottom-10 start-30 ' style={{ width:'150px' }} onClick={() => openInPopupForAdd()}>  <AddCircleOutlineIcon /> Add More </button>
                                                <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                                                    {(openPopup) && <AssignPopup addOrEdit={(e) => addOrEdit(e)} recordForEdit={recordForEdit} />}
                                                </Popup>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    {/* <form name="save" onSubmit={saveandapprove}> */}
                      <button type="submit" style={{ width:'100%',marginBottom:'10px' }} className="w-80 btn btn-primary" onClick={saveandapprove}>Save And Submit</button>
                      {/* </div> */}
                    {/* </form> */}
            </div>
        </React.Fragment>
    )
}

export default Assigncompanies;
// const Spanning =  styled(FormLabel)`
// color: red;
// font-size:13px;
// `