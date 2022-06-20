import React, {useEffect} from "react";

import {CustomCard} from "@tsamantanis/react-glassmorphism";
import {useSelector, useDispatch} from "react-redux";
import {layThongTinChiTietPhim} from "../../redux/actions/QuanLyRapActions";
import moment from "moment";

import {Tabs, Rate} from "antd";

import "@tsamantanis/react-glassmorphism/dist/index.css";

import "./Detail.scss";
import "./circle.css";

import {NavLink} from "react-router-dom";

const {TabPane} = Tabs;

export default function Detail(props) {
   const filmDetail = useSelector(
      (state) => state.QuanLyPhimReducer.filmDetail
   );

   const dispatch = useDispatch();

   useEffect(() => {
      let {id} = props.match.params;

      dispatch(layThongTinChiTietPhim(id));
   }, []);

   return (
      <div
         style={{
            backgroundImage: `url(${filmDetail.hinhAnh})`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            minHeight: "100vh",
         }}>
         <CustomCard
            style={{minHeight: "100vh"}}
            effectColor="#000"
            color="#000"
            blur={75}
            borderRadius={-10}>
            <div className="container">
               <div className="row">
                  <div className="movie_card col-8" id="bright">
                     <div className="info_section">
                        <div className="movie_header">
                           <img
                              className="locandina"
                              src={filmDetail.hinhAnh}
                           />
                           <h1 className="tenPhim">{filmDetail.tenPhim}</h1>
                           <h4>
                              Ngày chiếu:{" "}
                              {moment(filmDetail.ngayKhoiChieu).format(
                                 "DD/MM/YYYY"
                              )}
                           </h4>
                        </div>
                        <div className="movie_desc">
                           <p className="text moTa">{filmDetail.moTa}</p>
                        </div>
                        <div className="movie_social">
                           <ul>
                              <li>
                                 <i className="">Share</i>
                              </li>
                              <li>
                                 <i className="">Like</i>
                              </li>
                              <li>
                                 <i className="">Đánh gía</i>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div
                        className="blur_back"
                        style={{
                           backgroundImage: `url(${filmDetail.hinhAnh})`,
                           backgroundSize: "100%",
                           backgroundPosition: "center",
                           backgroundRepeat: "no-repeat",
                        }}></div>
                  </div>

                  <div className="col-4 d-flex flex-column text-align-center text-center">
                     <h1
                        style={{
                           color: "orange",
                           fontWeight: "bold",
                           fontSize: "24px",
                           marginTop: "100px",
                        }}>
                        Đánh giá
                     </h1>
                     <h1 style={{}} className="text-green-400 text-2xl">
                        <Rate
                           allowHalf
                           value={filmDetail.danhGia / 2}
                           style={{color: "orange", fontSize: 30}}
                        />
                     </h1>
                     <div
                        className={`c100 p${
                           filmDetail.danhGia * 10
                        } big orange text-center`}
                        style={{
                           marginLeft: "50%",
                           transform: "translateX(-50%)",
                        }}>
                        <span>{filmDetail.danhGia * 10}%</span>
                        <div className="slice">
                           <div className="bar"></div>
                           <div className="fill"></div>
                        </div>
                     </div>
                  </div>
               </div>

               <Tabs
                  defaultActiveKey="1"
                  centered
                  style={{backgroundColor: "white"}}>
                  <TabPane
                     tab="Lịch chiếu"
                     key="1"
                     style={{minHeight: "300px"}}>
                     <Tabs tabPosition={"left"}>
                        {filmDetail.heThongRapChieu?.map((htr, index) => {
                           return (
                              <TabPane
                                 tab={
                                    <div>
                                       <img
                                          className="rounded-circle mr-2"
                                          width="50"
                                          src={htr.logo}
                                          alt={htr.tenHeThongRap}
                                       />
                                       {htr.tenHeThongRap}
                                       <hr />
                                    </div>
                                 }
                                 key={index}>
                                 {htr.cumRapChieu?.map((cumRap, index) => {
                                    return (
                                       <div key={index}>
                                          <div
                                             style={{
                                                display: "flex",
                                                marginBottom: "8px",
                                             }}>
                                             <img
                                                src={cumRap.hinhAnh}
                                                className="rounded-circle mr-4"
                                                width="50"
                                                height="50"
                                             />
                                             <div className="text-left ">
                                                <div
                                                   className="font-weight-bold"
                                                   style={{color: "blue"}}>
                                                   {cumRap.tenCumRap}
                                                </div>

                                                <div style={{color: "red"}}>
                                                   Địa chỉ: {cumRap.diaChi}
                                                </div>

                                                <div className="my-2">
                                                   {cumRap.lichChieuPhim
                                                      ?.slice(0, 8)
                                                      .map(
                                                         (lichChieu, index) => {
                                                            return (
                                                               <NavLink
                                                                  to={`/checkout/${lichChieu.maLichChieu}`}
                                                                  className="mr-4 font-weight-bold"
                                                                  style={{
                                                                     color: "green",
                                                                     lineHeight:
                                                                        "22px",
                                                                  }}
                                                                  key={index}>
                                                                  {moment(
                                                                     lichChieu.ngayChieuGioChieu
                                                                  ).format(
                                                                     "hh:mm A"
                                                                  )}
                                                               </NavLink>
                                                            );
                                                         }
                                                      )}
                                                </div>
                                             </div>
                                          </div>

                                          <hr />
                                       </div>
                                    );
                                 })}
                              </TabPane>
                           );
                        })}
                     </Tabs>
                  </TabPane>
                  <TabPane
                     tab="Sự kiện và vé nhóm"
                     key="2"
                     style={{minHeight: "300px"}}>
                     <div className="container" style={{width: "70%"}}>
                        <div className="my-4">
                           Bạn đang tìm giải pháp quảng cáo độc đáo để tăng
                           doanh thu cho công ty? Bạn muốn gửi quà tặng có ý
                           nghĩa đến đối tác thay cho lời cảm ơn về mối hợp tác
                           lâu bền?
                        </div>
                        <div>
                           Bạn muốn thưởng thức những bộ phim bom tấn thật riêng
                           tư cùng bạn bè, người thân hay đồng nghiệp? Với kinh
                           nghiệm dẫn đầu trong việc tổ chức sự kiện chiếu phim
                           trong không gian riêng biệt, cung cấp vé xem phim
                           hoặc thẻ quà tặng với số lượng lớn cho doanh nghiệp,
                           chúng tôi tự hào sẽ mang đến cho đối tác những giải
                           pháp điện ảnh chuyên nghiệp.
                        </div>
                     </div>
                  </TabPane>
                  <TabPane
                     tab="Thẻ quà tặng"
                     key="3"
                     style={{minHeight: "300px"}}>
                     <div className="container" style={{width: "70%"}}>
                        <div className="my-4">
                           <b>CGV hân hạnh phát hành Thẻ Quà Tặng</b> - Phương
                           tiện thanh toán hiện đại và thuận tiện. Đây là một
                           món quà điện ảnh tuyệt vời mà bạn có thể chia sẻ và
                           gửi tặng bạn bè, gia đình, đồng nghiệp và đối tác.
                           Chắc chắn đây sẽ là món quà ngập tràn sắc màu điện
                           ảnh thật ý nghĩa và tuyệt vời dành cho những người
                           bạn yêu quý.
                        </div>
                        <div>
                           <b>Thẻ Quà Tặng Cyberlearn</b> là loại thẻ trả trước.
                           Với số tiền trong thẻ, bạn có thể sử dụng Thẻ để đổi
                           vé xem phim hoặc bất kì sản phẩm nào tại quầy Bắp
                           Nước của
                           <b> Cyberlearn Cinemas</b>.Với vẻ ngoài sang trọng và
                           sự tiện lợi, bạn có thể lựa chọn các mệnh giá cho Thẻ
                           Quà Tặng như 300.000đ; 500.000đ; hoặc 1.000.000đ. Thẻ
                           có thời hạn sử dụng trong 1 năm và đặc biệt bạn có
                           thể nạp thêm tiền để gia hạn bất cứ lúc nào. Bạn có
                           thể mua thẻ thật dễ dàng mà không cần đăng ký thông
                           tin chủ thẻ
                        </div>
                     </div>
                  </TabPane>
               </Tabs>
            </div>
         </CustomCard>
      </div>
   );
}
