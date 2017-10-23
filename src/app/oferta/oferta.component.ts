import { Component, OnInit } from '@angular/core';
import {OfertasService} from "../ofertas.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      ofertasService: OfertasService
  ) { }

  ngOnInit() {
    /**
     * Retorna o parametro da rota ativa através de um snapshot
     */
    //this.route.snapshot.params['id']

    /**
     * Retorna o parametro da rota ativa através de um objeto, assistindo para ver se esse objeto tem o valor modificado
     */
    this.route.params.subscribe((parametro: any)=> {

    })
  }

}
