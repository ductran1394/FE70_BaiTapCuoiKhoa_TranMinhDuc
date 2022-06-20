import {quanLyDatVeService} from "../../services/QuanLyDatVeService";
import {ThongTinDatVe} from "../../_core/models/ThongTinDatVe";
import {displayLoadingAction, hideLoadingAction} from "./LoadingActions";
import {
   CHUYEN_TAB,
   DAT_VE,
   DAT_VE_HOAN_TAT,
   SET_CHI_TIET_PHONG_VE,
} from "./types/QuanLyDatVeType";

export const layChiTietPhongVeAction = (maLichChieu) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

         console.log("result", result);
         if (result.status === 200) {
            dispatch({
               type: SET_CHI_TIET_PHONG_VE,
               chiTietPhongVe: result.data.content,
            });
         }
         await dispatch(hideLoadingAction);
      } catch (error) {
         dispatch(hideLoadingAction);

         console.log("error", error.response?.data);
      }
   };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
   return async (dispatch) => {
      try {
         dispatch(displayLoadingAction);

         const result = await quanLyDatVeService.datVe(thongTinDatVe);

         console.log(result.data.content);

         await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
         await dispatch({type: DAT_VE_HOAN_TAT});

         dispatch({type: CHUYEN_TAB});
         await dispatch(hideLoadingAction);
      } catch (error) {
         dispatch(hideLoadingAction);
         console.log(error.response.data);
      }
   };
};
