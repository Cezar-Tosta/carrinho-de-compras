function adicionar(){
    //Recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value; // Nome e valor separados por hífen
    let nomeProduto = produto.split('-')[0]; 
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //Calcular o preço
    let preco = quantidade * valorUnitario;
    alert(preco);
    //Adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`
    //Atualizar o valor total
    
};

function limpar(){
    
};