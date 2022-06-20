import React from "react";
import {useSelector} from "react-redux";
import "./Footer.css";

import _ from "lodash";

export default function Footer(props) {
   const {heThongRapChieu} = useSelector((state) => state.QuanLyRapReducer);
   const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) =>
      _.pick(heThongRap, ["maHeThongRap", "tenHeThongRap", "logo"])
   );

   return (
      <footer className="site-footer ">
         <div className="container">
            <div className="row">
               <div className="col-sm-12 col-md-6">
                  <h6>Về chúng tôi</h6>
                  <p className="text-justify">
                     CÔNG TY TNHH CYBERLEARN VIETNAM. Giấy CNĐKDN: 0303675393,
                     đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5
                     ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.Địa
                     Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14,
                     Q.10, TPHCM.Hotline: 1900 6017
                  </p>
               </div>

               <div className="col-xs-6 col-md-3">
                  <h6>Đối tác</h6>
                  <div className="footer-links row">
                     {arrHeThongRap.map((htr, index) => {
                        return (
                           <div key={index} className="col-3 mt-2">
                              <img src={htr.logo} style={{width: 40}} />
                           </div>
                        );
                     })}
                  </div>
               </div>

               <div className="col-xs-6 col-md-3">
                  <h6>Liên kết</h6>
                  <ul className="footer-links">
                     <li>
                        <a href="http://scanfcode.com/about/">Về chúng tôi</a>
                     </li>
                     <li>
                        <a href="http://scanfcode.com/contact/">
                           Điều khoản và dịch vụ
                        </a>
                     </li>
                     <li>
                        <a href="http://scanfcode.com/contribute-at-scanfcode/">
                           Chăm sóc khách hàng
                        </a>
                     </li>
                     <li>
                        <a href="http://scanfcode.com/privacy-policy/">
                           Chính sách bảo mật
                        </a>
                     </li>
                     <li>
                        <a href="http://scanfcode.com/sitemap/">Liên hệ</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">
                     COPYRIGHT 2017 CYBERLEARN All RIGHTS RESERVED
                  </p>
               </div>

               <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="social-icons">
                     <li>
                        <a className="facebook mr-3" href="#">
                           <i className="fab fa-facebook"></i>
                        </a>
                     </li>
                     <li>
                        <a className="twitter mr-3" href="#">
                           <i className="fab fa-instagram"></i>
                        </a>
                     </li>
                     <li>
                        <a className="dribbble mr-3" href="#">
                           <i className="fab fa-linkedin"></i>
                        </a>
                     </li>
                     <li>
                        <a className="linkedin mr-5" href="#">
                           <i className="fab fa-youtube"></i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}
