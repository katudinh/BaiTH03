using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApiProject.Data;
using MyApiProject.Models;

namespace MyApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly AppDataContext _context;

        public MessagesController(AppDataContext context)
        {
            _context = context;
        }

        // Lấy toàn bộ tin nhắn (GET: api/Messages)
        [HttpGet("{receiverName}")]
            public async Task<ActionResult<IEnumerable<Message>>> GetMessages(string receiverName)
        {
    // Chỉ lọc ra những tin nhắn có Receiver khớp với tên box chat đang mở
            return await _context.Messages
             .Where(m => m.Receiver == receiverName)
             .ToListAsync();
        }

        // Gửi tin nhắn mới (POST: api/Messages)
        [HttpPost]
        public async Task<ActionResult<Message>> PostMessage(Message message)
        {
            _context.Messages.Add(message);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMessages), new { id = message.Id }, message);
        }
    }
}