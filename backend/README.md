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
* nome
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
  {
    "userId": 61,
    "name": "Matheus",
    "cnpj": "123.456.789",
    "email": "matheuas@gmail.com",
    "whatsapp": "+55656565"
  }
]
```

