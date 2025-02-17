import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { RelatorioPreviewComponent } from './relatorio-preview/relatorio-preview.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'relatorio', component: RelatorioComponent },
  { path: 'relatorio/:id', component: RelatorioPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
