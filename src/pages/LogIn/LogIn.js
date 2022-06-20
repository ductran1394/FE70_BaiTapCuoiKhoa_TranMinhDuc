import React from "react";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {dangNhapAction} from "../../redux/actions/QuanLyNguoiDungAction";

export default function LogIn() {
   const dispatch = useDispatch();

   const {userLogin} = useSelector((state) => state.QuanLyNguoiDungReducer);

   const formik = useFormik({
      initialValues: {
         taiKhoan: "",
         matKhau: "",
      },
      onSubmit: (values) => {
         const action = dangNhapAction(values);
         dispatch(action);
      },
   });

   return (
      <form
         onSubmit={formik.handleSubmit}
         className="card"
         style={{
            overflow: "visible",
            marginBottom: "50%",
            transform: "translateY(50%)",
         }}>
         <div className="card-header">
            <h3>Đăng nhập</h3>
            <div className="d-flex justify-content-end social_icon">
               <span>
                  <i className="fab fa-facebook-square" />
               </span>
               <span>
                  <i className="fab fa-google-plus-square" />
               </span>
               <span>
                  <i className="fab fa-twitter-square" />
               </span>
            </div>
         </div>
         <div className="card-body" style={{marginBottom: "50px"}}>
            <div>
               <div className="input-group form-group">
                  <div className="input-group-prepend">
                     <span className="input-group-text">
                        <i className="fas fa-user" />
                     </span>
                  </div>
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Tài khoản"
                     name="taiKhoan"
                     onChange={formik.handleChange}
                  />
               </div>
               <div className="input-group form-group">
                  <div className="input-group-prepend">
                     <span className="input-group-text">
                        <i className="fas fa-key" />
                     </span>
                  </div>
                  <input
                     type="password"
                     className="form-control"
                     placeholder="Mật khẩu"
                     name="matKhau"
                     onChange={formik.handleChange}
                  />
               </div>
               <div className="row align-items-center remember">
                  <input type="checkbox" />
                  Ghi nhớ tài khoản
               </div>
               <div className="form-group">
                  <input
                     type="submit"
                     defaultValue="Login"
                     className="btn float-right login_btn"
                  />
               </div>
            </div>
         </div>
         <div className="card-footer">
            <div className="d-flex justify-content-center links">
               Bạn chưa có tài khoản ?
               <NavLink to="/register" className="ml-2">
                  {" "}
                  Đăng ký
               </NavLink>
            </div>
            <div className="d-flex justify-content-center">
               <a href="#">Quên mật khẩu</a>
            </div>
         </div>
      </form>
   );
}
