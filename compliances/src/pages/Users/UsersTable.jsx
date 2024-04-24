import { SearchOutlined } from '@ant-design/icons';
import React, { useRef, useState,useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table ,Modal,Form} from 'antd';
import { EditOutlined,DeleteOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import {usersGet,userEdit,deleteUser} from "../../store/actions/otherActions";
import {useDispatch,useSelector} from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import moment from 'moment';
import 'antd/dist/reset.css';
const UsersTable = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const userGet = useSelector((state) => state.userGet);
const { loading, usersInfo,error } = userGet;  
const userEdits = useSelector((state) => state.userEdits);
const { loadings, userEditInfo } = userEdits;  
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState();
  const [editingUser, setEditingUser] = useState(null);
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate() )
//   defaultDate.setDateUpdate(defaultDate.getDate() )
  const [date, setDate] = useState(defaultDate);
  const [visible, setVisible] = useState(false);
  const onSetDate = (date) => {
    setDate(new Date(date))
  }
//  alert(catGetInfo);
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
            userName: item.userName,
            role: item.role,
            email: item.email,
            password: item.realpassword,
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
  const onDeleteUer = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this user record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          // alert(record.id);return;
          dispatch(deleteUser(record.id));
          return pre.filter((category) => category.id !== record.id);
        });
      },
    });
};
const onEditUser = (record) => {
  setIsEditing(true);
  setEditingUser({ ...record });
};
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingUser(null);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const PasswordCell = ({ password }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <Space>
        {showPassword ? (
          <EyeOutlined onClick={togglePasswordVisibility} />
        ) : (
          
          <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
        )}
        {showPassword && password?.length !==undefined ? password : '*'.repeat(password?.length)}
      </Space>
    );
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
        title: 'Password',
        
        width: '10%',
        render: (text, record) => (
            <PasswordCell password={text} />
        ),
        dataIndex: 'password',
        key: 'password',
        //...getColumnSearchProps('password'),
       //sorter: (a, b) => a.password.length - b.password.length,
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
    },             
    { 
        key: "action", 
        title: "Actions", 
        width: 150,
        render: (record) => { 
            //console.log(JSON.stringify(record))
          return (
            <>
             <Link className='text-white btn btn-primary text-decoration-none mx-2' onClick={() => {
                  onEditUser(record);
                }}> Edit <EditIcon fontSize='mediam' /> </Link>
              {/* <EditOutlined
                onClick={() => {
                  onEditUser(record);
                }}
              /> */}
              <Link className='text-white btn btn-danger text-decoration-none mx-2' onClick={(e) => {
                  onDeleteUer(record);
                }}  style={{ backgroundColor: "red" }}> Delete <ClearIcon fontSize='mediam' /> </Link>
              {/* <DeleteOutlined
                onClick={(e) => {
                  onDeleteUer(record);
                }}
                style={{ color: "red", marginLeft: 12 }}
              /> */}
            </>
          );
        }, 
    }, 
  ];
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <React.Fragment>
        <Table columns={columns} dataSource={dataSource} style={{ overflow:'-moz-hidden-unscrollable' }} pagination={{ pageSize: 4, /*total: 50,*/ showSizeChanger: false,position: ["bottomCenter"] }}  scroll={{ x: 1600 }} />
        <Modal
          okButtonProps={{ style: { width: '220px',backgroundColor:'#293094',color:'white'  } }}
          cancelButtonProps={{ style: { width: '220px',backgroundColor:'#050505',color:'white' } }}
          title="Edit User"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          
          onOk={() => {
            setDataSource((pre) => {
              
              return pre.map((user) => {
                if (user.id === editingUser.id) {
                  const names = (editingUser.userName).split(" ");
                  let firstname = "";
                  let lastname = "";
                  if(names[0]){
                    firstname =  names[0];
                  }
                  if(names[1]){
                    lastname =  names[1];
                  }
                  //alert(editingUser.password); return;
                  const postBody = {
                    firstName: firstname,
                    lastName: lastname,
                    userName:editingUser.userName,
                    role:editingUser.role,
                    email: editingUser.email,
                    password: editingUser.password
                  }
                 // console.log(JSON.stringify(postBody)); return;
                 //alert(user.id) 
                  dispatch(userEdit(postBody,editingUser.id));
                  //alert((category.name));
                  return editingUser;
                } else {
                  return user;
                }
              });
            });
            resetEditing();
          }}
        >
          <label for="" class="form-label">User Name</label>
          <br />
          <input style={{ width:'350px',marginBottom:'10px' }}
            value={editingUser?.userName}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, userName: e.target.value };
              });
            }}
            type="text" class="form-control" required
          />
          <br />
          <label for="" class="form-label">Role</label>
          <br />
          <select id="role" name="role" class="form-control" style={{width:'350px'}} value={editingUser?.role}  onChange={(e) => {
                setEditingUser((pre) => {
                return { ...pre, role: e.target.value };
              });
            }} required>
                
                {/* <option value="" >Select Role</option> */}
                <option value="Executive(Matrix)">Executive(Matrix)</option>
                <option value="Companey CEO">Companey CEO</option>
                <option value="Executive">Executive</option>
                <option value="Auditor">Auditor</option>
          </select>
          <br />
           <label for="" class="form-label">Email</label>
          <br />
          <input style={{ width:'350px',marginBottom:'10px' }}
            value={editingUser?.email}
            onChange={(e) => {
                setEditingUser((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
            type="text" class="form-control" required
          />
          <br />
           <label for="" class="form-label">Password</label>
          <br />
          <input style={{ width:'350px',marginBottom:'10px' }}
            value={editingUser?.password}
            onChange={(e) => {
                setEditingUser((pre) => {
                return { ...pre, password: e.target.value };
              });
            }}
            type="text" class="form-control" required
          />
 
        </Modal>
    </React.Fragment>
  );
};
export default UsersTable;