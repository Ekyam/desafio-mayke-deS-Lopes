import formaDePagamento from './forma-de-pagamento.js'
import itens from "./itens.js"
class CaixaDaLanchonete{

    calcularValorDaCompra(formaDePagamento, itens) {
        function calcularValorDaCompra(itens, formaPagamento) {
            // Valida se os produtos estão presentes no cardápio
            for (const produto of itens) {
              if (!cardapio.hasOwnProperty(produto.codigo)) {
                throw new Error(`Item inválido! Código: ${produto.codigo}`);
              }
            }
          
            // Valida se a quantidade de itens é maior que zero
            for (const produto of itens) {
              if (produto.quantidade === 0) {
                throw new Error(`Quantidade inválida! Código: ${produto.codigo}`);
              }
            }
          
            // Valida se a forma de pagamento está disponível
            if (!formasPagamento.hasOwnProperty(formaPagamento)) {
              throw new Error(`Forma de pagamento inválida! Forma: ${formaPagamento}`);
            }
          
            // Calcula o valor total da compra
            let total = 0;
            for (const produto of itens) {
              total += cardapio[produto.codigo].valor * produto.quantidade;
            }
          
            // Aplica o desconto, se for o caso
            if (formaPagamento === "dinheiro") {
              total = total - (total * 5 / 100);
            } else if (formaPagamento === "credito") {
              total = total + (total * 3 / 100);
            }
          
            return total;
          }
          function calcularValorDoItem(item) {
            if (!cardapio.hasOwnProperty(item.codigo)) {
              throw new Error(`Item inválido! Código: ${item.codigo}`);
            }
          
            return item.quantidade * cardapio[item.codigo].valor;
          }
          
          function calcularDesconto(formaPagamento, valor) {
            if (!formasPagamento.hasOwnProperty(formaPagamento)) {
              throw new Error(`Forma de pagamento inválida! Forma: ${formaPagamento}`);
            }
          
            return formasPagamento[formaPagamento].calcularDesconto(valor);
          }
          
          function validarItem(item) {
            if (!cardapio.hasOwnProperty(item.codigo)) {
              throw new Error(`Item inválido! Código: ${item.codigo}`)

    }
}
    }
}
export default { CaixaDaLanchonete };