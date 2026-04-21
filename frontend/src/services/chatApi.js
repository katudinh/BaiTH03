import axios from 'axios';

// Đảm bảo port 5000 khớp với port lúc bạn chạy lệnh dotnet run ở Backend
const API_URL = 'http://localhost:5195/api/messages'; 

// Hàm lấy danh sách tin nhắn
export const fetchMessages = async () => {
    try {
        const response = await axios.get(`${API_URL}/${receiverName}`);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi tải tin nhắn:", error);
        return [];
    }
};

// Hàm gửi tin nhắn mới
export const sendMessage = async (messageData) => {
    try {
        const response = await axios.post(API_URL, messageData);
        return response.data;
    } catch (error) {
        console.error("Lỗi khi gửi tin nhắn:", error);
        return null;
    }
};