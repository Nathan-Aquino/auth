Para rodar:

1 - git clone

2 - cd para o repositorio

3 - npm install

4 - npm run dev

5 - utilizar um client de req HTTP para criar usuario e logar


ENDPOINTS:

POST /api/user Rota para criação de usuário e definição se o mesmo irá ser administrador do sistema

{
	"username":"Peter",
	"password":"12345678",
	"is_superuser":true
}

RESPONSE:

{
	"id":1,
	"username":Peter
}

POST /api/login Rota para login do usuário no sistema, retornando um JSON web Token para autenticação e verificação das permissões.

{
	"username":"Nathan",
	"password":"12345678"
}

RESPONSE:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJOYXRoYW4iLCJpYXQiOjE2MzI3ODQ5NzN9.qMu1iM0OczTlVqXyHjujxqSNblksL42G7rapVNPVC0E"
}
