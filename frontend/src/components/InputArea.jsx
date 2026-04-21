// InputArea.jsx
import React, { useState } from 'react';

const InputArea = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() === '') return;
    onSendMessage(text);
    setText(''); // Xóa trắng ô nhập sau khi gửi
  };

  return (
    <footer className="input-area">
      <button>🖼️</button>
      <input 
        type="text" 
        className="input-box" 
        placeholder="Nhập tin nhắn..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button>😊</button>
      <button className="send-btn" onClick={handleSend}>➤</button>
    </footer>
  );
};

export default InputArea;