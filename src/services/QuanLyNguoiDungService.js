import {baseService} from "./baseService";
import {GROUPID} from "../util/settings/config";
export class QuanLyNguoiDungService extends baseService {
   constructor() {
      super();
   }

   dangNhap = (thongTinDangNhap) => {
      return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
   };

   layThongTinNguoiDung = () => {
      return this.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
   };

   dangKy = (values) => {
      return this.post("/api/QuanLyNguoiDung/DangKy", values);
   };

   layDanhSachNguoiDung = (tuKhoa = "") => {
      if (tuKhoa.trim() != "") {
         return this.get(
            `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GROUPID}&tukhoa=${tuKhoa}`
         );
      }
      return this.get(
         `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${GROUPID}`
      );
   };

   themNguoiDung = (values) => {
      return this.post("/api/QuanLyNguoiDung/ThemNguoiDung", values);
   };

   xoaNguoiDung = (taiKhoan) => {
      return this.delete(
         `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
      );
   };

   layThongTinTaiKhoan = (tk) => {
      return this.post(
         `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${tk}`
      );
   };

   capNhatThongTinNguoiDung = (values) => {
      return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, values);
   };

   thayDoiThongTinNguoiDung = (values) => {
      return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, values);
   };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
