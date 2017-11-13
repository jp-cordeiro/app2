import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Pedido} from "../shared/model/pedido.model";

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  idPedidoCompra: number
  formOrdemCompra: FormGroup = new FormGroup({
    'endereco': new FormControl(null,[
      Validators.required,
      Validators.min(3),
      Validators.max(120)
    ]),
    'numero': new FormControl(null,[
      Validators.required,
      Validators.min(1),
      Validators.max(20)
    ]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl('',[
      Validators.required
    ])
  })

  constructor(
      private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit() {

  }

  public confirmarCompra(): void {
    let pedido: Pedido = this.formOrdemCompra.value

    console.log(pedido)

    this.ordemCompraService.efetivarOrdemCompra(pedido)
        .subscribe((idPedidoCompra: number)=> {
          this.idPedidoCompra = idPedidoCompra
        })
  }
}
