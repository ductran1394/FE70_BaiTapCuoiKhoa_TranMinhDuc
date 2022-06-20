import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import {LoadingOutlined} from "@ant-design/icons";
import {Spin} from "antd";

export default function Loading(props) {
   const {isLoading} = useSelector((state) => state.LoadingReducer);

   const antIcon = (
      <LoadingOutlined
         style={{
            fontSize: 60,
            fontWeight: "bold",
            color: "white",
         }}
         spin
      />
   );

   return (
      <Fragment>
         {isLoading ? (
            <div
               style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 99,
               }}>
               <div className="text-white font-weight-bold display-4 ">
                  <Spin indicator={antIcon} />
                  Loading ...
               </div>
            </div>
         ) : (
            ""
         )}
      </Fragment>
   );
}
