import {useEffect} from "react";
import {Route} from "react-router";
import "./UserTemplate.scss";

export const UserTemplate = (props) => {
   const {Component, ...restProps} = props;

   useEffect(() => {
      window.scrollTo(0, 0);
   });

   return (
      <Route
         {...restProps}
         render={(propsRoute) => {
            return (
               <div className="userTemplate">
                  <div className="container">
                     <div className="d-flex justify-content-center vh-100">
                        <Component {...propsRoute} />
                     </div>
                  </div>
               </div>
            );
         }}
      />
   );
};
