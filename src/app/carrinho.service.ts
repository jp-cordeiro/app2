import {ItemCarrinho} from "./shared/model/item-carrinho";
import {Oferta} from "./shared/model/oferta.model";

export class CarrinhoService{
    public itens: ItemCarrinho[] = []

    exibirItens(): ItemCarrinho[]{
        return this.itens
    }

    incluirItem(oferta: Oferta): void{
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )

        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id)

        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade++
        }else{
            this.itens.push(itemCarrinho)
        }
    }
}