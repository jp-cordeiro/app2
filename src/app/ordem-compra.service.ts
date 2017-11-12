import {Pedido} from "./shared/model/pedido.model";
import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {URL_API} from "./app.api";

@Injectable()
export class OrdemCompraService{

    constructor(
        private http: Http
    ){}

    efetivarOrdemCompra(pedido: Pedido): Observable<any> {

        let headers: Headers = new Headers()

        headers.append('Content-type','application/json')

        return this.http.post(
            `${URL_API}/pedidos`,
            //Body da requisicao aceita string
            JSON.stringify(pedido),
            new RequestOptions({ headers: headers })
        )
            .map((resposta: Response)=> resposta.json().id)
    }
}