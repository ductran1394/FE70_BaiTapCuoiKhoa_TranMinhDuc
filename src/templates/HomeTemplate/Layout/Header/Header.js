import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
import {Select} from "antd";
import {useTranslation} from "react-i18next";

import style from "./Header.css";
import {render} from "react-dom";
import {useSelector} from "react-redux";
import _ from "lodash";
import {TOKEN, USER_LOGIN} from "../../../../util/settings/config";
import {history} from "../../../../App";

const {Option} = Select;

export default function Header() {
   const {userLogin} = useSelector((state) => state.QuanLyNguoiDungReducer);
   const {t, i18n} = useTranslation();

   const handleChange = (value) => {
      i18n.changeLanguage(value);
   };

   const renderLogin = () => {
      /////////////////
      if (_.isEmpty(userLogin)) {
         return (
            <Fragment>
               <li className="nav-item ">
                  <NavLink
                     to="/login"
                     style={{fontSize: "16px"}}
                     className="nav-link font-weight-bold"
                     activeClassName="text-primary">
                     {t("Login")}
                  </NavLink>
               </li>
               <li className="nav-item ">
                  <NavLink
                     to="/register"
                     style={{fontSize: "16px"}}
                     className="nav-link  font-weight-bold"
                     activeClassName="text-primary">
                     {t("Register")}
                  </NavLink>
               </li>
            </Fragment>
         );
      }

      return (
         <Fragment>
            {" "}
            <button
               onClick={() => {
                  history.push(`/profile/${userLogin.taiKhoan}`);
               }}
               className="btn btn-primary mr-2">
               Hello ! {userLogin.taiKhoan}
            </button>
            <button
               onClick={() => {
                  localStorage.removeItem(USER_LOGIN);
                  localStorage.removeItem(TOKEN);
                  history.push("/home");
                  window.location.reload();
               }}
               className="btn btn-outline-danger mr-2">
               Đăng xuất
            </button>
         </Fragment>
      );
      //////////////////////
   };
   return (
      <div className="site-header">
         <div className="container py-4 d-flex justify-content-between">
            <NavLink to="/">
               <img
                  src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                  alt="..."
               />
            </NavLink>

            <ul className="nav  mt-2">
               <li className="nav-item ">
                  <NavLink
                     to="/home"
                     style={{fontSize: "16px"}}
                     className="nav-link font-weight-bold"
                     activeClassName="text-primary">
                     {t("Home")}
                  </NavLink>
               </li>
               <li className="nav-item">
                  <NavLink
                     to="/news"
                     style={{fontSize: "16px"}}
                     className="nav-link  font-weight-bold "
                     activeClassName="text-primary">
                     {t("News")}
                  </NavLink>
               </li>
               <li className="nav-item ">
                  <NavLink
                     to="/contact"
                     style={{fontSize: "16px"}}
                     className="nav-link  font-weight-bold"
                     activeClassName="text-primary">
                     {t("Contact")}
                  </NavLink>
               </li>
               {renderLogin()}

               <Select
                  className=""
                  defaultValue="vi"
                  style={{width: 80}}
                  onChange={handleChange}>
                  <Option value="vi">Viet</Option>
                  <Option value="en">Eng</Option>
                  <Option value="chi">Chi</Option>
               </Select>
            </ul>
         </div>
      </div>
   );
}
