import {TOKEN, USER_LOGIN} from "../../util/settings/config";
import {
   DANG_NHAP_ACTION,
   LAY_THONG_TIN_NGUOI_DUNG,
   LAY_THONG_TIN_TAI_KHOAN,
   SET_THONG_TIN_NGUOI_DUNG,
} from "../actions/types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
   user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
   userLogin: user,
   thongTinNguoiDung: {},
   arrUser: [],
   thongTinTaiKhoan: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
   switch (action.type) {
      case DANG_NHAP_ACTION: {
         const {thongTinDangNhap} = action;

         localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
         localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
         return {...state, userLogin: thongTinDangNhap};
      }

      case SET_THONG_TIN_NGUOI_DUNG: {
         state.thongTinNguoiDung = action.thongTinNguoiDung;
         return {...state};
      }

      case LAY_THONG_TIN_NGUOI_DUNG: {
         state.arrUser = action.arrUser;
         return {...state};
      }

      case LAY_THONG_TIN_TAI_KHOAN: {
         state.thongTinTaiKhoan = action.thongTinTaiKhoan;
         return {...state};
      }

      default:
         return {...state};
   }
};
