import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: number
  public complemento: string = ''
  public formaPagamento: string = 'dinheiro'

  constructor() { }

  ngOnInit() {
  }


  atualizarEndereco(endereco: string): void{
    this.endereco = endereco
  }

  atualizarNumero(numero: number): void{
    this.numero = numero
  }

  atualizarComplemento(complemento: string): void{
    this.complemento = complemento
  }

  atualizarFormaPagamento(formaPagamento: string): void{
    this.formaPagamento = formaPagamento
  }
}
