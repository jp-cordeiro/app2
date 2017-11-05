import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {OfertasService} from "../../ofertas.service";

@Component({
  selector: 'onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  ondeFica: string = ''

  constructor(
      private route: ActivatedRoute,
      private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
        (parametro: Params)=> {
          this.ofertasService.getOndeFicaOfertaPorId(parametro.id)
              .then((rDescricao: string)=> {
                this.ondeFica = rDescricao
              })
        }
    )
  }
}
