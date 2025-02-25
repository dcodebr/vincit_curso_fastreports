# Projeto FastReport em Angular
Contém as instruções necessárias para criar o projeto em @angular/CLI.
Requisitos:
 - node.js: v22.13.1
 - npm: 11.1.0
 - Angular CLI: 19.1.6 ()

## Projeto em Angular

1. Instale o angular:
```bash
npm install -g @angular/cli
```

2. Crie o projeto em em angular:
```bash
ng new angular --routing --standalone=false
```

3.  Instale o @angular/boostrap
```bash
ng add @ng-bootstrap/ng-bootstrap
```

4. Instale o ng2-pdf-viewer
```bash
npm install --save ng2-pdf-viewer
```

5. Crie o componente [relatorio](./src/app/relatorio/relatorio.component.ts)

6. Crie o componente [relatorio-preview](./src/app/relatorio-preview/relatorio-preview.component.ts)

7. Copie o conteúdo de [styles.css](./src/styles.css)

8. Crie e copie o conteúdo do arquivo [scripts.js](./src/scripts.js)

9. Informe a referência do scrpts.js no arquivo [angular.json](./angular.json)
```json
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
              "src/scripts.js"
            ]
```

10. Substituir o conteúdo do [index.html](./src/index.html)
```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <base href="/">
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
  <title>FastReport Community</title>
</head>

<body class="sb-nav-fixed">
  <app-root></app-root>
</body>
</html>
```

11. Substituir o conteúdo do [app.component.html](./src/app/app.component.html)
```html
<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand ps-3" href="index.html">FastReport Community</a>
    <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
            class="fas fa-bars"></i></button>
    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div class="input-group">
            <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..."
                aria-describedby="btnNavbarSearch" />
            <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
        </div>
    </form>
    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#!">Configurações</a></li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#!">Sair</a></li>
            </ul>
        </li>
    </ul>
</nav>
<div id="layoutSidenav">
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Relatórios</div>
                    <a class="nav-link" [routerLink]="['relatorio']">
                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                        Cadastros
                    </a>
                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Autenticado como:</div>
                Usuário
            </div>
        </nav>
    </div>
    <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid px-4">
                <router-outlet></router-outlet>
            </div>
        </main>
        <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
                <div class="d-flex align-items-center justify-content-between small">
                    <div class="text-muted">Copyright 2023</div>
                    <div>
                        <a href="#">Políticas de Privacidade</a>
                        &middot;
                        <a href="#">Termos &amp; Condições</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
```

12. Importar as referências do [app.module.ts](./src/app/app.module.ts)
```ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RelatorioPreviewComponent } from './relatorio-preview/relatorio-preview.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    RelatorioComponent,
    RelatorioPreviewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

13. Configurar [app-routing.module.ts](./src/app/app-routing.module.ts)
```ts
const routes: Routes = [
  { path: 'relatorio', component: RelatorioComponent },
  { path: 'relatorio/:id', component: RelatorioPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

14. Criar pasta [models](./src/app/models/) e escrever o [relatorio.model.ts](./src/app/models/relatorio.model.ts)
```ts
export class Relatorio {
    public id?: Number;
    public nome?: String;
    public fileName?: String;
}
```

15. Criar a pasta [services](./src/services/) e escrever o [relatorio.service.ts](./src/services/relatorio.service.ts)
```ts
//
//Não esquecer o Injectable
//
@Injectable({
    providedIn: 'root'
})
export class RelatorioService {
    private baseURL = "https://localhost:7003/api/relatorio";

    constructor(private httpClient: HttpClient) {
    }

    public listar(): Observable<Relatorio[]> {
        return this.httpClient.get<Relatorio[]>(this.baseURL);
    }

    public gerar(id: number): Observable<string> {
        let postURL = `${this.baseURL}/${id}`;
        let response = this.httpClient.post(postURL, null, {responseType: 'blob'});

        var result = new Observable<string>(obs => {
            response.subscribe({
                next: value => {
                    var objectURL = URL.createObjectURL(value);
                    obs.next(objectURL);
                },
                error: err => obs.error(err),
                complete: () => obs.complete()
            });
        });

        return result;
    } 
}
```

16. Escrever o [relatorio.component.ts](./src/app/relatorio/relatorio.component.ts)
```ts
export class RelatorioComponent implements OnInit {
  public relatorios: Relatorio[] = [];

  constructor(private relatorioService: RelatorioService) {
  }

  ngOnInit(): void {
    this.relatorioService.listar().subscribe({
      next: value => {
        this.relatorios = value;
      },
      error: err => console.error(err)
    });
  }
}
```

17. Escrever o [relatorio.component.html](./src/app/relatorio/relatorio.component.html)
```ts
<h1 class="mt-4">Relatórios</h1>
<div class="container-fluid px-4">
    <div class="card mb-4">
        <div class="card-header">
            <i class="fas fa-table me-1"></i>
            Relatórios de Cadastro
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Arquivo</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let item of relatorios">
                    <th scope="row" class="text-align align-middle">{{item.id}}</th>
                    <td class="text-align align-middle">{{item.nome}}</td>
                    <td class="text-align align-middle">{{item.fileName}}</td>
                    <td class="text-align align-middle"><button class="btn btn-sm btn-primary" [routerLink]="[item.id]">Imprimir</button></td>
                  </tr>
                </tbody>
              </table>
        </div>
    </div>
</div>
```

18. Escrever o [relatorio-preview.component.ts](./src/app/relatorio-preview/relatorio-preview.component.ts)
```ts
export class RelatorioPreviewComponent implements OnInit {
  public id: Number = 0;
  public pdfSrc: string = "";

  constructor(private activedRoute: ActivatedRoute,
    private relatorioService: RelatorioService) {
  }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe({
      next: param => {
        let id = Number(param.get("id"));
        this.id = id;

        this.relatorioService.gerar(1).subscribe({
          next: value => this.pdfSrc = value,
          error: err => console.error(err)
        });
      }
    });
  }
}
```

19. Escrever o [relatorio-preview.component.html](./src/app/relatorio-preview/relatorio-preview.component.html)
```ts
<div class="row vh-100">
    <pdf-viewer [src]="pdfSrc" [render-text]="true" [original-size]="false"></pdf-viewer>
</div>
```