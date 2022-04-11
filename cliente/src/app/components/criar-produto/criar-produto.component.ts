import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {
  produtoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.produtoForm = this.fb.group({
      produto: ['', Validators.required],
      categoria: ['', Validators.required],
      localizacao: ['', Validators.required],
      preco: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  cadastrarProduto() {
    console.log(this.produtoForm)
  }

}
