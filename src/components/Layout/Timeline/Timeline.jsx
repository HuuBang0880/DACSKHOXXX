import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline">
      {/* Các sự kiện trong timeline */}
      <div className="timeline">
      <div className="event">
        <div className="event-dot"></div>
        <div className="event-content">
          <h3>1954</h3>
          <p>Viện Đại học Đà Lạt ra đời</p>
        </div>
      </div>
      <div className="event">
        <div className="event-dot"></div>
        <div className="event-content">
          <h3>10/1976</h3>
          <p>Thành lập trường Đại học Đà Lạt</p>
        </div>
      </div>
      <div className="event">
        <div className="event-dot"></div>
        <div className="event-content">
          <h3>2017</h3>
          <p>Được công nhận là thành viên chính thức của tổ chức CDIO quốc tế</p>
        </div>
      </div>
      <div className="event">
        <div className="event-dot"></div>
        <div className="event-content">
          <h3>2019</h3>
          <p>Được công nhận đạt chuẩn chất lượng giáo dục của Bộ Giáo dục và Đào tạo</p>
        </div>
      </div>
      <div className="event">
        <div className="event-dot"></div>
        <div className="event-content">
          <h3>2020</h3>
          <p>Thành viên của Mạng lưới đảm bảo chất lượng các trường đại học Đông Nam Á (AUN-QA)</p>
        </div>
      </div>

      {/* Thêm các sự kiện khác tương tự */}
    </div>
    </div>
  );
};

export default Timeline;
