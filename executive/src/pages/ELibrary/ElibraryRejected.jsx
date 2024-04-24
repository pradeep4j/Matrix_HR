import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import Highlighter from 'react-highlight-words';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Input, Space, Table ,Modal,Form,message, Upload} from 'antd';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {rejectedElibraryDocs,stateGets,usersGet,companyGet,branchGet,checklistRejectFilter} from "../../store/actions/otherActions";
import Popup from "../../components/Popup";
import Loading from '../../components/layout/Loading';
import ElibraryRjectedPop from './ElibraryRjectedPop';
const ElibraryRejected = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [modalHeight, setModalHeight] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [state, setState] = useState('');
    const [executive, setUser] = useState('');
    const [company, setCompany] = useState('');
    const [date, setDate] = useState('');
    const [branch, setBranch] = useState('');
    const [datereject, setDateReject] = useState('');
    const myElementRefState = useRef(null);
    const myElementRefDate = useRef(null);
    const myElementRefCompany = useRef(null);
    const myElementRefBranch = useRef(null);
    const myElementRefUser = useRef(null);
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    const [showTable1, setShowTable1] = useState(true);
    const [name, setName] = useState('');

    const listElibraryRejected = useSelector((state) => state.listElibraryRejected);
    const { loadingerl,elibraryRejectedLInfo } = listElibraryRejected; 
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    console.log(elibraryRejectedLInfo);
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getCompney = useSelector((state) => state.getCompney);
    const { companyInfo } = getCompney; 
    // const rejectFilterChecklist = useSelector((state) => state.rejectFilterChecklist);
    // const { checklistRejectinfo } = rejectFilterChecklist;

    const openInPopupForUpdate = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
        setPageTitle('Relected Elibrary Information');
        setModalWidth('900px');
    }
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
            dispatch(rejectedElibraryDocs());
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
      // toggleTables();
      // setShowTable1(showTable1); 
      // toggleTables();
      // dispatch(stateGets());
      // dispatch(usersGet());
      // dispatch(branchGet());
      // dispatch(companyGet());
      dispatch(rejectedElibraryDocs());
    },[dispatch])
    useEffect(() => {
      // setShowTable1(showTable1);
      // if(showTable1===false){
      //   toggleTables();
      // }
      let elibraryArrAllReject = [];
        if (typeof (elibraryRejectedLInfo) !== 'undefined' && elibraryRejectedLInfo?.length > 0 ) {
            //alert(categoryInfo?.length);
            elibraryRejectedLInfo.map((item, index) => {
                elibraryArrAllReject.push({
                  key:index+1,
                  id: item._id,
                  status: item.status === 2 ? (
                    <Link className='text-white btn btn-danger text-decoration-none'>Rejected</Link>
                ) : (
                    ''
                ),
                  placeholdername:item.placeholdername,
                  category:item.category.name,
                  image:<a href={item.image} target="_blank">Form</a>,
                  created_at:formatDate(item.created_at),
                  rejected_at:(item.rejected_at !==null)?formatDate(item.rejected_at):(item.rejected_at),
                  executive:name?'admin':item.executive,
                  view:<Link className='text-white btn btn-dark text-decoration-none' onClick={(e)=>openInPopupForUpdate(item._id)} >
                  View <VisibilityOffIcon fontSize='medium' />
                </Link>
              })
          });
        }
        setDataSource(elibraryArrAllReject);
    },[elibraryRejectedLInfo])
    const resetForm = () => {
        // alert(state)
         setState('');
         setDateReject('');
         setUser('');
    }
    useEffect(() => {
        //  resetForm();
    },[elibraryRejectedLInfo])
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
  
        const elementstate = myElementRefState.current;
        const elementcompany = myElementRefCompany.current;
        const elementbranch = myElementRefBranch.current;
        const elementdate = myElementRefDate.current;
        const elementuser = myElementRefUser.current;
        // alert(elementbranch.value)
        const postBody = {
            created_at:elementdate.value,
            state:elementstate.value,
            company:elementcompany.value,
            branchname:elementbranch.value,
            executive:elementuser.value
        }
        dispatch(checklistRejectFilter(postBody));
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
        width: 30,
       // ...getColumnSearchProps('key'),
       // sorter: (a, b) => a.key.length - b.key.length,
       // sortDirections: ['descend', 'ascend']
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        width: 50,
        // ...getColumnSearchProps('category'),
        sorter: (a, b) => a.category.length - b.category.length,
        sortDirections: ['descend', 'ascend']
      },
      {
          title: 'Placeholder Name',
          dataIndex: 'placeholdername',
          key: 'placeholdername',
          width: 70,
          // ...getColumnSearchProps('state'),
          sorter: (a, b) => a.placeholdername.length - b.placeholdername.length,
          sortDirections: ['descend', 'ascend']
      },
      {
        title: 'Executive',
        dataIndex: 'executive',
        key: 'executive',
        width: 50,
        // ...getColumnSearchProps('branchname'),
        // sorter: (a, b) => a.branchname.length - b.branchname.length,
        // sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Created Date',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 80,
      // ...getColumnSearchProps('createdAt'),
      // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
      // sortDirections: ['descend', 'ascend']
  }, 
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 40,
       // ...getColumnSearchProps('frequency'),
       // sorter: (a, b) => a.frequency.length - b.frequency.length,
       // sortDirections: ['descend', 'ascend']
    },  
      {
          title: 'Rejected Date',
          dataIndex: 'rejected_at',
          key: 'rejected_at',
          width: 80,
          // ...getColumnSearchProps('createdAt'),
          // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
          // sortDirections: ['descend', 'ascend']
      }, 
      {
        title: 'View',
        dataIndex: 'view',
        key: 'view',
        width: 80,
        // ...getColumnSearchProps('createdAt'),
        // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
        // sortDirections: ['descend', 'ascend']
    }, 
      // { 
      //     title: "View", view
      //     key: "view", 
      //     width: 50,
      //     render: (record) => { 
      //       return (
      //         <>
      //           {/* <Link className='text-white btn btn-dark text-decoration-none' onClick={(e)=>toapprove(record.key)}> View <VisibilityOffIcon fontSize='mediam' /></Link> */}
      //           <Link className='text-white btn btn-dark text-decoration-none' onClick={(e)=>toapprove(record.key)} /*to={`/edit/${record.key}`}*/ >
      //             View <VisibilityOffIcon fontSize='medium' />
      //           </Link>
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
                        {/* <div className="col-md-2 col-lg-15 mb-2 mb-lg-2 mb-md-2">
                            <label for="" class="form-label">Company</label>
                            <select className="form-select" ref={myElementRefCompany} aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>{setCompany(e.target.value);filter()}} required>
                                <option value="">Select Company</option>
                            {companyInfo != 'undefind' && companyInfo?.length > 0 && companyInfo.map(item => 
                                <option value={item._id}>{item.companyname}</option>
                            )};
                        </select>
                        </div>
                        <div className="col-md-2 col-lg-15 mb-2 mb-lg-2 mb-md-2">
                            <label for="" class="form-label">State</label>
                            <select className="form-select" id="statesr" ref={myElementRefState} aria-label="Default select example"  name="state" value={state} onChange={(e)=>{setState(e.target.value);filter();}}>
                                    <option value="">Select State</option>
                                {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                    <option value={item._id}>{item.name}</option>
                                )};
                            </select>
                        </div>
                        <div className="col-md-2 col-lg-15 mb-2 mb-lg-2 mb-md-2">
                        <label for="cat" class="form-label">Branch *</label>
                            <select className="form-select" ref={myElementRefBranch} aria-label="Default select example" id="branch" name="branch" onChange={(e)=>{setBranch(e.target.value);filter()}} value={branch} required>
                                <option value="">Select Branch</option>
                                {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                                    <option value={item._id}>{item.name}</option>
                                )};
                            </select>
                        </div>
                        <div className="col-md-2 col-lg-15 mb-2 mb-lg-2 mb-md-2">
                            <label for="" class="form-label">Executive</label>
                            <select className="form-select" aria-label="Default select example" id="executives" name="executive" ref={myElementRefUser} value={executive} onChange={(e) => {setUser(e.target.value);filter();}} >
                                    <option value="">Select Executive</option>
                                {usersInfo != 'undefind' && usersInfo?.length > 0 && usersInfo.map(item => 
                                    <option value={item._id}>{item.userName}</option>
                                )};
                            </select>
                        </div>
                        <div className="col-md-2 col-lg-15 mb-2 mb-lg-2 mb-md-2">
                            <label for="" class="form-label">Rejected Date</label>
                            <input type="date" id="rejected" ref={myElementRefDate} className="form-control" name="someName1" placeholder="Select a date" value={datereject} onChange={(e) => {setDateReject(e.target.value);filter();}}/>
                        </div> */}
                    </div>    
                    {loadingerl && <Loading />}    
                     <Table columns={columns} dataSource={dataSource} style={{ overflow:'-moz-hidden-unscrollable' }} pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false ,position: ["bottomCenter"],}} scroll={{ x: 1300 }} sticky={true}/>
                     <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth} modalHeight={modalHeight} from="elibrary">
                        {(openPopup) && <ElibraryRjectedPop addOrEdit={(e) => addOrEdit(e)} recordForEdit={recordForEdit} />}
                    </Popup>
                </div>
            </div>
        </div>
    </React.Fragment>    
    )
}
export default ElibraryRejected;