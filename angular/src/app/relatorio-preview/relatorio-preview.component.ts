import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../../services/relatorio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relatorio-preview',
  standalone: false,
  templateUrl: './relatorio-preview.component.html',
  styleUrl: './relatorio-preview.component.css'
})
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
