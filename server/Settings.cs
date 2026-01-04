using System.Text.Json;

public class Settings
{
    private Location location {get; set;}

    public Settings(Location location)
    {
        this.location = location;
    }

    public string ThemeColor { get; set; }

    public bool EnableLimitVisibleNextSongs { get; set; }
    public int LimitVisibleNextSongs { get; set; }

    public bool EnableHighlightLineDances { get; set; }
    public List<string> HighlightedLineDances()
    {
        string json = File.ReadAllText($"./assets/LineDances.json");
        return JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
    }

    public bool EnableHighlightCustomSongs { get; set; }
    public string CustomHighlightName { get; set; }
    private string customJsonPath {get{ return $"./locations/{location.locationPath}/CustomHighlight.json";}}
    public List<string> CustomHighlightedSongs()
    {
        string json = File.ReadAllText(customJsonPath);
        return JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
    }
    public void AddSongToCustomHighlight(string songId)
    {
        string json = File.ReadAllText(customJsonPath);
        List<string> currentList = JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
        currentList.Add(songId);
        string newJson = JsonSerializer.Serialize(currentList);
        File.WriteAllText(customJsonPath, newJson);
    }
    public void removeSongFromCustomHighlight(string songId)
    {
        string json = File.ReadAllText(customJsonPath);
        List<string> currentList = JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
        if (currentList.Contains(songId))
        {
            currentList.Remove(songId);
        }
        string newJson = JsonSerializer.Serialize(currentList);
        File.WriteAllText(customJsonPath, newJson);
    }
    public void AddSongsToCustomHighlight(List<string> songIds)
    {
        string json = File.ReadAllText(customJsonPath);
        List<string> currentList = JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
        foreach (var songId in songIds)
        {
            currentList.Add(songId);
        }
        string newJson = JsonSerializer.Serialize(currentList);
        File.WriteAllText(customJsonPath, newJson);
    }
    public void AddSongsToCustomHighlight(string[] songIds)
    {
        AddSongsToCustomHighlight(songIds.ToList());
    }
    public void removeSongsFromCustomHighlight(List<string> songIds)
    {
        string json = File.ReadAllText(customJsonPath);
        List<string> currentList = JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
        foreach (var songId in songIds)
        {
            if (currentList.Contains(songId))
            {
                currentList.Remove(songId);
            }
        }
        string newJson = JsonSerializer.Serialize(currentList);
        File.WriteAllText(customJsonPath, newJson);
    }
    public void removeSongsFromCustomHighlight(string[] songIds)
    {
        removeSongsFromCustomHighlight(songIds.ToList());
    }




    public bool EnableLimitRequests { get; set; }
    public int RequestLimit { get; set; }

    public bool AllowRepeats { get; set; }

    public ListMode WhiteOrBlackList { get; set; }
    public string WhiteBlackJsonPath { get{return $"./locations/{location.locationPath}/WhiteOrBlackList.json";}  }
    public List<string> WhiteOrBlackListedSongs()
    {
        string json = File.ReadAllText(WhiteBlackJsonPath);
        return JsonSerializer.Deserialize<List<string>>(json);
    }
    public void AddSongToWhiteBlackList(string songId)
    {
        string json = File.ReadAllText(customJsonPath);
        List<string> currentList = JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
        currentList.Add(songId);
        string newJson = JsonSerializer.Serialize(currentList);
        File.WriteAllText(customJsonPath, newJson);
    }
    public void removeSongFromWhiteBlackList(string songId)
    {
        string json = File.ReadAllText(customJsonPath);
        List<string> currentList = JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
        if (currentList.Contains(songId))
        {
            currentList.Remove(songId);
        }
        string newJson = JsonSerializer.Serialize(currentList);
        File.WriteAllText(customJsonPath, newJson);
    }
    public void AddSongsToWhiteBlackList(List<string> songIds)
    {
        string json = File.ReadAllText(customJsonPath);
        List<string> currentList = JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
        foreach (var songId in songIds)
        {
            currentList.Add(songId);
        }
        string newJson = JsonSerializer.Serialize(currentList);
        File.WriteAllText(customJsonPath, newJson);
    }
    public void AddSongsToWhiteBlackList(string[] songIds)
    {
        AddSongsToWhiteBlackList(songIds.ToList());
    }
    public void removeSongsFromWhiteBlackList(List<string> songIds)
    {
        string json = File.ReadAllText(customJsonPath);
        List<string> currentList = JsonSerializer.Deserialize<List<string>>(json) ?? new List<string>();
        foreach (var songId in songIds)
        {
            if (currentList.Contains(songId))
            {
                currentList.Remove(songId);
            }
        }
        string newJson = JsonSerializer.Serialize(currentList);
        File.WriteAllText(customJsonPath, newJson);
    }
    public void removeSongsFromWhiteBlackList(string[] songIds)
    {
        removeSongsFromWhiteBlackList(songIds.ToList());
    }
}
