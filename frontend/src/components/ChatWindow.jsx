import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import InputArea from './InputArea';
import { fetchMessages, sendMessage } from '../services/chatApi';

// Nhận currentChat từ props
const ChatWindow = ({ currentChat }) => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Thay đổi: Hàm load tin nhắn sẽ chạy lại mỗi khi currentChat bị thay đổi
  useEffect(() => {
  const loadMessages = async () => {
    if (currentChat) {
      // Gửi kèm tên box chat hiện tại (ví dụ: "Bao Bao") sang Backend
      const data = await fetchMessages(currentChat); 
      setMessages(data);
      scrollToBottom();
    }
  };
  loadMessages();
}, [currentChat]);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text) => {
  const newMessage = { 
    text: text, 
    isRight: true, 
    seen: false,
    receiver: currentChat // Quan trọng: Gửi kèm tên người nhận để lưu vào DB
  };

  const savedMessage = await sendMessage(newMessage);
  if (savedMessage) {
    setMessages(prev => [...prev, savedMessage]);
  }
};

  return (
    <main className="chat-window">
      <header className="chat-header">
        <div className="avatar-group">
          {/* ... */}
        </div>
        {/* HIỂN THỊ TÊN ĐỘNG THEO NGƯỜI ĐANG CHỌN BÊN SIDEBAR */}
        <div className="chat-name">{currentChat}</div> 
      </header>

      <div className="messages-container">
        {messages.map((msg) => (
          <Message key={msg.id} text={msg.text} isRight={msg.isRight} seen={msg.seen} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <InputArea onSendMessage={handleSendMessage} />
    </main>
  );
};

export default ChatWindow;