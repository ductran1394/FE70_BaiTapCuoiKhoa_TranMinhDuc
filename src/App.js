import "./App.css";
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router";
import {HomeTemplate} from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Register from "./pages/Register/Register";
import LogIn from "./pages/LogIn/LogIn";
import Detail from "./pages/Detail/Detail";
import Checkout from "./pages/Checkout/Checkout";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTemplate";
import {UserTemplate} from "./templates/UserTemplate/UserTemplate";
import Loading from "./components/Loading/Loading";
import Profile from "./pages/Profile/Profile";
import ShowTime from "./pages/Admin/Showtime/ShowTime";
import AddNew from "./pages/Admin/Films/AddNew/AddNew";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Films from "./pages/Admin/Films/Films";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Edit from "./pages/Admin/Films/Edit/Edit";
import {RegisterTemplate} from "./templates/UserTemplate/RegisterTemplate";
import AddNewUser from "./pages/Admin/Dashboard/AddNewUser";
import EditUser from "./pages/Admin/Dashboard/EditUser";

// const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory();

function App() {
   return (
      <Router history={history}>
         <Loading />
         <Switch>
            <HomeTemplate path="/home" exact Component={Home} />
            <HomeTemplate path="/contact" exact Component={Contact} />
            <HomeTemplate path="/news" exact Component={News} />
            <HomeTemplate path="/detail/:id" exact Component={Detail} />
            <RegisterTemplate path="/register" exact Component={Register} />
            <UserTemplate path="/login" exact Component={LogIn} />
            <HomeTemplate path="/profile/:tk" exact Component={Profile} />
            <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

            <AdminTemplate path="/admin" exact Component={Dashboard} />
            <AdminTemplate
               path="/admin/addnewuser"
               exact
               Component={AddNewUser}
            />
            <AdminTemplate
               path="/admin/edituser/:tk"
               exact
               Component={EditUser}
            />
            <AdminTemplate path="/admin/films" exact Component={Films} />
            <AdminTemplate
               path="/admin/films/addnew"
               exact
               Component={AddNew}
            />
            <AdminTemplate
               path="/admin/films/edit/:id"
               exact
               Component={Edit}
            />
            <AdminTemplate
               path="/admin/films/showtime/:id/:tenphim"
               exact
               Component={ShowTime}
            />

            <AdminTemplate path="/admin/users" exact Component={Dashboard} />

            <HomeTemplate path="" exact Component={Home} />
         </Switch>
      </Router>
   );
}

export default App;
