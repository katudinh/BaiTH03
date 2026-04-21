import React from 'react';
import ChatItem from './ChatItem';
import { useNavigate } from 'react-router-dom';

// 1. Nhận currentChat và onSelectChat từ props
const Sidebar = ({ currentChat, onSelectChat }) => {
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate('/about-us');
  };

  return (
    <aside className="sidebar">
      {/* ... (Phần Header giữ nguyên) ... */}
      <header className="sidebar-header">
        <div className="logo">ChatChit</div>
        <div className="about-us" onClick={handleOnclick} style={{ cursor: 'pointer' }}>About us</div>
        <div className="theme-toggle" style={{ cursor: 'pointer' }}>☀️ ● 🌙</div>
      </header>

      <div className="sidebar-content">
        <button className="new-chat-btn">⊕ Gửi Tin Nhắn Mới</button>

        <div className="section">
          <div className="section-title"><span>NHÓM CHAT</span><span>＋</span></div>

          {/* 2. Sử dụng onSelectChat thay vì setActiveChat cũ */}
          <ChatItem name="Nhóm Test" sub="3 thành viên" time="21m" 
            active={currentChat === 'Nhóm Test'} 
            onClick={() => onSelectChat('Nhóm Test')} />
          
          <ChatItem name="group2" sub="3 thành viên" time="15h" 
            active={currentChat === 'group2'} 
            onClick={() => onSelectChat('group2')} />
          
          <ChatItem name="Nhóm Backend Dev" sub="3 thành viên" time="22h" 
            active={currentChat === 'Nhóm Backend Dev'} 
            onClick={() => onSelectChat('Nhóm Backend Dev')} />
          
          <ChatItem name="Nhóm Frontend Dev" sub="3 thành viên" 
            active={currentChat === 'Nhóm Frontend Dev'} 
            onClick={() => onSelectChat('Nhóm Frontend Dev')} />
        </div>

        <div className="section" style={{marginTop: '20px'}}>
          <div className="section-title"><span>BẠN BÈ</span><span>＋</span></div>

          {/* Lưu ý: Đã loại bỏ tên người bạn mtikcode theo ý định trước đó của bạn */}
          <ChatItem name="Bao Bao" sub="bla bla bla" time="1d" status="online" 
            active={currentChat === 'Bao Bao'} 
            onClick={() => onSelectChat('Bao Bao')} />
          
          <ChatItem name="Mai Lê" sub="ko" time="4d" 
            active={currentChat === 'Mai Lê'} 
            onClick={() => onSelectChat('Mai Lê')} />
          
          <ChatItem name="An Nguyễn" sub="hê an" time="1m" 
            active={currentChat === 'An Nguyễn'} 
            onClick={() => onSelectChat('An Nguyễn')} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;