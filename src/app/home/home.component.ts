import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import {Oferta} from "../shared/model/oferta.model";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  ofertas: Oferta[]

  constructor(
      private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    // this.ofertaRestaurantes = this.ofertasService.getOfertas()
    this.ofertasService.getOfertas()
        .then(
        (rOfertas: Oferta[])=>{
          this.ofertas = rOfertas
        })
        .catch((param: any) => {

        })
  }

}
