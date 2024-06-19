let totalGeral;
limpar();

function adicionar () {
// Recuperar valores: Nome do produto, quantidade e valor
let produto = document.getElementById('produto').value;
let nomeDoProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

// Calcular o preço, o subtotal
let subtotal = quantidade * valorUnitario;
let carrinho = document.getElementById('lista-produtos');

// Adicionar ao carrinho
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">${subtotal}</span>
        </section>`;

totalGeral = totalGeral + subtotal;

// Atualizar o valor total
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
quantidade = document.getElementById('quantidade').value = '0';

}

function limpar () {
    totalGeral = 0;
    carrinho = document.getElementById('lista-produtos').innerHTML = '';
    campoTotal = document.getElementById('valor-total').innerHTML = '0';
    quantidade = document.getElementById('quantidade').innerHTML = '0';

}