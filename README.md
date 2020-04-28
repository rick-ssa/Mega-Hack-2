# MEGA HACK 2
## Desafio VTEX

### Funcionalidades:

- Empresas vão poder cadastrar loja 
- Empresas vão poder cadastrar produtos
- Empresas poderão comprar anuncios em outdoor virtuais
- Clientes vão poder realizar cadastro (cadastro único na base da vtex)
- Clientes vão poder selecionar lojas disponiveis por localidade
- Clientes vão poder buscar produtos e visualizar quais lojas tem o produto desejado (pensei em tornar todas as lojas que não tem o produto transparente e as que tem ficar com uma bola vermelha flutuando em cima)
- Clientes vão poder escolher produtos na loja e realizar compra
- Clientes terão uma pontuação por compra (que poderá ser trocada por premiação|desconto como incentivo a compra)
- Clientes pode ter um carrinho único e passear por entre as lojas com enchendo ele e no final fazer a compra em um caixa central

### Backend

- EndPoint Lojas
    - index (lista todas as lojas - `GET`)
    - create (adiciona loja - `POST`)
    - update (altera dados da loja - `PUT`)
    - destroy (deleta uma loja - `DELETE`)

- EndPoint Lojas/:idLoja
    - index (lista uma única loja - `GET`)

- EndPoint Lojas/:idLoja/Produtos
    - index (Lista todos os produtos da loja - `GET`)
    - create (adiciona produto da loja - `POST`)
    - update (altera dados do produto de uma loja - `PUT`)
    - destroy (deleta um produto de uma loja - `DELETE`)

