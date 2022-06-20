import React, {useState} from "react";
import {Tabs} from "antd";
import {NavLink} from "react-router-dom";
import moment from "moment";

const {TabPane} = Tabs;

const HomeMenu = (props) => {
   const [tabPosition, setTabPosition] = useState("left");

   const changeTabPosition = (e) => {
      setTabPosition(e.target.value);
   };

   const {heThongRapChieu} = props;

   const renderHeThongRap = () => {
      
      return heThongRapChieu?.map((heThongRap, index) => {
         return (
            <TabPane
               key={index}
               tab={
                  <img
                     src={heThongRap.logo}
                     className="rounded-circle"
                     width="50"
                  />
               }>
               <Tabs tabPosition={tabPosition}>
                  {heThongRap.lstCumRap?.slice(0, 4).map((cumRap, index) => {
                     
                     return (
                        <TabPane
                           tab={
                              <div
                                 style={{
                                    width: "300px",
                                    display: "flex",
                                 }}>
                                 <img
                                    src={cumRap.hinhAnh}
                                    className="rounded-circle mr-2"
                                    width="50"
                                    height="50"
                                 />
                                 <div className="text-left">
                                    {cumRap.tenCumRap}
                                    <p style={{color: "red"}}>Chi tiết</p>
                                 </div>
                              </div>
                           }
                           key={index}>
                           {cumRap.danhSachPhim
                              .slice(0, 6)
                              .map((phim, index) => {
                                 return (
                                    <div key={index}>
                                       <div className="mt-2">
                                          <div
                                             style={{
                                                display: "flex",
                                             }}>
                                             <img
                                                src={phim.hinhAnh}
                                                alt={phim.tenPhim}
                                                onError={(e) => {
                                                   e.target.onerror = null;
                                                   e.target.src =
                                                      "https://picsum.photos/75/75";
                                                }}
                                                width="50"
                                                height="50"
                                             />
                                             <div className="ml-4">
                                                <div
                                                   className="font-weight-bold"
                                                   style={{
                                                      fontSize: "16px",
                                                   }}>
                                                   {phim.tenPhim}
                                                </div>
                                                <div>{cumRap.diaChi}</div>
                                                <div>
                                                   <div className="row ml-1">
                                                      {phim.lstLichChieuTheoPhim
                                                         ?.slice(0, 8)
                                                         .map(
                                                            (
                                                               lichChieu,
                                                               index
                                                            ) => {
                                                               return (
                                                                  <NavLink
                                                                     to={`/checkout/${lichChieu.maLichChieu}`}
                                                                     className="mr-4"
                                                                     style={{
                                                                        color: "red",
                                                                        lineHeight:
                                                                           "22px",
                                                                     }}
                                                                     key={
                                                                        index
                                                                     }>
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
         );
      });
   };

   return (
      <>
         <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
      </>
   );
};

export default HomeMenu;
