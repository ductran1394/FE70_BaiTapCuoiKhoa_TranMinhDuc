import React, {useState} from "react";
import {Form, Input, DatePicker, InputNumber, Switch} from "antd";
import {useFormik} from "formik";
import moment from "moment";
import {useDispatch} from "react-redux";
import {themPhimUploadHinhAction} from "../../../../redux/actions/QuanLyPhimActions";
import {GROUPID} from "../../../../util/settings/config";
import _ from "lodash";

const AddNew = () => {
   const [componentSize, setComponentSize] = useState("default");
   const [imgSrc, setImgSrc] = useState("");
   const dispatch = useDispatch();

   const formik = useFormik({
      initialValues: {
         tenPhim: "",
         trailer: "",
         moTa: "",
         ngayKhoiChieu: "",
         dangChieu: false,
         sapChieu: false,
         hot: false,
         danhGia: 0,
         hinhAnh: {},
      },
      onSubmit: (values) => {
         values.maNhom = GROUPID;

         let formData = new FormData();
         for (let key in values) {
            if (key !== "hinhAnh") {
               formData.append(key, values[key]);
            } else {
               formData.append("File", values.hinhAnh, values.hinhAnh.name);
            }
         }

         dispatch(themPhimUploadHinhAction(formData));
      },
   });

   const handleChangeDatePicker = (value) => {
      let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
      formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
   };

   const handleChangeSwitch = (name) => {
      return (value) => {
         formik.setFieldValue(name, value);
      };
   };

   const handleChangeInputNumber = (name) => {
      return (value) => {
         formik.setFieldValue(name, value);
      };
   };

   const handleChangeFile = (e) => {
      let file = e.target.files[0];
      if (
         file.type === "image/jpeg" ||
         file.type === "image/jpg" ||
         file.type === "image/gif" ||
         file.type === "image/png"
      ) {
         let reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = (e) => {
            setImgSrc(e.target.result);
         };

         formik.setFieldValue("hinhAnh", file);
      }
   };

   const onFormLayoutChange = ({size}) => {
      setComponentSize(size);
   };

   return (
      <>
         <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
               span: 4,
            }}
            wrapperCol={{
               span: 14,
            }}
            layout="horizontal"
            initialValues={{
               size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}>
            <h3 className="display-4">Thêm mới phim</h3>

            <Form.Item label="Tên phim">
               <Input name="tenPhim" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Trailer">
               <Input name="trailer" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Mô tả">
               <Input name="moTa" onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
               <DatePicker
                  format={"DD/MM/YYYY"}
                  onChange={handleChangeDatePicker}
               />
            </Form.Item>
            <Form.Item label="Đang chiếu">
               <Switch onChange={handleChangeSwitch("dangChieu")} />
            </Form.Item>
            <Form.Item label="Sắp chiếu">
               <Switch onChange={handleChangeSwitch("sapChieu")} />
            </Form.Item>
            <Form.Item label="Hot">
               <Switch onChange={handleChangeSwitch("hot")} />
            </Form.Item>

            <Form.Item label="Số sao">
               <InputNumber
                  onChange={handleChangeInputNumber("danhGia")}
                  min={1}
                  max={10}
               />
            </Form.Item>

            <Form.Item label="Hình ảnh">
               <input
                  type="file"
                  onChange={handleChangeFile}
                  accept="image/png, image/jpeg,image/gif,image/png"
               />
               <br />
               <img
                  style={{width: "150px", height: "150px"}}
                  src={imgSrc}
                  alt=""
               />
            </Form.Item>
            <Form.Item label="Tác vụ">
               <button type="submit" className="btn btn-primary">
                  Thêm phim
               </button>
            </Form.Item>
         </Form>
      </>
   );
};

export default AddNew;
