import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState,useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table ,Modal,Form} from 'antd';
import {getNotification} from "../../store/actions/otherActions";
import {useDispatch,useSelector} from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import 'antd/dist/reset.css';
const CategoryTables = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getttingNotification = useSelector((state) => state.getttingNotification);
  const { loading, notificationInfo,error } = getttingNotification;
  console.log(notificationInfo);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState();
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate() )
//   defaultDate.setDateUpdate(defaultDate.getDate() )
  const [date, setDate] = useState(defaultDate);
  const [visible, setVisible] = useState(false);
  const onSetDate = (date) => {
    setDate(new Date(date))
  }
  const notificationInfoCount = notificationInfo?.length?notificationInfo?.length:0;
  useEffect(()=>{
    dispatch(getNotification());
  },[dispatch])
  useEffect(()=>{
    let notificationArr = [];
    if (notificationInfo?.length > 0) {
        notificationInfo.map((item, index) => {
            notificationArr.push({
            key: index+1,
            id: item._id,
            label: item.label,
            dates:formatDate(item.dates)
          })
      });
    }
    setDataSource(notificationArr); 
  },[notificationInfo])
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
  const timehourdayyear = () => {
    // Get the current date
    const currentDate = new Date();

    // Assuming you have a MongoDB date stored in a variable called 'mongoDate'
    // You can retrieve it from MongoDB as per your application's logic
    const mongoDate = new Date("2024-02-29T12:00:00Z"); // Example MongoDB date

    // Calculate the duration in milliseconds
    const durationInMillis = currentDate - mongoDate;

    // Convert milliseconds to different units
    const millisecondsInMinute = 1000 * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const millisecondsInYear = millisecondsInDay * 365.25; // Approximation of a year

    // Calculate duration in different units
    const years = Math.floor(durationInMillis / millisecondsInYear);
    const days = Math.floor((durationInMillis % millisecondsInYear) / millisecondsInDay);
    const hours = Math.floor((durationInMillis % millisecondsInDay) / millisecondsInHour);
    const minutes = Math.floor((durationInMillis % millisecondsInHour) / millisecondsInMinute);

    console.log(`Duration: ${years} years, ${days} days, ${hours} hours, ${minutes} minutes`);

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
    title: <div style={{ fontWeight:'bold',textAlign:'left' }}>Notifications({notificationInfoCount})</div>,
    children: [
        {
        // title: 'Label',
        dataIndex: 'label',
        key: 'label',
        width: 70,
        // ...getColumnSearchProps('label'),
        // sorter: (a, b) => a.label.length - b.label.length,
        // sortDirections: ['descend', 'ascend']
        },
        {
            // title: 'T',
            dataIndex: 'dates',
            key: 'dates',
            width: 50,
            // ...getColumnSearchProps('createdAt'),
            // sorter: (a, b) => a.createdAt.length - b.createdAt.length,
            // sortDirections: ['descend', 'ascend']
        }, 
        // {
        //     title: 'Reset Date',
        //     dataIndex: 'updatedAt',
        //     key: 'updatedAt',
        //     width: 70,
        //     ...getColumnSearchProps('updatedAt'),
        //     sorter: (a, b) => a.updatedAt.length - b.updatedAt.length,
        //     sortDirections: ['descend', 'ascend']
        // }
        ],
    },
  ];

  return (
    <React.Fragment>
        <Table columns={columns} dataSource={dataSource} style={{ overflow:'-moz-hidden-unscrollable' }} pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false,position: ["bottomCenter"] }}  scroll={{ x: 500 }} />
    </React.Fragment>
  );
};
export default CategoryTables;