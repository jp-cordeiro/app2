import {ItemCarrinho} from "./shared/model/item-carrinho";
import {Oferta} from "./shared/model/oferta.model";
import {el} from "@angular/platform-browser/testing/src/browser_util";

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

    totalCarrinhoCompras(): number{
        let total: number = 0

        this.itens.map((item: ItemCarrinho)=> {
            total += (item.valor * item.quantidade)
        })

        return total
    }

    adicionarQuantidade(itemCarrinho: ItemCarrinho): void{
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id)

        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade++
        }
    }

    subtrairQuantidade(itemCarrinho: ItemCarrinho): void{
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id)

        if(itemCarrinhoEncontrado.quantidade > 0){
            itemCarrinhoEncontrado.quantidade--
            if(itemCarrinhoEncontrado.quantidade === 0){
                this.itens.splice(this.itens.indexOf((itemCarrinhoEncontrado)),1)
            }
        }
    }
}