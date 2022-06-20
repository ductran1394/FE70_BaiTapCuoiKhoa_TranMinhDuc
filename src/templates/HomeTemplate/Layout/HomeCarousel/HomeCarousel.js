import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import {Carousel} from "antd";
import {getCarouselAction} from "../../../../redux/actions/CarouselActions";

export default function HomeCarousel(props) {
   const {arrImg} = useSelector((state) => state.CarouselReducer);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getCarouselAction());
   }, []);

   const contentStyle = {
      height: "600px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      backgroundPosition: "center",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
   };

   const renderImg = () => {
      return arrImg.map((item, index) => {
         return (
            <div key={index}>
               <div>
                  <div
                     style={{
                        ...contentStyle,
                        backgroundImage: `url(${item.hinhAnh})`,
                     }}>
                     <img
                        className="w-100"
                        src={item.hinhAnh}
                        alt={item.hinhAnh}
                     />
                  </div>
               </div>
            </div>
         );
      });
   };

   return (
      <div className="HomeCarousel">
         <Carousel effect="fade" style={{width: "100%", padding: 0, margin: 0}}>
            {renderImg()}
         </Carousel>
      </div>
   );
}
