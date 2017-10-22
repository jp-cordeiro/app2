import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import {Oferta} from "../shared/model/oderta.model";

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
    // this.ofertas = this.ofertasService.getOfertas()
    this.ofertasService.getOfertas2()
        .then(
        (rOfertas: Oferta[])=>{
          this.ofertas = rOfertas
        })
        .catch((param: any) => {

        })
  }

}
