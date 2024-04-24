import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState,useEffect } from 'react';
import Highlighter from 'react-highlight-words';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, Input, Space, Table ,Modal} from 'antd';
import { EditOutlined,DeleteOutlined } from "@ant-design/icons";
import {categoryGet,categoryEdit,deleteCategory} from "../../store/actions/otherActions";
import {useDispatch,useSelector} from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';

const CategoryTables = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const catGet = useSelector((state) => state.catGet);
const { loading, categoryInfo,error } = catGet;  
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [dataSource, setDataSource] = useState();
  const [editingCategory, setEditingCategory] = useState(null);
//  alert(catGetInfo);
  useEffect(()=>{
    dispatch(categoryGet());
  },[dispatch])
  useEffect(()=>{
    let categoryArr = [];
    if (categoryInfo?.length > 0) {
        categoryInfo.map((item, index) => {
            categoryArr.push({
            key: index+1,
            id: item._id,
            name: item.name,
            dates : formatDate(item.dates)
          })
      });
    }
    setDataSource(categoryArr);
  },[categoryInfo])
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
  const onDeleteCategory = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this category record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          dispatch(deleteCategory(record.id));
          return pre.filter((category) => category.id !== record.id);
        });
      },
    });
};
const onEditCategory = (record) => {
  setIsEditing(true);
  setEditingCategory({ ...record });
};
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingCategory(null);
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
      title: 'Sr. Number',
      dataIndex: 'key',
      key: 'key',
      width: 40,
     // ...getColumnSearchProps('key'),
     // sorter: (a, b) => a.key.length - b.key.length,
     // sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Category Name',
      dataIndex: 'name',
      key: 'name',
      width: 50,
      ...getColumnSearchProps('name'),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Created date',
      dataIndex: 'dates',
      key: 'dates',
      width: 100,
      ...getColumnSearchProps('dates'),
      sorter: (a, b) => a.dates.length - b.dates.length,
      sortDirections: ['descend', 'ascend']
    },
    { 
        key: "action", 
        title: "Actions", 
        width: 150,
        render: (record) => { 
          return (
            <>
              {/* <EditOutlined
                onClick={() => {
                  onEditCategory(record);
                }}
                
              /> */}
              <Link className='text-white btn btn-primary text-decoration-none mx-2' onClick={() => {
                  onEditCategory(record);
                }}> Edit <EditIcon fontSize='mediam' /> </Link>
              {/* <DeleteOutlined
                onClick={(e) => {
                  onDeleteCategory(record);
                }}
                style={{ color: "red", marginLeft: 12 }}
              /> */}
              <Link className='text-white btn btn-danger text-decoration-none mx-2' onClick={(e) => {
                  onDeleteCategory(record);
                }}  style={{ backgroundColor: "red" }}> Delete <ClearIcon fontSize='mediam' /> </Link>
            </>
          );
        }, 
    }, 
  ];

  return (
   <> 
        <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false,position: ["bottomCenter"] }} scroll={{ x: 600 }} />
        <Modal
          okButtonProps={{ style: { width: '220px',backgroundColor:'#293094',color:'white'  } }}
          cancelButtonProps={{ style: { width: '220px',backgroundColor:'#050505',color:'white' } }}
          title="Edit Ctegory"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}CATEGORY_
          onOk={() => {
            setDataSource((pre) => {
              
              return pre.map((category) => {
                if (category.id === editingCategory.id) {
                  const postBody = {
                    name: editingCategory.name,
                    dates: editingCategory.dates
                  }
                  dispatch(categoryEdit(postBody,category.id));
                  //alert((category.name));
                  return editingCategory;
                } else {
                  return category;
                }
              });
            });
            resetEditing();
          }}
        >
          <label for="" class="form-label">Category Name</label>
          <br />
          <input style={{ width:'350px',marginBottom:'10px' }}
            value={editingCategory?.name}
            onChange={(e) => {
              setEditingCategory((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
            type="text" class="form-control"
          />
          <br />
          <label for="" class="form-label">Modified date </label>
          <br />
          <input style={{ width:'350px',marginBottom:'10px' }}
            value={editingCategory?.dates}
            onChange={(e) => {
              setEditingCategory((pre) => {
                return { ...pre, dates: e.target.value };
              });
            }}
            type="date" class="form-control"
          />
          
        </Modal>
  </>
  );
};
export default CategoryTables;