import React, {Fragment, useEffect} from "react";
import {Button, Table} from "antd";
import {Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {
   layDanhSachPhimAction,
   xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimActions";
import {
   CalendarOutlined,
   DeleteOutlined,
   EditOutlined,
} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {history} from "../../../App";

const {Search} = Input;

export default function Films() {
   const {arrFilmDefault} = useSelector((state) => state.QuanLyPhimReducer);
   useEffect(() => {
      dispatch(layDanhSachPhimAction());
   }, []);

   const columns = [
      {
         title: "maPhim",
         dataIndex: "maPhim",
         sorter: (a, b) => a.maPhim - b.maPhim,
         sortDirections: ["descend"],
         width: "15%",
      },
      {
         title: "Hình ảnh",
         dataIndex: "hinhAnh",
         render: (text, film, index) => {
            return (
               <Fragment>
                  <img
                     key={index}
                     src={film.hinhAnh}
                     alt={film.tenPhim}
                     width={50}
                     height={50}
                     onError={(e) => {
                        e.target.onError = null;
                        e.target.src = `https://picsum.photos/id/${index}/50/50`;
                     }}
                  />
               </Fragment>
            );
         },
         width: "15%",
      },
      {
         title: "Tên phim",
         dataIndex: "tenPhim",
         sorter: (a, b) => {
            let tenPhimA = a.tenPhim.toLowerCase().trim();
            let tenPhimB = b.tenPhim.toLowerCase().trim();
            if (tenPhimA > tenPhimB) {
               return 1;
            }
            return -1;
         },
         sortDirections: ["descend", "ascend"],
         width: "25%",
      },
      {
         title: "Mô tả",
         dataIndex: "moTa",

         render: (text, film) => {
            return (
               <Fragment>
                  {film.moTa.length > 50
                     ? film.moTa.substr(0, 50) + " ..."
                     : film.moTa}
               </Fragment>
            );
         },
         sortDirections: ["descend", "ascend"],
         width: "25%",
      },
      {
         title: "Hành động",
         dataIndex: "maPhim",
         render: (text, film) => {
            return (
               <Fragment>
                  <NavLink
                     key={1}
                     className=" mr-2  text-2xl"
                     to={`/admin/films/edit/${film.maPhim}`}>
                     <EditOutlined style={{color: "blue"}} />{" "}
                  </NavLink>
                  <span
                     style={{cursor: "pointer"}}
                     key={2}
                     className="text-2xl"
                     onClick={() => {
                        if (
                           window.confirm(
                              "Bạn có chắc muốn xoá phim " + film.tenPhim
                           )
                        ) {
                           dispatch(xoaPhimAction(film.maPhim));
                        }
                     }}>
                     <DeleteOutlined style={{color: "red"}} />{" "}
                  </span>

                  <NavLink
                     key={3}
                     className=" mr-2 text-2xl"
                     to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`}
                     onClick={() => {
                        localStorage.setItem(
                           "filmParams",
                           JSON.stringify(film)
                        );
                     }}>
                     <CalendarOutlined style={{color: "green"}} />{" "}
                  </NavLink>
               </Fragment>
            );
         },
         sortDirections: ["descend", "ascend"],
         width: "25%",
      },
   ];

   const data = arrFilmDefault;

   const onSearch = (value) => {
      dispatch(layDanhSachPhimAction(value));
   };

   const onChange = (pagination, filters, sorter, extra) => {};

   const dispatch = useDispatch();

   return (
      <div className="">
         <h3 className="display-4">Quản lý phim</h3>
         <Button
            className="mb-4"
            onClick={() => {
               history.push("/admin/films/addnew");
            }}>
            Thêm phim
         </Button>
         <Search
            className="mb-4"
            placeholder="Tìm kiếm phim"
            enterButton="Search"
            size="large"
            onSearch={onSearch}
         />

         <Table
            rowKey={"maPhim"}
            columns={columns}
            dataSource={data}
            onChange={onChange}
         />
      </div>
   );
}
