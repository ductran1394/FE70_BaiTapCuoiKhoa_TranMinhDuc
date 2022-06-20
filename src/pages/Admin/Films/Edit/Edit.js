import React, {useEffect, useState} from "react";
import {Form, Input, DatePicker, InputNumber, Switch} from "antd";
import {useFormik} from "formik";
import moment from "moment";

import {useDispatch, useSelector} from "react-redux";
import {
   capNhatPhimUploadAction,
   layThongTinPhimAction,
} from "../../../../redux/actions/QuanLyPhimActions";
import {GROUPID} from "../../../../util/settings/config";

const Edit = (props) => {
   const [componentSize, setComponentSize] = useState("default");
   const {thongTinPhim} = useSelector((state) => state.QuanLyPhimReducer);

   const [imgSrc, setImgSrc] = useState("");
   const dispatch = useDispatch();

   useEffect(() => {
      let {id} = props.match.params;

      dispatch(layThongTinPhimAction(id));
   }, []);

   const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
         maPhim: thongTinPhim.maPhim,
         dangChieu: thongTinPhim.dangChieu,
         sapChieu: thongTinPhim.sapChieu,
         hot: thongTinPhim.hot,
         danhGia: thongTinPhim.danhGia,
         tenPhim: thongTinPhim.tenPhim,
         trailer: thongTinPhim.trailer,
         moTa: thongTinPhim.moTa,
         maNhom: GROUPID,
         ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
         hinhAnh: null,
      },

      onSubmit: (values) => {
         values.maNhom = GROUPID;

         let formData = new FormData();
         for (let key in values) {
            if (key !== "hinhAnh") {
               formData.append(key, values[key]);
            } else {
               if (values.hinhAnh !== null) {
                  formData.append("File", values.hinhAnh, values.hinhAnh.name);
               }
            }
         }
         //Cập nhật phim upload hình
         dispatch(capNhatPhimUploadAction(formData));
      },
   });

   const handleChangeDatePicker = (value) => {
      let ngayKhoiChieu = moment(value);
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

   const handleChangeFile = async (e) => {
      let file = e.target.files[0];
      if (
         file.type === "image/jpeg" ||
         file.type === "image/jpg" ||
         file.type === "image/gif" ||
         file.type === "image/png"
      ) {
         await formik.setFieldValue("hinhAnh", file);

         let reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = (e) => {
            setImgSrc(e.target.result);
         };
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
            <h3>Thêm mới phim </h3>

            <Form.Item label="Tên phim">
               <Input
                  name="tenPhim"
                  onChange={formik.handleChange}
                  value={formik.values.tenPhim}
               />
            </Form.Item>
            <Form.Item label="Trailer">
               <Input
                  name="trailer"
                  onChange={formik.handleChange}
                  value={formik.values.trailer}
               />
            </Form.Item>
            <Form.Item label="Mô tả">
               <Input
                  name="moTa"
                  onChange={formik.handleChange}
                  value={formik.values.moTa}
               />
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
               <DatePicker
                  onChange={handleChangeDatePicker}
                  format="DD/MM/YYYY"
                  value={moment(formik.values.ngayKhoiChieu)}
               />
            </Form.Item>
            <Form.Item label="Đang chiếu">
               <Switch
                  name="dangChieu"
                  onChange={handleChangeSwitch("dangChieu")}
                  checked={formik.values.dangChieu}
               />
            </Form.Item>
            <Form.Item label="Sắp chiếu">
               <Switch
                  name="sapChieu"
                  onChange={handleChangeSwitch("sapChieu")}
                  checked={formik.values.sapChieu}
               />
            </Form.Item>
            <Form.Item label="Hot">
               <Switch
                  name="hot"
                  onChange={handleChangeSwitch("hot")}
                  checked={formik.values.hot}
               />
            </Form.Item>

            <Form.Item label="Số sao">
               <InputNumber
                  onChange={handleChangeInputNumber("danhGia")}
                  value={formik.values.danhGia}
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
                  width={100}
                  height={100}
                  src={imgSrc === "" ? thongTinPhim.hinhAnh : imgSrc}
               />
            </Form.Item>
            <Form.Item label="Button">
               <button type="submit" className=" btn btn-primary py-2">
                  Cập nhật
               </button>
            </Form.Item>
         </Form>
      </>
   );
};

export default Edit;
