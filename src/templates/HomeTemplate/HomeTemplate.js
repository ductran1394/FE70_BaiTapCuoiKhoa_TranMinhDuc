import {Fragment, useEffect} from "react";
import {Route} from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

import "./HomeTemplate.scss";

export const HomeTemplate = (props) => {
   const {Component, ...restProps} = props;

   useEffect(() => {
      window.scrollTo(0, 0);
   });

   return (
      <Route
         {...restProps}
         render={(propsRoute) => {
            return (
               <Fragment>
                  <div className="HomeTemplate">
                     <Header {...propsRoute} />

                     <Component {...propsRoute} />

                     <Footer {...propsRoute} />
                  </div>
               </Fragment>
            );
         }}
      />
   );
};
