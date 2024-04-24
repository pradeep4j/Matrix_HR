import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import Highlighter from 'react-highlight-words';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Input, Space, Table ,Modal,Form,message, Upload} from 'antd';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {compliancesGetOnreject,stateGets,usersGet,compliancesRejectFilter} from "../../store/actions/otherActions";
import Loading from '../../components/layout/Loading';
const RejectedCompliance = () =>{
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
    const [state, setState] = useState('');
    const [executive, setUser] = useState('');
    const [datereject, setDateReject] = useState('');
    const [dateupdate, setDateUpdate] = useState('');
    const [showTable1, setShowTable1] = useState(true);
    const [name, setName] = useState('');
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    const myElementRefState = useRef(null);
    const myElementRefDate = useRef(null);
    const myElementRefRDate = useRef(null);
    const myElementRefUser = useRef(null);
    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    const rejectCompliance = useSelector((state) => state.rejectCompliance);
    const { loadingu,complianceReject } = rejectCompliance; 
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getComplianceRejectFilter = useSelector((state) => state.getComplianceRejectFilter);
    const { complianceRejectFilterInfo } = getComplianceRejectFilter;
    console.log(complianceRejectFilterInfo)
    const userLogin = useSelector(state=>state.userLogin);
    const {userInfo} = userLogin;
    const toggleTables = () =>{
      setShowTable1(!showTable1)
    }
    const addOrEdit = (e) => {
        //alert('assa')
        relodreport();
        setRecordForEdit(null);
      //  setPageTitle('Add Checklist');
        setOpenPopup(false);
    }
    const relodreport = async () => {
        setTimeout(() => {
            dispatch(compliancesGetOnreject());
        }, 3000);
        
    }  
    useEffect(() => {
      // toggleTables();
      // setShowTable1(showTable1);     
      // toggleTables();
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
        // toggleTables();
        // setShowTable1(showTable1);
        // toggleTables();
        dispatch(stateGets());
        dispatch(usersGet());
        dispatch(compliancesGetOnreject());
    },[dispatch])
    useEffect(() => {
      setShowTable1(showTable1);
      if(showTable1===false){
        toggleTables();
      }
      let complianceArrAllReject = [];
        if (typeof (complianceReject) !== 'undefined' && complianceReject?.length > 0 ) {
            //alert(categoryInfo?.length);
            complianceReject.map((item, index) => {
                complianceArrAllReject.push({
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
                reason:item.reason,
                executive:item.executive,
                updated_at:item.updated_at!==undefined?formatDate(item.updated_at):item.updated_at,
                revise: <Link className='text-white btn btn-danger text-decoration-none mx-2' disabled>Rejected</Link>,
                rejected_at:item.rejected_at!==undefined?formatDate(item.rejected_at):item.rejected_at,
              })
          });
        }
        setDataSource(complianceArrAllReject);
    },[complianceReject])
    const resetForm = () => {
        // alert(state)
         setState('');
         setDateReject('');
         setDateUpdate('');
         setUser('');
    }
    useEffect(() => {
         resetForm();
    },[complianceReject])
    useEffect(() => {
      setShowTable1(showTable1);
      if(showTable1===false){
        toggleTables();
      }
        let complianceRejectFilterArr = [];
          if (typeof (complianceRejectFilterInfo) !== 'undefined' && complianceRejectFilterInfo?.length > 0 ) {
              //alert(categoryInfo?.length);
              complianceRejectFilterInfo.map((item, index) => {
                complianceRejectFilterArr.push({
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
                  reason:item.reason,
                  updated_at:item.updated_at!==undefined?formatDate(item.updated_at):item.updated_at,
                  revise: <Link className='text-white btn btn-danger text-decoration-none mx-2' disabled>Rejected</Link>,
                  rejected_at:item.rejected_at!==undefined?formatDate(item.rejected_at):item.rejected_at,
                })
            });
          }
          setDataSource(complianceRejectFilterArr);
      },[complianceRejectFilterInfo]);
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
    const filter = () => {
       // alert(document.getElementById('executives').value)
       const elementstate = myElementRefState.current;
       const elementdate = myElementRefDate.current;
       const elementRdate = myElementRefRDate.current;
       const elementuser = myElementRefUser.current;
        const postBody = {
            updated_at:elementdate.value,
            rejected_at:elementRdate.value,
            state:elementstate.value,
            executive:elementuser.value
        }
        dispatch(compliancesRejectFilter(postBody));
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
          title: 'URL/Link',
          dataIndex: 'docattachment',
          key: 'docattachment',
          width: 50,
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
          key: "action", 
          title: "Actions", 
          width: 100,
          render: (record) => { 
              //console.log(JSON.stringify(record))
            return (
              <> <Link className='text-white btn btn-dark text-decoration-none' onClick={toggleTables}> View <VisibilityOffIcon fontSize='mediam' /></Link>
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
          title: 'Revise/Update',
          dataIndex: 'revise',
          key: 'revise',
          width: 100,
          // ...getColumnSearchProps('createdAt'),
          // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
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
            title: 'Reason',
            dataIndex: 'reason',
            key: 'reason',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
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
        //           <EditOutlined
        //             onClick={() => openInPopupForUpdate(record)}
        //             // onClick={() => {
        //             // //   onEditUser(record);
        //             // }}
        //           />
        //           {/* <DeleteOutlined
        //             onClick={(e) => {
        //             //   onDeleteUer(record);
        //             }}
        //             style={{ color: "red", marginLeft: 12 }}
        //           /> */}
        //         </>
        //       );
        //     }, 
        // }, 
    ];  
    return (
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">    
                    <div className="row">
                            <div className="col-md-3 col-lg-18 mb-2 mb-lg-3 mb-md-3">
                                <label for="" class="form-label">State</label>
                                <select className="form-select" id="statesr" aria-label="Default select example" ref={myElementRefState} name="state" value={state} onChange={(e)=>{setState(e.target.value);filter();}}>
                                        <option value="">Select State</option>
                                    {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                        <option value={item._id}>{item.name}</option>
                                    )};
                                </select>
                            </div>
                            <div className="col-md-3 col-lg-18 mb-2 mb-lg-3 mb-md-3">
                                <label for="" class="form-label">Executive</label>
                                <select className="form-select" ref={myElementRefUser} aria-label="Default select example" id="executives" name="executive"  value={executive} onChange={(e) => {setUser(e.target.value);filter();}} >
                                        <option value="">Select Executive</option>
                                    {usersInfo != 'undefind' && usersInfo?.length > 0 && usersInfo.map(item => 
                                        <option value={item._id}>{item.userName}</option>
                                    )};
                                </select>
                            </div>
                            <div className="col-md-3 col-lg-18 mb-2 mb-lg-3 mb-md-3">
                                <label for="" class="form-label">Updated Date</label>
                                <input type="date" id="updated" ref={myElementRefDate} className="form-control" name="someName" placeholder="Select a date" value={dateupdate} onChange={(e) => {setDateUpdate(e.target.value);filter();}}/>
                            </div>
                            <div className="col-md-3 col-lg-18 mb-2 mb-lg-3 mb-md-3">
                                <label for="" class="form-label">Rejected Date</label>
                                <input type="date" id="rejected" ref={myElementRefRDate} className="form-control" name="someName1" placeholder="Select a date" value={datereject} onChange={(e) => {setDateReject(e.target.value);filter();}}/>
                            </div>
                    </div>    
                    {loadingu && <Loading />}
                    {showTable1 ? (
                        <Table columns={columns} dataSource={dataSource}  pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 1000 }} sticky={true}/>
                    ) : (
                        <Table dataSource={dataSource} columns={columns1} pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 3500 }} sticky={true}/>
                    )} 
            </div>
            </div>
            </div>
        </React.Fragment>    
    )
}
export default RejectedCompliance;