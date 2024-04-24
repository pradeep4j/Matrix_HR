import React,{useState,useEffect,useRef} from 'react'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import { FormLabel,styled} from '@mui/material';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table ,Modal,Form,message} from 'antd';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import {stateGets,usersGet,branchGet,companyGet,categoryGet,auditorGet,auditGetDataAll,auditAllFilters,companyTableGet} from "../../store/actions/otherActions";
import { useDispatch,useSelector } from 'react-redux';

const Audit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [dateStart, setStartDate] = useState('');
    const [dateEnd, setEndDate] = useState('');
    const [dateOverDue, setOverDueDate] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [user, setUser] = useState();
    const [auditor, setAuditor] = useState();
    const [state, setState] = useState('');
    const [branch,setBranch] = useState('');
    const [company, setCompany] = useState(''); 
    const [risk, setRisk] = useState(''); 
    const [status, setStatus] = useState(''); 
    const [name, setName] = useState('');
    const myElementRefOverdue = useRef(null);
    const myElementRefState = useRef(null);
    const myElementRefStartdate = useRef(null); 
    const myElementRefEnddate = useRef(null); 
    const myElementRefRisk = useRef(null);
    const myElementRefAuditStatus = useRef(null);
    const myElementRefExecutive = useRef(null); 
    const myElementRefAuditor = useRef(null);
    const myElementRefCompany = useRef(null);
    const myElementRefBranch = useRef(null);
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    //console.log(stateInfo);
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;  
    const getBranch = useSelector((state) => state.getBranch);
    const { branchInfo } = getBranch; 
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    const getAuditor = useSelector((state) => state.getAuditor);
    const { auditorInfo } = getAuditor; 
    const allAuditGet = useSelector((state) => state.allAuditGet);
    const { loadingallAudit,getAllAudit } = allAuditGet;
    // console.log(JSON.stringify(getAllAudit))
    // console.log(getAllAudit.total)
    const filterAllAudit = useSelector((state) => state.filterAllAudit);
    const { auditAllFilterInfo } = filterAllAudit;
    console.log(auditAllFilterInfo)
    useEffect(()=>{
        dispatch(categoryGet());
        dispatch(stateGets());
        dispatch(usersGet());
        const elementcompanybranch = myElementRefCompany.current;
        const postBody = {
          id : elementcompanybranch.value
        }
        if (elementcompanybranch) {
          dispatch(branchGet(postBody));
        }
        dispatch(companyTableGet());
        dispatch(auditorGet());
        dispatch(auditGetDataAll())
    },[dispatch]);
    const getBbranch = (company) => {
      const elementcompanybranch = myElementRefCompany.current;
      const postBody = {
       id : elementcompanybranch.value
     }
      dispatch(branchGet(postBody));
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
          let auditArrAll = [];
              if (typeof (getAllAudit) !== 'undefined' && getAllAudit?.length > 0 ) {
                //alert(categoryInfo?.length);
                getAllAudit.map((item, index) => {
                    auditArrAll.push({
                        key:index+1,
                        id: item._id,
                        title:item.title,
                        company:item.company,
                        branch:item.branch,
                        state:item.state,
                        compliance: item.compliance,
                        executive:item.executive,
                        auditor:item.auditor,
                        start_date:formatDate(item.start_date),
                        end_date:formatDate(item.end_date),
                        overdue:item.overdue,
                        auditstatus:item.auditstatus=='1'?<div style={{ color:'#D89D13' }}>Ongoing</div>:item.auditstatus=='2'?<div style={{ color:'#5E6BCB' }}>Submitted</div>:item.auditstatus=='3'?<div style={{ color:'#34953D' }}>Approved</div>:<div style={{ color:'red' }}>Rejected</div>,
                        risk:item.risk=='Low'?<div style={{ color:'#34953D' }}>{item.risk}</div>:item.risk=='High'?<div style={{ color:'#DF8787' }}>{item.risk}</div>:item.risk=='Medium'?<div style={{ color:'#D89D13' }}>{item.risk}</div>:item.risk=='Very High'?<div style={{ color:'red' }}>{item.risk}</div>:<div style={{ color:'red' }}>{item.risk}</div>,
                        score:item.score
                  })
              });
            }
        setDataSource(auditArrAll);
    },[getAllAudit])
    useEffect(() => {
      setCompany('');
      setBranch('');
      setState('');
      setStartDate('');
      setEndDate('');
      setAuditor('');
      setUser('');
      setOverDueDate('');
      setStatus('');
      setRisk('');
    },[getAllAudit])
    useEffect(() => {
      let auditArrFilterAll = [];
          if (typeof (auditAllFilterInfo) !== 'undefined' && auditAllFilterInfo?.length > 0 ) {
            //alert(categoryInfo?.length);
            auditAllFilterInfo.map((item, index) => {
              auditArrFilterAll.push({
                    key:index+1,
                    id: item._id,
                    title:item.title,
                    company:item.company,
                    state:item.state,
                    branch:item.branch,
                    compliance: item.compliance,
                    executive:item.executive,
                    auditor:item.auditor,
                    start_date:formatDate(item.start_date),
                    end_date:formatDate(item.end_date),
                    overdue:item.overdue,
                    auditstatus:item.auditstatus=='1'?<div style={{ color:'#D89D13' }}>Ongoing</div>:item.auditstatus=='2'?<div style={{ color:'#5E6BCB' }}>Submitted</div>:item.auditstatus=='3'?<div style={{ color:'#34953D' }}>Approved</div>:<div style={{ color:'red' }}>Rejected</div>,
                    risk:item.risk=='Low'?<div style={{ color:'#34953D' }}>{item.risk}</div>:item.risk=='High'?<div style={{ color:'red' }}>{item.risk}</div>:item.risk=='Medium'?<div style={{ color:'#D89D13' }}>{item.risk}</div>:<div style={{ color:'red' }}>{item.risk}</div>,
                    score:item.score
              })
          });
        }
    setDataSource(auditArrFilterAll);
    },[auditAllFilterInfo])
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
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const columns = [
        {
          title: 'Title/ID',
          dataIndex: 'title',
          key: 'title',
          width: 40,
         // ...getColumnSearchProps('key'),
         // sorter: (a, b) => a.key.length - b.key.length,
         // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            width: 80,
            // ...getColumnSearchProps('company'),
            // sorter: (a, b) => a.company.length - b.company.length,
            // sortDirections: ['descend', 'ascend']
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
            dataIndex: 'branch',
            key: 'branch',
            width: 70,
            // ...getColumnSearchProps('branchname'),
            // sorter: (a, b) => a.branchname.length - b.branchname.length,
            // sortDirections: ['descend', 'ascend']
        },        
        {
          title: 'Executive',
          dataIndex: 'executive',
          key: 'executive',
          width: 100,
        //   ...getColumnSearchProps('act'),
        //   sorter: (a, b) => a.act.length - b.act.length,
        //   sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Auditor',
            dataIndex: 'auditor',
            key: 'auditor',
            width: 100,
          //   ...getColumnSearchProps('act'),
          //   sorter: (a, b) => a.act.length - b.act.length,
          //   sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Start Date',
            dataIndex: 'start_date',
            key: 'start_date',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        },
        {
            title: 'End Date',
            dataIndex: 'end_date',
            key: 'end_date',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        },  
        {
            title: 'Over Due Days',
            dataIndex: 'overdue',
            key: 'overdue',
            width: 100,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        },  
        {
            title: 'Status',
            dataIndex: 'auditstatus',
            key: 'auditstatus',
            width: 50,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        },  
        {
            title: 'Risk',
            dataIndex: 'risk',
            key: 'risk',
            width: 50,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        },  
        {
            title: 'Score',
            dataIndex: 'score',
            key: 'score',
            width: 40,
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
    const filter = () => {       
      // const elementstate = myElementRefState.current;
      // const elementcompany = myElementRefCompany.current;
      // const elementbranch = myElementRefBranch.current;
      // const elementexecuitve = myElementRefExecutive.current;
      // const elementauditor = myElementRefAuditor.current;
      // const elementstartdate = myElementRefStartdate.current;
      // const elementenddate = myElementRefEnddate.current;
      // const elementoverdue = myElementRefOverdue.current;
      // const elementstatus = myElementRefAuditStatus.current;
      // const elementrisk = myElementRefRisk.current;
      const postBody = {
          company:myElementRefCompany.current.value,
          state:myElementRefState.current.value,
          branch:myElementRefBranch.current.value,
          executive:myElementRefExecutive.current.value,
          auditor:myElementRefAuditor.current.value,
          start_date:myElementRefStartdate.current.value,
          end_date:myElementRefEnddate.current.value,
          overdue:myElementRefOverdue.current.value,
          auditstatus:myElementRefAuditStatus.current.value,
          risk:myElementRefRisk.current.value,
      }
      dispatch(auditAllFilters(postBody))
    }  
    let day = ["0 Days","1 Days","2 Days","3 Days","4 Days","5 Days","6 Days","7 Days","8 Days","9 Days","10 Days","11 Days","12 Days","13 Days","14 Days","15 Days"];
    return (
        <React.Fragment>
            <div className="row">
                <div className="row g-3">
                    <div className="col-md-15 col-lg-15">
                        <select className="form-select"ref={myElementRefCompany}  aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>{setCompany(e.target.value);filter();getBbranch(e.target.value)}} required>
                            <option value="">Select Company</option>
                            {companyGetTableInfo != 'undefind' && companyGetTableInfo?.length > 0 && companyGetTableInfo.map(item => 
                            <option value={item._id}>{item.companyname}</option>
                        )};
                        </select>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <select className="form-select" ref={myElementRefState} aria-label="Default select example" id="state" name="state" value={state} onChange={(e)=>{setState(e.target.value);filter();}} required>
                            <option value="">Select State</option>
                            {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item => 
                            <option value={item._id}>{item.name}</option>
                        )};
                        </select>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <select className="form-select" ref={myElementRefBranch} aria-label="Default select example" id="branch" name="branch" onChange={(e)=>{setBranch(e.target.value);filter();}} value={branch} required>
                            <option value="">Select Branch</option>
                            {branchInfo != 'undefind' && branchInfo?.length > 0 && branchInfo.map(item => 
                            <option value={item.id}>{item.name}</option>
                        )};
                        </select>
                    </div> 
                    <div className="col-md-15 col-lg-15">
                        <select className="form-select" ref={myElementRefExecutive} aria-label="Default select example" name="users" value={user} onChange={(e)=>{setUser(e.target.value);filter();}}>
                                <option value="">Select Executive</option>
                                {usersInfo != 'undefind' && usersInfo?.length > 0 && usersInfo.map(item => 
                                <option value={item._id}>{item.firstName}{' '}{item.lastName}</option>
                            )};
                        </select>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <select className="form-select" ref={myElementRefAuditor} aria-label="Default select example" name="users" value= {auditor}    onChange={(e)=>{setAuditor(e.target.value);filter();}}>
                            <option value="">Seclect Auditor</option>
                            {auditorInfo != 'undefind' && auditorInfo?.length > 0 && auditorInfo.map(item => 
                            <option value={item._id}>{item.firstName}{' '}{item.lastName}
                            </option>
                            )};
                        </select>                                  
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <label for="" class="form-label" style={{ fontSize:'13px',fontWeight:'bold' }}>Start Date</label>
                        <input type="date" className="form-control" ref={myElementRefStartdate} id="startDate" placeholder='start Date' value={dateStart} onChange={(e) => {setStartDate(e.target.value);filter();}}/>
                    </div>     
                    <div className="col-md-15 col-lg-15">
                        <label for="" class="form-label"  style={{ fontSize:'13px',fontWeight:'bold' }}>End Date</label>
                        <input type="date" className="form-control" ref={myElementRefEnddate} id="endDate" placeholder='End Date' value={dateEnd} onChange={(e) => {setEndDate(e.target.value);filter();}}/>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <label for="" class="form-label"  style={{ fontSize:'13px',fontWeight:'bold' }}>Overdue Days</label>
                        <select type="date" className="form-select" ref={myElementRefOverdue} id="overDueDate" placeholder='Over Due' value={dateOverDue} onChange=    {(e) => {setOverDueDate(e.target.value);filter();}}>
                          <option value="">Over Due Days</option>
                            {day.map((item,index) =>
                              (<option value={index}>{item}</option>)
                            )}
                        </select>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <label for="" class="form-label"  style={{ fontSize:'13px',fontWeight:'bold' }}>Status</label>
                        <select className="form-select" ref={myElementRefAuditStatus} aria-label="Default select example" name="status"  value={status} onChange={(e) => {setStatus(e.target.value);filter();}} required>
                            <option value="">Select Status</option>
                            <option value="1">Ongoing</option>
                            {/* <option value="2">Pending for Discrepancy</option>
                            <option value="3">Incomplete Document</option> */}
                            <option value="2">Submitted</option>
                            <option value="3">Approved</option>
                            <option value="4">Rejected</option>
                        </select>
                    </div>
                    <div className="col-md-15 col-lg-15">
                        <label for="" class="form-label"  style={{ fontSize:'13px',fontWeight:'bold' }}>Risk</label>
                        <select className="form-select" id="risk" ref={myElementRefRisk} aria-label="Default select example" name="risk" value={risk} onChange={(e)=>{setRisk(e.target.value);filter();}} required>
                            <option value="">Select Risk</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Very High">Very High</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-lg-12 mt-4">
                    <div className="card p-3 overflow-hidden">
                        <div className="table-responsive all_tbl">
                            <div className="table-responsive">
                                <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 2000 }} sticky={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}

export default Audit;