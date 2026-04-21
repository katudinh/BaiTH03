import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Cần import các thẻ này
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import AboutUs from './pages/AboutUs'; // Giả sử bạn có file này
import './App.css';

function App() {
  const [currentChat, setCurrentChat] = useState('Nhóm Frontend Dev');

  return (
    <div className="app-container">
      {/* Sidebar luôn hiển thị ở mọi trang */}
      <Sidebar currentChat={currentChat} onSelectChat={setCurrentChat} />

      {/* Phần nội dung bên phải sẽ thay đổi tùy theo đường dẫn URL */}
      <div className="main-content" style={{ flex: 1, display: 'flex' }}>
        <Routes>
          {/* Trang chủ: Hiển thị khung chat */}
          <Route path="/" element={<ChatWindow currentChat={currentChat} />} />
          
          {/* Trang About Us: Hiển thị thông tin nhóm */}
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* Bạn có thể thêm các Route khác ở đây */}
        </Routes>
      </div>
    </div>
  );
}

export default App;