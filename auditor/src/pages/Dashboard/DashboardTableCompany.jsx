import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState,useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table ,Modal,Form} from 'antd';
import {companyTableGet} from "../../store/actions/otherActions";
import {useDispatch,useSelector} from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import 'antd/dist/reset.css';
import singleuser from '../../../src/singleuser.png'
const DashboardTableUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getCompanyTable = useSelector(state => state.getCompanyTable)
  const {loadingcompanytable, companyGetTableInfo } = getCompanyTable;
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
  const companyCount = companyGetTableInfo?.length?companyGetTableInfo?.length:0;
  useEffect(()=>{
    dispatch(companyTableGet());
  },[dispatch])
  useEffect(()=>{
    let userArr = [];
    if (companyGetTableInfo?.length > 0) {
        companyGetTableInfo.map((item, index) => {
            userArr.push({
            key: index+1,
            id: item._id,
            companyname: item.companyname,
            companyaddress: item.companyaddress,
            // companydistrict: item.companydistrict,
          })
      });
    }
    setDataSource(userArr); 
  },[companyGetTableInfo])
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
    title: <div style={{ fontWeight:'bold',textAlign:'left' }}>Companies({companyCount})</div>,
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
        title: 'Company Name',
        dataIndex: 'companyname',
        key: 'companyname',
        width: 70,
        // ...getColumnSearchProps('companyname'),
        sorter: (a, b) => a.companyname.length - b.companyname.length,
        sortDirections: ['descend', 'ascend']
        },
        {
        title: 'Company Address',
        dataIndex: 'companyaddress',
        key: 'companyaddress',
        width: 20,
        // ...getColumnSearchProps('role'),
        sorter: (a, b) => a.companyaddress.length - b.companyaddress.length,
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