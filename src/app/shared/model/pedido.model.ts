export class Pedido{
    constructor(
        public endereco: string,
        public numero: string,
        public complento: string,
        public formaPagamento: string
    ){}
}