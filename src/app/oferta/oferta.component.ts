import {Component, OnDestroy, OnInit} from '@angular/core';
import {OfertasService} from "../ofertas.service";
import {ActivatedRoute} from "@angular/router";
import {Oferta} from "../shared/model/oderta.model";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx"
import {Observer} from "rxjs/Observer";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit,OnDestroy {

  private tempoObservableSubscription: Subscription
  private observableTesteSubscription: Subscription

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

    // this.route.params.subscribe(
    //     /**
    //      * O que deve fazer com a instrucao
    //      * @param parametro
    //      */
    //     (parametro: any)=> {
    //       console.log(parametro)
    //     },
    //     /**
    //      * O que deve ser feito com o err
    //      * @param parametro2
    //      */
    //     (erro: any)=> {
    //       console.log(erro)
    //     },
    //     /**
    //      * O que deve ser feito na conclusao da tarefa, lembrando que a conclusao eh idicada na funcao que estah concluido e nao quando simplesmente quando acaba de ser feita
    //      */
    //     ()=> {
    //       console.log('Concluiu')
    //     }
    // )
    /**
     * Retorna o parametro da rota ativa através de um snapshot
     */
    //this.route.snapshot.params['id']

    /**
     * Retorna o parametro da rota ativa através de um objeto, assistindo para ver se esse objeto tem o valor modificado
     */
    //this.route.params.subscribe((parametro: any)=> { })

    let tempo = Observable.interval(2000)

    this.tempoObservableSubscription =  tempo.subscribe((intervalo: number)=> {
      console.log(intervalo)
    })

    let observableTeste = Observable.create((observer: Observer<string>)=> {
      observer.next('Primeiro')
      observer.next('Segundo')
      // observer.error('Erro')
      observer.complete()
    })

    this.observableTesteSubscription = observableTeste.subscribe(
        (resultado: any)=>
            console.log(resultado),
        (erro: any)=> console.log(erro),
        ()=> console.log("Stream de eventos finalizada")
    )
  }

  ngOnDestroy(){
    this.tempoObservableSubscription.unsubscribe()
    this.observableTesteSubscription.unsubscribe()
  }
}
