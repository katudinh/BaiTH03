import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ padding: '40px', color: 'white', flex: 1 }}>
      <h1>Về chúng tôi - ChatChit Team</h1>
      <p style={{ marginTop: '20px' }}>
        Đây là dự án ứng dụng nhắn tin được xây dựng bằng React và ASP.NET Core.
      </p>
      <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
        <li>Phát triển bởi: Lớp Công nghệ thông tin</li>
        <li>Tính năng: Nhắn tin thời gian thực, Quản lý nhóm chat.</li>
      </ul>
      <button 
        onClick={() => window.history.back()} 
        style={{ marginTop: '20px', padding: '10px', cursor: 'pointer' }}
      >
        ← Quay lại Chat
      </button>
    </div>
  );
};

export default AboutUs;