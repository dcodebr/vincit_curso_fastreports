import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../../services/relatorio.service';
import { Relatorio } from '../models/relatorio.model';

@Component({
  selector: 'app-relatorio',
  standalone: false,
  templateUrl: './relatorio.component.html',
  styleUrl: './relatorio.component.css'
})
export class RelatorioComponent implements OnInit {
  public relatorios: Relatorio[] = [];

  constructor(private relatorioService: RelatorioService) {
  }

  ngOnInit(): void {
    this.relatorioService.listar().subscribe({
      next: value => {
        this.relatorios = value;
        console.log(this.relatorios);
      },
      error: err => console.error(err)
    });
  }
}
