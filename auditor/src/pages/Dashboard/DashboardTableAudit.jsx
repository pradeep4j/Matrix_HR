import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState,useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table ,Modal,Form} from 'antd';
import {usersGet,auditGetDataAll} from "../../store/actions/otherActions";
import {useDispatch,useSelector} from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import 'antd/dist/reset.css';
import singleuser from '../../../src/singleuser.png'
const DashboardTableAudit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState();
  const [name, setName] = useState();
  const allAuditGet = useSelector((state) => state.allAuditGet);
  const { loadingallAudit,getAllAudit } = allAuditGet;
  const userGet = useSelector((state) => state.userGet);
  const { usersInfo } = userGet; 
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate() )
  const [date, setDate] = useState(defaultDate);
  const [visible, setVisible] = useState(false);
  const onSetDate = (date) => {
    setDate(new Date(date))
  }
  const allAuditCount = getAllAudit?.length?getAllAudit?.length:0;
  useEffect(()=>{
    dispatch(usersGet());
    dispatch(auditGetDataAll());
  },[dispatch])
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
  useEffect(()=>{
    let allAuditArr = [];
    if (typeof(getAllAudit) !=='undefined' && getAllAudit?.length > 0) {
        getAllAudit.map((item, index) => {
            allAuditArr.push({
                key:index+1,
                id: item._id,
                title:item.title,
                company:item.company,
                state:item.state,
                branch:item.branch,
                compliance: item.compliance,
                executive:name?'admin':item.executive,
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
    setDataSource(allAuditArr); 
  },[getAllAudit])
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
    title: <div style={{ fontWeight:'bold',textAlign:'left' }}>Audit({allAuditCount})</div>,
    children: [
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
        ],
    },
  ];

  return (
    <React.Fragment>
        <Table columns={columns} dataSource={dataSource} style={{ overflow:'-moz-hidden-unscrollable' }} pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false,position: ["bottomCenter"] }}  scroll={{ x: 2000 }} />
    </React.Fragment>
  );
};
export default DashboardTableAudit;