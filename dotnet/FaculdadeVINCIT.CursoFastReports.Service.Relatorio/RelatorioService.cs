using FaculdadeVINCIT.CursoFastReports.Models;
using FastReport.Data;
using FastReport.Export.PdfSimple;
using FastReport.Web;

namespace FaculdadeVINCIT.CursoFastReports.Service.Relatorio;

public class RelatorioService
{
    private string pathFolder => @"C:\Users\Alex Rocha\Desktop\Curso Fast Reports\_relatorios";
    public async Task<RelatorioModel[]> Listar()
    {
        return await Task.Run(() => {
        var rptListagemClientes = new RelatorioModel
        {
            Id = 1,
            Nome = "Listagem de Clientes",
            FileName = "listagem-clientes.frx"
        };

        var rptListagemProdutos = new RelatorioModel
        {
            Id = 2,
            Nome = "Listagem de Produtos",
            FileName = "listagem-produtos.frx"
        };

        var result = new[]
                    {
                        rptListagemClientes,
                        rptListagemProdutos 
                    };

        return result;
        });
    }

    public async Task<byte[]> Gerar(long id)
    {
        var relatorios = await Listar();
        var relatorio = relatorios.FirstOrDefault(r => r.Id == id);
        var relatorioPath = Path.Combine(pathFolder, relatorio?.FileName!);

        FastReport.Utils.RegisteredObjects.AddConnection(typeof(SQLiteDataConnection));
        
        var webReport = new WebReport();
        webReport.Report.Load(relatorioPath);
        webReport.Report.Prepare();

        using (MemoryStream ms = new MemoryStream())
        {
            var pdfExport = new PDFSimpleExport();
            pdfExport.Export(webReport.Report, ms);
            ms.Flush();
            var result = ms.ToArray();
            return result;
        }
    }
}
