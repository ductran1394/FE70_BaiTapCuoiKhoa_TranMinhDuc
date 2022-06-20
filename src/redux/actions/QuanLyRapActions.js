import {quanLyRapService} from "../../services/QuanLyRapService";
import {displayLoadingAction, hideLoadingAction} from "./LoadingActions";
import {SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU} from "./types/QuanLyRapType";

export const layDanhSachHeThongRapAction = () => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         const result = await quanLyRapService.layDanhSachHeThongRap();

         if (result.status === 200) {
            dispatch({
               type: SET_HE_THONG_RAP_CHIEU,
               heThongRapChieu: result.data.content,
            });
         }
         await dispatch(hideLoadingAction);
      } catch (errors) {
         dispatch(hideLoadingAction);
         console.log("errors", errors.response?.data);
      }
   };
};

export const layThongTinChiTietPhim = (id) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         const result = await quanLyRapService.layThongTinLichChieuPhim(id);

         dispatch({
            type: SET_CHI_TIET_PHIM,
            filmDetail: result.data.content,
         });
         await dispatch(hideLoadingAction);
      } catch (errors) {
         dispatch(hideLoadingAction);
         console.log("errors", errors.response?.data);
      }
   };
};
