import { Component, OnInit } from '@angular/core';
import {OrdemCompraService} from "../ordem-compra.service";
import {Pedido} from "../shared/model/pedido.model";

@Component({
  selector: 'ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  //Controles de valicao dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  //Estados primitivos dos campos (pristine)
  //Controles de valicao dos campos
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  //Controle do botao de confirmar compra
  public formEstado: string = 'disabled'

  constructor(
      private ordemCompraService : OrdemCompraService
  ) { }

  ngOnInit() {
  }


  atualizaEndereco(endereco: string): void{
    this.endereco = endereco

    this.enderecoEstadoPrimitivo = false

    if(this.endereco.length > 3){
      this.enderecoValido = true
    }
    else {
      this.enderecoValido = false
    }
  }

  atualizaNumero(numero: string): void{
    this.numero = numero

    this.numeroEstadoPrimitivo = false

    if(this.numero.length > 0){
      this.numeroValido = true
    }
    else {
      this.numeroValido = false
    }

    this.habilitaForm()
  }

  atualizaComplemento(complemento: string): void{
    this.complemento = complemento

    this.complementoEstadoPrimitivo = false

    if(this.complemento.length > 3){
      this.complementoValido = true
    }

    this.habilitaForm()
  }

  atualizaFormaPagamento(formaPagamento: string): void{
    this.formaPagamento = formaPagamento

    this.formaPagamentoEstadoPrimitivo = false

    if(this.formaPagamento.length > 0){
      this.formaPagamentoValido = true
    }
    else {
      this.formaPagamentoValido = false
    }

    this.habilitaForm()
  }

  habilitaForm(): void{
    if(
        this.enderecoValido === true &&
        this.numeroValido === true &&
        this.formaPagamentoValido === true){
      this.formEstado = ''
    }
    else{
      this.formEstado = 'disabled'
    }
  }

  confirmarCompra() :void{
    let pedido: Pedido = new Pedido(
        this.endereco,
        this.numero,
        this.complemento,
        this.formaPagamento
    )

    this.ordemCompraService.efetivarOrdemCompra(pedido)
        .subscribe((idPedido: number)=> {
          this.idPedidoCompra = idPedido
        })
  }
}
