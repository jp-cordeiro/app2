import {Component, OnDestroy, OnInit} from '@angular/core';
import {OfertasService} from "../ofertas.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Oferta} from "../shared/model/oferta.model";
import "rxjs/Rx"
import {CarrinhoService} from "../carrinho.service";


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
        private ofertasService: OfertasService,
        private carrinhoService: CarrinhoService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(
            (parametros: Params)=> {
                this.ofertasService.getOfertaPorId(parametros.id)
                    .then((rOferta: Oferta)=> {
                        this.oferta = rOferta
                    })
            }
        )
    }

    ngOnDestroy(){
    }

    adicionarItemCarrinho(oferta: Oferta): void{
        this.carrinhoService.incluirItem(oferta)
    }
}
