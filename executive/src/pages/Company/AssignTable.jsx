import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import Highlighter from 'react-highlight-words';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, Input, Space, Table ,Modal,Form,message, Upload} from 'antd';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {assignGetTable,stateGets,executiveGet,companyTableGet,branchGet,companyViewAllAssignedFilter} from "../../store/actions/otherActions";
import Loading from '../../components/layout/Loading';
const AssignTable = () =>{
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
    const [company, setCompany] = useState('');
    const [date, setDate] = useState('');
    const [branch, setBranch] = useState([]);
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

    const rejectChecklist = useSelector((state) => state.rejectChecklist);
    const { loadingu,checklistInfoOnReject } = rejectChecklist; 
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    // console.log(stateInfo);
    const getExecutive = useSelector((state) => state.getExecutive);
    const { executiveInfo } = getExecutive;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getCompney = useSelector((state) => state.getCompney);
    const { companyInfo } = getCompney; 
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    const companyAssignTable = useSelector((state) => state.companyAssignTable);
    const { loadingcat,companyAssignTableInfo } = companyAssignTable;
    const compamyVAAFilter = useSelector((state) => state.compamyVAAFilter);
    const { loadingcompanyava,companyFilterVAAInfo } = compamyVAAFilter;
    // console.log(checklistRejectinfo)
    const openInPopupForUpdate = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
        setPageTitle('Edit Compliance');
        setModalWidth('400px');
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
            dispatch(assignGetTable());
        }, 3000);
        
    }  
    useEffect(() => {
      dispatch(stateGets());
      dispatch(executiveGet());
      const elementcompanybranch = myElementRefCompany.current;
      const postBody = {
        id : elementcompanybranch.value
      }
      if (elementcompanybranch) {
        dispatch(branchGet(postBody));
      }
      dispatch(assignGetTable());
      dispatch(companyTableGet());
    },[dispatch])
    const getBbranch = (company) => {
      const elementcompanybranch = myElementRefCompany.current;
      const postBody = {
        id : elementcompanybranch.value
     }
      dispatch(branchGet(postBody));
    }
    useEffect(()=>{
      let companyAssignGetOnTableArr = [];
      if(companyAssignTableInfo!==undefined && companyAssignTableInfo.length>0)
      {
        companyAssignTableInfo.map((item, index) => {
          companyAssignGetOnTableArr.push({
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
      setDataSource(companyAssignGetOnTableArr);
    },[companyAssignTableInfo])
    useEffect(() => {
      let vaaArr = [];
        if (typeof (companyFilterVAAInfo) !== 'undefined' && companyFilterVAAInfo?.length > 0 ) {
            //alert(categoryInfo?.length);
            companyFilterVAAInfo.map((item, index) => {
              vaaArr.push({
                key:index+1,
                id: item._id,
                company:item.company,
                state:item.state,
                branchname: item.branchname,
                executive:item.executive,
                assigndate:formatDate(item.assigndate),
              })
          });
        }
        setDataSource(vaaArr);
    },[companyFilterVAAInfo])
    useEffect(() => {
      resetForm();
    },[companyAssignTableInfo])
    const resetForm = () => {
        // alert(state)
         setState('');
         setCompany('');
         setUser('');
         setBranch('')
    }
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
        // const elementdate = myElementRefDate.current;
        const elementuser = myElementRefUser.current;
        // alert(elementbranch.value)
        const postBody = {
            // created_at:elementdate.value,
            state:elementstate.value,
            company:elementcompany.value,
            branchname:elementbranch.value,
            executive:elementuser.value
        }
        dispatch(companyViewAllAssignedFilter(postBody));
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
          width: 70,
         // ...getColumnSearchProps('key'),
         // sorter: (a, b) => a.key.length - b.key.length,
         // sortDirections: ['descend', 'ascend']
        },
        {
          title: 'Company',
          dataIndex: 'company',
          key: 'company',
          width: 60,
          // ...getColumnSearchProps('company'),
          sorter: (a, b) => a.company.length - b.company.length,
          sortDirections: ['descend', 'ascend']
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            width: 70,
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
    return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">    
                    <div className="row">
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-2 mb-md-2">
                            <label for="" class="form-label">Company</label>
                            <select className="form-select" ref={myElementRefCompany} aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>{setCompany(e.target.value);filter();getBbranch(e.target.value)}} required>
                                <option value="">Select Company</option>
                                {companyGetTableInfo != 'undefind' && companyGetTableInfo?.length > 0 && companyGetTableInfo.map(item => 
                                  <option value={item._id}>{item.companyname}</option>
                                )};
                        </select>
                        </div>
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-2 mb-md-2">
                            <label for="" class="form-label">State</label>
                            <select className="form-select" id="statesr" ref={myElementRefState} aria-label="Default select example"  name="state" value={state} onChange={(e)=>{setState(e.target.value);filter();}}>
                                    <option value="">Select State</option>
                                {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                                    <option value={item._id}>{item.name}</option>
                                )};
                            </select>
                        </div>
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-2 mb-md-2">
                        <label for="cat" class="form-label">Branch </label>
                            <select className="form-select" ref={myElementRefBranch} aria-label="Default select example" id="branch" name="branch" onChange={(e)=>{setBranch(e.target.value);filter()}} value={branch} required>
                                <option value="">Select Branch</option>
                                {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                                    <option value={item._id}>{item.name}</option>
                                )};
                            </select>
                        </div>
                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-2 mb-md-2">
                            <label for="" class="form-label">Executive</label>
                            <select className="form-select" aria-label="Default select example" id="executives" name="executive" ref={myElementRefUser} value={executive} onChange={(e) => {setUser(e.target.value);filter();}} >
                                    <option value="">Select Executive</option>
                                {executiveInfo != 'undefind' && executiveInfo?.length > 0 && executiveInfo.map(item => 
                                    <option value={item._id}>{item.userName}</option>
                                )};
                            </select>
                        </div>
                        {/* <div className="col-md-2 col-lg-15 mb-2 mb-lg-2 mb-md-2">
                            <label for="" class="form-label">Date</label>
                            <input type="date" id="date" ref={myElementRefDate} className="form-control" name="date" placeholder="Select a date" value={date} onChange={(e) => {setDate(e.target.value);filter();}}/>
                        </div> */}
                    </div>    
                    <div className="col-12 col-lg-12">
                      <div className="card p-3 ">
                        <div className="table-responsive">
                        {(loadingcat ) && <Loading />}
                        {/* {showTable1 ? (
                            <Table columns={columns} dataSource={dataSource}  pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 1000 }} sticky={true}/>
                        ) : ( */}
                            <Table dataSource={dataSource} columns={columns1} pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 1100 }} sticky={true}/>
                        {/* )}  */}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>    
    )
}
export default AssignTable;