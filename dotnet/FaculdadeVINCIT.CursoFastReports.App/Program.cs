using FaculdadeVINCIT.CursoFastReports.Service.Relatorio;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<RelatorioService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.RoutePrefix = String.Empty;
        app.UseSwaggerUI(options =>
        {
            options.SwaggerEndpoint("/swagger/v1/swagger.json", "CursoFastReportCommunityNaPratica API");
            options.RoutePrefix = String.Empty;
        });
    });
}

app.UseHttpsRedirection();
app.MapControllers();
app.Run();