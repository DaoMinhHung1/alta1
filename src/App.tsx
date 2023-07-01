import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./User/Home";
import Forget from "./Login/ForgetPassword";
import NewPass from "./Login/NewPassword";

import Dashboard from "./Pages/Dashboard";
import Updateuser from "./User/UpdateUser";
import { Provider } from "react-redux";

import Quanlythietbi from "./Pages/Thietbi/Quanlythietbi";
import Chitietthietbi from "./Pages/Thietbi/Chitietthietbi";
import Capnhatthietbi from "./Pages/Thietbi/Capnhatthietbi";
import Themthietbi from "./Pages/Thietbi/Themthietbi";
import Quanlydichvu from "./Pages/Dichvu/Quanlydichvu";
import Themdichvu from "./Pages/Dichvu/Themdichvu";
import Capnhatdichvu from "./Pages/Dichvu/Capnhatdichvu";
import Quanlycapso from "./Pages/Capso/Quanlycapso";
import Quanlybaocao from "./Pages/Baocao/Quanlybaocao";
import Capsomoi from "./Pages/Capso/Capsomoi";
import Thongtincapso from "./Pages/Capso/Chitietcapso";
import Danhsachcapsodangcho from "./Pages/Capso/Danhsachcsdangcho";
import Danhsachcsdangsd from "./Pages/Capso/Danhsachcsdangsd";
import Danhsachcsboqua from "./Pages/Capso/Danhsachcsboqua";
import store from "./store";
import Chitietdichvu from "./Pages/Dichvu/Chitietdichvu";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter forceRefresh={true}>
        <Switch>
          {/* Trang Login */}
          <Route exact path="/" component={Login} />
          <Route exact path="/forget" component={Forget} />
          <Route path="/forget/newpass" component={NewPass} />

          {/* Quản lý tài khoản */}
          <Route path="/user" component={Home} />
          <Route path="/updateuser" component={Updateuser} />

          {/* Trang Admin */}
          <Route path="/dashboard" component={Dashboard} />

          {/* Quản lý thiết bị */}
          <Route exact path="/thietbi" component={Quanlythietbi} />
          <Route path="/themtb" component={Themthietbi} />
          <Route path="/chitiettb/:deviceId" component={Chitietthietbi} />
          <Route path="/capnhattb/:deviceId" component={Capnhatthietbi} />

          {/* Quản lý dịch vụ */}
          <Route path="/dichvu" component={Quanlydichvu} />
          <Route path="/themdv" component={Themdichvu} />
          <Route path="/chitietdv/:serviceId" component={Chitietdichvu} />
          <Route path="/capnhatdv/:serviceId" component={Capnhatdichvu} />

          {/* Quản lý cấp số */}
          <Route path="/capso" component={Quanlycapso} />
          <Route path="/capsomoi" component={Capsomoi} />
          <Route path="/chitietcs/:orderID" component={Thongtincapso} />
          <Route path="/danhsachcsdangcho" component={Danhsachcapsodangcho} />
          <Route path="/danhsachcsdangsd" component={Danhsachcsdangsd} />
          <Route path="/danhsachcsboqua" component={Danhsachcsboqua} />
          {/* Quản lý báo cáo */}
          <Route path="/baocao" component={Quanlybaocao} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
