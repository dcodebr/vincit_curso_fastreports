# Curso FastReport Community com dotnet
Repositório referente ao curso **FastReport Community com dotnet e angular** ministrados aos alunos dos cursos de tecnologia da Faculdade VINCIT.

## Arquivos para download
- [banco de dados (sqlite)](./_database/loja-suplementos.db)
- [logomarca](./_relatorios/logo.png)
- [FastReport Community Designer](https://github.com/FastReports/FastReport/releases/tag/v2025.1.0)
- [dotnet sdk 8.0](https://dotnet.microsoft.com/pt-br/download/dotnet/8.0)

## Instalação de Dependências

[FastReport.OpenSource](https://www.nuget.org/packages/FastReport.OpenSource)

```bat
dotnet add package FastReport.OpenSource --version 2025.1.0
```

[FastReport.OpenSource.Web](https://www.nuget.org/packages/FastReport.OpenSource.Web)

```bat
dotnet add package FastReport.OpenSource.Web --version 2025.1.0
```

[FastReport.OpenSource.Export.PdfSimple](https://www.nuget.org/packages/FastReport.OpenSource.Export.PdfSimple)

```bat
dotnet add package FastReport.OpenSource.Export.PdfSimple --version 2025.1.0
```

[FastReport.Data.SQLite](https://www.nuget.org/packages/FastReport.Data.SQLite/2025.1.0)
```bat
dotnet add package FastReport.Data.SQLite --version 2025.1.0
```

## Trechos importantes

Importação de dependências:

```csharp
using FastReport.Data;
using FastReport.Export.PdfSimple;
using FastReport.Web;
```

Geração dos relatórios:

```csharp
var webReport = new WebReport();
webReport.Report.Load("./relatorios/listagem-clientes.frx");
webReport.Report.Prepare();

using (MemoryStream ms = new MemoryStream())
{
    var pdfExport = new PDFSimpleExport();
    pdfExport.Export(webReport.Report, ms);
    ms.Flush();
    var result = ms.ToArray();
    return result;
}
```