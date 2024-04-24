import React from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};




function Companies() {
    return (
        <React.Fragment>
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end border-md-bottom" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <ContentPasteIcon /> New </button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><ContentPasteIcon /> History</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="row">
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Company</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect State</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Branch</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <input type="date" className="form-control" id="" placeholder='start Date' />
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-primary">Save And Apporove</button>
                                        </div>
                                        {/* inner tab start here */}
                                        <div className="col-12 col-lg-12">
                                            <div className="card">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <ul className="nav nav-pills mb-3 bg-light rounded-top overflow-hidden" id="pills-tab" role="tablist">
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end border-md-bottom" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab1" data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home1" aria-selected="true">  Name And Rate</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab2" data-bs-toggle="pill" data-bs-target="#pills-profile2" type="button" role="tab" aria-controls="pills-profile2" aria-selected="false"> Documnet Collection</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="creative-tab3" data-bs-toggle="pill" data-bs-target="#creative-pill3" type="button" role="tab" aria-controls="creative-pill3" aria-selected="false"> Applocation Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill4" data-bs-toggle="pill" data-bs-target="#reject-tab4" type="button" role="tab" aria-controls="reject-tab4" aria-selected="false"> Expences Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill5" data-bs-toggle="pill" data-bs-target="#reject-tab5" type="button" role="tab" aria-controls="reject-tab5" aria-selected="false"> Licence Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill6" data-bs-toggle="pill" data-bs-target="#reject-tab6" type="button" role="tab" aria-controls="reject-tab6" aria-selected="false"> Invoce Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill7" data-bs-toggle="pill" data-bs-target="#reject-tab7" type="button" role="tab" aria-controls="reject-tab7" aria-selected="false"> Company Info</button>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content" id="pills-tabContent">
                                                            <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Licence / Registration Name</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                S & E Registration
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Rate</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <CurrencyRupeeIcon /> 50000
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">
                                                                <div className="row">
                                                                    {/* <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document</th>
                                                                                        <td className='text-success'>Ducument Name</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Date</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Folllow</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Recieved Date</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Status</th>
                                                                                        <td>
                                                                                            <select className="form-select" aria-label="Default select example">
                                                                                                <option selected>Seclect Status</option>
                                                                                                <option value="1">One</option>
                                                                                                <option value="2">Two</option>
                                                                                                <option value="3">Three</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Remark</th>
                                                                                        <td>
                                                                                            Type here
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div> */}

                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document</th>
                                                                                        <td className='text-success'>
                                                                                            <Dragger {...props}>
                                                                                                <p className="d-inline-block ant-upload-drag-icon mx-2">
                                                                                                    <CloudUploadOutlined className='text-secondary' />
                                                                                                </p>
                                                                                                <p className="d-inline-block ant-upload-text"><strong className='text-primary'>Click to Upload</strong> or drag and drop <br /> PDF/PNG/JPG/GIF (max. 400MB)</p>
                                                                                            </Dragger>
                                                                                        </td>
                                                                                        <td className='text-success'>
                                                                                            <Dragger {...props}>
                                                                                                <p className="d-inline-block ant-upload-drag-icon mx-2">
                                                                                                    <CloudUploadOutlined className='text-secondary' />
                                                                                                </p>
                                                                                                <p className="d-inline-block ant-upload-text"><strong className='text-primary'>Click to Upload</strong> or drag and drop <br /> PDF/PNG/JPG/GIF (max. 400MB)</p>
                                                                                            </Dragger>
                                                                                        </td>
                                                                                        <td rowSpan={6}><button className='btn btn-primary'> Add More Docu</button></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Date</th>
                                                                                        <td><input type="date" className="form-control" /></td>
                                                                                        <td><input type="date" className="form-control" /></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Folllow</th>
                                                                                        <td> <input type="date" className="form-control" /></td>
                                                                                        <td> <input type="date" className="form-control" /></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Recieved Date</th>
                                                                                        <td> <input type="date" className="form-control" /></td>
                                                                                        <td> <input type="date" className="form-control" /></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Status</th>
                                                                                        <td>
                                                                                            <select className="form-select" aria-label="Default select example">
                                                                                                <option selected>Seclect Status</option>
                                                                                                <option value="1">One</option>
                                                                                                <option value="2">Two</option>
                                                                                                <option value="3">Three</option>
                                                                                            </select>
                                                                                        </td>
                                                                                        <td>
                                                                                            <select className="form-select" aria-label="Default select example">
                                                                                                <option selected>Seclect Status</option>
                                                                                                <option value="1">One</option>
                                                                                                <option value="2">Two</option>
                                                                                                <option value="3">Three</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Remark</th>
                                                                                        <td>
                                                                                            <input type="text" className='form-control' placeholder='Type here' />
                                                                                        </td>
                                                                                        <td>
                                                                                            <input type="text" className='form-control' placeholder='Type here' />
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="creative-pill3" role="tabpanel" aria-labelledby="creative-tab3">
                                                                <div className="row">
                                                                    {/* <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document</th>
                                                                                        <td className='text-success'>Ducument Name</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Date</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Folllow</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Recieved Date</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Status</th>
                                                                                        <td>
                                                                                            <select className="form-select" aria-label="Default select example">
                                                                                                <option selected>Seclect Status</option>
                                                                                                <option value="1">One</option>
                                                                                                <option value="2">Two</option>
                                                                                                <option value="3">Three</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Remark</th>
                                                                                        <td>
                                                                                            Type here
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div> */}

                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Applid Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Application Status</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>Seclect State</option>
                                                                                                    <option value="1">One</option>
                                                                                                    <option value="2">Two</option>
                                                                                                    <option value="3">Three</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Remark</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Ackowledege</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <Dragger {...props}>
                                                                                                    <p className="d-inline-block ant-upload-drag-icon mx-2">
                                                                                                        <CloudUploadOutlined className='text-secondary' />
                                                                                                    </p>
                                                                                                    <p className="d-inline-block ant-upload-text"><strong className='text-primary'>Click to Upload</strong> or drag and drop <br /> PDF/PNG/JPG/GIF (max. 400MB)</p>
                                                                                                </Dragger>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab4" role="tabpanel" aria-labelledby="reject-pill4">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Fee</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Upload</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <Dragger {...props}>
                                                                                                    <p className="d-inline-block ant-upload-drag-icon mx-2">
                                                                                                        <CloudUploadOutlined className='text-secondary' />
                                                                                                    </p>
                                                                                                    <p className="d-inline-block ant-upload-text"><strong className='text-primary'>Click to Upload</strong> or drag and drop <br /> PDF/PNG/JPG/GIF (max. 400MB)</p>
                                                                                                </Dragger>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Direct Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>InDirect Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Total Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab5" role="tabpanel" aria-labelledby="reject-pill5">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Licence Number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Date Of Issue</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Renewal Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Expire Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>License Upload</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <Dragger {...props}>
                                                                                                    <p className="d-inline-block ant-upload-drag-icon mx-2">
                                                                                                        <CloudUploadOutlined className='text-secondary' />
                                                                                                    </p>
                                                                                                    <p className="d-inline-block ant-upload-text"><strong className='text-primary'>Click to Upload</strong> or drag and drop <br /> PDF/PNG/JPG/GIF (max. 400MB)</p>
                                                                                                </Dragger>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab6" role="tabpanel" aria-labelledby="reject-pill6">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoce Type</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>invoce type</option>
                                                                                                    <option value="1">One</option>
                                                                                                    <option value="2">Two</option>
                                                                                                    <option value="3">Three</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>invoce Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" />
                                                                                            </div></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>invoce number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>invoce submission date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="date" className="form-control" />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab7" role="tabpanel" aria-labelledby="reject-pill7">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Company</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>select comapany</option>
                                                                                                    <option value="1">One</option>
                                                                                                    <option value="2">Two</option>
                                                                                                    <option value="3">Three</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Branch</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>select branch</option>
                                                                                                    <option value="1">One</option>
                                                                                                    <option value="2">Two</option>
                                                                                                    <option value="3">Three</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* inner tab start here */}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row">
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Company</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect State</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Branch</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Branch</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <input type="date" className="form-control" id="" placeholder='start Date' />
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-success">Edit</button>
                                        </div>
                                        <div className="col-md-3 col-lg-14 col-12 mb-2 mb-md-3">
                                            <button type="submit" className="w-100 btn btn-primary">Apporove</button>
                                        </div>
                                        {/* inner tab start here */}
                                        <div className="col-12 col-lg-12">
                                            <div className="card">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <ul className="nav nav-pills mb-3 bg-light rounded-top overflow-hidden" id="pills-tab" role="tablist">
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end border-md-bottom" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab11" data-bs-toggle="pill" data-bs-target="#pills-home11" type="button" role="tab" aria-controls="pills-home11" aria-selected="true">  Name And Rate</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab22" data-bs-toggle="pill" data-bs-target="#pills-profile22" type="button" role="tab" aria-controls="pills-profile22" aria-selected="false"> Documnet Collection</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="creative-tab33" data-bs-toggle="pill" data-bs-target="#creative-pill33" type="button" role="tab" aria-controls="creative-pill33" aria-selected="false"> Applocation Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill44" data-bs-toggle="pill" data-bs-target="#reject-tab44" type="button" role="tab" aria-controls="reject-tab44" aria-selected="false"> Expences Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill55" data-bs-toggle="pill" data-bs-target="#reject-tab55" type="button" role="tab" aria-controls="reject-tab55" aria-selected="false"> Licence Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12 border-end" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill66" data-bs-toggle="pill" data-bs-target="#reject-tab66" type="button" role="tab" aria-controls="reject-tab66" aria-selected="false"> Invoce Details</button>
                                                            </li>
                                                            <li className="nav-item col-md-3 col-lg-14 col-12" role="presentation">
                                                                <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill77" data-bs-toggle="pill" data-bs-target="#reject-tab77" type="button" role="tab" aria-controls="reject-tab77" aria-selected="false"> Company Info</button>
                                                            </li>
                                                        </ul>
                                                        <div className="tab-content" id="pills-tabContent">
                                                            <div className="tab-pane fade show active" id="pills-home11" role="tabpanel" aria-labelledby="pills-home-tab11">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Licence / Registration Name</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                S & E Registration
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Rate</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <CurrencyRupeeIcon /> 50000
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="pills-profile22" role="tabpanel" aria-labelledby="pills-profile-tab22">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document</th>
                                                                                        <td className='text-success'>Ducument Name</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Date</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Request Folllow</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Document Recieved Date</th>
                                                                                        <td> 09/09/2024</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Status</th>
                                                                                        <td>
                                                                                            <select className="form-select" aria-label="Default select example">
                                                                                                <option selected>Seclect Status</option>
                                                                                                <option value="1">One</option>
                                                                                                <option value="2">Two</option>
                                                                                                <option value="3">Three</option>
                                                                                            </select>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Remark</th>
                                                                                        <td>
                                                                                            Type here
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Approve</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="creative-pill33" role="tabpanel" aria-labelledby="creative-tab33">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Applid Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span>  09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Application Status</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>Seclect State</option>
                                                                                                    <option value="1">One</option>
                                                                                                    <option value="2">Two</option>
                                                                                                    <option value="3">Three</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Remark</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Apporove</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab44" role="tabpanel" aria-labelledby="reject-pill44">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Fee</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                09/09/2024
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Chalan Upload</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span className='text-success'>  Document Name</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Direct Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <CurrencyRupeeIcon />  4500.00
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>InDirect Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <CurrencyRupeeIcon />  4500.00
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Total Expenses</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <CurrencyRupeeIcon />  4500.00
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Approve</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab55" role="tabpanel" aria-labelledby="reject-pill55">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Licence Number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Date Of Issue</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span>09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Renewal Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span>09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Expire Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span>09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>License Upload</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <span className='text-success'>  Document Name</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Approve</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab66" role="tabpanel" aria-labelledby="reject-pill66">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoce Type</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>invoce type</option>
                                                                                                    <option value="1">One</option>
                                                                                                    <option value="2">Two</option>
                                                                                                    <option value="3">Three</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>invoce Date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                            <span>09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>invoce number</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <input type="text" className="form-control" placeholder='type here' />
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>invoce submission date</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                            <span>09/09/2024</span>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Approve</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane fade" id="reject-tab77" role="tabpanel" aria-labelledby="reject-pill77">
                                                                <div className="row">
                                                                    <div className="col-lg-12 col-md-12">
                                                                        <div className='table-responsive'>
                                                                            <table class="table">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoce Type</th>
                                                                                        <td>
                                                                                            <div className="col-lg-4 col-md-4">
                                                                                                <select className="form-select" aria-label="Default select example">
                                                                                                    <option selected>Invoce Type</option>
                                                                                                    <option value="1">One</option>
                                                                                                    <option value="2">Two</option>
                                                                                                    <option value="3">Three</option>
                                                                                                </select>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoce Date</th>
                                                                                        <td>
                                                                                        <span>09/09/2024</span>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoce Date</th>
                                                                                        <td>
                                                                                            <div className='col-lg-4 col-md-4'>
                                                                                       <input type="text" placeholder='typpe here' className='form-control' />
                                                                                       </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row" className='bg-light w-lg-25'>Invoce Date</th>
                                                                                        <td>
                                                                                        <span>09/09/2024</span>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-success w-100'>Edit</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary w-100'>Approve</button>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className='btn btn-primary opacity-50 w-100'>Share</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* inner tab start here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Companies