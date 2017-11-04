import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Oferta} from "../shared/model/oderta.model";
import {OfertasService} from "../ofertas.service";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  ofertas: Observable<Oferta[]>
  //Proxy
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(
      private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    //Determina o tempo que o SwitchMap irá executar o Observable (em ms)
        .debounceTime(1000)
        //Caso o termoBusca tenha o mesmo valor da pesquisa anterior, a requisicao nao será realizada
        .distinctUntilChanged()
        //Recebe os parametros a cada next disparado e cancela a inscricao do Observable anterior
        .switchMap((termoBusca: string)=> {
          //Retorna um array de Ofertas vazio caso o termoBusca esteja vazio
          if(termoBusca.trim() === ''){
            return Observable.of<Oferta[]>([])
          }

          return this.ofertasService.pesquisaOferta(termoBusca)
        })
        .catch((erro:any)=> {
          //Comunicacao de erro para o usuario ou armazenamento do erro em log
          console.log(erro)

          //Retorna um Observable de array de Ofertas que é o que a aplicação espera receber, sendo assim, a mesma nao irá quebrar.
          return Observable.of<Oferta[]>([])
        })

    this.ofertas.subscribe(
        (ofertas: Oferta[])=> console.log(ofertas),
        (erro: any) => console.log(erro),
        (()=> console.log('Todos os eventos foram concluídos.'))
    )
  }

  pesquisa(termoBusca: string): void{
    // this.ofertas = this.ofertasService.pesquisaOferta(termoBusca)
    //
    // this.ofertas.subscribe(
    //     (ofertas: Oferta[])=> console.log(oferta),
    //     (erro: any) => console.log(erro),
    //     (()=> console.log('Todos os eventos foram concluídos.'))
    // )

    //Inscreve o parametro em um Obervable
    this.subjectPesquisa.next(termoBusca)
  }
}
