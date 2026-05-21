using System.Runtime.CompilerServices;

[ApiController]
[Route("[controller]")]
public class SummonerController : ControllerBase
{
    private readonly RiotApiService _riot;
    public SummonerController(RiotApiService riot) { _riot = riot; }
    [HttpGet("{summonerName}/{summonerTag}")]
    public async Task<IActionResult> Get(string summonerName, string summonerTag)
    {
        var account = await _riot.GetAccountByRiotIdAsync(summonerName, summonerTag);
        return account is null ? NotFound() : Ok(account);
    }
    public SummonerController(IRiotApiService riotService)
    {
        
        var apiKey = riotService.GetApiKey();
        // Use apiKey with RiotSharp
    }
}