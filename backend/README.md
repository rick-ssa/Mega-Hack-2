# Backend

## cadastro

[https://megahack2.herokuapp.com/users](https://megahack2.herokuapp.com/users)

metodo **Post**

Dados de entrada:

```
{
"name":"Exemple",
"email":"example@Example",
"password":123456,
"cnpj":"123.456.789",
"type":"fornecedor",
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

metodo **Post**

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
