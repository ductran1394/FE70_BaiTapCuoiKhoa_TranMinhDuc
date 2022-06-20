import React, {Suspense} from "react";
import ReactDOM from "react-dom";

// import ReactDOM from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {store} from "./redux/configStore";
import {DOMAIN} from "./util/settings/config";
// import * as signalR from "@aspnet/signalr";
import i18n from "./i18n";

import "./index.css";
import "antd/dist/antd.css";
import Loading from "./components/Loading/Loading";

// export const connection = new signalR.HubConnectionBuilder()
//    .withUrl(`${DOMAIN}/DatVeHub`)
//    .configureLogging(signalR.LogLevel.Information)
//    .build();

// connection
//    .start()
//    .then(() => {
//       ReactDOM.render(
//          <Provider store={store}>
//             <App />
//          </Provider>,
//          document.getElementById("root")
//       );
//    })
//    .catch((errors) => {
//       console.log(errors);
//    });

ReactDOM.render(
   <Provider store={store}>
      <Suspense fallback={<Loading />}>
         <App />
      </Suspense>
   </Provider>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
