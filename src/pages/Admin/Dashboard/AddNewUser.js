import {Button, Form, Input, Select} from "antd";
import {values} from "lodash";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {themNguoiDungAction} from "../../../redux/actions/QuanLyNguoiDungAction";
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

const AddNewUser = () => {
   const [form] = Form.useForm();
   const dispatch = useDispatch();

   const onFinish = (values) => {
      values.maNhom = GROUPID;

      dispatch(themNguoiDungAction(values));
   };

   return (
      <div>
         <h3 className="display-4 text-center">Thêm người dùng mới</h3>
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
               tooltip="What do you want others to call you?"
               rules={[
                  {
                     required: true,
                     message: "Nhập tên tài khoản!",
                     whitespace: true,
                  },
               ]}>
               <Input />
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
               <Input.Password />
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
                  Thêm người dùng
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default AddNewUser;
