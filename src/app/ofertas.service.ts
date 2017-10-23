import {Oferta} from "./shared/model/oderta.model";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService{

    constructor(
        private http: Http){}

    getOfertas(): Promise<Oferta[]> {
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any)=> resposta.json())
    }

    getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
            return this.http.get(`
            http://localhost:3000/ofertas?categoria=${categoria}
            `)
                .toPromise()
                .then((reposta: any)=> reposta.json())
    }
}