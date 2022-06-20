import {useEffect} from "react";
import {Route} from "react-router";
import "./RegisterTemplate.scss";

export const RegisterTemplate = (props) => {
   const {Component, ...restProps} = props;

   useEffect(() => {
      window.scrollTo(0, 0);
   });

   return (
      <Route
         {...restProps}
         render={(propsRoute) => {
            return (
               <div className="RegisterTemplate">
                  <div className="container">
                     <h1 className="text-center py-5">Đăng ký tài khoản</h1>
                     <Component {...propsRoute} />
                  </div>
               </div>
            );
         }}
      />
   );
};
