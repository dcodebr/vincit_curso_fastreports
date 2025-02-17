import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPreviewComponent } from './relatorio-preview.component';

describe('RelatorioPreviewComponent', () => {
  let component: RelatorioPreviewComponent;
  let fixture: ComponentFixture<RelatorioPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelatorioPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
