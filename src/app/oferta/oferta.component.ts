import {Component, OnDestroy, OnInit} from '@angular/core';
import {OfertasService} from "../ofertas.service";
import {ActivatedRoute} from "@angular/router";
import {Oferta} from "../shared/model/oderta.model";
import "rxjs/Rx"


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit,OnDestroy {

  oferta: Oferta

  constructor(
      private route: ActivatedRoute,
      private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
        .then((rOferta: Oferta)=> {
          this.oferta = rOferta
        })
  }

  ngOnDestroy(){
  }
}
