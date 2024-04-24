import React from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EditIcon from '@mui/icons-material/Edit';
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
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end border-md-bottom" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">  Company Profile</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> Create New</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12 border-end" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="creative-tab" data-bs-toggle="pill" data-bs-target="#creative-pill" type="button" role="tab" aria-controls="creative-pill" aria-selected="false"> Company Interection</button>
                                </li>
                                <li className="nav-item col-md-6 col-lg-3 col-12" role="presentation">
                                    <button className="nav-link w-100 rounded-0 text-dark" id="reject-pill" data-bs-toggle="pill" data-bs-target="#reject-tab" type="button" role="tab" aria-controls="reject-tab" aria-selected="false"> Assign Compliances</button>
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
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Seclect Excutive</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                            <input type="date" className="form-control" id="" placeholder='start Date' />
                                        </div>
                                        <div className="col-12 col-lg-12">
                                            <div className="card p-3 ">
                                                <div className="table-responsive">
                                                    <table className="table table-striped all_tbl">
                                                        <thead>
                                                            <tr className='align-middle'>
                                                                <th scope="col">Sr .No</th>
                                                                <th scope="col">Company</th>
                                                                <th scope="col">state</th>
                                                                <th scope="col">Branch Name</th>
                                                                <th scope="col">Total Branch</th>
                                                                <th scope="col">Excutive</th>
                                                                <th scope="col">OnBoard Date</th>
                                                                <th scope="col">Profile</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>xyz</td>
                                                                <td>UP</td>
                                                                <td><span className='text-warning'>Branch Name</span></td>
                                                                <td>05</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-success'>Complate And Apporove</span></td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>xyz</td>
                                                                <td>UP</td>
                                                                <td><span className='text-warning'>Branch Name</span></td>
                                                                <td>05</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Complate And Apporove</span></td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>xyz</td>
                                                                <td>UP</td>
                                                                <td><span className='text-warning'>Branch Name</span></td>
                                                                <td>05</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Complate And Apporove</span></td>
                                                            </tr>
                                                            <tr className='align-middle'>
                                                                <td>01</td>
                                                                <td>xyz</td>
                                                                <td>UP</td>
                                                                <td><span className='text-warning'>Branch Name</span></td>
                                                                <td>05</td>
                                                                <td>Rajesh</td>
                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                <td><span className='text-danger'>Complate And Apporove</span></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end border-md-bottom" role="presentation">
                                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab-creat" data-bs-toggle="pill" data-bs-target="#pills-home-creat" type="button" role="tab" aria-controls="pills-home-creat" aria-selected="true"> View All </button>
                                                </li>
                                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end" role="presentation">
                                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab-creat-li" data-bs-toggle="pill" data-bs-target="#pills-profile-creat-li" type="button" role="tab" aria-controls="pills-profile-creat-li" aria-selected="false">Approve</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="pills-home-creat" role="tabpanel" aria-labelledby="pills-home-tab-creat">
                                                    <div className="row">
                                                        <div className="col-md-12 col-lg-9 mb-3">
                                                            <label for="" className="form-label">write a name of the company as per registration</label>
                                                            <input type="text" className='form-control' placeholder='write company name' />
                                                        </div>
                                                        <div className="col-md-12 col-lg-3">
                                                            <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                            <button className='btn btn-primary w-100'><AddCircleOutlineIcon /> Add More Branches</button>
                                                        </div>
                                                        <div className='row'>
                                                            <div className="col-12 col-lg-12">
                                                                <div className="card p-3 position-relative">
                                                                    <div className="table-responsive">
                                                                        <table className="table table-striped creat_tbl">
                                                                            <thead>
                                                                                <tr className='align-middle'>
                                                                                    <th>Sr .No</th>
                                                                                    <th>Title</th>
                                                                                    <th>Details</th>
                                                                                    <th>Upload</th>
                                                                                    <th>Remark</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td colSpan={4}>
                                                                                       <h4>A. General</h4>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">write a name of the company as per registration</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">write a name of the company as per registration</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr className='align-middle'>
                                                                                    <td>01</td>
                                                                                    <td>
                                                                                        <label class="form-label">write a name of the company as per registration</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Details</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                        <Dragger {...props}>
                                                                                            <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                <CloudUploadOutlined className='text-white' />
                                                                                            </p>
                                                                                        </Dragger>
                                                                                    </td>
                                                                                    <td>
                                                                                        <label class="form-label">Remark</label>
                                                                                        <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12 col-md-12 mt-3'>
                                                                <button className='btn btn-primary w-100'>Save and submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pills-profile-creat-li" role="tabpanel" aria-labelledby="pills-profile-tab-creat-li">
                                                    <div className='row'>
                                                        <div className="col-md-12 col-lg-6 mb-3">
                                                            <label for="" className="form-label">write a name of the company as per registration</label>
                                                            <input type="text" className='form-control' placeholder='write company name' />
                                                        </div>
                                                        <div className="col-md-12 col-lg-6 mb-3">
                                                            <label class="d-lg-block d-md-block d-none mt-2">&nbsp;</label>
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>Seclect State</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-12 col-lg-12">
                                                            <div className="card p-3 position-relative">
                                                                <div className="table-responsive">
                                                                    <table className="table table-striped creat_tbl">
                                                                        <thead>
                                                                            <tr className='align-middle'>
                                                                                <th>Sr .No</th>
                                                                                <th>Title</th>
                                                                                <th>Upload</th>
                                                                                <th>Activsted DAte</th>
                                                                                <th>Expiry Date</th>
                                                                                <th>Renewal Date</th>
                                                                                <th>Details</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr className='align-middle'>
                                                                                <td>01</td>
                                                                                <td>
                                                                                    <label class="form-label">Write A Label</label>
                                                                                    <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                </td>
                                                                                <td>
                                                                                    <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                    <Dragger {...props}>
                                                                                        <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                            <CloudUploadOutlined className='text-white' />
                                                                                        </p>
                                                                                    </Dragger>
                                                                                </td>
                                                                                <td>
                                                                                    <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                    <input type="date" class="form-control" />
                                                                                </td>
                                                                                <td>
                                                                                    <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                    <input type="date" class="form-control" />
                                                                                </td>
                                                                                <td>
                                                                                    <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                    <input type="date" class="form-control" />
                                                                                </td>
                                                                                <td>
                                                                                    <label class="form-label">Details</label>
                                                                                    <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-12 col-md-12 mt-3'>
                                                            <button className='btn btn-primary w-100'>Save and submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="creative-pill" role="tabpanel" aria-labelledby="creative-tab">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end border-md-bottom" role="presentation">
                                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab-inte" data-bs-toggle="pill" data-bs-target="#pills-home-inte" type="button" role="tab" aria-controls="pills-home-inte" aria-selected="true"> View  </button>
                                                </li>
                                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end" role="presentation">
                                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab-inte" data-bs-toggle="pill" data-bs-target="#pills-profile-inte" type="button" role="tab" aria-controls="pills-profile-inte" aria-selected="false">History</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="pills-home-inte" role="tabpanel" aria-labelledby="pills-home-tab-inte">
                                                    <div className="row">
                                                        <div className='col-lg-12 col-md-12'>
                                                            <div className='row'>
                                                                <div className=' col-lg-3'>
                                                                    <ul className="nav nav-pills mb-3 p-0 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                                                        <li className="nav-item col-lg-6 col-md-6 col-6 border-end border-md-bottom" role="presentation">
                                                                            <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab-pro" data-bs-toggle="pill" data-bs-target="#pills-home-pro" type="button" role="tab" aria-controls="pills-home-pro" aria-selected="true"> Profile </button>
                                                                        </li>
                                                                        <li className="nav-item col-lg-6 col-md-6 col-6" role="presentation">
                                                                            <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab-li" data-bs-toggle="pill" data-bs-target="#pills-profile-li" type="button" role="tab" aria-controls="pills-profile-li" aria-selected="false">Licence</button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-4 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>Seclect Branch</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-4 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>Seclect Excutive</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-4 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>Seclect Excutive</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="tab-content" id="pills-tabContent">
                                                                <div className="tab-pane fade show active" id="pills-home-pro" role="tabpanel" aria-labelledby="pills-home-tab-pro">
                                                                    <div className='row'>
                                                                        <div className="col-12 col-lg-12">
                                                                            <div className="card p-3 position-relative">
                                                                                <div className="table-responsive">
                                                                                    <table className="table table-striped creat_tbl">
                                                                                        <thead>
                                                                                            <tr className='align-middle'>
                                                                                                <th>Sr .No</th>
                                                                                                <th>Title</th>
                                                                                                <th>Details</th>
                                                                                                <th>Upload</th>
                                                                                                <th>Remark</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr className='align-middle'>
                                                                                                <td>01</td>
                                                                                                <td>
                                                                                                    <label class="form-label">Write A Label</label>
                                                                                                    <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                                </td>
                                                                                                <td>
                                                                                                    <label class="form-label">Details</label>
                                                                                                    <input type="text" class="form-control" placeholder="Write here" />
                                                                                                </td>
                                                                                                <td>
                                                                                                    <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                                    <Dragger {...props}>
                                                                                                        <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                            <CloudUploadOutlined className='text-white' />
                                                                                                        </p>
                                                                                                    </Dragger>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <label class="form-label">Remark</label>
                                                                                                    <input type="text" class="form-control" placeholder="Write here" />
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-lg-12 col-md-12 mt-3'>
                                                                            <button className='btn btn-primary w-100'>Save and submit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="pills-profile-li" role="tabpanel" aria-labelledby="pills-profile-tab-li">
                                                                    <div className='row'>
                                                                        <div className="col-12 col-lg-12">
                                                                            <div className="card p-3 position-relative">
                                                                                <div className="table-responsive">
                                                                                    <table className="table table-striped creat_tbl">
                                                                                        <thead>
                                                                                            <tr className='align-middle'>
                                                                                                <th>Sr .No</th>
                                                                                                <th>Title</th>
                                                                                                <th>Upload</th>
                                                                                                <th>Activsted DAte</th>
                                                                                                <th>Expiry Date</th>
                                                                                                <th>Renewal Date</th>
                                                                                                <th>Details</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr className='align-middle'>
                                                                                                <td>01</td>
                                                                                                <td>
                                                                                                    <label class="form-label">Write A Label</label>
                                                                                                    <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                                </td>
                                                                                                <td>
                                                                                                    <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                                    <Dragger {...props}>
                                                                                                        <p className="ant-upload-drag-icon bg-primary rounded mb-0">
                                                                                                            <CloudUploadOutlined className='text-white' />
                                                                                                        </p>
                                                                                                    </Dragger>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                                    <input type="date" class="form-control" />
                                                                                                </td>
                                                                                                <td>
                                                                                                    <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                                    <input type="date" class="form-control" />
                                                                                                </td>
                                                                                                <td>
                                                                                                    <label class="d-lg-block d-md-none d-none">&nbsp;</label>
                                                                                                    <input type="date" class="form-control" />
                                                                                                </td>
                                                                                                <td>
                                                                                                    <label class="form-label">Details</label>
                                                                                                    <input type="text" class="form-control" placeholder="Write A  placeholder" />
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-lg-12 col-md-12 mt-3'>
                                                                            <button className='btn btn-primary w-100'>Save and submit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pills-profile-inte" role="tabpanel" aria-labelledby="pills-profile-tab-inte">
                                                    <div className="row">
                                                        <div className='col-lg-12 col-md-12'>
                                                            <div className='row'>
                                                                <div className='col-lg-3'>
                                                                    <ul className="nav nav-pills mb-3 p-0 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                                                        <li className="nav-item col-lg-6 col-md-6 col-6 border-end border-md-bottom" role="presentation">
                                                                            <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab-profile" data-bs-toggle="pill" data-bs-target="#pills-home-profile" type="button" role="tab" aria-controls="pills-home-profile" aria-selected="true"> Profile </button>
                                                                        </li>
                                                                        <li className="nav-item col-lg-6 col-md-6 col-6" role="presentation">
                                                                            <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab-licence" data-bs-toggle="pill" data-bs-target="#pills-profile-licence" type="button" role="tab" aria-controls="pills-profile-licence" aria-selected="false">Licence</button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-4 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>Seclect Branch</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-4 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                                                    <select className="form-select" aria-label="Default select example">
                                                                        <option selected>Seclect Excutive</option>
                                                                        <option value="1">One</option>
                                                                        <option value="2">Two</option>
                                                                        <option value="3">Three</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-md-4 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                                                    <input type="date" className='form-control' />
                                                                </div>
                                                            </div>
                                                            <div className="tab-content" id="pills-tabContent">
                                                                <div className="tab-pane fade show active" id="pills-home-profile" role="tabpanel" aria-labelledby="pills-home-tab-profile">
                                                                    <div className='row'>
                                                                        <div className="col-12 col-lg-12">
                                                                            <div className="card p-3 position-relative">
                                                                                <div className="table-responsive">
                                                                                    <table className="table table-striped creat_tbl">
                                                                                        <thead>
                                                                                            <tr className='align-middle'>
                                                                                                <th>Sr .No</th>
                                                                                                <th>Company</th>
                                                                                                <th>Excutive</th>
                                                                                                <th>Sent Date</th>
                                                                                                <th>Status</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr className='align-middle'>
                                                                                                <td>01</td>
                                                                                                <td>
                                                                                                    olx
                                                                                                </td>
                                                                                                <td>
                                                                                                    Rajesh
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>23/12/2024</span>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>Recieved</span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr className='align-middle'>
                                                                                                <td>01</td>
                                                                                                <td>
                                                                                                    olx
                                                                                                </td>
                                                                                                <td>
                                                                                                    Rajesh
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>23/12/2024</span>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>Recieved</span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr className='align-middle'>
                                                                                                <td>01</td>
                                                                                                <td>
                                                                                                    olx
                                                                                                </td>
                                                                                                <td>
                                                                                                    Rajesh
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>23/12/2024</span>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>Recieved</span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="tab-pane fade" id="pills-profile-licence" role="tabpanel" aria-labelledby="pills-profile-tab-licence">
                                                                    <div className='row'>
                                                                        <div className="col-12 col-lg-12">
                                                                            <div className="card p-3 position-relative">
                                                                                <div className="table-responsive">
                                                                                    <table className="table table-striped creat_tbl">
                                                                                        <thead>
                                                                                            <tr className='align-middle'>
                                                                                                <th>Sr .No</th>
                                                                                                <th>Company</th>
                                                                                                <th>Excutive</th>
                                                                                                <th>Sent Date</th>
                                                                                                <th>Status</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr className='align-middle'>
                                                                                                <td>01</td>
                                                                                                <td>
                                                                                                    olx
                                                                                                </td>
                                                                                                <td>
                                                                                                    Rajesh
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>23/12/2024</span>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>Recieved</span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr className='align-middle'>
                                                                                                <td>01</td>
                                                                                                <td>
                                                                                                    olx
                                                                                                </td>
                                                                                                <td>
                                                                                                    Rajesh
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>23/12/2024</span>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>Recieved</span>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr className='align-middle'>
                                                                                                <td>01</td>
                                                                                                <td>
                                                                                                    olx
                                                                                                </td>
                                                                                                <td>
                                                                                                    Rajesh
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>23/12/2024</span>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <span className='text-success'>Recieved</span>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="reject-tab" role="tabpanel" aria-labelledby="reject-pill">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <ul className="nav nav-pills mb-3 bg-light rounded overflow-hidden" id="pills-tab" role="tablist">
                                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end border-md-bottom" role="presentation">
                                                    <button className="nav-link w-100 rounded-0 text-dark active" id="pills-home-tab1" data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home1" aria-selected="true"> View All </button>
                                                </li>
                                                <li className="nav-item col-md-6 col-lg-6 col-12 border-end" role="presentation">
                                                    <button className="nav-link w-100 rounded-0 text-dark" id="pills-profile-tab2" data-bs-toggle="pill" data-bs-target="#pills-profile2" type="button" role="tab" aria-controls="pills-profile2" aria-selected="false">Assign</button>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>Seclect State</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>Seclect Branch</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>Seclect Excutive</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-lg-3 mb-2 mb-lg-3 mb-md-3">
                                                            <input type="date" className="form-control" />
                                                        </div>
                                                        <div className="col-12 col-lg-12">
                                                            <div className="card p-3 ">
                                                                <div className="table-responsive">
                                                                    <table className="table table-striped all_tbl">
                                                                        <thead>
                                                                            <tr className='align-middle'>
                                                                                <th scope="col">Sr .No</th>
                                                                                <th scope="col">Comapny</th>
                                                                                <th scope="col">State</th>
                                                                                <th scope="col">Branch Name</th>
                                                                                <th scope="col">Excutive</th>
                                                                                <th scope="col">Assigned Date</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr className='align-middle'>
                                                                                <td>01</td>
                                                                                <td>olx</td>
                                                                                <td>Uttar Pradesh</td>
                                                                                <td>Branch Name</td>
                                                                                <td>Rajesh</td>
                                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                            </tr>
                                                                            <tr className='align-middle'>
                                                                                <td>01</td>
                                                                                <td>olx</td>
                                                                                <td>Uttar Pradesh</td>
                                                                                <td>Branch Name</td>
                                                                                <td>Rajesh</td>
                                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                            </tr>
                                                                            <tr className='align-middle'>
                                                                                <td>01</td>
                                                                                <td>olx</td>
                                                                                <td>Uttar Pradesh</td>
                                                                                <td>Branch Name</td>
                                                                                <td>Rajesh</td>
                                                                                <td><span className='text-success'>09/01/2024</span></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">
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
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>Seclect Excutive</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                                            <input type="date" className="form-control" id="" placeholder='start Date' />
                                                        </div>
                                                        <div className="col-md-4 col-lg-15 mb-2 mb-lg-3 mb-md-3">
                                                            <button className='btn btn-dark'> <AddCircleOutlineIcon /> Add More</button>
                                                        </div>
                                                        <div className="col-md-12 col-lg-12 mb-2 mb-lg-3 mb-md-3">
                                                            <button className='btn btn-primary w-100'> Save And Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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