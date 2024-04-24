
import React,{useState,useEffect,useRef} from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Highlighter from 'react-highlight-words';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table ,Modal,Form,message, Checkbox} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
// import CompliancePopup from './CompliancePopup';
import CompliancePopupEdit from './CompliancePopupEdit';
import Popup from "../../components/Popup";
import {compliancesGet,compliancesGetonCreate,compliancesSaveandApprove,stateGets,compliancesFilter,compliancesGetAll,compliancesGetOnreject} from "../../store/actions/otherActions";
import Loading from '../../components/layout/Loading';
import AllComplianceTable from './AllComplianceTable';
import ComplianceApprove from './ComplianceApprove';
import RejectedCompliance from './RejectedCompliance';
const Compliances = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [selectedRows1, setSelectedRows1] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [state, setState] = useState('');
    const [date, setDate] = useState('');
    const [filteredValueDate, setFilteredValueDate] = useState('');
    const [showTable1, setShowTable1] = useState(true);
    const [name, setName] = useState('');
    //const [loading, setLoading] = useState(false);
    let defaultDate = new Date()
    //defaultDate.setDate(defaultDate.getDate() )
    let selectedRowIds1 = [];
    //const [date, setDate] = useState(defaultDate)
    
    const getCompliance = useSelector((state) => state.getCompliance);
    const { complianceInfo } = getCompliance; 
    //console.log(complianceInfo?.length);
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    const getComplianceOnCreate = useSelector((state) => state.getComplianceOnCreate);
    const {loadingu, complianceInfoOnCreate } = getComplianceOnCreate; 
    console.log(complianceInfoOnCreate);
    const getComplianceCreateFilter = useSelector((state) => state.getComplianceCreateFilter);
    const { complianceGetFilterInfo } = getComplianceCreateFilter; 
     console.log(complianceGetFilterInfo);
    const userLogin = useSelector(state=>state.userLogin);
    const {userInfo} = userLogin;
    const myElementRefState = useRef(null);
    const myElementRefDate = useRef(null);
    const openInPopupForUpdate = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
        setPageTitle('Edit Compliance');
        setModalWidth('400px');
    }
    const openInPopupForAdd = () => {
        setRecordForEdit();
        setOpenPopup(true);
        setPageTitle('Add Compliance');
        setModalWidth('400px');
    }
    const addOrEdit = (e) => {
         relodreport();
        setRecordForEdit(null);
        setOpenPopup(false);
    } 
    const relodreport = async () => {
        setTimeout(() => {
            dispatch(compliancesGetonCreate());
        }, 5000);
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
      },[userInfo]);
    useEffect(() => {
        dispatch(stateGets());
        dispatch(compliancesGetonCreate());
        dispatch(compliancesGetOnreject());
        dispatch(compliancesGet());
        dispatch(compliancesGetAll());
    },[dispatch])

    useEffect(() => {
     setShowTable1(showTable1);
      let complianceArr = [];
        if (typeof (complianceInfoOnCreate) !== 'undefined' && complianceInfoOnCreate?.length > 0 ) {
            complianceInfoOnCreate.map((item, index) => {
                complianceArr.push({
                key:index+1,
                id: item._id,
                state:item.state,
                act: item.act,
                rule:<div className='new-line'>{item.rule}</div>,
                category:item.category,
                question:<div className='new-line'>{item.question}</div>,
                description:<div className='new-line'>{item.description}</div>,
                form:<a href={item.form} target="_blank">Form</a>,
                docattachment:<a href={item.docattachment} target="_blank">Document</a>,
                compliancetype:item.compliancetype,
                recurrence:item.frequency,
                risk:item.risk=='Low'?<div style={{ color:'#34953D' }}>{item.risk}</div>:item.risk=='High'?<div style={{ color:'#DF8787' }}>{item.risk}</div>:item.risk=='Medium'?<div style={{ color:'#D89D13' }}>{item.risk}</div>:item.risk=='Very High'?<div style={{ color:'red' }}>{item.risk}</div>:<div style={{ color:'red' }}>{item.risk}</div>,
                executive:item.executive,
                duedate:formatDate(item.duedate),
              })
          });
        }
        setDataSource(complianceArr);
    },[complianceInfoOnCreate])
    useEffect(()=>{setSelectedRows1([]);},[complianceInfoOnCreate])
    useEffect(() => {
      setShowTable1(showTable1);
        let complianceFilterArr = [];
          if (typeof (complianceGetFilterInfo) !== 'undefined' && complianceGetFilterInfo?.length > 0 ) {
              //alert(categoryInfo?.length);
              complianceGetFilterInfo.map((item, index) => {
                complianceFilterArr.push({
                  key:index+1,
                  id: item._id,
                  state:item.state,
                  act: item.act,
                  rule:<div className='new-line'>{item.rule}</div>,
                  category:item.category,
                  question:<div className='new-line'>{item.question}</div>,
                  description:<div className='new-line'>{item.description}</div>,
                  form:<a href={item.form} target="_blank">Form</a>,
                  docattachment:<a href={item.docattachment} target="_blank">Document</a>,
                  compliancetype:item.compliancetype,
                  recurrence:item.frequency,
                  executive:item.executive,
                  risk:item.risk=='Low'?<div style={{ color:'#34953D' }}>{item.risk}</div>:item.risk=='High'?<div style={{ color:'#DF8787' }}>{item.risk}</div>:item.risk=='Medium'?<div style={{ color:'#D89D13' }}>{item.risk}</div>:item.risk=='Very High'?<div style={{ color:'red' }}>{item.risk}</div>:<div style={{ color:'red' }}>{item.risk}</div>,
                  duedate:formatDate(item.duedate),
                })
            });
          }
          setDataSource(complianceFilterArr);
    },[complianceGetFilterInfo]);
    
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
//alert(showTable1)
    const calling = () =>{
        setTimeout(() => {
            dispatch(compliancesGetAll());
        }, 2000);
    }
    const callingcreate = () => {
        setTimeout(() => {
            document.getElementById('states').value='';
            setDate('');
            dispatch(compliancesGetonCreate());
        }, 2000);
    }
    const callingapprove = () => {
        // alert('asas')
        setTimeout(() => {
            dispatch(compliancesGet());
        }, 2000);
    } 
    const callingrejected = () => {
         //alert('asas')
        setTimeout(() => {
            dispatch(compliancesGetOnreject());
        }, 2000);
    }
    
    
    const filter = () => {
      const elementstate = myElementRefState.current;
      const elementdate = myElementRefDate.current;
      // alert(elementstate.value+'='+elementdate.value)
        const postBody = {
            created_at:elementdate.value,
            state:elementstate.value
        }
        dispatch(compliancesFilter(postBody));
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
      const handleSelectAllRows = (checked) => {
        if (checked) {
          setSelectedRows1(dataSource);
        } else {
          setSelectedRows1([]);
        }
      };
    
      const handleDeselectAllRows = () => {
        setSelectedRows1([]);
      };
    
      const handleCheckboxChange = (e, record) => {
        const { checked } = e.target;
        setSelectedRows1((prevSelectedRows) => {
          if (checked) {
            return [...prevSelectedRows, record];
          } else {
            return prevSelectedRows.filter((row) => row.id !== record.id);
          }
        });
      };

  const isSelected = (record) => {
    return selectedRows1 && selectedRows1.some((row) => row.id === record.id);
  };    
  const columns1 = [
    {
      title: (
          <Checkbox
              onChange={(e) =>
                  e.target.checked
                  ? handleSelectAllRows(e.target.checked)
                  : handleDeselectAllRows()
              }
              />
        ),
        dataIndex: 'checkbox',
        key: 'checkbox',
        width: 20,
        render: (text, record) => (
          <Checkbox
            onChange={(e) => handleCheckboxChange(e, record)}
            checked={isSelected(record)}
          />
        ),
      },
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
          title: 'State',
          dataIndex: 'state',
          key: 'state',
          width: 150,
          // ...getColumnSearchProps('state'),
          // sorter: (a, b) => a.state.length - b.state.length,
          // sortDirections: ['descend', 'ascend']
      },
      {
          title: 'Act',
          dataIndex: 'act',
          key: 'act',
          width: 100,
          // ...getColumnSearchProps('act'),
          // sorter: (a, b) => a.act.length - b.act.length,
          // sortDirections: ['descend', 'ascend']
      },
      {
          title: <div style={{ textAlign: 'left' }}>Rule</div>,
          dataIndex: 'rule',
          key: 'rule',
          width: 300,
          // ...getColumnSearchProps('rule'),
          // sorter: (a, b) => a.rule.length - b.rule.length,
          // sortDirections: ['descend', 'ascend']
      },
      {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
          width: 100,
          // ...getColumnSearchProps('category'),
          // sorter: (a, b) => a.category.length - b.category.length,
          // sortDirections: ['descend', 'ascend']
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
          dataIndex: 'form',
          key: 'form',
          width: 100,
      //    ...getColumnSearchProps('image'),
       //   sorter: (a, b) => a.image.length - b.image.length,
       //   sortDirections: ['descend', 'ascend']
      },
      {
          title: 'Document',
          dataIndex: 'docattachment',
          key: 'docattachment',
          width: 100,
         // ...getColumnSearchProps('documents'),
         // sorter: (a, b) => a.image.length - b.image.length,
         // sortDirections: ['descend', 'ascend']
      },
      {
          title: 'Compliance Type',
          dataIndex: 'compliancetype',
          key: 'compliancetype',
          width: 70,
         // ...getColumnSearchProps('documents'),
         // sorter: (a, b) => a.image.length - b.image.length,
         // sortDirections: ['descend', 'ascend']
      },      
      {
          title: 'Recurrence',
          dataIndex: 'recurrence',
          key: 'recurrence',
          width: 70,
         // ...getColumnSearchProps('documents'),
         // sorter: (a, b) => a.image.length - b.image.length,
         // sortDirections: ['descend', 'ascend']
      },  
      {
        title: 'Executive',
        dataIndex: 'executive',
        key: 'executive',
        width: 70,
       // ...getColumnSearchProps('documents'),
       // sorter: (a, b) => a.image.length - b.image.length,
       // sortDirections: ['descend', 'ascend']
    },      
      {
          title: 'Risk',
          dataIndex: 'risk',
          key: 'risk',
          width: 70,
         ...getColumnSearchProps('risk'),
         sorter: (a, b) => a.risk.length - b.risk.length,
         sortDirections: ['descend', 'ascend']
      },   
      {
          title: 'Due Date',
          dataIndex: 'duedate',
          key: 'duedate',
          width: 100,
          // ...getColumnSearchProps('createdAt'),
          // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
          // sortDirections: ['descend', 'ascend']
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
                {/* <EditOutlined
                  onClick={() => openInPopupForUpdate(record)}
                  // onClick={() => {
                  // //   onEditUser(record);
                  // }}
                /> */}
                {/* <DeleteOutlined
                  onClick={(e) => {
                  //   onDeleteUer(record);
                  }}
                  style={{ color: "red", marginLeft: 12 }}
                /> */}
              </>
            );
          }, 
      },
  ];  
  selectedRowIds1 = selectedRows1.map((row) => row.id);
  console.log(selectedRowIds1);
  const saveandapprove = () => {
    if (selectedRows1.length === 0) {
      Modal.error({
        title: 'Error',
        content: 'Please select at least one Compliance from list.',
      });
      // <Alert
      //   message="Error"
      //   description="Please select at least one item from list."
      //   type="error"
      //   showIcon
      // />
      return;
    }
    const postBody = {
        approvedate: defaultDate,
        status:0,
        id:selectedRowIds1,
        type:'executive',
        approvalstatus:1
    }
    dispatch(compliancesSaveandApprove(postBody));//relodreport
    relodreport();
}
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={calling} > <ContentPasteIcon /> All Compliances</button>
                                </li>
                                <li className="nav-item col-md-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={callingapprove}><ContentPasteIcon /> Compliances Approve</button>
                                </li>
                                <li className="nav-item col-md-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="creative-tab" data-bs-toggle="pill" data-bs-target="#creative-pill" type="button" role="tab" aria-controls="creative-pill" aria-selected="false" onClick={callingcreate}><ContentPasteIcon  /> Create New</button>
                                </li>
                                <li className="nav-item col-md-3 col-12" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill" data-bs-toggle="pill" data-bs-target="#reject-tab" type="button" role="tab" aria-controls="reject-tab" aria-selected="false" onClick={callingrejected}><ContentPasteIcon /> Reject Compliances</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    
                                                {/* <div className="table-responsive"> */}
                                                    <AllComplianceTable />
                                              
                                    {/* </div> */}
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <ComplianceApprove  />
                                </div>
                                <div className="tab-pane fade" id="creative-pill" role="tabpanel" aria-labelledby="creative-tab">
                                    <div className="row">
                                        <form className="row">
                                            <div className="col-md-3 mb-lg-3">
                                                <select className="form-select" aria-label="Default select example" ref={myElementRefState} id="states" name="state" onChange={(e)=>{setState(e.target.value);filter();}} >
                                                        <option value="">Select State</option> {/*onBlur={handlestateChange}*/}
                                                    {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                                        <option value={item._id}>{item.name}</option>
                                                    )};
                                                </select>
                                            </div>
                                            <div className="col-md-3 mb-lg-3">
                                                <input type="text" className="form-control" placeholder='Add url pdf' />
                                            </div>
                                            <div className="col-md-3 mb-lg-3">
                                                <input type="date" ref={myElementRefDate} id="dates" name="created_at" className="form-control" value={date} onChange={(e) => {setDate(e.target.value);filter();}} />
                                            </div>
                                            <div className="col-md-3 mb-lg-3">
                                                <button type="button" className="w-100 btn btn-primary" onClick={saveandapprove}>Save And Get an Approval</button>
                                            </div>
                                        </form>
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 position-relative">
                                                <div className="table-responsive">
                                                  <div className="table-container">
                                                  {loadingu && <Loading />}
                                                      <Table dataSource={dataSource} columns={columns1} pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 3500 }} sticky={true}/>
                                                  </div>
                                                </div>
                                                <button className='btn btn-light border mb-2 text-decoration-none  bottom-10 start-30 ' style={{ width:'150px' }} onClick={() => openInPopupForAdd()}>  <AddCircleOutlineIcon /> Add More </button>
                                                <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                                                    {(openPopup) && <CompliancePopupEdit addOrEdit={(e) => addOrEdit(e)} recordForEdit={recordForEdit} />}
                                                </Popup>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="reject-tab" role="tabpanel" aria-labelledby="reject-pill">
                                    <RejectedCompliance />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Compliances;
