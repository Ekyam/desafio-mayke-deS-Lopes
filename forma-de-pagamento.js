const formaDePagamento = {
    Dinheiro: {
        nome: "Dinheiro",
        aplicarDesconto: function(valor) {
            return valor * (1 - 0.05)
        },
    },
    Debito: {
        nome: "Débito",
        aplicarDesconto: function(valor) {
            return valor;
        },
    },

  Credito: {
    nome: "Crédito",
    aplicarDesconto: function(valor) {
        return valor * (1 + 0.03);
    },
  },

}