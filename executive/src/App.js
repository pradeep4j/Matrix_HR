'use strict';
import React from "react";
import Navbar from "./components/navbar/Navbar";
//auth user
import Login from "./components/auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Logout from "./components/auth/Logout";
import DashbordTables from "./pages/Dashboard/DashbordTables";
import Compliance from "./pages/Compliance/Compliances";
import Audit from "./pages/Audit/Audit";
// import Branch from "./pages/Branch/Branch";
// import Company from "./pages/Company/Company";
// import Category from  "./pages/Category/Category";
import Checklist from  "./pages/Checklist/Checklist";
import Licsregs from  "./pages/Licsregs/LisRegs";
import Notifications from  "./pages/Notifications/Notifications";
import ELibrary from  "./pages/ELibrary/ELibrary";
import Companies from  "./pages/Company/Companies";
// import ElibraryEdit from './pages/ELibrary/ElibraryEdit';
// import Companies from  "./pages/Company/Companiesdevendra";
// import Users from "./pages/Users/Users";
// import Replicate from "./pages/Audit/Replicate";
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tabs/style/react-tabs.css';


function App() {
  return (
    <Router>
      <Navbar />
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
              {/* <Route path="/replicate" element={<Replicate />} />  */}
              
              {/* <Route path="/dashbordTables" element={<PrivateRoutes><DashbordTables /></PrivateRoutes>} /> */}
              <Route path="/logout" element={<PrivateRoutes><Logout /></PrivateRoutes>} />
              <Route path="/compliances" element={<PrivateRoutes><Compliance /></PrivateRoutes>} />
              <Route path="/audit" element={<PrivateRoutes><Audit /></PrivateRoutes>} />
              <Route path="/checklist" element={<PrivateRoutes><Checklist /></PrivateRoutes>} />
              <Route path="/company" element={<PrivateRoutes><Companies /></PrivateRoutes>} />
              <Route path="/notification" element={<PrivateRoutes><Notifications /></PrivateRoutes>} />
              <Route path="/elibrary" element={<PrivateRoutes><ELibrary /></PrivateRoutes>} />
              {/* <Route path="/companies" element={<PrivateRoutes><ELibrary /></PrivateRoutes>} /> */}
              <Route path="/licsregs" element={<PrivateRoutes><Licsregs /></PrivateRoutes>} />
              {/* <Route path="/usercreate" element={<PrivateRoutes><Users /></PrivateRoutes>} /> */}
          </Routes>
          <ToastContainer
                  position="bottom-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
          />
    </Router>
  );
}

export default App;
