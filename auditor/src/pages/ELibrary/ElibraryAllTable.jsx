import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import Highlighter from 'react-highlight-words';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined,UploadOutlined,SearchOutlined,EditOutlined,DeleteOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table ,Modal,Form,message, Checkbox} from 'antd';
import {  useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {usersGet,getElibrary,stateGets,branchGet} from "../../store/actions/otherActions";
import Popup from "../../components/Popup";
import ElibraryEdit from './ElibraryEdit';
import Loading from '../../components/layout/Loading';

const ElibraryAllTable = () => {
    // const {linktab} = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const elibraryGet = useSelector((state) => state.elibraryGet);
    const { loadingget,elibraryGetInfo } = elibraryGet; 
    console.log(elibraryGetInfo);
    const userGet = useSelector((state) => state.userGet);
    const { loadingu,usersInfo } = userGet;  
    const searchInput = useRef(null);
    const [open, setOpen] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [modalHeight, setModalHeight] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [name, setName] = useState('');
    const [editId, setEditId] = useState('');
    const [dataSource, setDataSource] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    let defaultDate = new Date()
    defaultDate.setDate(defaultDate.getDate() )

    //const [date, setDate] = useState(defaultDate)
    const [date, setDate] = useState('');
    // const onSetDate = (event) => {
    //     setDate(new Date(event.target.value))
    // }
    const openInPopupForUpdate = (item) => {
      setRecordForEdit(item);
      setOpenPopup(true);
      setPageTitle('Approve Elibrary');
      setModalWidth('900px');
      // setModalHeight('700px');
  }
  const addOrEdit = (e) => {
      //alert(fromdate+'='+todate+'='+userId+'='+status)
      relodreport(e);
      setRecordForEdit(null);
      setOpenPopup(false);
  }
  const relodreport = async () => {
    setTimeout(() => {
        dispatch(getElibrary());
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
    },[usersInfo]);
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
  
    useEffect(() => {
        dispatch(usersGet());
        dispatch(getElibrary());
    },[dispatch])
    useEffect(() => {
        //  alert('2')
        let elibraryGetInfoArr = [];
          if (typeof (elibraryGetInfo) !== 'undefined' && elibraryGetInfo?.length > 0 ) {
              //alert(categoryInfo?.length);
              elibraryGetInfo.map((item, index) => {
                setEditId(item._id);
                elibraryGetInfoArr.push({
                  key:index+1,
                  id: item._id,
                  status: item.status === 1 ? (
                    <Link className='text-white btn btn-success text-decoration-none mx-2'>Approved</Link>
                ) : (
                    <Link className='text-white btn btn-danger text-decoration-none mx-2'>Pending</Link>
                ),
                  placeholdername:item.placeholdername,
                  category:item.category,
                  image:<a href={item.image} target="_blank">Form</a>,
                  created_at:formatDate(item.created_at),
                  approvedate:(item.approvedate)?formatDate(item.approvedate):(item.approvedate),
                  executive:item.executive,
                  view:<Link className='text-white btn btn-dark text-decoration-none' onClick={(e)=>openInPopupForUpdate(item._id)} >
                  View <VisibilityOffIcon fontSize='medium' />
                </Link>
                })
            });
          }
          setDataSource(elibraryGetInfoArr);
      },[elibraryGetInfo])
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
            title: 'Documents',
            dataIndex: 'image',
            key: 'image',
            width: 50,
        //    ...getColumnSearchProps('image'),
         //   sorter: (a, b) => a.image.length - b.image.length,
         //   sortDirections: ['descend', 'ascend']
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
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          width: 40,
         // ...getColumnSearchProps('frequency'),
         // sorter: (a, b) => a.frequency.length - b.frequency.length,
         // sortDirections: ['descend', 'ascend']
      },  
        {
            title: 'Approved Date',
            dataIndex: 'approvedate',
            key: 'approvedate',
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
            {loadingget && <Loading />}    
            <Table columns={columns} dataSource={dataSource} style={{ overflow:'-moz-hidden-unscrollable' }} pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false ,position: ["bottomCenter"],}} scroll={{ x: 1300 }} sticky={true}/>
            <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth} modalHeight={modalHeight} from="elibrary">
                {(openPopup) && <ElibraryEdit addOrEdit={(e) => addOrEdit(e)} recordForEdit={recordForEdit} />}
            </Popup>
        </React.Fragment>
    )
}

export default ElibraryAllTable;