import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState,useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table ,Modal,Form} from 'antd';
import {usersGet} from "../../store/actions/otherActions";
import {useDispatch,useSelector} from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import 'antd/dist/reset.css';
import singleuser from '../../../src/singleuser.png'
const DashboardTableUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userGet = useSelector((state) => state.userGet);
  const { loading, usersInfo,error } = userGet;  
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState();
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate() )
  const [date, setDate] = useState(defaultDate);
  const [visible, setVisible] = useState(false);
  const onSetDate = (date) => {
    setDate(new Date(date))
  }
  const userCount = usersInfo?.length?usersInfo?.length:0;
  useEffect(()=>{
    dispatch(usersGet());
  },[dispatch])
  useEffect(()=>{
    let userArr = [];
    if (usersInfo?.length > 0) {
        usersInfo.map((item, index) => {
            userArr.push({
            key: index+1,
            id: item._id,
            userName: <div><img src={singleuser} style={{ width:"15px", height:"15px",color:'black',marginTop:'0px' }} />&nbsp;&nbsp;&nbsp;{item.userName}</div>,
            role: item.role,
            email: item.email,
            createdAt:formatDate(item.createdAt),
            updatedAt: formatDate(item.updatedAt),
          })
      });
    }
    setDataSource(userArr); 
  },[usersInfo])
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
    title: <div style={{ fontWeight:'bold',textAlign:'left' }}>Users({userCount})</div>,
    children: [
        {
        title: 'Sr. No.',
        dataIndex: 'key',
        key: 'key',
        width: 20,
        // ...getColumnSearchProps('key'),
        // sorter: (a, b) => a.key.length - b.key.length,
        // sortDirections: ['descend', 'ascend']
        },
        {
        title: 'User Name',
        dataIndex: 'userName',
        key: 'userName',
        width: 70,
        ...getColumnSearchProps('userName'),
        sorter: (a, b) => a.userName.length - b.userName.length,
        sortDirections: ['descend', 'ascend']
        },
        {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        width: 20,
        ...getColumnSearchProps('role'),
        sorter: (a, b) => a.role.length - b.role.length,
        sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Email Id',
            dataIndex: 'email',
            key: 'email',
            width: 100,
            ...getColumnSearchProps('email'),
            sorter: (a, b) => a.email.length - b.email.length,
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'Create Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            width: 70,
            ...getColumnSearchProps('createdAt'),
            sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            sortDirections: ['descend', 'ascend']
        }, 
        {
            title: 'Reset Date',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
            width: 70,
            ...getColumnSearchProps('updatedAt'),
            sorter: (a, b) => a.updatedAt.length - b.updatedAt.length,
            sortDirections: ['descend', 'ascend']
        }
        ],
    },
  ];

  return (
    <React.Fragment>
        <Table columns={columns} dataSource={dataSource} style={{ overflow:'-moz-hidden-unscrollable' }} pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false,position: ["bottomCenter"] }}  scroll={{ x: 1200 }} />
    </React.Fragment>
  );
};
export default DashboardTableUser;