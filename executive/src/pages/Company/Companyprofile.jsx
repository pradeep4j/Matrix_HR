import React,{useState,useEffect,useRef} from 'react'
import Highlighter from 'react-highlight-words';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table ,Modal,Form,message, Upload} from 'antd';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {companyTableGet,companyGet,usersGet,stateGets,branchGet,liseregAllFilter} from "../../store/actions/otherActions";
import CompanyEdit from './CompanyEdit';
import Loading from '../../components/layout/Loading';
const Companyprofile = (props) => {
    const {linkref} =props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [idForEdit, setIdForEdit] = useState('');
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
    const getCompney = useSelector((state) => state.getCompney);
    const { companyInfo } = getCompney; 
    const getState = useSelector((state) => state.getState);
    const { loadings,stateInfo } = getState;  
    const getCompanyTable = useSelector(state => state.getCompanyTable)
    const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    console.log(companyGetTableInfo)   
    const regsFilter = useSelector(state => state.regsFilter)
    const {loadingregsFilter, regsFilterGetInfo } = regsFilter;
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )
    const onSetDate = (date) => {
      setDate(new Date(date))
    }
    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    const toggleTables = () => {
      // setIdForEdit(id);
      setShowTable1(!showTable1);
  }

  //   const toggleTables = () => {
  //     setShowTable1(!showTable1);
  //     // const elements = [myElementRefCompany, myElementRefState, myElementRefBranch, myElementRefUser, myElementRefDate];
  //     // elements.forEach(ref => {
  //     //     if (ref.current) {
  //     //         ref.current.style.display = showTable1 ? 'none' : 'inline';
  //     //     }
  //     // });
  // }
    const editPage = (id) => {
        setIdForEdit(id)
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
        dispatch(companyGet());
        const elementcompanybranch = myElementRefCompany.current;
        const postBody = {
          id : elementcompanybranch.value
        }
        if (elementcompanybranch) {
          dispatch(branchGet(postBody));
        }
        dispatch(companyTableGet());
    },[dispatch])
    const getBbranch = () => {
      const elementcompanybranch = myElementRefCompany.current;
      const postBody = {
       id : elementcompanybranch.value
     }
      dispatch(branchGet(postBody));
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
    useEffect(() => {
        // alert(showTable1)
        setShowTable1(showTable1);
        if(showTable1===false){
          // toggleTables();
        }
        const elementstate = myElementRefState.current;
        const elementcompany = myElementRefCompany.current;
        const elementbranch = myElementRefBranch.current;
        const elementdate = myElementRefDate.current;
        const elementuser = myElementRefUser.current;
        if(elementstate){
          elementstate.style.display='none';
        }
        if(elementcompany){
          elementcompany.style.display='none';
        }
        if(elementdate){
          elementdate.style.display='none';
        }
        if(elementuser){
          elementuser.style.display='none';
        }
        if(elementbranch){
          elementbranch.style.display='none';
        }
        // let branchenaming;
        let companyTableArrAll = [];
            if (typeof (companyGetTableInfo) !== 'undefined' && companyGetTableInfo?.length > 0 ) {
              companyGetTableInfo.map((item, index) => {
               if (item.F1branch && item.F1branch.length > 0) {
                // alert('if')
                let branchNames = item.F1branch.map(branch => branch.name).join(', ');
                let branchCount = item.F1branch?.length || 0; // Get the count of objects in F1branch array
                companyTableArrAll.push({
                    key: index + 1,
                    id: item._id,
                    companyname: item.companyname,
                    companystate: item.companystate,
                    branchenames: branchNames,
                    totalBranches: branchCount,
                    executive:item.executive,
                    created_at: item.created_at ? formatDate(item.created_at) : item.created_at,
                    license: item.license,
                    status: item.status === 1 ? (
                        <a href="#" className='text-white btn btn-success text-decoration-none mx-2'>Approved</a>
                    ) : (
                      <a onClick={() => { toggleTables(); editPage(item._id) }}>
                        <Link className='text-white btn btn-danger text-decoration-none mx-2'>Pending</Link>
                      </a>
                    ),
                    updated_at: item.updated_at ? formatDate(item.updated_at) : item.updated_at,
                    approvedate: item.approvedate ? formatDate(item.approvedate) : item.approvedate,
                });
            } else {
              // alert('else')
                companyTableArrAll.push({
                    key: index + 1,
                    id: item._id,
                    companyname: item.companyname,
                    companystate: item.companystate,
                    branchenames: '',
                    totalBranches: 0,
                    executive:item.executive,
                    created_at: item.created_at ? formatDate(item.created_at) : item.created_at,
                    license: item.license,
                    status: item.status === 1 ? (
                        <a href="#" className='text-white btn btn-success text-decoration-none mx-2'>Approved</a>
                    ) : (
                        <a onClick={(e) => { toggleTables(); editPage(item._id) }}>
                            <Link className='text-white btn btn-danger text-decoration-none mx-2'>Pending</Link>
                        </a>
                    ),
                    updated_at: item.updated_at ? formatDate(item.updated_at) : item.updated_at,
                    approvedate: item.approvedate ? formatDate(item.approvedate) : item.approvedate,
                });
            }
        });
          }
          setDataSource(companyTableArrAll);
      },[companyGetTableInfo])
    //   useEffect(() => {
    //     // setShowTable1(showTable1);
    //     // if(showTable1===false){
    //     //   toggleTables();
    //     // }
    //     // const elementstate = myElementRefState.current;
    //     // const elementcompany = myElementRefCompany.current;
    //     // const elementbranch = myElementRefBranch.current;
    //     // const elementdate = myElementRefDate.current;
    //     // const elementuser = myElementRefUser.current;
    //     // elementstate.style.display='inline';
    //     // elementcompany.style.display='inline';
    //     // elementdate.style.display='inline';
    //     // elementuser.style.display='inline';
    //     // elementbranch.style.display='inline';
    //     let regsArrFilterAll = [];
    //         if (typeof (regsFilterGetInfo) !== 'undefined' && regsFilterGetInfo?.length > 0 ) {
    //           regsFilterGetInfo.map((item, index) => {
    //             regsArrFilterAll.push({
    //                   key:index+1,
    //                   id: item._id,
    //                   company:item.company,
    //                   state:item.state,
    //                   branchname:item.branch,
    //                   executive:name?'admin':item.executive,
    //                   regNo: item.regNo,
    //                   created_at:formatDate(item.created_at),
    //                   status:item.status ===1 ? <a href="#" className='text-white btn btn-success text-decoration-none mx-2' disabled>Approved</a>:<a onClick={(e)=>{toggleTables(e);editPage(item._id)}} disabled={false}><Link className='text-white btn btn-danger text-decoration-none mx-2' >Pending</Link></a>,
    //                   approvedate:(item.approvedate)?formatDate(item.approvedate):(item.approvedate),

    //             })
    //         });
    //       }
    //       setDataSource(regsArrFilterAll);
    // },[regsFilterGetInfo])
   
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
        },
        {
          title: 'Company',
          dataIndex: 'companyname',
          key: 'companyname',
          width: 70,
        },
        {
            title: 'State',
            dataIndex: 'companystate',
            key: 'companystate',
            width: 80,
        },
        {
            title: 'Branch Name',
            dataIndex: 'branchenames',
            key: 'branchenames',
            width: 70,
        },            
        {
            title: 'Total Branch',
            dataIndex: 'totalBranches',
            key: 'totalBranches',
            width: 70,
        },
        {
            title: 'Executive',
            dataIndex: 'executive',
            key: 'executive',
            width: 70,
        },   
        {
            title: 'Onborad Date',
            dataIndex: 'created_at',
            key: 'created_at',
            width: 80,
        },
        {
            title: 'Profile',
            dataIndex: 'status',
            key: 'status',
            width: 70,
        },
        {
            title: 'Reason',
            dataIndex: 'reason',
            key: 'reason',
            width: 100,
        }, 
        {
            title: 'Approved Date',
            dataIndex: 'approvedate',
            key: 'approvedate',
            width: 80,
        }, 
        {
            title: 'License',
            dataIndex: 'license',
            key: 'license',
            width: 100,
        }, 
    ]; 
    return (
    <>
                <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                    <select className="form-select" ref={myElementRefCompany} aria-label="Default select example" id="company" name="company" value={company} onChange={(e)=>{setCompany(e.target.value);filter();getBbranch()}} required>
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
                    <input type="date" className="form-control" id="dates" ref={myElementRefDate} placeholder='Date' value={date} onChange={(e) => {setDate(e.target.value);filter();}} />
                </div>
                         {showTable1===true ? (
                            <div className="col-12 col-lg-12">
                                <div className="card p-3 ">
                                    <div className="table-responsive">
                                    {loadingcompanytable && <Loading />}
                                        <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 4, showSizeChanger: false, position: ["bottomCenter"],}}  scroll={{ x: 2000 }} sticky={true}/>
                                    </div>
                                </div>
                            </div>                          
                           ) : ( 
                          
                            <CompanyEdit editId={idForEdit} refreshctab={linkref}/> 
                            )} 
    </>            
  )
}
export default Companyprofile;