let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome: nome, preco: preco });
    alert(nome + " adicionado ao carrinho!");
    atualizarContadorCarrinho();
}

function atualizarContadorCarrinho() {
    const contador = document.querySelector('a[href="#carrinho"]');
    contador.textContent = `🛒 Carrinho (${carrinho.length})`;
}

// Futuramente, você pode adicionar a lógica para:
// - Ver o conteúdo do carrinho
// - Remover itens
// - Calcular o total
// - Finalizar a compra (levando para o WhatsApp ou um formulário de pedido)