'use strict'

var produtos = {
    pizzas: [
      {
            id: 1,
            nome: 'Margherita',
            descricao: 'Molho de tomate, mussarela, manjericão e parmesão.',
            imagem:'pizza-1.png',
            preco: 'R$31,90', 
            favorito: true,
            avaliacao: '5/5',
            comentarios: 'A pizza Margherita é pura simplicidade e sabor. Com molho de tomate, queijo mozzarella fresco e folhas de manjericão, ela é uma explosão de gostos clássicos e equilibrados em uma massa fina e crocante. É um verdadeiro deleite para quem aprecia sabores autênticos e tradicionais.'
        
      }
    ]
}

const pizzaFavoritas = () => {
    const pizza = dados.produtos.pizzas

    let arrayP = []
    let jsonP = {}
    let quantidade = 0
    
    pizza.forEach((pizza) => {

        if(pizza.favorito) {
            let jsonP = {
                id: pizza.id,
                nome: pizza.nome,
                preco: pizza.preco,
                imagem: pizza.imagem

            }

            quantidade++
            arrayP.push(jsonP)
        }

    })

    jsonP.pizza = arrayP
    jsonP.quantidade = quantidade

    return jsonP

}

const criarPizzaFav = (pizza) => {
    
}