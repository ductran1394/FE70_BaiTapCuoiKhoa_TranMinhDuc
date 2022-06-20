import React, {Fragment, useEffect} from "react";
import {Button, Input, Table} from "antd";
import {history} from "../../../App";
import {useDispatch, useSelector} from "react-redux";
import {
   layDanhSachNguoiDungAction,
   xoaNguoiDungAction,
} from "../../../redux/actions/QuanLyNguoiDungAction";

import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

const {Search} = Input;

export default function Dashboard() {
   const {arrUser} = useSelector((state) => state.QuanLyNguoiDungReducer);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(layDanhSachNguoiDungAction());
   }, []);

   const onSearch = (value) => {
      dispatch(layDanhSachNguoiDungAction(value));
   };

   const columns = [
      {
         title: "Tài khoản",
         dataIndex: "taiKhoan",

         sorter: (a, b) => {
            let tenA = a.taiKhoan.toLowerCase().trim();
            let tenB = b.taiKhoan.toLowerCase().trim();
            if (tenA > tenB) {
               return 1;
            }
            return -1;
         },
         sortDirections: ["descend", "ascend"],
         width: "20%",
      },
      {
         title: "Mật khẩu",
         dataIndex: "matKhau",
         width: "15%",
      },
      {
         title: "Họ tên",
         dataIndex: "hoTen",
         sorter: (a, b) => {
            let tenA = a.hoTen.toLowerCase().trim();
            let tenB = b.hoTen.toLowerCase().trim();
            if (tenA > tenB) {
               return 1;
            }
            return -1;
         },
         sortDirections: ["descend", "ascend"],
         width: "15%",
      },
      {
         title: "Email",
         dataIndex: "email",
         width: "20%",
      },
      {
         title: "Số điện thoại",
         dataIndex: "soDt",
         width: "15%",
      },
      {
         title: "Hành động",
         dataIndex: "",
         render: (text, item) => {
            return (
               <Fragment>
                  <NavLink
                     key={1}
                     className=" mr-2  text-2xl"
                     to={`/admin/edituser/${item.taiKhoan}`}>
                     <EditOutlined style={{color: "blue"}} />{" "}
                  </NavLink>
                  <span
                     style={{cursor: "pointer"}}
                     key={2}
                     className="text-2xl"
                     onClick={() => {
                        if (
                           window.confirm(
                              "Bạn có chắc muốn xoá tài khoản " + item.taiKhoan
                           )
                        ) {
                           dispatch(xoaNguoiDungAction(item.taiKhoan));
                        }
                     }}>
                     <DeleteOutlined style={{color: "red"}} />{" "}
                  </span>
               </Fragment>
            );
         },
         sortDirections: ["descend", "ascend"],
         width: "25%",
      },
   ];
   const data = arrUser;

   const onChange = (pagination, filters, sorter, extra) => {};

   return (
      <div className="">
         <h3 className="display-4">Quản lý người dùng</h3>
         <Button
            className="mb-4"
            onClick={() => {
               history.push("/admin/addnewuser");
            }}>
            Thêm người dùng
         </Button>
         <Search
            className="mb-4"
            placeholder="Nhập tài khoản hoặc tên người dùng"
            enterButton="Search"
            size="large"
            onSearch={onSearch}
         />
         <Table
            bordered
            columns={columns}
            dataSource={data}
            onChange={onChange}
            rowKey="taiKhoan"
         />
      </div>
   );
}
