import React,{useState,useEffect,useRef} from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import Highlighter from 'react-highlight-words';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table ,Modal,Form,message, Upload} from 'antd';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {regsGets,companyTableGet,usersGet,stateGets,branchGet,liseregAllFilter} from "../../store/actions/otherActions";
import Popup from "../../components/Popup";
import LiseRegsEdit from './LiseRegsEdit';
import Loading from '../../components/layout/Loading';
import LiseRegsshare from './LiseRegsshare';
const LisRegsTables = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [idForEdit, setIdForEdit] = useState('');
    const [idForShare, setIdForShare] = useState('');
    const [pageTitle, setPageTitle] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [showTable1, setShowTable1] = useState(true);
    const [company, setCompany] = useState('');
    const [state, setState] = useState('');
    const [branch,setBranch] = useState('');
    const [user,setUser] = useState('');
    const [name,setName] = useState('');
    const myElementRefCompany = useRef(null);
    const myElementRefState = useRef(null);
    const myElementRefBranch = useRef(null);
    const myElementRefUser = useRef(null);
    const myElementRefDate = useRef(null);
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    const getRegs = useSelector(state => state.getRegs)
    const {loadingLicense, regsInfoDetailsGetInfo } = getRegs;
    console.log(regsInfoDetailsGetInfo)   
    const regsFilter = useSelector(state => state.regsFilter)
    const {loadingregsFilter, regsFilterGetInfo } = regsFilter;
    console.log(regsFilterGetInfo)  
    
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    const onSetDate = (date) => {
      setDate(new Date(date))
    }
    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    const toggleTables = () =>{
        setShowTable1(!showTable1);
        const elementcompany = myElementRefCompany.current;
        const elementstate = myElementRefState.current;
        const elementbranch = myElementRefBranch.current;
        const elementuser =  myElementRefUser.current;
        const elementdate = myElementRefDate.current;
        elementcompany.style.display='none';
        elementstate.style.display='none';
        elementbranch.style.display='none';
        elementuser.style.display='none';
        elementdate.style.display='none';
    }
    const editPage = (id) => {
        setIdForEdit(id)
    }
    const sharepage = (id) => {
        setIdForShare(id)
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
        dispatch(companyTableGet());
        const elementcompanybranch = myElementRefCompany.current;
        const postBody = {
          id : elementcompanybranch.value
        }
        if (elementcompanybranch) {
          dispatch(branchGet(postBody));
        }
        dispatch(regsGets());
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
        const elementstate = myElementRefState.current;
        const elementcompany = myElementRefCompany.current;
        const elementbranch = myElementRefBranch.current;
        const elementdate = myElementRefDate.current;
        const elementuser = myElementRefUser.current;
        elementstate.style.display='inline';
        elementcompany.style.display='inline';
        elementdate.style.display='inline';
        elementuser.style.display='inline';
        elementbranch.style.display='inline';
        let regsArrAll = [];
            if (typeof (regsInfoDetailsGetInfo) !== 'undefined' && regsInfoDetailsGetInfo?.length > 0 ) {
              //alert(categoryInfo?.length);
              regsInfoDetailsGetInfo.map((item, index) => {
                regsArrAll.push({
                      key:index+1,
                      id: item._id,
                      company:item.company,
                      state:item.state,
                      branchname:item.branch,
                      executive:item.executive,
                      regNo: item.regNo,
                      status:item.status ===1 ? <a href="#" className='text-white btn btn-success text-decoration-none mx-2' >Approved</a>:<a onClick={(e)=>{toggleTables(e);editPage(item._id)}}><Link className='text-white btn btn-danger text-decoration-none mx-2' >Pending</Link></a>,
                    //   created_at:formatDate(item.created_at),
                    //   updated_at:item.updated_at!==undefined?formatDate(item.updated_at):item.updated_at,
                      approvedate:(item.approvedate)?formatDate(item.approvedate):(item.approvedate),

                })
            });
          }
        //  console.log(checklistArrAll)
          setDataSource(regsArrAll);
      },[regsInfoDetailsGetInfo])
      useEffect(() => {
        // setShowTable1(showTable1);
        // if(showTable1===false){
        //   toggleTables();
        // }
        // const elementstate = myElementRefState.current;
        // const elementcompany = myElementRefCompany.current;
        // const elementbranch = myElementRefBranch.current;
        // const elementdate = myElementRefDate.current;
        // const elementuser = myElementRefUser.current;
        // elementstate.style.display='inline';
        // elementcompany.style.display='inline';
        // elementdate.style.display='inline';
        // elementuser.style.display='inline';
        // elementbranch.style.display='inline';
        let regsArrFilterAll = [];
            if (typeof (regsFilterGetInfo) !== 'undefined' && regsFilterGetInfo?.length > 0 ) {
              //alert(categoryInfo?.length);
              regsFilterGetInfo.map((item, index) => {
                regsArrFilterAll.push({
                      key:index+1,
                      id: item._id,
                      company:item.company,
                      state:item.state,
                      branchname:item.branch,
                      executive:item.executive,
                      regNo: item.regNo,
                      status:item.status ===1 ? <a href="#" className='text-white btn btn-success text-decoration-none mx-2' disabled>Approved</a>:<a onClick={(e)=>{toggleTables(e);editPage(item._id)}} disabled={false}><Link className='text-white btn btn-danger text-decoration-none mx-2' >Pending</Link></a>,
                    //   created_at:formatDate(item.created_at),
                    //   updated_at:item.updated_at!==undefined?formatDate(item.updated_at):item.updated_at,
                      approvedate:(item.approvedate)?formatDate(item.approvedate):(item.approvedate),

                })
            });
          }
        //  console.log(checklistArrAll)
          setDataSource(regsArrFilterAll);
    },[regsFilterGetInfo])
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
        const elementdate = myElementRefDate.current;
        const elementuser = myElementRefUser.current;
        const elementbranch = myElementRefBranch.current;
        const postBody = {
            created_at: elementdate.value,
            state: elementstate.value,
            company: elementcompany.value,
            branch:elementbranch.value,
            executive: elementuser.value
        }
        dispatch(liseregAllFilter(postBody));
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
          width: 70,
        //   ...getColumnSearchProps('act'),
        //   sorter: (a, b) => a.act.length - b.act.length,
        //   sortDirections: ['descend', 'ascend']
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            width: 80,
            ...getColumnSearchProps('state'),
            sorter: (a, b) => a.state.length - b.state.length,
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Branch Name',
            dataIndex: 'branchname',
            key: 'branchname',
            width: 70,
            // ...getColumnSearchProps('branchname'),
            sorter: (a, b) => a.branchname.length - b.branchname.length,
            sortDirections: ['descend', 'ascend']
        },            
        // {
        //     title: <div style={{ textAlign: 'center' }}>Rule</div>,
        //     dataIndex: 'rule',
        //     key: 'rule',
        //     width: 300,
        //     ...getColumnSearchProps('rule'),
        //     sorter: (a, b) => a.rule.length - b.rule.length,
        //     sortDirections: ['descend', 'ascend']
        // },
        {
            title: 'Executive',
            dataIndex: 'executive',
            key: 'executive',
            width: 70,
            // ...getColumnSearchProps('executive'),
            sorter: (a, b) => a.executive.length - b.executive.length,
            sortDirections: ['descend', 'ascend']
        },   
        {
            title: 'License/Registration Name',
            dataIndex: 'regNo',
            key: 'regNo',
            width: 100,
            // ...getColumnSearchProps('question'),
            sorter: (a, b) => a.regNo.length - b.regNo.length,
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Recieved Date',
            dataIndex: 'documents',
            key: 'documents',
            width: 80,
           // ...getColumnSearchProps('documents'),
           // sorter: (a, b) => a.image.length - b.image.length,
           // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Approval Status',
            dataIndex: 'status',
            key: 'status',
            width: 70,
           // ...getColumnSearchProps('frequency'),
           sorter: (a, b) => a.status.length - b.status.length,
           sortDirections: ['descend', 'ascend']
        },
        // {
        //     title: 'Create Date',
        //     dataIndex: 'created_at',
        //     key: 'createdAt',
        //     width: 100,
        //     // ...getColumnSearchProps('createdAt'),
        //     // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
        //     // sortDirections: ['descend', 'ascend']
        // }, 
            
        {
            title: 'Approved Date',
            dataIndex: 'approvedate',
            key: 'approvedate',
            width: 80,
            // ...getColumnSearchProps('approvedate'),
            // sorter: (a, b) => a.approvedate.length - b.approvedate.length,
            // sortDirections: ['descend', 'ascend']
        }, 
        // {
        //     title: 'Share',
        //     dataIndex: 'risk',
        //     key: 'risk',
        //     width: 100,
        //     // ...getColumnSearchProps('executive'),
        //     sorter: (a, b) => a.risk.length - b.risk.length,
        //     sortDirections: ['descend', 'ascend']
        // }, 
        // { 
        //     key: "action", 
        //     title: "Actions", 
        //     width: 100,
        //     render: (record) => { 
        //         //console.log(JSON.stringify(record))
        //       return (
        //           <> 
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
    return (
    <>
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
                    <select className="form-select" ref={myElementRefBranch} aria-label="Default select example"  id="branchs" name="branch" value={branch} onChange={(e)=>{setBranch(e.target.value);filter()}}  required>
                            <option value="">Select Branch</option>
                            {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                                <option value={item.id}>{item.name}</option>
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
                    <input type="date" className="form-control" id="dates" ref={myElementRefDate} placeholder='Date' value={date} onChange={(e) => {setDate(e.target.value);filter();}} />
                </div>
               
                        {showTable1 ? (
                            <div className="col-12 col-lg-12">
                                <div className="card p-3 ">
                                    <div className="table-responsive">
                                    {(loadingLicense || loadingregsFilter) && <Loading />}
                                        <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 2000 }} sticky={true}/>
                                    </div>
                                </div>
                            </div>                          
                          ) : (
                            // {Object.keys(regsInfoDetailsGetInfo).length > 0 ? <LiseRegsEdit editId={idForEdit} />:
                            // <LiseRegsshare editId={idForShare} />}
                            <LiseRegsEdit editId={idForEdit} />
                          )} 
                        
    </>            
  )
}

export default LisRegsTables;
