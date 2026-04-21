import React from 'react';

const Message = ({ text, isRight, seen }) => {
  if (isRight) {
    return (
      <div className="msg-right-wrapper">
        <div className="msg msg-right">{text}</div>
        {seen && <span className="status-seen">seen</span>}
      </div>
    );
  }

  return <div className="msg msg-left">{text}</div>;
};

export default Message;