import {Oferta} from "./shared/model/oderta.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'
import {URL_API} from "./app.api";

@Injectable()
export class OfertasService{
    constructor(
        private http: Http){}

    getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: any)=> resposta.json())
    }

    getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
        return this.http.get(`
            ${URL_API}?categoria=${categoria}
            `)
            .toPromise()
            .then((reposta: any)=> reposta.json())
    }

    getOfertaPorId(id: number): Promise<Oferta>{
        return this.http.get(`
            ${URL_API}?id=${id}
            `)
            .toPromise()
            .then((reposta: any)=> reposta.json()[0])
    }
}