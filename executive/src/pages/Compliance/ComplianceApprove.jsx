import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Highlighter from 'react-highlight-words';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table ,Modal,Form,message, Checkbox} from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import CompliancePopupEdit from './CompliancePopupEdit';
import Popup from "../../components/Popup";
import {compliancesGet,compliancesReject,usersGet,stateGets,compliancesApproveFilter,compliancesSaveandApprove,companyTableGet} from "../../store/actions/otherActions";
import Loading from '../../components/layout/Loading';

const ComplianceApprove = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [selectedRows, setSelectedRows] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [reason, setReason] = useState('');
    const [showTable1, setShowTable1] = useState(true);
    const [state, setState] = useState('');
    const [executive, setUser] = useState('');
    const [name, setName] = useState(false);
    //const [loading, setLoading] = useState(false);
    let defaultDate = new Date()
    let selectedRowIds = [];
    // defaultDate.setDate(defaultDate.getDate() )
    //alert(clickvalue)
    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    const getCompliance = useSelector((state) => state.getCompliance);
    const { loadingg,complianceInfo } = getCompliance; 
    const complianceByIdUpdate = useSelector((state) => state.complianceByIdUpdate);
    const { loadingu,complianceInfoUpdateId } = complianceByIdUpdate; 
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getComplianceApproveFilter = useSelector((state) => state.getComplianceApproveFilter);
    const { loadingap,complianceApproveFilterInfo } = getComplianceApproveFilter; 
    const myElementRefState = useRef(null);
    const myElementRefDate = useRef(null);
    const openInPopupForUpdate = (item) => {
     //   console.log(JSON.stringify(item));return;
        setRecordForEdit(item);
        setOpenPopup(true);
        setPageTitle('Edit Compliance');
        setModalWidth('400px');
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
            dispatch(compliancesGet());
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
        // setShowTable1(showTable1);
        dispatch(compliancesGet());
        dispatch(stateGets());
        dispatch(usersGet());
        dispatch(companyTableGet());
    },[dispatch])
    useEffect(() => {
      setShowTable1(showTable1);
      if(showTable1===false){
        toggleTables();
      }
      let complianceArrAll = [];
        if (typeof (complianceInfo) !== 'undefined' && complianceInfo?.length > 0 ) {
            //alert(categoryInfo?.length);
            complianceInfo.map((item, index) => {
                complianceArrAll.push({
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
                duedate:item.duedate !=null ? formatDate(item.duedate):item.duedate,
                updated_at:item.updated_at !=null ? formatDate(item.updated_at):item.updated_at,
                executive:item.executive,
              })
          });
        }
        setDataSource(complianceArrAll);
    },[complianceInfo])
    const resetForm = () => {
      setSelectedRows([]);
         setState('');
         setDate('');
         setUser('');
    };
    useEffect(() => {
        resetForm();
    },[complianceInfo])
    useEffect(() => {
      setShowTable1(showTable1);
      if(showTable1===false){
        toggleTables();
      }
        let complianceApproveFilterArr = [];
          if (typeof (complianceApproveFilterInfo) !== 'undefined' && complianceApproveFilterInfo?.length > 0 ) {
              //alert(categoryInfo?.length);
              complianceApproveFilterInfo.map((item, index) => {
                complianceApproveFilterArr.push({
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
                  risk:item.risk=='Low'?<div style={{ color:'#34953D' }}>{item.risk}</div>:item.risk=='High'?<div style={{ color:'red' }}>{item.risk}</div>:item.risk=='Medium'?<div style={{ color:'#D89D13' }}>{item.risk}</div>:<div style={{ color:'red' }}>{item.risk}</div>,
                  duedate:item.duedate !=null ? formatDate(item.duedate):item.duedate,
                  updated_at:item.updated_at !=null ? formatDate(item.updated_at):item.updated_at,
                  executive:item.executive,
                })
            });
          }
          setDataSource(complianceApproveFilterArr);
    },[complianceApproveFilterInfo]);
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

    const toggleTables = () =>{
        setShowTable1(!showTable1)
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
    selectedRowIds = selectedRows.map((row) => row.id);
    console.log(selectedRowIds);  
    const callingapprove = () => {
        // alert('asas')
        setTimeout(() => {
            dispatch(compliancesGet());
        }, 2000);
    } 
    ////Reject modal handling functions start
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
      username: '',
    });
    const [errors, setErrors] = useState({});
  
    const showModal = () => {
      if (selectedRows.length === 0) {
        Modal.error({
          title: 'Error',
          content: 'Please select at least one checklist from list.',
        });
        // <Alert
        //   message="Error"
        //   description="Please select at least one item from list."
        //   type="error"
        //   showIcon
        // />
        return;
      }
      setVisible(true);
    };
  
    const handleCancel = () => {
      setVisible(false);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmitModal = (e) => {
        e.preventDefault();
        
        const postBody = {
          rejected_at: defaultDate,
          status:2,
          reason:reason,
          id:selectedRowIds
      }
      dispatch(compliancesReject(postBody));//relodreport
      relodreport();
        console.log('Form submitted:', formData);
        setVisible(false);
      };
    
    ////Reject modal handling functions ends
    const reject = () => {
        const postBody = {
            rejected_at: defaultDate,
            status:2,
            reason:reason,
            id:selectedRowIds
        }
        // dispatch(compliancesReject(postBody));//relodreport
        // relodreport();
    }     
    const saveandapprove = () => {
      if (selectedRows.length === 0) {
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
          duedate: defaultDate,
          status:0,
          id:selectedRowIds,
          type:'executive',
          approvalstatus:1
      }
      dispatch(compliancesSaveandApprove(postBody));//relodreport
      relodreport();
}
    const filter = () => {
      const elementstate = myElementRefState.current;
      const elementdate = myElementRefDate.current;
      const postBody = {
          created_at:elementdate.value,
          state:elementstate.value,
      }
      dispatch(compliancesApproveFilter(postBody));
    }
    const handleSelectAllRows = (checked) => {
      if (checked) {
        setSelectedRows(dataSource);
      } else {
        setSelectedRows([]);
      }
    };
  
    const handleDeselectAllRows = () => {
      setSelectedRows([]);
    };
  
    const handleCheckboxChange = (e, record) => {
      const { checked } = e.target;
      setSelectedRows((prevSelectedRows) => {
        if (checked) {
          return [...prevSelectedRows, record];
        } else {
          return prevSelectedRows.filter((row) => row.id !== record.id);
        }
      });
    };
  
    const isSelected = (record) => {
      return selectedRows && selectedRows.some((row) => row.id === record.id);
    };
    const columns = [
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
          width: 40,
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
            title: 'URL/Link',
            dataIndex: 'docattachment',
            key: 'docattachment',
            width: 100,
           // ...getColumnSearchProps('documents'),
           // sorter: (a, b) => a.image.length - b.image.length,
           // sortDirections: ['descend', 'ascend']
        },
        {
          title: 'Last Updated Date',
          dataIndex: 'updated_at',
          key: 'updated_at',
          width: 100,
          // ...getColumnSearchProps('createdAt'),
          // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
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
            key: "action", 
            title: "Actions", 
            width: 100,
            render: (record) => { 
                //console.log(JSON.stringify(record))
              return (
                <>
                <Link className='text-white btn btn-dark text-decoration-none' onClick={toggleTables}> View <VisibilityOffIcon fontSize='mediam' /></Link>
                  <Link id="editlink" className='text-white btn btn-primary text-decoration-none mx-2' onClick={() => openInPopupForUpdate(record)}> Edit <EditIcon fontSize='mediam' /> </Link></>
        //           {/* <DeleteOutlined
        //             onClick={(e) => {
        //             //   onDeleteUer(record);
        //             }}
        //             style={{ color: "red", marginLeft: 12 }}
        //           /> */}
        //         </>
              );
            }, 
        }, 
    ]; 
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
            title: 'Rule',
            dataIndex: 'rule',
            key: 'rule',
            width: 200,
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
            title: 'Question',
            dataIndex: 'question',
            key: 'question',
            width: 300,
            // ...getColumnSearchProps('question'),
            // sorter: (a, b) => a.question.length - b.question.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Description',
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
                  <Link id="editlink" className='text-white btn btn-primary text-decoration-none mx-2' onClick={() => openInPopupForUpdate(record)}> Edit <EditIcon fontSize='mediam' /> </Link>
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
    
    return (
        <React.Fragment>
          <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
            {/* <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                  {(openPopup) && <CompliancePopupEdit addOrEdit={addOrEdit} recordForEdit={recordForEdit} />}
            </Popup> */}
                <div className="row">
                    <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                        <select className="form-select" aria-label="Default select example" id="state" name="state" value={state} ref={myElementRefState} onChange={(e)=>{setState(e.target.value);filter()}}>
                                <option value="">Select State</option>
                            {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                <option value={item._id}>{item.name}</option>
                            )};
                        </select>
                    </div>
                    <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                        <select className="form-select" aria-label="Default select example" id="executives" name="executive"  value={executive} onChange={(e) => {setUser(e.target.value);filter()}} >
                                <option value="">Select Executive</option>
                            {usersInfo != 'undefind' && usersInfo?.length > 0 && usersInfo.map(item => 
                                <option value={item._id}>{item.userName}</option>
                            )};
                        </select>
                    </div>
                    <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                        <input type="date" ref={myElementRefDate} className="form-control" id="dates" placeholder='Date' value={date} onChange={(e) => {setDate(e.target.value);filter();}} />
                    </div>
                    <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                        <button type="submit" className="w-100 btn btn-primary" style={{ width:'170px' }} disabled={complianceInfo != undefined && complianceInfo?.length==0 } onClick={saveandapprove}>Save And Get an Approval</button>
                    </div>
                    {/* <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                        <button type="submit" className="w-100 btn btn-danger" /*onClick={reject} onClick={showModal} disabled={complianceInfo != undefined && complianceInfo?.length==0 }>Reject</button>
                    </div> */}
                    <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                        <button type="submit" className="w-100 btn btn-primary" onClick={toggleTables} disabled={complianceInfo != undefined && complianceInfo?.length==0 }>Edit</button>
                    </div>
                    <div className="col-12 col-lg-12">
                        <div className="card p-3 ">
                            <div className="table-responsive">
                            {loadingg && <Loading />}
                                {showTable1 ? (
                                    <Table columns={columns} dataSource={dataSource}  pagination={{ pageSize: 4, showSizeChanger: false,position: ["bottomCenter"], }}  scroll={{ x: 1300 }} sticky={true}/>
                                ) : (
                                    <Table dataSource={dataSource} columns={columns1} pagination={{ pageSize: 4, showSizeChanger: false,position: ["bottomCenter"], }}  scroll={{ x: 3500 }} sticky={true}/>
                                )}
                                 <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                                                    {(openPopup) && <CompliancePopupEdit addOrEdit={(e) => addOrEdit(e)} recordForEdit={recordForEdit} />}
                                      </Popup>
                            </div>
                        </div>
                    </div>
                </div>
            {/* {loadingu && <Loading />} */}
            </div>
            </div>
            </div>
            <div>
      <Modal
        title={<span style={{ color: 'red', fontWeight: 'bold' }}>Reason</span>}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width="30%"
      >
        <form onSubmit={handleSubmitModal}>
          <div>
            <label htmlFor="reason">Reason:</label>
            <textarea
              type="text"
              id="reason"
              name="reason"
              class="form-control"
              row="4"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button key="cancel" onClick={handleCancel} style={{ width: '170px', backgroundColor: '#050505', color: 'white', borderRadius: '5%', border: 'none', marginRight: '10px' }}>
                Cancel
              </button>
              <button key="submit" type="primary" style={{ width: '170px', backgroundColor: '#293094', color: 'white', borderRadius: '5%', border: 'none' }}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div></>

        </React.Fragment>    
    )
}
export default ComplianceApprove;