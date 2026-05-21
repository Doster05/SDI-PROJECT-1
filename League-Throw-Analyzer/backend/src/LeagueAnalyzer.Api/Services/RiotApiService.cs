namespace LeagueAnalyzer.Api.Services;

public interface IRiotApiService
{
    string GetApiKey();
}

public class RiotApiService : IRiotApiService
{
    private readonly string _apiKey;

    public RiotApiService(string apiKey)
    {
        _apiKey = apiKey ?? throw new ArgumentNullException(nameof(apiKey));
    }

    public string GetApiKey() => _apiKey;
}