namespace MyApiProject.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Text { get; set; } = string.Empty;
        public bool IsRight { get; set; } // true: tin nhắn mình gửi, false: người khác gửi
        public bool Seen { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now; // Thời gian gửi
        public string Receiver { get; set; }
    }
}