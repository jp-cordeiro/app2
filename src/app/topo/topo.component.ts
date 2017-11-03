import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Oferta} from "../shared/model/oderta.model";
import {OfertasService} from "../ofertas.service";

@Component({
  selector: 'topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  ofertas: Observable<Oferta[]>

  constructor(
      private ofertasService: OfertasService
  ) { }

  ngOnInit() {
  }

  pesquisa(termoBusca: string): void{
    this.ofertas = this.ofertasService.pesquisaOferta(termoBusca)

    this.ofertas.subscribe(
        (oferta: Oferta[])=> console.log(oferta),
        (erro: any) => console.log(erro),
        (()=> console.log('Todos os eventos foram concluídos.'))
    )
  }


}
