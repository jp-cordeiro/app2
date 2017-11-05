import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {OfertasService} from "../../ofertas.service";
import {Oferta} from "../../shared/model/oderta.model";

@Component({
  selector: 'como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {

  comoUsar: string = ''

  constructor(
      private route: ActivatedRoute,
      private ofertasService: OfertasService,
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
        (parametros: Params)=> {
          this.ofertasService.getComoUsarOfertaPorId(parametros.id)
              .then((rDescricao: string)=> {
                this.comoUsar = rDescricao
              })
        }
    )
  }
}
