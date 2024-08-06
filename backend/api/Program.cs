using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(builder =>
  {
    builder
      .AllowAnyOrigin()
      .AllowAnyMethod()
      .AllowAnyHeader();
  });
});

var app = builder.Build();

app.UseCors();

app.MapGet("/random/int/{min}&{max}", (int min, int max) =>
{
    if (min < 0) throw new Exception("Min must be greater than 0.");
    var random = new Random();
    var data = new { num = random.Next(min, max) };
    return JsonSerializer.Serialize(data);
});

app.MapGet("/random/hexadecimal/{length}", (int length) =>
{
    if(length <= 0 || length > 6) throw new Exception("Length must be greater than 0 and less than 6.");
    var random = new Random();
    var randomNumber = random.Next(0, 1 << length * 4);
    var hexadecimal = randomNumber.ToString("X", System.Globalization.CultureInfo.InvariantCulture);
    var data = new { hex = hexadecimal.PadRight(6).Replace(" ", "0") };
    return JsonSerializer.Serialize(data);
});

app.Run();