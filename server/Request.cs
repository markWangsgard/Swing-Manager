public class Request
{
    public string UserId { get; set; }
    public string SongId { get; set; }
    public DateTime RequestedAt { get; set; } = DateTime.Now;
}