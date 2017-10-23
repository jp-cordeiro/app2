import { Component, OnInit } from '@angular/core';
import {Oferta} from "../shared/model/oderta.model";
import {OfertasService} from "../ofertas.service";

@Component({
  selector: 'diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {

  ofertasDiversao: Oferta[]

  constructor(
      private ofertaService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria('diversao')
        .then((rOfertasDiversao: Oferta[])=> {
      this.ofertasDiversao = rOfertasDiversao
        })
        .catch((erro: any)=> {})
  }

}
