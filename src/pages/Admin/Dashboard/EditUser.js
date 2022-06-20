import {Button, Form, Input, Select} from "antd";
import React, {useEffect, useState} from "react";
import {values} from "lodash";

import {useDispatch, useSelector} from "react-redux";
import {
   capNhatThongTinNguoiDungAction,
   layThongTinTaiKhoanAction,
   themNguoiDungAction,
} from "../../../redux/actions/QuanLyNguoiDungAction";
import {GROUPID} from "../../../util/settings/config";
const {Option} = Select;
const residences = [
   {
      value: "khachHang",
      label: "Khách hàng",
   },
   {
      value: "quanTri",
      label: "Quản trị",
   },
];
const formItemLayout = {
   labelCol: {
      xs: {
         span: 24,
      },
      sm: {
         span: 8,
      },
   },
   wrapperCol: {
      xs: {
         span: 24,
      },
      sm: {
         span: 16,
      },
   },
};
const tailFormItemLayout = {
   wrapperCol: {
      xs: {
         span: 24,
         offset: 0,
      },
      sm: {
         span: 16,
         offset: 8,
      },
   },
};

const EditUser = (props) => {
   const [form] = Form.useForm();
   const dispatch = useDispatch();
   const {thongTinTaiKhoan} = useSelector(
      (state) => state.QuanLyNguoiDungReducer
   );

   useEffect(() => {
      let {tk} = props.match.params;

      dispatch(layThongTinTaiKhoanAction(tk));
   }, []);

   useEffect(() => {
      form.setFieldsValue({
         taiKhoan: thongTinTaiKhoan.taiKhoan,
         matKhau: thongTinTaiKhoan.matKhau,
         email: thongTinTaiKhoan.email,
         soDT: thongTinTaiKhoan.soDT,
         maLoaiNguoiDung: thongTinTaiKhoan.maLoaiNguoiDung,
         hoTen: thongTinTaiKhoan.hoTen,
         maNhom: GROUPID,
      });
   }, [Form, thongTinTaiKhoan]);

   const onFinish = (values) => {
      values.maNhom = GROUPID;

      dispatch(capNhatThongTinNguoiDungAction(values));
   };

   const [autoCompleteResult, setAutoCompleteResult] = useState([]);

   return (
      <div>
         <h3 className="text-center mb-5">Cập nhật thông tin người dùng</h3>
         <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
               taiKhoan: "",
               matKhau: "",
               email: "",
               soDt: "",
               maLoaiNguoiDung: "",
               hoTen: "",
               maNhom: GROUPID,
            }}
            scrollToFirstError>
            <Form.Item
               name="taiKhoan"
               label="Tài khoản"
               tooltip="Không được phép thay đổi tên người dùng"
               rules={[
                  {
                     required: true,
                     message: "Nhập tên tài khoản!",
                     whitespace: true,
                  },
               ]}>
               <Input disabled={true} />
            </Form.Item>

            <Form.Item
               name="matKhau"
               label="Mật khẩu"
               rules={[
                  {
                     required: true,
                     message: "Nhập mật khẩu!",
                  },
               ]}
               hasFeedback>
               <Input />
            </Form.Item>

            <Form.Item
               name="hoTen"
               label="Họ tên"
               tooltip="Nhập tên của bạn"
               rules={[
                  {
                     required: true,
                     message: "Nhập tên của bạn!",
                     whitespace: true,
                  },
               ]}>
               <Input />
            </Form.Item>

            <Form.Item
               name="email"
               label="E-mail"
               rules={[
                  {
                     type: "email",
                     message: "Không đúng định dạng Email",
                  },
                  {
                     required: true,
                     message: "Nhập Email của bạn",
                  },
               ]}>
               <Input />
            </Form.Item>

            <Form.Item
               name="soDT"
               label="Số điện thoại"
               rules={[
                  {
                     required: true,
                     message: "Nhập số điện thoại!",
                  },
               ]}>
               <Input
                  style={{
                     width: "100%",
                  }}
               />
            </Form.Item>

            <Form.Item
               name="maLoaiNguoiDung"
               label="Loại người dùng"
               rules={[
                  {
                     required: true,
                     message: "Chọn loại tài khoản!",
                  },
               ]}>
               <Select placeholder="Chọn loại tài khoản">
                  <Option value="KhachHang">Khách hàng</Option>
                  <Option value="QuanTri">Quản trị</Option>
               </Select>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
               <Button type="primary" htmlType="submit">
                  Cập nhật thông tin
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default EditUser;
