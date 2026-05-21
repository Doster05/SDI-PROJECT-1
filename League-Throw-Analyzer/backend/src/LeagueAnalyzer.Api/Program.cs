Env.Load();

var builder = WebApplication.CreateBuilder(args);

var apiKey = Environment.GetEnvironmentVariable("RIOT_API_KEY")
    ?? throw new InvalidOperationException("RIOT_API_KEY environment variable not set");

builder.Services.AddScoped<IRiotApiService>(_ => new RiotApiService(apiKey));

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers();

app.MapGet("/", () => "League Throw Analyzer Backend is running!");

app.Run();