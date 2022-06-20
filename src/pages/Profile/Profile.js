import {Button, Form, Input, Select} from "antd";
import React, {useEffect, useState} from "react";

import {Tabs} from "antd";

import {useDispatch, useSelector} from "react-redux";
import {
   layThongTinNguoiDungAction,
   thayDoiThongTinNguoiDungAction,
} from "../../redux/actions/QuanLyNguoiDungAction";
import {GROUPID} from "../../util/settings/config";
import {KetQuaDatVe} from "../Checkout/Checkout";

const {TabPane} = Tabs;

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

const Profile = (props) => (
   <div className="container">
      <Tabs defaultActiveKey="1">
         <TabPane tab="Thông tin tài khoản" key="1">
            <Detail {...props} />
         </TabPane>
         <TabPane tab="Lịch sử đặt vé" key="2">
            <KetQuaDatVe {...props} />
         </TabPane>
      </Tabs>
   </div>
);

export default Profile;

export const Detail = (props) => {
   const [form] = Form.useForm();
   const dispatch = useDispatch();
   const {thongTinNguoiDung} = useSelector(
      (state) => state.QuanLyNguoiDungReducer
   );

   useEffect(() => {
      let {tk} = props.match.params;

      dispatch(layThongTinNguoiDungAction(tk));
   }, []);

   useEffect(() => {
      form.setFieldsValue({
         taiKhoan: thongTinNguoiDung.taiKhoan,
         matKhau: thongTinNguoiDung.matKhau,
         email: thongTinNguoiDung.email,
         soDt: thongTinNguoiDung.soDT,
         maLoaiNguoiDung: thongTinNguoiDung.maLoaiNguoiDung,
         hoTen: thongTinNguoiDung.hoTen,
         maNhom: GROUPID,
      });
   }, [Form, thongTinNguoiDung]);

   const onFinish = (values) => {
      values.maNhom = GROUPID;

      dispatch(thayDoiThongTinNguoiDungAction(values));
   };

   const [autoCompleteResult, setAutoCompleteResult] = useState([]);

   return (
      <div>
         <h3 className="text-center mb-5 display-4">
            Cập nhật thông tin người dùng
         </h3>
         <div className="container">
            <Form
               {...formItemLayout}
               form={form}
               name="register"
               onFinish={onFinish}
               initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                  email: "",
                  soDT: "",
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
                  name="soDt"
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
                  tooltip="Bạn không có quyền thay đổi loại người dùng tại đây"
                  rules={[
                     {
                        required: true,
                        message: "Chọn loại tài khoản!",
                     },
                  ]}>
                  <Select placeholder="Chọn loại tài khoản" disabled>
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
      </div>
   );
};
