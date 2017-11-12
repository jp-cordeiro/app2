import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {



  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  confirmarCompra(formularioOrdemCompra: NgForm): void{

  }
}
