import React from 'react';

const ChatItem = ({ name, sub, time, active, status, onClick }) => (
  <div className={`chat-item ${active ? 'active' : ''}`} onClick={onClick} style={{ cursor: 'pointer' }}>
    <div className="avatar" style={{backgroundColor: active ? '#ddd' : '#e5e7eb'}}>
      {status === 'online' && <div className="online-dot"></div>}
    </div>
    <div className="chat-info">
      <div className="chat-name">{name}</div>
      <div className="chat-sub">{sub}</div>
    </div>
    {time && <div className="chat-time">{time}</div>}
  </div>
);

export default ChatItem;