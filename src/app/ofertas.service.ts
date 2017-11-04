import {Oferta} from "./shared/model/oderta.model";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'
import {URL_API} from "./app.api";
import {Observable} from "rxjs/Observable";


@Injectable()
export class OfertasService{
    constructor(
        private http: Http){}

    getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: Response)=> resposta.json())
    }

    getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`
            ${URL_API}/ofertas?categoria=${categoria}
            `)
            .toPromise()
            .then((resposta: Response)=> resposta.json())
    }

    getOfertaPorId(id: number): Promise<Oferta>{
        return this.http.get(`
            ${URL_API}/ofertas?id=${id}
            `)
            .toPromise()
            .then((resposta: Response)=> {
                return resposta.json()[0]
            })
    }

    getComoUsarOfertaPorId(id: number): Promise<string>{
        return this.http.get(`
            ${URL_API}/como-usar?id=${id}
            `)
            .toPromise()
            .then((resposta: Response)=> {
                return resposta.json()[0].descricao
            })
    }

    getOndeFicaOfertaPorId(id: number): Promise<string>{
        return this.http.get(`
            ${URL_API}/onde-fica?id=${id}
            `)
            .toPromise()
            .then((respota: any)=> {
                return respota.json()[0].descricao
            })
    }

    pesquisaOferta(termo: string): Observable<Oferta[]>{
        return this.http.get(`
        ${URL_API}/ofertas?descricao_oferta_like=${termo}
        `)
        /**
         * Caso tenha falhado na conexao, tenta realizar uma nova tentantiva baseado na quantidade de vezes setada
         */
            .retry(10)
            .map((resposta:any)=> resposta.json())
    }
}