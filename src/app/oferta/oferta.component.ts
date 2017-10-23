import { Component, OnInit } from '@angular/core';
import {OfertasService} from "../ofertas.service";
import {ActivatedRoute} from "@angular/router";
import {Oferta} from "../shared/model/oderta.model";

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    /**
     * Retorna o parametro da rota ativa através de um snapshot
     */
    //this.route.snapshot.params['id']

    /**
     * Retorna o parametro da rota ativa através de um objeto, assistindo para ver se esse objeto tem o valor modificado
     */
    //this.route.params.subscribe((parametro: any)=> { })

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
        .then((oferta: Oferta)=> {

        })
  }

}
