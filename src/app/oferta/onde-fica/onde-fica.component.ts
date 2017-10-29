import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OfertasService} from "../../ofertas.service";

@Component({
  selector: 'onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''
  private id: number = this.route.parent.snapshot.params['id']

  constructor(
      private route: ActivatedRoute,
      private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOndeFicaOfertaPorId(this.id)
        .then((rDescricao: string)=> {
          this.ondeFica = rDescricao
        })
  }
}
