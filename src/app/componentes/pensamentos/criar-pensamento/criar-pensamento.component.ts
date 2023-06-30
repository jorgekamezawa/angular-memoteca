import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Formulario reativo'],
      autoria: ['Angular'],
      modelo: ['modelo1']
    })
  }

  formulario!: FormGroup;

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() =>
      this.router.navigate(['/listarPensamento'])
    )
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
