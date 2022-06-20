import React from "react";
import {NavLink} from "react-router-dom";
import "./ItemFilm.scss";

export default function ItemFilm(props) {
   const {phim} = props;

   return (
      <div>
         <div className="itemFilm">
            <div className="wrapper">
               <div
                  className="card mr-2 mb-2 "
                  style={{width: "18rem", height: "500px"}}>
                  <div
                     className="blur"
                     style={{
                        backgroundImage: `url(${phim.hinhAnh})`,
                        backgroundPosition: "center",
                        backgroundSize: "100%",
                     }}>
                     <img
                        className="card-img-top"
                        style={{width: "0", height: "300px"}}
                        src={phim.hinhAnh}
                        alt="Card image cap"
                     />
                  </div>
                  <div className="descriptions">
                     <h1 className="card-title tenPhim mb-2">{phim.tenPhim}</h1>
                     <p className="card-text moTa">{phim.moTa}</p>
                     <div className="text-right">
                        <NavLink
                           to={`/detail/${phim.maPhim}`}
                           className="btn btn-primary">
                           Đặt vé
                        </NavLink>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
