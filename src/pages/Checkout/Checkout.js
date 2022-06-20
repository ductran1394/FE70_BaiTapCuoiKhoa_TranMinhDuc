import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
   datVeAction,
   layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeActions";

import _ from "lodash";
import {Tabs} from "antd";

import {CheckOutlined, CloseOutlined, HomeOutlined} from "@ant-design/icons";

import "./Checkout.scss";
import {ThongTinDatVe} from "../../_core/models/ThongTinDatVe";
import {layThongTinNguoiDungAction} from "../../redux/actions/QuanLyNguoiDungAction";
import moment from "moment";

import {history} from "../../App";
import {TOKEN, USER_LOGIN} from "../../util/settings/config";
import {NavLink} from "react-router-dom";
import {DAT_VE} from "../../redux/actions/types/QuanLyDatVeType";

function Checkout(props) {
   const {userLogin} = useSelector((state) => state.QuanLyNguoiDungReducer);

   const {chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat} =
      useSelector((state) => state.QuanLyDatVeReducer);

   const dispatch = useDispatch();

   useEffect(() => {
      const action = layChiTietPhongVeAction(props.match.params.id);

      dispatch(action);
   }, []);

   const {thongTinPhim, danhSachGhe} = chiTietPhongVe;

   const renderSeats = () => {
      return danhSachGhe.map((ghe, index) => {
         let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
         let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
         let classGheDangDat = "";

         let indexGheDD = danhSachGheDangDat.findIndex(
            (gheDD) => gheDD.maGhe === ghe.maGhe
         );

         let classGheKhachDat = "";

         let classGheDaDuocDat = "";
         if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
            classGheDaDuocDat = "gheDaDuocDat";
         }

         if (indexGheDD != -1) {
            classGheDaDat = "gheDangDat";
         }

         return (
            <Fragment key={index}>
               <button
                  onClick={() => {
                     dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe,
                     });
                  }}
                  disabled={ghe.daDat || classGheKhachDat !== ""}
                  className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} `}
                  key={index}>
                  {ghe.daDat ? (
                     classGheDaDuocDat != "" ? (
                        <CheckOutlined />
                     ) : (
                        <CloseOutlined />
                     )
                  ) : (
                     ghe.stt
                  )}
               </button>

               {(index + 1) % 16 === 0 ? <br /> : ""}
            </Fragment>
         );
      });
   };

   return (
      <div className="">
         <div className="row">
            <div className="col-7">
               <h2 className="text-warning text-center">Vui lòng chọn vé</h2>
               <div className="screen text-center mt-2">
                  <span className="text-warning">Màn hình</span>
               </div>
               <div className="text-center">{renderSeats()}</div>
            </div>

            <div className="col-2" style={{marginTop: "150px"}}>
               <div className="">
                  <div>
                     <button className="ghe text-center">
                        {" "}
                        <CheckOutlined
                           style={{
                              marginBottom: 7.5,
                              fontWeight: "bold",
                           }}
                        />{" "}
                     </button>{" "}
                     <span className="font-weight-bold mt-4">Ghế chưa đặt</span>
                  </div>
                  <div>
                     <button className="ghe gheDangDat text-center">
                        {" "}
                        <CheckOutlined
                           style={{
                              marginBottom: 7.5,
                              fontWeight: "bold",
                           }}
                        />
                     </button>{" "}
                     <span className="font-weight-bold mb-4">Ghế đang đặt</span>
                  </div>
                  <div>
                     <button className="ghe gheVip text-center">
                        <CheckOutlined
                           style={{
                              marginBottom: 7.5,
                              fontWeight: "bold",
                           }}
                        />
                     </button>{" "}
                     <span className="font-weight-bold mb-4">Ghế vip</span>
                  </div>
                  <div>
                     <button className="ghe gheDaDat text-center">
                        {" "}
                        <CheckOutlined
                           style={{
                              marginBottom: 7.5,
                              fontWeight: "bold",
                           }}
                        />{" "}
                     </button>{" "}
                     <span className="font-weight-bold mb-4">Ghế đã đặt</span>
                  </div>
                  <div>
                     <button className="ghe gheDaDuocDat text-center">
                        {" "}
                        <CheckOutlined
                           style={{
                              marginBottom: 7.5,
                              fontWeight: "bold",
                           }}
                        />{" "}
                     </button>{" "}
                     <span className="font-weight-bold mb-4">Ghế mình đặt</span>
                  </div>
               </div>
            </div>

            <div className="col-3">
               <h3 className="text-center display-4 text-success">
                  {danhSachGheDangDat
                     .reduce((tongTien, ghe, index) => {
                        return (tongTien += ghe.giaVe);
                     }, 0)
                     .toLocaleString()}{" "}
                  đồng
               </h3>
               <hr />
               <h3 className="text-center">{thongTinPhim.tenPhim}</h3>
               <p>
                  <span className="font-weight-bold">Địa điểm:</span>{" "}
                  {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
               </p>
               <p>
                  <span className="font-weight-bold">Ngày chiếu:</span>{" "}
                  {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
               </p>
               <hr />
               <div className="d-flex justify-content-between">
                  <span className="text-danger">Ghế</span>
                  <span>
                     {_.sortBy(danhSachGheDangDat, ["stt"]).map(
                        (gheDD, index) => {
                           return <span key={index}> {gheDD.stt}</span>;
                        }
                     )}
                  </span>
                  <span className="text-success">
                     {danhSachGheDangDat
                        .reduce((tongTien, ghe, index) => {
                           return (tongTien += ghe.giaVe);
                        }, 0)
                        .toLocaleString()}
                  </span>
               </div>
               <hr />
               <div>
                  <i>Email</i> <br />
                  {userLogin.email}
               </div>
               <hr />
               <div>
                  <i>Số điện thoại</i> <br />
                  {userLogin.soDT}
               </div>
               <div style={{marginTop: "50px"}}>
                  <button
                     onClick={() => {
                        const thongTinDatVe = new ThongTinDatVe();
                        thongTinDatVe.maLichChieu = props.match.params.id;
                        thongTinDatVe.danhSachVe = danhSachGheDangDat;

                        dispatch(datVeAction(thongTinDatVe));
                     }}
                     className="w-100 btn btn-primary"
                     style={{padding: "8px 0px"}}>
                     Đặt vé
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

const {TabPane} = Tabs;

const onChange = (key) => {};

export default function (props) {
   const {tabActive} = useSelector((state) => state.QuanLyDatVeReducer);
   const {userLogin} = useSelector((state) => state.QuanLyNguoiDungReducer);

   const dispatch = useDispatch();

   useEffect(() => {
      return () => {
         dispatch({
            type: "CHANGE_TAB_ACTIVE",
            number: "1",
         });
      };
   }, []);

   const operations = (
      <Fragment>
         {!_.isEmpty(userLogin) ? (
            <Fragment>
               {" "}
               <button
                  className="btn btn-primary"
                  onClick={() => {
                     history.push("/profile/:tk");
                  }}>
                  {" "}
                  <div
                     style={{
                        width: 50,
                        // height: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                     className=""></div>
                  Hello ! {userLogin.taiKhoan}
               </button>{" "}
               <button
                  onClick={() => {
                     localStorage.removeItem(USER_LOGIN);
                     localStorage.removeItem(TOKEN);
                     history.push("/home");
                     window.location.reload();
                  }}
                  className="btn btn-outline-danger">
                  Đăng xuất
               </button>{" "}
            </Fragment>
         ) : (
            ""
         )}
      </Fragment>
   );

   return (
      <div className="py-3 px-5">
         <Tabs
            tabBarExtraContent={operations}
            defaultActiveKey="1"
            activeKey={tabActive}
            onChange={(key) => {
               dispatch({
                  type: "CHANGE_TAB_ACTIVE",
                  number: key.toString(),
               });
            }}>
            <TabPane
               tab={
                  <div
                     className="text-center"
                     style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                     }}>
                     <NavLink to="/">
                        <HomeOutlined style={{marginLeft: 10, fontSize: 25}} />
                     </NavLink>
                  </div>
               }
               key="3"></TabPane>
            <TabPane tab="Chọn ghế và thanh toán" key="1">
               <Checkout {...props} />
            </TabPane>
            <TabPane tab="Kết quả đặt vé" key="2">
               <KetQuaDatVe {...props} />
            </TabPane>
         </Tabs>
      </div>
   );
}

export function KetQuaDatVe(props) {
   const dispatch = useDispatch();
   const {thongTinNguoiDung} = useSelector(
      (state) => state.QuanLyNguoiDungReducer
   );

   const {userLogin} = useSelector((state) => state.QuanLyNguoiDungReducer);

   useEffect(() => {
      const action = layThongTinNguoiDungAction();
      dispatch(action);
   }, []);

   const renderTicketItem = function () {
      return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
         const seats = _.first(ticket.danhSachGhe);
         return (
            <article className="postcard light blue" key={index}>
               <div className="postcard__img_link" href="#">
                  <img
                     className="postcard__img"
                     src={ticket.hinhAnh}
                     alt={ticket.tenPhim}
                  />
               </div>
               <div className="postcard__text t-dark">
                  <h1 className="postcard__title blue">
                     <div href="#">{ticket.tenPhim}</div>
                  </h1>
                  <div className="postcard__subtitle ">
                     <div>
                        <i className="fas fa-calendar-alt mr-2" />
                        <span className="font-weight-bold">
                           Giờ chiếu:
                        </span>{" "}
                        {moment(ticket.ngayDat).format("hh:mm A")} -{" "}
                        <span className="font-weight-bold">Ngày chiếu:</span>{" "}
                        {moment(ticket.ngayDat).format("DD-MM-YYYY")} .
                     </div>
                     <div>
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        <span className="font-weight-bold">Địa điểm:</span>{" "}
                        {seats.tenHeThongRap}{" "}
                     </div>
                  </div>
                  <div className="postcard__bar" />
                  <div className="postcard__preview-txt">
                     <span className="font-weight-bold">Tên rạp:</span>{" "}
                     {seats.tenCumRap} -{" "}
                     <span className="font-weight-bold">Ghế:</span>{" "}
                     {ticket.danhSachGhe.map((ghe, index) => {
                        return (
                           <span
                              className="text-success font-weight-bold"
                              key={index}>
                              {" "}
                              [ {ghe.tenGhe} ]{" "}
                           </span>
                        );
                     })}
                  </div>
                  <ul className="postcard__tagbox">
                     <li className="tag__item">
                        <i className="fas fa-tag mr-2" />
                        {ticket.thoiLuongPhim} mins
                     </li>
                  </ul>
               </div>
            </article>
         );
      });
   };

   return (
      <div className="item_card">
         <section className="light">
            <div className="container py-2">
               <div className="h1 text-center text-dark" id="pageHeaderTitle">
                  Thông tin đặt vé khách hàng
               </div>

               {renderTicketItem()}
            </div>
         </section>
      </div>
   );
}
