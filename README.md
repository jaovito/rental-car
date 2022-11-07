<h1 align="center">Rental Car</h1>

<p align="center">
  <img src="./public/mobile.gif" alt="Mockup"  />
</p>

## Descrição
**Rental Car** é um projeto somente para repositório, o Rental Car foi feito utilizando React Native e funciona tanto para Android quanto IOS.
O projeto foi desenvolvido utilizando 100% o [Firebase](https://firebase.google.com/?hl=pt) como backend. No App é possível você visualizar carros de luxo para
aluga-los, ver os carros que alugou, juntamente com suas informações, como: Dono do carro, status do "pedido", valor que deverá ser pago e dia que deverá ser devolvido o carro.

Este app não tem intenções de lucrar financeiramente, é somente para estudo e aprendizagem.

## Técnologias 🚀

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Firebase](https://firebase.google.com/?gclid=CjwKCAiArOqOBhBmEiwAsgeLmYTETCqgrc3o8ivDmfyNr4LRgV2rQ72-5LasmYHUkli1uGn_zN5MchoCUDIQAvD_BwE&gclsrc=aw.ds)
- [Husky](https://typicode.github.io/husky/#/)
- [Eslint](https://eslint.org/)

## Experiência com o Firebase 🔥
Foi muito legal utilizar o **Firebase** com o React Native, visto que só tinha utilizado na WEB. Os serviços do Firebase que utilizei foram o **Cloud Firestore** para o banco de dados e o **Authentication** para a autenticação com o Google.


## Instalação 💻
O primeiro passo para instalar o projeto em sua máquina é clonar esse repositório, para isso você pode executar o seguinte comando:

```sh
  $ git clone https://github.com/jaovito/rental-car.git
```

Com isso o projeto será clonado na sua máquina, juntamente com todo o código. Agora você precisa configurar suas credenciais do **Firebase** no projeto, para isso é só você pode seguir essa [documentação](https://rnfirebase.io/), não precisa fazer as alterações no código, somente baixar as credenciais no local correto conforme orientado na DOC.

No caso do IOS talvez precise adicionar as credenciais do arquivo baixado nas URL Types do projeto no **XCode**, para isso basta abrir o XCode com o projeto e clicar 2x no projeto, após isso é só ir na aba **Info** e lá embaixo deve ter as **URL Types**. Basta expandir, clicar em adicionar e preencher a propriedade **URL Schemes** com o client_id do arquivo do Firebase baixado para IOS (deve ser feito o mesmo para o client ID reverso).

Após tudo configurado basta instalar as dependências com o comando abaixo

```sh
$ npm install # ou yarn install
```

Caso esteja vá utilizar o IOS antes de rodar o projeto deve abrir a pasta **ios** em seu terminal e rodar o comando:

```sh
$ pod install
```

Assim que tudo tiver concluido basta iniciar o projeto de acordo com a plataforma desejada, como demonstrado abaixo:

```sh
$ npm run android # ou ios
```

Caso utilize o **yarn** só utilizar o comando abaixo:
```sh
$ yarn android # ou ios
```

Pronto 🎉🎉, agora é só desfrutar do app!
