import Axios from "axios";
import {DOMAIN, TOKEN, TOKEN_BY_CLASS} from "../util/settings/config";

export class baseService {
   put = (url, model) => {
      return Axios({
         url: `${DOMAIN}${url}`,
         method: "PUT",
         data: model,
         headers: {
            Authorization: "Bearer " + localStorage.getItem(TOKEN),
            TokenCybersoft: TOKEN_BY_CLASS,
         },
      });
   };

   post = (url, model) => {
      return Axios({
         url: `${DOMAIN}${url}`,
         method: "POST",
         data: model,
         headers: {
            Authorization: "Bearer " + localStorage.getItem(TOKEN),
            TokenCybersoft: TOKEN_BY_CLASS,
         },
      });
   };

   get = (url) => {
      return Axios({
         url: `${DOMAIN}${url}`,
         method: "GET",
         headers: {
            Authorization: "Bearer " + localStorage.getItem(TOKEN),
            TokenCybersoft: TOKEN_BY_CLASS,
         },
      });
   };

   delete = (url) => {
      return Axios({
         url: `${DOMAIN}${url}`,
         method: "DELETE",
         headers: {
            Authorization: "Bearer " + localStorage.getItem(TOKEN),
            TokenCybersoft: TOKEN_BY_CLASS,
         },
      });
   };
}
