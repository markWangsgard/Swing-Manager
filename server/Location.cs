public class Location
{
    public string locationPath { get; set; }
    public Settings locationSettings { get; set; }

    public List<SongData> SongCache { get; set; }

    public List<Request> Requests { get; set;}
    public int RequestSongCount(string songId)
    {
        return Requests.Count(s => s.SongId == songId);
    }
    public int RequestUserCount(string userId)
    {
        return Requests.Count(s => s.UserId == userId);
    }

    public Dictionary<string, User> Users { get; set; }

    public List<string> AdminEmails { get; set; }

    public Location()
    {
        locationSettings = new Settings(this);
    }
}
