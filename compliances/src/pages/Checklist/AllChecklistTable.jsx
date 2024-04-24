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
import {checklistGetAll,branchGet,usersGet,stateGets,checklistsAllFilter,companyTableGet} from "../../store/actions/otherActions";
import Popup from "../../components/Popup";
import ChecklistPopup from './ChecklistPopup';
import Loading from '../../components/layout/Loading';

const AllChecklistTable = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [dateupdate, setDateUpdate] = useState('');
    const [showTable1, setShowTable1] = useState(true);
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    const onSetDate = (date) => {
      setDate(new Date(date))
    }
    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    const [state, setState] = useState('');
    const [company, setCompany] = useState('');
    const [branch,setBranch] = useState([]);
    const [user,setUser] = useState('');
    const myElementRefState = useRef(null);
    const myElementRefDate = useRef(null);
    const myElementRefCompany = useRef(null);
    const myElementRefUser = useRef(null);
    const myElementRefBranch = useRef(null);
    const [name, setName] = useState('');
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getChecklistall = useSelector((state) => state.getChecklistall);
    const { loadingall,checklistInfoAll } = getChecklistall; 
    const filterAllChecklist = useSelector((state) => state.filterAllChecklist);
    const { loadingu,checklistAllFilter } = filterAllChecklist;  
    console.log(checklistAllFilter);
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    
    const openInPopupForUpdate = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
        setPageTitle('Edit Checklist');
        setModalWidth('400px');
    }
    const toggleTables = () =>{
      setShowTable1(!showTable1);
    }
    const addOrEdit = (values) => {
        // alert(values)
        // if(values === true)
        // {
          relodreport();
        //}
        setRecordForEdit(null);
      //  setPageTitle('Add Checklist');
        setOpenPopup(false);
    }
    const relodreport = async () => {
        setTimeout(() => {
            dispatch(checklistGetAll());
        }, 3000);
        
    }  
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
    useEffect(() => {
        dispatch(stateGets());
        dispatch(usersGet());
        const elementcompanybranch = myElementRefCompany.current;
        const postBody = {
          id : elementcompanybranch.value
        }
        if (elementcompanybranch) {
          dispatch(branchGet(postBody));
        }
        dispatch(checklistGetAll());
        dispatch(companyTableGet());
    },[dispatch])
    const getBbranch = (company) => {
      const elementcompanybranch = myElementRefCompany.current;
      const postBody = {
       id : elementcompanybranch.value
     }
      dispatch(branchGet(postBody));
   }
    useEffect(() => {
      setShowTable1(showTable1);
      if(showTable1===false){
        toggleTables();
      }
      let checklistArrAll = [];
          if (typeof (checklistInfoAll) !== 'undefined' && checklistInfoAll?.length > 0 ) {
            //alert(categoryInfo?.length);
            checklistInfoAll.map((item, index) => {
                checklistArrAll.push({
                    key:index+1,
                    id: item._id,
                    state:item.state,
                    compliance: item.compliance,
                    rule:<div className='new-line'>{item.rule}</div>,
                    category:item.category,
                    question:<div className='new-line'>{item.question}</div>,
                    description:<div className='new-line'>{item.description}</div>,
                    image:<a href={item.image} target="_blank">Form</a>,
                    documents:<a href={item.documents} target="_blank">Document</a>,
                    frequency:item.frequency,
                    branchname:item.branchname,
                    company:item.company,
                    risk:item.risk=='Low'?<div style={{ color:'#34953D' }}>{item.risk}</div>:item.risk=='High'?<div style={{ color:'#DF8787' }}>{item.risk}</div>:item.risk=='Medium'?<div style={{ color:'#D89D13' }}>{item.risk}</div>:item.risk=='Very High'?<div style={{ color:'red' }}>{item.risk}</div>:<div style={{ color:'red' }}>{item.risk}</div>,
                    created_at:formatDate(item.created_at),
                    updated_at:item.updated_at!==undefined?formatDate(item.updated_at):item.updated_at,
                    approvedate:(item.approvedate)?formatDate(item.approvedate):(item.approvedate),
                    executive:item.executive,
              })
          });
        }
      //  console.log(checklistArrAll)
        setDataSource(checklistArrAll);
    },[checklistInfoAll])
    const resetForm = () => {
        // alert(state)
         setState('');
         setCompany('');
         setDate('');
         setUser('');
    }
    useEffect(() => {
         resetForm();
    },[checklistInfoAll])
    useEffect(() => {
      setShowTable1(showTable1);
      if(showTable1===false){
        toggleTables();
      }
        let checklistArrAllFilter = [];
            if (typeof (checklistAllFilter) !== 'undefined' && checklistAllFilter?.length > 0 ) {
              //alert(categoryInfo?.length);
              checklistAllFilter.map((item, index) => {
                checklistArrAllFilter.push({
                      key:index+1,
                      id: item._id,
                      state:item.state,
                      compliance: item.compliance,
                      rule:<div className='new-line'>{item.rule}</div>,
                      category:item.category,
                      question:<div className='new-line'>{item.question}</div>,
                      description:<div className='new-line'>{item.description}</div>,
                      image:<a href={item.image} target="_blank">Form</a>,
                      documents:<a href={item.documents} target="_blank">Document</a>,
                      frequency:item.frequency,
                      branchname:item.branchname,
                      risk:item.risk=='Low'?<div style={{ color:'#34953D' }}>{item.risk}</div>:item.risk=='High'?<div style={{ color:'#DF8787' }}>{item.risk}</div>:item.risk=='Medium'?<div style={{ color:'#D89D13' }}>{item.risk}</div>:item.risk=='Very High'?<div style={{ color:'red' }}>{item.risk}</div>:<div style={{ color:'red' }}>{item.risk}</div>,
                      company:item.company,
                      created_at:formatDate(item.created_at),
                      updated_at:item.updated_at!==undefined?formatDate(item.updated_at):item.updated_at,
                      approvedate:(item.approvedate)?formatDate(item.approvedate):(item.approvedate),
                      executive:item.executive,
                })
            });
          }
        //  console.log(checklistArrAll)
          setDataSource(checklistArrAllFilter);
    },[checklistAllFilter])
    
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
      const columns = [
        {
          title: 'Sr. No.',
          dataIndex: 'key',
          key: 'key',
          width: 40,
         // ...getColumnSearchProps('key'),
         // sorter: (a, b) => a.key.length - b.key.length,
         // sortDirections: ['descend', 'ascend']
        },
        {
          title: 'Company',
          dataIndex: 'company',
          key: 'company',
          width: 50,
          // ...getColumnSearchProps('company'),
          sorter: (a, b) => a.company.length - b.company.length,
          sortDirections: ['descend', 'ascend']
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            width: 100,
            ...getColumnSearchProps('state'),
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
            title: 'Create Date',
            dataIndex: 'created_at',
            key: 'createdAt',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        }, 
        {
            title: 'Approve Date',
            dataIndex: 'approvedate',
            key: 'approvedate',
            width: 100,
            // ...getColumnSearchProps('approvedate'),
            // sorter: (a, b) => a.approvedate.length - b.approvedate.length,
            // sortDirections: ['descend', 'ascend']
        }, 
        {
            title: 'Executive',
            dataIndex: 'executive',
            key: 'executive',
            width: 70,
            // ...getColumnSearchProps('executive'),
            // sorter: (a, b) => a.executive.length - b.executive.length,
            // sortDirections: ['descend', 'ascend']
        },            
        { 
            key: "action", 
            title: "Actions", 
            width: 130,
            render: (record) => { 
                //console.log(JSON.stringify(record))
              return (
                <>
               <Link className='text-white btn btn-dark text-decoration-none' onClick={toggleTables}> View <VisibilityOffIcon fontSize='mediam' /></Link>
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
      const columns1 = [
        {
          title: 'Sr. No.',
          dataIndex: 'key',
          key: 'key',
          width: 40,
         // ...getColumnSearchProps('key'),
         // sorter: (a, b) => a.key.length - b.key.length,
         // sortDirections: ['descend', 'ascend']
        },
        {
          title: 'Company',
          dataIndex: 'company',
          key: 'company',
          width: 50,
          // ...getColumnSearchProps('company'),
          sorter: (a, b) => a.company.length - b.company.length,
          sortDirections: ['descend', 'ascend']
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            width: 150,
            ...getColumnSearchProps('state'),
            sorter: (a, b) => a.state.length - b.state.length,
            sortDirections: ['descend', 'ascend']
          },
        {
          title: 'Act',
          dataIndex: 'compliance',
          key: 'compliance',
          width: 100,
        //   ...getColumnSearchProps('act'),
        //   sorter: (a, b) => a.act.length - b.act.length,
        //   sortDirections: ['descend', 'ascend']
        },
        {
            title: <div style={{ textAlign: 'left' }}>Rule</div>,
            dataIndex: 'rule',
            key: 'rule',
            width: 300,
            ...getColumnSearchProps('rule'),
            sorter: (a, b) => a.rule.length - b.rule.length,
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            width: 100,
            ...getColumnSearchProps('category'),
            sorter: (a, b) => a.category.length - b.category.length,
            sortDirections: ['descend', 'ascend']
        },
        {
            title: <div style={{ textAlign: 'left' }}>Question</div>,
            dataIndex: 'question',
            key: 'question',
            width: 300,
            // ...getColumnSearchProps('question'),
            // sorter: (a, b) => a.question.length - b.question.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: <div style={{ textAlign: 'left' }}>Description</div>,
            dataIndex: 'description',
            key: 'description',
            width: 300,
            // ...getColumnSearchProps('question'),
            // sorter: (a, b) => a.question.length - b.question.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Form',
            dataIndex: 'image',
            key: 'image',
            width: 100,
        //    ...getColumnSearchProps('image'),
         //   sorter: (a, b) => a.image.length - b.image.length,
         //   sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Document',
            dataIndex: 'documents',
            key: 'documents',
            width: 100,
           // ...getColumnSearchProps('documents'),
           // sorter: (a, b) => a.image.length - b.image.length,
           // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Branch Name',
            dataIndex: 'branchname',
            key: 'branchname',
            width: 70,
            // ...getColumnSearchProps('branchname'),
            // sorter: (a, b) => a.branchname.length - b.branchname.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Create Date',
            dataIndex: 'created_at',
            key: 'createdAt',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        }, 
        {
            title: 'Recurrence',
            dataIndex: 'frequency',
            key: 'frequency',
            width: 70,
           // ...getColumnSearchProps('frequency'),
           // sorter: (a, b) => a.frequency.length - b.frequency.length,
           // sortDirections: ['descend', 'ascend']
        },    
        {
            title: 'Approve Date',
            dataIndex: 'approvedate',
            key: 'approvedate',
            width: 100,
            // ...getColumnSearchProps('approvedate'),
            // sorter: (a, b) => a.approvedate.length - b.approvedate.length,
            // sortDirections: ['descend', 'ascend']
        }, 
        {
            title: 'Executive',
            dataIndex: 'executive',
            key: 'executive',
            width: 100,
            // ...getColumnSearchProps('executive'),
            // sorter: (a, b) => a.executive.length - b.executive.length,
            // sortDirections: ['descend', 'ascend']
        },            
        {
            title: 'Risk',
            dataIndex: 'risk',
            key: 'risk',
            width: 100,
            // ...getColumnSearchProps('executive'),
            sorter: (a, b) => a.risk.length - b.risk.length,
            sortDirections: ['descend', 'ascend']
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
    const filter = () => {
        const elementstate = myElementRefState.current;
        const elementcompany = myElementRefCompany.current;
        const elementdate = myElementRefDate.current;
        const elementbranch = myElementRefBranch.current;
        const elementuser = myElementRefUser.current;
        const postBody = {
            created_at: elementdate.value,
            state: elementstate.value,
            company: elementcompany.value,
            executive: elementuser.value,
            branch: elementbranch.value
        }
        dispatch(checklistsAllFilter(postBody));
    }  
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                    <select className="form-select" ref={myElementRefCompany} aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>{setCompany(e.target.value);filter();getBbranch(e.target.value)}} required>
                        <option value="">Select Company</option>
                        {companyGetTableInfo != 'undefind' && companyGetTableInfo?.length > 0 && companyGetTableInfo.map(item => 
                          <option value={item._id}>{item.companyname}</option>
                        )};
                    </select>
                </div>   
                <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                    <select className="form-select" ref={myElementRefState} aria-label="Default select example" id="state" name="state" value={state} onChange={(e)=>{setState(e.target.value);filter();}}>
                            <option value="">Select State</option>
                        {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                            <option value={item._id}>{item.name}</option>
                        )};
                    </select>
                </div>
                <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                    <select className="form-select" ref={myElementRefUser} aria-label="Default select example" id="executives" name="executive"  value={user} onChange={(e) => {setUser(e.target.value);filter()}} >
                            <option value="">Select Executive</option>
                        {usersInfo != 'undefind' && usersInfo?.length > 0 && usersInfo.map(item => 
                            <option value={item._id}>{item.userName}</option>
                        )};
                    </select>
                </div>
                <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                            <select className="form-select" ref={myElementRefBranch} aria-label="Default select example" id="branch" name="branch" onChange= {(e)=>{setBranch(e.target.value);filter();}} value={branch} required>
                            <option value="">Select Branch</option>
                            {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                            <option value={item.id}>{item.name}</option>
                            )};
                            </select>
                </div> 
                <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                    <input type="date" className="form-control" id="dates" ref={myElementRefDate} placeholder='Date' value={date} onChange={(e) => {setDate(e.target.value);filter();}} />
                </div>
                <div className="col-12 col-lg-12">
                    <div className="card p-3 ">
                        <div className="table-responsive">
                        {(loadingall || loadingu) && <Loading />}
                        {showTable1 ? (
                              <Table columns={columns} dataSource={dataSource}  pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 1250 }} sticky={true}/>
                          ) : (
                              <Table dataSource={dataSource} columns={columns1} pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 3500 }} sticky={true}/>
                          )} 
                        </div>
                    </div>
                </div>
            </div>
            <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                  {(openPopup) && <ChecklistPopup addOrEdit={addOrEdit} recordForEdit={recordForEdit} />}
            </Popup>
            
        </React.Fragment>    
    )
}
export default AllChecklistTable;