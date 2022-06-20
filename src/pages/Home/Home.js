import React, {useEffect, useState} from "react";

import "./Home.scss";
import HomeMenu from "./HomeMenu/HomeMenu";
import {useSelector, useDispatch} from "react-redux";

import ItemFilm from "../../components/Film/ItemFilm";
import {layDanhSachPhimAction} from "../../redux/actions/QuanLyPhimActions";
import {
   SET_FILM_DANG_CHIEU,
   SET_FILM_SAP_CHIEU,
} from "../../redux/actions/types/QuanLyPhimType";
import {layDanhSachHeThongRapAction} from "../../redux/actions/QuanLyRapActions";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";

export default function Home(props) {
   const dispatch = useDispatch();

   const {arrFilm} = useSelector((state) => state.QuanLyPhimReducer);
   const {dangChieu, sapChieu} = useSelector(
      (state) => state.QuanLyPhimReducer
   );
   const {heThongRapChieu} = useSelector((state) => state.QuanLyRapReducer);

   const renderPhim = () => {
      return arrFilm.slice(0, 8).map((phim, index) => {
         return (
            <div key={index}>
               <ItemFilm phim={phim} />
            </div>
         );
      });
   };

   let activeClassDC =
      dangChieu === true ? "btn-primary mr-2" : "btn-outline-primary";

   let activeClassSC =
      sapChieu === true ? "btn-primary ml-2" : "btn-outline-primary";

   useEffect(() => {
      const action = layDanhSachPhimAction();
      dispatch(action);

      dispatch(layDanhSachHeThongRapAction());
   }, []);

   return (
      <div>
         <HomeCarousel />
         <div className="container mt-5 homeCarousel">
            <h5 className="display-4 mb-3">Phim hot</h5>
            <button
               className={`btn ${activeClassDC}`}
               onClick={() => {
                  const action = {type: SET_FILM_DANG_CHIEU};
                  dispatch(action);
               }}>
               Phim đang chiếu
            </button>
            <button
               className={`btn ${activeClassSC}`}
               onClick={() => {
                  const action = {type: SET_FILM_SAP_CHIEU};
                  dispatch(action);
               }}>
               Phim sắp chiếu
            </button>

            <div className="container d-flex justify-content-between mb-5 mt-5">
               <div className="row">{renderPhim()}</div>
            </div>
            <h5 className="display-4 mb-5">Đặt vé ngay</h5>
            <HomeMenu heThongRapChieu={heThongRapChieu} />
         </div>
      </div>
   );
}
