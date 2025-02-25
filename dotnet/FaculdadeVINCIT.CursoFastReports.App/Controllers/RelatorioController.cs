using FaculdadeVINCIT.CursoFastReports.Service.Relatorio;
using Microsoft.AspNetCore.Mvc;

namespace FaculdadeVINCIT.CursoFastReports.App.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RelatorioController : ControllerBase
{
    public RelatorioService RelatorioService { get; set; }

    public RelatorioController(RelatorioService relatorioService)
    {
        RelatorioService = relatorioService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var result = await RelatorioService.Listar();
        return Ok(result);
    }

    [HttpPost("{id}")]
    public async Task<IActionResult> Post(long id)
    {
        var pdfArrayBytes = await RelatorioService.Gerar(id);
        var result = File(pdfArrayBytes, "application/pdf", "report-pdf.pdf");
        return result;
    }
}
