# Backend

## cadastro

[https://megahack2.herokuapp.com/users](https://megahack2.herokuapp.com/users)

método **Post**

Dados de entrada:

```
{
"name":"Exemple",
"email":"example@Example",
"password":123456,
"cnpj":"123.456.789",
"whatsapp":"+55656565"
}
```

Dados de retorno:

```
{
  "userId": 2,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJSaWNhcmRvIiwiaWF0IjoxNTg4NDg2NjcxLCJleHAiOjE1ODg0OTAyNzF9.iyanYsxITRbckby4BeZn-ybpH6bUdFQiAft8EhgmEP8"
}
```

considerações: 

O token tem que ser salvo e enviado no seguinte formato para acessar dados do sistema
no Header com o nome de campo **authorization** com valor **Bearer accessToken** onde accessToken é o valor devolvido acima.

## Login

[https://megahack2.herokuapp.com/login](https://megahack2.herokuapp.com/login)

método **Post**

Dados de entrada:

```

{
	"email":"ricardo@ricardosantos.me",
	"password":3478
}
```

Dados de retorno:

```
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJSaWNhcmRvIiwiaWF0IjoxNTg4NDg2NjcxLCJleHAiOjE1ODg0OTAyNzF9.iyanYsxITRbckby4BeZn-ybpH6bUdFQiAft8EhgmEP8"
}
```

considerações: 

O token tem que ser salvo e enviado no seguinte formato para acessar dados do sistema
no Header com o nome de campo **authorization** com valor **Bearer accessToken** onde accessToken é o valor devolvido acima.

## Usuários

### Lista

[https://megahack2.herokuapp.com/users](https://megahack2.herokuapp.com/users)

método **Get**

Filtros:

* email
    * Retorna o usuário pelo determinado email
* name
    * Retorna os usuários com o referido nome
* limit
    * Quantidade de usuário por página - Padrão é 10
* page
    * Número da página - Padrão é a primeira página

Exemplo de requisições:

```
https://megahack2.herokuapp.com/users

https://megahack2.herokuapp.com/users?name=exemple

https://megahack2.herokuapp.com/users?name=exemple&limit=50

https://megahack2.herokuapp.com/users?page=10&limit=50

```

Exemplo de respostas:

```
[
  {
    "userId": 11,
    "name": "Exemple2",
    "cnpj": "123.456.789",
    "email": "example2@Example",
    "whatsapp": "+55656565"
  },
  {
    "userId": 21,
    "name": "Exemple3",
    "cnpj": "123.456.789",
    "email": "example3@Example",
    "whatsapp": "+55656565"
  },
  {
    "userId": 31,
    "name": "Exemple15",
    "cnpj": "123.456.789",
    "email": "Exemple15@gmail.com",
    "whatsapp": "+55656565"
  },
]
```

### Lista um usuário

[https://megahack2.herokuapp.com/users/:id](https://megahack2.herokuapp.com/users/11)

método **Get**

Exemplo de requisições:

```
https://megahack2.herokuapp.com/users/21

https://megahack2.herokuapp.com/users/61

```

Exemplo de respostas:

```
{
    "userId": 11,
    "name": "Exemple2",
    "cnpj": "123.456.789",
    "email": "example2@Example",
    "whatsapp": "+55656565"
}
```

### Atualiza um usuário

[https://megahack2.herokuapp.com/users/](https://megahack2.herokuapp.com/users/)

método **Put**

Dados de entrada:

```
{
    "password": 7,
    "name": "Exemple",
    "cnpj": "123.456.789",
    "email": "exmp2le@Example",
    "whatsapp": "+55656565"
}

```

**Nota**: Enviar só mente os dados que precisam ser alterados.
Exemplo

```
{
    "name": "Exemple",
    "email": "exmp2le@Example",
    "whatsapp": "+55656565"
}
```

### Deleta um usuário

[https://megahack2.herokuapp.com/users/:id](https://megahack2.herokuapp.com/users/5)

método **Delete**

Não há entradas só retorna o status `204`.

## Categorias

### Lista

[https://megahack2.herokuapp.com/categories](https://megahack2.herokuapp.com/categories)

método **Get**

Filtros:

* name
    * Retorna as categorias que iniciam com o nome fornecido
* limit
    * Quantidade de categorias por página - Padrão é 10
* page
    * Número da página - Padrão é a primeira página

Exemplo de requisições:

```
https://megahack2.herokuapp.com/categories

https://megahack2.herokuapp.com/categories?name=exemple

https://megahack2.herokuapp.com/categories?name=exemple&limit=50

https://megahack2.herokuapp.com/categories?page=10&limit=50

```

Exemplo de respostas:

```
[
  {
    "categoryId": 11,
    "name": "Eletrodomésticos"
  },
  {
    "categoryId": 21,
    "name": "Móveis"
  },
  {
    "categoryId": 31,
    "name": "Eletrônicos"
  },
  {
    "categoryId": 41,
    "name": "Mercearia"
  },
  {
    "categoryId": 51,
    "name": "Frios"
  }
]
```

### Lista uma categoria

[https://megahack2.herokuapp.com/categories/:id](https://megahack2.herokuapp.com/categories/11)

método **Get**

Exemplo de requisições:

```
https://megahack2.herokuapp.com/categories/21

https://megahack2.herokuapp.com/categories/61

```

Exemplo de respostas:

```
{
    "categoryId": 41,
    "name": "Mercearia"
}
```

### Atualiza uma categoria

[https://megahack2.herokuapp.com/categories/:id](https://megahack2.herokuapp.com/categories/11)

método **Put**

Dados de entrada:

```
{
    "name": "Brinquedos"
}

```

### Registra uma categoria

[https://megahack2.herokuapp.com/categories/](https://megahack2.herokuapp.com/categories/)

método **Put**

Dados de entrada:

```
{
    "name": "Brinquedos"
}

```

Dados de Retorno:

```
{
  "categoryId": 51
}

```

### Deleta uma categoria

[https://megahack2.herokuapp.com/categories/:id](https://megahack2.herokuapp.com/categories/2)

método **Delete**

Não tem dados de entrada, só retorna o status `204`.

## Produtos

### Lista produtos

[https://megahack2.herokuapp.com/products/](https://megahack2.herokuapp.com/products/)

método **Get**

Dados de saída:

```
[
  {
    "productId": 4,
    "name": "Televisão",
    "description": "tv samsung",
    "category": "Eletrodomésticos"
  },
  {
    "productId": 6,
    "name": "Microondas",
    "description": "Microondas",
    "category": "Eletrodomésticos"
  },
  {
    "productId": 8,
    "name": "fogão",
    "description": "brastemp",
    "category": "Eletrodomésticos"
  },
  {
    "productId": 9,
    "name": "camisa",
    "description": "camisa",
    "category": "Vestuario"
  }
]
```

### Lista um único produto

[https://megahack2.herokuapp.com/products/:id](https://megahack2.herokuapp.com/products/2)

Método **Get**

Dados de saída:

```
[
  {
    "productId": 4,
    "name": "Televisão",
    "description": "tv samsung",
    "category": "Eletrodomésticos"
  }
]
```

### Altera um produto

[https://megahack2.herokuapp.com/products/:id](https://megahack2.herokuapp.com/products/2)

Método **Put**

Dados de entrada:

```
{
    "name": "camisa",
		"description": "camisa",
		"categoryId": 6
}
```
**Nota:** Só precisa inserir o(s) campo(s) que desejar alterar

Não há dados de retorno só o status `204`.






