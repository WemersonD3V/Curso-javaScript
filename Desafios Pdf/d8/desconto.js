function desconto() {
    let nome = prompt('Qual é o produto que você esta comprando ?');

    let visor = document.querySelector('.res')

    let preco1 = prompt(`Qual é o preço de ${nome} ?`);

    let preco = parseFloat(preco1);

    let desconto = ((preco * 10) / 100).toFixed(3);

    let final = preco - desconto ;

    visor.innerHTML = `<h2>Calculando desconto de 10% para ${nome} </h2>
    <p>O preço original era de R$ ${preco}. </p>
    <p>Você acaba de ganhar R$ ${desconto} de desconto (-10%) . </p>
    <p> No fim , você vai pagar R$ ${ final} </p> `;
}    