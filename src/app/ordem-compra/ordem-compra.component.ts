import {Component, OnInit, ViewChild} from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import {NgForm} from "@angular/forms";
import {Pedido} from "../shared/model/pedido.model";

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild(`formularioOrdemCompra`)
  formOrdemCompra: NgForm
  idPedidoCompra: number

  constructor(
      private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit() {

  }

  confirmarCompra(): void{
    let pedido: Pedido = this.formOrdemCompra.value

    this.ordemCompraService.efetivarOrdemCompra(pedido)
        .subscribe((idPedidoCompra: number)=> {
          this.idPedidoCompra = idPedidoCompra
        })
  }
}
