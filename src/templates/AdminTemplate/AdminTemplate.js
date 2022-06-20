import {Fragment, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Redirect, Route} from "react-router";
import {TOKEN, USER_LOGIN} from "../../util/settings/config";
import {Layout, Menu} from "antd";
import {FileOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import _ from "lodash";
import {history} from "../../App";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

const AdminTemplate = (props) => {
   const {Component, ...restProps} = props;
   const {userLogin} = useSelector((state) => state.QuanLyNguoiDungReducer);

   const [collapsed, setCollapsed] = useState(false);

   const onCollapse = (collapsed) => {
      setCollapsed(collapsed);
   };

   useEffect(() => {
      window.scrollTo(0, 0);
   });

   if (!localStorage.getItem(USER_LOGIN)) {
      alert("Bạn không có quyền truy cập vào trang này !");
      return <Redirect to="/" />;
   }

   if (userLogin.maLoaiNguoiDung !== "QuanTri") {
      alert("Bạn không có quyền truy cập vào trang này !");
      return <Redirect to="/" />;
   }

   const operations = (
      <Fragment>
         {!_.isEmpty(userLogin) ? (
            <Fragment>
               {" "}
               <button
                  className="btn btn-primary mr-2"
                  onClick={() => {
                     history.push("/profile");
                  }}
                  style={{lineHeight: "24px"}}>
                  <div
                     style={{
                        width: 50,
                     }}></div>
                  Hello ! {userLogin.taiKhoan}
               </button>
               <button
                  className="btn btn-outline-danger mr-2"
                  onClick={() => {
                     localStorage.removeItem(USER_LOGIN);
                     localStorage.removeItem(TOKEN);
                     history.push("/home");
                     window.location.reload();
                  }}
                  style={{lineHeight: "24px"}}>
                  Đăng xuất
               </button>{" "}
            </Fragment>
         ) : (
            ""
         )}
      </Fragment>
   );

   return (
      <Route
         {...restProps}
         render={(propsRoute) => {
            return (
               <Fragment>
                  <Layout style={{minHeight: "100vh"}}>
                     <Sider
                        collapsible
                        collapsed={collapsed}
                        onCollapse={onCollapse}>
                        <div
                           className="logo"
                           onClick={() => {
                              history.push("/");
                           }}
                           style={{cursor: "pointer"}}>
                           <img
                              src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                              alt="..."
                           />
                        </div>
                        <Menu
                           theme="dark"
                           defaultSelectedKeys={["1"]}
                           mode="inline">
                           <SubMenu
                              key="sub1"
                              icon={<FileOutlined />}
                              title="Quản lý User">
                              <Menu.Item key="1" icon={<UserOutlined />}>
                                 <NavLink to="/admin/users">User</NavLink>
                              </Menu.Item>
                              <Menu.Item key="2" icon={<FileOutlined />}>
                                 <NavLink to="/admin/addnewuser">
                                    Thêm người dùng
                                 </NavLink>
                              </Menu.Item>
                           </SubMenu>

                           <SubMenu
                              key="sub2"
                              icon={<FileOutlined />}
                              title="Films">
                              <Menu.Item key="3" icon={<FileOutlined />}>
                                 <NavLink to="/admin/films">Films</NavLink>
                              </Menu.Item>
                              <Menu.Item key="4" icon={<FileOutlined />}>
                                 <NavLink to="/admin/films/addnew">
                                    Thêm phim
                                 </NavLink>
                              </Menu.Item>
                           </SubMenu>
                        </Menu>
                     </Sider>
                     <Layout className="site-layout">
                        <Header
                           className="site-layout-background"
                           style={{padding: 0}}>
                           <div className="text-right">{operations}</div>
                        </Header>
                        <Content style={{margin: "0 16px"}}>
                           <div
                              className="site-layout-background"
                              style={{padding: 12, minHeight: "85vh"}}>
                              <Component {...propsRoute} />
                           </div>
                        </Content>
                        <Footer style={{textAlign: "center"}}>
                           COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED
                        </Footer>
                     </Layout>
                  </Layout>
               </Fragment>
            );
         }}
      />
   );
};

export default AdminTemplate;
