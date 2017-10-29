import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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

  private id: any = this.route.parent.snapshot.params['id']

  ngOnInit() {
    this.ofertasService.getComoUsarOfertaPorId(this.id)
        .then((rDescricao: string)=> {
          this.comoUsar = rDescricao
        })
  }

}
