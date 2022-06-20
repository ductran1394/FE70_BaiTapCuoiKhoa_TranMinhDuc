import React from "react";

export default function News() {
   return (
      <div className="container">
         <h1 className="display-4 mt-5">
            CHƯƠNG TRÌNH THẺ THÀNH VIÊN CYBERLEARN
         </h1>
         <h3 className="my-5">
            THỂ LỆ VÀ QUY ĐỊNH VỀ CHƯƠNG TRÌNH THÀNH VIÊN CYBERLEARN
         </h3>

         <div className="content" style={{fontSize: "16px"}}>
            <div id="1">
               <h4 className="font-weight-bold">
                  1/ Cách đăng ký làm thành viên Cyberlearn
               </h4>
               <div className="ml-5">
                  Nơi đăng ký: Quầy Cyberlearn TicketBox
                  <br />
                  Thông tin đăng ký bắt buộc: Họ và tên, Số điện thoại, Số CMND,
                  Email.
                  <br />
                  1 SĐT/Email/CMND chỉ đăng ký được duy nhất 1 tài khoản/1 thẻ
                  thành viên với 1 mã số duy nhất
                  <br />
                  Tài khoản được quyền sử dụng ngay
                  <br />
                  Trong trường hợp mất thẻ thành viên cần mang CMND đến quầy để
                  làm lại thẻ.
               </div>
            </div>

            <div id="2">
               <h4 className="font-weight-bold mt-5">
                  2/ Hướng dẫn thể lệ tích điểm
               </h4>
               <div className="text-center my-5">
                  <img
                     src="https://file.hstatic.net/1000296517/file/uu_dai_612fcb7b7800442cb1550173db480bb1_grande.jpg"
                     width="582"
                     height="656"
                  />
               </div>
               <div className="ml-5">
                  <b>Cinemax Silver (Free).</b>
                  <br />
                  Khách hàng đăng kí mới.
                  <br />
                  Cộng điểm quy đổi thêm 3% số tiền chi tiêu cho vé và 5% số
                  tiền chi tiêu cho bắp nước
                  <br />
                  <b> Cinemax Gold ({">"}=2.000.000vnđ).</b>
                  <br />
                  Khách hàng lên hạng thẻ Gold được ưu đãi lớn hơn.
                  <br />
                  Cộng điểm quy đổi thêm 5% số tiền chi tiêu cho vé và 7% số
                  tiền chi tiêu cho bắp nước.
                  <br />
                  Tặng 1 Combo bắp nước ưu đãi cho ngày Sinh nhật.
                  <br />
                  <b> Cinemax Diamond ({">"}=4.000.000vnđ).</b>
                  <br />
                  Khách hàng lên thẻ Diamond được ưu đãi khủng.
                  <br />
                  Cộng điểm quy đổi thêm 7% số tiền chi tiêu cho vé và 10% số
                  tiền chi tiêu cho bắp nước
                  <br />
                  Tặng 1 cặp vé xem phim ưu đãi cho ngày Sinh nhật
                  <br />
                  <b>
                     Khách hàng thành viên nâng hạng khi đủ điều kiện lên hạng.
                     Khách hàng cần đến quầy đổi thẻ khi thăng hạng để nhận thẻ
                     mới.
                  </b>
                  <br />
                  Điểm thành viên chỉ sử dụng trong năm, sẽ reset về 0 điểm vào
                  23h59’ ngày 31/12 hàng năm.
                  <br />
                  1 Thẻ thành viên được phép tối đa 5 lần quét thẻ tích điểm mỗi
                  ngày.
                  <br />
                  Khi được nâng hạng thành viên sẽ được giữ nguyên hạng đó về
                  sau.
               </div>
            </div>

            <div id="3">
               <h4 className="font-weight-bold mt-5">
                  3/ Điều kiện sử dụng điểm đổi quà tặng
               </h4>
               <div className="text-center my-5">
                  <img src="https://file.hstatic.net/1000296517/file/doi_diem_7a62f60dfe4441cf8cfb059bd25726c3_grande.jpg" />
               </div>
               <div className="ml-5">
                  15 điểm = 1 nước ngọt.
                  <br />
                  25 điểm = 1 bắp.
                  <br />
                  50 điểm = 1 combo bắp nước.
                  <br />
                  55 điểm = 1 vé 2D.
                  <br />
                  100 điểm = 1 cặp vé 2D.
               </div>
            </div>

            <div id="4" className="mb-5">
               <h4 className="font-weight-bold mt-5">
                  4/ Điều khoản sử dụng điểm
               </h4>
               <div className="ml-5">
                  Khách hàng thành viên có thể sử dụng điểm thưởng để đổi bắp,
                  nước, vé xem phim, combo.
                  <br />
                  Sau khi dùng điểm đổi quà sẽ bị trừ điểm tương ứng, số điểm
                  không sử dụng hoặc không sử dụng hết trong năm sẽ bị reset về
                  0 điểm
                  <br />
                  Thành viên phải có đủ số điểm tích lũy tương ứng với phần quà.
                  <br />
                  Không được chuyển nhượng điểm sang tài khoản khác.
                  <br />
                  Lưu ý: mỗi Hạng tài khoản được quyền quy đổi điểm thưởng thành
                  các loại ưu đãi khác nhau
                  <br />
                  Các ưu đãi dành cho thành viên có thể được thay đổi và cập
                  nhật thường xuyên. Vui lòng kiểm tra thông tin tại website để
                  biết thêm chi tiết.
                  <br />
                  <i>Cyberlearn có quyền quyết định bất kỳ lúc nào về việc:</i>
                  <br />
                  Chỉnh sửa hoặc chấm dứt Chương trình thành viên.
                  <br />
                  Từ chối việc đăng ký thành viên
                  <br />
                  Hủy bỏ thành viên vì những lý do chính đáng.
                  <br />
                  Thông tin chương trình có thể được thay đổi mà không báo
                  trước, các bạn vui lòng cập nhật thường xuyên trên website.
                  <br />
               </div>
            </div>
         </div>
      </div>
   );
}
