import {Button, Form, Input, Select} from "antd";

import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {history} from "../../App";
import {dangKyAction} from "../../redux/actions/QuanLyNguoiDungAction";
import {GROUPID} from "../../util/settings/config";
const {Option} = Select;

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

const Register = () => {
   const [form] = Form.useForm();
   const dispatch = useDispatch();

   const onFinish = (values) => {
      values.maNhom = GROUPID;

      dispatch(dangKyAction(values));
   };

   return (
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
                  message: "Please input your account!",
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
                  message: "Please input your password!",
               },
            ]}
            hasFeedback>
            <Input.Password />
         </Form.Item>

         <Form.Item
            name="hoTen"
            label="Họ tên"
            rules={[
               {
                  required: true,
                  message: "Please input your name!",
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
                  message: "The input is not valid E-mail!",
               },
               {
                  required: true,
                  message: "Please input your E-mail!",
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
                  message: "Please input your phone number!",
               },
            ]}>
            <Input
               style={{
                  width: "100%",
               }}
            />
         </Form.Item>

         <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
               Đăng ký
            </Button>
            <Button
               type="primary"
               className="ml-2"
               onClick={() => {
                  history.push("/login");
               }}>
               Đăng nhập
            </Button>
         </Form.Item>
      </Form>
   );
};

export default Register;
