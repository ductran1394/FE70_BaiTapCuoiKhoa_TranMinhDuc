import {quanLyNguoiDungService} from "../../services/QuanLyNguoiDungService";
import {
   DANG_NHAP_ACTION,
   LAY_THONG_TIN_NGUOI_DUNG,
   LAY_THONG_TIN_TAI_KHOAN,
   SET_THONG_TIN_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";
import {history} from "../../App";

import {USER_LOGIN} from "../../util/settings/config";
import {displayLoadingAction, hideLoadingAction} from "./LoadingActions";

export const dangNhapAction = (thongTinDangNhap) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

         if (result.data.statusCode === 200) {
            dispatch({
               type: DANG_NHAP_ACTION,
               thongTinDangNhap: result.data.content,
            });
            alert("Đăng nhập thành công!");
            history.push("/");
         }

         console.log("result", result);
         await dispatch(hideLoadingAction);
      } catch (error) {
         dispatch(hideLoadingAction);
         console.log("error", error.response.data);
      }
   };
};

export const layThongTinNguoiDungAction = (thongTinDangNhap) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         const result = await quanLyNguoiDungService.layThongTinNguoiDung();

         if (result.data.statusCode === 200) {
            dispatch({
               type: SET_THONG_TIN_NGUOI_DUNG,
               thongTinNguoiDung: result.data.content,
            });
         }

         console.log("result", result);
         await dispatch(hideLoadingAction);
      } catch (error) {
         dispatch(hideLoadingAction);
         console.log("error", error);
      }
   };
};

export const dangKyAction = (values) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         let result = await quanLyNguoiDungService.dangKy(values);
         alert("Tạo tài khoản thành công!");
         console.log("result", result.data.content);
         await dispatch(hideLoadingAction);
         history.push("/login");
      } catch (errors) {
         dispatch(hideLoadingAction);
         console.log(errors.response?.data);
      }
   };
};

export const layDanhSachNguoiDungAction = (tuKhoa = "") => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         const result = await quanLyNguoiDungService.layDanhSachNguoiDung(
            tuKhoa
         );

         dispatch({
            type: LAY_THONG_TIN_NGUOI_DUNG,
            arrUser: result.data.content,
         });
         await dispatch(hideLoadingAction);
      } catch (errors) {
         dispatch(hideLoadingAction);
         console.log("error", errors);
      }
   };
};

export const themNguoiDungAction = (values) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         let result = await quanLyNguoiDungService.themNguoiDung(values);
         await dispatch(hideLoadingAction);
         alert("Thêm người dùng thành công!");
         console.log("result", result.data.content);
      } catch (errors) {
         dispatch(hideLoadingAction);
         console.log(errors.response?.data);
      }
   };
};

export const xoaNguoiDungAction = (taiKhoan) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
         console.log("result", result.data.content);
         await dispatch(hideLoadingAction);
         alert("Xoá người dùng thành công !");

         dispatch(layDanhSachNguoiDungAction());
      } catch (errors) {
         dispatch(hideLoadingAction);
         console.log("errors", errors.response?.data);
      }
   };
};

export const layThongTinTaiKhoanAction = (tk) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         const result = await quanLyNguoiDungService.layThongTinTaiKhoan(tk);
         dispatch({
            type: LAY_THONG_TIN_TAI_KHOAN,
            thongTinTaiKhoan: result.data.content,
         });
         await dispatch(hideLoadingAction);
      } catch (errors) {
         dispatch(hideLoadingAction);
         console.log(errors.response?.data);
      }
   };
};

export const capNhatThongTinNguoiDungAction = (values) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(
            values
         );
         await dispatch(hideLoadingAction);
         alert("Cập nhật người dùng thành công");
         localStorage.setItem(USER_LOGIN, JSON.stringify(values));
      } catch (errors) {
         dispatch(hideLoadingAction);
         console.log(errors.response?.data);
      }
   };
};

export const thayDoiThongTinNguoiDungAction = (values) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         const result = await quanLyNguoiDungService.thayDoiThongTinNguoiDung(
            values
         );
         await dispatch(hideLoadingAction);
         alert("Cập nhật người dùng thành công");
      } catch (errors) {
         dispatch(hideLoadingAction);

         console.log(errors.response?.data);
      }
   };
};
