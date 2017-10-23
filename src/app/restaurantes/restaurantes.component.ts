import { Component, OnInit } from '@angular/core';
import {Oferta} from "../shared/model/oderta.model";
import {OfertasService} from "../ofertas.service";

@Component({
  selector: 'restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasService]
})
export class RestaurantesComponent implements OnInit {

    ofertaRestaurantes : Oferta[]

  constructor(
      private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
        .then((rOfertasRestaurantes: Oferta[])=> {
          this.ofertaRestaurantes = rOfertasRestaurantes
        })
        .catch((erro:any)=> {})
  }

}
